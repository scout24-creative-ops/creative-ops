# Work Context Agent Guide

## Purpose

This repository is Dominik Böhme's maintained working context for Creative Operations. Agents should turn new information stated in natural language into targeted context updates without requiring Dominik to choose files or understand the repository structure.

This repository is not the technical source of truth for code, configuration, deployments, or implementation details. Verify those facts in the relevant project repository when needed.

## Reading Strategy

1. Read [index.md](index.md) first.
2. Infer which context areas are relevant to the request.
3. Load only those files.
4. Do not read every project file by default.
5. Read recent weekly summaries only when the request is about a specific week, recent activity, or reporting.

## Context Routing

- Role, long-term responsibilities, working focus, or strategic mandate: [profile/dominik-role.md](profile/dominik-role.md)
- Teams, stakeholders, reporting lines, or organizational changes: [organization/org-chart.md](organization/org-chart.md)
- GitHub, repositories, workspace, access, or technical working rules: [setup/github-setup.md](setup/github-setup.md)
- Project goals, status, decisions, support commitments, risks, stakeholders, or next steps: the matching file in `projects/`
- Week-specific developments: the matching file in `summaries/weekly/`

One new piece of information may require updates to more than one file. For example, a support commitment can update a project file and also appear in the current weekly summary.

## Classification Rules

- Dominik does not need to name a target file.
- Infer the target from the meaning of the information.
- Do not create a new project for every activity, workshop, conversation, or tool test.
- Create a project file only when there is a distinct purpose, ongoing status, concrete responsibility, or durable body of work.
- Treat general AI enablement, advisory work, workshops, and strategic prioritization as part of Dominik's role unless they become a clearly scoped project.
- When a project name is unclear, inspect [index.md](index.md) and filenames in `projects/` before creating anything new.

## Source of Truth

- `work-context` is the source of truth for personal, organizational, and cross-project context.
- Each file in `projects/` is the maintained context summary for that project.
- Project repositories are the technical source of truth for code, configuration, deployments, and implementation status.
- Weekly summaries are historical reports, not the durable source of current project status.
- Do not silently reconcile conflicts. State them and preserve uncertainty until confirmed.

## Updating Context

When Dominik provides new information:

1. Identify the affected context areas and projects.
2. Read only the relevant files.
3. Compare the new information with the recorded status.
4. Update durable context in the appropriate profile, organization, setup, or project file.
5. Add the development to the current weekly summary only when it is reportable for that week.
6. Replace outdated statements when the new information clearly supersedes them.
7. Preserve dates for historical statements.
8. Mark missing or conflicting information explicitly instead of guessing.
9. Summarize which files changed and why.

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

## Weekly Summary Rules

- Weekly summaries record what happened in a specific week.
- Project files record the latest durable understanding.
- A reportable update may appear in both places for different reasons.
- Do not reconstruct old weekly summaries unless explicitly requested.
- Do not promote an old weekly statement into current truth without confirmation.

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
