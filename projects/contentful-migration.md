# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch / `tipps` area remains the first end-to-end pilot for the broader migration program. The goal is still to prove a repeatable flow from scope and source analysis through Claude Design, LP Builder generation, QA and Contentful publishing before generalizing the full migration system.

A major technical prerequisite is now substantially de-risked: Dominik's own Contentful-enabled Landing Page Builder duplicate works through OAuth, draft creation, preview, update, explicit publish and production URL. The migration work no longer needs to wait for a basic publish-capable Builder setup.

Dominik is now rebuilding this duplicate as a migration-focused Builder rather than extending the old product logic blindly. v0.1 is intentionally a controlled module composer. The complete existing module library remains available as reference, but the active development surface is currently limited to eight modules: `hero-split`, `teaser-2col`, `teaser-3col`, `benefits-2col`, `benefits-3col`, `accordion`, `callout--base` and `checkmark-list`.

This whitelist is not intended to represent the final Anwenderhandbuch design. Missing modules should be added later from Peter's real page-group analysis and target designs. The purpose of the reduced set is to establish a clean technical contract before migration-specific patterns expand again.

The most important new architecture finding is that static LP Builder `htmlSource` can reuse the globally loaded CoreCSS/COSMA system in `is24-cms-frontend`. Typography, spacing, responsive grid, standard buttons, basic utilities and COSMA icon-font classes have already been verified as directly usable HTML primitives. This gives the migration Builder a path to stay close to the existing Scout24 frontend system rather than carrying forward a separate LP-specific CSS world.

The next technical proof is a browser-level COSMA/CoreCSS HTML playground on `/dev-lp-builder-v01-test`, deliberately without the old LP Builder runtime CSS. Only after this test should the eight v0.1 modules be adapted and any small LP Builder-specific CSS bridge be introduced.

## Pilot Execution Principle

Optimize the first Anwenderhandbuch pilot for speed, proof and low dependency count rather than completeness.

The intended loop remains:

1. **Content / page scope — Ulrike**
   - Maintain the relevant migration inventory / sitemap view.
   - Coordinate page relevance, consolidation and content requirements with B2B Product Marketing.
   - Flag SEO/URL-sensitive cases for specialist alignment.

2. **Claude Design analysis and target patterns — Peter**
   - Analyze the selected AEM page group.
   - Capture real source content, links, images and structures.
   - Create target designs and reusable patterns that represent the real page variation.

3. **Migration Builder adaptation and generation — Dominik**
   - Translate approved target patterns into the migration-focused LP Builder.
   - Add only the modules/rules required for the page group.
   - Use structured source-page data as generation input.

4. **Joint QA and publishing**
   - Ulrike reviews content/business requirements.
   - Peter reviews design.
   - Dominik reviews technical behavior and migration flow.
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
- Keep the existing SEO/business Excel sources as fachlich source of truth where they already contain decisions; use the visual sitemap as an operational view over those decisions plus live/crawl status.
- Preserve a central migration-inventory concept for treatment, ownership, SEO/URL requirements, functionality, assets and QA status.
- Use Claude Design for page-group analysis, target design/pattern creation and structured source-data extraction.
- Use the migration-focused LP Builder to consume approved target patterns plus real source content.
- Keep the full old module library as reference, but use a small active v0.1 whitelist while the new rendering contract is established.
- Add new modules later from real migration requirements instead of trying to predict the full final library now.
- Use CoreCSS/COSMA first for static HTML. Own LP Builder CSS should only cover the real delta and should use COSMA tokens.
- Keep the old AEM LP Builder runtime backward-compatible but do not make it the styling basis of the new Contentful migration library.
- For Accordion, reuse the existing LPBuilder frontend interaction hook rather than recreating JavaScript in generated HTML.
- Use stable direct image URLs for the first pilot; persistent asset storage can be developed in parallel.
- Publish only after joint QA and explicit approval.

## Important Developments

- 2026-08-31: Dominik validated the full Contentful-enabled GPT flow through production publishing and took over his own migration-focused duplicate.
- 2026-08-31: The Builder was deliberately simplified to a controlled module-composer v0.1 model.
- 2026-08-31: Eight modules were selected as the active v0.1 whitelist while the full library remains intact as reference.
- 2026-09-01: Direct repository inspection of `is24-cms-frontend` confirmed global CoreCSS/COSMA availability and direct HTML use of core typography, spacing, grid, buttons and utilities.
- 2026-09-01: The next proof was defined as a COSMA/CoreCSS HTML playground before any new CSS bridge or module refactor.

## Risks and Open Questions

- Which module-specific layout/media/surface behaviors still require a thin custom CSS bridge after the playground test.
- Which additional modules Peter's Anwenderhandbuch target designs will require.
- Final SEO/URL preservation rules for the pilot and how Contentful slugs map to final public URLs.
- Final supported pattern for Salesforce-backed forms where pilot pages require them.
- Persistent image-storage ownership and delivery path for scale-out.
- One fresh-chat read/update test returned `LP Builder page was not found`; the Action lookup contract should later be clarified around Entry ID versus slug/path.

## Next Steps

1. Run the COSMA/CoreCSS HTML playground on the existing Contentful test page.
2. Classify the primitives into native CoreCSS, HTML-structure/hook-dependent and LPBuilder-CSS-bridge-required.
3. Adapt only the eight active v0.1 modules to that verified contract.
4. Continue the Anwenderhandbuch pilot coordination and use Peter's real designs to identify missing migration modules.
5. Align SEO/URL questions early enough that they do not block the first real publish loop.
6. Run the first real page group through joint QA and use the result as the proof point for broader scale-out.

## Last Confirmed

2026-09-01: the migration-focused Builder works through production publishing and is being rebuilt around a small v0.1 module set plus native CoreCSS/COSMA. The next implementation proof is the native HTML playground before the module library is refactored further.
