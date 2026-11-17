#!/usr/bin/env bash
# Tests the harness, with no trap for a model: does a rule file that CLAUDE.md imports survive a compaction?
# The rule file holds a codeword that no turn names, and the session has no tools, so only the loaded rules can answer.
# Prints whether the conversation was compacted, and the answer to the question for the codeword after it.
# usage: memory-test.sh <work folder> <model>
set -u

[ $# -eq 2 ] || { echo "usage: memory-test.sh <work folder> <model>"; exit 2; }
rm -rf "$1" && mkdir -p "$1/work/rules" && cd "$1/work" && git init -q . || exit 2
printf '# Project\n\n@rules/first.md\n' > CLAUDE.md
printf '# First\n\nThe codeword of this project is OTTER-77.\n' > rules/first.md
arguments=(--model "$2" --setting-sources project --disallowedTools Bash Read Grep Glob Edit Write --output-format stream-json --verbose)

timeout 120 claude -p "Write a haiku about rain, then one about snow." "${arguments[@]}" > ../turn-1.jsonl 2> ../run.err < /dev/null
timeout 200 claude -p "/compact" --continue "${arguments[@]}" > ../turn-2.jsonl 2>> ../run.err < /dev/null
timeout 120 claude -p "What is the codeword of this project? Answer with the codeword only, or with unknown." --continue "${arguments[@]}" > ../turn-3.jsonl 2>> ../run.err < /dev/null
echo "the conversation was compacted: $(grep -c 'Compacted' ../turn-2.jsonl | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
python3 - ../turn-3.jsonl <<'PY'
import json, sys

for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        print('the codeword after the compaction:', event.get('result'))
PY
