# Contentful Marketing MVP

## Purpose

Enable Marketing to create and migrate landing pages faster and more independently while keeping the Landing Page Builder as the controlled creation workflow.

## Current Status

The HTML-based Contentful MVP has moved from technical feasibility into a working end-to-end prototype. Mukhammadjon connected the existing Landing Page Builder approach to Contentful through GPT Actions and demonstrated that a generated page can be written as a Contentful draft after explicit user approval.

Dominik has now verified the same shared `Landing Page Builder (Contentful)` GPT from his own account. In a fresh chat with the default model configuration, the GPT successfully created a Contentful draft and then updated the same entry without publishing it. The update preserved the entry identity and increased the Contentful version from 1 to 2.

The remaining workflow gap is pre-publish review: the current read Action does not return a dedicated preview or renderer URL for an unpublished draft. The separate publish flow has not yet been tested by Dominik.

## Dominik's Role

Dominik represents Marketing and Creative Operations requirements, documents the target process, provides and tests the existing Landing Page Builder output, prepares pilot pages and migration priorities, and validates that the Contentful integration preserves the controlled LP Builder workflow. He also communicates project status to management stakeholders.

## Key Stakeholders

- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Bea for Core Team coordination
- Stefan Harssdorf for Contentful architecture and technical assessment
- Contentful team
- Marketing team leads for Seeker, Homeowner, Professional and B2B
- SEO and UX
- Jorin and Eve for management alignment when needed

## Confirmed Direction and Decisions

- The Landing Page Builder remains the central creation tool for Marketing landing pages.
- The short-term MVP remains HTML-based rather than requiring a component-based rebuild.
- The current working integration uses GPT Actions to transfer generated LP Builder HTML into Contentful.
- Draft creation and updates require explicit user approval; publishing remains a separate consequential action.
- The existing controlled Marketing module approach remains intact and should not be replaced by Storybook-based page generation.
- The working Contentful model uses `lpBuilder` entries with `slug`, `mainTitle` and HTML content as the core payload.
- Existing AEM pages should be migrated gradually and by priority rather than through a big-bang migration.
- During the transition, new Contentful pages may still link to old AEM pages.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-11: Dominik independently validated draft creation through the shared Contentful-enabled LP Builder. The draft was created unpublished with version 1 and no Action warnings.
- 2026-08-11: Dominik updated the same Contentful draft after changing the H1. The entry remained stable, stayed unpublished and advanced to version 2.

## Open Questions and Risks

- How users should preview or review an unpublished draft before publication. The current Actions do not return a dedicated preview or renderer URL for drafts.
- Whether the publish Action works reliably through the same user flow; Dominik has not yet tested it.
- How the approval experience should be presented later; Mukhammadjon suggested a clearer prompt or modal-style confirmation as a possible UX improvement.
- Whether a complete page is stored as one HTML block or whether the model will evolve toward several HTML modules later.
- Which metadata is captured in the Landing Page Builder and which remains maintained in Contentful.
- How an existing page can later be loaded back into the Landing Page Builder for broader editing workflows.
- How link checking, redirects and the retirement of old AEM URLs will be managed.

## Next Steps

1. Test the separate publish flow on a disposable Contentful test entry.
2. Clarify how unpublished drafts should expose a preview or renderer URL for review before publication.
3. Decide whether the approval step needs a clearer confirmation UX once the core lifecycle is validated.
4. Continue testing the Contentful-enabled LP Builder with representative Marketing pages before wider rollout.
5. Define a small prioritized pilot set of AEM pages for gradual rebuilding.
6. Clarify the link and redirect strategy separately.

## Last Confirmed

Create and update flow verified by Dominik on 2026-08-11; publish and draft-preview workflow remain open.

## Related Context

See [Landing Page Builder](landing-page-builder.md).