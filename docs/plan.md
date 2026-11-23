# Plan

Version 0.3.3: the round of filings #65 to #76, each brought to the director one by one.

Each filing is weighed by how often its mistake comes back and what it costs. One that happens now and then and is found quickly is expected, and needs no rule.

- A story or an epic linked by its id, #65
- Work asked for now gets a ticket, #66
- A fixed bug the director still sees, #67, closed as not planned
- Agents by the machine's load and the budget, #68
- Grooming in few commits, #69, closed as not planned
- The hygiene suite on every commit, #70, closed as not planned
- Three iterations on a visible change, #71, closed for the instruction an asset is made from
- The way to reach a story, #72
- Only the images a page shows are tracked, #73
- A Not Yet Implemented mark names its ticket, #74
- A failing case is fixed, never steadied, #75, closed as not planned
- Ticket marks and their checks, #76, closed as not planned
- The greeting the app's summary drops, Greet made casual
- Call 0.3.3 (active)

## The Greeting The App's Summary Drops

- In the desktop app, text between tool calls is summarized by a model, and it drops the banner every time: it is just ASCII art with no process step or finding in it.
- The banner then shows in full in the turn's closing reply, which the app never summarizes.
- So #47's first diagnosis held, and 0.3.1's Greet is labeled in a way the summary reads as decoration.
- Greet turns short and casual, without the fetch wording, and says what the banner means. If the app still drops it, the reply that ends the turn is the fallback.
