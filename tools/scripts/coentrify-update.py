#!/usr/bin/env python3
"""Works out a coentrify update from the installed package, so the agent only handles what needs judgment.

usage: coentrify-update.py [--apply]

Run from the root of the project, once the package that coentrify.json names is raised to the new
version. The update runs from the project's version to the installed one. The script fetches the
project's version of the package from npm to compare, and keeps it in node_modules/.cache.

Without --apply it prints the plan. With --apply it also replaces every tracked standard that changed,
and its line in the module's overview, and writes the new version to coentrify.json. The rest stays with the agent, as the plan says:
- a customized standard that changed, to show the director
- a standard that was renamed, moved or removed at the source
- a new standard in a module the project adopted, worth considering
- the overview line of a customized standard that changed, to show the director
- a tool spec that changed, so the project rebuilds what it built from it
- the unlink script, once the replaced standards bring their links back
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
import tarfile
from pathlib import Path

FILE = "coentrify.json"
APPLY_FLAG = "--apply"
DEFAULT_PACKAGE = "coentrify"
NODE_MODULES = Path("node_modules")
CACHE = NODE_MODULES / ".cache"
PACKAGE_MANIFEST = "package.json"
SOURCE_FOLDER = "src"
TARBALL_ROOT = "package"
STANDARDS = "standards"
SPECS = "tools/specs"
INDEX_PAGE = "overview.md"
MODULE_SOURCE = "source"
TRACKED = "tracked"
FIRST_VERSION_ON_NPM = "0.1.0"
STANDARD_PATH = re.compile(r"^standards/([^/]+)/([^/]+)\.md$")
TITLE = re.compile(r"^# (.+)$", re.M)
OVERVIEW_LINE = re.compile(r"^- \[[^\]]+\]\(([^)/]+)\.md\)")


def version_key(version: str) -> tuple[int, ...]:
    return tuple(int(part) for part in version.split("."))


def is_safe(member: tarfile.TarInfo) -> bool:
    """A plain file or folder that stays inside the folder it is unpacked into."""
    path = Path(member.name)
    return (member.isfile() or member.isdir()) and not path.is_absolute() and ".." not in path.parts


def fetch(package: str, version: str) -> Path:
    """The source of the project's version, unpacked from npm into the cache once."""
    folder = CACHE / package / version
    source = folder / TARBALL_ROOT / SOURCE_FOLDER
    if source.is_dir():
        return source
    folder.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        ["npm", "pack", f"{package}@{version}", "--pack-destination", str(folder), "--json"],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        sys.exit(f"update: npm pack {package}@{version} failed: {result.stderr.strip()}")
    with tarfile.open(folder / json.loads(result.stdout)[0]["filename"]) as tarball:
        if hasattr(tarfile, "data_filter"):
            tarball.extractall(folder, filter="data")
        else:
            tarball.extractall(folder, members=[member for member in tarball.getmembers() if is_safe(member)])
    if not source.is_dir():
        sys.exit(f"update: {package}@{version} holds no source to compare with.")
    return source


def changes(old: Path, new: Path, folder: str, *options: str) -> list[str]:
    """Rows of git diff between two copies of a folder, with paths relative to the source."""
    result = subprocess.run(
        ["git", "diff", "--no-index", "--no-color", "--no-ext-diff", *options, str(old / folder), str(new / folder)],
        capture_output=True,
        text=True,
    )
    if result.returncode > 1:
        sys.exit(f"update: git diff failed: {result.stderr.strip()}")
    prefixes = sorted((f"{old.as_posix()}/", f"{new.as_posix()}/"), key=len, reverse=True)

    def relative(path: str) -> str:
        return next((path.removeprefix(prefix) for prefix in prefixes if path.startswith(prefix)), path)

    return ["\t".join(relative(part) for part in row.split("\t")) for row in result.stdout.splitlines()]


def title(source: Path, path: str) -> str:
    match = TITLE.search((source / path).read_text())
    return match.group(1) if match else path


def overview_lines(text: str) -> dict[str, str]:
    lines = {}
    for line in text.splitlines():
        match = OVERVIEW_LINE.match(line)
        if match:
            lines[match.group(1)] = line
    return lines


def overview(source: Path, module: str) -> dict[str, str]:
    path = source / STANDARDS / module / INDEX_PAGE
    return overview_lines(path.read_text()) if path.exists() else {}


def standard_of(path: str) -> tuple[str, str] | None:
    match = STANDARD_PATH.match(path)
    if not match or match.group(2) + ".md" == INDEX_PAGE:
        return None
    return match.group(1), match.group(2)


