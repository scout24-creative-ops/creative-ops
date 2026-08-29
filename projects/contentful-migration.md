# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup using an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

## Current Status

Dominik has developed and tested an initial migration workflow around the B2B Anwenderhandbuch / `tipps` area as the first manageable pilot.

Claude Design has been tested on existing AEM pages and can crawl groups of URLs, extract exact text, links and image URLs, inspect page structure and propose a consolidated target design. The intended workflow is to use that structured output, including CSV/file-based page data, as input for the Landing Page Builder rather than manually copying each page.

The Anwenderhandbuch remains the first consolidation case. Current tips, FAQs and similar help content can be reviewed together and migrated into a clearer common structure rather than inheriting the historic AEM directory layout.

The broader migration now needs to be organized as a program rather than only as one page-group pilot. The sitemap should become a migration inventory in which each relevant page is classified by migration treatment, URL/SEO requirement, preservation level, special functionality and responsible fachlich owner.

Different page groups require different migration rules. Some pages can be consolidated or redesigned, while important entry pages may need strict preservation: content and design should remain unchanged and the existing public URL may also need to remain stable. These protected cases must be identified before automated rebuilding starts.

SEO and URL handling are cross-cutting migration requirements. Existing visibility must be assessed before changing URLs or content. The project needs a clear model for preserving public URLs where required, using redirects where appropriate, and understanding how Contentful slug/routing behavior maps to the final public URL. Where pages have weak or missing SEO today, migration can be used as an improvement opportunity, but not at the cost of unnecessary changes to high-performing or business-critical pages.

The Landing Page Builder → Contentful MVP is close enough that migration preparation can continue immediately. The Anwenderhandbuch pilot should validate the end-to-end process before the workflow is scaled to larger B2B areas.

B2B forms remain a critical dependency. Product Marketing B2B relies heavily on Salesforce-backed forms, and migration should not start at scale until there is a clean supported way to include them. The preferred direction is that the LP Builder does not generate complete form logic itself. Instead, it should place a defined form module/slot that loads or references a centrally managed form instance.

Images are not a separate MVP feature for the migration. The migration workflow should continue to use the LP Builder's established placeholder + direct-image-URL model. Existing page image URLs can be extracted during migration and later replaced with durable URLs from the planned storage / asset setup.

## Migration Organization

Use one central migration inventory / manifest as the operational backbone for the sitemap. Each page should eventually carry at least:

- current public URL;
- logical page group / future destination;
- migration treatment;
- content/design preservation requirement;
- SEO importance / review status;
- target public URL and Contentful slug/routing decision;
- redirect requirement where relevant;
- special functionality such as Salesforce forms;
- asset dependencies;
- fachlich owner / reviewer;
- migration and QA status.

The migration treatment should distinguish at least:

1. `Consolidate / restructure` — pages such as tips, FAQs or help content that can move into a clearer common target model.
2. `Preserve exactly` — business-critical or high-value entry pages where content and design must remain unchanged and the public URL may need to remain identical.
3. `Migrate and improve` — relevant pages that should be rebuilt while using the migration to improve structure, SEO or quality.
4. `Retire / redirect` — obsolete, duplicate or superseded pages that should not be rebuilt as separate pages.
5. `Special-function page` — pages that depend on forms or other external functionality and need an explicit technical integration path.

## Migration Approach

1. Use the sitemap as the source inventory and classify pages before migration.
2. Confirm page relevance and authoritative variants with the responsible Product Marketing owners.
3. Establish URL/SEO rules and identify protected pages before broad rebuilding.
4. Select a manageable source area such as the Anwenderhandbuch and confirm the page scope.
5. Use Claude Design to crawl the relevant AEM URLs and extract exact content, links, image URLs and page structure.
6. For consolidation/improvement cases, let Claude Design propose a target structure or module pattern rather than preserving historic layouts blindly.
7. For protected pages, preserve required content/design and URL behavior instead of applying redesign logic.
8. Export structured page data, for example CSV/files containing exact copy, links, asset references and migration metadata.
9. Feed that structured data into the Landing Page Builder to generate the target pages consistently.
10. Create the pages in Contentful through the LP Builder integration.
11. Review and validate content, design, SEO, URLs, redirects, assets and special functionality before publish.
12. Use pilot findings to improve the process before scaling to larger page groups.

## Dominik's Role

Dominik drives the migration system, workflow, technical concept, LP Builder use and overall orchestration. He also coordinates the interfaces to Contentful, SEO, asset/storage and the relevant Product Marketing stakeholders.

Dominik aligned the broader direction with Daniel Herold and stated that he is confident the combination of the Landing Page Builder MVP, his responsibility for B2B Product Marketing and Claude Design can support a scalable migration approach.

