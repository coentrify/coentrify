# Verify Control Before Rename

When asked to rename a UI label or control, first trace it to its handler and the field or action it drives. If the proposed name names a different concept than what the control actually does, challenge it before making any edit.

## Why

A rename executed first can name a concept the control does not drive, often one with a field of its own already, and flagging the collision afterward costs extra rename rounds.

## How to apply

- A label is a claim about behavior: verify it against the click handler and the data field it mutates, and if it's wrong, ask first.

## Related

- [Honest Assessments](honest-assessments.md)
