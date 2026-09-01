# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The existing production Landing Page Builder remains the operational Custom GPT used by Marketing teams for AEM-oriented landing-page generation.

In parallel, Dominik now owns a separate Contentful-enabled duplicate used for migration and future Builder development. The Contentful flow has been validated end to end: OAuth, draft creation, preview, update, explicit publish and production URL all work.

The migration-focused duplicate is intentionally being rebuilt from a smaller product core instead of inheriting the complete old Builder behavior. v0.1 is a controlled module composer rather than a fully autonomous migration agent: the user supplies real content and an intended module sequence; the GPT uses approved module structures, preserves markup/classes and does not invent content or automatically select, reorder or substitute modules.

The full existing component library remains available as reference, but v0.1 uses a provisional active whitelist of eight modules: `hero-split`, `teaser-2col`, `teaser-3col`, `benefits-2col`, `benefits-3col`, `accordion`, `callout--base` and `checkmark-list`. This is a development boundary, not the final module set for the Anwenderhandbuch migration.

The CoreCSS/COSMA-first direction is now validated both in source and in a real Contentful runtime playground. Static `htmlSource` can directly use the verified typography scale, spacing/grid utilities, COSMA color/border/radius/spacing tokens, selected utilities, static icon-font classes, links, lists and raw media behavior. The playground serves as a reusable design-system reference for future module development rather than continuing module-by-module guesswork.

For gaps that static CoreCSS/COSMA does not cover, the Contentful Builder will use one small central LP Builder bridge stylesheet rather than CSS per module. Rounded buttons are the first confirmed bridge use case. Their existing legacy implementation was reused as the starting point and moved to new namespaced classes (`lpb-button` plus four v0.1 variants) so future global bridge changes affect only migrated/new Contentful Builder markup.

The bridge is now published through the existing GitHub Pages runtime under `runtime/contentful/lpbuilder-bridge.css`. A real Contentful draft preview confirmed that the external stylesheet can be loaded from `htmlSource` for testing and that all four namespaced rounded-button variants render successfully. This validates the static bridge approach technically. The remaining button work is visual parity: current padding/overall sizing looks too generous and hover colors do not yet match the desired current COSMA/native appearance closely enough.

## Product Versions and Boundaries

### Production Custom GPT

- Current operational Builder for Marketing.
- Uses the broader existing approved module catalogue.
- Still supports the established AEM workflow.
- Remains unchanged while the Contentful/migration version is developed separately.

### Contentful / Migration Builder

- Dominik's duplicated Contentful-enabled GPT.
- Uses GPT Actions for read, draft creation, update and explicit publish.
- End-to-end publishing flow is validated.
- v0.1 uses the eight-module whitelist and controlled composition behavior.
- Rounded CTA support is a required part of the v0.1 baseline; the Contentful/migration Builder must not launch using the deprecated classic button designs as its primary CTA treatment.
- Will evolve based on real migration page-group requirements rather than trying to generalize the full migration system upfront.

## Long-term Product Direction

The Landing Page Builder should become a controlled generative layer rather than remain permanently constrained to a fixed component catalogue. Marketing should be able to create pages and later new patterns within brand, design-system, accessibility, SEO and technical guardrails.

The current implementation direction is **CoreCSS/COSMA first**. Static HTML should reuse the existing Scout24 design system wherever possible. A single central LP Builder bridge stylesheet should cover only the real delta that static HTML cannot express through native classes, and should use existing COSMA tokens rather than introduce a parallel design system.

Do not create separate CSS systems per module. Shared primitives such as buttons should use stable, Contentful-specific namespaced classes so later bridge-CSS changes automatically affect all intended LPBuilder pages without changing unrelated legacy Contentful/AEM entries.

A native renderer hook for component-only primitives such as `ButtonRounded` remains a possible later improvement, but it is not the first implementation step. The team should first build and test the required modules/primitives pragmatically, then collect the remaining frontend-only gaps and align those with Core Frontend in one bundle.

## Dominik's Role

Dominik initiated and developed the Landing Page Builder and retains product, strategy, prioritization and quality responsibility. He now also owns the migration-focused Contentful duplicate and the evolution of its module/guardrail model.

## Key Stakeholders and Users

- B2B Marketing
- Seeker Product Marketing
- Homeowner Product Marketing
- Other Marketing teams using the current Builder
- UX and SEO for future generation guardrails
- Mukhammadjon Kayumov for the Contentful Action/renderer contract
- Beatrice and the Contentful/Core Frontend teams for platform coordination
- Daniel Herold for broader Core/Builders Platform direction
- Peter and Ulrike for the first migration pilot workflow

## Confirmed Direction and Decisions

