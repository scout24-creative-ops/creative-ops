# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup using an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

## Current Status

The broader migration now needs to be organized as a program rather than only as one page-group pilot. The existing sitemap is the starting inventory, but the migration plan, ownership model, page classification, QA model and enabling Builder work still need to be made explicit before production starts at scale.

The B2B Anwenderhandbuch / `tipps` area remains the first consolidation pilot. Claude Design has been tested on existing AEM pages and can crawl groups of URLs, extract exact text, links and image URLs, inspect page structure and propose a consolidated target design. These tests are promising, but the pilot is still a rough concept rather than a finished delivery plan: final scope, sequence, ownership, target page patterns, SEO/URL handling, QA and the exact repeatable production flow are not yet fully defined.

The current Landing Page Builder creates pages from a fixed catalogue of predefined modules. That catalogue is too limited to recreate the broader variety of existing AEM pages and is therefore a migration capability gap. The Anwenderhandbuch tests point toward the intended solution: for each meaningful page group, use Claude Design to analyze the real page variation and create a coherent target design/module system, then make those required patterns available to the migration workflow instead of forcing every page into today's fixed module set.

Different page groups require different migration rules. The Anwenderhandbuch can consolidate current tips, FAQs and similar help content into a clearer common structure. In contrast, some important entry pages may require strict preservation: content and design should remain unchanged and the existing public URL may also need to remain stable. These protected cases must be identified before automated rebuilding starts.

SEO and URL handling are cross-cutting migration requirements. Existing visibility must be assessed before changing URLs or content. The project needs a clear model for preserving public URLs where required, using redirects where appropriate, and understanding how Contentful slug/routing behavior maps to the final public URL. Where pages have weak or missing SEO today, migration can be used as an improvement opportunity, but not at the cost of unnecessary changes to high-performing or business-critical pages.

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

## Planning Workstreams

Before scaling migration production, organize the work into these connected workstreams:

1. **Migration inventory and scope** — turn the sitemap into the manifest, group pages, identify duplicates/variants and determine what still needs migration.
2. **Anwenderhandbuch pilot definition** — confirm the actual pilot page set, target information architecture, target page patterns, responsibilities, QA and completion criteria.
3. **Protected-page identification** — identify entry/business-critical pages and define what is frozen for each: content, design and/or public URL.
4. **SEO and URL architecture** — establish preservation baselines, URL/slug/routing rules, redirect logic and where migration should improve SEO rather than preserve it.
5. **LP Builder migration capability** — identify which required page patterns are missing from the fixed module catalogue and define how Claude Design-derived target patterns become usable in the Builder/migration workflow.
6. **Claude Design production workflow** — standardize crawl/extraction, target-design proposal, structured handoff data and how page groups are converted into Builder-ready input.
7. **Forms and special functionality** — establish the supported form-slot pattern and identify other page dependencies that cannot be reproduced as ordinary HTML content.
8. **Assets** — validate stable image storage/delivery and the repeatable asset mapping/replacement flow without making asset-platform implementation part of the migration itself.
9. **Ownership and pod model** — define who provides content/page decisions, SEO decisions, technical/platform implementation and overall migration orchestration.
10. **QA and scale-out** — define checks for content, design, links, SEO, URLs, redirects, assets, forms and publish readiness, then use pilot findings to determine when the workflow is ready to scale.

## Migration Approach

1. Use the sitemap as the source inventory and classify pages before migration.
2. Confirm page relevance and authoritative variants with the responsible Product Marketing owners.
3. Establish URL/SEO rules and identify protected pages before broad rebuilding.
4. Define the Anwenderhandbuch pilot as a complete end-to-end test, not only a design experiment.
5. Use Claude Design to crawl the relevant AEM URLs and extract exact content, links, image URLs and page structure.
6. For consolidation/improvement cases, let Claude Design propose a target structure and the page/module patterns needed to cover the page group.
7. Compare those patterns with the current LP Builder capabilities and add or enable the missing patterns needed for the pilot rather than forcing pages into unsuitable existing modules.
8. For protected pages, preserve required content/design and URL behavior instead of applying redesign logic.
9. Export structured page data, for example CSV/files containing exact copy, links, asset references and migration metadata.
10. Feed that structured data into the Landing Page Builder to generate the target pages consistently.
11. Create the pages in Contentful through the LP Builder integration.
12. Review and validate content, design, SEO, URLs, redirects, assets and special functionality before publish.
13. Use pilot findings to improve the process before scaling to larger page groups.

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

- Start small with the B2B Anwenderhandbuch / `tipps` area as the first migration blueprint, but treat the pilot as an end-to-end migration test that still needs a concrete delivery plan.
- Treat the broader sitemap as a migration program that requires classification before page production starts at scale.
- Use a central migration inventory / manifest to connect page classification, URL/SEO rules, ownership, special functionality and migration status.
- Use Claude Design for large-scale analysis and structured extraction of existing pages before rebuilding them.
- Use Claude Design not only for extraction but also to define coherent target designs/page patterns for migration groups where the current fixed LP Builder module catalogue is insufficient.
- Do not assume the current fixed LP Builder module set can represent the migration target; required patterns must be identified and made available as part of migration enablement.
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
- The Anwenderhandbuch pilot is still only partially specified; completion criteria, target patterns, ownership and QA need to be defined.
- Which new or flexible page patterns are required because the current LP Builder fixed-module catalogue is too limited for the migration.
- How Claude Design-derived page patterns should be translated into durable Builder capabilities without creating uncontrolled one-off code.
- Which current pages are protected entry pages and therefore require exact content/design preservation.
- Which URLs must remain unchanged, which can be redirected, and how public URL preservation maps to Contentful slug/routing behavior.
- Which pages currently carry material SEO visibility and therefore require a preservation baseline before changes.
- Which weaker pages should use migration as an SEO improvement opportunity and who defines the required SEO content/metadata.
- Exact Salesforce form types/patterns that B2B currently uses and how they should be referenced from the LP Builder.
- Whether the proposed Ulrike/Peter/Dominik pod setup is confirmed and what capacity Ulrike can provide.
- How migration QA should be divided between content, design, SEO and technical checks.
- How asset URLs should transition from existing sources to the future storage setup without blocking the initial pilot.

## Next Steps

1. Turn the current migration thinking into one explicit delivery plan covering the ten planning workstreams above.
2. Define the Anwenderhandbuch pilot end-to-end: scope, target page system, required Builder patterns, ownership, QA and completion criteria.
3. Turn the existing sitemap into a migration inventory / manifest and define the page-classification fields and migration categories.
4. Identify the first set of protected entry pages and confirm which dimensions are frozen: content, design and/or public URL.
5. Align with SEO on URL/slug/routing rules, redirects, SEO preservation baselines and improvement opportunities before migration starts at scale.
6. Align with Juliane on the proposed small pod with Ulrike and Peter and confirm the fachlich/content-facing support model.
7. Have B2B owners confirm page relevance, duplicate/variant decisions and the final Anwenderhandbuch scope.
8. Continue refining the Claude Design → target design/patterns → structured files → LP Builder → Contentful workflow while the Contentful production publishing path is completed.
9. Keep Salesforce form requirements with the B2B/form owners and Beatrice's platform side rather than making Dominik the detailed Salesforce requirements owner.

## Last Confirmed

Migration planning workstreams, the unfinished state of the Anwenderhandbuch pilot, and the fixed-module LP Builder capability gap confirmed by Dominik on 2026-08-29. Broader migration-program organization, protected-page requirement, SEO/URL classification need and Daniel alignment remain current.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md) and [Landing Page Builder](landing-page-builder.md).