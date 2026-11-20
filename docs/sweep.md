# Sweep

The worklist from a second sweep over every standard, the top-level pages, the tools and these docs, in 0.0.8. The director rules on each finding in turn, presented in three short lines: its context, its problem and a recommendation. A finding is checked against the files before it is presented, and leaves the list once it is ruled and applied. A finding marked (0.0.7) is left over from a fix in that version. The rulings go on from the first rule that contradicts, and This Repository comes last.

## Install And Update


## This Repository

14. Proof says Opus needed none of the shrunk rules, its table shows Opus needed General Working Rules, and its Notes predate 0.0.7.
15. The three kinds of the relevance worklist hold 183 of the 201 standards.
16. The commits here carry the attribution trailers that Commits forbids, since the session harness adds them by default.
17. `check:specifics -- --all` says it reads the standards changed since the last tag.

## Rules That Contradict

34. Own Ports gives a project one fixed port, Parallel Agents gives every agent an `E2E_PORT`, and no page points the e2e config at it.
35. The Simple Workflow keeps an undecided idea in the inbox and the current focus on the plan, and Roadmap Template gives both a section of the roadmap.
36. Plans Vs Persistent Files keeps status tables in the plan, and Plan Template keeps status snapshots out.
37. Library Feedback gives friction with a library no doc, and Plans Vs Persistent Files lists library feedback docs.
38. Docs Describe Behavior keeps the wiring in the code, and three pages make `architecture.md` the technical wiring.
39. File Names renames a file when its title changes, and records, overviews and specs keep fixed names.
40. Docs Are Hierarchical workshops the wiki's tree before pages move, and Docs Hold Only What The Director Decided moves copy without asking.
41. Feature Spec Template asks for an imperative use-case title and shows a statement, and E2E Test Conventions takes the test title in a third form.
42. Application Template puts a route on a view, and functional docs hold no routes.
43. E2E Test Conventions adds a module prefix to the tags later, and a use-case id never changes.
44. Per-Feature Overview Test extends the overview test on its own, and the spec's Overview case is its source of truth.
45. Develop Against Mocks leaves real backends to the director, and Test The System Behind A Mock gives them a spec test.
46. Never Access The Keychain reads the config the director points to, and avoids `.env*` files.
47. Electron Packaging signs a build that goes out, signing on a Mac runs through the keychain that Never Access The Keychain forbids, and no page names who signs.
48. Validation Errors Fire On Submit never disables a submit on invalid input, and Walk The User's Journey and Bracket State Changes use exactly that as their example (0.0.7).
49. Barrel Imports imports a same-folder file directly, and its overview line and Scope line still send siblings through the barrel (0.0.7).
50. One Artifact Per File never bundles artifacts, and E2E Mock Contract keeps its constants in one file.
51. UI Components First sends a missing token to the director, and Always Use Design Tokens For Colors has the agent add it.
52. Code Principles splits a shared unit at its first caller branch, and Per-Application Split allows one.
53. UI Components First adds a composed card to the ui library, and its next line keeps composition in the app layer.
54. UI Variants By Function shows a variant set as an inline union, which No Magic Values forbids.
55. Game Design readies tickets for every level, and only the current phase is refined.
56. Gamedev Working Cadence orders the plan bugs, debt, features, and the plan is generated in epic order.
57. The cadence runs the touched cases while prototyping, and Prototype Mode runs no tests (0.0.7).
58. Development calls an epic of fine-tuning a sweep, and the glossary's sweep applies one rule to every instance.
59. The cadence opens a session on the refine list, and Work Workflow puts the accept list first.
60. A game's report names every addition and shows every visible change, and the conductor never repeats a ticket in chat.
61. A Pre-Alpha version is a day of work, and feedback on an open version closes it at once.
62. Concept has no tickets, and every unit of work is a ticket.
63. Pre-Alpha needs a quest log in every level, and the laws name a quest log as yellow paint.
64. Know What Is Coming always shows the distance to the goal, and Always Something To Do hides the ultimate goal until early mid-game.
65. The laws index says nothing auto progresses while away, and AFK Safe keeps what the player set running.

## Gaps

