# Technical Debt Template

Workspace-level `docs/tech-debt.md` uses a fixed shape.

## Purpose

Catalogues internal debt: infrastructure friction, tooling gaps, missing abstractions. Things developers trip over but real users never see. Distinct from user-facing bugs and third-party feedback - see the split below.

## Bug / debt / feedback split

- User-facing symptom -> [Bugs Template](bugs-template.md).
- Third-party library limitation (even with a workaround) -> [Library Feedback](../docs/library-feedback.md).
- Anything else internal to our code or infrastructure -> tech-debt.md.

## Sections

- Title: `# Technical Debt`.
- Overview list: flat dash list, one bullet per item, formatted as ``- <description>`` or ``- <description> (`<severity>`)`` when severity applies. Always present. Sorted by severity, highest first (blockers at the top); items without a severity sit below.
- Per item: `##` subheading with the title, then the body shape.

## Item shape

- Subheading: `## <concise title>`.
- Optional severity line right after the title: `Severity: <level>`. Use sparingly: `Blocker` for items actively blocking other work. Other levels (`high`, `medium`, `low`) are optional and used when meaningful.
- Body: *just enough* to start the work. State what's broken and what success looks like. Brief - one short paragraph, often two sentences.
- Affected use cases or features can be mentioned briefly when they sharpen the impact. Don't enumerate exhaustively; readers can follow the spec docs.

## What doesn't belong

- Implementation prescriptions (e.g. "introduce a single SCSS map with names X, Y, Z"). That belongs in the eventual PR, not the debt entry. The HOW gets figured out when the work begins.
- Detailed mechanism (which classes, which methods, which file). Same reason.
- Bug-style reproduction steps. If something reproduces with concrete user steps, it's a bug.

## Why

A tech-debt entry's job is to make a developer who's about to pick one up say "yes I can start on this" or "no, I'll grab a different one". Just-enough-info beats a complete design doc - the design gets done when the work starts.

## Related

- [Bugs Template](bugs-template.md)
- [Library Feedback](../docs/library-feedback.md)
- [Workspace Template](../docs/workspace-template.md)
- [Documentation Philosophy](../docs/documentation-philosophy.md)
- [No Faux Headers In Lists](../docs/no-faux-headers-in-lists.md)
