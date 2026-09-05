# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch `/tipps` area remains the first end-to-end pilot. Source preparation, asset identity, package-level asset resolution, storage handoff and GPT batch orchestration are materially validated.

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

The current GPT rule set is simplified and stable enough for throughput. Full association-proof requirements and `COMPOSITION_REVIEW_REQUIRED` as a generic pre-mutation blocker were removed/relaxed. Source fidelity, REVIEW-asset protection and draft-only behavior remain binding.

The repeated shared-media grouping issue has been patched and visually confirmed on `031-meine-kundendaten`. A follow-up cleanup of six representative detail drafts confirmed the composition baseline. `006-anwender-handbuch` is the Handbook hub/start page and is explicitly excluded from automated detail-page migration and cleanup batches.

A first new-page Batch 1 (`005`, `008`, `009`, `014`, `017`, `019`) exposed a separate asset-delivery issue: five pages omitted images because historical AEM URLs returned 404. Codex has now resolved the Handbook packages against the central asset manifest. All 56 detail-page `content-assets.json` packages carry `migration_asset_resolution`; SAFE assets use validated draft-time `render_url` references, while REVIEW assets remain blocked. This unblocks image rendering for READY drafts without pretending the final CDN/storage step is complete.

## Active GPT Package

The current GPT package covers:

- `gpt-instructions-v0.1.md`
- `b2b-handbook-composition.md`
- `module-contracts.md`
- `component-library.html`

`component-library.html` had previously changed because the technical reference for `teaser-split-image-right` still contained `lpb-content--center-y`; that centering behavior was removed so the split module is consistently top-aligned. The later shared-media patch did not require a further component-library change.

### Binding Handbook Layout Rules

- Preserve source text, links, order and known asset associations; do not invent missing content.
- Use the most specific appropriate ACTIVE module when the source pattern is clear.
- Normal non-sequential text + one associated screenshot/image uses `teaser-split-image-right` where appropriate.
- `teaser-split-image-right` is top-aligned on Desktop/Lap: text starts at the top of the module and aligns with the top of the media; no vertical centering.
- Teasers are grouped by shared content/media relationship, not by individual text-block boundaries. If multiple consecutive text blocks, headings, paragraphs, lists or numbered explanations all refer to the same screenshot/media, they stay together in the same left teaser column while that media is rendered once on the right. A new teaser begins only when the semantic section or associated media changes.
- Explicit numbered guide/step content uses `handbook-step-media` with visible circular number treatment rather than plain `(n)` text. Where several numbered explanations share one common screenshot, keep the related numbered content grouped with that shared media.
- Numbered circular steps in one sequence do **not** use divider lines between individual steps.
- Horizontal dividers mark section boundaries, not steps.
- If a new section has a section headline, the divider appears **above** that headline.
- For repeated non-numbered text+image sections, use one divider between sections.
- Avoid duplicate headings, duplicate media and invented CTAs/navigation.
- Bridge stylesheet remains exactly once at the beginning of newly created/fully recomposed `htmlSource` until frontend-level loading exists.
- Contentful remains draft-first; never publish without explicit approval.
- REVIEW assets must not be guessed or silently substituted.
- `006-anwender-handbuch` is a hub/start-page exception and must be ignored by automated detail-page migration/cleanup prompts unless explicitly requested as a hub task.

### Best-effort QA Behavior

Smaller composition ambiguity should no longer stop the whole page when a safe, source-backed draft can still be created.

Use QA warnings instead, including:

- `MEDIA_ASSOCIATION_QA_REQUIRED`
- `MODULE_CHOICE_QA_REQUIRED`
- `SECTION_BOUNDARY_QA_REQUIRED`
- `ALT_REVIEW_REQUIRED`

Only stop a page when proceeding would require invented content, a REVIEW asset, a clearly unsupported association or an unsafe Contentful mutation.

## Draft-first QA Workflow

