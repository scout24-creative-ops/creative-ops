# Work Context Agent Guide

## Purpose

This repository is Dominik Böhme's maintained working context for Creative Operations. Agents should turn new information stated in natural language into targeted context updates without requiring Dominik to choose files or understand the repository structure.

This repository is not the technical source of truth for code, configuration, deployments, or implementation details. Verify those facts in the relevant project repository when needed.

## Reading Strategy

1. Read [index.md](index.md) first.
2. Identify the smallest relevant set of files.
3. Load role context only for questions about Dominik's responsibilities, strategy, or working style.
4. Load organization context only for teams, stakeholders, reporting lines, or organizational changes.
5. Load setup context only for GitHub, repositories, workspace, access, or protection rules.
6. Load only the relevant project files for project-specific questions or updates.
7. Load weekly summaries only for a requested reporting period or historical evidence.

Do not read the entire repository by default.

## Information Routing

When Dominik provides new information, classify and route it automatically:

- Role, responsibility, strategic mandate, or recurring advisory work: `profile/dominik-role.md`
- Teams, stakeholders, reporting lines, reorganizations, or ownership changes: `organization/org-chart.md`
- GitHub, workspace, repository, access, or technical working rules: `setup/github-setup.md`
- Project progress, decisions, support commitments, stakeholders, risks, blockers, or next steps: the matching file in `projects/`
- A reportable development for a specific week: additionally the matching file in `summaries/weekly/`

One update may affect multiple files. Dominik does not need to name the destination.

## Project Rules

- Project files contain the latest recorded durable context and relevant dated history.
- Update an existing project file whenever the information fits its purpose.
- Do not create a project for every workshop, consultation, experiment, or small activity.
- Create a new project file only when there is a distinct goal, ongoing status, or clear responsibility that cannot reasonably fit an existing project.
- Keep concrete use cases separate from their platform project when they have their own stakeholders, delivery status, or outcome.
- Historical next steps are not automatically current open tasks.

## Weekly Summary Rules

- Weekly summaries are historical reports, not the current source of truth.
- Add only meaningful developments, decisions, outcomes, blockers, or next steps from the relevant week.
- Durable information should also update the relevant profile, organization, setup, or project file.
- Do not reconstruct old weekly summaries unless explicitly requested.

## Source of Truth and Freshness

- `work-context` is the source of truth for Dominik's maintained role, organization, and cross-project context.
- Technical project repositories are the source of truth for code and implementation state.
- Treat dates as evidence of freshness.
- Mark uncertain, conflicting, or potentially stale information explicitly.
- Do not convert historical summaries into current facts without confirmation.
- Do not invent decisions, owners, deadlines, outcomes, or project status.

## Privacy and Sensitivity

- This repository contains internal and potentially confidential working information.
- Never add secrets, tokens, credentials, private keys, customer data, or lasting personal assessments of colleagues.
- Do not use internal context in external communication without review.

## Editing and Git Behaviour

- Preserve established facts unless newer evidence replaces them.
- Prefer targeted edits over broad rewrites.
- Keep file names and structure stable unless a structural change is explicitly requested.
- Do not modify other repositories unless explicitly asked.
- Before a write, summarize the intended change when approval has not already been given.
- Do not merge, commit, or push unless Dominik has explicitly authorized that action.

## Response Behaviour

After an update, report briefly:

- what was understood;
- which files were changed;
- what remains uncertain or needs confirmation.

Do not require Dominik to manage the repository structure.