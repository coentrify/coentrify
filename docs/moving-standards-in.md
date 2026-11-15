# Moving Standards In

How a standard moves from the memory into this repository.

- A standard moves in as an exact copy of the memory file, without the front matter.
- The description from the front matter becomes the standard's line in the overview of its module.
- A Related list keeps its links and drops the text after each link.
- A name becomes the director, and the memory becomes the standards.
- The file lands in the folder of its module, named after its title.
- A standard goes to the module it is really about. A rule about HTML or CSS goes to Web, also when the memory files it under Angular or UI.
- A change comes after the copy, one at a time, each agreed with the director.
- A link to a standard that does not move in is removed, and the words stay.
- A link to a missing standard fails the build.
- The standard is listed in the overview of its module, and named in the changelog under the version it lands in.
- A link to a standard in another module is allowed. The link is a reason to check that both standards are filed in the right module.
- `npm run lint:standards -- --links` prints every link between modules.

## Filings Already Decided

- Feature Workflow is a core standard.
- Plans vs Persistent Files and Remove Completed Items go to the simple workflow.
