# Work Context Agent Guide

## Purpose

This repository provides personal and cross-project working context for Dominik Böhme's Creative Operations area. It is a starting point for new sessions, not complete technical documentation. Verify code, configuration, deployments, and implementation status in the relevant project repository when needed.

## Required Reading Order

1. Read [index.md](index.md) first.
2. Load only the files relevant to the task after that.
3. For role, strategy, or working-style questions, read [profile/dominik-role.md](profile/dominik-role.md).
4. For teams, stakeholders, or organizational questions, read [organization/org-chart.md](organization/org-chart.md).
5. For GitHub, workspace, repositories, or technical protection rules, read [setup/github-setup.md](setup/github-setup.md).
6. For projects, priorities, progress, decisions, blockers, or next steps, read [context/creative-operations-summary.md](context/creative-operations-summary.md).
7. For a current weekly report, also read the relevant file in [summaries/weekly/](summaries/weekly/README.md).

Do not read the entire repository by default.

## Source of Truth

- `work-context` is the source of truth for personal, organizational, and cross-project context.
- Project repositories are the source of truth for code, technical configuration, and current implementation state.
- The Creative Operations summary is a context summary and can become stale.
- State conflicts between this repository and a project repository explicitly; do not silently choose or reconcile them.
- Do not guess or add information without evidence.

## Freshness

- Assess dated information against its date. Undated information may be stale.
- Verify time-sensitive statements before presenting them as current.
- Weekly summaries are historical reports, not current status by default.
- Prefer the Creative Operations summary, current weekly summaries, or the technical repository for current project information.
- Label outdated information as such rather than presenting it as current.

## Privacy and Sensitivity

- This repository contains internal and potentially confidential working information. Do not use it for external communication without review.
- Never add secrets, tokens, credentials, private keys, or customer data.
- Do not store lasting personal assessments of colleagues.
- Use personal and organizational information only when relevant to the task, and avoid reproducing sensitive detail unnecessarily.

## Editing Rules

- Do not rewrite established facts without evidence; mark uncertainty explicitly.
- Do not invent project decisions.
- Record new durable project and cross-project decisions in [context/creative-operations-summary.md](context/creative-operations-summary.md) once confirmed.
- Do not promote weekly reports into durable truth without confirmation.
- Propose larger structural changes before making them.
- Do not change other repositories unless explicitly asked.
- Do not commit or push without explicit instruction.

## Reporting Rules

- [context/creative-operations-summary.md](context/creative-operations-summary.md) contains current projects, priorities, progress, decisions, risks, and follow-ups.
- `summaries/weekly/` contains condensed weekly reports.
- Most ongoing updates should affect only the Creative Operations summary and, when relevant, the current weekly summary.
- Weekly reports may summarize confirmed updates but must not invent facts or duplicate durable context unnecessarily.

## Response Behaviour

- Clearly separate facts, assumptions, and open questions.
- Name relevant file paths.
- Do not guess when context is missing.
- Flag stale or conflicting information.
- Summarize changes concisely.
