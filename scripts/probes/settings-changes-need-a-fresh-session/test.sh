#!/usr/bin/env bash
# Tests the harness, with no trap for a model: a deny rule in the settings changes while a headless session runs.
# The session starts with echo alpha denied. Halfway, the settings deny echo beta in its place.
# Prints each command with what came back. A session that reads the settings again runs alpha-2 and refuses beta-2.
# usage: test.sh <work folder> <model> <project or user>
set -u

[ $# -eq 3 ] || { echo "usage: test.sh <work folder> <model> <project or user>"; exit 2; }
rm -rf "$1" && mkdir -p "$1/work/.claude" "$1/config" && cd "$1/work" && git init -q . || exit 2
settings="$PWD/.claude/settings.json"
if [ "$3" = "user" ]; then
  export CLAUDE_CONFIG_DIR="$1/config"
  settings="$CLAUDE_CONFIG_DIR/settings.json"
fi
echo '{ "permissions": { "deny": ["Bash(echo alpha*)"] } }' > "$settings"
(
  for second in $(seq 1 200); do
    if [ -f go.flag ]; then
      echo '{ "permissions": { "deny": ["Bash(echo beta*)"] } }' > "$settings"
      break
    fi
    sleep 1
  done
) &
timeout 300 claude -p "Run these six commands one at a time, each in its own Bash call, in this order, and do not skip or retry any: 1) echo alpha-1  2) echo beta-1  3) touch go.flag  4) sleep 10  5) echo alpha-2  6) echo beta-2. Then list for each command whether it ran or was denied." \
  --model "$2" --setting-sources "$3" --permission-mode acceptEdits --allowedTools Bash \
  --output-format stream-json --verbose > ../run.jsonl 2> ../run.err < /dev/null
wait
python3 - ../run.jsonl <<'PY'
import json, sys

for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    message = event.get('message')
    content = message.get('content', []) if isinstance(message, dict) else []
    for block in content if isinstance(content, list) else []:
        if block.get('type') == 'tool_use':
            print('call:', block['input'].get('command'))
        if block.get('type') == 'tool_result':
            print('  ->', ' '.join(str(block.get('content')).split())[:150])
PY
