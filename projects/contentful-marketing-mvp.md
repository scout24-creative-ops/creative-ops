# Landing Page Builder & Contentful

## Purpose

Enable landing pages to be created in the Landing Page Builder and transferred into Contentful through a controlled end-to-end workflow, while keeping the Landing Page Builder as the central authoring experience.

## Current Status

The Landing Page Builder & Contentful MVP is close to completion in the development environment `next`.

The current end-to-end flow is working: a new landing page can be generated in the Landing Page Builder, transferred directly into Contentful and viewed immediately through a preview link. Dominik has independently validated the core lifecycle from his own account, including draft creation and updates. The rendered output already looks broadly consistent with the current LP Builder, although some spacing and padding differences remain for later visual-parity refinement.

Production publishing is not yet available. Mukhammadjon clarified that the LP Builder content type and renderer currently exist only in Contentful `next`, not production `pro`. A publish test returned a published status but the public route produced a 404; this is currently considered an MCP-code issue rather than a real production publication. Production publishing and transfer of the required renderer/content type to `pro` remain a later implementation phase to be aligned with Beatrice.

Jorin confirmed LP Builder & Contentful and the conceptual migration work as priorities with Dominik on 2026-08-20.

The next product-level phase is therefore not only technical integration validation. Dominik also needs to define the future landing-page creation model: the current module library is a useful base, but broader Contentful usage and migration of existing pages require a more complete design system, reusable module set and page templates.

## Dominik's Role

Dominik represents Creative Operations and landing-page requirements, documents the target process, provides and tests the existing Landing Page Builder output, prepares pilot pages and migration priorities, and validates that the Contentful integration preserves the controlled LP Builder workflow. He also owns the product-level concept for how the Landing Page Builder and Contentful should work together in the future, including the required design-system, module and template model.

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

- Use `Landing Page Builder & Contentful` as the visible project name; `Contentful Marketing MVP` is misleading because the initiative is specifically about creating landing pages with the Landing Page Builder and transferring them to Contentful.
- The Landing Page Builder remains the central controlled creation workflow for landing pages during the MVP.
- The short-term MVP remains HTML-based rather than requiring a component-based rebuild.
- The current working integration uses GPT Actions to transfer generated LP Builder HTML into Contentful `next`.
- Draft creation and updates require explicit user approval; publishing remains a separate consequential action.
- The existing controlled module approach remains intact and should not be replaced by Storybook-based page generation.
- The working Contentful model uses `lpBuilder` entries with `slug`, `mainTitle` and HTML content as the core payload.
- Direct preview of unpublished drafts is now part of the workflow in `next`.
- Production publishing is not part of the validated MVP yet because the LP Builder renderer/content type have not been transferred to `pro`.
- Existing AEM pages should be migrated gradually and by priority rather than through a big-bang migration.
- During the transition, new Contentful pages may still link to old AEM pages.
- The future workflow needs a stronger design-system, reusable module and page-template foundation before broad migration or scale-up.
- Jorin supported LP Builder & Contentful and Contentful migration planning as current priorities on 2026-08-20.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-11: Dominik independently validated draft creation through the shared Contentful-enabled LP Builder. The draft was created unpublished with version 1 and no Action warnings.
- 2026-08-11: Dominik updated the same Contentful draft after changing the H1. The entry remained stable, stayed unpublished and advanced to version 2.
- 2026-08-12: Mukhammadjon added a direct preview link to the GPT flow. Dominik verified the preview and a subsequent content update successfully.
- 2026-08-12: A publish test exposed the current environment boundary: the Action reported publication, but the public route returned 404 because LP Builder rendering/publishing has not yet been transferred from `next` to `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder. This remains exploratory; no replacement decision has been made.
- 2026-08-20: Jorin supported the project as one of Dominik's priority workstreams and agreed with treating Contentful migration as a separate conceptual next step rather than assuming migration execution is already defined.
- 2026-08-21: The MVP is now described as close to completion: generation in the Landing Page Builder, direct transfer to Contentful and immediate preview are working end to end in `next`.

## Open Questions and Risks

- How and when the LP Builder content type, renderer and publishing flow will move from `next` to production `pro`.
- The MCP/Action should not report or imply successful production publication while production publishing is unavailable.
- Some visual spacing and padding in the Contentful preview differ from the current LP Builder/AEM rendering; these appear to be refinement work rather than a blocker for the MVP integration.
- Whether Claude Design, a future agent, or the Custom GPT should become the long-term authoring surface after the Contentful workflow is stable.
- How the approval experience should be presented later; a clearer prompt or modal-style confirmation has been suggested as a possible UX improvement.
- Which metadata is captured in the Landing Page Builder and which remains maintained in Contentful.
- How an existing page can later be loaded back into the Landing Page Builder for broader editing workflows.
- How link checking, redirects, slug conventions and retirement of old AEM URLs will be managed during migration.
- What the target design system, module library and page-template set needs to contain for broad use and migration.
- How the migration of existing pages should be scoped, sequenced and governed.

## Next Steps

1. Test the current LP Builder & Contentful MVP with representative landing pages and validate the end-to-end creation and update workflow.
2. Define the target design-system, module-library and page-template model required for future use.
3. Conceptually design the migration approach for existing landing pages, including scope, prioritization, templates, redirects and operating model before execution begins.
4. Let the Contentful/Core implementation progress the `pro` renderer/content-type and real production-publishing phase before further publish validation.
5. Correct the MCP/Action behavior so it does not return a misleading production-publish result while `pro` is unavailable.
6. Treat visual spacing/padding parity as follow-up refinement after the core integration is stable.
7. Evaluate Claude Design or an agent setup separately as a possible future authoring interface without blocking the current GPT-based MVP.

## Last Confirmed

Landing Page Builder generation, direct Contentful transfer and immediate preview remain verified in `next` as of 2026-08-21; production `pro` publishing is not yet available.

## Related Context

See [Landing Page Builder](landing-page-builder.md).