# Marketing Content Platform

## Purpose

Build the shared Marketing content platform around Landing Page Builder, Contentful and the future asset workflow so Marketing can create, manage and publish landing pages through a controlled, reusable setup instead of copying pages manually into AEM.

The platform work is distinct from the migration of existing AEM pages. `Marketing Content Platform` covers the tools and infrastructure; `Contentful Migration` covers the actual migration of existing pages.

## Current Status

The Landing Page Builder → Contentful MVP is substantially validated in the development environment `next`.

The current end-to-end flow has been demonstrated: a new landing page can be generated in the Landing Page Builder, transferred directly into Contentful and viewed through a preview link. Dominik independently validated draft creation and updates, and OAuth works with his Contentful account.

Production publishing is the main remaining platform step. Mukhammadjon confirmed on 2026-08-27 that production requires migrating the LP Builder content type, merging the renderer code from development into production, and configuring the required services and MCP production environment. He estimates this as roughly one working day once the work is explicitly tasked/prioritized through Beatrice.

Image handling should not be expanded as part of the MVP. The intended MVP behavior is the established LP Builder flow: placeholder images are used by default until the user provides direct image URLs. Mukhammadjon can revert his current image-grid / Contentful-image-selection experiments. This same URL-based flow is intended for the migration pilot, while a later Marketing Asset Library should provide the durable image URLs.

Dominik plans pre-publish checks for required image URLs, links and basic SEO/quality guardrails. Mukhammadjon confirmed that link validation also appears to require implementation in the MCP layer, so the validation model is expected to combine Builder-side UX checks with MCP-side technical enforcement.

After the MVP is finished, Dominik plans to duplicate the Contentful-enabled GPT so he owns the working copy used for migration and continued LP Builder development.

## Dominik's Role

Dominik owns the product direction, Marketing requirements and quality of the platform setup. He validates the Landing Page Builder → Contentful workflow, defines the desired future authoring and asset experience and aligns the technical direction with Contentful and platform stakeholders.

## Key Stakeholders

- Mukhammadjon Kayumov for the GPT Actions / Contentful integration implementation
- Beatrice for Core Team coordination, prioritization and production-publishing alignment
- Daniel Herold, Director of Tech - Core/Builders Platform, for broader Builder-platform direction and future collaboration
- Matthias Brandstätter for Contentful ownership and strategic platform direction
- Stefan Harssdorf for Contentful architecture and technical assessment
- Paul for the asset / migration discussion
- John Ford as a potential technical contact for Scout24 image storage and delivery infrastructure
- Contentful team
- Marketing teams using Landing Page Builder, Contentful and future asset workflows
- SEO and UX where platform rules affect generated pages

## Confirmed Direction and Decisions

- Use `Marketing Content Platform` as the broader project name for the tool and infrastructure work around Landing Page Builder, Contentful and the future asset workflow.
- Keep `Contentful Migration` separate for the actual migration of existing AEM pages.
- The short-term MVP remains HTML-based.
- The current integration uses GPT Actions / MCP to transfer generated LP Builder HTML into Contentful `next`.
- Draft creation and updates require explicit user approval; publishing remains a separate consequential action.
- Direct preview of unpublished drafts is part of the validated workflow in `next`.
- Do not add a new image-selection experience to the MVP. Keep the established LP Builder behavior: placeholders first, user-supplied direct image URLs when available.
- Automatic Contentful image recommendations / grids should be removed from the intended MVP flow.
- The broader Marketing image problem should later be solved through a central Marketing Asset Library rather than Contentful as image SSOT.
- The current asset-platform direction to evaluate is AWS/S3 plus existing Scout24 image delivery.
- Pre-publish quality checks should include required image URLs, valid links and basic SEO/quality rules.
- According to Mukhammadjon, link validation also needs support in the MCP/integration layer.
- Detailed user-role and publishing-permission governance is not required for the current MVP and can be defined later for broader production use.
- After MVP completion, Dominik intends to duplicate the Contentful-enabled GPT and continue migration and Builder development from his own copy.

## Important Developments

- 2026-08-11: Mukhammadjon demonstrated a successful GPT-to-Contentful draft flow with a rendered test result.
- 2026-08-12: Dominik verified direct preview and updates in Contentful `next`.
- 2026-08-12: A publish test exposed that production publishing was not yet available because the required renderer/content type had not been transferred to `pro`.
- 2026-08-26: Dominik defined the direction of a central Marketing Asset Library and decided Contentful image suggestions should not become the target Builder image workflow.
- 2026-08-27: Mukhammadjon clarified that production publishing requires content-type migration, renderer merge to production, service configuration and MCP production setup; he estimates roughly one working day once tasked.
- 2026-08-27: Mukhammadjon confirmed the current image-grid/image-selection work can be reverted and the MVP can remain URL-based.
- 2026-08-27: Mukhammadjon indicated link validation also needs implementation inside MCP.
- 2026-08-27: Dominik clarified that after MVP completion he plans to duplicate the Contentful-enabled GPT for migration and continued Builder development.

## Open Questions and Risks

- Whether Beatrice gives the go to prioritize the remaining production-enablement work for `pro`.
- Exact implementation and scope of MCP-side link validation before publishing.
- What URL/domain allowlisting, security or delivery constraints apply to future external image URLs.
- Whether Marketing can use an existing Scout24 AWS/S3 namespace or bucket and the existing image-delivery service for a central Marketing Asset Library.
- What ownership, permissions, metadata and upload API are needed for the future asset platform.

## Next Steps

1. Align with Beatrice on prioritizing the remaining production-enablement work for `pro` and real publishing.
2. Have Mukhammadjon revert the current image-selection experiments and keep the MVP on the established placeholder + direct-URL flow.
3. Align the Builder-side pre-publish checks with the MCP-side link-validation implementation.
4. After MVP completion, duplicate the Contentful-enabled GPT and use that copy for migration and continued Builder development.
5. Continue defining the Marketing Asset Library technical approach once the AWS/image-delivery path is clear.

## Last Confirmed

Mukhammadjon's technical status update and Dominik's MVP/handover direction confirmed on 2026-08-27. Generation, draft, update, preview and OAuth work in `next`; production publishing remains a bounded implementation step requiring content-type/renderer migration plus services/MCP production configuration.

## Related Context

See [Landing Page Builder](landing-page-builder.md).
