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

Asset preparation is part of the crawler scope, while the actual S3 upload remains a later controlled phase once the storage setup is confirmed.

For every relevant image, SVG or other asset, the crawler should:

- capture/download the file
- retain the original AEM URL
- assign a stable technical asset ID
- store a content hash for unique identification and deduplication
- retain an existing ALT text when available
- automatically generate a suitable ALT text from image and page context when it is missing; only ambiguous cases should be flagged for manual review
- record the information in a shared asset manifest

The intended mapping is:

`AEM URL -> Asset ID -> later S3 URL`

The asset ID is a migration identity, not the final delivery mechanism. Once S3 is available, the same manifest can be extended with the permanent delivery URL. Final migrated Contentful HTML should use the new persistent S3/delivery URL rather than the old AEM URL. The stable ID remains useful in the migration manifest for deduplication, traceability and URL assignment, but does not need to be the final image source in HTML.

Existing already-migrated/manual drafts can still contain temporary AEM/static URLs until they are rewritten. This is legacy transition state, not the intended final migration contract.

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
- Beatrice: coordination around workstudent support and Contentful platform topics
- Relevant platform/storage contacts: S3/CDN target, ownership, authentication and delivery URL
- B2B Marketing / Ulrike: strategic URL assessment and operational migration support
- SEO: routing and URL strategy

Mitch is not part of Contentful Migration and should not be suggested for migration work.

## Risks and Open Questions

- Persistent S3/CDN storage and delivery details are not yet finalized.
- The actual S3 upload phase should remain separate from the default crawl until storage/authentication rules are confirmed.
- The new GPT Migration Mode passes local tests but still needs real Custom GPT acceptance, including Crawl Rebuild and placeholder cases.
- 14 REVIEW/BLOCKED dynamic gallery references remain unresolved in the Handbook migration.
- Existing migrated drafts with AEM/static URLs still need later controlled URL rewriting before final AEM-independent delivery.
- The B2B contact form remains a key dependency for broader directory migration, although missing-form pages can now be represented as partial migrations rather than silently failing.
- Some legacy source areas still need scope/canonical decisions before migration.
- The Migration Crawler must be proven on a real AEM subset before it can be treated as the standard intake path.

## Next Steps

1. Apply and acceptance-test the updated GPT Migration Mode in the live Custom GPT, including Locked Import, normal Crawl Rebuild, placeholder and multi-page cases.
2. Hand the bilingual Scout Wiki `Migration Crawler – Briefing` to the working student and use it to scope the crawler MVP.
3. Reuse the strongest existing crawl components where practical and build one repeatable Codex-run crawler workflow.
4. Validate the crawler on a small real AEM area before scaling to larger URL sets.
5. Incorporate the confirmed S3/storage setup into the asset manifest and add a separate upload/mapping phase when ready.
6. Continue Handbook QA/handoff and resolve or explicitly accept remaining gallery references before publish readiness.
7. Continue strategic B2B URL selection and `/lp` review rather than migrating the full inventory blindly.

## Last Confirmed

2026-09-17: The LP Builder's local GPT package now contains a unified `migration-mode.md` replacing `source-duplicate-mode.md`. The two cases are `LOCKED_IMPORT` for exact supplied HTML and `CRAWL_REBUILD` for one or more crawler-driven page rebuilds. Unsupported source areas use a migration-only `callout--base` placeholder with stable migration markers, and every page reports a clear migration status/gaps. The OpenAPI SSOT is unchanged and local package/runtime tests pass 50/50. Live Custom GPT acceptance remains the next validation step. The reusable Migration Crawler direction and bilingual working-student briefing remain the planned source-intake layer, with assets prepared through the AEM URL -> Asset ID -> later S3 URL mapping.