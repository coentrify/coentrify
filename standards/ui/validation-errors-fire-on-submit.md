# Validation Errors Fire on Submit

Inline validation errors (max-length, required, format) should appear when the user attempts to submit an invalid input, whatever the gesture. The submit handler reveals the error. A blur event alone is not enough.

## Why

Every attempt to submit gets feedback.

## How to Apply

- With a reveal on blur alone, Enter routes into a handler that bails without a word, and a send button disabled on `!valid` swallows the click.
- Submit handler: on invalid and non-empty input, call `markAsTouched()`, then return without emitting.
- Submit button: disable on empty, loading or locked, never on `!formControl.valid`. It stays clickable whenever there is content so the handler can mark touched.
- Tests: bracket the validation (error not visible after fill, visible after the submit gesture). One gesture is enough per [Gestures In Tests](../tests/gestures-in-tests.md).

## Related

- [UI Component Design](ui-component-design.md)
- [UI Copy in Template](../angular/ui-copy-in-template.md)
