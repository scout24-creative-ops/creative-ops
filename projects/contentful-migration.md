# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

`Contentful Migration` covers migration scope, page preparation and execution, QA/handoff, asset migration, routing-related migration work and migration-specific dependencies. The [Landing Page Builder](landing-page-builder.md) is the central tool used to execute this work and is maintained separately because it also has an ongoing product/authoring life beyond the migration.

## Current Status

The B2B Anwenderhandbuch remains the first end-to-end migration pilot and the page-migration phase is materially complete:

- 45 real target pages
- 44 detail pages + 1 hub
- 12 legacy duplicate source packages excluded
- all 45 Canonical/Unique targets migrated as unpublished drafts
- visual/content QA and selected optimization remain before publish readiness

The next migration work is being used to strengthen the reusable LP Builder and the controlled rebuild path rather than simply increasing page count.

The Gold membership product-detail crawl is complete enough to serve as the current working source inventory for 36 unique targets, with the known limitation that rendered DOM and full-page screenshots were unavailable for those targets.

The large B2B Product Comparison has become the first complex reusable Builder contract. Its maintained Contentful-ready HTML is now writable at ~50 KB after Mukhammadjon's larger-htmlSource fix. The module still needs one final current Preview check before the reusable-module step is treated as complete.

The Gewerbliche-Anbieter directory/start page is the next real controlled-rebuild example. Its live source was captured with section order, links, interactions and relevant assets. A new LP Builder version has been prepared without the legacy contact form and with the original illustrated-card hover behavior preserved through external assets. The final maintained HTML is 19,760 bytes and needs one final Contentful sync/Preview check after the final hover asset/Bridge update.

## Migration Operating Model

The migration strategy is intentionally hybrid:

1. Build best-effort unpublished drafts for standard/reusable structures.
2. Compare previews against source pages.
3. Correct page-specific issues where needed.
4. Promote only repeated issues into shared rules or reusable modules.
5. Use controlled source-driven rebuilds for custom pages that should stay visually close to the source.
6. Hand visual/content QA to the relevant colleagues rather than requiring Dominik to polish every page personally.
7. Prefer reusable Builder capabilities over repeated manual migration work by Dominik.

Operational migration work should increasingly move to Ulrike, with Mitch supporting her, while Dominik concentrates on Builder readiness, migration rules and quality guardrails.

## Manual Migration Workspace Convention

The local manual migration workspace was simplified around a practical two-part model:

- `migration/old/<logical-page-name>/` for crawls, screenshots and legacy/source assets;
- `migration/new/<logical-page-name>/` for the maintained rebuilt LP Builder HTML and page-specific new assets.

Logical page names are used instead of URL-based folder hierarchies because the historic AEM landscape contains aliases, duplicate paths and product-specific URL variants for the same logical content.

Older automated/batch migration pipeline material is kept separately from this active manual-page workspace so daily work is not mixed with historical pipeline state.

## Current Gewerbliche-Anbieter Start Page

The source capture for `https://www.immobilienscout24.de/anbieten/gewerbliche-anbieter.html` records:

1. Hero and interest selector.
2. Five `Unsere Produktwelten für` illustrated links.
3. Seven `Kontaktanfragen für Ihr Neukundengeschäft` illustrated links.
4. `Neugierig geworden?` CTA.
5. Facts / numbers section.
6. New-business CTA.
7. Three `Das könnte Sie auch interessieren` teaser cards.
8. Excluded contact section beginning at `#kontakt`.

The crawl also preserved the existing link inconsistencies between some dropdown options and corresponding cards rather than silently normalizing them.

The rebuilt page deliberately uses current LP Builder pill buttons, a clean accessible selector, static facts/responsive layout instead of the old jQuery slider architecture, and no legacy contact form.

The original illustrated-card hover treatment was recovered from the AEM inline SVGs: a teal `path#highlight` layer sits behind the foreground illustration and appears on hover/focus with a 0.2s transition. The final external solution uses 12 base SVG illustrations plus six shared/masked hover overlay assets. Cards 01, 02 and 12 use masking so white foreground details and emblem colors remain intact.

## Asset Handling for Current Work

For immediate migration progress, existing AEM/static asset URLs are used directly in page HTML. A central asset-ID resolver or Contentful asset model is not being introduced yet.

This is a deliberate temporary decision. Dominik wants to avoid adding another platform task while Mukhammadjon is already handling LP Builder scaling work. Current manual pages are grouped together so these URLs can be updated later in a controlled batch once the final asset strategy is agreed.

For the Gewerbliche-Anbieter page, externalizing the 12 base illustrations was necessary for htmlSource size: the initial build was ~2.47 MB, of which ~2.46 MB was inline SVG geometry. Moving the illustrations to Scout24 static URLs reduced the maintained HTML to ~19 KB. Six final hover SVG assets are also hosted externally; the associated Bridge rules are published centrally.

## htmlSource Scale and Verification

The previously failing larger-write path has improved materially.

A controlled small-payload test confirmed ~6 KB HTML worked while the then-current ~50.7 KB Product Comparison payload failed. This aligned with the previously known Contentful text-size issue and helped reproduce the real migration problem.

After Mukhammadjon's Contentful-side change, the exact 50,718-byte Product Comparison file succeeds through both create and update. Both write actions report the full byte length and the same SHA-256 as the input, with no evidence of truncation or transformation.

The remaining limitation is the read path: `getLpBuilderPage` still returns `ResponseTooLargeError` for the ~50 KB entry. This is not critical for current migration writes because Preview can be visually checked, but it is a future authoring dependency. After migration, colleagues should be able to provide a page URL to the LP Builder, have it read the current full `htmlSource`, make a targeted change and write it back. Large read-back must therefore be fixed before that colleague-editing workflow can be considered robust.

