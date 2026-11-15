#!/bin/zsh
# One guarded cherry-pick onto main: refuses mid-pick, on a dirty tree, off main, or while another pick runs
cd "${PICK_REPO:-$PWD}" || exit 2
lock=.git/pick.lock
mkdir "$lock" 2>/dev/null || { echo "refused: another pick is running (parallel picks are not allowed; $lock)"; exit 3; }
trap 'rmdir "$lock" 2>/dev/null' EXIT
[[ -e .git/CHERRY_PICK_HEAD ]] && { echo "refused: a pick is in progress"; exit 3; }
[[ -n "$(git status --porcelain --untracked-files=no)" ]] && { echo "refused: tracked changes"; exit 3; }
[[ "$(git branch --show-current)" == main ]] || { echo "refused: not on main"; exit 3; }
[[ $# -eq 1 ]] || { echo "usage: pick.sh <sha>"; exit 2; }
git cherry-pick "$1"
rc=$?
# Hold the lock briefly so a parallel call issued in the same batch still sees it
sleep 2
exit $rc
