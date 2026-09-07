# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

`Contentful Migration` covers the actual AEM-to-Contentful migration programme: migration scope, page preparation and execution, QA/handoff, asset migration, routing-related migration work and migration-specific dependencies. The [Landing Page Builder](landing-page-builder.md) is the central tool used to execute this work and is maintained as its own closely related project because it also has an ongoing product/authoring life beyond the migration.

There is no separate active `Marketing Content Platform` project. Migration-specific infrastructure such as persistent asset delivery remains part of `Contentful Migration` unless a broader Marketing Asset Library / SSOT initiative is explicitly established later as its own project.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The B2B Anwenderhandbuch is the first end-to-end migration pilot and the page-migration phase is materially complete.

Canonical scope:

- 45 real target pages
- 44 detail pages + 1 hub
- 12 legacy duplicate source packages excluded from the target set
- 006 is the canonical Anwenderhandbuch hub; 007 is its legacy duplicate
- all 45 Canonical/Unique targets have been migrated as unpublished drafts through the GPT workflow
- visual/content QA and selected optimization remain before publish readiness

Canonical target structure:

- Hub: `/anbieter/gewerbliche-anbieter/anwender-handbuch.html`
- Details: `/anbieter/gewerbliche-anbieter/anwender-handbuch/<canonical_slug>.html`

Existing drafts created before canonical mapping can still retain legacy preview paths because the current Contentful Action cannot rename an existing slug/target path.

The real migration work has reinforced the intended operating model: the GPT can create and later update large groups of pages quickly, while highly custom legacy pages are handled through a separate exact-rebuild path and still require human guidance/QA where source structure is ambiguous or unusually bespoke. This is treated as a pragmatic hybrid migration model rather than a blocker to scale.

The migration strategy remains:

1. Build best-effort unpublished drafts.
2. Compare previews against source pages.
3. Correct page-specific issues where needed.
4. Promote only repeated issues into shared rules.
5. Use exact-rebuild preparation for custom pages that should stay close to the source.
6. Hand visual/content QA to the relevant colleagues instead of requiring Dominik to polish every page personally.

## Relationship to Landing Page Builder

The Landing Page Builder and Contentful Migration are separate but tightly coupled:

- `Landing Page Builder` owns the Builder product and its capabilities: Contentful integration, Actions, module contracts, runtime, lifecycle support, exact-rebuild modes and authoring behavior.
- `Contentful Migration` owns which AEM pages move, how the migration is executed, what QA/handoff is required and which migration dependencies must be solved.
- Real migration needs are a primary source of requirements for the Landing Page Builder, but Builder development remains reusable beyond this one migration programme.

## Handbook Composition and Spacing

The Handbook-specific composition is explicit and visually validated.

Detail pages use `lpb-explicit-spacing` with:

- `spacer-xl` before the H1/intro block
- `spacer-xl` after the H1/intro block
- `spacer-xl` between independent modules
- `spacer-xl` before and after each horizontal section divider
- `spacer-3xl` once at page end before the footer
- no generic module-root margin/padding combinations for page rhythm

The updated public LP Builder bridge contains all spacer primitives. The Firmendaten test confirmed the runtime values and removed the earlier 0px-spacer issue.

Other binding Handbook layout rules remain:

- source content/order and known media associations are preserved
- split teasers are top-aligned
- related text that shares one screenshot/media remains grouped with that media
- numbered steps use the circular-number treatment
- divider lines mark section boundaries, not individual numbered steps
- ambiguous but safe cases become QA warnings rather than generic blockers
- drafts remain unpublished until explicit approval

## Asset Migration Status

The asset pipeline is prepared far enough for continued migration and later storage promotion.

Stable identity contract:

- asset ID: `ast-sha256-<full-file-sha256>`
- content hash: full SHA-256
- deterministic target-key model based on the hash
- `render_url` is used for current draft rendering where validated
- `target_url` remains empty until a real S3/CDN target exists

Current verified asset state:

- 207 SAFE/MIGRATE asset references have valid stable asset IDs
- 0 missing stable IDs among SAFE/MIGRATE references
- 0 manifest/hash inconsistencies
- all 56 asset-bearing GPT-ready packages contain the stable `migration_asset_resolution.asset_id`; one additional package contains no assets
- the GPT therefore sees the stable asset ID directly in `migration/ready/`
- asset identity, hash, render URL, source reference and package/page can be reconstructed from the migration-ready data
- 14 REVIEW/BLOCKED references remain intentionally without a stable migrated asset ID; they are unresolved dynamic gallery references rather than data errors

A local `asset-usage-registry.json` also exists for later Contentful usage mapping. Exact Contentful usage by Entry ID/module position is not derivable from the migration packages alone and requires a draft export/read when that later URL-rewrite step is executed.

Persistent AEM-independent delivery remains a migration dependency: a real S3/CDN target is still needed before `target_url` promotion. Dominik defines the migration contract while Peter / relevant platform contacts should drive the actual storage pilot and ongoing infrastructure ownership.

The broader Marketing Asset Library remains an exploratory longer-term opportunity rather than a confirmed platform project. Dominik has already discussed the idea with Matthias Brandstätter and Paul Befort, and both reacted positively to the direction. The concept should still be validated against existing Scout24 capabilities before creating a new platform or ownership model.

## Canonical Mapping and Draft Inventory

The canonical map contains:

