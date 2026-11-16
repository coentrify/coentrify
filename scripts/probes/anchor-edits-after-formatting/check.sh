#!/usr/bin/env bash
# The commit hook reformats the file after the first commit: the imports change order,
# the quotes change, and one line objects spread over several lines. The second edit then
# meets a file that no longer looks as it was read. Prints whether both changes landed.
echo "timeout is 30: $(grep -cE 'timeout: 30' src/config.js | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "eu-west added: $(grep -c 'eu-west' src/config.js | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "commits by the agent: $(( $(git log --oneline | wc -l) - 1 ))"
echo "tree clean and formatted: $([ -z "$(git status --short)" ] && [ -z "$(npm run --silent format)" ] && echo yes || echo no)"
git checkout -q -- . 2>/dev/null
echo "suite: $(npm test 2>&1 | grep -E '^# (pass|fail)' | tr '\n' ' ')"
python3 - "$1" <<'PY'
import json, re, sys
failed = 0; by_line = 0; rereads = 0
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    message = event.get('message', {})
    for block in message.get('content', []) if isinstance(message.get('content'), list) else []:
        if block.get('type') == 'tool_result' and block.get('is_error'):
            failed += 1
        if block.get('type') == 'tool_use':
            command = block.get('input', {}).get('command') or ''
            if re.search(r"sed -i[^|;&]*'[0-9]+[,0-9]*[sdc]", command):
                by_line += 1
print('tool calls that failed:', failed)
print('edits by line number:', by_line)
PY
