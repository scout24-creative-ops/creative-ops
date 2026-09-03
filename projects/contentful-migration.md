# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch / `tipps` area is the first end-to-end pilot for the broader migration program. The intended proof is now clearer: preserve source content accurately, create one coherent target design for the page family with Claude Design, translate the approved patterns into `LP Builder – Contentful`, and then scale generation across the remaining pages as drafts before QA and explicit publishing.

The technical LP Builder prerequisite is substantially de-risked. Dominik's Contentful-enabled duplicate works through OAuth, draft creation, preview, update, explicit publish and production URL. The Builder has also grown well beyond the original eight-module development whitelist: 23 current ACTIVE module contracts have been validated in Contentful, with known runtime/frontend gaps isolated rather than blocking the static module catalogue.

The migration source-crawl is now also proven. Alessandra's migration workbook was filtered to all URLs under `/anbieten/gewerbliche-anbieter/tipps/` except entries explicitly marked `delete` or already redirected. This produced 70 unique source URLs. A reusable HTTP/HTML crawler processed the set and produced structured source packages per page plus a central index and summary: 69 pages crawled successfully, one source (`sachkundenachweis.html`) returned HTTP 404, 12 redirects were discovered, 8 pages have extraction warnings, and no page showed evidence of missing client-side dynamic content. Across the crawl, 11,013 links and 493 assets were identified. Assets were indexed by URL but intentionally not downloaded or migrated.

The crawl output is intended as the content source of truth for migration: original text, links, asset URLs and content order should be preserved there, while Claude Design is responsible for the target design and the LP Builder is responsible for mapping the source content onto approved modules/patterns.

## Pilot Execution Principle

Optimize the first Anwenderhandbuch pilot for speed, proof and repeatability rather than building a universal migration system upfront.

The intended loop is:

1. **Source scope and crawl**
   - Use the existing migration workbook as the fachlich scope source.
   - Crawl the relevant source pages into stable per-page source packages.
   - Preserve original text, links, asset URLs and content order without rewriting.
   - Review redirects, 404s and extraction warnings before design work.

2. **Representative page selection and Claude Design**
   - Select roughly 5–6 representative Anwenderhandbuch pages that cover the meaningful structural/content variation.
   - Ask Claude Design to create one coherent design system capable of covering the page family.
   - Prefer existing LP Builder modules wherever they fit.
   - Identify genuinely missing reusable patterns as proposed new modules rather than inventing one-off replacements for every page.

3. **Migration Builder adaptation**
   - Translate approved new patterns into `LP Builder – Contentful`.
   - Keep CoreCSS/COSMA first and use the central bridge only for verified static-HTML gaps.
   - Add only the new modules/rules required by the approved target system.

4. **Design/mapping guide**
   - Produce a compact implementation guide describing which modules/variants to use, mapping rules, ordering, image behavior, spacing/composition rules and special cases.
   - Treat this guide plus the structured crawl packages as the execution input for the GPT.

5. **Scale-out generation**
   - Validate the finished system first on a small set of additional source pages.
   - Once mapping quality is stable, give the Builder larger batches of remaining pages and create Contentful drafts page by page.
   - Errors on one page should not block the whole batch.

6. **Joint QA and explicit publishing**
   - Content/business review by B2B Product Marketing / Ulrike.
   - Design review by Peter.
   - Technical/migration-flow review by Dominik.
   - Publish only after explicit QA/approval.

## Dominik's Role

Dominik owns migration planning, orchestration, rules and the migration-focused Landing Page Builder. He should translate specialist decisions into repeatable migration rules without absorbing SEO, content, design or infrastructure ownership from the relevant specialists.

## Key Stakeholders

- B2B Product Marketing as first migration target / fachlich owner
- Ulrike for content, pages and sitemap coordination
- Peter for Claude Design, target design/patterns and the small asset-storage pilot
- Beatrice and Core/Contentful stakeholders for platform coordination
- Mukhammadjon for the Contentful Action/renderer contract
- SEO for URL/slug, redirect and visibility decisions
- Daniel Herold / Matthias Brandstätter as senior platform/migration stakeholders
- Relevant platform contacts for persistent image storage/delivery

