# Validation Errors Fire On Submit

Inline validation errors (max-length, required, format) should appear when the user attempts to submit an invalid input, whatever the gesture. The submit handler reveals the error. A blur event alone is not enough.

## Why

Every attempt to submit gets feedback.

## How To Apply

- With a reveal on blur alone, Enter routes into a handler that bails without a word, and a send button disabled on `!valid` swallows the click.
- Submit handler: on invalid input, an empty required field included, call `markAsTouched()`, then return without emitting.
- Submit button: disable on loading or locked, never on `!formControl.valid`.
- Whether an empty form disables the button is a choice. A button that stays clickable shows what is required on the first click, which is often clearer.
- Tests: bracket the validation (error not visible after fill, visible after the submit gesture). One gesture is enough per [Gestures In Tests](../tests/gestures-in-tests.md).

## Related

- [UI Component Design](ui-component-design.md)
- [UI Copy In Template](../angular/ui-copy-in-template.md)
