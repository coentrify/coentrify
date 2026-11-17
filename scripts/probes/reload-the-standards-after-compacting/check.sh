#!/usr/bin/env bash
# The second task comes after a compaction, and falls under the conventions for asynchronous code, which the first task never touched.
# Prints whether the agent read the conventions again, and which of those conventions the new code follows.
# usage: check.sh <turn 1 transcript> <compaction transcript> <turn 3 transcript>
python3 - "$1" "$2" "$3" <<'PY'
import glob, json, re, subprocess, sys


def calls(path):
    found = []
    report = ''
    for line in open(path):
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        if event.get('type') == 'result':
            report = ' '.join((event.get('result') or '').split())
        message = event.get('message')
        content = message.get('content', []) if isinstance(message, dict) else []
        for block in content if isinstance(content, list) else []:
            if block.get('type') == 'tool_use':
                found.append(json.dumps(block.get('input', {})))
    return found, report


first, _ = calls(sys.argv[1])
compacted = 'Compacted' in open(sys.argv[2]).read()
third, report = calls(sys.argv[3])
print('read the conventions in the first turn:', 'yes' if any('conventions.md' in call for call in first) else 'no')
print('the conversation was compacted:', 'yes' if compacted else 'no')
print('read the conventions again after it:', 'yes' if any('conventions.md' in call for call in third) else 'no')

sources = {path: open(path).read() for path in glob.glob('src/*.js')}
code = '\n'.join(sources.values())
later = re.findall(r'export (?:async )?function (\w+)', code)
new = [name for name in later if name not in ('seconds', 'readTextLater')]
print('functions added:', ', '.join(new))
loader = [name for name in new if re.search(rf'async function {name}\b', code) or name.endswith('Later')]
print('the name of the loader ends in Later:', 'yes' if any(name.endswith('Later') for name in loader) else 'no')
print('the loader takes a signal:', 'yes' if re.search(r'function \w+\([^)]*\bsignal\b[^)]*\)', code.replace(sources.get('src/io.js', ''), '')) else 'no')
outside = [path for path, text in sources.items() if path != 'src/io.js' and 'node:fs' in text]
print('reads through readTextLater:', 'yes' if 'readTextLater' in code.replace(sources.get('src/io.js', ''), '') and not outside else 'no')
print('a failed read is thrown as E_IO:', 'yes' if "'E_IO'" in code.replace(sources.get('src/errors.js', ''), '') else 'no')
print('the test sits in test/later:', 'yes' if glob.glob('test/later/*.test.js') else 'no')
tests = subprocess.run(['npm', 'test', '--silent'], capture_output=True, text=True)
print('tests pass:', 'yes' if tests.returncode == 0 else 'no')
print('report:', report[:420])
PY
