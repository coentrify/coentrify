#!/usr/bin/env bash
# A docs commit, gated: runs each named npm script, then stages the paths and commits, only when
# every check exits 0.
# usage: docs-commit.sh --check <npm-script> [--check <npm-script>]... "<message>" <path>...
# Refuses mid-pick, off the main branch, without a check, or without a path.
# PICK_REPO names the repository (the current folder by default), PICK_BRANCH the main branch (main).
set -u
cd "${PICK_REPO:-$PWD}" || exit 2
branch="${PICK_BRANCH:-main}"
gitdir="$(git rev-parse --git-dir)" || exit 2
usage='usage: docs-commit.sh --check <npm-script> [--check <npm-script>]... "<message>" <path>...'
checks=()
while [[ $# -ge 2 && "$1" == --check ]]; do
  checks+=("$2")
  shift 2
done
[[ ${#checks[@]} -ge 1 && $# -ge 2 ]] || { echo "$usage"; exit 2; }
[[ -e "$gitdir/CHERRY_PICK_HEAD" ]] && { echo "refused: a pick is in progress"; exit 3; }
[[ "$(git branch --show-current)" == "$branch" ]] || { echo "refused: not on $branch"; exit 3; }
message="$1"
shift
for check in "${checks[@]}"; do
  log="${TMPDIR:-/tmp}/docs-commit-${check//[^A-Za-z0-9_-]/-}.log"
  npm run --silent "$check" >|"$log" 2>&1
  status=$?
  [[ $status -eq 0 ]] || { echo "refused: $check exit $status, nothing committed, see $log"; exit 4; }
done
git add -- "$@" || exit 5
git commit -q -m "$message" || exit 6
git log --oneline -1