1. Load one or more READY detail-page migration packages into the Custom GPT; exclude `006-anwender-handbuch` by default.
2. GPT builds or updates all pages in the batch sequentially as unpublished Contentful drafts.
3. SAFE package assets should use the resolved draft-time `render_url`; REVIEW assets remain `BLOCKED_DO_NOT_RENDER`.
4. GPT follows the maintained module/layout rules and produces the best supported composition from the available source data.
5. Ambiguities are surfaced as QA warnings instead of blocking the whole page where safe drafting is possible.
6. Dominik visually compares each Preview against the current live source page and gives page-specific corrections where needed.
7. Only repeated corrections that clearly apply across multiple pages are promoted back into reusable GPT Knowledge/Instructions via Codex.
8. Publish readiness remains a later gate covering content, ALT text, assets, links and final visual QA.

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

## Asset Migration Status

The central manifest covers 210 unique normalized source URLs from 221 references.

- 100 SAFE source identities cover 105 page references.
- They resolve to 87 unique physical blobs with deduplication across source identities.
- All SAFE references now have package-level draft-time `render_url` resolution validated for migration use.
- 110 REVIEW source identities cover 116 references and remain `BLOCKED_DO_NOT_RENDER`.
- 94 assets are historical 404-only source URLs; two additional conflict assets include a historical 404 observation.
- `target_url` remains empty until a real storage/CDN target exists and post-upload verification passes.
- 56 detail-page `content-assets.json` packages now include `migration_asset_resolution`.

The package-level resolver is implemented in `scripts/resolve_b2b_handbook_package_assets.rb`, with aggregate reporting in `migration/page-asset-resolution-report.json`. This is sufficient for READY draft rendering now; durable AEM-independent delivery still requires upload of the 87 verified blobs and later `target_url` promotion.

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
- `006-anwender-handbuch` is the Handbook hub/start page and is excluded from normal detail-page migration and cleanup batches.
- Source content/order must be preserved; do not invent missing content or associations.
- Contentful remains draft-first.
- REVIEW assets must never be silently repaired, guessed or promoted.
- SAFE assets may use validated package-level `render_url` values for draft migration before final storage/CDN promotion.
- Final `target_url` promotion remains a separate storage gate and is not required to continue READY draft migration.
- Split teasers are top-aligned.
- All content that clearly refers to one shared media item belongs in the same teaser/media group.
- Circular numbered steps are not separated by horizontal divider lines.
- Section dividers go above section headlines or between independent non-numbered text+image sections.
- Every batch report exposes both Preview URL and current live source URL for fast comparison.

## Risks and Open Questions

- Individual pages will still require manual layout/composition corrections; this is accepted for the current migration volume.
- Informative screenshots without verified source alt text remain `ALT_REVIEW_REQUIRED` before publish readiness.
- REVIEW assets remain excluded until explicitly resolved.
- Draft-time `render_url` values are not the final AEM-independent delivery solution.
- Persistent image-storage target, ownership, authentication, delivery URL and platform policies remain open.
- Bridge CSS is still page-linked rather than centrally loaded.

## Next Steps

1. Re-run Batch 1 (`005`, `008`, `009`, `014`, `017`, `019`) against the existing drafts using the updated packages so the five previously omitted SAFE images can be rendered.
2. Visually verify the repaired Batch 1 previews.
3. Continue the remaining READY detail pages in GPT batches; exclude `006-anwender-handbuch`.
4. Promote only genuinely repeated QA corrections into shared GPT rules via Codex.
5. Keep REVIEW/source-blocked pages in their separate remediation track.
6. Keep all migrated pages unpublished until separate content/ALT/final visual QA approval.
7. Continue storage/platform alignment with Peter in parallel; later upload the 87 verified blobs and promote `target_url` after verification.

## Last Confirmed

2026-09-05: Codex resolved the Handbook asset packages against the central manifest. All 56 detail-page `content-assets.json` packages now carry `migration_asset_resolution`. The 100 SAFE source identities / 105 references have validated draft-time `render_url` values, while 110 REVIEW identities / 116 references remain blocked. READY draft migration can therefore continue with images before final CDN/storage rollout. The immediate next action is to rerun Batch 1 against its existing drafts to restore the five images previously omitted because historical AEM URLs returned 404.