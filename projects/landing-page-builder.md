# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The production/AEM Builder remains operational, while `LP Builder – Contentful` is the maintained Contentful-enabled Builder for migration and future product development.

The basic Contentful flow is validated end to end, and the full intended Action lifecycle has now also been proven on a disposable entry: read by slug, read by stable `entryId`, create/update draft, publish, unpublish, archive, unarchive and delete. The maintained workflow keeps `entryId` as the preferred technical identifier with slug as fallback, plus read-before-mutation and lifecycle safeguards.

The maintained Contentful architecture is intentionally separate from the AEM Builder. The active Contentful project contains the GPT package, the visual module/design libraries and a nested platform-runtime repository that publishes the shared Contentful Bridge CSS and Runtime JS through stable GitHub Pages entry points.

The visual Contentful Module Library is now substantially complete. `libraries/module-library.html` is the single visual library source; library-only copy controls, preview helpers and spacing stay outside productive module contracts. Genuine module changes have been synchronized back into the GPT package and independently audited.

The current GPT package uses `component-library.html` as the module-definition SSOT. The latest synchronized productive definitions cover the active Hero, Teaser, Content Cards, Video, Card Carousel, Checkmark List, Accordion and Sticky Footer behavior, while deliberate Library-only presentation differences remain excluded.

The COSMA icon basis is also validated against the current Contentful host. The host uses `@is24/cosma-ui-icons` 6.24.0 and the maintained static inventory contains the same 899 valid classes. GPT guidance now uses validated COSMA/S24 icon classes as the default for freely chosen icons, does not ship separate font assets and keeps existing deliberate SVG/chevron exceptions where already part of module contracts.

The shared Bridge/Runtime now contains the productive support required by the current module set, including Card Carousel layout/interaction, Checkmark List styling, mobile stacked-grid spacing and AEM-aligned Sticky Footer behavior. The latest runtime tests pass 13/13.

A real Contentful smoke test confirmed Carousel, Accordion and Sticky Footer behavior after the latest fixes. The Accordion issue was caused by duplicate interaction ownership: the Contentful renderer already provides its own delegated Accordion behavior, while the LP Builder runtime had added another click handler. The LP Builder runtime now leaves Accordion interaction to the renderer as the single owner. The Sticky Footer CTA issue was a Bridge stacking problem and was fixed without changing page HTML.

The remaining renderer integration gap is the shared Bridge stylesheet. The current Contentful frontend globally loads the LP Builder Runtime JS, but does not currently render the Bridge stylesheet even though the Bridge URL is present in frontend code. Older working LP pages carried a page-level Bridge link in their stored HTML. A controlled smoke test that temporarily added the current Bridge link directly to the test page restored correct module styling immediately, proving that the maintained module HTML and Bridge work together. The durable solution is central Bridge loading by the Contentful renderer.

## htmlSource Scale and Read-back

Large write support has materially improved. A real Product Comparison payload of 50,718 bytes succeeds through both create and update with matching byte length and SHA-256 and no evidence of truncation or transformation.

The full nine-action lifecycle is now functionally proven on disposable entries. Large-page read-back should still be treated separately from lifecycle coverage: the previously observed `ResponseTooLargeError` for a ~50 KB read-back remains relevant until explicitly retested at that payload size.

The target contract remains at least 256 KB, ideally 512 KB, with complete write support, lossless read-back and length/SHA verification.

## Foundation and Rendering Model

Static `htmlSource` should reuse native CoreCSS/COSMA typography, responsive grid, spacing utilities, icons and other verified design-system primitives wherever possible.

The public LP Builder Bridge is the shared CSS layer for static-HTML gaps. The intended renderer architecture is one stable globally loaded Bridge stylesheet plus one stable trusted Runtime JS entry point for LP Builder pages.

The Runtime JS is already loaded centrally by the Contentful frontend. The Bridge CSS is not yet globally rendered by the current frontend implementation, so page-level Bridge links remain useful only as a temporary smoke-test workaround, not as the intended long-term architecture.

External page-authored `<script>` tags remain unsuitable because `sanitizeLPBuilderHtml` removes them before the final DOM. Interaction belongs either to the Contentful renderer's existing hooks or to the trusted central LP Builder Runtime, with clear ownership to avoid duplicate handlers.

The current frontend no longer applies the earlier large automatic section padding. Explicit spacing remains the page-composition mechanism.

## Source Duplicate / Controlled Rebuild

The standard Builder remains module-first, but highly custom legacy pages can use a source-driven rebuild path when existing modules cannot reproduce the source faithfully.

For source-driven rebuilds, priority is:

Source fidelity -> source structure/CSS -> page-specific HTML/CSS -> existing modules only when they are a true fit.

Prepared Contentful-ready HTML should be treated as the technical truth during locked import rather than recomposed by the GPT.

The intended migration model is hybrid:

- recurring structures become reusable LP Builder modules/contracts;
- bespoke or rarely edited pages can be rebuilt exactly enough through controlled page-specific HTML;
- repeated issues should be promoted into shared rules only when they genuinely recur.

## Reusable Product Comparison Contract

The Product Comparison module remains the first major reusable B2B candidate.

Binding rules:

- keep the table matrix and `lpb-product-comparison__*` class structure fixed;
- every feature row contains exactly one plan cell per plan;
- editable content includes plans, groups, features, tooltips, CTA labels/links and cell content/states;
- use semantic table markup and native details-based interaction where defined by the module contract;
- base functionality must not depend on arbitrary page-authored scripts;
- the maintained AEM source is the visual/behavioral reference, while deliberate Contentful accessibility/responsive improvements may remain when documented.

