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

## Context Routing

- Role, long-term responsibilities, working focus, or strategic mandate: [profile/dominik-role.md](profile/dominik-role.md)
- Teams, stakeholders, reporting lines, or organizational changes: [organization/org-chart.md](organization/org-chart.md)
- GitHub, repositories, workspace, access, or technical working rules: [github-setup/github-context.md](github-setup/github-context.md)
- Project goals, status, decisions, support commitments, risks, stakeholders, or durable next steps: the matching file in `projects/`
- All work-relevant developments for the current week: the matching file in `documentation/`

One new piece of information may require updates to more than one file.

## Primary Documentation Rule

Every work-relevant update Dominik provides must first be recorded in the current weekly file under `documentation/YYYY-Www.md`.

The weekly documentation may include:

- meetings and workshops;
- progress and completed work;
- discussions and open questions;
- delays and reasons for them;
- follow-ups and planned continuations;
- decisions, risks, and blockers;
- other context that may help create the end-of-week recap.

The weekly file is source material, not a polished management summary. A later skill creates the short summary for Jorin in the chat. That short summary is not stored in this repository.

## Summary Checkpoints

Each weekly file must show which information has already been included in a completed summary and which information remains relevant for the next summary.

- Keep a `Summary status` section with the date of the last completed summary.
- Keep an `Updates since last summary` section for all work-relevant developments added after that checkpoint.
- Advance the checkpoint only after Dominik confirms that the generated summary is the completed version. A draft does not change the checkpoint.
- `Erstelle ein Update seit der letzten Zusammenfassung.` uses only the entries under `Updates since last summary`.
- `Erstelle die vollständige Zusammenfassung für diese Woche.` may use the full weekly documentation, including information that was already summarized.
- When a new calendar week begins, create the new weekly file with no completed-summary checkpoint and an empty `Updates since last summary` section.
- The checkpoint affects summary selection only. Continue to update durable project, profile, organization, GitHub and task context normally.

## Bootstrap and Migration Exception

During the initial repository setup, cleanup, migration, or retrospective consolidation of historical information, do not create or update the current weekly documentation merely because the information is being discussed now.

In this mode:

- classify historical or already completed information directly into the relevant durable-context files;
- preserve the original timing when it is known;
- do not assign older project information to the current calendar week;
- use the weekly documentation only after the operating workflow has been activated for ongoing work.

Once the repository and its skill are in normal operation, the Primary Documentation Rule applies again to every new work-relevant update.

## Durable Context Check

After adding an update to the weekly documentation, decide whether it also changes durable context.

Update a project file only when the information remains useful beyond the current week, for example when it changes:

- project purpose or scope;
- current status or milestone;
- ownership or durable support commitments;
- key stakeholders;
- confirmed decisions;
- material risks or blockers;
- durable next steps.

Routine activity, individual meetings, temporary discussion details, and minor delays can remain only in the weekly documentation.

Also update:

- `profile/` for lasting role, responsibility, or strategic-focus changes;
- `organization/` for lasting team, stakeholder, or reporting changes;
- `github-setup/` for lasting repository, workspace, access, or protection changes.

## Classification Rules

- Dominik does not need to name a target file.
- Infer the target from the meaning of the information.
- Do not create a new project for every activity, workshop, conversation, or tool test.
- Create a project file only when there is a distinct purpose, ongoing status, concrete responsibility, or durable body of work.
- Treat general AI enablement, advisory work, workshops, and strategic prioritization as part of Dominik's role unless they become a clearly scoped project.
- When a project name is unclear, inspect [index.md](index.md) and filenames in `projects/` before creating anything new.

## Source of Truth

- `documentation/` is the chronological record of work-relevant information by week.
- Each file in `projects/` is the maintained durable context summary for that project.
- Project repositories are the technical source of truth for code, configuration, deployments, and implementation status.
- Do not silently reconcile conflicts. State them and preserve uncertainty until confirmed.

## Updating Context

When Dominik provides new information:

1. Identify the current calendar week.
2. Read or create the matching file in `documentation/`.
3. Record the work-relevant update in `Updates since last summary` when a checkpoint exists.
4. Identify affected context areas and projects.
5. Read only the relevant durable-context files.
6. Update them only when the information has lasting relevance.
7. Replace outdated statements when the new information clearly supersedes them.
8. Preserve dates for historical statements.
9. Mark missing or conflicting information explicitly instead of guessing.
10. Summarize which files changed and why.

During bootstrap or migration work, replace steps 1–3 with the Bootstrap and Migration Exception above.

## Project File Rules

Project files should stay compact and useful for future tasks. Prefer these sections when relevant:

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

## Weekly Summary Format

When creating a weekly summary for colleagues:

1. Write the complete summary in English.
2. Start with `Dominik` on its own line.
3. Use the headings `This week’s progress` and `Next steps`.
4. Use one bullet per project or workstream. Do not split one project across several bullets.
5. Start each bullet with one relevant emoji, followed by the official project name in bold, an en dash, and a compact description.
6. Include all relevant workstreams rather than forcing the recap into a fixed number of projects.
7. Keep `Next steps` very short and limit the section to a maximum of five bullets.
8. If more than five next steps are materially important, select the five most relevant and add a brief note that another important next step was omitted from the compact list.
9. Exclude internal work-organization, repository-setup, or publishing-infrastructure topics from colleague-facing summaries unless Dominik explicitly asks to include them.
10. Treat Dominik's Slack post from 2026-07-23 as the current formatting reference: compact, factual, easy to scan, and ready to paste into Slack.
11. For a delta summary, use only `Updates since last summary`. For a full weekly summary, use the entire weekly file.
12. After Dominik confirms the summary as complete, update the weekly summary checkpoint before treating later entries as input for the next summary.

## Privacy and Safety

- This repository contains internal and potentially confidential working information.
- Never add secrets, tokens, credentials, private keys, customer data, or lasting personal assessments of colleagues.
- Do not use internal context for external communication without review.
- Do not change other repositories unless explicitly asked.

## Git Behaviour

- Prefer a branch and pull request for structural changes or broad context migrations.
- Small, explicitly approved context updates may be committed directly when the available workflow requires it.
- Never commit or push without Dominik's explicit instruction.

## Response Behaviour

- Clearly separate confirmed facts, historical information, assumptions, and open questions.
- Mention changed file paths.
- Keep the update summary concise.