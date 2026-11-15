# No npx in Scripts

In `package.json` scripts, husky hooks, and CI workflows, never prefix commands with `npx`. The binary is already a project dependency, so it should be resolved via npm's PATH (an npm script finds it automatically) or via an explicit `npm run <wrapper>` / `npm exec` call - never `npx nx ...`, `npx playwright ...`.

## Why

`npx` exists for the case where a tool is *not* installed locally - it falls back to fetching from the network. Using it in our scripts hides the fact that a dep should be declared, masks version mismatches between what is in `package-lock.json` and what gets executed, and in offline / locked-down CI environments it quietly does the wrong thing.

## Exceptions

- One-off interactive commands at the terminal can still use `npx`; this rule is about checked-in scripts.
