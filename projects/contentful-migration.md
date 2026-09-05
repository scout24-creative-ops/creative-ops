# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch `/tipps` area remains the first end-to-end pilot. Source preparation, asset identity, storage handoff, GPT batch orchestration and the core Handbook composition grammar are materially validated.

The execution layer contains 57 migration-ready pages, 12 redirects and one missing source. Page readiness remains:

- 25 READY
- 30 primarily `BLOCKED_REVIEW_ASSET`
- 2 `BLOCKED_SOURCE`
- 0 genuine `MODULE_GAP`

Thirty-two pages touch at least one REVIEW asset. Pages `011` and `012` additionally contain seven asset references not currently resolved in the global manifest. The 25 READY pages use only promoted SAFE assets or no assets.

The first representative GPT batch proved multi-page orchestration and draft creation. A first mapping patch fixed obvious module-selection failures (`handbook-step-media` for explicit numbered sequences and `teaser-split-image-right` for appropriate non-sequential text+media). Manual Preview QA then showed that technically valid modules could still be composed into the wrong page structure.

A second Codex pass therefore hardened the Handbook grammar across:

- `gpt-package/gpt-instructions-v0.1.md`
- `gpt-package/b2b-handbook-composition.md`
- `gpt-package/module-contracts.md`

No new module was built, `component-library.html` did not need changes, `migration/ready` was untouched and Contentful was not mutated during that rule update.

The fresh four-page GPT QA rerun (`031`, `039`, `052`, `013`) now demonstrates that the stricter grammar fails safely instead of guessing:

- 4 input pages
- 0 drafts updated
- 4 `COMPOSITION_REVIEW_REQUIRED`
- 0 coverage failures
- 0 Contentful failures
- no new entries
- nothing published

The GPT could derive semantic groups, heading ownership and Context/Sequence boundaries, but it could not prove all required media associations from the current `migration/ready` data. This is now the primary quality bottleneck. The next step is not to loosen the GPT grammar; it is to enrich the source packages with deterministic, source-backed grouping/media-association metadata where the underlying DOM evidence supports it, while preserving explicit review states for genuinely ambiguous cases.

Scale-out of the remaining 17 READY pages remains paused until this source-association gate is resolved and the four representative pages can pass without bespoke prompts.

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
- Sequence-level media is consumed once for the sequence and never duplicated; if no supported/evidenced carrier exists, use `COMPOSITION_REVIEW_REQUIRED` rather than guessing.
- Module headings are used only when the heading clearly belongs to that semantic group. Section/sequence headings remain Foundation. Every heading is consumed exactly once.
- Legal/plain/list content remains Foundation only when no more specific ACTIVE pattern applies.
- `Specific ACTIVE Module beats generic Foundation` remains binding.

Each planned module needs explicit consumed source block IDs/range, start/end conditions, heading consumed, media consumed and links consumed. DOM adjacency alone is insufficient to establish a semantic association.

The Page Module Plan records semantic group, group type, heading ownership, sequence/step IDs where relevant, media-association type, target module/variant, consumed contents and the reason for the module choice.

Coverage must verify complete and unique block/heading/link/media consumption, source order, context/sequence boundaries and evidenced associations. Ambiguous composition becomes `COMPOSITION_REVIEW_REQUIRED` rather than a guessed but formally valid page.

### Source-association enrichment now required

The four-page rerun shows that the existing packages do not expose enough deterministic association information for all representative cases. The next pipeline pass should evaluate additive metadata such as:

- `group_id`
- `group_role` / semantic group type
- `sequence_id`
- `step_number`
- `association_id` or `associated_block_ids`
- `media_association_type` (`group-level`, `sequence-level`, `step-specific`)
- optional source column/layout information where reliably derivable
- confidence/evidence for every generated association

These fields must be derived from source-backed evidence such as shared AEM/Flexigrid ancestry, DOM containment, column structure, explicit block relationships or other deterministic source signals. They must not convert uncertain proximity into a fake association.

For cases where the original source cannot establish a reliable mapping, the package should remain review-required rather than force the GPT to infer intent.

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
7. Improve deterministic source metadata when the GPT lacks evidence; do not compensate by weakening safety rules.
8. Let the Custom GPT perform semantic composition and draft creation in batches; Codex owns pipeline engineering, contracts, diagnostics and reusable fixes.
9. Keep Contentful draft-first and never publish without explicit approval.
10. Convert repeated manual corrections into reusable grammar/data improvements instead of permanent page-specific instructions.

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
- Codex owns migration engineering and reusable rule/data fixes; the Custom GPT owns semantic composition and Contentful draft creation.
- `migration/ready/` is the normal GPT migration input.
- Source content/order must be preserved; do not invent missing content or associations.
- Fixed Hub/Guide page skeletons remain out of scope.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- Storage/platform work continues in parallel and must not block READY-page rule development.
- Grouping must happen before module selection.
- DOM adjacency alone is not proof of media or heading ownership.
- Ambiguous composition should stop as `COMPOSITION_REVIEW_REQUIRED` rather than produce a guessed layout.
- The four-page QA rerun confirms this fail-safe behavior and exposes source-level association metadata as the next bottleneck.
- Do not loosen the GPT rules to force green results.
- Do not scale the remaining READY pages until the representative pages pass with source-backed associations and without bespoke corrective prompts.

## Risks and Open Questions

- Existing `migration/ready` packages do not yet expose sufficient explicit media/group associations for all representative pages.
- The source DOM may not contain enough evidence for every association; those cases need explicit review rather than automation.
- Informative screenshots without verified source alt text remain `ALT REVIEW REQUIRED` and block publish readiness until editorial resolution.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Use Codex to inspect the four representative `migration/ready` packages together with their source/processed evidence and identify which semantic/media associations can be derived deterministically.
2. Define and implement the smallest additive association schema needed by the GPT, with explicit evidence/confidence and no guessed proximity mappings.
3. Regenerate or enrich the four representative packages only where deterministic evidence exists; preserve review states for unresolved associations.
4. Rerun the four-page GPT QA gate with the same strict grammar and no page-specific instructions.
5. Visually verify desktop/mobile grouping, module boundaries, heading ownership, media association, sequence boundaries and source order.
6. Only after those four pages pass, resume batch migration of the remaining 17 READY pages.
7. Keep all READY pages unpublished until separate content/ALT/final QA approval.
8. Keep REVIEW/source-blocked pages in a separate remediation queue.
9. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: the hardened Handbook grammar was loaded into the GPT and tested on `031`, `039`, `052` and `013`. All four were safely stopped as `COMPOSITION_REVIEW_REQUIRED`; no drafts were updated, no Contentful/coverage failures occurred, no entries were created and nothing was published. Semantic grouping and section boundaries are substantially more reliable, but not all media associations can be proven from the current migration-ready data. The next gate is deterministic source-association enrichment, not weaker GPT rules or further page-specific prompting.