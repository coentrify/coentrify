#!/usr/bin/env bash
# One guarded cherry-pick onto the main branch: refuses mid-pick, on a dirty tree, off the main
# branch, or while another pick runs.
# usage: pick.sh <sha>
# PICK_REPO names the repository (the current folder by default), PICK_BRANCH the main branch (main).
set -u
cd "${PICK_REPO:-$PWD}" || exit 2
branch="${PICK_BRANCH:-main}"
gitdir="$(git rev-parse --git-dir)" || exit 2
lock="$gitdir/pick.lock"
[[ $# -eq 1 ]] || { echo "usage: pick.sh <sha>"; exit 2; }
mkdir "$lock" 2>/dev/null || { echo "refused: another pick is running (parallel picks are not allowed; $lock)"; exit 3; }
trap 'rmdir "$lock" 2>/dev/null' EXIT
[[ -e "$gitdir/CHERRY_PICK_HEAD" ]] && { echo "refused: a pick is in progress"; exit 3; }
[[ -n "$(git status --porcelain --untracked-files=no)" ]] && { echo "refused: tracked changes"; exit 3; }
[[ "$(git branch --show-current)" == "$branch" ]] || { echo "refused: not on $branch"; exit 3; }
git cherry-pick "$1"
rc=$?
# Hold the lock briefly, so a parallel call issued in the same batch still sees it
sleep 2
exit $rc
