# Escape Hatch Comments

An escape hatch is a deliberate deviation from a safe default or framework norm - `ViewEncapsulation.None`, `ts-ignore`, `eslint-disable`, a forced cast, a `!` non-null assertion, a manual DOM reach. Two rules apply, in order.

## Why

Many escape hatches are cargo-culted or left over from an earlier approach and disappear once the real cause is addressed. Without a comment, the next reader either deletes one that stays - reintroducing whatever it guarded against - or misreads it as accidental.

## Confirm It's Needed First

Before keeping an escape hatch, confirm it's actually required. Prefer removing the hatch over documenting it.

## If It Stays, Comment Why

An escape hatch that survives gets a short inline comment stating why. This is one of the few "why" comments worth keeping: it documents a non-obvious local deviation, not what the code does.

## Related

- [No Describe-What Comments](no-describe-what-comments.md)
- [Note Issues](../behavior/note-issues.md)
