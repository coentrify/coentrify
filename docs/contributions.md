# Contributions

How an issue or an addition to this repository is handled.

## An Issue

An issue takes the shape that [File A Change With Coentrify](../standards/behavior/file-a-change-with-coentrify.md) gives it, and holds no project details, since the repository is public.

## Closing An Issue

- When work from an issue lands, a comment on the issue says what was done, and names the version it ships in.
- An issue closes once every point in it is processed.
- A closing keyword in a pull request closes the issue on merge, so it is used only once every point in the issue is processed.
- When only a remainder is left, the issue closes as well, and the remainder moves to an issue of its own.

## Branches

- Work toward a version happens on a branch named after that version, such as `version-0.0.5`.

## The Changelog

- Every standard a commit changes is named on the page of the version in progress, a link fixed in a rename included.
- `npm run changelog:standards` writes that list from git, so it is never kept by hand.
- `npm run hooks:pre-commit` runs the check on the staged files before the commit.
- A version that needs a project to change its setup names the migration in its summary, such as "a project renames Read First to Core Rules in its index and entry point".

## The npm Package

- `npm/` holds the bin, the readme and the manifest of the `coentrify` package. The publish step adds the source under `src/`: the root pages but `CLAUDE.md`, and `standards/`, `tools/` and `changelog/`.
- The package's version is coentrify's version, taken from the latest page in `changelog/`.
- The Release the version workflow publishes it right after it tags the version. By hand, `npm run publish:npm` does the same from a clean checkout of the tag, and `npm run publish:npm -- --dry-run` shows what would go out, from any checkout.

## The Conduct

This repository has no `coentrify.json` of its own, so a harness change here is always reviewed, by the steps below.


- Discuss each change with the director one by one before it is applied: what it asks, the context the audit found, an opinion and a recommendation, then the director's go. One change per message, kept brief, and the next only after that go.
- Changes that overlap, contradict or conflict are settled together, as one change.
- Weigh each change for the harmony of the whole system and flag what it strains: the session that filed it saw only its own work.
- Tightening applies to format and filler only, not to the rule itself.
- A shift in content is the director's call, so surface it first, a rule it drops or loosens included, never only after it is applied.
- Apply format conventions mechanically.
- Surface improvement opportunities before acting, not as justification after.
- First pass: get the essence right. Edge cases come back if they bite during use.
- Standards are living docs. Revisit one when it does not fit.

## The Audit

Each change is weighed against these questions.

- Does its mistake come back, and does it cost? One that happens now and then and is found quickly is expected, and fine. One a model avoids with the standards it already has stays out, however often a project wrote it down.
- Is it easy to get wrong? Then a check that catches it is the fix, and the rule shrinks to a line pointing at it. A simple, obvious rule stays an instruction.
- Does another standard own it already, or contradict it? Then it merges there, and the conflict is settled once.
- Is it local to one standard, or structural across several? A structural change is weighed against the whole before any file is touched.
- Does it fit the budget? A standard over its budget is trimmed before anything is added.
- Does it hold everywhere? A project specific stays in that project, in the examples as much as in the rule: no names, labels, words in another language, numbers or setups from one project.
- For a game law: which finding about people does it rest on? A law with none known is weighed again, or kept with that said.
