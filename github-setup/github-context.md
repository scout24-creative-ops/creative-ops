# GitHub and Workspace Context

_Last reviewed: 2026-07-30_

## Workspace

- Workspace: `/Users/dboehme/Projects`
- Independent project repositories and project folders sit directly below this workspace root.
- Public publishing workspace: `/Users/dboehme/Projects/Public`
- Creative Ops context repository: `/Users/dboehme/Projects/Creative Ops/creative-ops`
- The former workspace path `/Users/dboehme/Projects/GPT Agents` is obsolete.
- `creative-ops` provides cross-project documentation; project repositories remain the source of truth for their code, configuration, deployments and implementation state.
- A workspace-level Codex rule at `/Users/dboehme/Projects/AGENTS.md` routes explicit publication requests from direct project folders to the Public publishing workflow.
- The workspace-level rule may be local-only unless separately versioned; its repository status must be checked directly and must not be assumed from this documentation.

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
- Status on 2026-07-23: repository, project-based publishing workflow, workspace-wide Codex routing and GitHub Pages are configured, tested and working.
- Purpose: publish reviewed files through stable public web URLs while keeping original working files in their project repositories.
- Public content is organized by the direct workspace project folder: `Public/<Project name>/<slug>/`.
- The original working file remains the source of truth. `Public` contains only the reviewed publishing copy plus manifest and metadata linking back to the source.

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

## LP Builder Review Workflow

- The productive LP Builder source is `scout24-creative-ops/lp-builder`.
- AEM-fragment output is the productive default; standalone HTML is an explicit preview or downloadable-file mode.
- Repository changes should be shared through review branches and pull requests rather than pushed directly to `main` when collaboration review is useful.
- Draft PR #3, `Make AEM fragment output the LP Builder default`, was opened on 2026-07-30 for Ciaran's review.
- The productive Custom GPT must be updated separately from repository changes. Repository merge does not update the GPT automatically.

## Design Library Publishing Workflow

- `scout24-creative-ops/design-system` is the source of truth for the active Design Library UI, tokens and generated builder artifacts.
- `s24-creative-ops/design-library` is a publish mirror only and must not be treated as a source repository.
- The prepared Design Library artifact is self-contained and should not require Email Builder or LP Builder runtime paths after publication.
- Local publication preparation must not commit or push automatically.
- Draft PR #2, `Make Design Library publishing self-contained`, was opened on 2026-07-30 for Ciaran's review.
- A manual-only GitHub workflow can later create a review PR in the publish repository. It must not merge or deploy automatically.
- The manual workflow requires an administrator-managed repository secret with access to the required source repositories and PR/write access to the publish mirror. Do not document the credential value.
- The secret is not required for local source sync, local checks or a manual mirror test.

## Public Publishing Workflow

- Create and edit original files in the relevant project repository or project folder.
- Publish only through an explicit publish or republish action; do not automatically mirror files after edits or commits.
- The normal instruction is: `Veröffentliche diese Datei.`
- From any direct project folder below `/Users/dboehme/Projects`, Codex should load the workspace rule and then the detailed rules in `/Users/dboehme/Projects/Public/AGENTS.md`.
- Determine the direct project folder below `/Users/dboehme/Projects` and use its exact name as the first-level Public folder.
- Publish to `Public/<Project name>/<stable slug>/`. If the project folder already exists, add the new publication there.
- Copy the approved artifact into `Public` while leaving the original unchanged.
- Publish HTML files as `index.html`, which provides a stable directory URL. Keep original filenames for other file types.
- Store publication data in `publish-manifest.json` and a local `metadata.json`, including project, source repository and path, source hash, public path, URL and publication timestamp.
- Use the source hash to distinguish `published-current` from `published-outdated` and warn when a published source has changed since its last publication.
- Keep source-project commits and Public repository commits separate.
- Before publishing, confirm that the content is suitable for unrestricted public access and contains no confidential information, customer data, credentials or internal-only context.
- Codex asks for explicit approval before commit and push.

## Sources of Truth

- Use this repository for personal, organizational, weekly and cross-project context.
- Verify technical facts in the relevant project repository.
- Original project files remain the source of truth; published copies in `Public` are distribution artifacts.
- The `public` repository is the source of truth for its scripts, manifest, metadata, deployed files and GitHub Pages implementation.
- Do not derive repository status, permissions or implementation details solely from a repository name.

## Working Rules

- Changes to this documentation require Dominik's explicit approval.
- Do not create hidden auto-commits or auto-pushes.
- Keep active, legacy, archive, publish, redirect and external productive collaboration roles distinct when describing repositories.
- Prefer review branches and pull requests for collaborative repository changes; do not merge without explicit review and approval.

## Protected and Do-Not-Touch Areas

### Legacy runtime

Do not delete, make private, rename or disable GitHub Pages for `is24-lp-creator/lp-creator`. Existing AEM pages may still load its CSS and JavaScript paths.

### New runtime

New landing pages use `https://scout24-creative-ops.github.io/lp-builder/runtime/...`. Do not move, delete or rename files under `lp-builder/runtime/**` without deliberate review.

### Creative Hub and Design Library

Keep `DominikBoehme/ai-marketing-creative-hub` as a redirect. Keep the live Design Library in `s24-creative-ops/design-library` until a separate migration is planned.

### Productive email module platform

Mitch's `is24-email-modules` repository may be inspected for context, but Dominik must not change files, modules, manifests, branches, commits, pushes, activations, workflows or repository settings until the setup and safe operating process have been reviewed and explicitly aligned with the responsible owners.

## Authentication and Local Tooling

- GitHub CLI was installed locally through Homebrew and authenticated on 2026-07-30 to support branch and pull-request creation.
- Authentication state, permissions and credential values are not documented in this repository.
- Do not add tokens, secrets, passwords, private keys or credential values here.

## Known Limitations

- Repository access rights and visibility must be verified through the applicable GitHub tooling; they are not asserted here.
- Historical and legacy repository references may be required by existing pages or runtime paths.
- The documented repository roles should not replace a direct technical check in the relevant repository.
- GitHub Pages deployments can briefly lag behind a push; verify the deployed URL after publishing.
- A local workspace-level `AGENTS.md` is not automatically backed up by GitHub unless it is explicitly placed under version control.

## Update Guidance

Update this file when confirmed workspace, organization, repository-role, source-of-truth or protection-rule information changes. Keep facts dated where practical and do not record unverified access claims.
