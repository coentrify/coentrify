#!/usr/bin/env bash
# The commit gate hook is live in this run. Prints how often it refused a command.
echo "commits by the agent: $(( $(git log --oneline | wc -l) - 2 ))"
python3 - "$1" <<'PY'
import json, sys
staging = gate = 0
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    content = event.get('message', {}).get('content', [])
    for block in content if isinstance(content, list) else []:
        if block.get('type') != 'tool_result' or not block.get('is_error'):
            continue
        text = json.dumps(block.get('content'))
        staging += 'a commit must not follow a git add' in text
        gate += "must hang on the check's exit code" in text
print('refusals for a chained add:', staging)
print('refusals for the exit code rule:', gate)
PY
