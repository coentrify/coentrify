# Overview

The Architecture standards: patterns that cut across a codebase.

- [Adopt, Configure, Override](adopt-configure-override.md) - anything made for reuse comes in three layers: defaults that just work with no choices, configs to choose a flavor, overrides to customize. The default does everything relevant by itself and asks only what is the person's to decide
- [App-Shield](app-shield.md) - five layers ui/app/data/core/config, one-way deps, all presentation in dumb ui components
- [Converge Only Once Proven](converge-only-once-proven.md) - apps may diverge. Fold into shared code only once proven
- [Folder Concerns](folder-concerns.md) - sibling folders are all domain or all technical, flat over nested
- [Per-Application Split Over Shared Branching](per-application-split-over-shared-branching.md) - split per application instead of branching on app flags, whitelist gates
- [Separation Before Layer Standards](separation-before-layer-standards.md) - clean up layer placement before per-layer standards
- [Unique Where It Counts](unique-where-it-counts.md) - unique in what makes the project that project, best practice for the rest
