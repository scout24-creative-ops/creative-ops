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

The operating strategy is deliberately pragmatic:

1. Build best-effort drafts in GPT batches.
2. Compare each Preview against the current live source page.
3. Correct individual pages where necessary.
4. Generalize only genuinely repeated issues into shared GPT rules.

The latest GPT rule set has been simplified accordingly. Full association-proof requirements and `COMPOSITION_REVIEW_REQUIRED` as a generic pre-mutation blocker were removed/relaxed. Source fidelity, REVIEW-asset protection and draft-only behavior remain binding.

The cleanup pass on the existing representative drafts exposed one additional repeated composition error: the GPT still tends to treat one text block as one teaser even when several consecutive text blocks or numbered explanations all refer to the same shared screenshot. On pages such as `031-meine-kundendaten`, this causes the image to sit beside only the first short text block while later related copy falls below the teaser, creating large empty space. This is now treated as a reusable Handbook rule rather than a page-specific fix.

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
- Teasers are grouped by shared content/media relationship, not by individual text-block boundaries. If multiple consecutive text blocks, headings, paragraphs, lists or numbered explanations all refer to the same screenshot/media, they stay together in the same left teaser column while that media is rendered once on the right. A new teaser begins only when the semantic section or associated media changes.
- Do not split a shared-media section merely because the source contains multiple paragraph or block nodes. The whole related text group should determine the teaser height so long screenshots do not create artificial whitespace beside only one short paragraph.
- Explicit numbered guide/step content uses `handbook-step-media` with the visible circular number treatment rather than plain `(n)` text. Where several numbered explanations share one common screenshot for the whole group, keep the related numbered content grouped with that shared media rather than assigning the media to only the first step and pushing the remaining text below it.
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
- All content that clearly refers to one shared media item belongs in the same teaser/media group; source paragraph boundaries alone must not split that group into separate teasers.
- Circular numbered steps are not separated by horizontal divider lines.
- Section dividers go above section headlines or between independent non-numbered text+image sections.
- Every batch report exposes both Preview URL and current live source URL for fast comparison.

## Risks and Open Questions

- Individual pages will still require manual layout/composition corrections; this is accepted for the current migration volume.
- Repeated manual corrections must be recognized and promoted into shared rules to avoid unnecessary rework.
- Shared screenshots that semantically cover several text blocks or steps must be grouped carefully so they are not attached only to the first block and leave artificial whitespace.
- Informative screenshots without verified source alt text remain `ALT_REVIEW_REQUIRED` before publish readiness.
- 32 pages touch REVIEW assets; two pages also have unresolved manifest references.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Patch the GPT Instructions/Handbook Knowledge with the shared-media grouping rule: all consecutive text/step content referring to the same screenshot stays in one teaser/media group; do not split solely on paragraph/block boundaries.
2. Re-run the affected existing drafts (especially `031-meine-kundendaten` and any other long-image cases) and visually verify that the left content group spans the related text while the image is rendered once on the right.
3. Continue migrating the remaining READY pages in batches as unpublished drafts.
4. Visually compare Preview URL and current live source URL page by page; correct pages individually where necessary.
5. Promote only genuinely repeated QA corrections into shared GPT rules via Codex.
6. Keep REVIEW/source-blocked pages in their separate remediation track.
7. Continue storage/platform alignment with Peter in parallel.

## Last Confirmed

2026-09-05: after the cleanup rerun, one repeated composition issue remained: the GPT can split several text blocks that all refer to one long screenshot into separate teaser/step regions, leaving the image beside only the first short block and producing excessive whitespace. This is now a reusable Handbook rule: group all consecutive content that clearly shares one media item into the same teaser/media section, render the media once, and begin a new teaser only when the semantic section or associated media changes. The pragmatic best-effort draft-first strategy remains unchanged.