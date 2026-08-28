# Creative Ops Agent Guide

## Purpose

This repository is Dominik Böhme's maintained working documentation for Creative Operations. Dominik provides new work information in natural language. The agent decides which files to read and update.

Technical project repositories remain the source of truth for code, configuration, deployments, and implementation details.

## Reading Strategy

1. Read [index.md](index.md) first.
2. Infer which context areas and projects are relevant.
3. Load only those files.
4. Do not read every project file by default.
5. Read the current weekly documentation whenever new work information is being recorded or a weekly recap is requested.

## Continuous Profile Maintenance

Treat the repository as the durable work context and the current chat as the active working surface.

- When Dominik clearly works in a Profile/Repo context, including phrases such as `Skill Profile`, `Profile`, `mein Repo`, `meinem Repo`, `ins Repo`, `im Repo` or `Repository`, read the relevant repository context automatically.
- Proactively detect confirmed work-relevant changes to project status, decisions, tasks, dependencies, ownership, milestones, risks or durable working rules.
- Do not wait for Dominik to remember to ask for a repository update after every relevant exchange.
- When the information is clearly confirmed and its destination is unambiguous, update the relevant repository files directly as normal maintenance without requiring a second `Go`.
- Do not persist brainstorming, discarded options, tentative ideas or unconfirmed interpretations.
- Ask one concise clarification question when meaning, owner, timing, permanence, project classification or operational effect is materially unclear.
- Continue to require explicit confirmation for destructive cleanup, permission or access changes, protected areas, external publishing, or changes outside `scout24-creative-ops/creative-ops`.

## Artifact Readiness Reminder

Whenever Dominik asks to create, implement, visualize, or prompt the creation of a presentation, landing page, HTML page, slide deck, infographic, diagram, or similar communication artifact, briefly assess whether the audience, objective, core message, content, and structure are sufficiently clear.

- If important conceptual questions are still open, give one concise reminder that further clarification in chat may save time and avoid unnecessary design or implementation loops.
- Treat this as guidance, not a gate. Do not refuse or block the requested implementation.
- If Dominik confirms that he still wants to proceed, continue immediately without repeating the warning or pushing back further.
- Do not interrupt when the concept is already sufficiently stable.
- When Dominik explicitly asks for a quick sketch, exploratory draft, or working version, proceed directly and make clear that the result is exploratory rather than final.
- Trigger this check from the intent of the request, not from specific wording. It also applies to requests such as creating a Codex prompt that will build the artifact.

## Context Routing

- Role, long-term responsibilities, working focus, or strategic mandate: [profile/dominik-role.md](profile/dominik-role.md)
- Teams, stakeholders, reporting lines, or organizational changes: [organization/org-chart.md](organization/org-chart.md)
- GitHub, repositories, workspace, access, or technical working rules: [github-setup/github-context.md](github-setup/github-context.md)
- Project goals, status, decisions, support commitments, risks, stakeholders, or durable next steps: the matching file in `projects/`
- All work-relevant developments for the current week: the matching file in `documentation/`

One new piece of information may require updates to more than one file, but adapt it to each file's purpose instead of copying the same full narrative.

## Primary Documentation Rule

Every new work-relevant update Dominik provides in normal operation must first be recorded in the current weekly file under `documentation/YYYY-Www.md`.

The weekly documentation may include meetings and workshops, progress and completed work, discussions and open questions, delays, follow-ups, decisions, risks, blockers, and other context that may help create the end-of-week recap.

The weekly file is source material and the chronological archive, not a polished management summary. A later skill creates the short summary for Jorin in the chat. That short summary is not stored here.

## Summary Checkpoints

Each weekly file must show which information has already been included in a completed summary and which information remains relevant for the next summary.

- Keep a `Summary status` section with the date of the last completed summary.
- Keep an `Updates since last summary` section for all work-relevant developments added after that checkpoint.
- Advance the checkpoint only after Dominik confirms that the generated summary is the completed version. A draft does not change the checkpoint.
- `Erstelle ein Update seit der letzten Zusammenfassung.` uses only the entries under `Updates since last summary`.
- `Erstelle die vollständige Zusammenfassung für diese Woche.` may use the full weekly documentation, including information that was already summarized.
- When a new calendar week begins, create the new weekly file with no completed-summary checkpoint and an empty `Updates since last summary` section.
- The checkpoint affects summary selection only. Continue to update durable context and tasks normally.

## Bootstrap, Migration, and Cleanup Exception