Dominik should own the migration method, interfaces, quality model and overall coherence, but should not automatically take over every fachliche page decision. Content relevance, authoritative variants and business requirements should come from the responsible Product Marketing owners; SEO decisions should be made with the SEO team; platform implementation should remain with the relevant technical owners.

For the proposed small pod, Dominik wants a fachlich/content-facing counterpart from the B2B team so content relevance, URL decisions, duplicate/variant decisions, design review and important content/image questions do not require repeatedly pulling the wider team into every detail.

## Key Stakeholders

- B2B Product Marketing as the first migration target and fachlich owner for page relevance/content decisions
- Juliane Bischoff for B2B team support and the proposed pod setup
- Ulrike as the proposed fachlich/content-facing pod member
- Peter as part of the proposed small migration pod
- Beatrice for Contentful / LP Builder platform coordination and B2B form alignment
- Daniel Herold as a senior stakeholder for the broader migration and Core/Builders Platform direction
- SEO team for URL/slug, redirects, SEO preservation and LLM/AI visibility
- Mukhammadjon for the Contentful integration until the MVP is handed over

## Confirmed Direction and Decisions

- Start small with the B2B Anwenderhandbuch / `tipps` area as the first migration blueprint.
- Treat the broader sitemap as a migration program that requires classification before page production starts at scale.
- Use a central migration inventory / manifest to connect page classification, URL/SEO rules, ownership, special functionality and migration status.
- Use Claude Design for large-scale analysis and structured extraction of existing pages before rebuilding them.
- Consolidate related help content such as current tips and FAQs into a clearer Anwenderhandbuch target model where appropriate.
- Do not inherit the historic AEM directory structure or page design blindly when pages can be consolidated into a clearer target model.
- Identify protected entry pages where content/design must remain unchanged and where the existing public URL may need to remain stable.
- Preserve exact source content and important assets wherever required; redesign or SEO improvement should depend on the migration classification rather than be applied automatically to every page.
- Use structured files such as CSVs as the handoff between Claude Design analysis and LP Builder generation where useful.
- The LP Builder should generate the target pages and Contentful should handle the CMS/publishing layer.
- Existing image URLs / extracted asset references are sufficient for the pilot; the future asset/storage setup is a separate platform workstream.
- B2B forms are an essential migration prerequisite and should be integrated as centrally managed form instances through a dedicated slot/module rather than generated completely inside the LP Builder.
- SEO and URL/slug decisions must be aligned before broad migration because important existing URLs and visibility cannot simply be discarded.
- The pilot should remain controlled by a small group first rather than opening the new Contentful workflow broadly to Marketing teams immediately.

## Risks and Open Questions

- Final B2B pilot scope is not yet confirmed; the current estimate is roughly 40–60 pages.
- Which current pages are protected entry pages and therefore require exact content/design preservation.
- Which URLs must remain unchanged, which can be redirected, and how public URL preservation maps to Contentful slug/routing behavior.
- Which pages currently carry material SEO visibility and therefore require a preservation baseline before changes.
- Which weaker pages should use migration as an SEO improvement opportunity and who defines the required SEO content/metadata.
- Exact Salesforce form types/patterns that B2B currently uses and how they should be referenced from the LP Builder.
- Whether the proposed Ulrike/Peter/Dominik pod setup is confirmed and what capacity Ulrike can provide.
- How migration QA should be divided between content, design, SEO and technical checks.
- How asset URLs should transition from existing sources to the future storage setup without blocking the initial pilot.

## Next Steps

1. Turn the existing sitemap into a migration inventory / manifest and define the page-classification fields and migration categories.
2. Identify the first set of protected entry pages and confirm which dimensions are frozen: content, design and/or public URL.
3. Align with SEO on URL/slug/routing rules, redirects, SEO preservation baselines and improvement opportunities before migration starts at scale.
4. Align with Juliane on the proposed small pod with Ulrike and Peter and confirm the fachlich/content-facing support model.
5. Have B2B owners confirm page relevance, duplicate/variant decisions and the final Anwenderhandbuch scope.
6. Continue refining the Claude Design → structured files → LP Builder → Contentful migration workflow while the Contentful production publishing path is completed.
7. Keep Salesforce form requirements with the B2B/form owners and Beatrice's platform side rather than making Dominik the detailed Salesforce requirements owner.

## Last Confirmed

Broader migration-program organization, protected-page requirement, SEO/URL classification need and Daniel alignment confirmed by Dominik on 2026-08-29; Anwenderhandbuch remains the first B2B pilot.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md) and [Landing Page Builder](landing-page-builder.md).