## Confirmed Direction and Decisions

- Use the Anwenderhandbuch as the first proof of the broader migration operating model.
- Do not solve the universal migration system before starting the pilot.
- Keep the existing SEO/business Excel sources as fachlich source of truth where they already contain decisions.
- Use the structured crawl packages as the content source of truth for migration execution; do not rely on the GPT to re-read and reinterpret dozens of live pages during batch generation.
- Keep crawling neutral: capture what exists, but do not map old AEM components directly to future LP Builder modules during extraction.
- Use Claude Design to derive one coherent target design from a representative subset of pages rather than redesigning every source page independently.
- Prefer existing LP Builder modules in the target design and add new reusable modules only where the representative designs expose real gaps.
- Require a compact design/mapping guide before larger batch generation.
- Use the migration-focused LP Builder to consume approved target patterns plus exact source content.
- Use CoreCSS/COSMA first for static HTML. Own LP Builder CSS should only cover the real delta and should use COSMA tokens.
- Keep the old AEM LP Builder runtime backward-compatible but do not make it the styling basis of the new Contentful migration library.
- For Accordion, reuse the existing LPBuilder frontend interaction hook rather than recreating JavaScript in generated HTML.
- Use stable direct image URLs for the first pilot; persistent asset storage can be developed in parallel.
- Publish only after joint QA and explicit approval.

## Important Developments

- 2026-08-31: Dominik validated the full Contentful-enabled GPT flow through production publishing and took over his own migration-focused duplicate.
- 2026-09-01: CoreCSS/COSMA-first rendering was validated as the technical baseline for static LP Builder HTML.
- 2026-09-03: The LP Builder module catalogue reached a broad working state with 23 ACTIVE contracts validated in Contentful; remaining JavaScript/frontend gaps are isolated and documented.
- 2026-09-03: The migration approach was clarified: Claude Design should derive a common Anwenderhandbuch design from 5–6 representative pages, the Builder should absorb any approved missing modules, and the remaining pages should then be migrated from structured source data using an explicit mapping guide.
- 2026-09-03: The first B2B `tipps` source crawl completed. Of 70 filtered URLs, 69 crawled successfully, one returned 404, 12 redirects were detected, 8 extraction warnings were recorded, no dynamic-content fallback was required, and 11,013 links plus 493 assets were indexed.

## Risks and Open Questions

- Which of the 12 redirects still belong in the effective pilot scope and whether they duplicate newer source pages.
- Whether the 8 extraction warnings hide any content that matters for migration; each page has an `extraction-report.md` for review.
- The 404 `sachkundenachweis.html` needs a scope/source decision rather than crawler work.
- Which 5–6 pages best represent the full Anwenderhandbuch variation for Claude Design.
- Which new reusable modules the target design will require beyond the current LP Builder catalogue.
- Final SEO/URL preservation rules for the pilot and how source URLs map to final Contentful URLs.
- Persistent image-storage ownership and delivery path for scale-out.
- LP Builder page-composition spacing is waiting on Mukhammadjon's frontend change/response so the GPT can control inter-module spacing through explicit composition rules instead of implicit section padding.

## Next Steps

1. Review the 12 discovered redirects and 8 extraction-warning pages and resolve the single 404 source case.
2. Define the effective Anwenderhandbuch subset within the broader crawled `tipps` set.
3. Select 5–6 representative pages for Claude Design based on structural/content variation, not traffic alone.
4. Give Claude Design the representative source packages plus the current LP Builder module catalogue and ask for one coherent target system and explicit missing-module proposals.
5. Review and implement only the approved new reusable modules in `LP Builder – Contentful`.
6. Produce the design/mapping guide and validate the system on a small set of additional pages before larger batch generation.
7. Run the remaining page set through draft generation, QA and explicit publishing.

## Last Confirmed

2026-09-03: the source-crawl layer for the B2B `tipps` scope is proven, the migration Builder has a broad validated module catalogue, and the next pilot phase is crawl QA/scope cleanup followed by representative-page selection for Claude Design.