# Glossary

The terms coentrify uses most, each described in plain words.

- The People - who does what
- The System - what a project adopts
- The Work - how a piece of work is specified, built and accepted
- Keeping It Right - how differences are found and fixed

## The People

### Director

The human in charge of a project. The director decides what is built and in what order, and accepts or rejects the result ([How It Works](how-it-works.md#the-director)).

### Agent

An AI model that does the work of a project: it writes the documentation, the tests and the code.

## The System

### Spec-Driven Development

A way of working in which what is wanted is written down and specified before it is built, and what is built is checked against what was written ([Spec-Driven Development](readme.md)).

### Standard

A written rule, convention or template that a project adopts. Every standard is one file ([Standards](standards.md)).

### Module

A folder of standards on one subject, such as Docs or Tests.

### Read First

The standards that an agent loads at the start of every session ([Overview](standards/overview.md)).

### Check

An automated test of a rule: a script, a lint rule or a hook that fails when the rule is broken.

### Harness

Everything that guides and limits the work of an agent: the standards, the checks and the tools ([Always Make No Mistakes](standards/behavior/always-make-no-mistakes.md)).

### Coentrify

The harness described on these pages. As a verb: to set a project up with it ([Origin](origin.md)).

### Pillar

One of the four principles behind the system: Specs & Checks, Layering, Harmony and Shepherding ([Philosophy](philosophy.md)).

### Law

A short rule about the product that holds unless there is a very good reason to break it. The design rules of a game are laws ([Game Design Laws](standards/gamedev/game-design-laws.md)).

### Why

The section of a standard that states the goal or the principle behind its rule.

### Part Page

A standard that holds one part of a larger standard. Its title starts with the title of the larger standard, followed by a colon.

## The Work

### Use Case

One scenario of a feature: a start state, an action by the user and the expected result.

### Spec

The list of the use cases of one feature. Every use case has an id that never changes ([Feature Spec Template](standards/docs/feature-spec-template.md)).

### Layer

One level of description of a product. From general to specific, the layers are the docs, the specs, the tests and the code.

### Proof

Evidence that the director can verify without reading code: a screenshot, a video, a test run or steps to try ([The Done Part](standards/tickets-workflow/the-done-part.md)).

### Go

The director's explicit approval to start one named piece of work ([A Go Before Work Elsewhere](standards/behavior/a-go-before-work-elsewhere.md)).

### Maybe

An idea that the director mentions without deciding on it. An agent investigates it at once and reports the outcome ([A Maybe Is A Trigger To Investigate](standards/behavior/a-maybe-is-a-trigger-to-investigate.md)).

### Veto

The director's rejection of a choice that an agent made on its own. An agent lists such choices in its report ([Flag Every Addition of Your Own](standards/behavior/flag-every-addition-of-your-own.md)).

### Phase

The stage of development a project is in, such as prototype or production. The phase determines which work has priority ([Project Lifecycle](standards/behavior/project-lifecycle.md)).

### Gate

The condition that ends a phase, stated as one question. The answer moves the project to the next phase or back to the previous one.

## Keeping It Right

### Gap

A difference between two layers: something that one layer states and the other lacks. A use case without a test is a gap.

### Gap Analysis

To compare two layers and find the differences and discrepancies between them, the delta ([Regular Layered Gap Analysis](standards/behavior/regular-layered-gap-analysis.md)).

### Drift

A difference that grows over time, because one layer or rule changed and the related one was not updated.

### The Loop

The feedback cycle of the system: a mistake or a gap is turned into a standard or a check, so it does not happen again ([How It Works](how-it-works.md#the-loop)).

### Sweep

To apply one rule to every existing instance in a project: find all instances, list them, then fix them ([Sweeps Enumerate Into Tech-Debt First](standards/behavior/sweeps-enumerate-into-tech-debt-first.md)).

### Focus Level

The level of detail a page is written at, such as a workspace, an application or a feature. A page summarizes the levels next to it and leaves their details to their own pages. Also called altitude or level of awareness ([Docs Are Hierarchical, Explicit And Short](standards/docs/docs-are-hierarchical-explicit-and-short.md)).
