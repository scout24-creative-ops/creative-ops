# Work Context

Work Context is Dominik Böhme's versioned knowledge base for Creative Operations. It helps people and new AI-assisted sessions understand the relevant background without replacing project documentation.

## What This Repository Contains

- Profile, role, strategy, and working style
- Relevant organization, teams, and stakeholders
- GitHub, workspace, repository, and protection context
- Current Creative Operations priorities, projects, decisions, risks, and follow-ups
- Concise weekly summaries

## How to Start

Read [index.md](index.md) for the compact navigation overview. Codex and similar agents should follow [AGENTS.md](AGENTS.md) before loading additional context.

## Important Boundary

This repository provides context. The relevant project repositories remain the technical source of truth for code, configuration, deployments, and implementation status. Some information here is internal or confidential and must be handled accordingly.

## Repository Structure

```text
profile/        Role and working focus
organization/   Relevant organization and stakeholders
setup/          GitHub, workspace, and protection context
context/        Current Creative Operations summary
summaries/      Condensed weekly reports
```

## Updating the Context

Keep role and strategy information in `profile/`, organization information in `organization/`, and GitHub or protection information in `setup/`. Keep projects, priorities, decisions, risks, and follow-ups in `context/creative-operations-summary.md`; use `summaries/weekly/` for concise week-specific reporting. Keep changes traceable and dated where practical.
