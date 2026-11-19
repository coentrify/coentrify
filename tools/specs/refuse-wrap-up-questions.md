# Refuse Wrap-Up Questions

A spec for a hook that keeps the end of a turn free of answer buttons ([Free Text Replies, No Buttons](../../standards/behavior/free-text-replies-no-buttons.md)). Each app ends a turn its own way, so a project writes the hook for the app its agents run in.

## Where It Runs

- Before the call an app makes to end a turn with a recap, where the app has such a call.
- An app without one needs no hook: the standard alone holds there.

## What It Does

- It refuses a call that carries a question for the director or answer options to click.
- It passes every other call, the recap alone included.
- The refusal tells the agent to drop the question and the options, send the recap, and ask in prose in the closing message.
- It reads the call and nothing else: no network, no state, and no change to the call.

## The Check

- A call with a recap alone passes.
- A call with a question refuses.
- A call with answer options refuses.
- A call with an empty question or an empty list of options passes.
