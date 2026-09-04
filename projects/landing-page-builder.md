# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The existing production Landing Page Builder remains the operational Custom GPT for the established AEM-oriented workflow.

In parallel, Dominik owns `LP Builder – Contentful`, a separate Contentful-enabled Builder used for migration and future product development. The Contentful flow is validated end to end: OAuth, draft creation, preview, update, explicit publish and production URL all work.

The current Contentful Builder architecture has now moved beyond the early eight-module v0.1 whitelist. The active catalogue contains 25 module contracts, including two migration-specific Handbook modules: `handbook-category-card` and `handbook-step-media`.

The product model is deliberately layered and simple:

1. **GPT Instructions** define global behavior, including draft-first operation, template override rules and `GAP / ASK` behavior.
2. **Foundation / Runtime** files define technical guardrails.
3. **`module-contracts.md`** defines allowed module structures and variants.
4. **`component-library.html`** provides valid implementation examples.
5. **Composition files** such as `b2b-handbook-composition.md` define default page-level arrangements only.
6. **Explicit user requests** may alter a default composition or add other ACTIVE modules; contracts remain binding.

A previous fixed Hub/Guide HTML-template experiment with skeletons, slots and repeaters was abandoned because it made GPT output brittle and duplicated module logic. The current rule is: modules are the technical source of truth; compositions describe defaults, not rigid templates.

The Custom GPT Knowledge set is intentionally compact and currently consists of:

- `module-contracts.md`
- `component-library.html`
- `foundation-rules.md`
- `runtime-rules.md`
- `open-gaps.md`
- `contentful-integration.md`
- `cosma-icons-static.md`
- `b2b-handbook-composition.md`

`gpt-instructions-v0.1.md` belongs in the GPT Instructions field rather than duplicated as Knowledge.

The local `LP Builder – Contentful` workspace was audited and cleaned up. Historical template, inventory, test and gap-analysis documents were moved out of the active package into `archive/historical-not-active/`. The active project no longer contains Handbook skeleton/slot logic, the removed `media-left` Handbook variant or a forced heading for numbered Handbook steps.

## Foundation and Rendering Model

The implementation remains **CoreCSS/COSMA first**. Static `htmlSource` reuses verified native typography, spacing, responsive grid, icons and other design-system primitives wherever possible. LP Builder-specific CSS exists only for verified gaps and module-specific behavior.

The central LP Builder bridge stylesheet remains the shared runtime layer for those gaps. It is not duplicated per module.

A key runtime discovery from the Handbook pilot is that the Contentful frontend does not currently inject the LP Builder bridge automatically into these pages. Correct module markup therefore did not reliably receive bridge styling until the public bridge stylesheet was linked explicitly. For the current pilot, GPT Instructions require the public bridge `<link>` exactly once at the beginning of every newly created or fully recomposed LP Builder page `htmlSource`.

This is a pragmatic pilot rule, not a claim that page-level bridge loading is the ideal long-term architecture. A centralized frontend load can still replace it later.

## Handbook-specific Module Proof

### `handbook-category-card`

Used for the B2B Anwenderhandbuch hub. It provides a simple category card with heading, optional description and one or more normal text links. The responsive page grid is composed outside the module through Foundation grid classes.

The current Handbook hub draft is visually validated and remains unpublished.

### `handbook-step-media`

Used for detail-page text/screenshot sections. The current validated contract supports exactly three useful variants:

- Number + Body + Media
- Heading + Body + Media
- Body + Media

For all variants:

- Desktop/Lap: text always left, media always right
- Palm: text before media
- no `media-left` / alternating variant
- media uses `lpb-image--responsive`
- no card/border/surface/radius treatment around screenshots

For numbered steps, the number sits in the existing circle directly beside body copy; no separate heading is required or invented. Repeated step/media sections use the verified Foundation separation `border-top padding-top-xl margin-top-xl`.

The module was validated independently on `/dev-lp-builder-contentful-v01-test` before being used as the basis for Handbook detail composition.

## Page Composition Model

`b2b-handbook-composition.md` is the current example of the new composition approach.

The default Handbook detail page is:

Foundation top spacing → H1 → Intro → source-based content modules → outlined `Zum Anwender-Handbuch` button → Foundation bottom spacing.

This composition is intentionally not exhaustive. If a user explicitly requests another ACTIVE module, such as Video, the GPT may add it at the requested position as long as the module contract is satisfied. A default composition is not a refusal boundary.

