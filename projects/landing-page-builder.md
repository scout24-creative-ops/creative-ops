# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The production/AEM Builder remains operational, while `LP Builder – Contentful` is the maintained Contentful-enabled Builder for migration and future product development.

The current Custom GPT baseline is clean and fully regression-tested as of 2026-09-17. A reusable three-prompt acceptance suite now validates Blueprint creation, complex single-update editing and the full publish/unpublish/archive/unarchive/delete lifecycle. The current run passed without retry and without Action, JSON, serialization, auth or validation errors.

The previously blocking renderer issue is resolved: the shared Bridge CSS now loads centrally again. The Action flow is also stable in the current tested setup after the updated OpenAI schema configuration. Large read-back at roughly 50 KB remains a separate capability that should still be retested explicitly; the successful regression page itself was smaller.

The reusable regression suite is maintained in [landing-page-builder-regression-suite.md](landing-page-builder-regression-suite.md).

## Current GPT Package

Instructions:

- `main-instructions.md`

Knowledge:

- `component-library.html`
- `building-policy.md`
- `contentful-integration.md`
- `source-duplicate-mode.md`
- `cosma-icons-static.md`

Action schema:

- Mukhammadjon's current OpenAPI schema remains the read-only SSOT and should not be modified as part of GPT package work.

The package deliberately separates user capabilities from build policy:

- `component-library.html` is the canonical user-capability source.
- `building-policy.md` defines how pages are composed, edited and spaced.
- `contentful-integration.md` defines the current Action/read/write terminology and integration behavior.
- `source-duplicate-mode.md` remains the narrow exception for controlled source duplication/rebuild.
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

Nine module-specific policies in the Building Policy are intentionally still marked `pending`. Pending does not block those modules; canonical Component Library markup plus the global Building Policy applies until a dedicated policy exists.

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

## Source Duplicate / Controlled Rebuild

The standard Builder remains module-first, but bespoke legacy pages can use the controlled source-driven path when existing modules cannot reproduce the source faithfully.

For those cases:

`source fidelity -> source structure/CSS -> page-specific HTML/CSS -> existing modules only where they are a true fit`

Prepared Contentful-ready HTML should be treated as locked technical input during exact import rather than recomposed by the GPT.

## Migration Asset Direction

Existing already-built migration drafts can still contain temporary AEM/static asset URLs. That is transitional state, not the final target.

For the reusable migration path, asset identity and migration should be handled before final delivery: source AEM URL -> stable asset ID/hash -> persistent S3/delivery URL. Final Contentful HTML should use the new persistent URL. Asset IDs remain useful in the migration manifest for traceability and deduplication, not as a replacement for a real delivery URL in final HTML.

## Dominik's Role

Dominik owns product direction, strategy, prioritization and quality for the Landing Page Builder. He owns the migration-focused Contentful GPT and decides which reusable rules, modules, composition patterns and special modes enter the maintained package.

Codex is the preferred implementation surface for local contracts, libraries, runtime/Bridge work, tests, source analysis and controlled rebuild preparation. The GPT is the Contentful interaction surface for page creation/update and later colleague-facing authoring.

Dominik should remain focused on reusable Builder capability and quality guardrails rather than becoming the default page-migration operator.

## Confirmed Direction and Decisions

- Keep AEM and Contentful as separate technical concepts; AEM is a source/reference, not the Contentful runtime path.
- Use `component-library.html` as the productive capability SSOT.
- Use `building-policy.md` as the canonical composition/editing/spacing policy.
- Do not reintroduce ACTIVE/whitelist module states.
- Keep Mukhammadjon's Action schema unchanged as the read-only SSOT.
- Keep one central Bridge CSS and one trusted Runtime JS entry point owned by the renderer.
- Do not put Bridge/Runtime assets into stored GPT page HTML.
- Use controlled source-driven rebuilds for bespoke legacy pages instead of forcing every page into generic modules.
- Never publish without explicit approval.
- Use stable `entryId` as the preferred lifecycle identifier with slug lookup as fallback.
- Treat the three-prompt regression suite as the baseline acceptance check after meaningful GPT package changes.
- Freeze the current package unless a concrete new requirement or regression justifies another change.

## Risks and Open Questions

- Large `getLpBuilderPage` read-back at migration-scale payload size still needs explicit retesting.
- Complex migration-specific modules still need their own real-page Preview validation where not already completed.
- The B2B contact form remains a separate platform/migration dependency.
- Future asset delivery depends on the final S3/storage setup, although the migration identity model is already clear.

## Next Steps

1. Keep the current GPT baseline stable and rerun the documented regression suite after meaningful package changes.
2. Retest large `getLpBuilderPage` read-back at roughly the same scale as the validated ~50 KB write case.
3. Continue promoting only genuinely recurring migration structures into reusable Builder capabilities.
4. Use the emerging Migration Crawler as the standardized source-intake layer for future AEM migration work once its MVP is available.
5. Keep final asset delivery AEM-independent by resolving migrated assets to the new persistent storage URL before publish readiness.

## Last Confirmed

2026-09-17: The rebuilt Custom GPT package passed the complete three-prompt regression suite without retry. CREATE, complex combined EDIT and the full lifecycle all succeeded; canonical Component Library retrieval, spacing invariants, exactly one `lpb-explicit-spacing` root and renderer-owned Bridge/Runtime exclusion all passed. The shared Bridge CSS is centrally loaded again and the Action flow was stable during the acceptance run. The current package is considered a green baseline and should remain frozen unless a concrete need emerges.