# Standards

The rules, conventions and templates a project adopts.

## Make No Mistakes

[Make No Mistakes](standards/behavior/always-make-no-mistakes.md) is the core of the standards. `make no mistakes` is a meme, and coentrify gave the words a job: every mistake that is caught becomes a standard or a check.

The system heals itself. A mistake that became a check cannot happen again.

The system personalizes itself. Every fix comes from the project's own mistakes, so the standards grow toward the project.

The system learns. With every fix more is automated, and the project becomes more autonomous, more stable and higher in quality.

## Modules

Standards come in modules. A module holds the standards on one subject, such as Behavior, Docs or Tests. The [overview](standards/overview.md) lists every module and its standards.

A module joins once a project has proven its standards: a framework, an engine, a kind of product.

A standard for one kind of project says so in its title. Where a title cannot, a Relevant For section lists it, and the overview line repeats the list.

## Skills

A skill is a standard for one task: a file of instructions an agent follows when the task comes up. A skill lives in the module it belongs to, and a project prefers a skill over working from scratch.

## Versions

Coentrify has one version. The [changelog](changelog.md) names every standard that a version changed, so a project updates what moved and skips the rest.

## Template

Every standard follows one template.

- The rule, in one or two sentences
- What the rule is relevant for, where the title does not say
- Why: the goal or the principle behind the rule, in a line or two
- How to apply the rule
- An example, where a story helps
- Related standards, as links

A Why lets an agent judge a case the rule did not foresee.

A standard follows the standards. Every page is an example of the rules the page states.

## A Foundation

The standards are a foundation. A project is meant to pick, override and extend.

- Pick a whole module, or single standards.
- Override a standard where the project differs.
- Add standards of the project's own.

Anyone can build a version of coentrify of their own on the same foundation.

### Other Sources

A project can take standards and skills from other sources too, and files each in the module it belongs to.

### Contributions

A project keeps what it learns, as a customization or a standard of its own. Coentrify takes changes from its maintainers only, and a project files a change only when its `coentrify.json` says the project is a contributor.

### Example

Nick took an early version of coentrify and made it his own: Nicktrify.
