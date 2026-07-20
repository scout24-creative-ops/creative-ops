# Work Context

Work Context is Dominik Böhme's versioned knowledge base for Creative Operations. Its purpose is to let agents read and update only the context relevant to a task, while Dominik can provide new information in natural language without managing files himself.

## Contents

- `profile/` — role, responsibilities, strategy, and working focus
- `organization/` — teams, stakeholders, reporting lines, and organizational changes
- `setup/` — GitHub, workspace, repository, and protection context
- `projects/` — latest recorded durable context for active projects
- `summaries/weekly/` — historical weekly reports

## How Agents Should Work

Read [index.md](index.md) first and follow [AGENTS.md](AGENTS.md). Load only the smallest relevant set of files. Route new information automatically to the appropriate profile, organization, setup, project, and, when reportable, weekly-summary files.

Dominik should not need to select target files or maintain the structure manually.

## Important Boundary

This repository provides working context. Relevant project repositories remain the technical source of truth for code, configuration, deployments, and current implementation details.

Information here may be internal or confidential. Never store secrets, credentials, customer data, or lasting personal assessments of colleagues.