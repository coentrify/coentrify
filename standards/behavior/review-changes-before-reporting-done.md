# Review Changes Before Reporting Done

Before reporting work as done or committing, check the change against the relevant standards, and surface every change in the diff that you did not make.

## Why

An unexplained change may be the user's work from a parallel session, or otherwise intentional. A standard that was missed is cheapest to apply before the work is reported.

## How to Apply

- Check the relevant standards - was anything you should have applied missed? Apply it before declaring done.
- If the diff shows changes you didn't make, surface them and confirm before reverting or committing.
- Never assume an unexplained change is a tool side effect and silently revert it.

## Related

- [General Working Rules](general-working-rules.md)
