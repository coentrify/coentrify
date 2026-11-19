#!/usr/bin/env python3
"""Appends one entry to the healing log, in a fixed shape, so the log can be counted and read as a whole.

usage: healing-append.py <log.md> <trigger> <change> [<commit>]

The entry reads `- <date> - <trigger> - <change> - <commit>`, with today's date. The log is created
with its title when it does not exist. Refuses an empty trigger or change, a ` - ` inside one, which
would break the shape, and a semicolon, since one entry holds one change.
"""
import datetime
import subprocess
import sys
from pathlib import Path

TITLE = "# Healing Log\n\nEvery change automatic healing made to the harness, until the director rules on it.\n"
SEPARATOR = " - "


def main() -> int:
    if len(sys.argv) not in (4, 5):
        print(__doc__.strip().splitlines()[2], file=sys.stderr)
        return 2
    log, trigger, change = Path(sys.argv[1]), sys.argv[2].strip(), sys.argv[3].strip()
    commit = sys.argv[4].strip() if len(sys.argv) == 5 else ""
    if not commit:
        result = subprocess.run(["git", "rev-parse", "--short", "HEAD"], capture_output=True, text=True)
        commit = result.stdout.strip()
    for name, value in (("trigger", trigger), ("change", change)):
        if not value:
            print(f"refused: the {name} is empty", file=sys.stderr)
            return 3
        if SEPARATOR in value:
            print(f"refused: the {name} holds ' - ', which breaks the shape of an entry", file=sys.stderr)
            return 3
        if ";" in value:
            print(f"refused: the {name} holds a semicolon, and one entry holds one change", file=sys.stderr)
            return 3
    entry = SEPARATOR.join(part for part in (f"- {datetime.date.today().isoformat()}", trigger, change, commit) if part)
    text = log.read_text() if log.is_file() else TITLE
    log.parent.mkdir(parents=True, exist_ok=True)
    log.write_text(text.rstrip("\n") + "\n\n" + entry + "\n" if text == TITLE else text.rstrip("\n") + "\n" + entry + "\n")
    print(entry)
    return 0


sys.exit(main())
