# Work Context Agent Guide

## Purpose

This repository provides personal and cross-project working context for Dominik Böhme. It is a starting point for new sessions, not complete technical documentation. Verify code, configuration, deployments, and implementation status in the relevant project repository when needed.

## Required Reading Order

1. Read [index.md](index.md) first.
2. Load only the files relevant to the task after that.
3. For role or working-style questions, read [profile/dominik-role.md](profile/dominik-role.md).
4. For organizational questions, read [organization/org-chart.md](organization/org-chart.md).
5. For GitHub, repository, or runtime boundaries, read [setup/github-setup.md](setup/github-setup.md) and [setup/do-not-touch-rules.md](setup/do-not-touch-rules.md).
6. For project work, start with the relevant overview in [projects/](projects/README.md), then load only the needed detail files and verify technical facts in that project's repository.
7. For current-status questions, read relevant recent journal entries and weekly summaries. Do not treat journal entries alone as durable decisions.

Do not read the entire repository by default.

## Source of Truth

- `work-context` is the source of truth for personal, organizational, and cross-project context.
- Project repositories are the source of truth for code, technical configuration, and current implementation state.
- Project files here are summaries and can become stale.
- State conflicts between this repository and a project repository explicitly; do not silently choose or reconcile them.
- Do not guess or add information without evidence.

## Freshness

- Assess dated information against its date. Undated information may be stale.
- Verify time-sensitive statements before presenting them as current.
- Old journal entries are historical records, not current status by default.
- Prefer `current-state.md`, `open-items.md`, current weekly summaries, or the technical repository for current project information.
- Label outdated information as such rather than presenting it as current.

## Privacy and Sensitivity

- This repository contains internal and potentially confidential working information. Do not use it for external communication without review.
- Never add secrets, tokens, credentials, private keys, or customer data.
- Do not store lasting personal assessments of colleagues.
- Use personal and organizational information only when relevant to the task, and avoid reproducing sensitive detail unnecessarily.

## Editing Rules

- Do not rewrite established facts without evidence; mark uncertainty explicitly.
- Do not invent project decisions.
- Record new durable decisions only in the appropriate decision file.
- Do not promote journal entries into durable truth without confirmation.
- Propose larger structural changes before making them.
- Do not change other repositories unless explicitly asked.
- Do not commit or push without explicit instruction.

## Reporting Rules

- `work-journal/` contains chronological work notes and evidence.
- `summaries/weekly/` contains condensed weekly reports.
- Project decisions belong in the relevant project decision file.
- Durable cross-project decisions belong in [decisions/](decisions/cross-project-decisions.md).
- Weekly reports may summarize journal entries but must not invent facts.

## Response Behaviour

- Clearly separate facts, assumptions, and open questions.
- Name relevant file paths.
- Do not guess when context is missing.
- Flag stale or conflicting information.
- Summarize changes concisely.
