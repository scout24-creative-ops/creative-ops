# Landing Page Builder & Contentful

## Purpose

Enable landing pages to be created in the Landing Page Builder and transferred into Contentful through a controlled end-to-end workflow, while keeping the Landing Page Builder as the central authoring experience during the MVP phase.

## Current Status

The Landing Page Builder & Contentful MVP is close to completion in the development environment `next`.

The current end-to-end flow is working: a new landing page can be generated in the Landing Page Builder, transferred directly into Contentful and viewed immediately through a preview link. Dominik has independently validated the core lifecycle from his own account, including draft creation and updates. The rendered output already looks broadly consistent with the current LP Builder, although some spacing and padding differences remain for later visual-parity refinement.

Production publishing is not yet available. Mukhammadjon clarified that the LP Builder content type and renderer currently exist only in Contentful `next`, not production `pro`. A publish test returned a published status but the public route produced a 404; this is currently considered an MCP-code issue rather than a real production publication. Production publishing and transfer of the required renderer/content type to `pro` remain a later implementation phase to be aligned with Beatrice.

Jorin confirmed the LP Builder & Contentful work as a current priority on 2026-08-20. Contentful migration is related but is now treated as a separate workstream rather than as part of the MVP task set.

The immediate MVP work is no longer a generic "test and define the module model" task. Dominik's current focus is to prepare the SSOT for Images discussion with Matthias and then clarify the future product model for the Landing Page Builder in a Contentful-first or Contentful-only setup.

## Dominik's Role

Dominik represents Creative Operations and landing-page requirements, documents the target process, validates the controlled LP Builder workflow and owns the product-level questions around how the Landing Page Builder and Contentful should work together in the future.

He is currently responsible for preparing the relevant SSOT for Images context and for defining the product-side target model, including the future boundary between Builder and Contentful and the URL/slug approach.

## Key Stakeholders

- Matthias Brandstätter for Contentful ownership, strategic platform direction and SSOT for Images alignment
- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Beatrice for Core Team coordination and production-publishing alignment
- Stefan Harssdorf for Contentful architecture and technical assessment
- Contentful team
- Marketing team leads for Seeker, Homeowner, Professional and B2B
- SEO and UX
- Jorin and Eve for management alignment when needed

## Confirmed Direction and Decisions

- Use `Landing Page Builder & Contentful` as the maintained project name in the repository; the dashboard may use the more focused label `LP Builder & Contentful MVP` for the current task group.
- The Landing Page Builder remains the central controlled creation workflow during the MVP.
- The short-term MVP remains HTML-based rather than requiring a component-based rebuild.
- The current working integration uses GPT Actions to transfer generated LP Builder HTML into Contentful `next`.
- Draft creation and updates require explicit user approval; publishing remains a separate consequential action.
- The existing controlled module approach remains intact and should not be replaced by Storybook-based page generation.
- The working Contentful model uses `lpBuilder` entries with `slug`, `mainTitle` and HTML content as the core payload.
- Direct preview of unpublished drafts is now part of the workflow in `next`.
- Production publishing is not part of the validated MVP yet because the LP Builder renderer/content type have not been transferred to `pro`.
- Contentful migration is a separate conceptual workstream and should not be bundled into the MVP task list.
- Do not invent a generic "plan next steps" task while the product and architecture questions are still open. Concrete implementation tasks should follow from the relevant alignments and target-model decisions.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-11: Dominik independently validated draft creation through the shared Contentful-enabled LP Builder. The draft was created unpublished with version 1 and no Action warnings.
- 2026-08-11: Dominik updated the same Contentful draft after changing the H1. The entry remained stable, stayed unpublished and advanced to version 2.
- 2026-08-12: Mukhammadjon added a direct preview link to the GPT flow. Dominik verified the preview and a subsequent content update successfully.
- 2026-08-12: A publish test exposed the current environment boundary: the Action reported publication, but the public route returned 404 because LP Builder rendering/publishing has not yet been transferred from `next` to `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder. This remains exploratory; no replacement decision has been made.
- 2026-08-20: Jorin supported the project as one of Dominik's priority workstreams and agreed with treating Contentful migration as a separate conceptual next step rather than assuming migration execution is already defined.
- 2026-08-21: The MVP was described as close to completion: generation in the Landing Page Builder, direct transfer to Contentful and immediate preview are working end to end in `next`.
- 2026-08-23: Dominik clarified the immediate MVP task set: prepare an SSOT for Images document for the upcoming Matthias alignment and clarify the future Landing Page Builder model for a Contentful-only setup. The calendar meeting itself is not tracked as an additional task.
- 2026-08-23: Contentful migration was separated from the MVP as its own workstream; the migration concept has not yet been started.

## Open Questions and Risks

- What the SSOT for Images should be and how image ownership, storage and reuse should work in the future Contentful setup.
- How the Landing Page Builder should continue if Contentful becomes the only target environment.
- How future URL and slug handling should work compared with the current directory-based landing-page structure.
- Which responsibilities, metadata and editing capabilities should remain in the Landing Page Builder and which should live in Contentful.
- How and when the LP Builder content type, renderer and publishing flow will move from `next` to production `pro`.
- The MCP/Action should not report or imply successful production publication while production publishing is unavailable.
- Some visual spacing and padding in the Contentful preview differ from the current LP Builder/AEM rendering; these appear to be refinement work rather than a blocker for the MVP integration.
- Whether Claude Design, a future agent, or the Custom GPT should become the long-term authoring surface after the Contentful workflow is stable.
- How the approval experience should be presented later; a clearer prompt or modal-style confirmation has been suggested as a possible UX improvement.

## Next Steps

1. Prepare a concise SSOT for Images working document for the upcoming alignment with Matthias, covering the relevant context, questions and decisions needed.
2. Clarify the target model for the Landing Page Builder in a Contentful-only setup, including URL/slug logic and the boundary between Builder and Contentful responsibilities.
3. Derive concrete implementation next steps only after those product and architecture questions are clearer.

## Contentful Migration Boundary

Migration of existing landing pages is now treated as a separate workstream. The current migration task is to develop the concept before any execution plan is created. Relevant topics will likely include scope, prioritization, templates, URL and redirect handling, and the operating model, but these details are not yet a confirmed migration plan.

## Last Confirmed

Current MVP task set and separation from Contentful Migration confirmed by Dominik on 2026-08-23. The end-to-end creation, transfer and preview flow remains verified in `next`; production `pro` publishing is not yet available.

## Related Context

See [Landing Page Builder](landing-page-builder.md).
