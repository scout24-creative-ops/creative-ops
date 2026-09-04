# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch / `/tipps` area remains the first end-to-end pilot. The source pipeline, target-page composition model, asset identity layer and local storage/upload contract are materially validated, and page-level readiness has now been classified across the full 57-page migration-ready set.

The source execution layer contains 57 migration-ready pages, 12 redirects and one missing source. Migration data is organized under one project root:

- `migration/source/` = raw crawl/debug data
- `migration/processed/` = technical intermediate packages
- `migration/ready/` = cleaned packages intended for GPT migration work
- `migration/assets/` = central asset manifest and asset-migration working area

The target-page model uses global GPT Instructions plus Foundation/Runtime rules, `module-contracts.md`, `component-library.html` and the lightweight `b2b-handbook-composition.md`. Fixed Hub/Guide HTML skeletons were abandoned because they caused brittle GPT behavior. The Handbook hub and representative detail-page pattern have been validated as unpublished Contentful drafts. The active module catalogue contains 25 modules, including `handbook-category-card` and `handbook-step-media`.

The Contentful frontend still does not load the LP Builder bridge stylesheet automatically. For the pilot, newly created or fully recomposed pages therefore include the public bridge `<link>` exactly once at the start of `htmlSource`.

### Asset migration status

The central asset manifest covers 210 unique normalized source URLs derived from 221 references across the 57 migration-ready packages. Source identity remains based on stable temporary `src-*` import IDs; physical identity is based on full-file SHA-256.

A controlled three-asset proof first validated real MIME detection, dimensions, full-file SHA-256, `ast-sha256-*` identity generation, hash-based target keys and physical deduplication.

A full dry-run then classified the 210 manifest entries into:

- 100 SAFE
- 0 RESOLVABLE
- 110 REVIEW

The 14 `{width}` placeholder URLs remain REVIEW because no deterministic concrete width can be derived from the available source data. Both historical conflict URLs currently return `404 text/html`; the 94 historically unreachable entries are likewise dominated by `404 text/html`. REVIEW assets remain explicitly excluded from automated processing.

The SAFE-only real batch subsequently verified 100/100 source identities with zero failures. These resolve to 87 unique physical files, with 13 source identities deduplicated by identical full-file SHA-256. Verified MIME types are 75 PNG, 23 JPEG and 2 GIF. Stored blobs were re-hashed successfully.

The verified SAFE values have been promoted into the global `migration/assets/manifest.json` through an idempotent promotion process. Exactly 100 entries now contain verified file SHA-256 in `content_hash`, final `ast-sha256-<full-file-sha256>` asset identity, consistent hash-based `target_key` and verified file metadata according to the existing manifest schema. This produces 87 unique final `asset_id`s for 100 SAFE source identities. Historical source/reference data remains intact. All 110 REVIEW entries remain unchanged. `target_url` remains empty for all entries because no S3/CDN target has been provisioned.

A deterministic storage upload plan exists for exactly the 87 unique verified blobs, with zero REVIEW assets included. Every local blob was re-hashed successfully and all target keys remain consistent and unique per physical blob. The storage/upload contract defines byte-verified MIME as `Content-Type`, requires post-upload SHA-256 validation, explicitly does not treat ETag as SHA-256 and fails rather than overwrites when an existing object has different bytes. The proposed immutable cache rule remains subject to platform alignment.

### Page readiness status

All 57 migration-ready Handbook pages have now been classified against source completeness, asset readiness and existing ACTIVE module coverage.

Current result:

- 25 READY
- 30 primarily `BLOCKED_REVIEW_ASSET`
- 2 `BLOCKED_SOURCE`
- 0 genuine `MODULE_GAP`

Thirty-two pages touch at least one REVIEW asset. Two pages (`011` and `012`) have multiple issues: REVIEW assets plus seven asset references that cannot currently be resolved in the global manifest. The 25 READY pages use only promoted SAFE assets or no assets at all.

The classification found no true module gaps. The current source patterns can be represented with Foundation, `handbook-step-media`, `handbook-category-card` and the existing link/button primitives.

The recommended first real migration batch contains eight READY pages chosen to cover a broad set of source/content patterns while avoiding REVIEW assets and excluding already validated reference pages `007` and `042`:

- `001-meine-firmendaten`
- `004-anbieterkennzeichnung-und-online-streitbeilegung`
- `013-das-portal`
- `031-meine-kundendaten`
- `039-merkzettel-und-suchauftrag`
- `046-platzierungsassistent`
- `052-scoutreport`
- `006-anwender-handbuch`

The batch covers text-only/CTA content, legal lists, single and multiple screenshots, step sequences, reporting/list content and different detail-page densities.

## Pilot Execution Principle

Optimize the first Anwenderhandbuch pilot for speed, proof and repeatability rather than building a universal migration system upfront.

1. **Use migration-ready source packages**
   - Work from `migration/ready/`, not crawler internals.
   - Preserve source text, links, asset references and order.
   - Treat redirects, missing assets and uncertain associations as explicit gaps.

2. **Use the central asset manifest as the asset SSOT**
   - Preserve source identity and traceability.
   - Use verified full-file SHA-256 for physical identity and deduplication.
   - Keep REVIEW assets separate from verified SAFE assets.
   - Keep `target_url` empty until the real storage/CDN target exists.

