# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch `/tipps` area remains the first end-to-end pilot. Source preparation, the asset identity layer, the storage handoff contract and GPT batch orchestration are materially validated.

The execution layer contains 57 migration-ready pages, 12 redirects and one missing source. Page readiness remains:

- 25 READY
- 30 primarily `BLOCKED_REVIEW_ASSET`
- 2 `BLOCKED_SOURCE`
- 0 genuine `MODULE_GAP`

Thirty-two pages touch at least one REVIEW asset. Pages `011` and `012` additionally contain seven asset references not currently resolved in the global manifest. The 25 READY pages use only promoted SAFE assets or no assets.

The first representative GPT batch proved multi-page orchestration and draft creation. The first mapping patch fixed the obvious module-selection failures (`handbook-step-media` for explicit numbered sequences, `teaser-split-image-right` for appropriate non-sequential text+media) and the structural rerun passed, but manual Preview QA still showed that the GPT could form the wrong page structure even while using technically valid modules.

A second, composition-focused Codex pass has now hardened the Handbook grammar. It changed:

- `gpt-package/gpt-instructions-v0.1.md`
- `gpt-package/b2b-handbook-composition.md`
- `gpt-package/module-contracts.md`

No new module was built, `component-library.html` did not need changes, `migration/ready` was untouched and Contentful was not mutated during this rule update.

The confirmed composition root causes were weak rules for grouping, module boundaries, media association, heading ownership and sequence boundaries. The updated grammar now requires semantic grouping before module selection and explicitly supports Intro, Context/Text-Media, Step Sequence, List/Legal and CTA groups.

The next gate is to load the updated Instructions/Knowledge into the Custom GPT and rerun the four representative pages (`031`, `039`, `052`, `013`) without bespoke page-specific corrective prompts. Scale-out remains paused until that rerun is visually convincing.

## Target Composition Model

The active page model uses global GPT Instructions plus Foundation/Runtime rules, `module-contracts.md`, `component-library.html` and `b2b-handbook-composition.md`. Fixed Hub/Guide HTML skeletons remain abandoned.

### Binding composition grammar

The GPT must not select modules block-by-block immediately. The required order is:

1. Read source order and hierarchy.
2. Form semantic groups.
3. Determine heading ownership.
4. Determine media association.
5. Determine sequence/section boundaries.
6. Select the most specific valid ACTIVE module(s).
7. Build the Page Module Plan.
8. Run the coverage check.
9. Only then build `htmlSource` / mutate Contentful.

Current grouping rules:

- H1 + immediate intro without a more specific pattern -> Foundation Intro group.
- Context heading/body/media immediately before a numbered sequence stays a separate Context/Text-Media group; its screenshot must not be assigned to Step 1 merely because of DOM proximity.
- Normal non-sequential text + one associated media -> `teaser-split-image-right`.
- Explicit numbered sequence -> `handbook-step-media`; each step keeps its number semantics and sequence boundaries.
- Step-specific media is used only when the source association is evidenced.
- Sequence-level media is consumed once for the sequence and never duplicated; if no supported carrier exists, use `COMPOSITION_REVIEW_REQUIRED` rather than guessing.
- Module headings are used only when the heading clearly belongs to that semantic group. Section/sequence headings remain Foundation. Every heading is consumed exactly once.
- Legal/plain/list content remains Foundation only when no more specific ACTIVE pattern applies.
- `Specific ACTIVE Module beats generic Foundation` remains binding.

Each planned module now needs explicit consumed source block IDs/range, start/end conditions, heading consumed, media consumed and links consumed. DOM adjacency alone is insufficient to establish a semantic association.

The Page Module Plan now records semantic group, group type, heading ownership, sequence/step IDs where relevant, media-association type, target module/variant, consumed contents and the reason for the module choice.

Coverage must verify complete and unique block/heading/link/media consumption, source order, context/sequence boundaries and evidenced associations. Ambiguous composition becomes `COMPOSITION_REVIEW_REQUIRED` rather than a guessed but formally valid page.

### Known review case

For `052-scoutreport`, media `b0020` and `b0021` are not unambiguously attributable to a single step from the available source structure. The grammar therefore does not guess a step assignment; this is an explicit `COMPOSITION_REVIEW_REQUIRED` case unless the sequence-level carrier can represent the source faithfully.

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
3. Group source blocks semantically before choosing modules.
4. Use the most specific valid ACTIVE module; Foundation is not a convenience fallback.
5. Require a Page Module Plan and coverage check before Contentful mutation.
6. Prefer `COMPOSITION_REVIEW_REQUIRED` over guessed associations.
7. Let the Custom GPT perform semantic page composition and draft creation in batches; Codex owns pipeline engineering, contracts, diagnostics and reusable fixes.
8. Keep Contentful draft-first and never publish without explicit approval.
9. Convert repeated manual corrections into reusable grammar instead of permanent page-specific instructions.

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
- Batch migration remains the intended operating model; manual page-by-page correction is QA input, not the target workflow.
- Codex owns migration engineering and reusable rule fixes; the Custom GPT owns semantic composition and Contentful draft creation.
- `migration/ready/` is the normal GPT migration input.
- Source content/order must be preserved; do not invent missing content or associations.
- Fixed Hub/Guide page skeletons remain out of scope.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- Storage/platform work continues in parallel and must not block READY-page rule development.
- Grouping must happen before module selection.
- DOM adjacency alone is not proof of media or heading ownership.
- Ambiguous composition should stop as `COMPOSITION_REVIEW_REQUIRED` rather than produce a guessed layout.
- Do not scale the remaining READY pages until representative pages can be built correctly without bespoke corrective prompts.

## Risks and Open Questions

- The new composition grammar still needs real GPT/Preview validation on the representative pages.
- `052-scoutreport` exposes an explicit ambiguity around media `b0020` / `b0021` that should not be guessed.
- Informative screenshots without verified source alt text remain `ALT REVIEW REQUIRED` and block publish readiness until editorial resolution.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Update the Custom GPT Instructions field with `gpt-instructions-v0.1.md` and replace Knowledge versions of `b2b-handbook-composition.md` and `module-contracts.md`.
2. Start a fresh QA chat and rerun only `031-meine-kundendaten`, `039-merkzettel-und-suchauftrag`, `052-scoutreport` and `013-das-portal` against the existing drafts, with no bespoke page-specific structure instructions.
3. Require the GPT to surface `COMPOSITION_REVIEW_REQUIRED` instead of guessing where the new grammar cannot establish a safe composition.
4. Visually compare desktop/mobile previews for semantic grouping, module boundaries, heading ownership, media association, step sequence boundaries and source order.
5. If those four pages now render correctly without individual corrections, resume batch migration of the remaining 17 READY pages.
6. Keep all READY pages unpublished until separate content/ALT/final QA approval.
7. Keep REVIEW/source-blocked pages in a separate remediation queue.
8. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: Codex hardened the Handbook composition grammar across GPT Instructions, Handbook composition and module contracts. Grouping, boundaries, media association, heading ownership and sequence boundaries are now explicit; grouping must precede module selection, and ambiguous cases become `COMPOSITION_REVIEW_REQUIRED`. No new module, source-package change or Contentful mutation was made. The next gate is a four-page GPT QA rerun after loading the updated Instructions/Knowledge.