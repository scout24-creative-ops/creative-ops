# Work Context

Work Context is Dominik Böhme's versioned knowledge base for Creative Operations. It gives agents and new AI-assisted sessions the relevant background without replacing technical project documentation.

Dominik should be able to provide new information in natural language. The agent is responsible for deciding which context files need to be read and updated.

## Repository Areas

```text
profile/        Role, responsibilities, strategy, and working focus
organization/   Teams, stakeholders, reporting lines, and organizational context
setup/          GitHub, workspace, repositories, and technical working boundaries
projects/       Maintained context for each active project
summaries/      Historical weekly reports
```

## How It Works

1. Start with [index.md](index.md).
2. Identify the relevant context area or project.
3. Read only the required files.
4. Update durable information in the matching context file.
5. Add reportable developments to the relevant weekly summary when needed.

Dominik does not need to know the target path or repository structure when sharing an update.

## Information Model

### Profile

`profile/dominik-role.md` describes Dominik's lasting role, responsibilities, strategic focus, and working principles.

### Organization

`organization/org-chart.md` contains relevant teams, stakeholders, reporting lines, and organizational changes.

### Setup

`setup/github-setup.md` contains GitHub, repository, workspace, access, and protection context.

### Projects

Each active project has one file under `projects/`. These files contain the latest durable understanding of the project's purpose, status, stakeholders, decisions, risks, and next steps.

### Weekly Summaries

`summaries/weekly/` contains historical reports for individual weeks. Weekly summaries explain what happened at a point in time; they are not automatically the current project status.

## Important Boundary

This repository is the source of truth for personal, organizational, and cross-project context. The relevant technical project repositories remain the source of truth for code, configuration, deployments, and implementation details.

Some information is internal or confidential and must be handled accordingly. Never store credentials, secrets, customer data, or lasting personal assessments of colleagues.

## Agent Rules

Detailed reading, classification, updating, privacy, and Git rules are defined in [AGENTS.md](AGENTS.md).
