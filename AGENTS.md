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

Every work-relevant update Dominik provides must first be recorded in the current weekly file under `documentation/YYYY-Www.md`.

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

During initial setup, cleanup, migration, or retrospective consolidation, do not update the current weekly documentation merely because historical information is being reorganized now.

- Classify historical or completed information directly into the relevant maintained files.
- Preserve original timing when known.
- Do not assign older information to the current calendar week.
- Do not treat repository cleanup itself as a work update unless it is independently relevant to Dominik's work.

## Durable Context Check

After recording an update in weekly documentation, decide whether it also changes durable context.

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
- Project repositories are the technical source of truth for code, configuration, deployments, and implementation status.
- Do not silently reconcile conflicts. State them and preserve uncertainty until confirmed.

## Updating Context

When Dominik provides new information:

1. Identify the current calendar week.
2. Read or create the matching file in `documentation/`.
3. Record the factual update in `Updates since last summary` when a checkpoint exists.
4. Identify affected context areas and projects.
5. Read only the relevant maintained files.
6. Update them only when the information has lasting relevance.
7. Replace or consolidate outdated statements when newer confirmed information supersedes them.
8. Preserve dates for historical statements in weekly documentation.
9. Mark missing or conflicting information explicitly instead of guessing.
10. Read `tasks.md` and update changed tasks instead of adding near-duplicates.
11. Summarize which files changed and why.

During bootstrap, migration, or cleanup, replace steps 1–3 with the exception above.

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

When Dominik asks for his current, open, active, or upcoming tasks, use this presentation by default unless he requests another format:

1. Group tasks directly by the current canonical project or `Area` name. Do not add the former AI Strategy / AI Enablement / AI Creative Operations pillar grouping around the task list.
2. Start every project heading with its established project emoji and canonical project name.
3. Directly below the heading, add one very short internal working-status or next-goal sentence. Write it for Dominik, not for an external reader; avoid background explanations, project definitions, or introductory context he already knows.
4. Under that sentence, show each main task as a bold bullet.
5. Under each main task, show all concrete next steps or subtasks as nested bullets when they are known and still current.
6. Do not omit known subtasks merely because `tasks.md` stores the main outcome compactly. For read-only task overviews, reconcile the main task with `dashboard/projects.json`, the relevant current project file, and newer current-week documentation when those sources contain more recent or more detailed confirmed next steps.
7. Use `tasks.md` as the source of truth for whether a task is active or waiting; use dashboard/project/weekly context only to enrich, correct, or flag stale task wording and subtasks. Never revive completed, obsolete, removed, or unconfirmed work from those secondary sources.
8. If the sources conflict, prefer the newest confirmed work update and call out the inconsistency rather than silently presenting stale steps as current.
9. Keep the overview compact and operational. Do not add an introduction, prioritization commentary, external-facing explanation, or closing summary unless requested.
10. Preserve useful detail. The desired structure is: `project → one-line internal status → main task → concrete subtasks`.

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

## Dashboard Synchronization

`tasks.md` is the single source of truth for open and waiting tasks. `dashboard/projects.json` is a derived visual view and must never be used to write tasks back into `tasks.md`.

When a confirmed change affects an open or waiting task, first read the relevant Profile context and obtain Dominik's existing explicit approval before writing. After approval, update `tasks.md` and any other relevant context files, then regenerate `dashboard/projects.json` from the final task state in the same change. Include every task from `Open` and `Waiting` exactly once, grouped by canonical `Area`/project name; exclude `Suggestions`, `Completed`, obsolete items, and unconfirmed ideas. Keep visible task text short and isolated enough to read without extra project knowledge; use a concise concrete action and name the object or result whenever that improves clarity. Assign each task exactly one category: `focus`, `continue`, or `waiting`. Preserve confirmed categories unless priority or dependency changed; ask when a reclassification is unclear.

Do not synchronize the dashboard for historical-only documentation, context-only changes without task impact, or unrelated organization updates. Before committing a dashboard-relevant change, validate Open + Waiting count against dashboard task count, exact one-time task coverage, absence of suggestions/completed tasks, non-empty unique projects, valid task fields/categories, valid JSON, and local HTTP loading without JavaScript errors. Commit the task/context changes and derived dashboard update together. After an approved push to `main`, the existing GitHub Pages workflow deploys `dashboard/` automatically; no separate dashboard publish step or generated commit is allowed.

The Profile skill must apply the same sequence whenever it is available: finalize `tasks.md`, regenerate `dashboard/projects.json`, validate both and the local dashboard, then report that the existing Pages workflow will deploy after push. No editable Profile skill is currently installed in this workspace; if one is later packaged, add this sequence to its task-update workflow without replacing its approval, compactness, or complete-coverage rules.

## Repository Health Check

When Dominik asks to inspect, audit, clean up, or assess Profile, perform a read-only health check before proposing changes.

Check for duplicated narratives, contradictory status or ownership, stale files and tasks, project files that became chronological logs, tasks that are overly broad or detailed, provisional initiatives listed as active projects, missing confirmation dates, unsupported certainty, and index mismatches.

Rate structure, accuracy, duplication, freshness, task hygiene, and scalability briefly. Distinguish urgent inconsistencies, useful cleanup, and optional refinements. Propose the smallest useful cleanup and request explicit approval before writing.

## Weekly Summary Format

When creating a weekly summary for colleagues:

1. Write the complete summary in English.
2. Start with `Dominik` on its own line.
3. Use the headings `This week’s progress` and `Next steps`.
4. Use one bullet per project or workstream.
5. Start each bullet with one relevant emoji, followed by the official project name in bold, an en dash, and a compact description.
6. Include all relevant workstreams rather than forcing a fixed number.
7. Keep `Next steps` very short and limit it to five bullets.
8. Exclude internal work-organization, repository-setup, or publishing-infrastructure topics unless explicitly requested.
9. Treat Dominik's Slack post from 2026-07-23 as the formatting reference: compact, factual, easy to scan, and ready to paste into Slack.
10. For a delta summary, use only `Updates since last summary`. For a full weekly summary, use the entire weekly file.
11. Advance the summary checkpoint only after Dominik confirms the completed version.

## Privacy and Safety

- This repository contains internal and potentially confidential working information.
- Never add secrets, tokens, credentials, private keys, customer data, or lasting personal assessments of colleagues.
- Do not use internal context for external communication without review.
- Do not change other repositories unless explicitly asked.

## Git Behaviour

- Prefer a branch and pull request for structural changes or broad context migrations.
- Small, explicitly approved context updates may be committed directly when the available workflow requires it.
- Never commit or push without Dominik's explicit instruction.
- Group one coherent documentation update into as few commits as the available workflow reasonably allows.

## Response Behaviour

- Clearly separate confirmed facts, historical information, assumptions, and open questions.
- Mention changed file paths.
- Keep the update summary concise.