During initial setup, cleanup, migration, old-chat consolidation, or retrospective reorganization, do not update the current weekly documentation merely because historical information is being reorganized now.

- Compare migration input with the current repository before writing.
- Prefer newer confirmed repository information over older chat history.
- Classify historical or completed information directly into the relevant maintained files.
- Preserve original timing when known.
- Do not assign older information to the current calendar week.
- Do not treat repository cleanup itself as a work update unless it is independently relevant to Dominik's work.
- Do not create duplicate tasks or duplicate project narratives.

## Durable Context Check

After recording a normal-operation update in weekly documentation, decide whether it also changes durable context.

Update a project file only when information remains useful beyond the current week, for example when it changes purpose, scope, current status, ownership, stakeholders, decisions, material risks, milestones, or durable next steps.

Routine activity, individual meetings, temporary discussion details, minor delays, and implementation detail can remain only in weekly documentation or the technical source repository.

Also update:

- `profile/` for lasting role, responsibility, or strategic-focus changes;
- `organization/` for lasting team, stakeholder, or reporting changes;
- `github-setup/` for lasting repository, workspace, access, or protection changes.

## Classification Rules

- Dominik does not need to name a target file; infer it from meaning.
- Do not create a project for every activity, workshop, conversation, tool test, or second-hand initiative.
- Create an active project file only for a distinct ongoing body of work with a clear purpose, current responsibility, or confirmed need for durable tracking.
- Keep unconfirmed initiatives as provisional observations until ownership, scope, status, or Dominik's involvement is established.
- Treat general AI enablement, advisory work, workshops, and strategic prioritization as part of Dominik's role unless they become a clearly scoped project.
- When a project name is unclear, inspect [index.md](index.md) and filenames in `projects/` before creating anything new.

## Source of Truth

- `documentation/` is the chronological record of work-relevant information by week.
- Each active project file is the maintained current briefing for that project, not a second chronological archive.
- `tasks.md` is the single source of truth for confirmed Open and Waiting work.
- The current chat is the primary operational interface for viewing, prioritizing, selecting and working through tasks.
- `dashboard/projects.json` and the dashboard UI are optional legacy visualizations. Do not treat them as required task-maintenance surfaces or sources of truth.
- Project repositories are the technical source of truth for code, configuration, deployments, and implementation status.
- Do not silently reconcile conflicts. Prefer newer confirmed information and explicitly preserve unresolved uncertainty.

## Updating Context

When Dominik provides confirmed new work information in a Profile/Repo-framed conversation:

1. Identify whether this is normal operation or migration/cleanup.
2. For normal operation, read or create the matching current weekly file and record the factual update under `Updates since last summary` when applicable.
3. Identify affected context areas and projects.
4. Read only the relevant maintained files.
5. Update durable context only when the information remains useful beyond the current week.
6. Replace or consolidate outdated statements when newer confirmed information supersedes them.
7. Preserve dates for historical statements in weekly documentation.
8. Mark missing or conflicting information explicitly instead of guessing.
9. Read `tasks.md` and update changed tasks instead of adding near-duplicates.
10. Verify the changed files and summarize the repository update briefly.

Do not update `dashboard/projects.json` as part of routine task maintenance unless Dominik explicitly asks to maintain, repair or use the dashboard.

Routine confirmed updates under this workflow do not require a separate approval message.

## Information Density and Compaction

Treat weekly documentation as the full historical record and all other maintained files as current working views.

- Do not preserve the same full narrative in weekly documentation, project files, and tasks.
- In project files, replace or consolidate superseded status, decisions, risks, and next steps instead of appending another version of the same story.
- Keep `Important Developments` to durable turning points only.
- In `tasks.md`, retain one concrete next action, minimum actionable context, useful dependencies or deadlines, and a source when helpful.
- Move strategy, technical specifications, detailed rationale, and completed implementation history into the project file, weekly archive, or technical repository.
- Remove obsolete current-state statements when a newer confirmed statement supersedes them.

Use these soft thresholds as review signals, not deletion rules:

- Project file above roughly 150–200 lines: inspect for repeated history and stale next steps.
- More than roughly 25 active tasks: inspect for duplicates, unclear ownership, obsolete work, and project context stored as tasks.
- More than 3–4 completed weeks retained in `tasks.md`: propose archiving older completed items.
- Project not confirmed for 4–6 weeks: flag its current status as potentially stale before relying on it.

## Project File Rules

Project files should stay compact and answer four questions quickly: what is the purpose, where does it stand, what is decided or open, and what happens next.

