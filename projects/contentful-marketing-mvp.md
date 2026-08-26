# Marketing Content Platform

## Purpose

Build the shared Marketing content platform around Landing Page Builder, Contentful and the future asset workflow so Marketing can create, manage and publish landing pages through a controlled, reusable setup instead of copying pages manually into AEM.

The platform work is distinct from the migration of existing AEM pages. `Marketing Content Platform` covers the tools and infrastructure; `Contentful Migration` covers the actual migration of existing pages.

## Current Status

The Landing Page Builder → Contentful MVP is already substantially validated in the development environment `next`.

The current end-to-end flow has been demonstrated: a new landing page can be generated in the Landing Page Builder, transferred directly into Contentful and viewed immediately through a preview link. Dominik independently validated draft creation and updates. OAuth works with the personal Contentful account, and existing published Contentful assets can be searched, selected and assigned to image slots before saving or updating a draft.

The MVP remains HTML-based. The existing controlled Marketing module approach remains intact and should not be replaced by an unconstrained component-generation model.

Production publishing is not yet validated. The LP Builder renderer/content type previously existed only in Contentful `next`, not production `pro`, and an earlier publish action incorrectly implied success while the public route returned 404. CTA/link handling also remains to be finalized.

The broader image workflow is now part of the platform direction. The current Contentful asset search solves reuse of already existing Contentful assets, but not the larger Marketing need for a central image source across Contentful, Iterable, Beefree, Salesforce, LP Builder workflows and AI agents.

Dominik is therefore exploring a central Marketing Asset Library. The current architecture to evaluate is AWS/S3 as the original asset store plus Scout24's existing image-delivery infrastructure for dynamic resizing, format conversion, compression and CDN delivery. A later visual library could provide search, filtering and curated asset selection for marketers and the LP Builder.

For the future LP Builder workflow, the preferred experience is not a list of individual image URLs and not automatic image recommendations pulled from Contentful. The builder should use explicit image URLs as the stable integration contract. Before a page is published, if required image slots still have no image URL, the agent should tell the user that images are missing and offer two clear options: either the user supplies image URLs, or the agent inserts temporary/example images for preview purposes. In the target architecture, production image URLs should come from the central Marketing Asset Library / AWS-based asset setup rather than making Contentful the source of truth for imagery.

A future visual asset-library UI should make it easy for colleagues to browse and select assets stored centrally and pass the selected stable asset URL back into the LP Builder. That UI is not part of the MVP, but image URL handling is required before migration starts because migrated pages will contain images.

## Dominik's Role

Dominik owns the product direction, Marketing requirements and quality of the platform setup. He validates the Landing Page Builder → Contentful workflow, defines the desired future authoring and asset experience and aligns the technical direction with Contentful and platform stakeholders.

## Key Stakeholders

- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Beatrice for Core Team coordination and production-publishing alignment
- Matthias Brandstätter for Contentful ownership and strategic platform direction
- Stefan Harssdorf for Contentful architecture and technical assessment
- Paul for the 2026-08-26 asset / migration discussion
- John Ford as a potential technical contact for Scout24 image storage and delivery infrastructure
- Contentful team
- Marketing teams using Landing Page Builder, Contentful and future asset workflows
- SEO and UX where platform rules affect generated pages

## Confirmed Direction and Decisions

