# Design Library and Builder Library

## Purpose

Provide a central source of truth for reusable builder modules, design tokens, patterns, examples and shared production standards.

## Current Status

The active Design Library source lives in `scout24-creative-ops/design-system`. The separate `s24-creative-ops/design-library` repository is the live publish mirror and is not the source of truth.

The Design Library is prepared as a self-contained static artifact. It contains its required email preview stylesheet locally and no longer depends on Email Builder or LP Builder runtime paths when published.

The previous task to follow up on Ciaran's review of the LP Builder and Design Library PRs is no longer relevant as an active task. The current question is instead whether Ciaran has enough remaining working hours through the end of 2026 to support further LP Builder development in the Contentful context.

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

- Prefer reuse of existing modules and patterns before creating new ones.
- Keep shared builder knowledge and assets centrally discoverable.
- Treat `scout24-creative-ops/design-system` as the active source.
- Treat `s24-creative-ops/design-library` as a publish mirror only.
- Do not keep the old PR-review follow-up as an active task.
- Decide on further Ciaran support based on his remaining 2026 capacity and current LP Builder & Contentful priorities.

## Risks and Open Questions

- How many working hours Ciaran still has available through the end of 2026.
- Whether that capacity is sufficient and appropriate for further LP Builder development in the Contentful context.
- Ownership for long-term maintenance and adding new modules is not fully documented.

## Next Steps

1. Wait for Ciaran to confirm his remaining working hours through the end of 2026.
2. Assess whether he can support further LP Builder development in the Contentful context.

## Last Confirmed

Ciaran capacity-based support decision confirmed as the current next step on 2026-08-23.
