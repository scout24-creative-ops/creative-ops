# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The existing production Landing Page Builder remains the operational Custom GPT used by Marketing teams for AEM-oriented landing-page generation.

In parallel, Dominik now owns a separate Contentful-enabled duplicate used for migration and future Builder development. The Contentful flow has been validated end to end: OAuth, draft creation, preview, update, explicit publish and production URL all work.

The migration-focused duplicate is intentionally being rebuilt from a smaller product core instead of inheriting the complete old Builder behavior. v0.1 is a controlled module composer rather than a fully autonomous migration agent: the user supplies real content and an intended module sequence; the GPT uses approved module structures, preserves markup/classes and does not invent content or automatically select, reorder or substitute modules.

The full existing component library remains available as reference, but v0.1 uses a provisional active whitelist of eight modules: `hero-split`, `teaser-2col`, `teaser-3col`, `benefits-2col`, `benefits-3col`, `accordion`, `callout--base` and `checkmark-list`. This is a development boundary, not the final module set for the Anwenderhandbuch migration.

A key technical direction is now confirmed: `is24-cms-frontend` globally loads CoreCSS/COSMA, and many of those classes can be used directly on static HTML in `htmlSource`. The new library should therefore be rebuilt around native CoreCSS/COSMA primitives wherever possible instead of carrying forward the old LP Builder runtime CSS as its styling foundation.

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
- Will evolve based on real migration page-group requirements rather than trying to generalize the full migration system upfront.

## Long-term Product Direction

The Landing Page Builder should become a controlled generative layer rather than remain permanently constrained to a fixed component catalogue. Marketing should be able to create pages and later new patterns within brand, design-system, accessibility, SEO and technical guardrails.

The current implementation direction is **CoreCSS/COSMA first**. Static HTML should reuse the existing Scout24 design system wherever possible. Custom LP Builder CSS should be a thin bridge for module-specific layout, media or surface behavior that cannot be expressed through native classes, and should use existing COSMA tokens rather than introduce a parallel design system.

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
- Verified native families include typography, spacing, responsive grid, standard buttons, several utilities and COSMA icon-font classes.
- Do not make the old `runtime/core/*` CSS the styling basis of the new Contentful library; preserve it for existing AEM pages.
- Build a minimal LP Builder CSS bridge only after browser testing proves what is missing.
- The existing LPBuilder frontend already provides an HTML-specific Accordion interaction hook, so Accordion JavaScript should not be recreated in the GPT/library.

## Important Developments

- 2026-08-31: Dominik completed setup and validated the full Contentful flow in his duplicate, including real publishing.
- 2026-08-31: The migration-focused Builder was reset to a simple module-composer v0.1 model.
- 2026-08-31: Eight modules were selected as the active v0.1 whitelist while the full library remains available as reference.
- 2026-09-01: CoreCSS/COSMA-first feasibility for static HTML was verified directly against `is24-cms-frontend` and live rendering.
- 2026-09-01: The next proof was defined as a dedicated COSMA/CoreCSS HTML playground before module refactoring begins.

## Risks and Open Questions

- Which module-specific structures still require custom CSS after the native HTML playground test.
- How the final migration module library should expand once Peter's Anwenderhandbuch designs expose missing patterns.
- Exact long-term read/update lookup contract for Contentful pages after one fresh-chat lookup failure.
- Final pre-publish validation and link-check split between Builder and platform integration.

## Next Steps

1. Build and render the COSMA/CoreCSS HTML playground on the existing Contentful smoke-test page.
2. Classify primitives into native, hook/structure-dependent or custom-bridge-required.
3. Refactor only the eight active v0.1 modules onto that verified contract.
4. Add new migration-specific modules later from real Anwenderhandbuch design requirements.
5. Generalize migration rules only after the first end-to-end pilot proves what actually repeats.

## Last Confirmed

2026-09-01: the Contentful/migration duplicate is working through production publishing; v0.1 is intentionally small and CoreCSS/COSMA-first, with the next step being a native HTML playground before any new CSS bridge is created.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md), [Contentful Migration](contentful-migration.md) and [Design Library and Builder Library](design-library.md).
