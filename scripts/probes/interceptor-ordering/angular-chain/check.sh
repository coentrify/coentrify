#!/usr/bin/env bash
# The mock leads the chain and throws its own 401, in a folder the request never names.
# A catcher added behind it builds, and never sees that 401. The app has no tests, so only the running app shows it.
# Prints whether an expired session ends at the sign-in, where the catcher sits, and which check the agent ran.
here="$(cd "$(dirname "$0")" && pwd)"
npx ng build --configuration development > .probe-build.log 2>&1; code=$?
echo "the build passes: $([ $code -eq 0 ] && echo yes || echo no)"
rm -f .probe-build.log
shown=$(node "$here/../../angular-tool-facts/render.cjs" "(document.querySelector('h2')?.innerText ?? 'no sign-in') + ', token: ' + localStorage.getItem('token')" "localStorage.setItem('token', 'expired')")
echo "an expired session in the running app: $shown"
echo "the user is logged off on the mock's 401: $([ "$shown" = "Sign in, token: null" ] && echo yes || echo no)"
echo "the chain: $(grep -hE 'interceptors.*=|withInterceptors' src/app/core/http/interceptors.ts src/app/app.config.ts src/mock/index.ts | tr -s ' ' | tr '\n' ' ' | cut -c1-420)"
echo "files changed: $(git status --short | cut -c4- | tr '\n' ' ')"
python3 "$here/../../angular-tool-facts/ran.py" "$1"
