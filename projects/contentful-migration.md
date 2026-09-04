# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch / `/tipps` area remains the first end-to-end pilot. The source side is materially prepared, the target-page operating model is validated, and the local asset identity model has now passed a controlled download proof. Before the full asset set is processed, the remaining exceptional URL/reachability cases need an explicit batch-handling rule.

The original crawl covered 70 unique source URLs. The current execution layer resolves to 57 migration-ready pages, 12 redirects and one missing source. Migration data is organized under one project root:

- `migration/source/` = raw crawl/debug data
- `migration/processed/` = technical intermediate packages
- `migration/ready/` = cleaned packages intended for GPT migration work
- `migration/assets/` = central asset manifest and later asset-migration working area

The previous three root-level migration folders were consolidated into this structure; active scripts and references were updated and no data loss was detected.

The target system has converged. A fixed Hub/Guide HTML-template experiment with slots, repeaters and page skeletons was abandoned because it made the GPT overinterpret templates. The active model is intentionally simpler:

1. global GPT Instructions define working behavior and template override rules;
2. Foundation and Runtime files define technical guardrails;
3. `module-contracts.md` defines what each ACTIVE module is allowed to do;
4. `component-library.html` provides valid module markup examples;
5. `b2b-handbook-composition.md` defines the default Handbook page composition only;
6. explicit user requests may alter the composition or add other ACTIVE modules, while module/Foundation/Runtime contracts remain binding.

The Handbook hub has been successfully built as an unpublished Contentful draft using the migration-specific `handbook-category-card` module. The detail-page pattern has been validated through the `Nachrichten-Manager` page and repeated isolated tests on `/dev-lp-builder-contentful-v01-test`.

The current `handbook-step-media` contract supports three valid variants:

- Number + Body + Media
- Heading + Body + Media
- Body + Media

For all three variants, Desktop/Lap always renders text left and media right; Palm renders text before media. Numbered steps no longer require an invented heading. Repeated sections use the verified Foundation separation `border-top padding-top-xl margin-top-xl`.

The default Handbook detail composition is now:

Foundation top spacing → H1 → Intro → source-based content modules → outlined `Zum Anwender-Handbuch` button → Foundation bottom spacing.

This default was successfully reproduced by the GPT from Knowledge/contracts alone, without relying on a separate visual template URL.

The Contentful frontend does not currently load the LP Builder bridge stylesheet automatically for these pages. For the pilot, the GPT Instructions therefore require the public bridge `<link>` exactly once at the beginning of newly created or fully recomposed `htmlSource`. This is sufficient to make the current migration modules render correctly without waiting for a frontend change.

### Asset migration preparation

The planned persistent asset target is still an S3/CDN setup, but provisioning is deliberately deferred. The migration is being prepared now so migrated pages are not permanently coupled to legacy AEM asset URLs.

The current asset manifest under `migration/assets/` is generated locally from existing migration data and does not require a new page crawl. It contains 210 unique normalized source-URL entries derived from 221 asset references across the 57 migration-ready packages; 11 repeated URL references are consolidated. Current manifest status is 102 reachable, 94 unreachable and 14 unknown. Twenty-three manifest entries have source alt text and 187 do not.

The manifest uses temporary global import IDs `src-<sha256(normalized-source-url)>`. Final physical asset IDs remain unset until files are actually downloaded and byte-hashed. The intended final identity is `ast-sha256-<full-file-sha256>`, with target keys based on the same hash rather than page slug or filename. This allows identical binary assets from different source URLs to be safely deduplicated later. Existing block `content_hash` values are explicitly not treated as file hashes.

`target_url` stays empty until the real S3/CDN target exists. The intended migration model is: source content references a stable manifest identity; today it resolves to the legacy source URL, later to the verified S3/CDN URL. Existing `migration/ready/` packages should eventually carry the global asset identity in addition to the original source URL so target-host changes do not require renewed content mapping.

The controlled asset proof tested three representative temporary import IDs and succeeded for all three downloads. The actual files resolved to PNG, JPEG and PNG, with dimensions 1189×1223, 640×427 and 241×210. Full-file SHA-256 calculation, final `ast-sha256-*` identity generation, target-key logic and deduplication all behaved as intended. The multiply referenced PNG only needs one physical downloaded file. The three binaries had distinct byte hashes.

The global `manifest.json` intentionally remains provisional: the proof did not write final asset IDs, file hashes or target URLs back into the full manifest. Processing the full asset estate is still gated by explicit handling for 14 `{width}` placeholder URLs, 94 currently unreachable entries and two consolidated URLs with conflicting historical reachability observations.

## Pilot Execution Principle

Optimize the first Anwenderhandbuch pilot for speed, proof and repeatability rather than building a universal migration system upfront.

The intended loop is now:

1. **Use migration-ready source packages**
   - Work from `migration/ready/`, not crawler internals.
   - Preserve source text, links, asset references and order.
   - Treat redirects, missing assets and uncertain associations as explicit gaps.

