# Writing A Ticket

How a ticket's sections are filled. The sections themselves are in [Ticket Template](ticket-template.md).

## Why

A builder can build from the ticket alone.

## Style

- Say each fact once: it stands in the one section that owns it, and no other section restates it. The criteria own what must be true, the Solution owns the how, the Done part shows what was achieved.
- One line per bullet. A point with parts gets a subsection of its own; nested bullets are allowed but strongly discouraged.
- The summary says what should change, with should, since a ticket is a change; the end state in the present tense belongs to the criteria. It keeps its articles and reads cold to a human, never like an agent's footnote.
- Elsewhere articles and filler words go. A concept goes by its name in words, never by a session's or a doc's shorthand.
- An empty section is the dash in backticks, `` `-` ``, since a bare dash renders as an empty bullet: the explicit answer is the check, the way a blinker is used on an empty road.
- The summary, Why, Current Situation, Acceptance Criteria and Source always hold a real answer.
- History stays behind the Source link.
- Every check runs on every ticket; an answer is never skipped because the tickets before it had the same one.
- Past about 300 words before Done a ticket counts as long, headings and the dash of an empty section not counted, and its groomer trims it unless the length is necessary. A ticket kept long carries `long: true`, which a hygiene check requires. A long ticket never loses an important point, and never splits for its length alone.
- A small ticket is always better: the smallest piece of work that gives an actual feature. It is easy to place, waits on less, is fast to build and easy to accept.
- The Current Situation is written first, as facts read from the product, its feature doc and its history. A ticket asking for something built already shows it there and never reaches the plan.
- Left Out holds decisions only. Something built already or decided elsewhere is refined away; an unsure split is a Question.
- The ticket is functional. Tests, specs, docs and code are the Definition of Done and the builder's.
- A ticket describes the work; the product is described in its feature docs, which a feature ticket updates. A feature doc links the ticket of a part not built yet beside its `(Not Yet Implemented)` mark; a hygiene check flags a mark whose ticket is archived, the cue to update the doc.

## Acceptance Criteria

What must be observably true, from the user's side, for the work to count as done.

- One check per bullet, never compound: "glows while, and stops once" is two criteria.
- A spec line: the moment, then what you see, "when you open the settings, the volume shows its last value".
- A criterion states the rule for every case it covers, never one case alone.
- No test kind, spec id or doc in a criterion.
- No vague word ("properly", "where needed", "nice") without a measure.
- A criterion that needs a measurement names one that settles in a single run; a measure not yet proven gets a spike first.
- At least one criterion shows the change against today.
- Every fact in the Current Situation has its criterion.
- A bug: the reproduce steps now give the Expected.
- Debt: the state that shows the debt is gone.
- A spike: the questions it must answer, one per bullet.

## The Done Part

The builder writes it in the landing commit. Its shape and its proof are in [The Done Part](the-done-part.md).

## Related

- [Work Tracking](work-tracking.md)
- [Things Of One Kind Are Consistent](../behavior/things-of-one-kind-are-consistent.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
