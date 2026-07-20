# Creative Ops

This repository is Dominik Böhme's versioned working documentation for Creative Operations. It stores weekly work documentation and durable context about projects, role, organization, and GitHub setup.

Dominik can provide new work information in natural language. The agent or chat decides which files need to be read and updated.

## Repository Areas

```text
profile/          Role, responsibilities, strategy, and working focus
organization/     Teams, stakeholders, reporting lines, and organizational context
github-setup/     GitHub, workspace, repositories, and technical working boundaries
projects/         Durable context for active projects
documentation/    Complete week-by-week work documentation
```

## How New Information Is Stored

1. Every work-relevant update is added to the current weekly file in `documentation/`.
2. The update is checked for durable relevance.
3. Durable project information is additionally added to the matching file in `projects/`.
4. Lasting role, organization, or GitHub information is additionally added to the corresponding area.

The weekly documentation is the input for a later skill that creates a short management summary in the chat. That short summary is not stored in this repository.

## Important Boundary

This repository is the source of truth for personal, organizational, and cross-project context. Technical project repositories remain the source of truth for code, configuration, deployments, and implementation details.

Detailed agent rules are defined in [AGENTS.md](AGENTS.md). Start navigation in [index.md](index.md).