2. **Prepare assets through the central manifest**
   - Keep original source URLs and references traceable.
   - Do not invent target URLs before S3/CDN exists.
   - Introduce final asset identities only after byte-level validation.
   - Resolve exceptional URL/reachability cases before running the full asset batch.

3. **Build or refine reusable modules only when a real source pattern requires them**
   - Claude Design can remain a visual exploration/reference tool.
   - Codex owns technical module implementation and contract updates.
   - New modules enter GPT Knowledge through the maintained module contract and component library.

4. **Apply the default Handbook composition**
   - Use `b2b-handbook-composition.md` as the default page-level arrangement.
   - Do not treat it as a rigid template or HTML skeleton.
   - Explicit user requests may add or change ACTIVE modules.

5. **Generate Contentful drafts page by page**
   - Use the existing Contentful Action flow.
   - Keep pages unpublished until explicit approval.
   - Report source/asset/contract gaps instead of inventing content or structure.

6. **QA and scale out**
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
- On Handbook detail pages, Desktop/Lap text/media order is fixed to text left and media right; Palm text comes before media.
- Use `border-top padding-top-xl margin-top-xl` between repeated step/media sections.
- Default Handbook detail pages end with one outlined `Zum Anwender-Handbuch` button; there is no default top back-button.
- Do not add Callout, Accordion, Video or other modules merely because they exist; use them when the source or an explicit user request calls for them.
- Require the LP Builder bridge stylesheet exactly once at the beginning of newly created or fully recomposed pilot page `htmlSource` until frontend-level loading is available.
- Contentful remains draft-first; never publish without explicit instruction.
- Prepare persistent asset migration before S3 provisioning through one central manifest; do not bake future bucket/domain assumptions into page content.
- Keep original source URLs traceable while introducing a hosting-independent asset identity layer.
- Use normalized-source-URL IDs only as temporary import IDs. Final asset IDs and physical deduplication require full-file SHA-256 hashes.
- Never deduplicate assets by filename alone.
- The controlled asset proof confirmed the file-hash identity and target-key model; do not treat that as approval to batch-process unresolved exceptional URLs.
- No new page crawl is needed for asset preparation; targeted asset download/validation provides hashes, dimensions and verified file types.

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
- 2026-09-04: A central asset SSOT was added under `migration/assets/`, covering 210 unique normalized source URLs with stable temporary import IDs and full page/block traceability.
- 2026-09-04: S3/CDN provisioning was intentionally deferred and a three-asset controlled download proof successfully validated MIME detection, dimensions, full-file SHA-256, final asset identities, target-key logic and deduplication.
- 2026-09-04: Full asset processing remains gated until rules are defined for the 14 `{width}` URLs, 94 unreachable entries and two conflicting historical reachability cases.

## Risks and Open Questions

- 94 manifest assets are currently unreachable and need a classification/retry/source-resolution rule before batch processing.
- Fourteen AEM asset URLs contain `{width}` placeholders and need a verified resolution rule before download.
- Two consolidated asset URLs carry conflicting historical reachability observations and need deterministic reconciliation before the full batch.
- Many source assets lack verified alt text; draft migration can flag `ALT REVIEW REQUIRED`, but publish readiness requires editorial resolution.
- Persistent image-storage ownership, bucket/CDN configuration and final delivery domain remain open; no values should be invented before provisioning.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- The bridge is still page-linked rather than centrally loaded by the Contentful frontend.
- Broader batch behavior still needs proof across several real migration-ready detail pages, not only the validated reference cases.

## Next Steps

1. Define deterministic handling for the 14 `{width}` URLs, including how a concrete downloadable variant is selected and recorded without losing the original source reference.
2. Define the batch policy for the 94 unreachable entries and reconcile the two conflicting historical reachability cases, including retry/classification outcomes rather than silently dropping them.
3. Run the controlled asset batch only across the safe resolved/reachable set, computing verified MIME type, dimensions, byte size, full-file SHA-256, final `ast-sha256-*` IDs and target keys while preserving physical deduplication.
4. Prepare the global manifest for later S3/CDN upload only from verified batch results; keep `target_url` empty until the real target exists.
5. Then resume additional real migration-ready Handbook detail pages through the validated composition and module contracts.
6. For each mismatch, distinguish source/asset issues from genuinely missing reusable modules before changing the system.
7. Continue using Contentful drafts for validation and keep publishing explicit.
8. Once several pages migrate cleanly, define the scale-out batch/QA process for the remaining migration-ready set.

## Last Confirmed

2026-09-04: the controlled three-asset proof passed and confirmed the hash-based identity, target-key and deduplication model. Before processing the full asset set, the migration now needs explicit handling rules for `{width}` placeholders, unreachable assets and conflicting historical reachability observations; S3/CDN provisioning remains intentionally deferred.