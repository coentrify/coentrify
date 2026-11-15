#!/usr/bin/env bash
# PreToolUse hook on the app's wrap-up tool: the director answers in free text, so the
# wrap-up carries the recap alone. Refuses a call with an ask or actions field.
set -u

input="$(cat)"

carries="$(printf '%s' "$input" | jq -r '.tool_input | ((has("ask") and (.ask | tostring | length > 0)) or (has("actions") and ((.actions // []) | length > 0)))')"

[ "$carries" = "true" ] || exit 0

echo "Refused: the wrap-up carries the recap alone. Drop the ask and actions fields, send the recap, and ask any question in prose in the closing message (Free Text Replies, No Buttons)." >&2
exit 2
