# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch `/tipps` area remains the first end-to-end pilot. Source preparation, asset identity, storage handoff and GPT batch orchestration are materially validated.

Execution layer:

- 57 migration-ready pages
- 12 redirects
- 1 missing source
- 25 READY
- 30 primarily `BLOCKED_REVIEW_ASSET`
- 2 `BLOCKED_SOURCE`
- 0 genuine `MODULE_GAP`

The first representative GPT batch proved that multiple READY pages can be created/updated as unpublished Contentful drafts in one job. Subsequent QA work improved the module mapping and Handbook composition rules, but also showed diminishing returns from trying to make every source-to-module relationship deterministic before building the relatively small migration set.

The operating strategy is therefore now pragmatic: build migration drafts first, review them visually, correct pages individually where needed, and only generalize corrections into GPT rules when the same problem repeats across several pages. The source-association enrichment path is no longer a prerequisite for continuing the READY migration track.

The latest strict grammar that stopped ambiguous pages as `COMPOSITION_REVIEW_REQUIRED` should be simplified rather than kept as a hard pre-mutation gate. Useful module-selection and fidelity rules stay; heavy association proof requirements should not prevent a best-effort draft when the page can be built safely for manual QA.

## Target Composition Model

The active page model continues to use GPT Instructions plus Foundation/Runtime rules, `module-contracts.md`, `component-library.html` and `b2b-handbook-composition.md`. Fixed Hub/Guide HTML skeletons remain abandoned.

### Rules to keep

- Preserve source content, order, links and known asset associations; do not invent missing content.
- Use the most specific appropriate ACTIVE module rather than generic Foundation when a clear module pattern exists.
- Explicit numbered guide/step content uses `handbook-step-media` and the visible circular number treatment rather than plain `(n)` text.
- Normal non-sequential text + one associated image/screenshot uses `teaser-split-image-right` where appropriate.
- `teaser-split-image-right` content is top-aligned: text starts at the top of the module and aligns with the top of the media, not vertically centered.
- Numbered circular step sequences do not use horizontal divider lines between individual numbered steps.
- Section divider rule: when a new logical section has a section headline, the divider belongs above that headline. For repeated non-numbered text+image sections without numbered steps, use one divider between sections (effectively before the next section), matching the Handbook reference pattern.
- Avoid duplicate headings, duplicate media and invented CTAs/navigation.
- Bridge stylesheet remains exactly once at the beginning of newly created/fully recomposed `htmlSource` until frontend-level loading exists.
- Contentful remains draft-first; never publish without explicit approval.
- REVIEW assets must not be guessed or silently substituted.

### Rules to simplify / remove as blockers

- Do not require full source-block consumption metadata, association evidence and explicit start/end conditions before creating a draft.
- Do not require every media relationship to be provable before Contentful mutation when a sensible best-effort draft can be produced for manual QA.
- `COMPOSITION_REVIEW_REQUIRED` may be used as a warning/QA flag for uncertain areas, but it should not automatically prevent the whole draft from being created or updated unless proceeding would require inventing content, using a REVIEW asset, or creating a clearly unsupported association.
- Do not make source-association enrichment a gate for migrating the remaining READY pages.

## Draft-first QA Workflow

1. Load one or more READY migration packages into the Custom GPT.
2. GPT builds or updates all pages in the batch sequentially as unpublished Contentful drafts.
3. GPT follows the maintained module/layout rules and produces the best supported composition from the available source data.
4. Uncertain composition choices are called out in the batch report instead of blocking the entire page where safe drafting is still possible.
5. Dominik visually compares each Preview against the current live source page and gives page-specific corrections where needed.
6. Only repeated corrections that clearly apply across multiple pages are promoted back into reusable GPT Knowledge/Instructions via Codex.
7. Publish readiness remains a separate later gate covering content, ALT text, assets, links and final visual QA.

## Batch Report Contract

