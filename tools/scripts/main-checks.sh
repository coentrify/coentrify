#!/usr/bin/env bash
# The checks on the main branch, gated: refuses mid-pick or while a pick runs, then runs each named
# npm script and prints its exit code. A failed check leaves its output in a log, and the script
# exits with the last failure.
# usage: main-checks.sh <npm-script>...   such as: main-checks.sh test:hygiene test:types build:wiki
# PICK_REPO names the repository (the current folder by default).
set -u
cd "${PICK_REPO:-$PWD}" || exit 2
gitdir="$(git rev-parse --git-dir)" || exit 2
[[ -e "$gitdir/CHERRY_PICK_HEAD" ]] && { echo "refused: a pick is in progress, the tree is half merged"; exit 3; }
[[ -d "$gitdir/pick.lock" ]] && { echo "refused: a pick is running beside these checks"; exit 3; }
[[ $# -ge 1 ]] || { echo "refused: no checks named; usage: main-checks.sh <npm-script>..."; exit 2; }
rc=0
for check in "$@"; do
  log="${TMPDIR:-/tmp}/main-checks-${check//[^A-Za-z0-9_-]/-}.log"
  npm run --silent "$check" >|"$log" 2>&1
  status=$?
  if [[ $status -eq 0 ]]; then
    echo "$check 0"
  else
    echo "$check $status, see $log"
    rc=$status
  fi
done
exit $rc