- Keep the production Builder operational while the Contentful/migration version evolves separately.
- The Contentful duplicate is now Dominik's working migration Builder.
- v0.1 uses a small active module whitelist instead of physically deleting the rest of the library.
- Do not automatically substitute non-whitelisted modules.
- Do not perfect a universal migration mode before the first real pilot.
- Use native CoreCSS/COSMA primitives wherever they work for static HTML.
- Verified native families now include typography, spacing, responsive grid, COSMA design tokens, several utilities, icon-font classes, links, lists and raw media behavior.
- Use the validated CoreCSS/COSMA playground as the technical reference for future module work.
- Do not make the old `runtime/core/*` CSS the styling basis of the new Contentful library; preserve it for existing AEM/pages that already depend on it.
- Maintain one small central LP Builder bridge stylesheet for verified static-HTML gaps; do not create CSS per module.
- Deliver the bridge through a separate Contentful-specific runtime path.
- Do not reuse generic legacy selectors for the new bridge. Use new namespaced selectors so existing Contentful `ai-button` instances remain unchanged unless explicitly migrated.
- Rounded buttons are the first validated bridge primitive. The bridge works in a real Contentful preview, so the remaining task is visual tuning rather than architectural proof.
- Rounded buttons are mandatory for the new Contentful/migration Builder baseline. The deprecated classic `button-primary` / `button-secondary` visual treatment must not be used as the launch-state CTA solution.
- Shared button classes must remain globally controllable within the new bridge contract so one bridge-CSS change updates all migrated/current v0.1 button instances.
- The existing LPBuilder frontend already provides an HTML-specific Accordion interaction hook, so Accordion JavaScript should not be recreated in the GPT/library.
- Build and test the module set first; collect any remaining renderer/component-only gaps and discuss them with Core Frontend together instead of escalating one-by-one.

## Important Developments

- 2026-08-31: Dominik completed setup and validated the full Contentful flow in his duplicate, including real publishing.
- 2026-08-31: The migration-focused Builder was reset to a simple module-composer v0.1 model.
- 2026-08-31: Eight modules were selected as the active v0.1 whitelist while the full library remains available as reference.
- 2026-09-01: CoreCSS/COSMA-first feasibility for static HTML was verified directly against `is24-cms-frontend` and live rendering.
- 2026-09-01: The v0.1 modules were refactored onto the native CoreCSS/COSMA baseline and validated in a real desktop/mobile Contentful preview.
- 2026-09-01: A dedicated CoreCSS/COSMA reference playground successfully rendered typography, tokens, spacing, grid, utilities, icons, links, lists and raw media through static `htmlSource`.
- 2026-09-01: Codex gained read-only GitHub MCP access to `Scout24/is24-cms-frontend`, removing the previous local-repository verification blocker.
- 2026-09-01: `ButtonRounded` was traced as a React/CoreCSS component without a verified static DOM contract.
- 2026-09-01: Dominik confirmed that rounded buttons are a required product baseline for the new Builder; falling back to the deprecated classic button visual style is not acceptable for launch.
- 2026-09-01: The existing legacy rounded-button implementation was audited and retained as a reusable starting point rather than rebuilding button styling from scratch.
- 2026-09-01: Dominik selected a pragmatic central CSS-bridge approach for static gaps and decided to finish broader module testing before bundling any remaining Core Frontend questions.
- 2026-09-01: The bridge was namespaced, published under the new Contentful runtime path and successfully loaded in the real `dev-lp-builder-v01-test` Contentful draft. All four v0.1 button variants render; padding/size and hover-color parity still need refinement.

## Risks and Open Questions

- Which remaining module-specific structures genuinely require the central bridge after the validated native playground baseline.
- Which gaps ultimately cannot be solved cleanly through static HTML + central bridge CSS and therefore require renderer/frontend support.
- Button visual parity still needs tuning against current Contentful/COSMA reference, especially padding/overall dimensions and hover colors.
- The bridge still needs one small Core Frontend change to add its URL to the central LPBuilder stylesheet list for final production use; this can be bundled with other true frontend gaps after the module pass.
- Accordion visual parity with the native Contentful component remains open even though interaction is working.
- How the final migration module library should expand once Peter's Anwenderhandbuch designs expose missing patterns.
- Exact long-term read/update lookup contract for Contentful pages after one fresh-chat lookup failure.
- Final pre-publish validation and link-check split between Builder and platform integration.

## Next Steps

1. Tune the four rounded-button bridge variants against the current native/Contentful visual reference, focusing on padding/size and hover colors while retaining COSMA-token usage where verified.
2. Re-test the updated bridge in the existing Contentful draft without publishing.
3. Continue building and testing the remaining v0.1 modules against the verified CoreCSS/COSMA reference; classify each gap as native, bridge-solvable, or frontend/renderer-required.
4. After the module pass, consolidate the true frontend-only needs, including centrally loading the new bridge stylesheet, and align them with Mukhammadjon/Core Frontend in one discussion.
5. Add new migration-specific modules from real Anwenderhandbuch design requirements.

## Last Confirmed

2026-09-01: The namespaced Contentful LP Builder bridge is published and successfully renders all four rounded-button variants in a real Contentful preview. The static bridge architecture is therefore technically validated; remaining button work is limited to visual parity tuning before moving on.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md), [Contentful Migration](contentful-migration.md) and [Design Library and Builder Library](design-library.md).
