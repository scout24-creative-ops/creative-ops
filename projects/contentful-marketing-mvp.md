# Marketing Content Platform

## Purpose

Build the shared Marketing content platform around Landing Page Builder, Contentful and the future asset workflow so Marketing can create, manage and publish landing pages through a controlled, reusable setup instead of copying pages manually into AEM.

The platform work is distinct from the migration of existing AEM pages. `Marketing Content Platform` covers the tools and infrastructure; `Contentful Migration` covers the actual migration of existing pages.

## Current Status

The Landing Page Builder -> Contentful integration is validated end to end in Dominik's duplicated GPT. OAuth, draft creation, preview, update, explicit publish and production URL all work.

The migration-focused Builder has moved beyond the early v0.1 whitelist into a broader maintained module catalogue, explicit page-spacing rules, a source-duplicate workflow for custom legacy pages and a verified lifecycle/runtime model.

CoreCSS/COSMA remains the default styling foundation. A small public LP Builder bridge covers verified static-HTML gaps and explicit-spacing primitives. The current page-level CSS link works, but the preferred scaling direction is now one stable global CSS entry point plus one trusted global JS runtime entry point loaded by the renderer.

Image handling remains intentionally decoupled from Contentful asset selection. Migration-ready packages carry stable SHA-based asset IDs and current draft-time `render_url` values; later S3/CDN promotion can replace URLs without changing asset identity.

The B2B contact form is emerging as an important next platform dependency for broader migration. Existing B2B forms use Salesforce and multiple variants/field sets. The intended direction is a centrally managed form/component that the LP Builder configures and integrates rather than reproducing Salesforce logic page by page. Dominik has asked Beatrice for the current implementation plan/timing and offered Ulrike as B2B support for Salesforce/business requirements.

## Asset Platform Direction

The migration-side asset contract is materially prepared:

- stable asset ID: `ast-sha256-<full-file-sha256>`
- deterministic SHA-based content identity
- deterministic future storage-key model
- 207 SAFE/MIGRATE references have valid IDs in GPT-ready packages
- `target_url` intentionally remains empty until a real storage/CDN target exists
- current drafts can use validated `render_url` values in the meantime

The remaining platform task is durable delivery: confirm the storage target, ownership, authentication, delivery URL and relevant security/header policies, then upload/verify assets and promote `target_url` values.

Dominik should continue defining the migration integration contract without becoming the long-term AWS/storage operator.

## Contentful / Renderer Platform Gaps

Dominik sent Mukhammadjon one bundled request on 2026-09-06 covering the remaining proven scaling requirements.

1. **Larger `htmlSource` capacity** — a real custom page rebuild around 60 KB is rejected by the current Contentful Text-field validation. Requested future contract: at least 256 KB, ideally 512 KB, with complete write/read-back and no silent truncation/transformation.
2. **Page lifecycle support** — Create, Update, Publish and Re-Publish work. Missing capabilities are read by `entryId`, slug/target-path rename, unpublish and archive/delete.
3. **Global LP Builder CSS + JS runtime** — page-level CSS loads correctly, but external `<script>` tags are removed by `sanitizeLPBuilderHtml` before the final DOM. The preferred architecture is one stable global CSS entry point plus a trusted `lpbuilder-runtime.js`, with a root-scoped/idempotent init after `htmlSource` render/replacement. The underlying files should remain independently maintainable in the Creative Ops public setup.

A separate exact-rebuild test still showed an outer-container/full-bleed difference despite byte-identical stored HTML. This remains secondary and should only become a platform requirement if it proves relevant beyond the current test.

## Dominik's Role

Dominik owns the product direction, Marketing requirements and quality of the platform setup. He validates the LP Builder -> Contentful workflow, owns the migration-focused Builder copy and defines the authoring/migration contracts while keeping infrastructure responsibilities with the appropriate platform owners.

## Key Stakeholders

- Mukhammadjon Kayumov for Contentful Action/renderer behavior
- Beatrice for Core Team coordination and broader platform alignment
- Daniel Herold for Core/Builders Platform direction and migration visibility
- Matthias Brandstätter for Contentful/platform ownership
- Contentful/Core Frontend teams
- SEO and UX where generation rules affect quality and publishing
- Ulrike / B2B Product Marketing for migration and contact-form business requirements
- Peter / relevant platform contacts for persistent migration asset storage

## Confirmed Direction and Decisions

- Keep draft/save and explicit publish as separate consequential actions.
- Keep the current authoring model HTML-based for this phase.
- Use CoreCSS/COSMA first and only a thin shared bridge for verified gaps.
- Use explicit spacer primitives for page-level rhythm rather than implicit module-root margins.
- Keep stable direct asset URLs in the migration MVP; do not build a separate Contentful image picker as a prerequisite.
- Treat stable asset identity as independent from delivery URL so later S3/CDN migration is a controlled URL-promotion step.
- Use normal module composition for standard pages and the source-duplicate workflow only for custom pages that must preserve source fidelity.
- Keep Contentful draft-first and never publish automatically.
- Prefer one stable global CSS and one stable global JS runtime entry point while keeping the public assets independently maintainable by Creative Ops.
- Build flexible/native components such as forms centrally where raw HTML is not the right abstraction; let the LP Builder configure/integrate them.

## Risks and Open Questions

- Final S3/CDN target and ongoing ownership are not yet confirmed.
- `htmlSource` field capacity is insufficient for some real exact-rebuild pages.
- Read-by-entryId, slug rename, unpublish and archive/delete are not yet available in the Action set.
- Page-authored scripts are sanitized before rendering, so interactive custom modules depend on a trusted global runtime contract.
- Contact-form implementation/timing and exact Salesforce integration responsibilities are still being clarified.

## Next Steps

1. Wait for Mukhammadjon's feedback/implementation on the bundled Contentful lifecycle, capacity and global runtime request.
2. Clarify the B2B contact-form plan with Beatrice and connect Ulrike to the relevant developer if useful for Salesforce/business requirements.
3. Continue the persistent asset-storage pilot with Peter / platform owners and confirm the real delivery target before any `target_url` promotion.
4. Keep the migration pilot moving with current `render_url` values while final storage is prepared.
5. Only add new platform capabilities when proven by real migration/page-building needs rather than speculative architecture work.

## Last Confirmed

2026-09-06: the Contentful platform baseline is proven in real migration work. Dominik has bundled the remaining Action/runtime scaling requirements for Mukhammadjon, and the B2B contact form is the next important component dependency being clarified with Beatrice. The migration-side asset identity contract remains stable enough for broader rollout.