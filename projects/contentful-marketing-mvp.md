# Landing Page Builder & Contentful

## Purpose

Enable landing pages to be created in the Landing Page Builder and transferred into Contentful through a controlled end-to-end workflow, while keeping the Landing Page Builder as the central authoring experience during the MVP phase.

## Current Status

The Landing Page Builder & Contentful MVP was previously close to completion in the development environment `next`.

The current end-to-end flow has been demonstrated: a new landing page can be generated in the Landing Page Builder, transferred directly into Contentful and viewed immediately through a preview link. Dominik independently validated the core lifecycle from his own account, including draft creation and updates. The rendered output looked broadly consistent with the current LP Builder, although some spacing and padding differences remained for later refinement.

Production publishing was not yet available at the last technical confirmation. Mukhammadjon clarified that the LP Builder content type and renderer existed only in Contentful `next`, not production `pro`. A publish test returned a published status but the public route produced a 404; this was considered an MCP-code issue rather than a real production publication.

Jorin confirmed the LP Builder & Contentful work as a current priority on 2026-08-20. Contentful migration remains a separate workstream rather than part of the MVP task set.

The migration concept has now advanced into a concrete B2B pilot. The `tipps` / Anwenderhandbuch area will be used as the first blueprint. Claude Design successfully crawled existing pages, preserved original copy, inspected structure and generated an overview page plus varied detail pages from the source content. The target is therefore not a visual 1:1 AEM recreation but a shared Anwenderhandbuch page system with reusable modules while preserving original texts, images and links as migration content.

The asset workflow is also becoming a separate technical layer of the migration. For the pilot, Claude Design produced a structured inventory covering 30 pages and 97 assets, with 90 marked migration-relevant. The intended repeatable flow is to use this inventory to automate extraction of original assets from AEM, later upload them to the future central asset store and write the new delivery URLs back into the mapping.

In parallel, Dominik is exploring a central Marketing Asset Library as a future single source of truth for images across Contentful, Iterable, Beefree, Salesforce, LP Builder workflows and agents. The current direction is to evaluate AWS/S3 as storage and reuse Scout24's existing image-delivery infrastructure for dynamic resizing, format conversion, compression and CDN delivery. A visual asset-library UI is not required for the migration pilot itself but is relevant for the future LP Builder + Contentful authoring experience.

## Dominik's Role

Dominik represents Creative Operations and landing-page requirements, validates the controlled LP Builder workflow and owns the product-level questions around how the Landing Page Builder and Contentful should work together in the future.

For Contentful Migration, Dominik owns the migration framing and pilot design. He is testing the Anwenderhandbuch as the first blueprint, defining what must be preserved from AEM, shaping the repeatable content and asset migration workflow and aligning the future asset architecture with relevant technical stakeholders.

## Key Stakeholders

- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Beatrice for Core Team coordination and production-publishing alignment
- Matthias Brandstätter for Contentful ownership and strategic platform direction
- Stefan Harssdorf for Contentful architecture and technical assessment
- Paul for the 2026-08-26 asset / migration discussion
- John Ford as a potential technical contact for Scout24 image storage and delivery infrastructure
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
- The B2B `tipps` / Anwenderhandbuch area is the first migration blueprint.
- Existing texts, images and links should be preserved during migration even when the new layout or module composition differs from AEM.
- The future Anwenderhandbuch should use one coherent page system: an overview/navigation page plus detail pages composed from a small reusable module set.
- Historical AEM directory placement should not determine the future information architecture; help/FAQ pages outside `/tipps/` may move into the Anwenderhandbuch when functionally appropriate.
- Image downloading should become a repeatable technical workflow rather than a manual or Claude-specific step.
- The future Marketing Asset Library should aim for one central asset source reused across marketing tools; AWS/S3 plus existing Scout24 image delivery is the current architecture to evaluate, not yet a final implementation decision.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-11: Dominik independently validated draft creation through the shared Contentful-enabled LP Builder. The draft was created unpublished with version 1 and no Action warnings.
- 2026-08-11: Dominik updated the same Contentful draft after changing the H1. The entry remained stable, stayed unpublished and advanced to version 2.
- 2026-08-12: Mukhammadjon added a direct preview link to the GPT flow. Dominik verified the preview and a subsequent content update successfully.
- 2026-08-12: A publish test exposed the current environment boundary: the Action reported publication, but the public route returned 404 because LP Builder rendering/publishing had not yet been transferred from `next` to `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder.
- 2026-08-20: Jorin supported the project as one of Dominik's priority workstreams and agreed with treating Contentful migration as a separate conceptual next step rather than assuming migration execution is already defined.
- 2026-08-24: Dominik clarified the migration sequence: slug and URL logic, migration concept and then B2B Product Marketing alignment.
- 2026-08-26: Claude Design successfully validated the Anwenderhandbuch migration approach by crawling existing pages, preserving original text and producing a coherent overview/detail-page system with varied modules.
- 2026-08-26: The first structured asset inventory covered 30 pages and 97 assets, including 90 migration-relevant assets, renditions, shared DAM assets and a PDF.
- 2026-08-26: Dominik aligned the broader asset problem with Matthias Brandstätter and Paul. The preferred direction is a central Marketing Asset Library with one stored original per asset and shared URL-based delivery across marketing tools and AI workflows.
- 2026-08-26: Dominik contacted John Ford to verify whether the existing Scout24 AWS/S3 and image-delivery infrastructure can support this Marketing use case.

## Open Questions and Risks

- What is still missing from the current MVP at the latest implementation state.
- Whether a follow-up alignment with Beatrice and Mukhammadjon is needed after the status review.
- How the module model and design-system approach should evolve after the MVP.
- How and when the LP Builder content type, renderer and publishing flow will move from `next` to production `pro` if not already addressed.
- How future slugs and public URLs should work for migrated pages, especially where SEO value makes URL preservation preferable.
- How much of the Anwenderhandbuch migration can be automated reliably from crawl through content reconstruction, asset extraction, upload and Contentful draft creation.
- How to retrieve the highest-quality originals for AEM image renditions and handle assets requiring manual review.
- Whether Marketing can use an existing Scout24 AWS/S3 namespace or bucket and the existing `pictures.immobilienscout24.de` image-delivery service for a central Marketing Asset Library.
- What ownership, permissions, metadata and upload API are required for that future asset platform.
- Whether Claude Design, a future agent, or the Custom GPT should become the long-term authoring surface after the Contentful workflow is stable.

## Next Steps

1. Continue the Anwenderhandbuch pilot and validate the repeatable migration flow from page crawl through content reconstruction and asset extraction.
2. Define the slug and URL logic for migrated pages, including SEO-sensitive cases.
3. Await John's response on the existing Scout24 image infrastructure and clarify the supported Marketing storage/upload path if he is the right contact.
4. Turn the asset inventory into an automated download/mapping step that can later upload to the selected central asset store and write back new delivery URLs.
5. Use the pilot findings as the concrete basis for the B2B Product Marketing migration kickoff.
6. Separately continue the LP Builder & Contentful MVP status review and post-MVP module/design-system decision.

## Contentful Migration Boundary

Migration of existing landing pages is a separate workstream from the current LP Builder & Contentful MVP. The Anwenderhandbuch is now the concrete first pilot. The migration should preserve source content and assets, normalize legacy AEM variety into a smaller reusable page/module system and avoid carrying the historic AEM directory structure into the future information architecture without review.

## Last Confirmed

Anwenderhandbuch pilot, Claude Design validation, asset inventory and Marketing Asset Library direction confirmed by Dominik on 2026-08-26. The technically verified Contentful implementation state remains the working creation, transfer and preview flow in `next`; real production publishing had not yet been confirmed.

## Related Context

See [Landing Page Builder](landing-page-builder.md).
