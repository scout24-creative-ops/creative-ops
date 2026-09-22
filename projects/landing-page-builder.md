# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The production/AEM Builder remains operational, while `LP Builder – Contentful` is the maintained Contentful-enabled Builder for migration and future product development.

The Custom GPT baseline passed the reusable three-prompt acceptance suite on 2026-09-17 before the latest migration-policy refactor. That run validated Blueprint creation, complex single-update editing and the full publish/unpublish/archive/unarchive/delete lifecycle without retry or Action, JSON, serialization, auth or validation errors. On 2026-09-21, after re-entering the GPT Action client ID and secret, a separate one-prompt end-to-end smoke test also passed CREATE, draft verification, publish, unpublish, archive, unarchive, republish, reunpublish and delete without technical error, confirming that Action authentication and the core lifecycle path are working again.

The local GPT package has since been extended with the new migration model. `migration-mode.md` replaces `source-duplicate-mode.md` and defines exactly two migration cases: `LOCKED_IMPORT` for exact Contentful-ready HTML import and `CRAWL_REBUILD` for rebuilding one or more source pages from crawler/migration evidence. The local package/runtime contract tests pass 50/50. The updated package still needs to be applied to the actual Custom GPT and the acceptance suite rerun before this changed configuration is treated as the new green GPT baseline.

The previously blocking renderer issue is resolved: the shared Bridge CSS loads centrally again. The Action flow was stable in the last real GPT acceptance run after the updated OpenAI schema configuration. Large read-back at roughly 50 KB remains a separate capability that should still be retested explicitly.

The reusable regression suite is maintained in [landing-page-builder-regression-suite.md](landing-page-builder-regression-suite.md).

## Remaining Migration-Readiness Capabilities

The current migration-focused backlog includes three explicit Builder capabilities / policy areas:

- **User-facing capability library:** the LP Builder Module Library should represent everything future users may intentionally use in pages, not only full Page Modules. This includes selected reusable Design Library elements such as buttons and standalone headline/body-text capabilities. Technical primitives and implementation-only rules such as spacing remain outside the user-facing library and continue to be governed by the Building Policy / design system.
- **SEO / anchor-navigation module:** the previously investigated pattern uses a sticky sidebar for anchor navigation. The module still needs to be built, but whether it is required immediately for the current migration wave is not yet confirmed; Ulrike should clarify this from the URL/page scope.
- **Pending module-specific policies:** several modules still need explicit policy decisions in the Building Policy. These decisions should be completed as part of migration readiness rather than relying permanently on the generic fallback policy.


## Current GPT Package

Instructions:

- `main-instructions.md`

Knowledge:

- `component-library.html`
- `building-policy.md`
- `contentful-integration.md`
- `migration-mode.md`
- `cosma-icons-static.md`

Action schema:

- Mukhammadjon's current OpenAPI schema remains the read-only SSOT and should not be modified as part of GPT package work.

The package deliberately separates standard Builder composition, full HTML replacement and migration behavior:

- `component-library.html` is the canonical user-capability source.
- `building-policy.md` defines how pages are composed, edited and spaced.
- `contentful-integration.md` defines the current Action/read/write terminology and integration behavior.
- `migration-mode.md` owns migration-specific behavior for exact locked import and crawler-driven rebuilds.
- COSMA icon guidance remains static and host-aligned.

## Component Library

The current Component Library contains 33 Page Modules and 12 Embedded Component groups.

Important rules:

- Page Modules are complete `LP_MODULE_START/END` blocks and may be top-level page sections.
- Embedded Components are complete `LP_COMPONENT_START/END` blocks and must not be used as direct page sections.
- `checkmark-list` is an Embedded Component.
- `handbook-category-card` is an independent Page Module.
- There is no ACTIVE/whitelist/allowlist state in the current architecture.
- A complete valid module block in the Component Library is usable unless another explicit rule says otherwise.

Nine module-specific policies in the Building Policy are intentionally still marked `pending`. Pending does not block those modules; canonical Component Library markup plus the global Building Policy applies until a dedicated policy exists. The remaining policy decisions are still part of Dominik's active Builder-readiness work and should be resolved deliberately rather than left indefinitely pending.

## Blueprint

The first named page template is `Blueprint`, defined as a module composition rather than copied HTML:

1. `hero-split`
2. `steps-3col`
3. `teaser-split-image-right`
4. `teaser-split-image-left`
5. `counter-animated`
6. `accordion`

The Building Policy remains responsible for deriving spacers; templates do not duplicate spacing logic.

## Explicit Spacing Contract

The current Building Policy uses these page-rhythm rules:

- independent modules and the transition after a Hero: `3xl` (48/64)
- directly adjacent image split teasers: `xxl` (32/40)
- before Footer, at page end without Footer, or for an explicitly large transition: `4xl` (50/80)
- no opening spacer
- no consecutive spacers
- exactly one `lpb-explicit-spacing` root
- no spacer after Footer

Page ending:

