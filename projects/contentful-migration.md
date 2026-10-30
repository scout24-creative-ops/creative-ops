# Contentful Migration

## Purpose and Ownership

Support the AEM-to-Contentful migration with reusable AI-assisted tooling and rules. Viktoria Riffel owns broader migration project management; Beatrice Riedel owns engineering capacity, architecture and delivery; Nataliya Medvedeva provides program/SEO oversight. Dominik supports through the LP Builder and technical/migration concepts, not overall operational page migration or engineering coordination.

Ulrike owns B2B URL-scope decisions and the maintained Wiki intake. Do not revive a parallel Dominik-owned sitemap/URL inventory. Mitch is not part of this work.

## Last Known Delivery State

- Handbook pilot: 45 unique targets (44 details + hub) migrated as unpublished drafts; 12 duplicate source packages excluded. Content/visual QA and selected optimization precede publication.
- Gold/product crawl: useful working inventory for 36 unique targets; rendered DOM/screenshots were not verified in that run.
- Shared module/spacing, exact import and controlled rebuild capabilities exist in the LP Builder. Dedicated migration acceptance must be distinguished from generic GPT regression success.
- Migration Crawler is a defined reusable source-capture workstream, not another agent or standalone UI. Technical state was last materially confirmed in September; no new completion claim.
- The September Jonas/Maciej handoff and John's infrastructure guidance are old pending dependencies, not current scheduled follow-ups. On 30 October Dominik confirmed no current follow-up appointments.

## Working Source References

- [Domain overview](https://linear.app/scout24-se/document/domain-overview-is24-f097933f2f3d)
- [B2B migration workbook](https://gs24.sharepoint.com/:x:/r/sites/CMSMigrationProject/Files/CMS%20Migration%20-%20URLs%20liste/Excel%20List%20for%20Migration/Immoscout24%20DE%20+%20AT/immobilienscout24.de_anbieten_CMS%20Migration_20250318.xlsx?d=w34b27b93faaf4ed1b4d9da2ff1e9c294&csf=1&web=1&e=i7ExTx)
- [Wiki migration directory](https://wiki.scout24.com/spaces/creative-operations/pages/56634/contentful-migration)
- [B2B URL working list](https://wiki.scout24.com/spaces/creative-operations/pages/56636/b2b-migration-url-arbeitsliste)
- [Migration Crawler briefing](https://wiki.scout24.com/spaces/creative-operations/pages/56763/migration-crawler-briefing)
- [Landing Page Builder](landing-page-builder.md)
- [Marketing Asset Library](marketing-asset-library.md)

The workbook is broad inventory; Ulrike's Wiki list is the selected operational scope. External source links are references, not evidence of a fresh live check.

## Reusable Migration Contract

1. Select scope rather than copying the entire AEM inventory.
2. Capture source content/order, headings/tables/lists, exact links/CTA labels, interactions, assets, rendered state/screenshots where possible and explicit capture gaps.
3. Supply structured reusable evidence so a later LP Builder change does not require a fresh crawler design.
4. Use LOCKED_IMPORT for complete ready HTML; CRAWL_REBUILD for source/crawl input, including multiple pages with independent identities and reports.
5. Render representable sections using canonical modules. A usable temporary AEM/static asset URL is acceptable in a draft while tracked for later migration.
6. Use explicit placeholders only for genuine missing assets, unsupported modules or platform gaps such as forms. Report DRAFT_READY / REVIEW_REQUIRED / PARTIAL / BLOCKED; none is publication approval.
7. Human source/preview QA precedes explicit publishing.

## Crawler and Asset Boundary

- `LCMS-7518` covers focused asset discovery/download; the broader Crawler briefing covers LP Builder migration evidence. Existing discovery/capture/download/hash logic should be reused where practical.
- Stefan confirmed DAM rendition URLs can resolve to originals; most relevant images are page-stored without that distinction. Original-quality handling must remain part of the capture requirements.
- Keep acquisition separate from live S3 writes until bucket, access and deployment path are agreed. No parallel crawler build should be inferred as authorized from these notes.
- Asset identity remains AEM URL/path → stable asset ID/full content hash → original → S3 object → scaler/delivery URL.
- Existing Handbook validation: 207 SAFE/MIGRATE references had stable IDs; no missing IDs or manifest/hash inconsistencies; 14 REVIEW/BLOCKED gallery references remained unresolved.
- Usable temporary render URLs and not-yet-set target URLs are intentional draft states. Later rewrite through shared mapping, not manual per-page replacement.
- Final persistent delivery is a separate Asset Library dependency; the intended initial proof is original asset → S3 → scaler URL → Contentful. No provisioned bucket is confirmed.

## Material Outcomes and History

- August: first B2B use case and migration approach selected; Contentful GPT handover established independent execution.
- September: Handbook source normalization, reusable hub/detail composition and complete canonical draft coverage achieved. A later Gold crawl provided another source inventory.
- Persistent asset identity and scoped crawler requirements were prepared; forms, actual asset delivery and operational engineering handoff remained dependencies.
- September/October ownership clarifications shifted URL intake to Ulrike and broader PM/engineering to Viktoria/Beatrice, keeping Dominik focused on reusable AI tooling.
- [31 August checkpoint](contentful-migration-checkpoint-2026-08-31.md) is historical.
- Earlier detailed state and results: [pre-cleanup reference](../documentation/reference-archive/2026-10-30/contentful-migration-before-cleanup.md). Dated work/effort: [weekly documentation](../documentation/README.md).

## Open Questions and Next Focus

- Reconfirm actual crawler implementation/handoff and current migration needs through Beatrice; do not present old “next week” notes as active appointments.
- Await/reconfirm John's agreed infrastructure route; do not independently provision an alternative setup.
- Validate one asset end to end once infrastructure is available.
- Apply/test temporary-asset handling and migration-specific GPT cases as needed; local tests alone do not prove current live readiness.
- Resolve remaining galleries, forms, final URL delivery and per-page QA before claiming publication readiness.

## Last Confirmed

Ownership/oversight confirmed in September/October. Technical snapshot remains September unless explicitly updated. 30 October clarification: no current follow-up appointments; existing tasks remain unchanged pending a later task review.
