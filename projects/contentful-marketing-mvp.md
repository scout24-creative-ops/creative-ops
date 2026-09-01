# Marketing Content Platform

## Purpose

Build the shared Marketing content platform around Landing Page Builder, Contentful and the future asset workflow so Marketing can create, manage and publish landing pages through a controlled, reusable setup instead of copying pages manually into AEM.

The platform work is distinct from the migration of existing AEM pages. `Marketing Content Platform` covers the tools and infrastructure; `Contentful Migration` covers the actual migration of existing pages.

## Current Status

The Landing Page Builder -> Contentful integration is now validated end to end in Dominik's duplicated GPT. OAuth, draft creation, preview, update, explicit publish and the resulting production URL have all been tested successfully.

Dominik has taken over a separate Contentful-enabled Builder copy for migration and continued product development. Mukhammadjon remains the relevant Core Frontend contact for changes to the Action, renderer, environment or authentication contract, but Dominik can now evolve the GPT-side behavior independently.

The current migration-focused Builder is being rebuilt incrementally instead of inheriting all old product logic. v0.1 is a controlled module composer: the user provides real content and the intended module sequence; the GPT uses approved module markup, preserves structure/classes and does not automatically select, reorder, substitute or invent content.

A major architectural direction is now verified: the Contentful frontend globally loads CoreCSS/COSMA, and many of those styles are usable directly from static `htmlSource`. The new Builder should therefore use the existing Scout24 design-system layer wherever possible and keep any LP Builder-specific CSS bridge small and token-based.

Image handling remains deliberately simple for the migration pilot. The Builder should continue to accept stable direct image URLs rather than creating a separate Contentful image-selection feature. A small persistent asset-storage pilot can be developed in parallel without blocking the first migration proof.

## Dominik's Role

Dominik owns the product direction, Marketing requirements and quality of the platform setup. He validates the LP Builder -> Contentful workflow, owns the migration-focused Builder copy and decides how the authoring model evolves while keeping technical infrastructure responsibilities with the appropriate platform owners.

## Key Stakeholders

- Mukhammadjon Kayumov for the Contentful Action/renderer integration contract
- Beatrice for Core Team coordination and broader platform alignment
- Daniel Herold for Core/Builders Platform direction
- Matthias Brandstätter for Contentful/platform ownership
- Contentful/Core Frontend teams
- SEO and UX where generation rules affect quality and publishing
- Peter / relevant platform contacts for the small migration asset-storage pilot

## Confirmed Direction and Decisions

- The Contentful integration works end to end, including explicit production publishing.
- Dominik owns a separate Contentful-enabled GPT copy for migration and continued Builder development.
- Keep publishing consequential: draft/save can be requested directly; publish requires an explicit request.
- Keep the authoring model HTML-based for the current phase.
- Use CoreCSS/COSMA first for static HTML instead of rebuilding a parallel design system.
- Verified global packages in `is24-cms-frontend`: `is24-corecss` 9.2.0, `is24-corecss-server` 9.2.0 and `@is24/cosma-ui-icons` 6.24.0.
- Verified native HTML-friendly families include typography, spacing, responsive grid, buttons, basic utilities and the COSMA icon font.
- Create custom LP Builder CSS only for the real remaining delta and base it on existing COSMA design tokens.
- Do not use the old LP Builder runtime CSS as the long-term styling basis for the new Contentful module library; keep those assets backward-compatible for existing AEM pages.
- Do not add a separate Contentful image-selection UX to the migration MVP. Keep stable direct-image-URL input.
- Treat persistent migration asset storage as a small parallel pilot rather than a prerequisite for the first page proof.

## Important Developments

- 2026-08-31: Dominik completed OAuth configuration and successfully tested create -> preview -> update -> publish -> production URL in his duplicated Contentful-enabled GPT.
- 2026-08-31: Dominik informed Mukhammadjon that the setup works and that he will continue adapting the duplicate for migration use.
- 2026-08-31: The migration-focused Builder was reset to a deliberately small v0.1 product model rather than carrying over all old Landing Page Builder logic.
- 2026-09-01: Repository and browser checks confirmed that CoreCSS/COSMA is globally loaded in the Contentful frontend and that many classes can be applied directly to static HTML.
- 2026-09-01: The new strategic styling rule became CoreCSS/COSMA first, with only a thin LP Builder CSS bridge where static HTML needs extra layout/media/surface behavior.

## Open Questions and Risks

- Exact long-term contract for the small LP Builder-specific CSS bridge after the browser playground test.
- Which module-specific layouts can be expressed entirely with CoreCSS utilities versus needing small custom rules.
- Final link-validation and pre-publish quality-check responsibilities across Builder and integration layers.
- Long-term persistent asset storage/delivery ownership.
- Whether Action read behavior should be standardized around Entry ID, slug/path or both; one fresh-chat read/update test returned `LP Builder page was not found` while the same flow worked in an existing chat.

## Next Steps

1. Run the COSMA/CoreCSS HTML playground on `/dev-lp-builder-v01-test` without the old LP Builder runtime CSS.
2. Classify tested primitives as `USE NATIVE CORECSS`, `HTML STRUCTURE / HOOK REQUIRED` or `LPBUILDER CSS BRIDGE REQUIRED`.
3. Migrate the active v0.1 module set onto that verified contract.
4. Create only the minimal token-based CSS bridge proven necessary by those tests.
5. Continue the small persistent asset-storage pilot in parallel when useful for real migration pages.

## Last Confirmed

2026-09-01: the Contentful-enabled Builder works through production publishing, and the current implementation direction is to rebuild the migration-focused module library around globally available CoreCSS/COSMA with only a minimal HTML-specific bridge.
