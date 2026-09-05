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

The first representative GPT batch covered eight READY pages and proved that the Custom GPT can process multiple migration-ready packages in one job, create or update the correct Contentful drafts and keep publishing explicit. A structural QA rerun after tightening the mapping layer also passed cleanly: numbered sequences were mapped to `handbook-step-media`, applicable non-sequential text+media to `teaser-split-image-right`, specific ACTIVE modules beat generic Foundation, no REVIEW assets were used, and no duplicate entries or publish actions occurred.

Manual Preview QA has now exposed the next quality boundary: the Handbook rulebook is still not precise enough to reproduce the intended page structure without repeated page-specific corrections. The remaining issue is broader than individual module recognition. The GPT still needs a stronger composition grammar for how source blocks are grouped into sections, how headings/intro/body/media belong together, where one module ends and the next begins, how sequence-level media should be placed, and when a page should use one split module versus several step modules or Foundation blocks.

Scale-out of the remaining 17 READY pages is therefore paused. The next step is to capture the concrete manual corrections from the representative Preview pages and convert them into reusable Handbook composition rules, then rerun the same representative pages before resuming batch migration.

## Target Composition Model

The active page model uses global GPT Instructions plus Foundation/Runtime rules, `module-contracts.md`, `component-library.html` and `b2b-handbook-composition.md`. Fixed Hub/Guide HTML skeletons remain abandoned.

Current binding mapping rules include:

- H1 + Intro -> Foundation.
- Non-sequential text + one associated media -> existing `teaser-split-image-right`.
- Explicit numbered sequence -> `handbook-step-media` with Number variant; the source marker is removed from plain body text and rendered through the module's dedicated number treatment.
- Number + Body without step-specific media remains `handbook-step-media`; lack of media is not a reason to fall back to Foundation.
- Heading + Body + Media within guide/step semantics -> `handbook-step-media` Heading variant.
- Body + Media within guide/step semantics -> `handbook-step-media` Body variant.
- Repeated Step Media sections use `border-top padding-top-xl margin-top-xl`.
- Legal/plain/list content uses Foundation only when no more specific ACTIVE module is justified.
- `Specific ACTIVE Module beats generic Foundation` is binding.
- Before Contentful mutation the GPT derives a Page Module Plan and runs a coverage check so every MIGRATE block and media reference is consumed exactly once without flattening source semantics.

These rules are necessary but not yet sufficient. The next revision must add a Handbook composition grammar that governs grouping and hierarchy, not only Source Pattern -> Module selection.

### Composition grammar to harden next

The reusable rulebook should explicitly define at least:

- how consecutive source blocks form one logical content section;
- when a heading, explanatory body and screenshot belong to the same module;
- when a screenshot is sequence-level context rather than step-specific media;
- when numbered statements form one guide sequence versus independent sections;
- when text+media should be one `teaser-split-image-right` instead of Foundation plus media or a guide module;
- when repeated screenshots require repeated split modules;
- when headings should remain outside a module versus become the module heading;
- how source hierarchy and DOM order determine module boundaries;
- how section rhythm/spacers are applied between logical groups;
- how the Page Module Plan should express groups/sections before selecting modules.

The goal is not a rigid page skeleton. It is a deterministic grammar that preserves source meaning while composing from the existing ACTIVE module vocabulary.

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
4. Group source blocks into logical Handbook sections before choosing the final module composition.
5. Require an internal Page Module Plan and coverage check before Contentful mutation.
6. Let the Custom GPT perform semantic page composition and draft creation in batches; Codex owns pipeline engineering, contracts, diagnostics and reusable fixes.
7. Keep Contentful draft-first and never publish without explicit approval.
8. Use representative structural and visual QA gates before scaling to all READY pages.
9. Convert repeated manual corrections into reusable composition rules rather than maintaining page-specific instructions.

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
- Batch migration is the intended execution model; do not return to manual page-by-page prompting as the operating model.
- Codex owns migration engineering and reusable contract fixes; the Custom GPT owns semantic composition and Contentful draft creation.
- `migration/ready/` is the normal GPT migration input.
- Source content/order must be preserved; do not invent missing content or associations.
- Fixed Hub/Guide page skeletons remain out of scope.
- `module-contracts.md`, Foundation, Runtime and Handbook composition rules remain binding.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- Storage/platform work continues in parallel and must not block READY-page rule development.
- The corrected Source Pattern -> Module layer passes structural QA, but visual/manual QA shows composition grouping still needs refinement.
- Do not scale the remaining READY pages until representative pages can be built correctly without page-specific corrective prompts.
- Manual corrections from QA should be treated as evidence for reusable rule changes, not as permanent page overrides.
- Additive source metadata such as `group_id`, `group_role`, `sequence_id`, `step_number`, association IDs and source layout may improve determinism if the composition grammar cannot be derived reliably from existing migration-ready data.

## Risks and Open Questions

- The Handbook composition grammar is still too permissive, leading to incorrect module grouping and page structure despite correct individual module recognition.
- Repeated page-specific corrective instructions would undermine the batch migration goal if converted into one-off exceptions instead of reusable rules.
- Informative screenshots without verified source alt text remain `ALT REVIEW REQUIRED` and block publish readiness until editorial resolution.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Counter, Card Carousel, Sticky Footer and Video still have runtime/frontend limitations outside the Handbook core flow.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Finish manual QA on the representative pages and record every correction as a Source Pattern / intended logical group / expected module composition, not as a page-specific instruction.
2. Consolidate these corrections into a stricter `b2b-handbook-composition.md` grammar, plus any necessary clarifications in `module-contracts.md`.
3. Decide whether existing migration-ready fields are sufficient to infer grouping; only add `group_id`, `sequence_id`, associations or layout metadata if the rules cannot be made reliable from current data.
4. Rerun the same representative pages in the GPT without bespoke page instructions and verify that the composition is now correct on desktop and mobile.
5. Only after that gate passes, migrate the remaining 17 READY pages in larger GPT batches.
6. Keep all READY pages unpublished until separate content/ALT/final QA approval.
7. Keep REVIEW/source-blocked pages in a separate remediation queue.
8. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: the GPT batch mechanism and individual Source Pattern -> Module mapping are working, but manual Preview QA shows that the Handbook composition rulebook still allows incorrect grouping and page structure. The remaining READY-page scale-out is paused. The next quality step is to translate the representative manual corrections into a reusable Handbook composition grammar and rerun the same pages without bespoke corrective prompts.