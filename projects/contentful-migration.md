# Contentful Migration

## Purpose

Support the broader migration from AEM into the new Contentful setup through repeatable workflows and reusable tooling. The overall migration extends beyond the Marketing pages Dominik has worked on so far and includes additional areas outside his previous responsibility.

Within this repository, `Contentful Migration` tracks Dominik's contribution to that broader initiative: the Marketing migration foundation, Landing Page Builder support, reusable migration rules/tooling, and technical next-step alignment with the migration lead. Persistent Marketing asset storage and delivery are maintained separately in the [Marketing Asset Library](marketing-asset-library.md). The [Landing Page Builder](landing-page-builder.md) remains a separate maintained project and a key support capability for migration work.

## Migration Source References

- Alessandra's migration/domain overview: https://linear.app/scout24-se/document/domain-overview-is24-f097933f2f3d
- B2B `/anbieten` migration workbook: https://gs24.sharepoint.com/:x:/r/sites/CMSMigrationProject/Files/CMS%20Migration%20-%20URLs%20liste/Excel%20List%20for%20Migration/Immoscout24%20DE%20+%20AT/immobilienscout24.de_anbieten_CMS%20Migration_20250318.xlsx?d=w34b27b93faaf4ed1b4d9da2ff1e9c294&csf=1&web=1&e=i7ExTx
- Scout Wiki project directory: https://wiki.scout24.com/spaces/creative-operations/pages/56634/contentful-migration
- Scout Wiki B2B migration URL working list: https://wiki.scout24.com/spaces/creative-operations/pages/56636/b2b-migration-url-arbeitsliste
- Scout Wiki Migration Crawler briefing: https://wiki.scout24.com/spaces/creative-operations/pages/56763/migration-crawler-briefing

The B2B workbook remains the broad source inventory. The Wiki working list is intentionally narrower and contains the strategically selected migration scope.

## Current Status

- As of 2026-09-24, Viktoria Riffel owns broader Contentful Migration project management: overall progress, timeline, stakeholder coordination and escalation. Dominik supports rather than owning the overall migration.
- Beatrice Riedel owns engineering delivery for the migration: capacity, architecture, dependencies and execution. Viktoria and Dominik should work through Bea for engineering coordination rather than steering individual engineers themselves.
- Dominik's role is AI-powered migration support/tooling, including the Landing Page Builder, migration rules and reusable capabilities. The intention is to enable owning teams to migrate their own areas rather than making Viktoria or Dominik manually move and chase every page.
- News and Wissen must be scalable on Contentful, but migration should not block the News Lighthouse. If broader migration takes longer, News should still be able to launch through a workable Contentful setup.
- The broader migration scope includes additional areas beyond the Marketing scope Dominik has handled so far. Existing Marketing migration work remains relevant and should continue as a supported workstream rather than being stopped because of Dominik's organizational move.

The B2B Anwenderhandbuch remains the first end-to-end migration pilot and the page-migration phase is materially complete:

- 45 real target pages
- 44 detail pages + 1 hub
- 12 legacy duplicate source packages excluded
- all 45 Canonical/Unique targets migrated as unpublished drafts
- visual/content QA and selected optimization remain before publish readiness

The Gold membership/product-detail crawl is complete enough to serve as a working source inventory for 36 unique targets, but the run did not provide verified rendered DOM and full-page screenshots for those pages.

The large Product Comparison remains the first complex reusable Builder contract, and the Gewerbliche-Anbieter start page remains the main controlled-rebuild example.

A new reusable **Migration Crawler** workstream was defined on 2026-09-17. The goal is not another GPT Agent, Skill or dedicated UI. A working student should build a small reusable crawler/workspace that Codex can execute against a URL list or AEM directory and that produces a standardized migration package for the LP Builder plus prepared asset data for later persistent delivery.

The LP Builder's local GPT package now also has a unified Migration Mode with exactly two execution cases: `LOCKED_IMPORT` for exact supplied Contentful-ready HTML and `CRAWL_REBUILD` for one or more pages built from crawler evidence. The local implementation passes 50/50 package/runtime tests; live Custom GPT acceptance is still required after the changed package is uploaded.

