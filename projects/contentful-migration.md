# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

`Contentful Migration` covers migration scope, page/source preparation, execution, QA/handoff, asset migration and migration-specific dependencies. The [Landing Page Builder](landing-page-builder.md) is the main authoring/execution tool and remains a separate maintained project.

## Migration Source References

- Alessandra's migration/domain overview: https://linear.app/scout24-se/document/domain-overview-is24-f097933f2f3d
- B2B `/anbieten` migration workbook: https://gs24.sharepoint.com/:x:/r/sites/CMSMigrationProject/Files/CMS%20Migration%20-%20URLs%20liste/Excel%20List%20for%20Migration/Immoscout24%20DE%20+%20AT/immobilienscout24.de_anbieten_CMS%20Migration_20250318.xlsx?d=w34b27b93faaf4ed1b4d9da2ff1e9c294&csf=1&web=1&e=i7ExTx
- Scout Wiki project directory: https://wiki.scout24.com/spaces/creative-operations/pages/56634/contentful-migration
- Scout Wiki B2B migration URL working list: https://wiki.scout24.com/spaces/creative-operations/pages/56636/b2b-migration-url-arbeitsliste
- Scout Wiki Migration Crawler briefing: https://wiki.scout24.com/spaces/creative-operations/pages/56763/migration-crawler-briefing

The B2B workbook remains the broad source inventory. The Wiki working list is intentionally narrower and contains the strategically selected migration scope.

## Current Status

The B2B Anwenderhandbuch remains the first end-to-end migration pilot and the page-migration phase is materially complete:

- 45 real target pages
- 44 detail pages + 1 hub
- 12 legacy duplicate source packages excluded
- all 45 Canonical/Unique targets migrated as unpublished drafts
- visual/content QA and selected optimization remain before publish readiness

The Gold membership/product-detail crawl is complete enough to serve as a working source inventory for 36 unique targets, but the run did not provide verified rendered DOM and full-page screenshots for those pages.

The large Product Comparison remains the first complex reusable Builder contract, and the Gewerbliche-Anbieter start page remains the main controlled-rebuild example.

A new reusable **Migration Crawler** workstream was defined on 2026-09-17. The goal is not another GPT Agent, Skill or dedicated UI. A working student should build a small reusable crawler/workspace that Codex can execute against a URL list or AEM directory and that produces a standardized migration package for the LP Builder plus prepared asset data for later S3 migration.

The LP Builder's local GPT package now also has a unified Migration Mode with exactly two execution cases: `LOCKED_IMPORT` for exact supplied Contentful-ready HTML and `CRAWL_REBUILD` for one or more pages built from crawler evidence. The local implementation passes 50/50 package/runtime tests; live Custom GPT acceptance is still required after the changed package is uploaded.

The S3/asset-delivery direction was materially clarified with John Ford on 2026-09-17. For the migration pilot, the preferred source is the original AEM asset rather than a crawler-downloaded rendition, because the rendered page may expose an already resized or optimized image. The intended technical path is original AEM asset -> S3 -> Scout image-scaler/delivery URL -> LP Builder/Contentful. Bea identified the existing `is24-cms` AWS account as a possible home for the pilot; John has been asked whether that account can be used and which permissions/setup he needs.

## Migration Crawler Direction

The crawler should be independent enough from the current LP Builder version that source evidence does not become stale whenever Builder modules or composition rules change. Codex uses the crawler to capture the source; the current LP Builder then interprets that structured output when rebuilding a page.

For each page the crawl should preserve, as exactly as practical:

- content order and page structure
- headings, text, lists and tables
- links and target URLs
- important interactions such as Accordion, Tabs or Carousel
- rendered DOM/page state
- screenshots for desktop, tablet and mobile
- errors, gaps or content that could not be captured reliably

The output should be structured rather than a single HTML dump so it can be reused by Codex and the LP Builder.

The historical crawl audit showed that useful building blocks already exist across earlier migration scripts and experiments, including HTTP discovery, source packages, browser captures, screenshots, asset download/hash logic and stable block concepts. However, there is no evidence of one complete standardized crawl of the full B2B directory. The existing 369-URL candidate list is scope input, not proof of a completed crawl. The new work should therefore consolidate and generalize useful existing pieces rather than start from zero or treat historical outputs as one finished pipeline.

## Asset Preparation and S3 Direction