## Relationship to Landing Page Builder

The Landing Page Builder and Contentful Migration remain separate but tightly coupled:

- `Landing Page Builder` owns Builder product capabilities: Contentful integration, Actions, module contracts, runtime, lifecycle support, exact/controlled rebuild modes and authoring behavior.
- `Contentful Migration` owns which AEM pages move, how migration is executed, what QA/handoff is required and which migration dependencies must be solved.
- Real migration needs are a primary source of requirements for the Builder.
- Dominik's highest-leverage contribution is preparing reusable Builder capabilities rather than becoming the permanent page-migration operator.

## Handbook Status

Canonical Handbook target structure remains:

- Hub: `/anbieter/gewerbliche-anbieter/anwender-handbuch.html`
- Details: `/anbieter/gewerbliche-anbieter/anwender-handbuch/<canonical_slug>.html`

Some existing drafts can still retain legacy preview paths until lifecycle/slug-rename support is fully available.

Handbook QA still includes ALT review, media associations, hub category/card review, selected visual optimization and resolution/acceptance of 14 dynamic gallery references.

## Asset Migration Status

The Handbook asset identity pipeline remains prepared:

- stable asset ID: `ast-sha256-<full-file-sha256>`
- content hash: full SHA-256
- deterministic target-key model
- `render_url` for current validated draft rendering
- `target_url` remains empty until a real persistent storage/CDN target exists

Current verified state:

- 207 SAFE/MIGRATE references have stable IDs
- 0 missing stable IDs among SAFE/MIGRATE references
- 0 manifest/hash inconsistencies
- 14 REVIEW/BLOCKED dynamic gallery references remain unresolved

Persistent AEM-independent delivery remains a separate migration dependency. Peter / relevant platform contacts should drive the actual storage pilot and ongoing infrastructure ownership while Dominik defines migration requirements and the URL/key contract.

The broader Marketing Asset Library remains exploratory rather than a confirmed platform project. The prepared John Ford alignment is intended to discover what storage, media-delivery, CDN/image-transformation capabilities and technical ownership already exist at Scout24 before proposing anything new.

## Stakeholder Alignment

- Mukhammadjon is implementing/validating the LP Builder platform changes needed at migration scale. Large writes are now validated at ~50 KB; large read-back remains open.
- Beatrice has been asked for the current B2B contact-form implementation plan/timing; the form is intentionally excluded from the current Gewerbliche-Anbieter rebuild.
- Ulrike should take over more operational page migration, with Mitch supporting her, while Dominik provides Builder readiness and migration guardrails.
- John Ford alignment is prepared to clarify existing asset/storage/media-delivery capabilities and technical ownership.
- SEO routing/URL strategy remains a parallel coordination topic for future Contentful delivery.

## Dominik's Role

Dominik owns migration planning, orchestration, migration rules and migration-focused preparation of the Landing Page Builder. He defines reusable migration contracts, migration-driven Builder requirements and quality guardrails.

For the next phase, Dominik should avoid becoming the default operator for repeated crawling and page-by-page migration. Operational work should be delegated where possible while he improves the reusable system.

## Key Dependencies and Open Issues

- Large write support is now validated for the ~50 KB real Product Comparison case, but large full read-back still fails through `getLpBuilderPage`.
- Remaining lifecycle/global-runtime LP Builder platform changes still need implementation/validation unless separately confirmed.
- Product Comparison needs a final synchronized Contentful Preview check.
- Gewerbliche-Anbieter start page needs a final Contentful sync/Preview check after final hover assets/Bridge publication.
- The B2B contact form remains a key dependency for broader directory migration and is intentionally handled separately from the current page rebuild.
- Persistent storage/CDN delivery is still needed before final Handbook asset `target_url` promotion.
- 14 REVIEW/BLOCKED dynamic gallery references remain unresolved.
- ALT review remains required for many informative Handbook images.
- Some Handbook drafts retain legacy slugs until rename capability is available.
- Future routing and SEO/LLM visibility requirements still need coordination with SEO.
- The Gold product-detail crawl lacks verified rendered DOM/full-page screenshots for dynamic content.

## Next Steps

1. Finish the Contentful Preview validation of the latest Product Comparison HTML after the large-write fix.
2. Sync and visually validate the final ~19.8 KB Gewerbliche-Anbieter start-page HTML, including all 12 external illustration/hover states.
3. Hand off visual/content QA for the 44 Handbook detail drafts and hub.
4. Review `/lp` source pages for additional FAQ/help/how-to content that may belong in the Handbook.
5. Let Ulrike take over more operational migration work, with Mitch supporting her.
6. Retest large `getLpBuilderPage` read-back after Mukhammadjon's follow-up.
7. Clarify the B2B contact-form implementation plan and Salesforce/business requirements.
8. Continue the storage/CDN discovery and later promote `target_url` values after verified upload.
9. Resolve or explicitly accept the 14 remaining dynamic gallery references before publish readiness.
10. Revisit centralized asset mapping/resolution after the immediate migration flow is stable.

## Last Confirmed

2026-09-10: The real 50,718-byte Product Comparison payload now writes successfully through create and update with matching input SHA-256; full `getLpBuilderPage` read-back still fails with `ResponseTooLargeError`. The Gewerbliche-Anbieter start-page source has been captured and rebuilt to a lightweight 19,760-byte HTML using external base/hover SVG assets and published Bridge rules; its final Contentful sync/Preview verification remains open. Manual migration work now follows a simple logical-page `old` / `new` workspace model, and direct AEM/static asset URLs are temporarily retained until a broader asset-resolution strategy is revisited.
