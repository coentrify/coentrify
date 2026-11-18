# Spec-Driven Development

Humans direct. Systems check. Agents work.

Coentrify is a harness for working with AI in a spec-driven way: standards, checks and tools, resting on four principles.

Every caught mistake strengthens the harness, so the system heals itself and keeps learning.

## Quick Start

To coentrify a project is to align the project with spec-driven development.

Prompt your agent to start the [onboarding](onboarding.md):

```
coentrify
```

Adopt the defaults, pick what to use, and customize to fit the project.

See all [commands](commands.md).

## The Problem With Vibe Coding

The dream version of vibe coding is a one-prompt wonder. For example:

> build GTA6 in minecraft. make no mistakes.

The result will have elements of both games, along with bugs, assumptions and random creative choices. If you expect a perfect game, you're going to have a bad time.

An agent can build anything. Without a functional specification, anything is what you'll get.

## Always Make No Mistakes

Mistakes keep happening, and that is expected.

[Always Make No Mistakes](standards/behavior/always-make-no-mistakes.md) builds a self-healing feedback loop into the project. A mistake or a gap that is caught gets fixed twice: once in the work, and once in the harness, as a standard or a check.

A mistake can still come back. Round after round the system learns: it slowly stabilizes, and it adapts to its director, its agents and its project.

The [proof](proof.md) page shows the loop at work.

## What Is Spec-Driven Development?

Spec-driven development (SDD) starts with one question:

> What is it, exactly, that you want?

What you want is written down in layers. Overview and feature docs come first, then use cases and specs, then tests and code. Every layer is checked against the layer before, and a gap between two layers shows what is missing.

Humans are creative, agents are hardworking, and systems are rigid. So humans decide what the product does, agents do the work, and systems run the checks. The human who directs a project is called the director.

Coentrify gives any input a quality baseline. The creating and the deciding stay with the director.

## Elements

- [Philosophy](philosophy.md) - The four principles the system rests on, a compass.
- [Standards](standards.md) - The rules and templates a project adopts.
- [Tools](tools/overview.md) - The scripts and hooks that enforce a standard.
- [How It Works](how-it-works.md) - From any input to what you want.
- [Proof](proof.md) - The experiments behind the standards, with the models tested.
- [Glossary](glossary.md) - The terms coentrify uses most, in plain words.

## Wiki

Everything here reads as a wiki at [coentrify.github.io/coentrify](https://coentrify.github.io/coentrify/).

## License

MIT-0. Take what you need; there is no notice to carry.