The migration's persistent asset-delivery dependency is now tracked in the separate Marketing Asset Library project. John Ford confirmed on 2026-09-17 that the existing `is24-cms` AWS account is sufficient for the S3 pilot. He recommends creating the bucket through CloudFormation rather than manually in the AWS web interface and has asked whether Dominik has GitHub. Dominik confirmed GitHub access; implementation is paused until John provides the preferred setup path.

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

Stefan confirmed on 2026-09-18 that a bulk B2B asset crawler is feasible and created Linear ticket `LCMS-7518`. Its asset-capture path starts from a list of AEM page URLs, downloads all `img src` targets and optionally linked files from `a href` for configured document extensions, deduplicates them and preserves the AEM-discovered path. Stefan estimates roughly one to two days of implementation once capacity is available. He also clarified that most images are stored with the page and have no DAM renditions; for DAM-backed images, the crawler can derive the original URL from a rendition URL and the ticket was updated accordingly.

## Asset Preparation and Marketing Asset Library Dependency

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

The preferred migration setup is to export the original AEM assets into S3 while preserving the existing directory structure as far as practical, ideally from `/content` downward. That makes it easier to correlate old AEM paths found by the crawler with their original files in S3.

The intended mapping remains:

`AEM URL/path -> Asset ID -> original AEM file -> S3 object -> delivery/scaler URL`

The stable asset ID is a migration identity, not the final delivery mechanism. Final Contentful HTML should use the persistent delivery/scaler URL rather than the old AEM URL. Migration drafts may deliberately use a usable AEM/source URL while the persistent target does not yet exist. These temporary references should be tracked automatically through the shared asset manifest/mapping and later rewritten in bulk once S3/scaler URLs are available; page-by-page manual replacement is not the intended operating model.

The first migration-relevant success criterion for the Marketing Asset Library is simple: place an original asset in S3, obtain a stable production delivery URL through the Scout image scaler, and use that URL successfully in the LP Builder. The broader cross-Marketing storage, infrastructure and governance model belongs to the separate Marketing Asset Library project.

## Migration Execution Model

The user-facing GPT migration workflow is intentionally simple:

1. If complete Contentful-ready HTML is supplied, use `LOCKED_IMPORT` and transfer it without recomposition.
2. If crawler/migration files are supplied, use `CRAWL_REBUILD`; the GPT interprets each source page, chooses the best current LP Builder modules, preserves exact source copy/links/CTA labels where possible and creates a Draft.
3. If an individual source area is structurally representable, build the appropriate LP Builder module even when its final persistent asset URL is not ready. A usable AEM/source asset URL may be used temporarily in the Draft and reported as pending migration. Use the migration-only placeholder only when the asset is truly unavailable or the source area cannot be represented safely.
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

Operational migration work is now split explicitly: Ulrike owns URL-scope preparation and maintenance of the Scout Wiki migration list, including deciding which URLs should or should not be migrated and identifying gaps in the remaining scope. That Wiki list is the operational intake for subsequent LP Builder migration work. Dominik concentrates on Builder readiness, migration rules, reusable capabilities and quality guardrails rather than maintaining a parallel URL inventory or sitemap.

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

Dominik does not own the overall Contentful Migration. Viktoria Riffel leads the broader migration, including areas beyond Marketing.

Dominik supports the migration through the Landing Page Builder and the reusable migration capabilities he has already developed. His focus is to keep the Marketing migration foundation moving, define reusable technical contracts/rules where needed, support migration tooling and align the next technical steps with Viktoria and relevant engineering contributors rather than coordinate the full migration portfolio himself.

The working-student crawler is intended to move repeatable source capture and asset preparation into a reusable system that others can run with Codex.

## Stakeholders and Dependencies

- Viktoria Riffel — overall Contentful Migration lead; Dominik supports through LP Builder and technical/migration capabilities

