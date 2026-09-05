# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch `/tipps` area remains the first end-to-end pilot. Source preparation, the target composition model, the asset identity layer and the storage handoff contract are materially validated.

The execution layer contains 57 migration-ready pages, 12 redirects and one missing source. Page readiness is:

- 25 READY
- 30 primarily `BLOCKED_REVIEW_ASSET`
- 2 `BLOCKED_SOURCE`
- 0 genuine `MODULE_GAP`

Thirty-two pages touch at least one REVIEW asset. Pages `011` and `012` additionally contain seven asset references not currently resolved in the global manifest. The 25 READY pages use only promoted SAFE assets or no assets.

The first GPT-driven representative batch covered eight READY pages:

- `001-meine-firmendaten`
- `004-anbieterkennzeichnung-und-online-streitbeilegung`
- `013-das-portal`
- `031-meine-kundendaten`
- `039-merkzettel-und-suchauftrag`
- `046-platzierungsassistent`
- `052-scoutreport`
- `006-anwender-handbuch`

The GPT successfully processed the whole batch in one job and created Contentful drafts without publishing, proving the desired batch orchestration model. Visual QA did not pass the migration-quality gate: some numbered source structures were flattened into plain text, and text+media areas did not consistently use the intended existing split module.

A dedicated mapping-layer diagnosis confirmed that the migration-ready data is sufficient for the observed problems. The root cause is in the reusable Source Pattern -> Module mapping and module whitelist/contract logic, not in batch orchestration or missing source data.

A Knowledge/Contract patch has been prepared with updated versions of:

- `module-contracts.md`
- `b2b-handbook-composition.md`
- `component-library.html`
- supporting `QA-diagnosis.md`
- supporting Unified Diff

The original GPT Knowledge uploads are read-only in the Codex session, so this patch is not yet active in the Custom GPT. `migration/ready` and Contentful were not changed while preparing the patch.

## Target Composition Model

The active page model uses global GPT Instructions plus Foundation/Runtime rules, `module-contracts.md`, `component-library.html` and `b2b-handbook-composition.md`. Fixed Hub/Guide HTML skeletons remain abandoned.

The Handbook hub and representative detail pattern have already been validated as unpublished Contentful drafts. The active catalogue contains the existing Handbook modules including `handbook-category-card` and `handbook-step-media`.

The mapping patch adds or clarifies these binding rules once applied to active GPT Knowledge:

- H1 + Intro -> Foundation.
- Non-sequential text + one associated media -> existing `teaser-split-image-right`.
- Explicit numbered sequence -> `handbook-step-media` with Number variant; the source marker is removed from plain body text and rendered through the module's dedicated number treatment.
- Number + Body without step-specific media remains `handbook-step-media`; lack of media is not a reason to fall back to Foundation.
- Heading + Body + Media within guide/step semantics -> `handbook-step-media` Heading variant.
- Body + Media within guide/step semantics -> `handbook-step-media` Body variant.
- Repeated Step Media sections use `border-top padding-top-xl margin-top-xl`.
- Legal/plain/list content uses Foundation only when no more specific ACTIVE module is justified.
- `Specific ACTIVE Module beats generic Foundation` is binding.
- Before Contentful mutation the GPT must derive a Page Module Plan and run a coverage check so every MIGRATE block and media reference is consumed exactly once without flattening source semantics.

The patch does not add a new module. `teaser-split-image-right` already existed in the Component Library and is promoted into the active Handbook mapping for this pattern.

## Asset Migration Status

The central manifest covers 210 unique normalized source URLs from 221 references.

- 100 SAFE source identities are byte-verified and promoted.
- They resolve to 87 unique physical blobs with 13 deduplicated source identities.
- 110 entries remain REVIEW and are excluded from automated processing.
- Promoted assets use full-file SHA-256 in `content_hash`, final `ast-sha256-*` IDs and consistent hash-based target keys.
- `target_url` remains empty until a real storage/CDN target exists and post-upload verification passes.

A deterministic storage upload plan exists for the 87 verified blobs. The upload contract uses byte-verified MIME as `Content-Type`, requires post-upload SHA-256 verification, treats an existing same-byte object as idempotent, and treats an existing different-byte object as a hard failure without overwrite. The immutable cache proposal still requires platform alignment.

## Pilot Execution Principle

1. Work from `migration/ready/` and preserve source content, order, links and traceability.
2. Use the global asset manifest as SSOT; keep REVIEW assets separate and never guess them.
3. Use the most specific valid ACTIVE module for a recognized source pattern; Foundation is not a convenience fallback.
4. Require an internal Page Module Plan and coverage check before Contentful mutation.
5. Let the Custom GPT perform semantic page composition and draft creation in batches; Codex owns pipeline engineering, contracts, diagnostics and reusable fixes.
6. Keep Contentful draft-first and never publish without explicit approval.
7. Use representative QA batches before scaling to all READY pages.

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

## Confirmed Decisions

- The Anwenderhandbuch remains the first proof of the broader migration model.
- Batch migration is the intended execution model; do not return to manual page-by-page prompting.
- Codex owns migration engineering and reusable contract fixes; the Custom GPT owns semantic composition and Contentful draft creation.
- `migration/ready/` is the normal GPT migration input.
- Source content/order must be preserved; do not invent missing content or associations.
- Fixed Hub/Guide page skeletons remain out of scope.
- `module-contracts.md`, Foundation, Runtime and the Handbook composition rules remain binding.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- Storage/platform work continues in parallel and must not block READY page QA.
- The first eight-page batch proved orchestration but not composition fidelity; scale-out is paused until the mapping patch is active and the same batch passes the rerun.
- For future scale, additive source metadata such as `group_id`, `group_role`, `sequence_id`, `step_number`, association IDs and source layout may improve determinism, but these are optional and not required for the immediate QA rerun.

## Risks and Open Questions

- The prepared mapping patch is not yet active in the GPT Knowledge; the active Knowledge must be replaced manually before rerun.
- The first batch drafts currently reflect the older permissive mapping and should be updated rather than duplicated during QA rerun.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Many assets still lack verified alt text and require editorial review before publish readiness.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Apply the patched `module-contracts.md`, `b2b-handbook-composition.md` and `component-library.html` to the active `LP Builder - Contentful` GPT Knowledge.
2. Reuse the same eight migration-ready packages and rerun one batch instruction against the existing eight Contentful drafts; read existing entries first and update instead of creating duplicates.
3. QA specifically for numbered step treatment, `teaser-split-image-right` use, Source Pattern -> Module fidelity, media association, coverage, source order, links and absence of invented content.
4. If the rerun passes, migrate the remaining READY pages in larger GPT batches.
5. Keep REVIEW/source-blocked pages in a separate remediation queue.
6. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: the first GPT multi-page batch proved end-to-end batch orchestration, but composition fidelity failed QA. Codex diagnosed the reusable mapping layer and prepared a Knowledge/Contract patch: numbered source sequences map to `handbook-step-media`, normal non-sequential text+media maps to the existing `teaser-split-image-right`, specific modules beat Foundation, and a Page Module Plan plus coverage check is required before Contentful mutation. No new modules, source-package changes or Contentful changes were made during the diagnosis. The patch must now be applied to active GPT Knowledge before rerunning the same eight-page batch.