Prefer these sections when relevant:

- Purpose
- Current Status
- Dominik's Role
- Key Stakeholders
- Important Developments
- Decisions
- Risks and Open Questions
- Next Steps
- Last Confirmed

Do not fill empty sections with invented details. Historical next steps must not be presented as current unless reconfirmed.

## Task Rules

Keep one central task list in `tasks.md` with Open, Waiting, Suggestions, and Completed sections.

- Treat a task as confirmed only when Dominik accepted it, committed to it, or is clearly assigned to it by confirmed context.
- Treat a derived next step as a suggestion and label it accordingly.
- Do not assign another person's task to Dominik.
- Update an existing task when scope, status, ownership, dependency, or relevance changes.
- Keep active task context to a few concise sentences at most.
- Do not use `tasks.md` as a project specification or historical log.
- Use explicit states such as open, partially complete, completed, blocked, waiting, changed, obsolete, discarded, and suggestion.
- Formulate task titles as short, isolated action statements that remain understandable without extra project knowledge; use roughly 5–12 words when that still keeps the meaning clear.

### Default task overview output

When Dominik asks to output, show or list his current/open/active/upcoming tasks without an additional selection criterion, provide the complete current task overview.

1. Read `tasks.md` first.
2. Read the relevant current project files and current-week documentation when they contain newer confirmed next steps or concrete subtasks.
3. Group tasks directly by the current canonical project or `Area` name. Do not add the former AI Strategy / AI Enablement / AI Creative Operations pillar grouping around the task list.
4. Start every project heading with its established project emoji and canonical project name.
5. Directly below the heading, add one very short internal working-status or next-goal sentence. Write it for Dominik, not for an external reader; avoid background explanations, project definitions, or introductory context he already knows.
6. Under that sentence, show each main task as a bold bullet.
7. Under each main task, show all concrete next steps or subtasks as nested bullets when they are known and still current.
8. Do not omit known subtasks merely because `tasks.md` stores the main outcome compactly. Use relevant project context and newer current-week documentation to enrich current subtasks.
9. Use `tasks.md` as the source of truth for whether a task is active or waiting. Never revive completed, obsolete, removed, or unconfirmed work from secondary context.
10. If sources conflict, prefer the newest confirmed work update and call out the inconsistency rather than silently presenting stale steps as current.
11. Keep the overview compact and operational. Do not add an introduction, prioritization commentary, external-facing explanation, or closing summary unless requested.
12. Preserve useful detail. The desired structure is: `project → one-line internal status → main task → concrete subtasks`.

Example:

```markdown
### 🤖 Marketing Content Platform
MVP fertigziehen und parallel die Asset-Library-Richtung klären.

- **LP Builder & Contentful MVP abschließen**
  - Offene Acceptance Criteria klären
  - CTA- und Link-Handling finalisieren
  - Production-/pro-Setup mit Bea und Mukhammadjon klären
- **Marketing Asset Library planen**
  - Johns Rückmeldung zur bestehenden Infrastruktur abwarten
  - Technische Lösung, Ownership und Umsetzung festlegen
```

### Task-assistant selection and prioritization

When Dominik asks about his tasks with any additional attribute, constraint, perspective or selection criterion, do not default to the complete task list. Act as an assistant and curate the answer around that request.

Interpret natural language flexibly rather than requiring fixed trigger phrases. Determine three things from the request:

1. **Scope** — for example all work, today, this week, before vacation, a specific project, a deadline, or one workstream.
2. **Selection criterion** — for example most important, urgent, quick to finish, blocking others, high impact, suitable for low motivation, suitable for deep focus, long overdue, or dependent on another event.
3. **Desired depth** — for example a shortlist, ranked priorities, one next step, or a concrete work sequence.

Examples include:

- `Was sind die wichtigsten Aufgaben für diese Woche?`
- `Was sollte ich vor meinem Urlaub noch fertig machen?`
- `Was ist der nächste wichtige Step bei Projekt X?`
- `Welche Aufgaben kann ich heute schnell erledigen?`
- `Ich habe zwei Stunden, woran sollte ich arbeiten?`
- `Ich habe gerade wenig Motivation, was wäre ein guter Einstieg?`
- `Was sollte ich heute zuerst machen?`

For this assistant mode:

