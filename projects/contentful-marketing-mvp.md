# Landing Page Builder & Contentful

## Purpose

Enable landing pages to be created in the Landing Page Builder and transferred into Contentful through a controlled end-to-end workflow, while keeping the Landing Page Builder as the central authoring experience during the MVP phase.

## Current Status

The Landing Page Builder & Contentful MVP was previously close to completion in the development environment `next`.

The current end-to-end flow has been demonstrated: a new landing page can be generated in the Landing Page Builder, transferred directly into Contentful and viewed immediately through a preview link. Dominik independently validated the core lifecycle from his own account, including draft creation and updates. The rendered output looked broadly consistent with the current LP Builder, although some spacing and padding differences remained for later refinement.

Production publishing was not yet available at the last technical confirmation. Mukhammadjon clarified that the LP Builder content type and renderer existed only in Contentful `next`, not production `pro`. A publish test returned a published status but the public route produced a 404; this was considered an MCP-code issue rather than a real production publication.

Jorin confirmed the LP Builder & Contentful work as a current priority on 2026-08-20. Contentful migration remains a separate workstream rather than part of the MVP task set.

Dominik now wants to re-check the actual MVP status before planning the next alignment. The immediate technical check is how CSS classes are currently handled in the generated Contentful output: whether the LP Builder's own classes are still included to the same extent or whether the generated code has been reduced and relies more strongly on Contentful-native styling or structures. Depending on what this and the broader status review show, the next discussion may involve Beatrice and Mukhammadjon. A separate post-MVP question is how the Landing Page Builder modules and design-system approach should continue once the current MVP is complete.

## Dominik's Role

Dominik represents Creative Operations and landing-page requirements, validates the controlled LP Builder workflow and owns the product-level questions around how the Landing Page Builder and Contentful should work together in the future.

His immediate role is to establish the current MVP status, including the current CSS-class and rendering boundary between generated LP Builder code and Contentful, identify the remaining gaps and then decide whether further alignment with Beatrice and Mukhammadjon is needed. He also needs to clarify the post-MVP direction for modules and the design-system approach.

For Contentful Migration, Dominik owns the initial migration framing before broader team alignment: first clarify slug and URL logic, then develop the first migration concept, then use that concept as the basis for a kickoff with the B2B Product Marketing team.

## Key Stakeholders

- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Beatrice for Core Team coordination and production-publishing alignment
- Matthias Brandstätter for Contentful ownership and strategic platform direction
- Stefan Harssdorf for Contentful architecture and technical assessment
- Contentful team
- B2B Product Marketing team for migration kickoff and practical rollout alignment
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
- Direct preview of unpublished drafts is part of the workflow in `next`.
- Production publishing was not part of the validated MVP at the last technical confirmation because the LP Builder renderer/content type had not been transferred to `pro`.
- Contentful migration is a separate conceptual workstream and should not be bundled into the MVP task list.
- Slug and URL logic for existing pages belongs to the Contentful Migration workstream rather than the current MVP task set.
- The migration sequence is: define slug and URL logic first, then draft the migration concept, then hold a kickoff with the B2B Product Marketing team.
- Concrete implementation work after the MVP should follow from a fresh status check and the post-MVP module/design-system decision.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-11: Dominik independently validated draft creation through the shared Contentful-enabled LP Builder. The draft was created unpublished with version 1 and no Action warnings.
- 2026-08-11: Dominik updated the same Contentful draft after changing the H1. The entry remained stable, stayed unpublished and advanced to version 2.
- 2026-08-12: Mukhammadjon added a direct preview link to the GPT flow. Dominik verified the preview and a subsequent content update successfully.
- 2026-08-12: A publish test exposed the current environment boundary: the Action reported publication, but the public route returned 404 because LP Builder rendering/publishing had not yet been transferred from `next` to `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder. This remains exploratory; no replacement decision has been made.
- 2026-08-20: Jorin supported the project as one of Dominik's priority workstreams and agreed with treating Contentful migration as a separate conceptual next step rather than assuming migration execution is already defined.
- 2026-08-21: The MVP was described as close to completion: generation in the Landing Page Builder, direct transfer to Contentful and immediate preview were working end to end in `next`.
- 2026-08-24: Dominik changed the immediate task sequence. He will first review the actual MVP status, then decide whether an alignment with Beatrice and Mukhammadjon is needed. The separate post-MVP question is how modules and the design-system approach should continue. Slug and URL logic moved to Contentful Migration.
- 2026-08-24: Dominik clarified the migration sequence: slug and URL logic first, initial migration concept second, and then a kickoff with the B2B Product Marketing team to align the practical approach.
- 2026-08-25: Dominik specified the immediate MVP review further: inspect the generated Contentful code to determine whether LP Builder CSS classes are still fully present or whether the output is reduced and relies more on Contentful-native styling or structures.

## Open Questions and Risks

- Whether the generated Contentful code still carries the LP Builder's own CSS classes to the same extent or now relies more strongly on Contentful-native styling or structures.
- What is still missing from the current MVP at the latest implementation state.
- Whether a follow-up alignment with Beatrice and Mukhammadjon is needed after the status review.
- How the module model and design-system approach should evolve after the MVP.
- How and when the LP Builder content type, renderer and publishing flow will move from `next` to production `pro` if not already addressed.
- The MCP/Action should not report or imply successful production publication while production publishing is unavailable.
- Some visual spacing and padding in the Contentful preview previously differed from the current LP Builder/AEM rendering; these appeared to be refinement work rather than a blocker for the MVP integration.
- Whether Claude Design, a future agent, or the Custom GPT should become the long-term authoring surface after the Contentful workflow is stable.
- Which landing-page groups should be included first in migration and how the B2B Product Marketing team wants to sequence execution after the initial concept.

## Next Steps

1. Inspect the generated Contentful output and verify whether LP Builder CSS classes are still fully included or whether the code has been reduced and relies more on Contentful-native styling or structures; use this as part of the current MVP status review.
2. Decide whether a follow-up alignment with Beatrice and Mukhammadjon is needed and schedule it if useful.
3. Clarify how LP Builder modules and the design-system approach should continue after the MVP.

## Contentful Migration Boundary

Migration of existing landing pages is a separate workstream. The first migration task is to define the slug and URL logic for the future Contentful setup. Once that is clear enough, Dominik will draft the migration concept for existing landing pages. After the first concept exists, he will schedule a kickoff with the B2B Product Marketing team to align scope, approach and how to proceed.

## Last Confirmed

Current MVP task sequence, including the CSS-class check, confirmed by Dominik on 2026-08-25. The Contentful Migration sequence and post-MVP module/design-system question remain as confirmed on 2026-08-24. The last technically verified implementation state remains the working creation, transfer and preview flow in `next`; the CSS-class and rendering-boundary check is now the immediate MVP action.

## Related Context

See [Landing Page Builder](landing-page-builder.md).
