# Escape Hatch Comments

An escape hatch is a deliberate deviation from a safe default or framework norm - `ViewEncapsulation.None`, `ts-ignore`, `eslint-disable`, a forced cast, a `!` non-null assertion, a manual DOM reach. Two rules apply, in order.

## Why

A comment keeps every session from flagging the hatch or "fixing" it.

## Confirm It's Needed First

Before keeping an escape hatch, confirm it's required. Many are copied along without a need or left over from an earlier approach and disappear once the real cause is addressed. Prefer removing the hatch over documenting it.

## If It Stays, Comment Why

An escape hatch that survives gets a short inline comment stating why. Without it the next reader either deletes it - reintroducing whatever it guarded against - or misreads it as accidental. This is one of the few "why" comments worth keeping: it documents a non-obvious local deviation, not what the code does.

## Related

- [No Describe-What Comments](no-describe-what-comments.md)
- [Note Issues](../behavior/note-issues.md)
