# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch / `/tipps` area remains the first end-to-end pilot. The source pipeline, target-page composition model, asset identity layer and local storage/upload contract are now materially validated.

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

A deterministic storage upload plan has now also been generated for exactly the 87 unique verified blobs, with zero REVIEW assets included. Every local blob was re-hashed successfully and all target keys remain consistent and unique per physical blob. The accompanying storage/upload contract defines byte-verified MIME as `Content-Type`, requires post-upload SHA-256 validation and explicitly does not treat ETag as SHA-256. It proposes `public, max-age=31536000, immutable` for content-addressed assets, subject to Scout24/CDN alignment. Upload semantics are idempotent: a missing object may be uploaded, an existing object with identical bytes is treated as already present, and an existing object with different bytes is a hard failure and must not be overwritten.

The `target_url` promotion gate is also defined: upload success, object reachability, correct Content-Type and byte size, confirmed post-upload SHA-256 and a known final delivery base URL are required before any target URL may be written. Contentful, S3/CDN and the global manifest were not changed while preparing this contract.

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
   - Keep pages unpublished until explicit approval.
   - Report source/asset/contract gaps instead of inventing content or structure.

6. **QA and scale out**
   - Validate additional real pages against the current module/composition system.
   - Add only reusable missing modules exposed by those pages.
   - Once quality is stable, expand to larger migration batches.

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
- Use `handbook-step-media` for appropriate detail-page text/media sections under its three verified variants.
- Require the LP Builder bridge stylesheet exactly once at the beginning of newly created or fully recomposed pilot page `htmlSource` until frontend-level loading is available.
- Contentful remains draft-first; never publish without explicit instruction.
- Keep original source URLs traceable while using hosting-independent asset identities.
- Use full-file SHA-256 for final physical asset identity and deduplication; never deduplicate by filename.
- `content_hash` in the asset manifest represents the verified full-file SHA-256 for promoted assets; historical block hashes elsewhere must not be confused with this file hash.
- Multiple source/import identities may legitimately share one final `asset_id` and `target_key` when their bytes are identical.
- REVIEW assets must not be silently repaired, guessed or promoted.
- `{width}` source identities must not be mutated by inventing a width.
- `target_url` must remain empty until the real S3/CDN target exists and post-upload validation passes.
- Physical upload units are the 87 unique verified blobs keyed by existing hash-based `target_key`, not source URLs, import IDs, filenames or page slugs.
- Byte-verified MIME determines `Content-Type`; source URL/file extension guessing and ETag-as-SHA assumptions are not allowed.
- Existing storage objects with mismatching bytes must fail rather than be overwritten.
- The immutable cache proposal requires explicit platform/CDN alignment before adoption.
- Storage infrastructure remains a separate platform/ownership workstream; migration provides a validated upload and integration contract rather than independently provisioning AWS infrastructure.

## Important Developments

- 2026-08-31: Full Contentful-enabled GPT flow validated and migration-focused duplicate established.
- 2026-09-01: CoreCSS/COSMA-first rendering validated as the static HTML baseline.
- 2026-09-03: Broad LP Builder module catalogue and first B2B `/tipps` crawl completed.
- 2026-09-04: Source output refined into 57 migration-ready pages, 12 redirects and one missing source.
- 2026-09-04: Fixed template/skeleton approach replaced with contracts plus lightweight default composition.
- 2026-09-04: Handbook-specific modules and representative hub/detail drafts validated; active module catalogue reached 25 modules.
- 2026-09-04: Central asset SSOT created for 210 normalized source URLs.
- 2026-09-04: Three-asset proof validated MIME, dimensions, SHA-256 identities, target keys and deduplication.
- 2026-09-04: Full dry-run classified 100 assets SAFE and 110 REVIEW.
- 2026-09-04: SAFE-only real batch verified 100/100 source identities, producing 87 unique physical blobs with 13 deduplicated source identities.
- 2026-09-04: Verified SAFE metadata was promoted idempotently into the global manifest; 100 entries now carry final SHA-based identity and target keys while all 110 REVIEW entries and all `target_url` fields remain untouched.
- 2026-09-04: A deterministic storage upload plan and contract were prepared for all 87 unique verified blobs; local SHA integrity, target-key uniqueness, upload idempotency/failure semantics and the target_url promotion gate are defined without any AWS/S3/CDN mutation.

## Risks and Open Questions

- 110 assets remain REVIEW and require later source/content/retry handling.
- Fourteen AEM asset URLs contain unresolved `{width}` placeholders with no deterministic concrete width in the available source data.
- Ninety-four historically unreachable entries are dominated by `404 text/html` responses and require later source/retry review rather than bulk retries.
- The two conflicting historical reachability cases currently also return `404 text/html`.
- Many source assets lack verified alt text; publish readiness requires editorial resolution.
- Persistent image-storage ownership, target/bucket, environment, upload authentication and final delivery/CDN base URL remain open platform inputs.
- Platform-specific header/metadata, encryption, retention/lifecycle and cache-control requirements still need confirmation.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- The bridge is still page-linked rather than centrally loaded by the Contentful frontend.

## Next Steps

1. Align the prepared 87-blob storage/upload plan and contract with Peter / relevant platform contacts.
2. Confirm Storage Owner, storage target/bucket and environment, upload authentication, delivery/CDN base URL, required headers/metadata, encryption/retention requirements and the final cache-control rule.
3. Keep S3/CDN untouched and `target_url` empty until those platform inputs are confirmed.
4. Once the real storage/CDN target exists, run a small controlled real upload pilot using only verified unique blobs, verify bytes after upload and validate delivery behavior before scaling to all 87 blobs.
5. Promote `target_url` only after the defined post-upload gate passes; all source identities sharing an `asset_id` must resolve to the same delivery URL.
6. Keep REVIEW assets as a separate queue and do not let them block the verified SAFE path.
7. Resume additional real migration-ready Handbook detail pages through the validated composition and module contracts, using the manifest identities as the asset reference layer.
8. Continue using Contentful drafts for validation and keep publishing explicit.
9. Once several pages migrate cleanly, define the scale-out batch/QA process for the remaining migration-ready set.

## Last Confirmed

2026-09-04: the local asset pipeline is prepared through the storage handoff boundary. The manifest contains 100 promoted SAFE source identities representing 87 unique verified blobs; 110 REVIEW entries remain isolated. A deterministic 87-blob upload plan and storage contract now define Content-Type, integrity, idempotency, failure behavior, cache proposal and target_url promotion conditions. The next step is platform alignment with Peter / relevant storage owners before any real S3/CDN action.