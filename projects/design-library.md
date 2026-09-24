# Design Library and Builder Library

## Purpose

Provide a central source of truth for reusable builder modules, design tokens, patterns, examples and shared production standards.

## Current Status

The active Design Library source lives in `scout24-creative-ops/design-system`. The separate `s24-creative-ops/design-library` repository is the live publish mirror and is not the source of truth.

The original AEM Design Library and the new Contentful Design Library are now explicitly separated. The AEM library remains unchanged at its existing publish path. The Contentful library lives in its own source folder and publish path, with output guards preventing accidental writes into the AEM library.

The Contentful Design Library is live at `https://s24-creative-ops.github.io/design-library/design-system/contentful-design-library/index.html`. Its top navigation contains only `LP Builder` and `Design Tokens`. The LP Builder area uses the agreed 16-category navigation. Heros, Teaser, Process, Text & Lists, Buttons & Links, Video, Counter, Callouts and Colors are already populated. Design Tokens currently include Colors, Typography, Spacing, Border Radius, Borders and Image Ratios.

A typography audit fixed the main preview inconsistency centrally: CoreCSS typography contexts are now available inside Shadow DOM previews, the canonical Make It Better fonts are loaded, and outer library text uses the shared base-font definition. No module-specific typography overrides were needed.

## Dominik's Role

Dominik initiated the library approach, connected it to the builders and AI Agent overview, supported adoption, and coordinated the move toward a central GitHub-based publication path.

He retains product and workflow responsibility. Any further implementation support from Ciaran should be decided based on Ciaran's remaining capacity and the priorities around LP Builder & Contentful.

## Key Stakeholders

- Creative Studio
- Marketing teams using the builders
- Ciaran for possible further LP Builder / Contentful support
- Peter and Allan for GitHub and publishing support
- UX for module approval and standards

## Important Developments

- April 2026: Created a Builder Library as the single source of truth for available LP Builder and E-Mail Builder components.
- May 2026: Introduced the Design Library as a shared source for design tokens, modules and patterns.
- May to July 2026: Used the library to direct colleagues to existing modules and reduce duplicate work.
- July 2026: Followed up on new modules and organized Scout24 GitHub onboarding to support central storage and publication.
- 2026-07-30: The Design Library was made self-contained and a manual review-PR workflow was prepared.
- 2026-08-23: The previous Ciaran review follow-up was retired. Ciaran is checking how many working hours he has left through the end of the year; once that is known, Dominik will assess whether those hours can support the further development of the LP Builder in relation to Contentful.

## Decisions

- Keep the existing AEM Design Library and the new Contentful Design Library as separate products and separate publish paths. The AEM library is never overwritten by Contentful-library work.
- Use the GitHub-hosted Contentful Design Library as the user-facing catalogue for LP Builder modules and reusable elements instead of relying on one oversized Contentful page.
- Top-level navigation for the Contentful library is `LP Builder` and `Design Tokens` only.
- LP Builder categories are fixed as: Heros, Teaser, Process, Text & Lists, Buttons & Links, Video, Counter, Callouts, Colors, Action Tiles, Team Professional, Accordion, Benefits, Service Tiles, Tables, Sticky Footer.
- `Teaser` groups teaser, card and carousel variants; `Process` replaces the old Steps grouping.
- Design Tokens is the home for technical design-system primitives such as Typography, Spacing, Borders/Radius and Image Ratios.

- Prefer reuse of existing modules and patterns before creating new ones.
- Keep shared builder knowledge and assets centrally discoverable.
- Treat `scout24-creative-ops/design-system` as the active source.
- Treat `s24-creative-ops/design-library` as a publish mirror only.
- Do not keep the old PR-review follow-up as an active task.
- Decide on further Ciaran support based on his remaining 2026 capacity and current LP Builder & Contentful priorities.

## Risks and Open Questions

- Remaining LP Builder categories still need to be populated: Action Tiles, Team Professional, Accordion, Benefits, Service Tiles, Tables and Sticky Footer.
- The canonical table capability still needs a product decision before the `Tables` category can be considered final.
- Ownership for long-term maintenance and adding new modules is not fully documented.

## Next Steps

1. Populate the remaining LP Builder categories in the Contentful Design Library.
2. Continue visual QA after each live publish, especially spacing, content width and preview consistency.
3. Keep the AEM library protected and unchanged while Contentful-library iterations continue.

## Last Confirmed

2026-09-23: The separate Contentful Design Library was published successfully with protected AEM separation. A subsequent typography audit fixed Shadow-DOM/CoreCSS font inheritance centrally and was published successfully.
