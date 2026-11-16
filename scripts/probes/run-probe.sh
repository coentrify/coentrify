#!/usr/bin/env bash
# Runs one probe: a headless agent works on a copy of a fixture, with or without a rule.
# usage: run-probe.sh <probe folder> <output folder> <label> <model> <effort or -> [rule file]
# The probe folder holds a fixture folder and a prompt.txt.
# An after-commit.sh in the probe folder runs in the copy after the fixture is committed,
# to leave uncommitted changes in the tree.
# Without a rule file no settings load, so no standard reaches the agent.
# With a rule file, the rule becomes the CLAUDE.md of the copy, and only project sources load.
set -u

[ $# -ge 5 ] || { echo "usage: run-probe.sh <probe folder> <output folder> <label> <model> <effort or -> [rule file]"; exit 2; }
probe="$(cd "$1" && pwd)" || exit 2
mkdir -p "$2" && output="$(cd "$2" && pwd)" || exit 2
label="$3"; model="$4"; effort="$5"
rule=""; [ $# -ge 6 ] && rule="$(cd "$(dirname "$6")" && pwd)/$(basename "$6")"

work="$output/$label"
rm -rf "$work"
cp -r "$probe/fixture" "$work"
cd "$work" || exit 2

sources=""
if [ -n "$rule" ]; then
  cp "$rule" CLAUDE.md
  sources="project"
fi
git init -q . && git add -A && git -c user.name=probe -c user.email=probe@example.com commit -qm "fixture"
git config user.name probe && git config user.email probe@example.com
[ -f "$probe/after-commit.sh" ] && bash "$probe/after-commit.sh"

arguments=(-p "$(cat "$probe/prompt.txt")" --model "$model" --setting-sources "$sources"
  --output-format stream-json --verbose --permission-mode acceptEdits
  --allowedTools Bash Read Edit Write Glob Grep)
[ "$effort" != "-" ] && arguments+=(--effort "$effort")

timeout 600 claude "${arguments[@]}" > "$output/$label.jsonl" 2> "$output/$label.err"
echo "$label exit $?"
