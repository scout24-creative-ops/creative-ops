# GitHub and Workspace Context

_Last reviewed: 2026-07-22_

## Workspace

- Workspace: `/Users/dboehme/Projects/GPT Agents`
- Public publishing workspace: `/Users/dboehme/Projects/GPT Agents/Public/`
- Legacy archive: `/Users/dboehme/Projects/GPT Agents/_Archiv/legacy-github-repos/`
- This workspace contains independent project repositories. `creative-ops` provides cross-project documentation; project repositories remain the source of truth for their code, configuration, deployments, and implementation state.
- `Public` is intended to become a separate public publishing repository for reviewed files that should be reachable through stable web URLs.

## GitHub Organizations and Accounts

- New and active work generally belongs in `scout24-creative-ops`.
- `DominikBoehme` is not an active work location.
- `DominikBoehme/ai-marketing-creative-hub` remains as a redirect and is not actively developed.
- `is24-lp-creator` and `s24-creative-ops` contain documented legacy or publish-related areas described below.

## Repository Overview

### Active repositories in `scout24-creative-ops`

- `creative-hub`
- `lp-builder`
- `lp-builder-agent`
- `design-system`
- `email-builder`
- `email-builder-agent`
- `email-automation`
- `loft-campaign-generator`
- `contentful-marketing`
- `marius-schewe`
- `acquise-report`
- `creative-ops`

### Planned public publishing repository

- Local workspace folder: `Public`
- Intended repository: `scout24-creative-ops/public`
- Status on 2026-07-22: the local folder exists, but the repository was not reachable through the connected GitHub tooling and must still be initialized or connected.
- Purpose: publish reviewed presentations, handovers, documents and related assets through stable public web URLs.
- The original working file remains in its project repository. `Public` contains only the reviewed publishing copy and metadata linking back to the source repository and source path.
- Published URLs should remain stable when source files are revised and republished.
- The older top-level `shared` folder is planned for removal after references and still-needed files have been checked and migrated.

### Productive assignments

- Productive LP Builder: `scout24-creative-ops/lp-builder`
- Test project: `scout24-creative-ops/lp-builder-agent`
- Design system source: `scout24-creative-ops/design-system`
- Current email automation: `scout24-creative-ops/email-automation`

### Collaboration references

- Peter contributes to `creative-hub`.
- Ciaran contributes to `lp-builder` and `design-system`.
- Mitch's `is24-email-modules` repository is an external productive collaboration repository for deployed email modules and the related AWS and Iterable integration.

## Repository Status Categories

- **Active:** the `scout24-creative-ops` repositories listed above are documented as the active work location.
- **Planned publish target:** `scout24-creative-ops/public` is intended as the general public distribution repository once initialized and verified.
- **Legacy runtime:** `is24-lp-creator/lp-creator` serves existing AEM landing pages.
- **Publish target:** `s24-creative-ops/design-library` remains the current live publish target for the Design Library.
- **Redirect:** `DominikBoehme/ai-marketing-creative-hub` remains as a redirect only.
- **External productive collaboration:** Mitch's `is24-email-modules` repository is a productive platform outside Dominik's own active repository group and must be treated as read-only unless a safe operating process is explicitly agreed.

## Public Publishing Workflow

- Create and edit original files in the relevant project repository.
- Publish only through an explicit publish or republish action; do not automatically mirror every project file.
- Copy the approved artifact into `Public` while leaving the original unchanged.
- Store source metadata with the publication, including the source repository, source path and last-published date.
- Prefer stable destination paths so updates replace the published artifact without changing its URL.
- Keep project and publishing commits separate.
- Before publishing, confirm that the content is suitable for unrestricted public access and contains no confidential information, customer data, credentials or internal-only context.
- Before deleting `shared`, inspect references, migrate still-needed files and verify that no active public URLs or project dependencies rely on it.

## Sources of Truth

- Use this repository for personal, organizational, weekly, and cross-project context.
- Verify technical facts in the relevant project repository.
- Original project files remain the source of truth; published copies in `Public` are distribution artifacts.
- Do not derive repository status, permissions, or implementation details solely from a repository name.

## Working Rules

- Changes to this documentation require Dominik's explicit approval.
- Do not create hidden auto-commits or auto-pushes.
- Keep active, legacy, archive, publish, redirect, and external productive collaboration roles distinct when describing repositories.

## Protected and Do-Not-Touch Areas

### Legacy runtime

Do not delete, make private, rename, or disable GitHub Pages for `is24-lp-creator/lp-creator`. Existing AEM pages may still load its CSS and JavaScript paths.

### New runtime

New landing pages use `https://scout24-creative-ops.github.io/lp-builder/runtime/...`. Do not move, delete, or rename files under `lp-builder/runtime/**` without deliberate review.

### Creative Hub and Design Library

Keep `DominikBoehme/ai-marketing-creative-hub` as a redirect. Keep the live Design Library in `s24-creative-ops/design-library` until a separate migration is planned.

### Productive email module platform

Mitch's `is24-email-modules` repository may be inspected for context, but Dominik must not change files, modules, manifests, branches, commits, pushes, activations, workflows, or repository settings until the setup and safe operating process have been reviewed and explicitly aligned with the responsible owners. Relevant pushes can trigger tests, AWS SAM deployment, and module seeding, so any write must be treated as an operational deployment action.

## Authentication and Local Tooling

Authentication state, permissions, and credential values are not documented in this repository. Do not add tokens, secrets, passwords, private keys, or credential values here.

## Known Limitations

- Repository access rights and visibility must be verified through the applicable GitHub tooling; they are not asserted here.
- Historical and legacy repository references may be required by existing pages or runtime paths.
- The documented repository roles should not replace a direct technical check in the relevant repository.
- The connected GitHub tooling cannot currently reach `scout24-creative-ops/public`; its creation, initialization or connector access still needs to be completed.

## Update Guidance

Update this file when confirmed workspace, organization, repository-role, source-of-truth, or protection-rule information changes. Keep facts dated where practical and do not record unverified access claims.
