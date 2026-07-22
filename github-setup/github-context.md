# GitHub and Workspace Context

_Last reviewed: 2026-07-22_

## Workspace

- Workspace: `/Users/dboehme/Projects`
- Independent project repositories and project folders sit directly below this workspace root.
- Public publishing workspace: `/Users/dboehme/Projects/Public`
- Creative Ops context repository: `/Users/dboehme/Projects/Creative Ops/creative-ops`
- The former workspace path `/Users/dboehme/Projects/GPT Agents` is obsolete.
- `creative-ops` provides cross-project documentation; project repositories remain the source of truth for their code, configuration, deployments, and implementation state.

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
- `public`

### Public publishing repository

- Local workspace folder: `/Users/dboehme/Projects/Public`
- Repository: `scout24-creative-ops/public`
- GitHub Pages base URL: `https://scout24-creative-ops.github.io/public/`
- Status on 2026-07-22: repository, project-based publishing workflow and GitHub Pages are configured, tested and live.
- Purpose: publish reviewed files through stable public web URLs while keeping original working files in their project repositories.
- Public content is organized by the direct workspace project folder: `Public/<Project name>/<slug>/`.
- The original working file remains the source of truth. `Public` contains only the reviewed publishing copy plus manifest and metadata linking back to the source.
- The first verified publication is the Creative Hub wireframe at `Creative Hub/creative-hub-wireframe-index-design/`.
- The older top-level `Shared` folder was checked and contained no relevant files or references. Deletion remains optional and requires an explicit action.

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
- **Public distribution:** `scout24-creative-ops/public` is the central repository for reviewed public artifacts and stable GitHub Pages URLs.
- **Legacy runtime:** `is24-lp-creator/lp-creator` serves existing AEM landing pages.
- **Publish target:** `s24-creative-ops/design-library` remains the current live publish target for the Design Library.
- **Redirect:** `DominikBoehme/ai-marketing-creative-hub` remains as a redirect only.
- **External productive collaboration:** Mitch's `is24-email-modules` repository is a productive platform outside Dominik's own active repository group and must be treated as read-only unless a safe operating process is explicitly agreed.

## Public Publishing Workflow

- Create and edit original files in the relevant project repository or project folder.
- Publish only through an explicit publish or republish action; do not automatically mirror files after edits or commits.
- Determine the direct project folder below `/Users/dboehme/Projects` and use its exact name as the first-level Public folder.
- Publish to `Public/<Project name>/<stable slug>/`. If the project folder already exists, add the new publication there.
- Copy the approved artifact into `Public` while leaving the original unchanged.
- Publish HTML files as `index.html`, which provides a stable directory URL. Keep original filenames for other file types.
- Store publication data in `publish-manifest.json` and a local `metadata.json`, including project, source repository and path, source hash, public path, URL and publication timestamp.
- Use the source hash to distinguish `published-current` from `published-outdated` and warn when a published source has changed since its last publication.
- Keep source-project commits and Public repository commits separate.
- For a new publication, confirm the proposed destination. For a clear republish to an existing destination, no second destination confirmation is needed.
- Before publishing, confirm that the content is suitable for unrestricted public access and contains no confidential information, customer data, credentials or internal-only context.
- The normal instruction is: `Veröffentliche diese Datei.`

## Sources of Truth

- Use this repository for personal, organizational, weekly, and cross-project context.
- Verify technical facts in the relevant project repository.
- Original project files remain the source of truth; published copies in `Public` are distribution artifacts.
- The `public` repository is the source of truth for its scripts, manifest, metadata, deployed files and GitHub Pages implementation.
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
- GitHub Pages deployments can briefly lag behind a push; verify the deployed URL after publishing.

## Update Guidance

Update this file when confirmed workspace, organization, repository-role, source-of-truth, or protection-rule information changes. Keep facts dated where practical and do not record unverified access claims.