If the requested content has no matching ACTIVE module, or a user request conflicts with a binding module/Foundation/Runtime contract, the GPT should return `GAP / ASK` instead of improvising new markup, CSS or module variants.

## Preview and Reference Targets

- Contentful test surface: `/dev-lp-builder-contentful-v01-test`
- Canonical Contentful Design Library: `/lp-builder-contentful-design-library`

The test surface is disposable and used for isolated module/bridge/composition checks. The Design Library is the durable reviewed reference and should only be changed deliberately.

## Dominik's Role

Dominik initiated and developed the Landing Page Builder and retains product, strategy, prioritization and quality responsibility. He owns the Contentful/migration-focused duplicate and decides which reusable module and composition rules enter the maintained GPT package.

Codex is the preferred technical implementation surface for local module, contract, library, bridge and runtime-test changes. Claude Design remains useful for visual exploration/reference, while the GPT composes validated modules and writes Contentful drafts.

## Key Stakeholders and Users

- B2B Marketing
- Seeker Product Marketing
- Homeowner Product Marketing
- Other Marketing teams using the current Builder
- UX and SEO for generation guardrails
- Mukhammadjon Kayumov for Contentful Action/renderer behavior
- Beatrice and Core/Contentful teams for platform coordination
- Daniel Herold for broader Core/Builders Platform direction
- Peter and Ulrike for the first Handbook migration pilot

## Confirmed Direction and Decisions

- Keep the production/AEM Builder operational while `LP Builder – Contentful` evolves separately.
- Use CoreCSS/COSMA first; use one central bridge only for verified static-HTML gaps.
- Module contracts are the technical source of truth for valid modules.
- Component Library examples support contracts but do not override them.
- Composition files define default page arrangements, not rigid HTML templates.
- Explicit user requests may extend or alter a default composition using ACTIVE modules.
- Never invent new modules, CSS variants or markup to satisfy a composition request.
- Use `GAP / ASK` when no valid module exists or a request collides with a binding contract.
- Keep Contentful draft-first and never publish without explicit instruction.
- Require the bridge stylesheet once at the start of newly created/fully recomposed pilot pages until central frontend loading is available.
- Keep the Contentful test page separate from the canonical Design Library.
- Keep historical template/skeleton/slot approaches archived and out of GPT Knowledge.
- Use Codex for technical module implementation and contract synchronization.
- Validate new/changed modules on the general test page before relying on them in a page composition.

## Important Developments

- 2026-08-31: Contentful-enabled duplicate validated end to end.
- 2026-09-01: CoreCSS/COSMA-first static HTML direction and central bridge approach validated.
- 2026-09-03: Broad module catalogue reached 23 ACTIVE module contracts.
- 2026-09-04: `handbook-category-card` and `handbook-step-media` added, bringing the active catalogue to 25 modules.
- 2026-09-04: The Handbook hub and detail composition were validated through real Contentful drafts and isolated test-page checks.
- 2026-09-04: Fixed Hub/Guide templates, slots and skeletons were retired in favor of module contracts plus lightweight composition defaults.
- 2026-09-04: Global template behavior was added to GPT Instructions: user-requested deviations are allowed, contracts remain binding, unresolved capability conflicts become `GAP / ASK`.
- 2026-09-04: Local project audit archived obsolete template/inventory/test documents and reduced the active GPT package to the maintained sources.

## Risks and Open Questions

- Bridge loading is still page-level for the pilot rather than centrally owned by the frontend.
- Counter, Card Carousel, Sticky Footer and Video retain runtime/frontend limitations outside the static Handbook core flow.
- Asset availability and alt-text completeness remain migration concerns rather than module-contract problems.
- The active module catalogue should continue to grow only from real reusable patterns, not speculative variants.

## Next Steps

1. Use the validated Handbook composition on additional real migration-ready detail pages.
2. When a page fails to map cleanly, first determine whether the issue is source data, asset availability or a genuine reusable module gap.
3. Implement only proven reusable module gaps in Codex, then refresh `module-contracts.md` and `component-library.html` in the GPT.
4. Keep testing changed modules independently on the Contentful test page before broader use.
5. Bundle remaining true frontend/runtime questions only after they are isolated from content/composition issues.

## Last Confirmed

2026-09-04: the Contentful Builder has a stable layered architecture, 25 ACTIVE modules, a validated Handbook hub/detail composition model and a cleaned active GPT package. The immediate product proof is now repeated real migration, not more architecture redesign.