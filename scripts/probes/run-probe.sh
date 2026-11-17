#!/usr/bin/env bash
# Runs one probe: a headless agent works on a copy of a fixture, with or without a rule.
# usage: run-probe.sh <probe folder> <output folder> <label> <model> <effort or -> [rule file]
# The probe folder holds a prompt.txt and a fixture folder. Without one, the fixture of the folder above is used.
# A fixture can be a link to the fixture of another probe. An after-commit.sh then lays the files of its own trap over the copy.
# An after-commit.sh in the probe folder runs in the copy after the fixture is committed,
# to leave uncommitted changes in the tree.
# Where that script writes <label>.settings.json beside the copy, those settings load too, so a hook can run unseen.
# A prompt-2.txt in the probe folder is sent as a second turn of the same conversation, a prompt-3.txt as a third, and so on.
# A turn that holds only /compact compacts the conversation.
# A check.sh in the probe folder runs in the copy after the agent is done, and prints what it measures.
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
fixture="$probe/fixture"
[ -d "$fixture" ] || fixture="$probe/../fixture"
cp -rL "$fixture" "$work"
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
[ -f "$output/$label.settings.json" ] && arguments+=(--settings "$output/$label.settings.json")

timeout 600 claude "${arguments[@]}" > "$output/$label.jsonl" 2> "$output/$label.err"
echo "$label exit $?"
transcripts=("$output/$label.jsonl")
turn=2
while [ -f "$probe/prompt-$turn.txt" ]; do
  arguments[1]="$(cat "$probe/prompt-$turn.txt")"
  timeout 600 claude "${arguments[@]}" --continue > "$output/$label.turn-$turn.jsonl" 2>> "$output/$label.err"
  echo "$label turn $turn exit $?"
  transcripts+=("$output/$label.turn-$turn.jsonl")
  turn=$((turn + 1))
done
[ -f "$probe/check.sh" ] && bash "$probe/check.sh" "${transcripts[@]}" > "$output/$label.check" 2>&1
exit 0
