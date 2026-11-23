# Work Tracking

A project tracks its work in its own docs, next to the code: a ticket per piece of work, stories and epics grouping tickets, phases grouping epics, lists generated from the tickets, and an archive of what is done. Tickets are data. The lists are views of them.

## Why

Tracked next to the code, the work stays up to date with it.

## The Folder

```
docs/development/
  roadmap.md        (by hand)
  plan.md           (list generated)
  refine.md         (list generated, the director's inbox)
  planning.md       (list generated, the director's inbox)
  accept.md         (list generated, the director's inbox)
  processing.md     (list generated)
  phases/<slug>.md
  areas/<slug>.md
  epics/<id>-<slug>.md
  stories/<id>-<slug>.md
  features/<id>-<slug>.md
  bugs/<id>-<slug>.md
  debt/<id>-<slug>.md
  healing/<id>-<slug>.md
  docs/<id>-<slug>.md
  spikes/<id>-<slug>.md
  archive/<type>/<id>-<slug>.md
```

## Types

A ticket's type is its folder, and the archive keeps the same folders. No front matter field repeats it.

- Feature, in `features`, prefix `FEAT`: what the user gains.
- Bug, in `bugs`, prefix `BUG`: what goes wrong for the user. User-facing only: what a real user never hits is debt. It describes the symptom as the user meets it, never a guess at the cause, and links its feature doc and spec case.
- Debt, in `debt`, prefix `DEBT`: the workspace's own code and tooling, its test gaps and its structure. It holds what is broken, what success looks like, and its Solution: the strategy at the ticket's focus level, worked out before the build so the easy way out is ruled out. It never names the classes and files.
- Heal, in `healing`, prefix `HEAL`: a change to the harness, to a standard, a check or a tool, that healing makes ([Always Make No Mistakes](../behavior/always-make-no-mistakes.md)) or that a coentrify update brings. It has a debt ticket's sections, and lands archived like one. With `healing` automatic, a heal's go comes with it, and the healing subagent builds it at once, off the plan. With `update` automatic, an update's go comes with it the same way. Under `review`, the director's go on the change is the ticket's go.
- Docs, in `docs`, prefix `DOCS`: the work on the docs and the work tracking. The wiki's own tooling is code, so Debt.
- Spike, in `spikes`, prefix `SPIKE`: finding out how something is now, worked by the scout ([Agent Roles](agent-roles.md)).
- Epic, in `epics`, prefix `EPIC`: a ticket that groups others under one outcome. Its file holds its `phase` field, a `## Goal` section of one short line and a Source, no summary and no acceptance criteria since its tickets hold their own. Which tickets belong to it lives only in each ticket's `epic` field, and the wiki lists them.

A ticket's type never changes. Work that turns out to be of another type is a new ticket with an id of its own, and the old ticket is dropped: at once when the director never saw or refined it, otherwise with the director's yes. A new type applies to tickets filed from then on. An existing ticket keeps its type. A product layer may add types of its own, a game's in [Game Work Workflow](../gamedev/game-work-workflow.md).

## Ids

Every ticket, every story and every epic carries an id of its own, kept for life, so the director gives a go or a verdict by the id alone.

- The id stands in the front matter, `id: FEAT-214`, and the wiki shows it right below the title. The file's name leads with it in lowercase, `feat-214-upload-retries.md`, so a glob finds a ticket by its id.
- Its prefix says the type. The number counts per prefix, so FEAT-1 and BUG-1 both stand. A new ticket takes one past the highest of its prefix, the archive's included.
- An id never changes: archiving keeps it, and a list's position never stands for it.
- Every list line starts with its ticket's id, and the director names a ticket by its id: `FEAT-214 go`, `FEAT-214 accepted`.
- A link never depends on where a file lives, so archiving is a `git mv` and nothing else: a ticket, a story or an epic is linked through its id, `[DEBT-81](/tickets/DEBT-81)`, which the wiki resolves wherever the file is, and any other page from the wiki's root, `/records/log/2026-10-25#1257`.
- The wiki and the hygiene check share one list of the id folders, the archive's included.
- A hygiene check fails two pages sharing an id, a prefix that does not match the page's folder, a file name that does not lead with its id, a link to a page with an id by its file path, and a relative link on such a page.

## The Ticket

A ticket is one file in its type's folder. Its sections and front matter are in [Ticket Template](ticket-template.md), how it is written and its criteria in [Writing A Ticket](writing-a-ticket.md), and its Done part in [The Done Part](the-done-part.md).

## Phases

A phase is a step on the product's road, one layer above the epic: one goal and the phase gate that closes it, so the work in it serves that goal and nothing else.

```
# <Phase Name>

Goal: the one outcome this phase delivers.

Gate: the leading question of the phase gate that ends this phase.

## Done When

- One observable condition per bullet.

## Not In It

- What waits for a later phase.
```

