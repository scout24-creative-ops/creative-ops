# GitHub and Workspace Context

_Last reviewed: 2026-07-20_

## Workspace

- Workspace: `/Users/dboehme/Projects/GPT Agents`
- Legacy archive: `/Users/dboehme/Projects/GPT Agents/_Archiv/legacy-github-repos/`
- This workspace contains independent project repositories. `creative-ops` provides cross-project documentation; project repositories remain the source of truth for their code, configuration, deployments, and implementation state.

## GitHub Organizations and Accounts

- New and active work generally belongs in `scout24-creative-ops`.
- `DominikBoehme` is not an active work location.
- `DominikBoehme/ai-marketing-creative-hub` remains as a redirect and is not actively developed.
- `is24-lp-creator` and `s24-creative-ops` contain documented legacy or publish-related areas described below.

## Repository Overview

### Active repositories in `scout24-creative-ops`

- `creative-hub`
- `lp-builder`
- `design-system`
- `email-builder`
- `email-builder-agent`
- `email-automation`
- `loft-campaign-generator`
- `contentful-marketing`
- `marius-schewe`
- `acquise-report`
- `creative-ops`

### Productive assignments

- Productive LP Builder: `scout24-creative-ops/lp-builder`
- Test project: `scout24-creative-ops/lp-builder-agent`
- Design system source: `scout24-creative-ops/design-system`
- Current email automation: `scout24-creative-ops/email-automation`

### Collaboration references

- Peter contributes to `creative-hub`.
- Ciaran contributes to `lp-builder` and `design-system`.

## Repository Status Categories

- **Active:** the `scout24-creative-ops` repositories listed above are documented as the active work location.
- **Legacy runtime:** `is24-lp-creator/lp-creator` serves existing AEM landing pages.
- **Publish target:** `s24-creative-ops/design-library` remains the current live publish target for the Design Library.
- **Redirect:** `DominikBoehme/ai-marketing-creative-hub` remains as a redirect only.

## Sources of Truth

- Use this repository for personal, organizational, weekly, and cross-project context.
- Verify technical facts in the relevant project repository.
- Do not derive repository status, permissions, or implementation details solely from a repository name.

## Working Rules

- Changes to this documentation require Dominik's explicit approval.
- Do not create hidden auto-commits or auto-pushes.
- Keep active, legacy, archive, publish, and redirect roles distinct when describing repositories.

## Protected and Do-Not-Touch Areas

### Legacy runtime

Do not delete, make private, rename, or disable GitHub Pages for `is24-lp-creator/lp-creator`. Existing AEM pages may still load its CSS and JavaScript paths.

### New runtime

New landing pages use `https://scout24-creative-ops.github.io/lp-builder/runtime/...`. Do not move, delete, or rename files under `lp-builder/runtime/**` without deliberate review.

### Creative Hub and Design Library

Keep `DominikBoehme/ai-marketing-creative-hub` as a redirect. Keep the live Design Library in `s24-creative-ops/design-library` until a separate migration is planned.

## Authentication and Local Tooling

Authentication state, permissions, and credential values are not documented in this repository. Do not add tokens, secrets, passwords, private keys, or credential values here.

## Known Limitations

- Repository access rights and visibility must be verified through the applicable GitHub tooling; they are not asserted here.
- Historical and legacy repository references may be required by existing pages or runtime paths.
- The documented repository roles should not replace a direct technical check in the relevant repository.

## Update Guidance

Update this file when confirmed workspace, organization, repository-role, source-of-truth, or protection-rule information changes. Keep facts dated where practical and do not record unverified access claims.