Asset evidence remains part of the crawler scope, but the crawler should not assume that the image rendition visible on the rendered AEM page is the canonical source file. AEM may already have resized or optimized that rendition. Where possible, migration should resolve the page reference back to the original upstream AEM asset.

For every relevant image, SVG or other asset, the migration package should:

- retain the original AEM URL/path referenced by the page
- capture enough rendition/source evidence to identify the asset reliably
- map the reference back to the original AEM source asset when available
- assign a stable technical asset ID
- store a content hash for unique identification and deduplication
- retain an existing ALT text when available
- automatically generate a suitable ALT text from image and page context when it is missing; only ambiguous cases should be flagged for manual review
- record the information in a shared asset manifest

John's preferred migration setup is to export the original AEM assets into S3 while preserving the existing directory structure as far as practical, ideally from `/content` downward. That makes it easier to correlate old AEM paths found by the crawler with their original files in S3.

The intended mapping remains:

`AEM URL/path -> Asset ID -> original AEM file -> S3 object -> delivery/scaler URL`

The stable asset ID is a migration identity, not the final delivery mechanism. Final Contentful HTML should use the persistent delivery/scaler URL rather than the old AEM URL. Existing migrated/manual drafts may temporarily contain AEM/static URLs until they are rewritten; this remains a transition state, not the final migration contract.

John's existing image-scaler service can transform an S3-backed image into production-ready delivery variants, including size, quality and format controls. More advanced crop/viewport handling is technically possible but is deliberately outside the first MVP. The first success criterion is simpler: place an original asset in S3, obtain a stable production delivery URL through the scaler, and use that URL successfully in the LP Builder.

## Marketing Asset Library Direction

The S3 pilot is intentionally useful beyond the immediate Contentful migration. The longer-term direction is a Marketing Asset Library that acts as a central asset source for multiple Marketing tools rather than creating separate asset libraries per tool.

Potential consumers include:

- Contentful / Landing Page Builder
- Beefree
- Iterable
- ChatGPT agents and other AI-supported workflows
- additional Marketing tools where reusable image delivery is useful

The long-term goal is centralized storage/reuse plus consistent delivery and image-quality handling. Account ownership, cost ownership, permissions, governance and the final cross-tool operating model are not yet decided and should not block the migration MVP.

For the pilot, a new `marketing-assets` AWS account is not being requested yet. Bea confirmed that CMS already has an AWS account that may be usable:

- Alias: `is24-cms`
- AWS account ID: `902327926271`
- Head of Tech: Daniel Herold

John Ford has been asked whether this account works for the S3 bucket and image-scaler configuration, and what access/permissions would be required. Until that is confirmed, no new AWS-account request or Cost Centre decision is needed.

## Migration Execution Model

The user-facing GPT migration workflow is intentionally simple:

1. If complete Contentful-ready HTML is supplied, use `LOCKED_IMPORT` and transfer it without recomposition.
2. If crawler/migration files are supplied, use `CRAWL_REBUILD`; the GPT interprets each source page, chooses the best current LP Builder modules, preserves exact source copy/links/CTA labels where possible and creates a Draft.
3. If an individual source area cannot be represented safely, do not silently drop it and do not necessarily block the whole page. Insert the migration-only placeholder and report the gap explicitly.
4. Multiple URLs may be handled in one request. Similar pages may reuse a validated composition pattern, but each page keeps its own content, links, assets, slug check and result status.
5. Report every page as `DRAFT_READY`, `REVIEW_REQUIRED`, `PARTIAL` or `BLOCKED`, with Preview and open gaps. Never treat Draft readiness as publish approval.

The placeholder is based on the existing `callout--base` structure plus stable migration markers; it is not a new normal LP Builder module and introduces no new Bridge or Runtime dependency.

## Migration Operating Model

The migration strategy remains hybrid:

1. Select the migration scope strategically rather than migrating the full AEM inventory blindly.
2. Crawl/source-capture pages reproducibly.
3. Rebuild standard/reusable structures with the current LP Builder.
4. Use exact Locked Import when complete Contentful-ready HTML has already been prepared.
5. Use visible migration placeholders for unsupported source areas instead of silently losing them.
6. Compare previews against source evidence and fix page-specific issues where needed.
7. Promote only genuinely recurring structures into reusable Builder capabilities.
8. Hand visual/content QA to the relevant colleagues rather than requiring Dominik to polish every page personally.
9. Keep final asset delivery AEM-independent before publish readiness.

