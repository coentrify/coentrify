#!/usr/bin/env python3
"""Works out a coentrify update from git, so the agent only handles what needs judgment.

usage: coentrify-update.py <source> [--to <version>] [--apply]

Run from the root of the project. <source> is a local clone of the repository that coentrify.json
names as its source, with its tags fetched. The update runs from the project's version to the latest
version tag, or to --to.

Without --apply it prints the plan. With --apply it also replaces every tracked standard that changed,
and writes the new version to coentrify.json. The rest stays with the agent, as the plan says:
- a customized standard that changed, to show the director
- a standard that was renamed, moved or removed at the source
- a new standard in a module the project adopted, worth considering
- the unlink script, once the replaced standards bring their links back
"""
import json
import re
import subprocess
import sys
from pathlib import Path

FILE = "coentrify.json"
APPLY_FLAG = "--apply"
TO_FLAG = "--to"
TAG_PREFIX = "v"
STANDARDS = "standards"
INDEX_PAGE = "overview.md"
MODULE_SOURCE = "source"
TRACKED = "tracked"
STANDARD_PATH = re.compile(r"^standards/([^/]+)/([^/]+)\.md$")
TITLE = re.compile(r"^# (.+)$", re.M)


def git(source: Path, *args: str) -> str:
    result = subprocess.run(["git", "-C", str(source), *args], capture_output=True, text=True)
    if result.returncode != 0:
        sys.exit(f"update: git {' '.join(args)} failed: {result.stderr.strip()}")
    return result.stdout


def version_key(tag: str) -> tuple[int, ...]:
    return tuple(int(part) for part in tag.removeprefix(TAG_PREFIX).split("."))


def latest_tag(source: Path) -> str:
    tags = [tag for tag in git(source, "tag", "--list", f"{TAG_PREFIX}*").split() if re.match(r"^v\d+\.\d+\.\d+$", tag)]
    if not tags:
        sys.exit("update: the source has no version tags, fetch them first")
    return max(tags, key=version_key)


def title_at(source: Path, tag: str, path: str) -> str:
    match = TITLE.search(git(source, "show", f"{tag}:{path}"))
    return match.group(1) if match else path


def standard_of(path: str) -> tuple[str, str] | None:
    match = STANDARD_PATH.match(path)
    if not match or match.group(2) + ".md" == INDEX_PAGE:
        return None
    return match.group(1), match.group(2)


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0].startswith("--"):
        print(__doc__.strip().splitlines()[2], file=sys.stderr)
        return 2
    source = Path(args[0])
    apply = APPLY_FLAG in args
    config = json.loads(Path(FILE).read_text())
    start = TAG_PREFIX + config["version"]
    end = TAG_PREFIX + args[args.index(TO_FLAG) + 1] if TO_FLAG in args else latest_tag(source)
    if version_key(end) <= version_key(start):
        print(f"update: the project is at {start}, and {end} is no newer")
        return 0
    folder = Path(config["folders"][STANDARDS])
    modules = {
        name: {standard: state for standard, state in module.items() if standard != MODULE_SOURCE}
        for name, module in config["modules"].items()
        if MODULE_SOURCE not in module
    }
    own_source = sorted(name for name, module in config["modules"].items() if MODULE_SOURCE in module)

    changed, renamed, removed, added = [], [], [], []
    for row in git(source, "diff", "-M", "--name-status", start, end, "--", STANDARDS).splitlines():
        status, *paths = row.split("\t")
        old = standard_of(paths[0])
        new = standard_of(paths[-1])
        if status.startswith("R") and old and new:
            renamed.append((old, new))
        elif status == "M" and old:
            changed.append(old)
        elif status == "D" and old:
            removed.append(old)
        elif status == "A" and new:
            added.append(new)
    for new in list(added):
        match = next((old for old in removed if old[1] == new[1]), None)
        if match:
            removed.remove(match)
            added.remove(new)
            renamed.append((match, new))

    def adopted(module: str, name: str) -> str | None:
        return modules.get(module, {}).get(name)

    replace = [(module, name) for module, name in changed if adopted(module, name) == TRACKED]
    report = [(module, name) for module, name in changed if adopted(module, name) not in (None, TRACKED)]
    moves = [(old, new) for old, new in renamed if adopted(*old)]
    gone = [old for old in removed if adopted(*old)]
    fresh = [new for new in added if new[0] in modules]

    print(f"# Update from {start} to {end}\n")
    print(f"Replace, tracked and changed: {len(replace)}")
    for module, name in replace:
        print(f"- {module}/{name}")
    print(f"\nShow the director, customized and changed: {len(report)}")
    for module, name in report:
        print(f"- {module}/{name}: git -C {source} diff {start} {end} -- {STANDARDS}/{module}/{name}.md")
    print(f"\nRenamed or moved at the source: {len(moves)}")
    for (old_module, old_name), (new_module, new_name) in moves:
        print(f"- {old_module}/{old_name} is now {new_module}/{new_name}, {title_at(source, end, f'{STANDARDS}/{new_module}/{new_name}.md')}")
    print(f"\nRemoved at the source: {len(gone)}")
    for module, name in gone:
        print(f"- {module}/{name}")
    print(f"\nNew in an adopted module, worth considering: {len(fresh)}")
    for module, name in fresh:
        print(f"- {module}/{name}, {title_at(source, end, f'{STANDARDS}/{module}/{name}.md')}")
    if own_source:
        print(f"\nModules with a source of their own, left out: {', '.join(own_source)}")

    if apply:
        for module, name in replace:
            target = folder / module / f"{name}.md"
            target.write_text(git(source, "show", f"{end}:{STANDARDS}/{module}/{name}.md"))
        config["version"] = end.removeprefix(TAG_PREFIX)
        Path(FILE).write_text(json.dumps(config, indent=2) + "\n")
        print(f"\nReplaced {len(replace)} standards and wrote {config['version']} to {FILE}. Run the unlink script next.")
    return 0


sys.exit(main())