- without Footer: `LAST MODULE -> 4xl -> END ROOT`
- with Footer: `LAST MODULE -> 4xl -> FOOTER -> END ROOT`

These rules supersede the older `xl` / `3xl-before-footer` convention.

## Rendering Model

The renderer owns shared technical assets and runtime behavior:

- Bridge CSS is loaded centrally by the Contentful frontend.
- Runtime JS is loaded centrally by the Contentful frontend.
- GPT-generated/stored page HTML must not add Bridge `<link>` tags or Runtime scripts.
- Interaction ownership should remain single-source; for example Accordion interaction belongs to the renderer rather than a duplicate page/runtime handler.

Static page HTML should continue to prefer native CoreCSS/COSMA primitives and use the shared Bridge only for verified gaps.

## Contentful Integration

Current terminology:

- `html` = Action CREATE/UPDATE request parameter
- `fields.htmlSource` = normalized READ result containing the full page HTML
- `htmlSourcePayload` = current internal Contentful storage detail
- old Long Text `htmlSource` = legacy terminology

Large writes around 50 KB were previously validated losslessly. Large full read-back at the same scale remains the main outstanding scale check.

## Migration Mode

Migration has exactly two GPT-side cases.

### LOCKED_IMPORT

Use when the user provides complete Contentful-ready HTML that must be transferred without recomposition or redesign. The former Source Duplicate / Locked Import rules remain preserved here, including strict draft-only behavior and exact supplied HTML as the authoritative input.

### CRAWL_REBUILD

Use when the user provides crawler/migration files for one or more source URLs. The GPT interprets each page independently, preserves source copy, CTA labels, links and content meaning, and chooses the best available current LP Builder modules using the Component Library and Building Policy.

If a source area cannot be represented safely, the GPT does not silently drop it or fail the entire page. It uses the canonical migration placeholder based on the existing `callout--base` structure with stable `data-lpb-migration-*` markers and a reason code. Supported gap categories include missing forms, module gaps, unsupported interactions, missing assets and unclear content. The placeholder is migration-only behavior and does not become a new normal Component Library capability.

Multiple pages can be processed in one request without a separate Batch Mode. Similar pages may reuse a validated composition pattern, but content, links, assets, slug checks and validation remain page-specific.

Migration result statuses are `DRAFT_READY`, `REVIEW_REQUIRED`, `PARTIAL` and `BLOCKED`. Migration remains draft-only unless publishing is separately and explicitly requested.

## Migration Asset Direction

Existing and new migration drafts may temporarily use usable AEM/source asset URLs while the persistent S3/scaler path is not yet available. That is an explicit migration fallback, not the final delivery target.

The 2026-09-18 `CRAWL_REBUILD` test with `/anbieten/gewerbliche-anbieter/lp/sichtbarkeit-verbessern.html` exposed that the current migration policy is too strict: representable image/text sections were replaced by `ASSET_MISSING` placeholders merely because no final delivery URL existed. The desired behavior is now:

- if the source structure can be represented by an existing LP Builder module, build the real module;
- if a final persistent delivery URL exists, use it;
- if no final delivery URL exists but a usable AEM/source URL exists, use that URL temporarily in the Draft and mark/report the asset as pending migration;
- use a visible migration placeholder only when the asset is truly unavailable or the source structure/capability cannot be represented safely;
- genuine unsupported forms continue to use the migration placeholder, e.g. `FORM_MISSING`.

The durable mapping remains source AEM URL/path -> stable asset identity/hash -> later S3/scaler delivery URL. The asset manifest should be generated/maintained by the crawler or migration tooling rather than manually by page authors. Once persistent delivery URLs exist, a controlled bulk rewrite should update known temporary asset URLs across migrated Contentful drafts/pages and verify that no old AEM asset URLs remain.

This direction is confirmed in Profile but is not yet assumed to be implemented in the technical LP Builder package. `migration-mode.md` and migration acceptance tests still need to be updated and validated before this becomes the live GPT baseline.

## Dominik's Role

Dominik owns product direction, strategy, prioritization and quality for the Landing Page Builder. He owns the migration-focused Contentful GPT and decides which reusable rules, modules, composition patterns and special modes enter the maintained package.

Codex is the preferred implementation surface for local contracts, libraries, runtime/Bridge work, tests, source analysis and controlled rebuild preparation. The GPT is the Contentful interaction surface for page creation/update and later colleague-facing authoring.

Dominik should remain focused on reusable Builder capability and quality guardrails rather than becoming the default page-migration operator.

## Confirmed Direction and Decisions

- Text capability direction: users should be able to remove an existing module headline, switch it to another supported headline size/variant, and place standalone headlines and body text freely around modules. The Module Library should therefore show every supported headline style by name and both supported body-text sizes. Lists should be permitted wherever body text is permitted. Exact placement/editing rules for text and lists remain to be defined before implementation.

