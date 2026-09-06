# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup through an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

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

The migration strategy remains pragmatic:

1. Build best-effort unpublished drafts.
2. Compare previews against source pages.
3. Correct page-specific issues.
4. Promote only repeated issues into shared rules.
5. Hand visual/content QA to the relevant colleagues instead of requiring Dominik to polish every page personally.

## Handbook Composition and Spacing

The Handbook-specific composition is now explicit and visually validated.

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

Persistent AEM-independent delivery remains a separate platform dependency: a real S3/CDN target is still needed before `target_url` promotion.

## Canonical Mapping and Draft Inventory

The canonical map contains:

- 12 CANONICAL source pages
- 33 UNIQUE source pages
- 12 LEGACY_DUPLICATE source packages
- 45 final target pages

The GPT migration runs reported all 45 target drafts created, but the local migration repository does not yet contain a complete verified read/export of every current Contentful draft. A future draft inventory can capture Entry ID, current slug, `htmlSource`, actual asset usage and publish state in one machine-readable snapshot.

This inventory is useful for handoff and later asset URL rewrites, but it is not a reason to rebuild already migrated pages.

## Source-Duplicate / Exact-Rebuild Workflow

A second migration path is now validated for highly custom legacy pages that should remain visually close to the source instead of being approximated with the normal module library.

Workflow:

1. Codex crawls and analyzes the source.
2. Codex creates a high-fidelity rebuild.
3. Codex performs a Contentful-ready cleanup while preserving the visual structure.
4. GPT imports the prepared `htmlSource` through `SOURCE_DUPLICATE_IMPORT_LOCKED` without recomposition.
5. GPT verifies input vs stored HTML by length and SHA-256.
6. Visual QA is performed in the Contentful preview.

The reduced Mitgliedschaften test proved the locked import works: a 20.6 KB custom rebuild was written and read back byte-identically with matching SHA-256. A larger ~60 KB real-page rebuild is rejected by the current Contentful Text-field validation with HTTP 422 rather than being transformed by Contentful.

For future exact-rebuild pages, the current platform requirement is therefore to support materially larger `htmlSource` payloads. The working requirement to discuss with Mukhammadjon is at least 256 KB, ideally 512 KB, with complete write and read-back and no silent truncation/transformation.

## Dominik's Role

Dominik owns migration planning, orchestration, migration rules and the migration-focused Landing Page Builder. He defines reusable migration contracts and integration requirements, while visual/content QA and infrastructure ownership should remain with the relevant specialists.

For persistent asset storage, Dominik defines the migration requirements and URL/key contract while Peter / relevant platform contacts drive the actual S3/CDN pilot and ongoing storage ownership.

## Key Dependencies and Open Issues

- Existing Contentful drafts cannot currently be renamed to canonical slugs/target paths through the available GPT Action. A dedicated draft-only slug update capability is needed.
- `htmlSource` capacity is too small for some real custom/duplicate pages. A practical future target is at least 256 KB, ideally 512 KB, with full read-back integrity.
- Persistent S3/CDN delivery is still needed before final asset `target_url` promotion.
- 14 REVIEW/BLOCKED dynamic gallery asset references remain unresolved; seven occur on each of the two gallery source variants.
- ALT review remains required for many informative images before publish readiness.
- The hub still has visual/content QA, including category placement for page 054 where the category was not unambiguous.
- Some existing Handbook drafts retain legacy slugs until the rename capability exists.

## Next Steps

1. Hand off visual/content QA for the 44 detail drafts and the hub, including ALT review, media associations and hub category/card review.
2. Align the remaining Contentful platform gaps with Mukhammadjon: slug rename capability and larger `htmlSource` capacity; keep central bridge loading and true runtime-only module gaps in the same frontend discussion.
3. Continue the S3/CDN storage pilot with Peter / platform owners and later promote `target_url` values after verified upload.
4. Resolve or explicitly accept the 14 remaining REVIEW/BLOCKED gallery asset references before final publish readiness.
5. When useful for final handoff or asset URL migration, export/read the 45 current Contentful drafts into a verified inventory rather than rebuilding them.
6. Review `/lp` source pages for additional FAQ/help/how-to content that should potentially be integrated into the Anwenderhandbuch scope.

## Last Confirmed

2026-09-06: all 45 Canonical/Unique Anwenderhandbuch target pages have been migrated as unpublished drafts. Stable asset IDs are present in all 207 SAFE/MIGRATE references across the GPT-ready packages, with 14 REVIEW/BLOCKED dynamic gallery references still unresolved. The explicit Handbook spacing model is validated. A locked exact-rebuild import was also proven byte-identical on a 20.6 KB real custom-page subset; larger ~60 KB HTML is rejected by the current Contentful Text-field validation. The immediate work has shifted from migration construction to QA/handoff and platform alignment.