For every migrated/updated page, the GPT should report at least:

- page ID / title
- Contentful entry ID
- Preview URL
- current live source URL from the migration-ready package (the public/current AEM/live page URL for side-by-side comparison, not an internal authoring/AEL URL)
- modules used
- assets used
- warnings / manual QA notes
- published = false

The report should make Preview and current live source URL easy to open next to each other during manual QA.

## Asset Migration Status

The central manifest covers 210 unique normalized source URLs from 221 references.

- 100 SAFE source identities are byte-verified and promoted.
- They resolve to 87 unique physical blobs with 13 deduplicated source identities.
- 110 entries remain REVIEW and are excluded from automated processing.
- Promoted assets use full-file SHA-256 in `content_hash`, final `ast-sha256-*` IDs and consistent hash-based target keys.
- `target_url` remains empty until a real storage/CDN target exists and post-upload verification passes.

A deterministic storage upload plan exists for the 87 verified blobs. Storage/platform alignment remains a separate parallel track and does not block READY page drafting.

## Dominik's Role

Dominik owns migration planning, orchestration, rules and the migration-focused Landing Page Builder. He translates repeated QA findings into reusable migration rules without trying to eliminate every page-specific correction upfront or absorbing SEO, content, design or infrastructure ownership from the relevant specialists.

For persistent asset storage, Dominik defines migration requirements, key/URL contracts and integration expectations, while Peter / relevant platform contacts drive the actual S3/CDN infrastructure pilot and ongoing storage ownership.

## Confirmed Decisions

- The Anwenderhandbuch remains the first proof of the broader migration model.
- Batch migration remains the intended operating model.
- For the roughly 60-page migration scope, optimize for throughput and manual QA rather than a universal deterministic migration framework.
- Build drafts first, then correct individual pages.
- Generalize only repeated issues into GPT rules.
- Codex owns technical pipeline/contract changes; the Custom GPT owns semantic composition and Contentful draft creation.
- `migration/ready/` is the normal GPT migration input.
- Source content/order must be preserved; do not invent missing content or associations.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- The previous source-association enrichment idea is not a prerequisite for continuing READY-page migration.
- Heavy `COMPOSITION_REVIEW_REQUIRED` gating should be simplified so ambiguity becomes a QA warning where a safe best-effort draft is possible.
- Top-aligned split teasers, unseparated circular numbered steps, and consistent section-divider placement are reusable Handbook layout rules.
- Every batch report should expose both Preview URL and current live source URL for fast side-by-side QA.

## Risks and Open Questions

- Individual pages will still require manual layout/composition corrections; this is accepted for the current migration volume.
- Repeated manual corrections must still be recognized and promoted into shared rules to avoid unnecessary rework.
- Informative screenshots without verified source alt text remain `ALT REVIEW REQUIRED` before publish readiness.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Simplify the latest GPT Instructions/Handbook Knowledge: preserve useful mapping/fidelity rules, remove strict composition-blocking machinery, and add the confirmed top-alignment/divider/numbered-step rules plus source-URL reporting.
2. Load the simplified Instructions/Knowledge into `LP Builder - Contentful`.
3. Continue migrating the READY pages in batches as unpublished drafts.
4. Visually compare Preview URL and current live source URL page by page; correct pages individually where necessary.
5. Promote only genuinely repeated QA corrections into shared GPT rules via Codex.
6. Keep REVIEW/source-blocked pages in their separate remediation track.
7. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: the pilot strategy was deliberately simplified for the approximately 60-page migration scope. Rather than building a large deterministic source-association framework, the team will migrate READY pages as best-effort unpublished drafts, review and correct them individually, and only generalize repeated issues. The GPT rulebook should retain core source/module fidelity plus concrete Handbook layout rules: split-teaser content top-aligned, no dividers between circular numbered steps, dividers before section headlines or between repeated non-numbered text+image sections, and batch reporting with both Preview and current live source URLs.