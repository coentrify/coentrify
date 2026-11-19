# Never Access the Keychain

Never access the user's macOS keychain. Do not run `security find-internet-password`, `security find-generic-password`, `security dump-keychain`, or any other `security` / keychain query, and do not script around them. This is a hard boundary, not a default to weigh against convenience.

## Why

The keychain is the user's private credential store. Probing it is an intrusion.

## How to Apply

- When a task needs a secret (credentials, tokens, API keys), ask the user for it or look in project-scoped config the user points to - never the keychain.
- Store shareable, low-sensitivity references in the repo (docs), not in the standards - they are repo-specific.
- Also avoid other credential files, such as `.env*`.

## Related

- [General Working Rules](../behavior/general-working-rules.md)
