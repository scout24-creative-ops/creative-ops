# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup using an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

## Current Status

Dominik has developed and tested an initial migration workflow around the B2B Anwenderhandbuch / `tipps` area as the first manageable pilot.

Claude Design has been tested on existing AEM pages and can crawl groups of URLs, extract exact text, links and image URLs, inspect page structure and propose a consolidated target design. The intended workflow is to use that structured output, including CSV/file-based page data, as input for the Landing Page Builder rather than manually copying each page.

The pilot is expected to cover roughly 40–60 pages once the B2B team confirms the final scope. The goal is not a visual 1:1 recreation of every historic AEM page. Existing content and important assets should be preserved, while page structure and module composition may be consolidated into a smaller, consistent system.

The Landing Page Builder → Contentful MVP is close enough that Dominik expects migration preparation to continue immediately and practical page production to become relevant within roughly the next two weeks. The pilot should be used to validate the end-to-end process before expanding to larger B2B areas and eventually other areas.

B2B forms are a critical dependency. Product Marketing B2B relies heavily on Salesforce-backed forms, and migration should not start at scale until there is a clean supported way to include them. The preferred direction is that the LP Builder does not generate complete form logic itself. Instead, it should place a defined form module/slot that loads or references a centrally managed form instance.

Images are not a separate MVP feature for the migration. The migration workflow should continue to use the LP Builder's established placeholder + direct-image-URL model. Existing page image URLs can be extracted during migration and later replaced with durable URLs from the planned central Marketing Asset Library / AWS setup.

## Migration Approach

1. Select a manageable source area and confirm which pages still need migration.
2. Use Claude Design to crawl the relevant AEM URLs and extract exact content, links, image URLs and page structure.
3. Let Claude Design propose a consolidated design / module pattern for the page group rather than preserving historic page layouts blindly.
4. Export structured page data, for example CSV/files containing exact copy, links and asset references.
5. Feed that structured data into the Landing Page Builder to generate the target pages consistently.
6. Create the pages in Contentful through the LP Builder integration.
7. Review, validate SEO/URLs/content and publish once the production flow is available.
8. Use the pilot findings to improve the process before scaling to larger page groups.

## Dominik's Role

Dominik drives the migration system, workflow, technical setup and LP Builder implementation. He is also coordinating the initial pilot and the required platform, SEO and stakeholder dependencies.

For the proposed small pod, Dominik wants a fachlich/content-facing counterpart from the B2B team so content relevance, URL decisions, duplicate/variant decisions, design review and important content/image questions do not require repeatedly pulling the wider team into every detail.

## Key Stakeholders

- B2B Product Marketing as the first migration target
- Juliane Bischoff for B2B team support and the proposed pod setup
- Ulrike as the proposed fachlich/content-facing pod member
- Peter as part of the proposed small migration pod
- Beatrice for Contentful / LP Builder platform coordination and B2B form alignment
- Daniel Herold for broader Core/Builders Platform alignment
- SEO team for URL/slug, redirects, SEO preservation and LLM/AI visibility
- Mukhammadjon for the Contentful integration until the MVP is handed over

## Confirmed Direction and Decisions

- Start small with the B2B Anwenderhandbuch / `tipps` area as the first migration blueprint.
- Use Claude Design for large-scale analysis and structured extraction of existing pages before rebuilding them.
- Preserve exact source content and important assets wherever required, while allowing the future layout/module composition to differ from AEM.
- Do not inherit the historic AEM directory structure or page design blindly when pages can be consolidated into a clearer target model.
- Use structured files such as CSVs as the handoff between Claude Design analysis and LP Builder generation where useful.
- The LP Builder should generate the target pages and Contentful should handle the CMS/publishing layer.
- Existing image URLs / extracted asset references are sufficient for the pilot; the future Marketing Asset Library is a separate platform workstream.
- B2B forms are an essential migration prerequisite and should be integrated as centrally managed form instances through a dedicated slot/module rather than generated completely inside the LP Builder.
- SEO and URL/slug decisions must be aligned before broad migration because important existing URLs and visibility cannot simply be discarded.
- The pilot should remain controlled by a small group first rather than opening the new Contentful workflow broadly to Marketing teams immediately.

## Risks and Open Questions

- Final B2B pilot scope is not yet confirmed; the current estimate is roughly 40–60 pages.
- Which URLs must remain unchanged, which can be redirected, and how the future slug/directory model should work.
- Exact Salesforce form types/patterns that B2B currently uses and how they should be referenced from the LP Builder.
- Whether the proposed Ulrike/Peter/Dominik pod setup is confirmed and what capacity Ulrike can provide.
- How migration QA should be divided between content, design, SEO and technical checks.
- How asset URLs should transition from existing sources to the future central Marketing Asset Library without blocking the initial pilot.

## Next Steps

1. Align with Juliane on the proposed small pod with Ulrike and Peter and confirm the fachlich/content-facing support model.
2. Provide Beatrice with representative B2B form examples and clarify the existing Salesforce form solution and required LP Builder integration pattern.
3. Align with SEO on URL/slug rules, redirects, SEO preservation and LLM/AI visibility before migration starts at scale.
4. Finalize the Anwenderhandbuch page scope with the B2B team.
5. Continue refining the Claude Design → structured files → LP Builder → Contentful migration workflow while the Contentful production publishing path is completed.

## Last Confirmed

Migration approach, B2B form dependency and near-term pilot direction confirmed in Dominik's alignment with Beatrice on 2026-08-27.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md) and [Landing Page Builder](landing-page-builder.md).
