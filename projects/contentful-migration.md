# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch / `/tipps` area remains the first end-to-end pilot. The source side is now materially prepared and the target-page operating model has been validated far enough to move back into real migration tests.

The original crawl covered 70 unique source URLs. The current execution layer resolves to 57 migration-ready pages, 12 redirects and one missing source. Migration data is now organized under one project root:

- `migration/source/` = raw crawl/debug data
- `migration/processed/` = technical intermediate packages
- `migration/ready/` = cleaned packages intended for GPT migration work

The previous three root-level migration folders were consolidated into this structure; active scripts and references were updated and no data loss was detected.

The target system has also converged. A fixed Hub/Guide HTML-template experiment with slots, repeaters and page skeletons was abandoned because it made the GPT overinterpret templates. The active model is now intentionally simpler:

1. global GPT Instructions define working behavior and template override rules;
2. Foundation and Runtime files define technical guardrails;
3. `module-contracts.md` defines what each ACTIVE module is allowed to do;
4. `component-library.html` provides valid module markup examples;
5. `b2b-handbook-composition.md` defines the default Handbook page composition only;
6. explicit user requests may alter the composition or add other ACTIVE modules, while module/Foundation/Runtime contracts remain binding.

The Handbook hub has been successfully built as an unpublished Contentful draft using the migration-specific `handbook-category-card` module. The first detail-page pattern has also been validated through the `Nachrichten-Manager` page and repeated isolated tests on `/dev-lp-builder-contentful-v01-test`.

The current `handbook-step-media` contract supports three valid variants:

- Number + Body + Media
- Heading + Body + Media
- Body + Media

For all three variants, Desktop/Lap always renders text left and media right; Palm renders text before media. Numbered steps no longer require an invented heading. Repeated sections use the verified Foundation separation `border-top padding-top-xl margin-top-xl`.

The default Handbook detail composition is now:

Foundation top spacing → H1 → Intro → source-based content modules → outlined `Zum Anwender-Handbuch` button → Foundation bottom spacing.

This default was successfully reproduced by the GPT from Knowledge/contracts alone, without relying on a separate visual template URL.

The Contentful frontend does not currently load the LP Builder bridge stylesheet automatically for these pages. For the pilot, the GPT Instructions therefore require the public bridge `<link>` exactly once at the beginning of newly created or fully recomposed `htmlSource`. This is sufficient to make the current migration modules render correctly without waiting for a frontend change.

## Pilot Execution Principle

Optimize the first Anwenderhandbuch pilot for speed, proof and repeatability rather than building a universal migration system upfront.

The intended loop is now:

1. **Use migration-ready source packages**
   - Work from `migration/ready/`, not crawler internals.
   - Preserve source text, links, asset references and order.
   - Treat redirects, missing assets and uncertain associations as explicit gaps.

2. **Build or refine reusable modules only when a real source pattern requires them**
   - Claude Design can remain a visual exploration/reference tool.
   - Codex owns technical module implementation and contract updates.
   - New modules enter GPT Knowledge through the maintained module contract and component library.

3. **Apply the default Handbook composition**
   - Use `b2b-handbook-composition.md` as the default page-level arrangement.
   - Do not treat it as a rigid template or HTML skeleton.
   - Explicit user requests may add or change ACTIVE modules.

4. **Generate Contentful drafts page by page**
   - Use the existing Contentful Action flow.
   - Keep pages unpublished until explicit approval.
   - Report source/asset/contract gaps instead of inventing content or structure.

5. **QA and scale out**
   - Validate additional real pages against the current module/composition system.
   - Add only reusable missing modules exposed by those pages.
   - Once quality is stable, expand to larger migration batches.

## Dominik's Role

Dominik owns migration planning, orchestration, rules and the migration-focused Landing Page Builder. He translates source/design decisions into reusable migration rules and modules without absorbing SEO, content, design or infrastructure ownership from the relevant specialists.

## Key Stakeholders

- B2B Product Marketing as first migration target / fachlich owner
- Ulrike for content, pages and sitemap coordination
- Peter for visual design/reference work and asset-storage pilot
- Beatrice and Core/Contentful stakeholders for platform coordination
- Mukhammadjon for the Contentful Action/renderer contract
- SEO for URL/slug, redirect and visibility decisions
- Daniel Herold / Matthias Brandstätter as senior platform/migration stakeholders
- Relevant platform contacts for persistent image storage/delivery

