# Marketing Content Platform

## Purpose

Build the shared Marketing content platform around Landing Page Builder, Contentful and the future asset workflow so Marketing can create, manage and publish landing pages through a controlled, reusable setup instead of copying pages manually into AEM.

The platform work is distinct from the migration of existing AEM pages. `Marketing Content Platform` covers the tools and infrastructure; `Contentful Migration` covers the actual migration of existing pages.

## Current Status

The Landing Page Builder -> Contentful integration is validated end to end in Dominik's duplicated GPT. OAuth, draft creation, preview, update, explicit publish and production URL all work.

The migration-focused Builder has moved beyond the early v0.1 whitelist into a broader maintained module catalogue, explicit page-spacing rules and a second exact-rebuild workflow for highly custom source pages.

CoreCSS/COSMA remains the default styling foundation. A small public LP Builder bridge covers verified static-HTML gaps and the current explicit-spacing primitives. The bridge still has to be linked from page `htmlSource` during the pilot rather than being loaded centrally by the renderer.

Image handling remains intentionally decoupled from Contentful asset selection. Migration-ready packages carry stable SHA-based asset IDs and current draft-time `render_url` values; later S3/CDN promotion can replace URLs without changing asset identity.

## Asset Platform Direction

The migration-side asset contract is now materially prepared:

- stable asset ID: `ast-sha256-<full-file-sha256>`
- deterministic SHA-based content identity
- deterministic future storage-key model
- 207 SAFE/MIGRATE references have valid IDs in GPT-ready packages
- `target_url` intentionally remains empty until a real storage/CDN target exists
- current drafts can use validated `render_url` values in the meantime

The remaining platform task is therefore not identity design but durable delivery: confirm the storage target, ownership, authentication, delivery URL and relevant security/header policies, then upload/verify assets and promote `target_url` values.

Dominik should continue defining the migration integration contract without becoming the long-term AWS/storage operator.

## Contentful / Renderer Platform Gaps

The current platform discussion with Mukhammadjon / Core Frontend has narrowed to genuine technical gaps:

1. **Existing draft slug/target-path rename** — the current Action can update draft content but cannot rename an existing slug/path. A draft-only rename capability with current-value and uniqueness checks is needed for canonical migration cleanup.
2. **Larger `htmlSource` capacity** — a real custom page rebuild around 60 KB is rejected by the current Contentful Text-field validation. The desired future contract is at least 256 KB, ideally 512 KB, with complete write/read-back and no silent truncation/transformation.
3. **Central bridge loading** — pilot pages can link the public bridge once in `htmlSource`, but central renderer loading would remove repetitive per-page dependency management for the larger rollout.
4. **Runtime ownership** — Counter, Card Carousel, Sticky Footer and Video still need confirmed frontend/runtime support beyond their static visual contracts.
5. **Potential full-bleed custom-page contract** — a byte-identical exact-rebuild import still showed an outer-container/full-bleed difference in preview; this should first be isolated before becoming a formal frontend requirement.

## Dominik's Role

Dominik owns the product direction, Marketing requirements and quality of the platform setup. He validates the LP Builder -> Contentful workflow, owns the migration-focused Builder copy and defines the authoring/migration contracts while keeping infrastructure responsibilities with the appropriate platform owners.

## Key Stakeholders

- Mukhammadjon Kayumov for Contentful Action/renderer behavior
- Beatrice for Core Team coordination and broader platform alignment
- Daniel Herold for Core/Builders Platform direction
- Matthias Brandstätter for Contentful/platform ownership
- Contentful/Core Frontend teams
- SEO and UX where generation rules affect quality and publishing
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

## Risks and Open Questions

- Final S3/CDN target and ongoing ownership are not yet confirmed.
- `htmlSource` field capacity is insufficient for some real exact-rebuild pages.
- Existing slugs cannot yet be renamed through the available GPT Action.
- The bridge remains page-linked during the pilot.
- True runtime gaps remain for Counter, Card Carousel, Sticky Footer and Video.

## Next Steps

1. Align the remaining Contentful/renderer gaps with Mukhammadjon / Core Frontend.
2. Continue the persistent asset-storage pilot with Peter / platform owners and confirm the real delivery target before any `target_url` promotion.
3. Keep the migration pilot moving with current `render_url` values while final storage is prepared.
4. Only add new platform capabilities when proven by real migration/page-building needs rather than speculative architecture work.

## Last Confirmed

2026-09-06: the platform baseline is proven. Current work is focused on a small set of real scaling constraints: slug rename, larger raw `htmlSource` capacity, central bridge/runtime ownership and final S3/CDN delivery. The migration-side asset identity contract is already stable enough for the broader rollout.