def main() -> int:
    args = sys.argv[1:]
    if any(arg != APPLY_FLAG for arg in args):
        print(__doc__.strip().splitlines()[2], file=sys.stderr)
        return 2
    apply = APPLY_FLAG in args
    config = json.loads(Path(FILE).read_text())
    package = config.get("package", DEFAULT_PACKAGE)
    manifest = NODE_MODULES / package / PACKAGE_MANIFEST
    if not manifest.exists():
        sys.exit(f"update: {package} is not installed, raise it first: npm install --save-dev {package}@latest")
    start = config["version"]
    end = json.loads(manifest.read_text())["version"]
    if version_key(end) <= version_key(start):
        print(f"update: the project is at {start}, and the installed {package} {end} is no newer. Raise it first: npm install --save-dev {package}@latest")
        return 0
    if version_key(start) < version_key(FIRST_VERSION_ON_NPM):
        sys.exit(f"update: the project is at {start}, from before {FIRST_VERSION_ON_NPM}. It sets coentrify up again, the way the onboarding says for an earlier coentrify.")
    new = NODE_MODULES / package / SOURCE_FOLDER
    old = fetch(package, start)
    folder = Path(config["folders"][STANDARDS])
    modules = {
        name: {standard: state for standard, state in module.items() if standard != MODULE_SOURCE}
        for name, module in config["modules"].items()
        if MODULE_SOURCE not in module
    }
    own_source = sorted(name for name, module in config["modules"].items() if MODULE_SOURCE in module)

    changed, renamed, removed, added = [], [], [], []
    for row in changes(old, new, STANDARDS, "-M", "--name-status"):
        status, *paths = row.split("\t")
        old_standard = standard_of(paths[0])
        new_standard = standard_of(paths[-1])
        if status.startswith("R") and old_standard and new_standard:
            renamed.append((old_standard, new_standard))
        elif status == "M" and old_standard:
            changed.append(old_standard)
        elif status == "D" and old_standard:
            removed.append(old_standard)
        elif status == "A" and new_standard:
            added.append(new_standard)
    for new_standard in list(added):
        match = next((gone for gone in removed if gone[1] == new_standard[1]), None)
        if match:
            removed.remove(match)
            added.remove(new_standard)
            renamed.append((match, new_standard))

    def adopted(module: str, name: str) -> str | None:
        return modules.get(module, {}).get(name)

    replace = [(module, name) for module, name in changed if adopted(module, name) == TRACKED]
    report = [(module, name) for module, name in changed if adopted(module, name) not in (None, TRACKED)]
    moves = [(before, after) for before, after in renamed if adopted(*before)]
    gone = [before for before in removed if adopted(*before)]
    fresh = [after for after in added if after[0] in modules]

    line_replace, line_report = [], []
    for module in sorted(modules):
        before, after = overview(old, module), overview(new, module)
        for name, line in after.items():
            if name in before and before[name] != line and adopted(module, name):
                (line_replace if adopted(module, name) == TRACKED else line_report).append((module, name, line))
    specs = changes(old, new, SPECS, "--name-only")

    def diff(path: str) -> str:
        return f"git diff --no-index {old.as_posix()}/{path} {new.as_posix()}/{path}"

    print(f"# Update from {start} to {end}\n")
    print(f"Replace, tracked and changed: {len(replace)}")
    for module, name in replace:
        print(f"- {module}/{name}")
    print(f"\nShow the director, customized and changed: {len(report)}")
    for module, name in report:
        print(f"- {module}/{name}: {diff(f'{STANDARDS}/{module}/{name}.md')}")
    print(f"\nRenamed or moved at the source: {len(moves)}")
    for (old_module, old_name), (new_module, new_name) in moves:
        print(f"- {old_module}/{old_name} is now {new_module}/{new_name}, {title(new, f'{STANDARDS}/{new_module}/{new_name}.md')}")
    print(f"\nRemoved at the source: {len(gone)}")
    for module, name in gone:
        print(f"- {module}/{name}")
    print(f"\nNew in an adopted module, worth considering: {len(fresh)}")
    for module, name in fresh:
        print(f"- {module}/{name}, {title(new, f'{STANDARDS}/{module}/{name}.md')}")
    print(f"\nOverview lines, tracked and changed: {len(line_replace)}")
    for module, name, _ in line_replace:
        print(f"- {module}/{name}")
    print(f"\nOverview lines to show the director, customized and changed: {len(line_report)}")
    for module, name, _ in line_report:
        print(f"- {module}/{name}: {diff(f'{STANDARDS}/{module}/{INDEX_PAGE}')}")
    print(f"\nSpecs that changed, rebuild what the project built from them: {len(specs)}")
    for spec in specs:
        print(f"- {spec}: {diff(spec)}")
    if own_source:
        print(f"\nModules with a source of their own, left out: {', '.join(own_source)}")

    if apply:
        for module, name in replace:
            target = folder / module / f"{name}.md"
            target.write_text((new / STANDARDS / module / f"{name}.md").read_text())
        missing = []
        for module, name, line in line_replace:
            target = folder / module / INDEX_PAGE
            text = target.read_text() if target.exists() else ""
            current = overview_lines(text).get(name)
            if current is None:
                missing.append(f"{module}/{name}")
                continue
            target.write_text(text.replace(current, line, 1))
        config["version"] = end
        Path(FILE).write_text(json.dumps(config, indent=2) + "\n")
        print(f"\nReplaced {len(replace)} standards and {len(line_replace) - len(missing)} overview lines, and wrote {end} to {FILE}.")
        for standard in missing:
            print(f"- The overview line of {standard} was not found, update it by hand.")
        print("Run the unlink script next.")
    return 0


sys.exit(main())