- Use `Marketing Content Platform` as the broader project name for the tool and infrastructure work around Landing Page Builder, Contentful and the future asset workflow.
- Keep `Contentful Migration` separate for the actual migration of existing AEM pages.
- The Landing Page Builder remains the controlled Marketing creation workflow during the current MVP phase.
- The short-term MVP remains HTML-based.
- The current integration uses GPT Actions to transfer generated LP Builder HTML into Contentful `next`.
- Draft creation and updates require explicit user approval; publishing remains a separate consequential action.
- Direct preview of unpublished drafts is part of the validated workflow in `next`.
- Existing Contentful assets can already be searched and reused through the test GPT, but this is not the desired long-term image-selection model.
- Automatic Contentful image recommendations should be removed from the intended LP Builder publishing flow.
- The LP Builder should support explicit image URLs as the core image reference.
- If image URLs are missing before publish, the agent should explicitly ask the user to provide them or offer to insert temporary/example images rather than silently selecting Contentful assets.
- The broader Marketing image problem should not be solved by making Contentful the default SSOT without further evaluation.
- The current asset-platform direction to evaluate is one central source reused across Marketing tools, with AWS/S3 plus existing Scout24 image delivery as the leading technical option.
- A future visual asset-library experience should support LP Builder and other Marketing workflows, but is not required for the Anwenderhandbuch migration pilot.
- The long-term authoring surface may later be GPT, agent or Claude Design; this should not block completion of the current Contentful workflow.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-12: Dominik verified direct preview and updates in Contentful `next`.
- 2026-08-12: A publish test exposed that production publishing was not yet available because the required renderer/content type had not been transferred to `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface.
- 2026-08-26: Existing Contentful asset search and assignment was confirmed as working for the dev MVP.
- 2026-08-26: Dominik aligned the broader asset problem with Matthias Brandstätter and Paul and defined the direction of a central Marketing Asset Library rather than separate image stores per tool.
- 2026-08-26: Dominik contacted John Ford to verify whether existing Scout24 AWS/S3 and image-delivery infrastructure can support the Marketing use case.
- 2026-08-26: Dominik decided to group Landing Page Builder, Contentful integration and the future asset workflow under the broader `Marketing Content Platform` project.
- 2026-08-26: Ciaran's capacity question was resolved; no further budget is available for additional support from him.
- 2026-08-26: Dominik clarified the target LP Builder image behavior: do not automatically recommend Contentful assets as the default. Use explicit image URLs, and if image slots are still empty before publishing, ask the user to provide URLs or consciously choose temporary/example imagery. The later asset-library UI can handle browsing and selection, but is not required for the MVP.

## Open Questions and Risks

- Which remaining acceptance criteria are still open for the Landing Page Builder → Contentful MVP.
- How CTA/link handling should be finalized so generated CTAs never contain invented or empty targets.
- How and when the LP Builder content type, renderer and publishing flow will move from `next` to production `pro`.
- How to prevent misleading publish/live-link responses while production publishing is unavailable.
- Can the LP Builder renderer safely use external image URLs directly, including future URLs from the AWS/image-delivery setup, without requiring assets to be copied into Contentful first?
- What URL/domain allowlisting, security or delivery constraints apply to external image URLs in LP Builder HTML?
- Should temporary/example imagery be limited to preview only so it can never be published accidentally?
- Whether Marketing can use an existing Scout24 AWS/S3 namespace or bucket and the existing image-delivery service for a central Marketing Asset Library.
- What ownership, permissions, metadata and upload API are needed for the future asset platform.
- How the visual asset-library experience should integrate with LP Builder and Contentful after the underlying storage path is clear.
- Whether Claude Design, a future agent or the Custom GPT should become the long-term authoring surface after the Contentful workflow is stable.

## Next Steps

1. Complete the remaining Landing Page Builder → Contentful MVP work: clarify outstanding acceptance criteria, finalize CTA/link handling and align the production `pro` path with Beatrice and Mukhammadjon.
2. In the Beatrice alignment, clarify whether LP Builder modules can use external image URLs directly, what constraints apply, and how missing-image handling should work before publish.
3. Await John Ford's response on the existing Scout24 image infrastructure, then define the Marketing Asset Library technical approach, ownership and implementation plan.

## Last Confirmed

Project grouping, Marketing Asset Library direction and the LP Builder target image behavior confirmed by Dominik on 2026-08-26. The technically verified Contentful state remains the working generation, draft, update, preview, OAuth and existing-asset reuse flow in `next`; real production publishing has not yet been confirmed.

## Related Context

See [Landing Page Builder](landing-page-builder.md).
