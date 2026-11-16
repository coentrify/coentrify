# Validation Errors Fire on Submit

Inline validation errors (max-length, required, format) should appear when the user attempts to submit an invalid input, whatever the gesture. The submit handler reveals the error; a blur event alone is not enough.

## Why

With blur-only reveal, a user who types past the limit and presses Enter or clicks the send button without defocusing sees no error. Enter routes into a handler that silently bails when invalid, and a send button disabled on `!valid` consumes the click with nothing. Either way the action gets no feedback, and the user is left wondering why nothing happened.

## How to Apply

- Submit handler: on invalid and non-empty input, call `markAsTouched()`, then return without emitting.
- Submit button: disable on empty, loading or locked, never on `!formControl.valid`; it stays clickable whenever there is content so the handler can mark touched.
- Tests: bracket the validation (error not visible after fill, visible after the submit gesture). One gesture is enough per [Gestures In Tests](../tests/gestures-in-tests.md).

## Related

- [UI Component Design](ui-component-design.md)
- [UI Copy in Template](../angular/ui-copy-in-template.md)