## Confirmed Direction and Decisions

- Use the Anwenderhandbuch as the first proof of the broader migration operating model.
- Do not solve a universal migration system before proving the pilot.
- Use `migration/ready/` as the normal GPT migration input; keep raw and processed layers for technical traceability.
- Preserve source content and order; do not let the GPT invent missing content or silently reinterpret uncertain asset/text associations.
- Claude Design is a visual reference/exploration tool, not the technical source of module markup.
- Codex implements reusable modules and keeps contracts/libraries technically consistent.
- Do not reintroduce fixed Hub/Guide HTML templates, slots, repeaters or page skeletons.
- Template/composition files define defaults, not hard restrictions. Explicit user requests may alter the composition with ACTIVE modules.
- `module-contracts.md`, Foundation and Runtime rules remain binding even when a user deviates from the default composition.
- Use `handbook-category-card` for the current Handbook hub pattern.
- Use `handbook-step-media` for appropriate detail-page text/media sections under its three verified variants.
- On Handbook detail pages, Desktop/Lap text/media order is fixed to text left, media right; Palm text comes before media.
- Use `border-top padding-top-xl margin-top-xl` between repeated step/media sections.
- Default Handbook detail pages end with one outlined `Zum Anwender-Handbuch` button; there is no default top back-button.
- Do not add Callout, Accordion, Video or other modules merely because they exist; use them when the source or an explicit user request calls for them.
- Require the LP Builder bridge stylesheet exactly once at the beginning of newly created or fully recomposed pilot page `htmlSource` until frontend-level loading is available.
- Contentful remains draft-first; never publish without explicit instruction.
- Use existing reachable source asset URLs for the pilot; persistent asset storage can continue in parallel.

## Important Developments

- 2026-08-31: Dominik validated the full Contentful-enabled GPT flow through production publishing and took over his own migration-focused duplicate.
- 2026-09-01: CoreCSS/COSMA-first rendering was validated as the technical baseline for static LP Builder HTML.
- 2026-09-03: The LP Builder module catalogue reached a broad working state and the first B2B `/tipps` source crawl completed.
- 2026-09-04: Raw crawl output was refined into 57 migration-ready pages, 12 redirects and one missing source; migration folders were consolidated under `migration/source`, `migration/processed` and `migration/ready`.
- 2026-09-04: The fixed template/skeleton approach was abandoned in favor of contracts + a lightweight default composition model.
- 2026-09-04: `handbook-category-card` and `handbook-step-media` were implemented and validated, bringing the active module catalogue to 25 modules.
- 2026-09-04: The Handbook hub and a representative detail page were successfully validated as unpublished Contentful drafts.
- 2026-09-04: The default Handbook detail composition was reproduced successfully from GPT Knowledge without a separate visual template URL.
- 2026-09-04: The local LP Builder project was audited and historical template/inventory documents were moved out of the active GPT package.

## Risks and Open Questions

- Asset availability remains inconsistent across source packages; unreachable source assets must remain explicit `ASSET GAP`s.
- Many source assets lack verified alt text; draft migration can flag `ALT REVIEW REQUIRED`, but publish readiness requires editorial resolution.
- Persistent image-storage ownership and delivery path for scale-out remain open; this does not block the first pilot pages.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- The bridge is still page-linked rather than centrally loaded by the Contentful frontend.
- Broader batch behavior still needs proof across several real migration-ready detail pages, not only the validated reference cases.

## Next Steps

1. Run additional real migration-ready Handbook detail pages through the validated composition and module contracts.
2. For each mismatch, distinguish source-data issues from genuinely missing reusable modules before changing the system.
3. Add only reusable migration modules that are proven necessary by multiple pages or a clear source pattern.
4. Continue using Contentful drafts for validation and keep publishing explicit.
5. Once several pages migrate cleanly, define the scale-out batch/QA process for the remaining migration-ready set.
6. Resolve asset/alt-text and persistent-storage questions in parallel without blocking structural migration proof.

## Last Confirmed

2026-09-04: the source pipeline, module contract model and default Handbook hub/detail composition are all validated enough to resume real migration testing. The next proof is breadth: run more migration-ready detail pages through the same system and add only genuinely reusable missing modules.