- Mukhammadjon / Core Frontend: LP Builder platform and Contentful Action/renderer behavior
- Beatrice: Contentful/platform coordination and the link to the existing CMS AWS account
- John Ford / Platform Engineering: Marketing Asset Library technical partner for S3/scaler setup and image-delivery integration
- B2B Marketing / Ulrike: owner of URL-scope assessment for the migration; maintains the Scout Wiki list of migrate / do-not-migrate decisions and remaining URL gaps that drives LP Builder migration intake
- SEO: routing and URL strategy

Mitch is not part of Contentful Migration and should not be suggested for migration work.

## Risks and Open Questions

- Persistent asset delivery depends on the separate Marketing Asset Library pilot. The existing `is24-cms` account is confirmed as sufficient, but John has not yet specified the preferred GitHub/CloudFormation/deployment path for the bucket.
- The actual S3 upload phase should remain separate from the default crawl until the bucket and authentication/access rules are confirmed.
- The new GPT Migration Mode passes local tests but still needs real Custom GPT acceptance, including Crawl Rebuild and placeholder cases.
- 14 REVIEW/BLOCKED dynamic gallery references remain unresolved in the Handbook migration.
- Existing migrated drafts with AEM/static URLs still need later controlled URL rewriting before final AEM-independent delivery.
- The B2B contact form remains a key dependency for broader directory migration, although missing-form pages can now be represented as partial migrations rather than silently failing.
- Some legacy source areas still need scope/canonical decisions before migration; these decisions now belong in Ulrike's maintained Wiki URL list rather than a parallel Dominik-owned audit.
- The Migration Crawler must be proven on a real AEM subset before it can be treated as the standard intake path.
- Implementation ownership is pending Bea's next-week coordination: Jonas has already reviewed the briefing at least initially but is on vacation next week; if no urgent AEM work intervenes, Maciej can take over after his current task. No parallel crawler implementation should be started while this handoff is pending.

## Next Steps

1. Wait for John's next Marketing Asset Library setup instruction; do not create a parallel GitHub/CloudFormation path independently.
2. Once the minimal S3/scaler pilot is available, run one end-to-end migration asset test: original AEM asset -> S3 -> scaler/delivery URL -> LP Builder/Contentful.
3. After the pilot works, plan the original-AEM export/mapping approach at migration scale while preserving source-path correlation.
4. Apply and acceptance-test the updated GPT Migration Mode in the live Custom GPT, including Locked Import, normal Crawl Rebuild, placeholder and multi-page cases.
5. Wait for Beatrice's next-week follow-up on Jonas's possible handover and whether Maciej will take over the implementation after his current task; do not start a parallel crawler build meanwhile.
6. Use `LCMS-7518` as the scoped asset-discovery/download component and the existing `Migration Crawler – Briefing` as the broader LP Builder migration requirement set.
7. Reuse the strongest existing crawl components where practical and validate the combined crawler workflow on a small real AEM area before scaling.
8. Use Ulrike's maintained Scout Wiki URL list as the source for which pages enter the next LP Builder migration wave; do not maintain a separate Dominik-owned URL/sitemap workstream.

## Last Confirmed

2026-09-24: Viktoria Riffel is confirmed as lead for the broader Contentful Migration; Dominik supports through the Landing Page Builder and reusable migration capabilities. The migration extends beyond Dominik's previous Marketing scope. Prior technical state remains: the reusable Migration Crawler direction is linked to active platform work. Stefan created `LCMS-7518` for asset discovery/download and confirmed that DAM renditions can be resolved to originals. Bea had already asked Jonas to review Dominik's broader Migration Crawler briefing; Jonas is on vacation next week, and Bea will check for handover material. If no urgent AEM work intervenes, Maciej can take over after his current task. Dominik will wait for Bea's next-week follow-up and will not start a parallel crawler implementation. Temporary AEM/static asset URLs may remain in migration drafts as a transition state until the persistent S3/scaler path is ready.