The latest maintained ~50 KB import is writable after the platform size fix. Final real Preview validation of the maintained comparison-table version remains a separate migration-readiness step unless already confirmed elsewhere.

## Asset Handling for Current Migration Work

For now, migrated pages may continue using existing AEM/static asset URLs directly in HTML. A central asset-ID resolver or new Contentful asset model is deliberately deferred while platform work is still in progress.

This is a pragmatic temporary choice, not the long-term asset strategy. Because current manual migration builds are grouped together, URLs can be updated later in a controlled batch when the final asset/storage approach is confirmed.

## Explicit Spacing Contract

Normal explicit-spacing pages use:

`lpb-explicit-spacing -> MODULE -> spacer-xl -> MODULE -> ... -> spacer-3xl -> FOOTER`

General rules:

- no default opening spacer;
- Hero / Full-width Hero starts directly and is followed by `spacer-xl`;
- `spacer-xl` between independent modules;
- `spacer-3xl` once before the footer;
- `spacer-4xl` only when explicitly requested;
- no consecutive spacers;
- no generic module-root margin/padding combinations for page rhythm;
- internal module spacing remains allowed.

The B2B Handbook keeps its own stricter composition override.

## Dominik's Role

Dominik owns product direction, strategy, prioritization and quality for the Landing Page Builder. He owns the migration-focused Contentful GPT and decides which reusable rules, modules, composition patterns and special modes enter the maintained package.

Codex is the preferred implementation surface for local contracts, Bridge CSS, libraries, runtime tests, source analysis and controlled rebuild preparation. The GPT is the Contentful interaction surface for page creation/update and later colleague-facing authoring.

For the migration phase, Dominik's focus should stay on Builder readiness, reusable module design and quality guardrails rather than becoming the default operator for repeated page migration.

## Key Stakeholders and Users

- B2B Marketing
- Seeker Product Marketing
- Homeowner Product Marketing
- Other Marketing teams using the Builder
- UX and SEO for generation guardrails
- Mukhammadjon Kayumov for Contentful Action/renderer behavior
- Beatrice and Core/Contentful teams for platform coordination
- Daniel Herold for broader Core/Builders Platform direction

## Confirmed Direction and Decisions

- Keep the production/AEM Builder operational while `LP Builder – Contentful` evolves separately.
- Keep AEM and Contentful as separate technical concepts; AEM is a reference source, not the Contentful runtime path.
- Use CoreCSS/COSMA first and keep one central Bridge for verified static-HTML gaps.
- Use `component-library.html` as the productive module-definition SSOT; library-only helpers do not become productive module markup.
- Composition rules define defaults rather than rigid templates.
- Explicit spacing controls page rhythm; module-root margins do not.
- Use controlled source-driven rebuilds for bespoke legacy pages rather than forcing every page into generic modules.
- Treat prepared Contentful-ready HTML as locked input when exact import is required.
- Never publish without explicit approval.
- Support large `htmlSource` writes and reads at migration scale, with lossless verification.
- Use stable `entryId` as the preferred lifecycle identifier, with slug lookup retained as fallback convenience.
- Keep one stable global CSS entry point and one stable trusted JS runtime entry point.
- Do not allow arbitrary page-authored script execution merely to restore legacy behavior.
- Where the Contentful renderer already owns an interaction such as Accordion behavior, do not duplicate that ownership in the LP Builder runtime.
- Use the host-provided COSMA/S24 icon font for normal icon choices and only classes validated against the maintained static inventory; keep existing explicit SVG exceptions where already part of a module contract.
- Keep temporary AEM/static asset URLs for current migration work; revisit centralized asset resolution later rather than blocking page progress now.

## Risks and Open Questions

- The Contentful frontend currently loads the LP Builder Runtime globally but not the Bridge stylesheet. Central Bridge loading is the main remaining renderer integration gap and is waiting on Core Frontend/Mukhammadjon follow-up.
- GPT Action authentication is intermittently unreliable because of an upstream-looking Authorization-header/OAuth session failure that Mukhammadjon can reproduce. Reload/new chat may clear it, but this is not viable as the long-term migration operating model.
- Large write support is validated at ~50 KB; large read-back at the same scale should be retested explicitly before claiming the edit-by-URL flow is complete.
- Product Comparison and other migration-specific complex modules still need their own real-page Preview validation where not already completed.
- The contact form remains a separate migration/platform dependency and is intentionally outside the LP Builder's page-specific Salesforce logic.

## Next Steps

1. Get the Contentful renderer to load the shared `lpbuilder-bridge.css` centrally for LP Builder pages, then rerun the no-workaround host smoke test.
2. Continue monitoring the intermittent GPT Action OAuth/session issue with Mukhammadjon and retest once a stable fix or workaround exists.
3. Retest large `getLpBuilderPage` read-back at migration-scale payload size.
4. Keep the Custom GPT knowledge package synchronized with the latest changed module-contract, component-library, foundation, instruction and icon-inventory files before further formal smoke testing.
5. Continue promoting only genuinely recurring migration structures into reusable Builder contracts.
6. Revisit centralized asset resolution/storage after the immediate migration flow is stable.

## Last Confirmed

2026-09-15: The Contentful Module Library, current GPT module synchronization, COSMA icon basis and the latest shared Bridge/Runtime behavior are substantially validated. A real host smoke test passes Carousel, Accordion and Sticky Footer after the latest runtime/stacking fixes when the Bridge is available. The main remaining renderer gap is that the Contentful frontend does not yet load the Bridge stylesheet centrally; intermittent GPT Action OAuth/session failures also remain an operational blocker for reliable migration use.