- A phase's gate ([Project Lifecycle](../behavior/project-lifecycle.md)) is written as its leading question, with Done When listing what answers it.
- A hygiene check fails a phase page without its `Gate:` line.
- Which epics belong to a phase lives only in each epic's `phase` field. The wiki lists them on the phase's page.
- Work is planned as tickets for the current phase and the next one. What lies further waits as an idea in `docs/ideas/` until its phase is next, since its prerequisites have not checked out yet ([Processing The Ideas](processing-the-ideas.md)). A phase whose work may start earlier says so, as a game's lore does ([Game Work Workflow](../gamedev/game-work-workflow.md#design-ticket-types)).
- Anything that does not serve the current phase's goal waits for its phase, never refined or built early. Bugs and debt are filed as tickets in any phase, since each records a fact: one that does not hurt the goal waits ([Dev Tiers](../behavior/dev-tiers.md)).
- A ticket's phase and priority are the director's call. An agent files a finding in the phase where it hurts the goal, a later one unless it hurts the current goal now, and leaves the priority out.
- A game's phases, in their four stages, are in [Game Phases](../gamedev/game-phases.md).

## Areas

An area is a category of the product (the checkout, the UI), one layer above the epic like a phase, which is a step of the road. An area is a page, an epic's `area` field names it, and the wiki lists an area's epics on its page the way it lists a phase's.

## Stories

