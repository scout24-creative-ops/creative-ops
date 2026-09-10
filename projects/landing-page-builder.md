# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The production/AEM Builder remains operational, while `LP Builder – Contentful` is the maintained Contentful-enabled Builder for migration and future product development.

The basic Contentful flow is validated end to end: OAuth, draft creation, preview, update, explicit publish and production URL. The maintained architecture remains CoreCSS/COSMA-first with GPT Instructions, foundation/runtime rules, module contracts, component examples, composition rules and a central Bridge stylesheet.

The current product-development focus is migration readiness through reusable modules and controlled source-driven rebuilds. Dominik should prepare stable Builder capabilities so colleagues can migrate and later maintain pages without recreating complex structures manually.

The first complex reusable B2B module, `product-comparison-table`, has now progressed through full AEM-reference fidelity work. The maintained implementation preserves the fixed table matrix and `lpb-product-comparison__*` class architecture while allowing editorial changes to plans, groups, features, tooltips, CTAs and cell states. The latest version includes the intended Silber / Gold / Bronze order, source-derived plan bars and emblems, all 36 feature info icons/tooltips, current LP Builder pill CTAs, static repeated plan headers, corrected divider placement, compact table spacing and full-row highlight treatment. Native `details/summary` remains the runtime-independent base interaction model.

The centrally published Bridge now contains the validated Product Comparison styles and the additional page-scoped rules needed by the current Gewerbliche-Anbieter rebuild.

## htmlSource Scale and Read-back

The previous larger-payload blocker has materially improved.

A real Product Comparison payload of 50,718 bytes now succeeds through both `createLpBuilderDraft` and `updateLpBuilderDraft`. Both write actions reported the full byte length and the same SHA-256 as the input, with no evidence of truncation or transformation.

The remaining limitation is `getLpBuilderPage`: the same ~50 KB entry currently returns `ResponseTooLargeError` when the full page is read back. This does not block present migration writes or visual Preview checks, but it is important for the intended future edit-by-URL workflow. Colleagues should eventually be able to provide a page URL, let the Builder read the current `htmlSource`, make a targeted change and write the updated page back. Large read-back therefore remains a platform requirement rather than only an integrity-check convenience.

The target contract remains at least 256 KB, ideally 512 KB, with complete write support, lossless read-back and length/SHA verification.

## Foundation and Rendering Model

Static `htmlSource` should reuse native CoreCSS/COSMA typography, responsive grid, spacing utilities, icons and other verified design-system primitives wherever possible.

The public LP Builder Bridge is the shared CSS layer for static-HTML gaps. Page-level `<link>` loading has been proven to survive sanitization and load correctly in the rendered DOM. Bridge updates use the controlled Public publishing workflow and must preserve existing module styles.

A separate trusted central JavaScript runtime remains the confirmed direction for interactive modules. External `<script>` tags can be stored in Contentful but are removed by `sanitizeLPBuilderHtml` before the final DOM, so arbitrary page-authored scripts are not a viable runtime model. The intended renderer contract is to load `lpbuilder-runtime.js` globally and call `LPBuilderRuntime.init(renderedLpRoot)` after sanitized HTML is rendered or replaced.

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

The Product Comparison module is the first major reusable B2B candidate.

Binding rules:

- keep the table matrix and `lpb-product-comparison__*` class structure fixed;
- every feature row contains exactly one plan cell per plan;
- editable content includes plans, groups, features, tooltips, CTA labels/links and cell content/states;
- use semantic table markup and native details-based accordion behavior;
- base functionality must not depend on the future central runtime;
- the maintained AEM source is the visual/behavioral reference, while deliberate Contentful accessibility/responsive improvements may remain when documented.

The latest maintained ~50 KB import is now writable after the platform size fix. A final real Preview check of the latest synchronized HTML remains before treating this module-readiness step as complete.

## Current Page-Rebuild Pattern

The Gewerbliche-Anbieter directory/start page is the next real migration example and also a useful test of the controlled rebuild approach.

The page was rebuilt from a live crawl and screenshots without copying the old AEM architecture. It includes the hero/interest selector, 12 illustrated links, facts, new-business CTA and teaser cards; the legacy contact form is excluded and will be handled separately.

The first implementation exposed an important asset pattern: 12 inline SVG illustrations made the page ~2.47 MB even though the non-SVG HTML was only ~14 KB. The base illustrations were converted to standalone external SVGs on Scout24's static server. Six final hover-overlay SVG assets reproduce the original teal highlight behavior, including masked variants for cards 01, 02 and 12. This reduced the maintained HTML to 19,760 bytes while keeping the original illustrations and responsive layout. The final hover Bridge rules are published; the remaining step is a final Contentful draft sync/Preview check of the latest HTML.

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
- Use CoreCSS/COSMA first and keep one central Bridge for verified static-HTML gaps.
- Module contracts remain the technical SSOT for standard page building.
- Composition files define defaults rather than rigid templates.
- Explicit spacing controls page rhythm; module-root margins do not.
- Use controlled source-driven rebuilds for bespoke legacy pages rather than forcing every page into generic modules.
- Treat prepared Contentful-ready HTML as locked input when exact import is required.
- Never publish without explicit approval.
- Support large `htmlSource` writes and reads at migration scale, with lossless verification.
- Use stable `entryId` as the preferred lifecycle identifier, with slug lookup retained as fallback convenience.
- Prefer one stable global CSS entry point and one stable trusted JS runtime entry point.
- Do not allow arbitrary page-authored script execution merely to restore legacy behavior.
- For recurring complex legacy components, use the proven AEM HTML as the canonical implementation reference and convert it into a reusable Builder contract.
- Keep the Product Comparison table matrix and namespaced class structure fixed while allowing controlled editorial content changes.
- Keep temporary AEM/static asset URLs for current migration work; revisit centralized asset resolution later rather than blocking page progress now.

## Risks and Open Questions

- Large write support is now validated at ~50 KB, but full `getLpBuilderPage` read-back still fails at that size with `ResponseTooLargeError`.
- Lifecycle extensions around read-by-entryId, slug rename, unpublish, archive and delete still require full implementation/validation unless separately confirmed.
- The global trusted CSS/JS runtime contract still requires final renderer implementation/validation unless separately confirmed.
- Product Comparison still needs a final real Preview check using the latest maintained HTML after the large-write fix.
- The Gewerbliche-Anbieter page needs a final Contentful sync/Preview check after the final external hover-asset URLs and Bridge publication.
- The contact form remains a separate migration/platform dependency and is intentionally excluded from the current page rebuild.

## Next Steps

1. Synchronize and visually validate the latest Product Comparison HTML in a real Contentful Preview; close the first complex reusable B2B module if it passes.
2. Synchronize the final ~19.8 KB Gewerbliche-Anbieter start-page HTML and verify all 12 external illustration/hover states in Preview.
3. Continue identifying genuinely recurring B2B structures and promote them into reusable contracts only when reuse is confirmed.
4. Retest large `getLpBuilderPage` read-back when Mukhammadjon provides the follow-up fix.
5. Validate the remaining lifecycle and trusted-runtime platform changes as they become available.
6. Revisit centralized asset resolution/storage after the immediate migration flow is stable.

## Last Confirmed

2026-09-10: Large Product Comparison create/update writes now succeed at 50,718 bytes with matching input SHA-256, while full read-back still hits `ResponseTooLargeError`. The Product Comparison fidelity implementation and central Bridge are substantially complete pending one final Preview check. The Gewerbliche-Anbieter start-page rebuild is prepared at 19,760 bytes using external base/hover SVG assets and published Bridge rules; its final Contentful sync/Preview verification remains open.