66. The `agent` field names both the builder and the docs agent's grooming queue, so a groomed story jumps to the plan with its go (0.0.7).
67. A prerequisite filed mid-build waits on its go and takes its story off the plan (0.0.7).
68. The Builder ends at the story's verdict, and a debt story gets none.
69. Nothing archives a dropped ticket, a finished workshop or an epic.
70. A debt ticket's Veto lines never reach the director.
71. The tickets overview still lands a ticket in one commit (0.0.7).
72. "The tech roadmap" in VitePress Wiki and "the short-term roadmap" in Stabilize Before Adding are defined nowhere (0.0.7).
73. Plan Template has no case for a project with one app.
74. Communication Boundary files a "Tell `<name>`" task, and no workflow has a task.
75. Feature Workflow weighs the laws in a step of the spec that does not exist, and Game Design Laws checks them before the spec.
76. Docs Folder Structure has no `docs/<app>/`, which three pages use.
77. The DEV day is counted in the request log, which is optional, and three other records rely on it.
78. A batch is defined nowhere, and it decides when a version is tagged and the activity log is written.
79. A healing log entry names its commit, and nothing says which commit comes first.
80. The records send feedback through the tickets workflow's intake, which a simple workflow project lacks.
81. An unbuilt feature goes under Functional Debt with a roadmap link, or carries a mark with a ticket link.
82. The reference docs that hold endpoints are placed nowhere.
83. Two docs pages call a statement in a feature doc a spec, and the glossary's spec is the list of use cases.
84. No Magic Values annotates a scalar `Readonly<T>`, which on a primitive adds nothing.
85. The attribute order in Pre-Empt Recurring Code-Review Nits differs from the lint rule's default, and the page never names its `order` option.
86. UI Styleguide allows a gallery route or a wiki widget, and its sweep works only in Storybook.
87. App-Shield lets data depend on core alone, and the shared `Enum<T>` and configuration tokens live in config.
88. App-Shield keeps ui free of the workspace, and the token layer and the shared style partials it uses have no layer.
89. SCSS Shared Partial Imports puts the folder itself on the load path, where `@use '@styles/<name>'` does not resolve.
90. Interface, Not Abstract Class injects the concrete class, so the compiler holds only what the interface lists.
91. UI Layout Via Slot Composition names both `header` and `top` as the region at the top.
92. Lore and Game tickets have no life cycle of their own, and First Playable is built on them.
93. Gamedev relies on playtests, the activity log and the tickets workflow, which Recommendations make optional.
94. Captures And Reels names a capture by version in the changelog's image folder, and by ticket in its Done part.
95. Devbox relies on a release checklist that only the Electron module defines.
96. A soft freeze is defined nowhere.
97. Launch Strategy offers early access and a closed beta, which fit no phase.
98. Start Playwright On A Clean Port kills a listener that is yours, with no way to tell.
99. VitePress Wiki forbids touching a config file, and sets the wiki up with one.
100. VitePress Wiki sorts a test group and entries from before any version, which no standard defines.
101. A reel keeps the viewport's size, and Playwright Video Recording leaves the size unset without excepting reels.
102. The Why of E2E Assert Before Interacting gives the reason of Bracket State Changes.

## Rules With Two Homes

103. The phase gate is defined in Project Lifecycle, Game Phases, Work Tracking and the glossary, and the copies drifted.
104. File A Change restates the issue shape of Contributions, and the copies drifted.
105. Roadmap Template restates Work Item Names in sentence case, and speaks of epics the simple workflow lacks.
106. Answer The Player's Next Question restates Walk The User's Journey, and the copies drifted.
107. Game Work Workflow and Gamedev Working Cadence restate rules from the tickets workflow, the changelog and the wiki.
108. Workspace Levels restates Defer Tooling Until The Cost Shows Up as a level threshold.
109. Parallel Agents restates two rules of The Builder through a section of Agent Roles that only points on.
110. E2E Tests Must Demonstrate Behavior and Reels And Video Proof make one point three times.

## Facts That Went Stale

111. Claude Code puts the project's `CLAUDE.md` back after a compaction, so the reload hook loads the Core Rules twice there.
112. Steam needs a public Coming Soon page two weeks before release, and the quiet launch keeps the store page unpublished.
113. `--mute-audio` mutes Chromium alone, and Silent Runs gives it to any browser.
114. `pgrep -fl` prints only the process name on Linux, where the full command line needs `-a`.
115. A plugin's skill fixed in place is replaced on the plugin's next update.
116. The Builder says a message waits until the builder's turn ends, and Claude Code delivers it at the next tool call.
117. A Mac build that goes out also needs notarization, which Electron Packaging never names.
118. Electron Packaging drops the auto updater's side files, which an app that updates itself needs.
119. Gestures In Tests says phone keyboards often lack an Enter key.

## Left Over From One Project

120. Prototype Mode measures a prototype by when the director can hear or click it, checks it by a muted look in the browser, and its overview line makes the example one-pager a rule.
121. Changelog Per Version names whether the build was packaged, and an in-game What's New.
122. Workspace Template makes every workspace serve one client.
123. Walk The User's Journey speaks of a story and a replay (0.0.7).
124. Captures And Reels hides the window's drag bar in its browser section.
125. Incremental Pacing writes one game's progression into the rule: a few dozen clicks with the stronger click.
127. Parallel Agents names one vendor's model alias.
