# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The production/AEM Builder remains operational, while `LP Builder – Contentful` is the maintained Contentful-enabled Builder for migration and future product development.

The Contentful flow works end to end: OAuth, draft creation, preview, update, explicit publish and production URL have been validated. The active static module catalogue contains 25 module contracts, including the two Handbook-specific modules `handbook-category-card` and `handbook-step-media`.

The maintained architecture is layered:

1. GPT Instructions define global behavior and mode selection.
2. Foundation / Runtime files define technical guardrails.
3. `module-contracts.md` defines valid module structures and variants.
4. `component-library.html` provides implementation examples.
5. Composition files define page-type defaults such as the B2B Handbook.
6. Explicit user requests may alter composition defaults while contracts remain binding.

The normal Builder remains module-first. A separate `SOURCE_DUPLICATE_MODE` now exists for highly custom pages that need source fidelity rather than approximation through existing modules.

Mukhammadjon has confirmed the direction for the three remaining platform-scale requirements: larger `htmlSource`, fuller lifecycle management around stable `entryId`, and a trusted global CSS/JS runtime. Architectural alignment on these points is complete; implementation and end-to-end validation remain.

The current active product-development focus is moving further toward migration readiness through reusable modules. Dominik should prepare stable module contracts and Builder behavior so colleagues can execute the operational migration without requiring him to rebuild or migrate every page manually.

The first confirmed module candidate in this phase is a complex B2B product-comparison table used across multiple AEM pages. The existing AEM implementation should be treated as the canonical structural reference rather than asking the GPT to recreate the table from scratch. The intended contract keeps the table architecture, responsive model, alignment and interaction patterns controlled while allowing editorial changes to product columns, rows, labels, tooltips, links, cell states and CTAs.

## Foundation and Rendering Model

The implementation remains CoreCSS/COSMA first. Static `htmlSource` reuses native typography, responsive grid, spacing utilities, icons and other verified design-system primitives wherever possible.

The public LP Builder bridge is the shared CSS layer for static-HTML gaps. It is currently linked at page level and has been proven to survive sanitization and load correctly in the rendered DOM.

A separate central JavaScript runtime is now the confirmed direction for interactive modules. A real Counter proof established that external `<script>` tags can be stored unchanged in Contentful but are removed by `sanitizeLPBuilderHtml` before the final DOM. The browser therefore never requests the page-linked JS asset. The agreed future contract is to load `lpbuilder-bridge.css` and `lpbuilder-runtime.js` globally and call `LPBuilderRuntime.init(renderedLpRoot)` after sanitized `htmlSource` is rendered or replaced.

The current frontend no longer applies the earlier large automatic section padding. The remaining direct `section + section` margin can be structurally bypassed through the explicit-spacing wrapper.

## Explicit Spacing Contract

A general page-composition spacing contract is implemented and tested.

Normal explicit-spacing pages use:

`lpb-explicit-spacing -> MODULE -> spacer-xl -> MODULE -> ... -> spacer-3xl -> FOOTER`

General rules:

- no default opening spacer
- Hero / Full-width Hero starts directly and is followed by `spacer-xl`
- `spacer-xl` between independent modules
- `spacer-3xl` once before the footer
- `spacer-4xl` only when explicitly requested
- no consecutive spacers
- no generic module-root margin/padding combinations for page rhythm
- internal module spacing remains allowed

The spacer scale is aligned with COSMA/Foundation through `xxl`, with LP Builder extensions for larger transitions:

- xs: 2 / 4 px Palm vs Lap/Desktop
- s: 4 / 8
- m: 8 / 16
- l: 16 / 24
- xl: 24 / 32
- xxl: 32 / 40
- 3xl: 48 / 64
- 4xl: 50 / 80

The public bridge was updated and the Firmendaten preview confirmed that `spacer-xl` and `spacer-3xl` render with the expected values instead of collapsing to 0px.

The B2B Handbook has its own stricter composition override: `spacer-xl` before and after the page intro and `spacer-xl -> divider -> spacer-xl` at every section boundary.

## Source Duplicate Mode

A second workflow exists for pages that are too custom to reproduce faithfully through the standard module library.

### `SOURCE_DUPLICATE_MODE`

For source-driven rebuilds, priority becomes:

Source fidelity -> source structure/CSS -> page-specific HTML/CSS -> existing modules only for a true 1:1 match.

A visually similar ACTIVE module is not sufficient. Custom page-scoped HTML/CSS is allowed when needed.

### `SOURCE_DUPLICATE_IMPORT_LOCKED`

When Codex has already produced a Contentful-ready `htmlSource.html`, the GPT must treat that input file as the technical truth and may not recomcompose, rename classes, alter copy, replace assets or apply normal composition defaults.

The import contract includes a post-write integrity check using input/stored length and SHA-256. A mismatch must return `IMPORT_INTEGRITY_FAILED` rather than claiming success.

This workflow was validated on a reduced real Memberships exact-rebuild test:

- 20,609 characters / 20,623 bytes
- write succeeded through `updateLpBuilderDraft`
- stored length matched input
- stored SHA-256 matched input exactly
- 3/3 selected source sections were preserved
- page remained unpublished

A larger ~60 KB version was rejected by Contentful with HTTP 422 `InvalidEntry / Validation error / type: Text`. Contentful did not rewrite the HTML; the write was rejected and the previous draft remained unchanged.

The confirmed target is at least 256 KB, ideally 512 KB, with full write support, lossless read-back, no truncation/transformation and length/SHA verification.

## Contentful Lifecycle Audit

A controlled lifecycle audit on disposable entries established the current Action coverage.

Supported:

- read by slug/path
- create draft
- update title and `htmlSource`
- explicit publish
- update a published page as a new draft and re-publish
- update/publish actions can target Entry ID or slug where exposed by their schemas

Missing from the currently available Actions, but confirmed for extension:

- read an existing page by `entryId`
- rename slug / target path on an existing entry
- unpublish
- archive
- delete

The agreed direction is to use `entryId` as the preferred stable technical identifier while retaining slug lookup as a convenient fallback. Archive and delete should remain separate explicit operations with publication-state and version checks.

A native clone operation is not considered a required backend capability because a GPT-level get/create flow can cover duplication if needed.

## Runtime Proof

The AEM-era model of page-level CSS + JS links was tested directly in Contentful.

Confirmed browser behavior:

- the external CSS `<link>` is present in the final DOM and loads successfully
- the external JS `<script>` is present in stored Contentful `htmlSource`
- the script node is absent from the final rendered DOM
- no network request for the JS asset occurs
- `sanitizeLPBuilderHtml` removes the script before React renders the sanitized HTML

This confirms that adding the JS URL more strongly to GPT Instructions would not solve the problem. A trusted renderer-level runtime entry point is required for custom JavaScript behavior and has now been confirmed as the intended implementation direction.

## Preview and Reference Targets

- Disposable Contentful test surface: `/dev-lp-builder-contentful-v01-test`
- Canonical Contentful Design Library: `/lp-builder-contentful-design-library`

The test surface is disposable and should be used for isolated runtime, import and composition experiments. The Design Library is the reviewed durable reference.

## Dominik's Role

Dominik owns product direction, strategy, prioritization and quality for the Landing Page Builder. He owns the migration-focused Contentful GPT and decides which reusable rules, modules, composition patterns and special modes enter the maintained package.

Codex is the preferred implementation surface for local contracts, bridge CSS, libraries, runtime tests, exact-rebuild preparation and technical source analysis. The GPT composes normal validated modules and performs controlled Contentful writes.

For the next migration phase, Dominik's focus should stay on Builder readiness and reusable module design rather than repeated operational crawling or page-by-page migration. The goal is to encode stable patterns once so colleagues can maintain and migrate pages through controlled content edits instead of recreating complex structures.

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
- Use CoreCSS/COSMA first and keep one central bridge for verified static-HTML gaps.
- Module contracts remain the technical SSOT for standard page building.
- Composition files define defaults rather than rigid templates.
- Explicit spacing controls page rhythm; module-root margins do not.
- Keep Handbook-specific spacing separate from the general default.
- Use `SOURCE_DUPLICATE_MODE` only when source fidelity is explicitly required.
- Use `SOURCE_DUPLICATE_IMPORT_LOCKED` for already prepared Contentful-ready HTML and verify the stored payload after writing.
- Never publish without explicit approval.
- Support larger exact-rebuild payloads at a target of at least 256 KB, ideally 512 KB, with lossless read-back and verification.
- Use stable `entryId` as the preferred lifecycle identifier, with slug lookup retained as fallback convenience.
- Prefer one stable global CSS entry point and one stable global JS runtime entry point in the renderer while keeping the underlying Creative Ops public assets independently maintainable.
- Initialize the trusted runtime after sanitized LP Builder HTML is rendered or replaced.
- Do not allow arbitrary page-authored script execution merely to restore legacy behavior; use a trusted global runtime instead.
- For complex recurring legacy components whose structure should remain stable, use the proven AEM HTML as a canonical implementation reference and convert it into a reusable Builder contract instead of asking the GPT to regenerate the structure freely.
- Separate controlled module architecture from editable content. For the B2B product-comparison-table candidate, editorial changes should be possible for product columns, rows, labels, tooltips, links, cell states and CTAs without reconstructing the table.

## Risks and Open Questions

- The confirmed larger `htmlSource` contract still needs implementation in the Contentful model or equivalent storage approach.
- The confirmed lifecycle extensions still need implementation and validation.
- The confirmed global CSS/JS runtime still needs implementation and validation in the renderer.
- Interactive legacy modules such as the B2B product-comparison table may depend on the future trusted runtime for behavior such as accordions/tooltips; static contract and runtime-dependent behavior should remain cleanly separated.
- The exact-rebuild Memberships test exposed a full-bleed mismatch at the outer page/container level even when the imported custom HTML itself was byte-identical; this remains a secondary issue to isolate if it becomes relevant.

## Next Steps

1. Continue the migration-readiness module phase, starting with the reusable B2B product-comparison-table contract based on the existing AEM implementation.
2. Validate that the comparison-table module preserves its stable structure and responsive behavior while allowing controlled edits to rows, columns, tooltips, links, cell states and CTAs; do not treat the Codex implementation as confirmed until its result is reviewed.
3. Continue identifying additional recurring B2B page structures that deserve reusable module contracts rather than page-specific rebuilds.
4. Wait for Mukhammadjon to implement the confirmed platform changes for larger `htmlSource`, lifecycle management and global LP Builder CSS/JS runtime loading.
5. Validate the implemented platform changes end to end on disposable NEXT/Preview entries and, where relevant, PRO.
6. Once the trusted runtime entry point exists, move interactive LP Builder behavior such as Counter, Carousel and other validated interactive module behavior into the independently maintained central runtime rather than requesting one frontend hook per module.

## Last Confirmed

2026-09-08: Dominik shifted the next active LP Builder work toward reusable module readiness for the broader B2B migration, with the complex product-comparison table as the first confirmed candidate. The existing AEM HTML should be the canonical structural reference, while the GPT should edit controlled content fields without rebuilding the component architecture. Mukhammadjon's three confirmed platform changes remain pending implementation and end-to-end validation.
