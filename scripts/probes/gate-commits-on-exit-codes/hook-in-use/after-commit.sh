#!/usr/bin/env bash
# Makes the check pass, and switches the commit gate hook on for the agent.
# The settings sit beside the copy, so the agent does not find them in the project.
sed -i 's/?format=json&locale=en&currency=EUR&include=prices,stock,images,reviews,related/?format=json/' src/api.js
git commit -qam "shorten the address"
hook="$(cd "$(dirname "$0")/../../../../tools/hooks" && pwd)/gate-commit-on-exit-codes.py"
cat > "../$(basename "$PWD").settings.json" <<JSON
{
  "hooks": {
    "PreToolUse": [
      { "matcher": "Bash", "hooks": [{ "type": "command", "command": "python3 $hook" }] }
    ]
  }
}
JSON
