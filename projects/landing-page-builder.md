# Landing Page Builder

## Purpose

Enable controlled, reusable landing-page production for Marketing. The Contentful-enabled Custom GPT supports both normal composition and migration; the legacy AEM Builder remains a separate production context.

## Current Status

- **Editorial portal (30 October):** seven-rubric draft portal and real article/overview integration work and were visually accepted. The complete signal-to-portal journey was demonstrated successfully. No public Editorial launch is confirmed.
- **Article Package intake:** normal chat/readable attachment maps metadata, text, image, sources and shared article/large-teaser intro into an unpublished draft and the matching overview. Explicit update targets and slug-collision protection preserve existing identities. Tags lack an appropriate Action field and are reported as not stored.
- **Rubric lookup:** locally implemented in building-policy.md, briefly referenced from main-instructions.md. Recht & Politik keeps `dev-scaling-editorial-wohnrecht-mvp`. The housing-benefit test worked after an extra target prompt; uptake of the later central lookup in the GPT and an independent no-extra-prompt run remain unconfirmed.
- **HTML transfer issue remains open by explicit instruction on 30 October.** A 2 October report said the large-payload issue was fixed, while older `FCT-1938` notes remained unresolved. Dominik now requests keeping the item open pending confirmation; do not infer current reliability or close it from the earlier report.
- Last reported local contract/runtime checks: 62/62. Portal/caption CSS deliveries were confirmed through user-supplied Codex reports. Generic live GPT regression baseline: 22 September. These are different validation scopes, not a current full live regression.
- Codex edits local Instructions/Knowledge; Dominik uploads the changed files into the GPT. Existing GPT Actions perform Contentful writes; Codex has no Contentful access in this workflow. Optional headline alternatives are manually removed before handoff; no Builder extension is wanted for them now.
- A read-only Codex assessment of the existing Editorial portal structure has been requested. Outcome pending; no new content model, backend or portal rewrite is approved.

## Product and Technical Boundaries

- `component-library.html`: canonical machine-facing capabilities; `building-policy.md`: composition/editing/spacing; `contentful-integration.md`: Action behavior; `migration-mode.md`: migration-specific rules; `cosma-icons-static.md`: icon guidance. Full Instructions live in `main-instructions.md`.
- Mukhammadjon's supplied Action schema is read-only source of truth. Technical repositories, not this briefing, own current markup, module counts, tests and release details.
- Page Modules are complete top-level module blocks; Embedded Components are used inside modules. Reuse canonical structures and shared COSMA/CoreCSS conventions rather than inventing per-page systems.
- The user-facing Contentful Design Library is a separate visual artifact, not the GPT capability file. Keep the AEM and Contentful libraries and publish paths separate.
- Bridge CSS and runtime JavaScript are centrally renderer-owned; never embed their loaders into stored page HTML. Respect explicit-spacing/root and current module contracts.
- Known remaining migration capabilities include contact forms, conditional SEO anchor navigation and module-specific policies. A generic fallback is not evidence that a missing platform capability exists.

## Composition, Import and Editing

| Mode | Behavior |
| --- | --- |
| Normal Builder | Compose/edit from canonical modules and Building Policy; preserve unrelated page content and honor explicit targets. |
| Complete HTML replacement | Explicitly supplied complete HTML on a concrete entry follows its dedicated flow; do not assume ordinary recomposition. |
| LOCKED_IMPORT | Exact Contentful-ready HTML import with the migration-specific integrity rules. |
| CRAWL_REBUILD | Rebuild one or more pages from source/crawl evidence with canonical modules, preserving supplied copy/links where possible and reporting gaps. |
| Article Package | Create an unpublished Editorial article by default; update only an explicit existing target and place the teaser on the known matching category overview. |

Use usable temporary AEM/source image URLs in migration drafts when a section is otherwise representable. Mark assets pending migration and replace later through controlled mapping. A genuinely unavailable asset or unsupported source area may use the migration placeholder based on `callout--base`. The temporary-asset policy correction and dedicated acceptance remain open until verified in the technical package/live GPT.

## Safety and Operating Rules

- Stable entry ID is preferred; verified slug lookup is fallback. A slug collision never authorizes overwriting another article.
- No publication without explicit approval. Local tests, stored drafts and previews are not publish clearance.
- Do not touch the protected legacy runtime, external email platform or unrelated local edits. Historical Checkmark/runtime-JS changes were excluded from Editorial releases.
- New/revised GPT package files require a separate manual upload and meaningful acceptance test. A code change alone is not live GPT proof.
- No current follow-up appointments are confirmed. Old dated tests and meetings are historical, not scheduled actions.

## Meaningful Results and Reference Evidence

- August: independently usable Contentful GPT copy demonstrated OAuth → draft → preview → explicit publication/production route.
- September: canonical CoreCSS/COSMA module model, Handbook composition and migration/import rules developed. Generic CREATE, combined EDIT and lifecycle suite passed on 22 September.
- Late September/early October: HTML payload issue investigated; a later developer-fix report exists, but current status is deliberately open pending reconfirmation.
- October: Editorial template and host-grid styling evolved into a rubric portal and complete Article Package integration. Manual publication/review responsibilities remain to be finalized.
- Detailed checkpoints, prior constraints and implementation notes remain in the [pre-cleanup reference](../documentation/reference-archive/2026-10-30/landing-page-builder-before-cleanup.md) and dated [weekly records](../documentation/README.md).
- [Reusable regression suite](landing-page-builder-regression-suite.md) and [focused test guidance](../documentation/lp-builder-contentful-test-guidelines.md) remain separate operational references.

## Open Questions / Next Actions

1. Receive the read-only portal-architecture assessment and separate real pre-live needs from optional redesign.
2. Confirm current large-HTML behavior before closing the issue; use bounded transfer/read-back checks when actually needed.
3. Verify temporary-asset handling and migration-specific acceptance cases; do not confuse the generic suite with full migration clearance.
4. Continue the Design Library backlog only when prioritized. Persistent image delivery, B2B forms, anchor-navigation timing and crawler integration depend on the responsible owners.
5. Confirm actual GPT uptake/current rubric lookup on a genuine Editorial run; author/date/asset/publication details remain Editorial operating tasks.

## Last Confirmed

30 October 2026. Portal/draft integration working; HTML-transfer issue explicitly retained as open. Current technical truth must be checked in the implementation repository; no live publication implied.
