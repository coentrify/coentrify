#!/usr/bin/env python3
"""Checks that a project's coentrify.json is true. Run from the root of the project.

usage: check-coentrify-json.py [--staged]

Fails when the file does not parse, when a folder it names is missing, when a
standard it lists is not on disk, or when a state is not tracked or customized.

With --staged, as a pre-commit step, it also refuses a commit that changes a
tracked standard by hand. The commit passes once the standard's state is
customized, or when the commit changes the version, as an update does.
"""
import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Optional

FILE = "coentrify.json"
STAGED_FLAG = "--staged"
TRACKED = "tracked"
CUSTOMIZED = "customized"
STATES = (TRACKED, CUSTOMIZED)
FOLDERS = ("docs", "standards")
STANDARDS = "standards"
MODULE_SOURCE = "source"
VERSION = re.compile(r"^\d+\.\d+\.\d+$")
MARKDOWN_EXTENSION = ".md"
DECISIONS = "decisions.md"


def git(*args: str) -> Optional[str]:
    result = subprocess.run(["git", *args], capture_output=True, text=True)
    return result.stdout if result.returncode == 0 else None


def parse(text: Optional[str]) -> Optional[dict]:
    if text is None:
        return None
    try:
        config = json.loads(text)
    except json.JSONDecodeError:
        return None
    return config if isinstance(config, dict) else None


def standards_of(module: dict) -> dict:
    return {name: state for name, state in module.items() if name != MODULE_SOURCE}


def shape_errors(config: dict) -> list[str]:
    errors: list[str] = []
    if not isinstance(config.get("source"), str) or not config["source"]:
        errors.append("source is missing")
    if not isinstance(config.get("version"), str) or not VERSION.match(config["version"]):
        errors.append("version is not a version, such as 0.0.1")
    folders = config.get("folders")
    for folder in FOLDERS:
        if not isinstance(folders, dict) or not isinstance(folders.get(folder), str):
            errors.append(f"folders.{folder} is missing")
    if "contributor" in config and not isinstance(config["contributor"], bool):
        errors.append("contributor is not true or false")
    modules = config.get("modules")
    if not isinstance(modules, dict):
        return [*errors, "modules is missing"]
    for name, module in modules.items():
        if not isinstance(module, dict):
            errors.append(f"module {name} is not a list of standards")
            continue
        for standard, state in standards_of(module).items():
            if state not in STATES:
                errors.append(f"{name}/{standard} has the state {state!r}, and a state is tracked or customized")
    return errors


def disk_errors(config: dict) -> list[str]:
    errors: list[str] = []
    for folder in FOLDERS:
        if not Path(config["folders"][folder]).is_dir():
            errors.append(f"the {folder} folder {config['folders'][folder]} does not exist")
    for name, module in config["modules"].items():
        for standard in standards_of(module):
            path = Path(config["folders"][STANDARDS], name, standard + MARKDOWN_EXTENSION)
            if not path.is_file():
                errors.append(f"{name}/{standard} is listed, and {path} does not exist")
    return errors


def staged_errors() -> list[str]:
    staged = parse(git("show", f":{FILE}"))
    if staged is None or shape_errors(staged):
        return [f"the staged {FILE} is missing or broken"]
    committed = parse(git("show", f"HEAD:{FILE}"))
    if committed is None or committed.get("version") != staged["version"]:
        return []
    changed = git("diff", "--cached", "--name-only", "--diff-filter=M") or ""
    folder = staged["folders"][STANDARDS]
    errors: list[str] = []
    for line in changed.splitlines():
        path = Path(line)
        if path.suffix != MARKDOWN_EXTENSION or path.parent.parent != Path(folder):
            continue
        module = staged["modules"].get(path.parent.name, {})
        if module.get(path.stem) == TRACKED:
            errors.append(
                f"{line} is tracked and was changed by hand. Set its state to customized "
                f"and give the reason in {folder}/{DECISIONS}, or leave the standard as it was"
            )
    return errors


def main() -> int:
    if not Path(FILE).is_file():
        print(f"{FILE}: not found, run the check from the root of the project", file=sys.stderr)
        return 1
    config = parse(Path(FILE).read_text())
    if config is None:
        print(f"{FILE}: the file is not valid JSON with an object in it", file=sys.stderr)
        return 1
    errors = shape_errors(config)
    if not errors:
        errors = disk_errors(config)
    if not errors and STAGED_FLAG in sys.argv[1:]:
        errors = staged_errors()
    for error in errors:
        print(f"{FILE}: {error}", file=sys.stderr)
    return 1 if errors else 0


sys.exit(main())
