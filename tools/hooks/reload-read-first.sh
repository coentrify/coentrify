#!/usr/bin/env bash
# SessionStart hook with the matcher "compact": prints the Read First standards,
# so an agent has them in context again after a compaction.
set -u

index="${COENTRIFY_INDEX:-standards/overview.md}"
[ -f "$index" ] || exit 0
folder="$(dirname "$index")"

awk '/^## Read First/{on=1; next} /^## /{on=0} on' "$index" \
  | grep -oE '\]\([^)]+\.md\)' \
  | sed -E 's/^\]\(//; s/\)$//' \
  | while read -r file; do
      [ -f "$folder/$file" ] || continue
      printf '\n'
      cat "$folder/$file"
    done
exit 0
