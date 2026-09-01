# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The existing production Landing Page Builder remains the operational Custom GPT used by Marketing teams for AEM-oriented landing-page generation.

In parallel, Dominik now owns a separate Contentful-enabled duplicate used for migration and future Builder development. The Contentful flow has been validated end to end: OAuth, draft creation, preview, update, explicit publish and production URL all work.

The migration-focused duplicate is intentionally being rebuilt from a smaller product core instead of inheriting the complete old Builder behavior. v0.1 is a controlled module composer rather than a fully autonomous migration agent: the user supplies real content and an intended module sequence; the GPT uses approved module structures, preserves markup/classes and does not invent content or automatically select, reorder or substitute modules.

The full existing component library remains available as reference, but v0.1 uses a provisional active whitelist of eight modules: `hero-split`, `teaser-2col`, `teaser-3col`, `benefits-2col`, `benefits-3col`, `accordion`, `callout--base` and `checkmark-list`. This is a development boundary, not the final module set for the Anwenderhandbuch migration.

The CoreCSS/COSMA-first direction is now validated both in source and in a real Contentful runtime playground. Static `htmlSource` can directly use the verified typography scale, spacing/grid utilities, standard buttons, COSMA color/border/radius/spacing tokens, selected utilities, static icon-font classes, links, lists and raw media behavior. The playground serves as a reusable design-system reference for future module development rather than continuing module-by-module guesswork.

`ButtonRounded` is an important exception: the native Contentful CTA docs render the React `ButtonRounded` component through the normal component resolver, and no stable static DOM/CSS-class contract is exposed from `is24-cms-frontend`. The preferred technical direction is therefore a small semantic LP Builder renderer primitive that instantiates the native component rather than copying package-internal markup or rebuilding its variants in LP Builder CSS.

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

The current implementation direction is **CoreCSS/COSMA first**. Static HTML should reuse the existing Scout24 design system wherever possible. Custom LP Builder CSS should be a thin bridge for module-specific layout, media or surface behavior that cannot be expressed through native classes, and should use existing COSMA tokens rather than introduce a parallel design system.

Where a design-system capability is exposed only as a React component and no supported static contract exists, prefer a small renderer-level LP Builder primitive over copying internal DOM or recreating the component styling. `ButtonRounded` is the first confirmed case for this pattern.

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
- Verified native families now include typography, spacing, responsive grid, standard buttons, COSMA design tokens, several utilities, icon-font classes, links, lists and raw media behavior.
- Use the validated CoreCSS/COSMA playground as the technical reference for future module work.
- Do not make the old `runtime/core/*` CSS the styling basis of the new Contentful library; preserve it for existing AEM pages.
- Build a minimal LP Builder CSS bridge only after runtime testing proves a real static-HTML gap.
- The existing LPBuilder frontend already provides an HTML-specific Accordion interaction hook, so Accordion JavaScript should not be recreated in the GPT/library.
- Do not copy `ButtonRounded` package-internal DOM into static `htmlSource`; no stable static contract has been verified.
- Rounded buttons are mandatory for the new Contentful/migration Builder baseline. The deprecated classic `button-primary` / `button-secondary` visual treatment must not be used as the launch-state CTA solution merely because it is easier to render from static HTML.
- For component-only design-system primitives such as `ButtonRounded`, prefer a small semantic renderer contract that instantiates the native React component.

## Important Developments

- 2026-08-31: Dominik completed setup and validated the full Contentful flow in his duplicate, including real publishing.
- 2026-08-31: The migration-focused Builder was reset to a simple module-composer v0.1 model.
- 2026-08-31: Eight modules were selected as the active v0.1 whitelist while the full library remains available as reference.
- 2026-09-01: CoreCSS/COSMA-first feasibility for static HTML was verified directly against `is24-cms-frontend` and live rendering.
- 2026-09-01: The v0.1 modules were refactored onto the native CoreCSS/COSMA baseline and validated in a real desktop/mobile Contentful preview.
- 2026-09-01: A dedicated CoreCSS/COSMA reference playground successfully rendered typography, tokens, spacing, grid, buttons, utilities, icons, links, lists and raw media through static `htmlSource`.
- 2026-09-01: Codex gained read-only GitHub MCP access to `Scout24/is24-cms-frontend`, removing the previous local-repository verification blocker.
- 2026-09-01: `ButtonRounded` was traced as a React/CoreCSS component without a verified static DOM contract; a semantic renderer primitive is the preferred architecture.
- 2026-09-01: Dominik confirmed that rounded buttons are a required product baseline for the new Builder; falling back to the deprecated classic button visual style is not acceptable for launch.

## Risks and Open Questions

- Which remaining module-specific structures genuinely require custom CSS after the validated native playground baseline.
- Exact semantic contract and implementation ownership for the required LP Builder `ButtonRounded` renderer primitive, including icons and possible form-button use cases.
- Accordion visual parity with the native Contentful component remains open even though interaction is working.
- How the final migration module library should expand once Peter's Anwenderhandbuch designs expose missing patterns.
- Exact long-term read/update lookup contract for Contentful pages after one fresh-chat lookup failure.
- Final pre-publish validation and link-check split between Builder and platform integration.

## Next Steps

1. Define the minimal semantic contract for a native `ButtonRounded` renderer primitive and align the required frontend implementation with the Core Frontend owner.
2. Use the validated CoreCSS/COSMA playground as the reference when expanding or refining the Contentful module library.
3. Refine remaining module bridges only when a real migration design or runtime test demonstrates a gap.
4. Add new migration-specific modules from real Anwenderhandbuch design requirements.
5. Generalize migration rules only after the first end-to-end pilot proves what actually repeats.

## Last Confirmed

2026-09-01: the static CoreCSS/COSMA contract is validated through a real Contentful playground and can serve as the design-system baseline for future module development. Rounded CTA support is mandatory for the Contentful/migration Builder baseline; a semantic renderer primitive for native `ButtonRounded` is the preferred implementation path rather than shipping the old classic button design.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md), [Contentful Migration](contentful-migration.md) and [Design Library and Builder Library](design-library.md).