A story is one layer between the epic and the ticket: the unit the director refines, gives a go and accepts, and the unit one builder builds ([Agent Roles](agent-roles.md#the-builder)). The ticket stays the unit of building, small and refined part by part.

- A story of product work is a stretch of the product the director uses from start to end.
- A story of debt or docs is a group of tickets of one epic that share an area and the load of their checks.
- A debt story gets a go and no verdict: it ends when its last ticket lands. A docs story gets the director's verdict, like a feature, since the director decides what the docs say.
- A debt story is cut in refinement to be light, with no browser suite, or heavy, never mixed.
- A ticket names its story in its `story` field. A ticket outside any story is the exception, refined, planned and accepted by itself. Loose tickets of one epic are grouped into a story, so they show as one line and get one go and one agent.
- A story is a page in `stories` with an id of its own, `STORY-8`, and its epic in its `epic` field: what to use, and how to reach and test it: a seeded scenario, a level, an editor, or the wiki page for docs.
- The wiki lists a story's tickets on its page from their `story` field, in three lists: to refine, ready and done. A rework ticket carries a rework mark there.
- A story's done list runs newest first, and each line ends with the date and time its ticket was done, read from its landing commit: `` `2026-12-31` `11:23` ``.
- The director gives a story's go and verdict by its id: `STORY-8 go`, `STORY-8 accepted`.
- A story is sized to fit one builder's context. One that does not fit is split in refinement.
- A ticket waits only inside its story: its Depends On names tickets of its own story, the builder's order. Two tickets outside a story that depend on each other go into a story together.
- A story can be blocked on a story, the level the go is given at. Its page names the stories it waits on under Depends On, only where the order matters.
- A block is avoided first: the order is made irrelevant, each story started by itself from a skeleton or a seeded scenario, or the shared piece is extracted into a small story of its own that unblocks both.
- A blocked story is refined and given its go like any other. It gets no builder until its blocker is accepted, or merged where a debt story gets no verdict.
- The director's findings on a story become new tickets in it, each tagged with the landed ticket it redoes in its `rework` field, so rework is counted and its causes are found. A landed ticket is never reopened.

## The Lists

Every list but the roadmap is a view the wiki generates from the tickets, the way a data loader reads each ticket's folder, front matter and parts at build time, and so are its lists of tickets per folder and per epic. The repository holds the list pages, each with its title and hand-kept sections, and never a generated list, which would go stale. The dev server regenerates a list the moment a file changes. Nobody moves a line by hand: a ticket's place follows from facts written once.

The unit of a list is the story. Each story of the current phase stands on exactly one list: the first whose condition it meets, in this order. A ticket outside a story stands on one the same way, as a story of one ticket. Refine is the fallback, so nothing falls through. A story's own tickets show on its page. A later phase's story stands on none. Its epic and phase are its home. An epic stands on none either. The roadmap is its home.

- `processing.md` - every story with a ticket that carries a `feedback` field, which keeps it off the director's inboxes until the conductor clears the field.
- `accept.md` - every story with open tickets, each with a Done part, in landing order read from git. Debt never waits there, since it lands archived.
- `plan.md` - every story whose tickets not yet landed are all ready, have a `go` and have an agent, one line per story in a section per agent by its tickets' `agent` field, the section's heading read back from the slug, in the roadmap's order of epics. The plan lists stories, never their tickets, which stand on the story's page in the story's order. A story stays on the plan as long as its builder works it, a wait on an answer or on a ticket it filed included. The plan holds only what is active: its generated sections.
- `planning.md` - every story whose tickets not yet landed are all ready, as one item, in three groups: the stories with a go that wait for an agent, the stories that wait on a go, and `## Blocked`, the stories that wait on a story, each naming its blocker inline (`STORY-12 - blocked by STORY-9`).
- `refine.md` - every other story of the current phase ([The Refine List](#the-refine-list)). What a ticket still misses is read in the ticket. A builder's question on a ticket in flight lists that ticket here as well, until it is answered.
- `roadmap.md` - kept by hand, since its order is a decision: every epic, functional and technical alike, a section per phase in the phases' order, each linking its phase page and listing its epics in execution order, then `## Blocked` and `## Waiting For Response` for epics paused on an internal or an external dependency, each naming its blocker inline (`X - blocked by Y`).
- Every ticket sits in an epic, a new one in its phase where none fits, so it reaches the lists once its phase is current.
- No backlog and no nice to have list: decided work not yet scheduled waits in its epic and phase.
- A list line is one line: the ticket's id and a link, never a description, a status or history. The one exception is the landing stamp on a story's done list.
- A list page holds its title, its list and its hand-kept sections, never a text on how the list works: the rules stand in the standards, once.
- A hygiene check fails a current-phase ticket whose story stands on no list, or that stands on none by itself, and prose on a list page that explains its list.
- A hygiene check fails a ticket whose Depends On names a ticket outside its story, and a story whose Depends On names anything but a story.
- A hygiene check fails more than three tickets of one epic outside a story on the planning page.
- The plan's logic lives in one module that the wiki's loader and a command-line script share, so an agent reads the plan without the wiki.
- An agent finds tickets with `ls` and a grep on the front matter, never by reading a whole folder.
- Continuous activities ("Resolve bugs", "Add tests") are never items. A testing push is an epic with a name of its own.
- Before asking the director whether an unbuilt item is still wanted, check for its ticket in its epic.

## The Refine List

- Per ticket, the generated list checks what code can of the Definition of Ready: every section of its type's set present, a criterion at least, a Source, no `## Question`, no `## To Refine`, and no workshop mark.
- A ticket's readiness never looks at another ticket.
- A ticket written before a template change passes on the sections of its own time.
- A ticket an agent judges not ready for any other reason gets a `## To Refine` section naming what is still to spec, so the list catches it too.
- A ticket's phase is its epic's. A ticket outside an epic is never on the list.
- A story being built or reworked stands first.
- The rest runs in the roadmap's order of epics, under each epic its stories, linked, with their tickets not yet ready, then its tickets outside a story.
- A story leaves once every ticket of it is ready.
- The list ends with a `## Last In Phase` section: every ticket marked `last` until each unmarked ticket of its phase is archived.
- A blocked story's tickets are read again once its blocker is accepted, since what the blocker settled can change them.

## The Open Questions

A question lives in the ticket that has the unclarity, under `## Question`: the one thing to decide in a plain sentence, then short options, each answerable without opening another doc and one of them recommended with its reasons, then where it came from. The refine list shows every current ticket with a question. A question is never asked only in chat.

- Weigh a question before asking it: when one option is the status quo and the other has no gain the director would feel, keep the status quo and ask nothing.
- Tell the moment the way the user meets it, never by a doc's or an agent's name for it.
- A question listing several items explains each one: what it is as the user meets it, where it stands today, and what each answer changes.
- Options that are sounds, clips or pictures put the sample beside each one.
- Every claim in a question is checked, and says how it was checked. The ticket's Source entries are read first, so a question the log already answers is never asked.
- An answer is logged, moved into the docs or tickets it decides, and the question dropped.
- A question that blocks a builder, or whose answer changes other tickets, names them and goes to the director at once, through the conductor. It never waits for a refinement.
- While a builder is blocked, the conductor can start another builder on ready work.

## The Archive

- A ticket is archived at the director's verdict on it or on its story, a debt or heal ticket at its landing: a `git mv` to `archive/<type>/`, which is the verdict's whole bookkeeping, since every list follows by itself.
- A version's changelog lists the tickets that landed in it, generated ([Changelog Per Version](../records/changelog-per-version.md)).
- A story page is archived with its last ticket, at its verdict, or a debt story's at its last landing, to `archive/stories/`.
- A dropped ticket is archived at once, and a workshop's ticket once its outcome is ready tickets, so no id is used twice. An epic is archived with its last ticket.
- Archived tickets are never edited again. More work on the same topic, a rework included, is a new ticket.

## Related

- [Work Workflow](work-workflow.md)
- [Work Item Names](work-item-names.md)
- [Commits](../commits/commits.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
- [Plans Vs Persistent Files](../simple-workflow/plans-vs-persistent-files.md)
- [Docs State Knowledge](../docs/docs-state-knowledge.md)