3. **Build or refine reusable modules only when a real source pattern requires them**
   - Claude Design can remain a visual exploration/reference tool.
   - Codex owns technical module implementation and contract updates.
   - New modules enter GPT Knowledge through the maintained module contract and component library.

4. **Apply the default Handbook composition**
   - Use `b2b-handbook-composition.md` as the default page-level arrangement, not a rigid template.
   - Explicit user requests may add or change ACTIVE modules while Foundation/Runtime/module contracts remain binding.

5. **Generate Contentful drafts page by page**
   - Start with the eight-page representative READY batch.
   - Keep pages unpublished until explicit approval.
   - Report source/asset/contract gaps instead of inventing content or structure.

6. **QA and scale out**
   - Validate the first eight-page batch for source fidelity, module choice, asset mapping, links, responsive rendering and absence of invented content.
   - If the batch is stable, continue through the remaining READY pages before revisiting blocked REVIEW/source queues.
   - Add only genuinely reusable missing modules if future pages expose them.

## Dominik's Role

Dominik owns migration planning, orchestration, rules and the migration-focused Landing Page Builder. He translates source/design decisions into reusable migration rules and modules without absorbing SEO, content, design or infrastructure ownership from the relevant specialists.

For persistent asset storage, Dominik defines migration requirements, key/URL contracts and integration expectations, while Peter / relevant platform contacts drive the actual S3/CDN infrastructure pilot and ongoing storage ownership.

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
- `module-contracts.md`, Foundation and Runtime rules remain binding even when a user deviates from the default composition.
- Use `handbook-category-card` for the current Handbook hub pattern.
- Use `handbook-step-media` for appropriate detail-page text/media sections under its verified variants.
- Require the LP Builder bridge stylesheet exactly once at the beginning of newly created or fully recomposed pilot page `htmlSource` until frontend-level loading is available.
- Contentful remains draft-first; never publish without explicit instruction.
- Keep original source URLs traceable while using hosting-independent asset identities.
- Use full-file SHA-256 for final physical asset identity and deduplication; never deduplicate by filename.
- REVIEW assets must not be silently repaired, guessed or promoted.
- `target_url` must remain empty until the real S3/CDN target exists and post-upload validation passes.
- Storage infrastructure remains a separate platform/ownership workstream and must not block migration of READY pages.
- Page readiness is determined by source completeness, verified/promoted asset availability and existing ACTIVE module coverage.
- READY pages may proceed independently of pages blocked by REVIEW assets or source gaps.
- The first production-like migration proof should use the eight selected READY pages before scaling to all 25 READY pages.

## Important Developments

- 2026-08-31: Full Contentful-enabled GPT flow validated and migration-focused duplicate established.
- 2026-09-01: CoreCSS/COSMA-first rendering validated as the static HTML baseline.
- 2026-09-03: Broad LP Builder module catalogue and first B2B `/tipps` crawl completed.
- 2026-09-04: Source output refined into 57 migration-ready pages, 12 redirects and one missing source.
- 2026-09-04: Fixed template/skeleton approach replaced with contracts plus lightweight default composition.
- 2026-09-04: Handbook-specific modules and representative hub/detail drafts validated; active module catalogue reached 25 modules.
- 2026-09-04: Central asset SSOT created for 210 normalized source URLs.
- 2026-09-04: SAFE asset pipeline validated, promoted and prepared through the storage handoff boundary.
- 2026-09-04: Page-readiness classification completed across all 57 migration-ready pages: 25 READY, 30 primarily blocked by REVIEW assets, 2 blocked by source issues and no genuine module gaps.
- 2026-09-04: An eight-page representative READY batch was selected as the first real multi-page migration/QA proof.

## Risks and Open Questions

- 32 pages touch at least one REVIEW asset and cannot enter the current READY migration track unchanged.
- Pages `011` and `012` also contain seven asset references not currently resolved in the global manifest.
- Two pages remain blocked by source issues.
- 110 assets remain REVIEW and require later source/content/retry handling.
- Many source assets lack verified alt text; publish readiness requires editorial resolution.
- Persistent image-storage ownership, target/bucket, environment, upload authentication and final delivery/CDN base URL remain open platform inputs.
- Platform-specific header/metadata, encryption, retention/lifecycle and cache-control requirements still need confirmation.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- The bridge is still page-linked rather than centrally loaded by the Contentful frontend.

## Next Steps

1. Migrate the selected eight READY pages as unpublished Contentful drafts using the existing migration-ready source packages, composition rules and ACTIVE module contracts.
2. QA the eight-page batch for source fidelity, content/order preservation, module selection, asset mapping, links, responsive rendering and absence of invented content.
3. If the batch passes, migrate the remaining READY pages in larger batches until all 25 READY pages are covered.
4. Keep the 32 REVIEW-affected pages and two source-blocked pages out of the READY track until their blockers are deliberately resolved.
5. Continue storage/platform alignment with Peter in parallel; do not let missing final CDN URLs block page migration.
6. Keep Contentful draft-first and publish only through explicit approval.
7. After READY-page scale-out, define a separate remediation queue for REVIEW/source-blocked pages.

## Last Confirmed

2026-09-04: all 57 migration-ready Handbook pages are classified. Twenty-five are READY, 32 touch REVIEW assets, two have source blockers and no genuine module gaps were found. The next migration step is the first real eight-page READY batch as unpublished Contentful drafts, followed by QA before scaling to the remaining READY pages. Storage/platform alignment continues in parallel.