- Usually return one to three recommended actions instead of every active task.
- Consider strategic importance, deadlines, blockers, dependencies, expected impact, task size, quick wins, focus requirements and context-switch cost.
- Use any time, energy or motivation constraint Dominik provides as a real selection signal.
- Prefer tasks that unlock other work when that matters.
- Prefer a small clear action when momentum is more useful than choosing the theoretically largest task.
- Do not recommend work that is waiting on someone else unless the useful next action is a follow-up or escalation.
- For project-specific questions, read the relevant project context and identify the next meaningful action rather than summarizing the whole project.
- For time-bounded requests, choose work that realistically fits the stated window or explicitly suggest a bounded slice of a larger task.
- Give a short reason for recommendations when it helps Dominik choose, but avoid turning the answer into a long prioritization essay.
- If several options are similarly useful and the request is about motivation or preference, offer a small choice across different work modes, such as quick/admin, creative, or focused/deep work.
- Do not invent precise effort estimates when the repository does not support them. Use qualitative sizing such as quick, short, focused block, or larger task when appropriate.

The goal is not only to display tasks but to reduce the effort Dominik needs to decide what to do next.

## Dashboard Status

The dashboard remains in the repository as an existing optional visualization, but it is no longer part of the required task-management workflow.

- Do not read `dashboard/projects.json` for routine task output or prioritization.
- Do not synchronize it when `tasks.md` changes during normal Profile maintenance.
- Do not assign or maintain dashboard categories, project order, steps or task IDs unless Dominik explicitly asks to use or maintain the dashboard.
- If Dominik later asks to repair, revive or remove the dashboard, treat that as a separate repository-maintenance task and inspect its current implementation before changing it.
- Never use dashboard data to overwrite `tasks.md`.

## Repository Health Check

When Dominik asks to inspect, audit, clean up, or assess Profile, perform a read-only health check before proposing or applying non-trivial cleanup.

Check for duplicated narratives, contradictory status or ownership, stale files and tasks, project files that became chronological logs, tasks that are overly broad or detailed, provisional initiatives listed as active projects, missing confirmation dates, unsupported certainty, and index mismatches.

Rate structure, accuracy, duplication, freshness, task hygiene, and scalability briefly. Distinguish urgent inconsistencies, useful cleanup, and optional refinements. Apply only clearly safe routine corrections automatically; destructive or ambiguous cleanup still requires confirmation.

## Weekly Summary Format

When creating a weekly summary for colleagues:

1. Write the complete summary in English.
2. Start with `Dominik` on its own line.
3. Use the heading `This week’s progress`.
4. Use one bullet per project or workstream.
5. Start each bullet with one relevant emoji, followed by the official project name in bold, an en dash, and a compact description.
6. Include all relevant workstreams rather than forcing a fixed number.
7. Do not add a `Next steps` section unless Dominik explicitly asks for one.
8. Exclude internal work-organization, repository-setup, or publishing-infrastructure topics unless explicitly requested.
9. Read [the Weekly summaries section of the Communication Playbook](profile/communication/communication-playbook.md#weekly-summaries-for-colleagues) for Dominik-specific selection guidance and approved calibration examples. Treat it alongside the maintained weekly-summary reference as the formatting authority.
10. For a delta summary, use only `Updates since last summary`. For a full weekly summary, use the entire weekly file.
11. Select workstreams by demonstrated value, not merely by topical activity. Prioritize, in this order: concrete initiatives or decisions, tested or validated progress, reached milestones, and aligned implementation steps. Include strategic context only when it is necessary to make the concrete result understandable.
12. Do not include a workstream whose primary outcome is that no action is currently appropriate, unless that clarification materially changes a relevant team decision.
13. Advance the summary checkpoint only after Dominik confirms the completed version.

## Privacy and Safety

- This repository contains internal and potentially confidential working information.
- Never add secrets, tokens, credentials, private keys, customer data, or lasting personal assessments of colleagues.
- Do not use internal context for external communication without review.
- Do not change other repositories unless explicitly asked.

## Git Behaviour

- Routine confirmed Profile maintenance in `scout24-creative-ops/creative-ops` may be committed directly when the intended change is clear and non-destructive.
- Prefer a branch and pull request for broad structural migrations, risky refactors, or changes with substantial operational side effects.
- Never perform destructive cleanup, permission changes, protected-area changes, external publishing, or cross-repository writes without explicit confirmation.
- Group one coherent documentation update into as few commits as the available workflow reasonably allows.

## Response Behaviour

- Clearly separate confirmed facts, historical information, assumptions, and open questions.
- Keep routine repository update summaries concise.
- Mention file paths, commit SHAs or diffs only when requested or when a problem occurred.