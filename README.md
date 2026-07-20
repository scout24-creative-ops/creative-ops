# Work Context

Work Context is Dominik Böhme's versioned knowledge base for personal and cross-project working context. It helps people and new AI-assisted sessions understand the relevant background without replacing project documentation.

## What This Repository Contains

- Profile, role, and working focus
- Relevant organization and stakeholders
- Project context and cross-project decisions
- GitHub setup and runtime protection rules
- Work journal entries and weekly-summary guidance

## How to Start

Read [index.md](index.md) for the compact navigation overview. Codex and similar agents should follow [AGENTS.md](AGENTS.md) before loading additional context.

## Important Boundary

This repository provides context. The relevant project repositories remain the technical source of truth for code, configuration, deployments, and implementation status. Some information here is internal or confidential and must be handled accordingly.

## Repository Structure

```text
profile/        Role and working focus
organization/   Relevant organization and stakeholders
projects/       Project summaries and status files
decisions/      Durable cross-project decisions
setup/          GitHub setup and protection rules
work-journal/   Chronological work notes
summaries/      Condensed weekly reports
```

## Updating the Context

Keep durable facts in the appropriate context files, ongoing work in `work-journal/`, and condensed reports in `summaries/weekly/`. Record decisions in the relevant decision files. Keep changes traceable and dated where practical.
