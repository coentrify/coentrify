# Onboarding

How an agent sets coentrify up in a project. Every step follows one pattern: a default, a choice, an override.

- Greet - show that the prompt worked
- Analyze - read the project and what is already there
- Recommend - the defaults for this project
- Choose - the director accepts, picks or overrides
- Set Up - put the chosen parts in the project
- Report - the choices, open to a veto

## Greet

Greet the director first, so the director sees that the prompt worked.

```
 ████   ███   █████  █   █  █████  ████   ███  █████  █   █
█      █   █  █      ██  █    █    █   █   █   █       █ █
█      █   █  ████   █ █ █    █    ████    █   ████     █
█      █   █  █      █  ██    █    █  █    █   █        █
 ████   ███   █████  █   █    █    █   █  ███  █        █
Humans direct. Systems check. Agents work.
```

## Analyze

Read the project before asking anything.

- The stack, such as Angular or Godot, shows which modules are relevant.
- The docs, the tests and how the work is tracked show where the project stands.
- The instructions that already exist: project memories, user memories and rule files.
- An earlier version of coentrify, where the project has one.

### What Is Already There

- Nothing of the project's own is overwritten.
- A conflict between an existing instruction and a standard is surfaced.
- Every conflict is resolved before the set up.

### An Earlier Coentrify

Older copies of coentrify are in use, and some have grown into a version of their own. An earlier copy is noted and surfaced to the director.

- The current coentrify is adopted in full, and replaces the earlier copy.
- The project's own additions are analyzed one by one.
- An addition that still fits goes on top of the current standards.
- An addition that the update made irrelevant is listed for removal.

## Recommend

Every choice has a default, and the default is the recommendation. The [recommendations](recommendations.md) list the defaults and what to weigh for each.

- Core standards are always recommended, starting with [Always Make No Mistakes](standards/behavior/always-make-no-mistakes.md).
- A stack module is recommended when the analysis finds the stack.
- A specific module, such as the game design laws, is picked by the director.
- A workflow is strongly recommended, since tracking the work is part of coentrify.

## Choose

The agent shows the recommendations as one short list. The director accepts a default, picks another option, or overrides with something of the project's own.

With `coentrify make no mistakes` the agent asks nothing. The agent takes every recommendation, and makes a best guess where there is none. A conflict is settled the same way, and listed in the report.

## Set Up

- Copy the chosen standards into the `standards` folder of the project, in the same module folders, so the standards sit beside the code.
- Remove every link to a standard the project did not adopt.
- Write the index.
- Point the entry point at the index.
- Write the lock file.
- Set up the `docs` folder, and the wiki where chosen.

### The Index

`standards/overview.md` lists every adopted standard, with one line each. The core standards stand under Read First, and an agent reads those at the start of every session. An agent reads the other standards when the work calls for them.

### The Entry Point

The entry point is the file an agent reads when a session starts, such as `AGENTS.md` or `CLAUDE.md`. The entry point gets one line that points at the index, and holds no standards itself. A project without an entry point gets an `AGENTS.md`.

### The Lock File

`standards/coentrify.lock` records what was taken, and from which version. The [lock file](lock-file.md) page has the format.

## Report

Report briefly: the choices that were made, and what was set up. The director stays in control, and can veto or change every choice.
