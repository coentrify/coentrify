#!/bin/zsh
# The conductor's checks on main, gated: refuses mid-pick or while another pick runs, then runs the named checks by exit code.
# usage: main-checks.sh hygiene [types] [unit] [wiki] [devbuild]
cd "${PICK_REPO:-$PWD}" || exit 2
[[ -e .git/CHERRY_PICK_HEAD ]] && { echo "refused: a pick is in progress, the tree is half merged"; exit 3; }
[[ -d .git/pick.lock ]] && { echo "refused: a pick is running beside these checks"; exit 3; }
[[ $# -ge 1 ]] || { echo "refused: no checks named; usage: main-checks.sh hygiene [types] [unit] [wiki] [devbuild]"; exit 2; }
rc=0
for c in "$@"; do
  case $c in
    hygiene) npm run test:hygiene >/dev/null 2>&1 ;;
    types) npm run test:types >/dev/null 2>&1 ;;
    unit) npm run test:unit >/dev/null 2>&1 ;;
    wiki) npm run build:wiki >/dev/null 2>&1 ;;
    devbuild) node_modules/.bin/ng build --configuration development >/dev/null 2>&1 ;;
    *) echo "unknown check $c"; exit 2 ;;
  esac
  r=$?; echo "$c $r"; [[ $r -ne 0 ]] && rc=$r
done
exit $rc