Operational migration work should increasingly be delegated while Dominik concentrates on Builder readiness, migration rules and quality guardrails.

## Current Asset Migration State

The Handbook asset identity pipeline already demonstrates the intended identity model:

- stable asset ID: `ast-sha256-<full-file-sha256>`
- full SHA-256 content hash
- deterministic target-key model
- current `render_url` for draft rendering
- `target_url` remains empty until a persistent storage/CDN target exists

Verified Handbook state remains:

- 207 SAFE/MIGRATE references have stable IDs
- 0 missing stable IDs among SAFE/MIGRATE references
- 0 manifest/hash inconsistencies
- 14 REVIEW/BLOCKED dynamic gallery references remain unresolved

This model should inform the reusable crawler, but the new crawler should not be tied only to the Handbook package format.

## Dominik's Role

Dominik owns migration planning, orchestration, migration rules and migration-focused preparation of the Landing Page Builder. His highest-leverage role is to define reusable migration contracts, requirements and quality guardrails rather than operate repeated crawls or page-by-page migration himself.

The working-student crawler is intended to move repeatable source capture and asset preparation into a reusable system that others can run with Codex.

## Stakeholders and Dependencies

- Mukhammadjon / Core Frontend: LP Builder platform and Contentful Action/renderer behavior
- Beatrice: Contentful/platform coordination and the link to the existing CMS AWS account
- John Ford / Platform Engineering: S3/scaler technical direction, permissions/setup support and image-delivery integration
- Daniel Herold: Head of Tech for the existing `is24-cms` AWS account
- B2B Marketing / Ulrike: strategic URL assessment and operational migration support
- SEO: routing and URL strategy

Mitch is not part of Contentful Migration and should not be suggested for migration work.

## Risks and Open Questions

- John has not yet confirmed whether the existing `is24-cms` AWS account is suitable for the migration S3 pilot or which permissions are required.
- The long-term AWS/account ownership and cost model for a cross-Marketing Asset Library is intentionally open; the migration MVP should not wait for that decision.
- The actual S3 upload phase should remain separate from the default crawl until the account, bucket and authentication rules are confirmed.
- The new GPT Migration Mode passes local tests but still needs real Custom GPT acceptance, including Crawl Rebuild and placeholder cases.
- 14 REVIEW/BLOCKED dynamic gallery references remain unresolved in the Handbook migration.
- Existing migrated drafts with AEM/static URLs still need later controlled URL rewriting before final AEM-independent delivery.
- The B2B contact form remains a key dependency for broader directory migration, although missing-form pages can now be represented as partial migrations rather than silently failing.
- Some legacy source areas still need scope/canonical decisions before migration.
- The Migration Crawler must be proven on a real AEM subset before it can be treated as the standard intake path.

## Next Steps

1. Wait for John's confirmation that `is24-cms` can host the S3 pilot and clarify required access/permissions.
2. If confirmed, create a minimal pilot bucket and let John configure the image scaler for it.
3. Run one end-to-end asset test: original AEM asset -> S3 -> scaler/delivery URL -> LP Builder/Contentful.
4. After the pilot works, plan the original-AEM export/mapping approach at migration scale while preserving source-path correlation.
5. Apply and acceptance-test the updated GPT Migration Mode in the live Custom GPT, including Locked Import, normal Crawl Rebuild, placeholder and multi-page cases.
6. Hand the bilingual Scout Wiki `Migration Crawler – Briefing` to the working student and use it to scope the crawler MVP.
7. Reuse the strongest existing crawl components where practical and validate the crawler on a small real AEM area before scaling.
8. Continue Handbook QA/handoff and strategic B2B URL selection.

## Last Confirmed

2026-09-17: John Ford confirmed that the existing Scout image-scaler approach is a strong technical fit for the migration and a possible future Marketing Asset Library. The recommended asset path is to preserve original AEM files in S3 rather than relying on potentially optimized crawl renditions, then map source references to stable S3/scaler delivery URLs. The MVP should stay small and defer advanced cropping and long-term cross-Marketing ownership. Bea identified the existing `is24-cms` AWS account (HoT Daniel Herold) as a possible pilot account; John has been asked to confirm whether it can be used and what permissions are required. The Migration Crawler and unified GPT Migration Mode remain the migration intake/execution layers.