- Initial user-facing element scope for the Module Library: Rounded Buttons, Mobile Full Width Button, Chevron Link, Colors & Surfaces (Accent Colors, Neutrals, Text), Lists, and Icons. Icons only need representative 24 px and 48 px examples plus a note that the actual icon is selected in Frontify and passed to the LP Builder by icon name. Text/headline elements belong in the library as well, but their exact presentation/variant model is still open.

- Treat the LP Builder Module Library as the user-facing capability catalogue: include full modules plus selected reusable elements that users can intentionally place or configure; exclude technical layout primitives such as spacing.
- The current Contentful Module Library page is a stored `lpBuilder` HTML snapshot in `htmlSourcePayload`, not a dynamic sync from the repository. Important distinction: `gpt-package/component-library.html` is the machine-facing capability library used by the LP Builder/GPT, not the visual user-facing Module Library page. The visual user-facing library is a separate HTML artifact/page and must not be edited by changing the GPT package capability source unless that is intentionally required.
- Codex confirmed that the lost capability was generic complete-HTML replacement, not a Library-specific exception. The package now defines an explicit `FULL_HTML_REPLACEMENT` path for complete user-supplied HTML on a concrete Contentful entry. This path bypasses normal Builder composition validation, preserves allowed page-specific CSS, keeps read-before-update and draft-only safety, and does not auto-publish. Standard Builder updates still require Component Library + Building Policy; `LOCKED_IMPORT` remains the stricter byte-exact Exact-Rebuild path. Local validation passes 52/52 tests.

- Keep AEM and Contentful as separate technical concepts; AEM is a source/reference, not the Contentful runtime path.
- Use `component-library.html` as the productive capability SSOT.
- Use `building-policy.md` as the canonical composition/editing/spacing policy.
- Use one `migration-mode.md` for all migration-specific GPT behavior; do not keep a competing standalone Source Duplicate file.
- Keep exactly two migration cases: `LOCKED_IMPORT` and `CRAWL_REBUILD`.
- Use the existing `callout--base` as the basis for visible migration placeholders rather than creating a new normal module or runtime dependency.
- Do not reintroduce ACTIVE/whitelist module states.
- Keep Mukhammadjon's Action schema unchanged as the read-only SSOT.
- Keep one central Bridge CSS and one trusted Runtime JS entry point owned by the renderer.
- Do not put Bridge/Runtime assets into stored GPT page HTML.
- Never publish without explicit approval.
- Use stable `entryId` as the preferred lifecycle identifier with slug lookup as fallback.
- Treat the three-prompt regression suite as the baseline acceptance check after meaningful GPT package changes.

## Risks and Open Questions

- The migration-mode refactor passes local tests but still needs real Custom GPT acceptance after the changed package is uploaded.
- Crawl Rebuild and its migration-placeholder behavior need dedicated real-page tests in addition to the generic three-prompt regression suite.
- Large `getLpBuilderPage` read-back at migration-scale payload size still needs explicit retesting.
- The B2B contact form remains a separate platform/migration dependency; pages can now represent this gap explicitly through the migration placeholder until the real capability exists.
- Future asset delivery depends on the final S3/storage setup, although the migration identity model is already clear.

## Next Steps

1. Apply the updated GPT package with `migration-mode.md` to the actual Custom GPT and rerun the documented three-prompt regression suite.
2. Add/execute migration-specific acceptance cases for `LOCKED_IMPORT`, a normal single-page `CRAWL_REBUILD`, a Crawl Rebuild with at least one migration placeholder, and a multi-page Crawl Rebuild.
3. Retest large `getLpBuilderPage` read-back at roughly the same scale as the validated ~50 KB write case.
4. Use the emerging Migration Crawler as the standardized source-intake layer for future AEM migration work once its MVP is available.
5. Keep final asset delivery AEM-independent by resolving migrated assets to the new persistent storage URL before publish readiness.

## Last Confirmed

2026-09-21: After re-entering the GPT Action client ID and secret, a fresh one-prompt end-to-end smoke test passed CREATE, draft verification and the complete lifecycle through final deletion without technical error. A separate combined EDIT regression test then also passed in one update mutation, covering text and CTA changes, module insertion/replacement/reordering, slug and Main Title changes, spacing recalculation, explicit-spacing integrity, and Bridge/Runtime exclusion. This confirms that Action authentication, the core lifecycle path, and the complex full-page update path are currently functional again.

2026-09-17: The local GPT package implemented the new unified Migration Mode. `migration-mode.md` replaces `source-duplicate-mode.md` and defines exactly `LOCKED_IMPORT` and `CRAWL_REBUILD`. Crawl Rebuild supports one or more source pages, uses Component Library + Building Policy, reports per-page migration status/gaps and uses an existing `callout--base` structure with `data-lpb-migration-*` markers for unsupported source areas. No new runtime, Bridge rule, user-facing module or Action was introduced; the OpenAPI SSOT is unchanged and both schema copies still have the same SHA-256. Local package/runtime validation passed 50/50. The changed package has not yet been revalidated in the live Custom GPT, so the prior green GPT acceptance run remains the last real GPT baseline until the suite is rerun.