# Contentful Marketing MVP

## Purpose

Enable Marketing to create and migrate landing pages faster and more independently while keeping the Landing Page Builder as the controlled creation workflow.

## Current Status

The HTML-based Contentful MVP is now a working end-to-end prototype for the development environment `next`. Mukhammadjon connected the duplicated `Landing Page Builder (Contentful)` GPT to Contentful through GPT Actions while preserving the existing controlled Marketing module workflow.

Dominik has independently validated the current core lifecycle from his own account: the GPT can generate a page, request explicit approval, create a Contentful draft, return a direct preview link, update the same draft after content changes and expose the updated rendered result. The rendered output already looks broadly consistent with the current LP Builder, although some spacing and padding differences remain for later visual-parity refinement.

Production publishing is not yet available. Mukhammadjon clarified that the LP Builder content type and renderer currently exist only in Contentful `next`, not production `pro`. A publish test returned a published status but the public route produced a 404; this is currently considered an MCP-code issue rather than a real production publication. Production publishing and transfer of the required renderer/content type to `pro` remain a later implementation phase to be aligned with Beatrice.

## Dominik's Role

Dominik represents Marketing and Creative Operations requirements, documents the target process, provides and tests the existing Landing Page Builder output, prepares pilot pages and migration priorities, and validates that the Contentful integration preserves the controlled LP Builder workflow. He also communicates project status to management stakeholders.

## Key Stakeholders

- Matthias Brandstätter for Contentful ownership and strategic platform direction
- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Beatrice for Core Team coordination and production-publishing alignment
- Stefan Harssdorf for Contentful architecture and technical assessment
- Contentful team
- Marketing team leads for Seeker, Homeowner, Professional and B2B
- SEO and UX
- Jorin and Eve for management alignment when needed

## Confirmed Direction and Decisions

- The Landing Page Builder remains the central controlled creation workflow for Marketing landing pages during the MVP.
- The short-term MVP remains HTML-based rather than requiring a component-based rebuild.
- The current working integration uses GPT Actions to transfer generated LP Builder HTML into Contentful `next`.
- Draft creation and updates require explicit user approval; publishing remains a separate consequential action.
- The existing controlled Marketing module approach remains intact and should not be replaced by Storybook-based page generation.
- The working Contentful model uses `lpBuilder` entries with `slug`, `mainTitle` and HTML content as the core payload.
- Direct preview of unpublished drafts is now part of the GPT workflow in `next`.
- Production publishing is not part of the validated MVP yet because the LP Builder renderer/content type have not been transferred to `pro`.
- Existing AEM pages should be migrated gradually and by priority rather than through a big-bang migration.
- During the transition, new Contentful pages may still link to old AEM pages.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-11: Dominik independently validated draft creation through the shared Contentful-enabled LP Builder. The draft was created unpublished with version 1 and no Action warnings.
- 2026-08-11: Dominik updated the same Contentful draft after changing the H1. The entry remained stable, stayed unpublished and advanced to version 2.
- 2026-08-12: Mukhammadjon added a direct preview link to the GPT flow. Dominik verified the preview and a subsequent content update successfully.
- 2026-08-12: A publish test exposed the current environment boundary: the Action reported publication, but the public route returned 404 because LP Builder rendering/publishing has not yet been transferred from `next` to `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder. This remains exploratory; no replacement decision has been made.

## Open Questions and Risks

- How and when the LP Builder content type, renderer and publishing flow will move from `next` to production `pro`.
- The MCP/Action should not report or imply successful production publication while production publishing is unavailable.
- Some visual spacing and padding in the Contentful preview differ from the current LP Builder/AEM rendering; these appear to be refinement work rather than a blocker for the MVP integration.
- Whether Claude Design, a future agent, or the Custom GPT should become the long-term authoring surface after the Contentful workflow is stable.
- How the approval experience should be presented later; a clearer prompt or modal-style confirmation has been suggested as a possible UX improvement.
- Which metadata is captured in the Landing Page Builder and which remains maintained in Contentful.
- How an existing page can later be loaded back into the Landing Page Builder for broader editing workflows.
- How link checking, redirects, slug conventions and retirement of old AEM URLs will be managed during migration.

## Next Steps

1. Mukhammadjon aligns with Beatrice on the next phase for `pro`, including renderer/content-type transfer and real production publishing.
2. Keep current validation and review in the `next` environment using the direct preview links.
3. Correct the MCP/Action behavior so it does not return a misleading production-publish result while `pro` is unavailable.
4. Continue testing the Contentful-enabled LP Builder with representative Marketing pages before wider rollout.
5. Treat visual spacing/padding parity as follow-up refinement after the core integration is stable.
6. Evaluate Claude Design or an agent setup separately as a possible future authoring interface without blocking the current GPT-based MVP.
7. Define a small prioritized pilot set of AEM pages for gradual rebuilding and clarify slug/redirect rules for migration.

## Last Confirmed

Create, update and direct-preview flow verified by Dominik in `next` on 2026-08-12. Production `pro` publishing is not yet available and remains a later implementation phase.

## Related Context

See [Landing Page Builder](landing-page-builder.md).