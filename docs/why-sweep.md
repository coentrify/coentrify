# Why Sweep

The worklist for the sweep over every Why. A standard leaves the list once the director has ruled on it.

- The Bar - what a Why has to be
- How A Module Is Swept - the steps
- Done - the modules that are swept
- Waiting For A Ruling - the recommendations the director has seen
- Not Read Yet - the modules that are left

## The Bar

- A Why names the goal or the principle behind the rule, in a line or two.
- It is written actively: what should be, where an old text said what goes wrong.
- A mechanic, a solution, an incident and an example are no Why.
- A rule said again is no Why.
- It goes one step up from the rule and stops there.
- A role from one kind of organization gives way to a reader.
- An explanation that has no other home moves under How to Apply or Examples, and is kept.
- The Why of a part page stands on its parent.

## How A Module Is Swept

- Print the Why of every standard in the module.
- Bring the director the ones that miss the bar, each with a recommendation.
- Apply a ruling, name the standard on the page of the version in progress, and update this list.

## Done

AI, Angular, Architecture, Behavior, Code and Commits.

## Waiting For A Ruling

The director has seen every line here and has not ruled on it. A remark of the director stands with its line.

### Docs

- Docs Folder Structure: "Every folder answers one question, so a reader knows where a fact belongs before looking."
- Docs State Knowledge: "A knowledge page reads as what is true now. The log holds who said what and when."
- Documentation Philosophy: "The docs orient every reader, and they are the basis for manual testing and for generating tests."
- Feature Spec Template: "The feature doc says what a feature is, and the spec says how to verify it. Manual testing, e2e and the docs share one set of stable ids."
- Feature Template: "A feature doc stays true while the code changes."
- Library Feedback: "Feedback on a library belongs with that library, and the director has the relationship to take it there."
- No Faux Headers In Lists: "A real header gives navigation for free: a table of contents, an anchor and search."
- UI Vocabulary: "Functional names work for every reader without explaining the implementation."

### E2E

- Canvas Clicks by Coordinates: a new title, One Check For Many Canvas Clicks, since the rule is about time and the coordinates are only how the mouse clicks. Its Why: "A test with many canvas clicks stays inside its timeout, also on a loaded machine."
- E2E Mock Contract: "The constants are the protocol between the layers, so every side shares one copy."
- E2E Runs On The Development Build: "The suites exist to catch development errors, and only the development build shows them."
- E2E Tests Must Demonstrate Behavior: "A green test shows the feature working, to anyone who watches the recording."
- Real Input For Frame Races: "Tests stay as close to real usage as possible, down to the timing of a click."
- Substring Locator Collisions: "A locator finds one element, whatever other text is on the page."
- Use the E2E Pipeline for Browser Probing: "The project already has a browser harness, and using it asks the director for no extra permissions."

### Electron

- Electron Packaging And Suite: "A package works on every machine, and the packaged suite proves it without a second one."
- Electron Shell Shape: "The shell stays small: an update replaces the website, and Electron stays."

### Records

- Activity Log: "The director sees the progress of a project at a glance, and a new session starts from the last one."
- Request Log: "Every doc and ticket can be checked against the words that produced it."

### Reporting

- Change Report: "A change report proves a change and shows how far it spread, so the work is reviewed without running it again."

### Scripts

- No npx in Scripts: "A script runs what the lock file declares, online or offline."
- Thin Wrappers in CI and Hooks: "Every behavior is found in `package.json`, and runs the same from CI, a hook or by hand."

## Not Read Yet

Gamedev, Simple Workflow, Tests, Tickets Workflow, Tooling, TypeScript, UI and Web. Security holds one standard, and its Why holds up.
