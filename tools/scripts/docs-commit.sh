#!/bin/zsh
# A conductor's docs commit, gated: stages the paths, runs hygiene, commits only on its exit code 0.
# usage: docs-commit.sh "<message>" <path>...
# Refuses mid-pick, off main, or with no paths.
cd "${PICK_REPO:-$PWD}" || exit 2
[[ -e .git/CHERRY_PICK_HEAD ]] && { echo "refused: a pick is in progress"; exit 3; }
[[ "$(git branch --show-current)" == main ]] || { echo "refused: not on main"; exit 3; }
[[ $# -ge 2 ]] || { echo "usage: docs-commit.sh <message> <path>..."; exit 2; }
msg="$1"; shift
log="${TMPDIR:-/tmp}/docs-commit-hygiene.log"
npm run test:hygiene >| "$log" 2>&1; rc=$?
if [[ $rc -ne 0 ]]; then
  echo "refused: hygiene exit $rc, nothing committed"; grep -E 'FAIL|×' "$log" | head -10; exit 4
fi
git add -- "$@" || exit 5
git commit -q -m "$msg" || exit 6
git log --oneline -1
