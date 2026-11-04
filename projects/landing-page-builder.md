# Landing Page Builder

## Purpose

Enable controlled, reusable landing-page production for Marketing. The Contentful-enabled Custom GPT supports both normal composition and migration; the legacy AEM Builder remains a separate production context.

## Current Status

- **Editorial technical pilot (3–4 November):** LP Builder reported five article publishes, three rubric-overview publishes and three old-article unpublishes, with complete read-backs. Dominik confirmed the portal appearance. The five fake-author entries are narrowly allowed technical pilots with a visible notice; final editorial clearance and a normal newsroom launch remain open. Exact identities and production targets: [Week 45](../documentation/2026-W45.md).
- **Article Package intake:** normal chat/readable attachment maps metadata, text, image, sources and shared article/large-teaser intro into an unpublished draft and the matching overview. Explicit update targets and slug-collision protection preserve existing identities. Tags lack an appropriate Action field and are reported as not stored.
- **Rubric integration:** the latest pilot updated the existing Immobilienmarkt, Recht & Politik and Finanzen overviews to a 2/2/1 teaser distribution. Recht & Politik retains `dev-scaling-editorial-wohnrecht-mvp`. Article-only drafts had not changed overviews; the scoped cutover did. This confirms that operation, not a generic one-prompt automatic-routing regression result.
- **HTML transfer issue remains open by explicit instruction on 30 October.** A 2 October report said the large-payload issue was fixed, while older `FCT-1938` notes remained unresolved. Dominik now requests keeping the item open pending confirmation; do not infer current reliability or close it from the earlier report.
- Latest supplied Codex report: 66/66 local contract/runtime checks, including the exact-ID author exception and pilot notice. Canonical layout is notice when required → headline → author → title figure/caption → intro → body; tags after body where supported. These local checks and the completed Contentful pilot do not replace the generic live GPT regression baseline of 22 September.
- Codex edits local Instructions/Knowledge; Dominik uploads the changed files into the GPT. Existing GPT Actions perform Contentful writes; Codex has no Contentful access in this workflow. Optional headline alternatives are manually removed before handoff; no Builder extension is wanted for them now.
- No new content model, backend or portal rewrite is approved. Earlier architecture-review outcome remains unconfirmed; successful layout updates and pilot cutover do not imply a broader redesign.

- **Editorial image policy:** Codex removed mandatory remote fetching, decoding, pixel/availability proofs, ZIPs and checksums from the actual local Building Policy after repeated environment DNS failures. Complete safe package/author URLs are used; unresolved placeholders and missing/unsafe URLs remain issues. Expected title/avatar sizes stay 1920 × 1080 / 240 × 240. Builder network failures do not block a write/publish; Writer-side technical export remains a separate requirement.
- **Pilot authors:** exactly the five documented entries may use Maria Müller / Elisabeth König, status test-placeholder, unlinked names and exactly one visible “Technischer Pilot – fiktives Autorenprofil” before the header. All other test entries retain the normal publication guard. Regular authorship/factual approval is not settled by this exception.

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
- No specific LP Builder follow-up appointment is confirmed here. The 4 November editorial data/freelancer meetings are tracked in the Editorial briefing; do not revive older LP Builder appointments.

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
5. Treat the five-article pilot cutover as completed. Use bounded checks if normal one-prompt routing needs separate acceptance; real authorship, factual review, permanent image delivery and regular publishing ownership remain Editorial operating tasks.

## Last Confirmed

4 November 2026. Five-article technical publication and three-overview cutover are reported complete and visually accepted by Dominik; general HTML-transfer reconfirmation remains open. Current implementation truth belongs to the technical repository. This narrow pilot is not regular editorial clearance.