- 12 CANONICAL source pages
- 33 UNIQUE source pages
- 12 LEGACY_DUPLICATE source packages
- 45 final target pages

The GPT migration runs reported all 45 target drafts created, but the local migration repository does not yet contain a complete verified read/export of every current Contentful draft. A future draft inventory can capture Entry ID, current slug, `htmlSource`, actual asset usage and publish state in one machine-readable snapshot.

This inventory is useful for handoff and later asset URL rewrites, but it is not a reason to rebuild already migrated pages.

## Source-Duplicate / Exact-Rebuild Workflow

A second migration path is validated for highly custom legacy pages that should remain visually close to the source instead of being approximated with the normal module library.

Workflow:

1. Codex crawls and analyzes the source.
2. Codex creates a high-fidelity rebuild.
3. Codex performs a Contentful-ready cleanup while preserving the visual structure.
4. GPT imports the prepared `htmlSource` through `SOURCE_DUPLICATE_IMPORT_LOCKED` without recomposition.
5. GPT verifies input vs stored HTML by length and SHA-256.
6. Visual QA is performed in the Contentful preview.

The reduced Mitgliedschaften test proved the locked import works: a 20.6 KB custom rebuild was written and read back byte-identically with matching SHA-256. A larger ~60 KB real-page rebuild is rejected by the current Contentful Text-field validation with HTTP 422 rather than being transformed by Contentful.

For future exact-rebuild pages, the requested platform contract is at least 256 KB, ideally 512 KB, with complete write and read-back and no silent truncation/transformation.

## Stakeholder Alignment

The project now has broader visibility because the first real migration results are tangible.

- Mukhammadjon received one bundled technical request covering larger `htmlSource`, missing lifecycle Actions and a global LP Builder CSS/JS runtime contract. These are Landing Page Builder capabilities required by migration scale.
- Beatrice received a migration progress update and was asked for the current B2B contact-form implementation plan/timing; Dominik offered Ulrike as B2B support for Salesforce/business requirements.
- Daniel received a progress update that the Contentful-adapted LP Builder is already migrating real B2B pages successfully, can update many pages together efficiently, and is progressing at or ahead of the expected pace. The hybrid nature of custom-page migration was framed as a practical operating model rather than a failure of the approach.
- Matthias Brandstätter and Paul Befort have already heard the broader Marketing Asset Library idea and both responded positively. This is support for further exploration, not yet an architecture or delivery decision.
- SEO routing/URL strategy remains a parallel coordination topic for future Contentful delivery.

## Dominik's Role

Dominik owns migration planning, orchestration, migration rules and the migration-focused use of the Landing Page Builder. He defines reusable migration contracts and migration-driven Builder requirements, while visual/content QA and infrastructure ownership should remain with the relevant specialists.

For persistent asset storage, Dominik defines the migration requirements and URL/key contract while Peter / relevant platform contacts drive the actual S3/CDN pilot and ongoing storage ownership.

## Key Dependencies and Open Issues

- Mukhammadjon's feedback/implementation is pending for Landing Page Builder capabilities needed at migration scale: larger `htmlSource`, read-by-entryId, slug rename, unpublish, archive/delete and trusted global CSS/JS loading.
- Persistent S3/CDN delivery is still needed before final asset `target_url` promotion.
- 14 REVIEW/BLOCKED dynamic gallery asset references remain unresolved; seven occur on each of the two gallery source variants.
- ALT review remains required for many informative images before publish readiness.
- The hub still has visual/content QA, including category placement for page 054 where the category was not unambiguous.
- Some existing Handbook drafts retain legacy slugs until the rename capability exists.
- The B2B contact form is becoming a key dependency for broader directory migration; implementation/timing and Salesforce integration details are still being clarified with Beatrice/Core/B2B.
- Future Contentful routing and SEO/LLM visibility requirements still need coordination with SEO.

## Next Steps

1. Hand off visual/content QA for the 44 detail drafts and the hub, including ALT review, media associations and hub category/card review.
2. Wait for Mukhammadjon's feedback/implementation on the migration-relevant Landing Page Builder requirements and validate changes on disposable entries.
3. Clarify the B2B contact-form implementation plan and, if useful, connect Ulrike with the relevant developer for Salesforce/business requirements.
4. Continue the S3/CDN storage pilot with Peter / platform owners and later promote `target_url` values after verified upload.
5. Resolve or explicitly accept the 14 remaining REVIEW/BLOCKED gallery asset references before final publish readiness.
6. When useful for final handoff or asset URL migration, export/read the 45 current Contentful drafts into a verified inventory rather than rebuilding them.
7. Review `/lp` source pages for additional FAQ/help/how-to content that should potentially be integrated into the Anwenderhandbuch scope.
8. Once the key Builder components are available, continue with additional B2B directories rather than waiting for a fully automated universal migration framework.

## Last Confirmed

2026-09-07: Dominik confirmed the simplified two-project model: `Landing Page Builder` for the Builder product and `Contentful Migration` for the AEM-to-Contentful migration programme. The former `Marketing Content Platform` project label is retired. The broader Marketing Asset Library direction has already received positive initial feedback from Matthias Brandstätter and Paul Befort but remains exploratory. All 45 Canonical/Unique Anwenderhandbuch target pages remain migrated as unpublished drafts; remaining migration work is concentrated on QA/handoff and the dependencies listed above.
