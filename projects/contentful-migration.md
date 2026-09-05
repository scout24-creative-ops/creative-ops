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

The first representative GPT batch proved that multiple READY pages can be created/updated as unpublished Contentful drafts in one job. QA then showed that over-engineering deterministic source-to-module relationships created more friction than value for the roughly 60-page scope.

The operating strategy is now deliberately pragmatic:

1. Build best-effort drafts in GPT batches.
2. Compare each Preview against the current live source page.
3. Correct individual pages where necessary.
4. Generalize only genuinely repeated issues into shared GPT rules.

The latest GPT rule set has now been simplified accordingly. Full association-proof requirements and `COMPOSITION_REVIEW_REQUIRED` as a generic pre-mutation blocker were removed/relaxed. Source fidelity, REVIEW-asset protection and draft-only behavior remain binding.

## Active GPT Package

The current GPT package changes cover:

- `gpt-instructions-v0.1.md`
- `b2b-handbook-composition.md`
- `module-contracts.md`
- `component-library.html`

`component-library.html` changed because the technical reference for `teaser-split-image-right` still contained `lpb-content--center-y`; that centering behavior was removed so the split module is consistently top-aligned.

### Binding Handbook Layout Rules

- Preserve source text, links, order and known asset associations; do not invent missing content.
- Use the most specific appropriate ACTIVE module when the source pattern is clear.
- Normal non-sequential text + one associated screenshot/image uses `teaser-split-image-right` where appropriate.
- `teaser-split-image-right` is top-aligned on Desktop/Lap: text starts at the top of the module and aligns with the top of the media; no vertical centering.
- Explicit numbered guide/step content uses `handbook-step-media` with the visible circular number treatment rather than plain `(n)` text.
- Numbered circular steps in one sequence do **not** use divider lines between individual steps.
- Horizontal dividers mark section boundaries, not steps.
- If a new section has a section headline, the divider appears **above** that headline.
- For repeated non-numbered text+image sections, use one divider between sections, effectively before the next section/headline.
- Avoid duplicate headings, duplicate media and invented CTAs/navigation.
- Bridge stylesheet remains exactly once at the beginning of newly created/fully recomposed `htmlSource` until frontend-level loading exists.
- Contentful remains draft-first; never publish without explicit approval.
- REVIEW assets must not be guessed or silently substituted.

### Best-effort QA Behavior

Smaller composition ambiguity should no longer stop the whole page when a safe, source-backed draft can still be created.

Use QA warnings instead, including:

- `MEDIA_ASSOCIATION_QA_REQUIRED`
- `MODULE_CHOICE_QA_REQUIRED`
- `SECTION_BOUNDARY_QA_REQUIRED`
- `ALT_REVIEW_REQUIRED`

Only stop a page when proceeding would require invented content, a REVIEW asset, a clearly unsupported association or an unsafe Contentful mutation.

## Draft-first QA Workflow

1. Load one or more READY migration packages into the Custom GPT.
2. GPT builds or updates all pages in the batch sequentially as unpublished Contentful drafts.
3. GPT follows the maintained module/layout rules and produces the best supported composition from the available source data.
4. Ambiguities are surfaced as QA warnings instead of blocking the whole page where safe drafting is possible.
5. Dominik visually compares each Preview against the current live source page and gives page-specific corrections where needed.
6. Only repeated corrections that clearly apply across multiple pages are promoted back into reusable GPT Knowledge/Instructions via Codex.
7. Publish readiness remains a later gate covering content, ALT text, assets, links and final visual QA.

## Batch Report Contract

For every migrated/updated page, the GPT should report at least:

- page ID / title
- Contentful entry ID
- Preview URL
- current live source URL from the migration-ready package
- modules used
- QA warnings / manual QA notes
- `published = false`

The current live source URL must be the public/current AEM/live URL, not an internal authoring/AEL URL. If it cannot be resolved unambiguously, report `SOURCE_LIVE_URL_NOT_RESOLVED`.

Preferred report format:

| Page | Live Source | Contentful Preview | Status | QA |
|---|---|---|---|---|

This is intended for fast side-by-side visual QA.

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
- Batch migration is the intended operating model.
- For the roughly 60-page scope, optimize for throughput and manual QA rather than a universal deterministic migration framework.
- Build drafts first, then correct individual pages.
- Generalize only repeated issues into GPT rules.
- Codex owns technical pipeline/contract changes; the Custom GPT owns semantic composition and Contentful draft creation.
- `migration/ready/` is the normal GPT migration input.
- Source content/order must be preserved; do not invent missing content or associations.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- Source-association enrichment is not a prerequisite for continuing READY-page migration.
- `COMPOSITION_REVIEW_REQUIRED` is not a generic Draft blocker; smaller ambiguity becomes a QA warning where a safe best-effort draft is possible.
- Split teasers are top-aligned.
- Circular numbered steps are not separated by horizontal divider lines.
- Section dividers go above section headlines or between independent non-numbered text+image sections.
- Every batch report exposes both Preview URL and current live source URL for fast comparison.

## Risks and Open Questions

- Individual pages will still require manual layout/composition corrections; this is accepted for the current migration volume.
- Repeated manual corrections must be recognized and promoted into shared rules to avoid unnecessary rework.
- Informative screenshots without verified source alt text remain `ALT_REVIEW_REQUIRED` before publish readiness.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Load the updated `gpt-instructions-v0.1.md` into the Custom GPT Instructions field.
2. Replace Knowledge versions of `b2b-handbook-composition.md`, `module-contracts.md` and `component-library.html`.
3. Continue migrating the READY pages in batches as unpublished drafts.
4. Visually compare Preview URL and current live source URL page by page; correct pages individually where necessary.
5. Promote only genuinely repeated QA corrections into shared GPT rules via Codex.
6. Keep REVIEW/source-blocked pages in their separate remediation track.
7. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: the GPT rule set was simplified for the approximately 60-page migration scope. Best-effort draft creation is restored for smaller composition ambiguities while source fidelity, REVIEW-asset protection and draft-only behavior remain binding. Reusable Handbook rules now explicitly require top-aligned split teasers, no divider lines between circular numbered steps, dividers before section headlines or between repeated non-numbered text+image sections, and batch reporting with both Preview and current live source URLs.