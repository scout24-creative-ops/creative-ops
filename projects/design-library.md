# Design Library and Builder Library

## Purpose

Provide a central source of truth for reusable builder modules, design tokens, patterns, examples and shared production standards.

## Current Status

The active Design Library source lives in `scout24-creative-ops/design-system`. The separate `s24-creative-ops/design-library` repository is the live publish mirror and is not the source of truth.

The Design Library is now prepared as a self-contained static artifact. It contains its required email preview stylesheet locally and no longer depends on Email Builder or LP Builder runtime paths when published.

A manual-only GitHub workflow can later prepare a review PR in the publish repository. It does not merge or publish automatically.

## Dominik's Role

Dominik initiated the library approach, connected it to the builders and AI Agent overview, supported adoption, and coordinated the move toward a central GitHub-based publication path.

He retains product and workflow responsibility and coordinates implementation and review with Ciaran.

## Key Stakeholders

- Creative Studio
- Marketing teams using the builders
- Ciaran for modules and workflow review
- Peter and Allan for GitHub and publishing support
- UX for module approval and standards

## Important Developments

- April 2026: Created a Builder Library as the single source of truth for available LP Builder and E-Mail Builder components.
- May 2026: Introduced the Design Library as a shared source for design tokens, modules and patterns.
- May to July 2026: Used the library to direct colleagues to existing modules and reduce duplicate work.
- July 2026: Followed up on new modules and organized Scout24 GitHub onboarding to support central storage and publication.
- 2026-07-30: Ciaran reported that the publication setup required access to multiple repositories.
- Dominik and Codex identified that the library loaded Email Builder preview CSS and that the previous sync copied source material from several repositories into the publish mirror.
- The Design Library was made self-contained, the local publish script was changed to prepare only a mirror without commit or push, and a manual review-PR workflow was added.
- Technical checks passed and draft PR #2, `Make Design Library publishing self-contained`, was opened in `scout24-creative-ops/design-system`.

## Decisions

- Prefer reuse of existing modules and patterns before creating new ones.
- Keep shared builder knowledge and assets centrally discoverable.
- Treat `scout24-creative-ops/design-system` as the active source.
- Treat `s24-creative-ops/design-library` as a publish mirror only.
- Publish only through a deliberate review process; no automatic merge or deployment.
- Keep the published Design Library self-contained and free of runtime dependencies on source repositories.

## Risks and Open Questions

- Ownership for maintenance and adding new modules is not fully documented.
- The boundary between Design Library, Builder Library and Creative Hub needs current clarification.
- Draft PR #2 still requires Ciaran's review before merge.
- The later automated review-PR workflow requires an administrator-managed repository secret and has not yet been tested end to end.

## Next Steps

1. Ask Ciaran to review PR #2 and confirm the new setup works for his workflow.
2. Merge the reviewed source change when approved.
3. Configure the required repository secret only when the manual review-PR workflow is ready to be tested.
4. Run one controlled publication test and review the resulting PR in the live publish repository before merge.
5. Clarify ongoing maintenance ownership and the boundary to the Creative Hub.

## Last Confirmed

Source-of-truth and publishing setup confirmed on 2026-07-30.
