# Tasks

## Open

- [ ] Create reusable templates for the AI Enablement Series
  - Area: AI Enablement Series
  - Status: Open
  - Next step: Create the reusable Series presentation template, a lightweight contributor template and reusable Slack post templates for Agenda, Topic Call and Update posts.
  - Context: These formats should reduce recurring preparation effort without turning the Series into a centrally prepared presentation process.
  - Source: Dominik consolidated the recurring AI Enablement preparation model on 2026-08-23

- [ ] Prepare the next AI Enablement session on 2026-09-08
  - Area: AI Enablement Series
  - Status: Open
  - Next step: Prepare the remaining session content and presentation; Marie-Lord Lumumba is confirmed for the Brand Agent Show & Share contribution.
  - Context: Marie will present the Brand Agent, reusable Skill approach and her research on when to use an Agent versus a Skill or another setup. Dominik and Marie will align her contribution on 2026-09-04. The calendar event itself is not tracked as a separate dashboard task.
  - Source: Marie confirmed her contribution with Dominik on 2026-08-24

- [ ] Bundle LP Builder frontend questions for Mukhammadjon / Core Frontend
  - Area: Landing Page Builder
  - Status: Open, narrowed to true frontend/runtime gaps
  - Next step: Bundle only the remaining verified frontend-only questions for review with Mukhammadjon / Beatrice after they are isolated from composition and content issues.
  - Context: The static module/composition model is now validated enough for the Handbook pilot. Remaining frontend topics include central bridge loading and runtime ownership for Counter, Card Carousel, Sticky Footer and Video. The pilot can continue with the bridge linked once in page `htmlSource`, so these questions no longer block structural migration proof.
  - Source: LP Builder consolidation and Handbook validation through 2026-09-04

- [ ] Run the Contentful migration pilot end to end
  - Area: Contentful Migration
  - Status: Open, first GPT batch proved orchestration; quality-gate mapping patch prepared but not yet active in GPT Knowledge
  - Next step: Replace the active GPT Knowledge versions of `module-contracts.md`, `b2b-handbook-composition.md` and `component-library.html` with the patched versions, then rerun the same eight-page batch against the existing Contentful drafts and compare module/visual fidelity before scaling.
  - Context: Root cause is confirmed in the mapping layer, not batch orchestration. The migration-ready packages are sufficient for the observed issues. The patch makes numbered sequences map to `handbook-step-media` with dedicated number treatment, promotes the existing `teaser-split-image-right` pattern for non-sequential text+media, establishes `specific ACTIVE module beats generic Foundation`, and requires an internal Page Module Plan plus coverage check before Contentful mutation. No new module was built; `migration/ready` and Contentful were unchanged. The original GPT Knowledge uploads are read-only in Codex, so the patch must be applied to the active GPT Knowledge before QA rerun.
  - Source: GPT batch visual QA and mapping-layer diagnosis confirmed on 2026-09-05

- [ ] Prepare Sitemap V2 from the existing SEO Excel source
  - Area: Contentful Migration
  - Status: Open, supporting pilot task
  - Next step: Keep `Anbieten Pages.xlsx` as the fachlich SSOT, refactor the visual HTML sitemap so its data can be regenerated from the workbook, and continue overlaying Screaming Frog/live-status information. Start with a manual/lightweight sync; do not build write-back or a new sitemap app for the pilot.
  - Context: The existing Excel landscape is fragmented and not always fully current, but those files remain the authoritative business/SEO decision source. The visual sitemap should expose inconsistencies by combining Excel decisions with live crawl status instead of creating a competing master dataset. A later V2 may read SharePoint/Excel automatically via Microsoft Graph. If multiple workbook sources are added, use a small source manifest mapping directories/page groups to the authoritative workbook.
  - Source: Sitemap source-model discussion on 2026-08-30

- [ ] Pilot persistent image storage for AEM migration
  - Area: Marketing Content Platform
  - Status: Open, ready for platform alignment; migration-side upload contract prepared
  - Next step: Let Peter drive the actual storage/S3 pilot with Allan / the relevant platform contacts; align the prepared 87-blob upload plan and storage contract, then confirm the concrete storage target, ownership, authentication, delivery URL and platform header/security requirements before any real upload.
  - Context: Migration now provides verified SHA-based identities, stable target keys, a deterministic 87-blob upload plan, byte-verified Content-Type rules, idempotency/failure behavior and the target_url promotion gate. Dominik should keep defining integration requirements without becoming the ongoing AWS/storage operator.
  - Source: Asset ownership direction from 2026-08-30; storage/upload contract confirmed on 2026-09-04

- [ ] Set up B2B automation discovery with Juliane
  - Area: E-Mail Automation Professional
  - Status: Open, deliberately deprioritized for the coming weeks
  - Next step: Revisit when Automation becomes relevant again; then prepare a kickoff with Juliane and schedule a meeting to define concrete automation ideas, relevant triggers and the desired reaction or offer for each trigger.
  - Context: The topic should remain visible, but it is not a near-term priority. When prioritization allows, remind Dominik to prepare and schedule the kickoff rather than pushing the discovery now.
  - Source: Dominik deprioritized B2B Automation on 2026-08-26

- [ ] Clarify Salesforce feasibility for B2B automation
  - Area: E-Mail Automation Professional
  - Status: Open, deliberately deprioritized for the coming weeks
  - Next step: Revisit after the business scenarios are prioritized again; then clarify how Data Lake signals and Salesforce could support a trigger-based B2B automation flow and whether a setup analogous in principle to HeyImmo with Iterable is feasible.
  - Context: In a discussion on 2026-08-24, Taha explained that he works with the Data Lake and builds setups such as the LOFT visibility project, but could not confirm whether Salesforce can be used in the same way as Iterable. The route appears potentially feasible but does not need near-term investigation while the broader Automation work is deprioritized.
  - Source: Dominik deprioritized B2B Automation on 2026-08-26; technical context from discussion with Taha on 2026-08-24

- [ ] Re-establish the Allan-and-Lars alignment cadence
  - Area: Creative Ops
  - Status: Open
  - Next step: Agree whether future check-ins should be separate or joint and confirm a useful cadence before creating new recurring calendar series.
  - Context: The former recurring meetings appear to have been cancelled when paused for vacation; the previous rhythm is uncertain.
  - Source: Dominik confirmed the task on 2026-07-22

## Waiting

- [ ] Clarify Coupa AI support
  - Area: Coupa AI Support
  - Status: Waiting for another person or decision
  - Waiting for: Jana Homfeldt's response about the responsible Coupa contact and existing or planned AI support
  - Dominik's next step: Reassess the topic once the central ownership and support situation are clear.
  - Context: The separate PO-agent review is no longer part of the active dashboard task.

## Suggestions

- [ ] Remove the checked legacy `Shared` folder
  - Area: AI-supported work organization system
  - Status: Suggestion
  - Reason: The folder contains no relevant files or active references; removal would simplify the workspace but is not required.

- [ ] Turn the Agent Process Guide into a reusable standard after practical use
  - Area: AI Enablement Series
  - Status: Suggestion
  - Reason: Improve the guide from real project experience before adopting it as a reusable standard.

## Completed

- [x] Validate the CoreCSS/COSMA HTML contract
  - Area: Landing Page Builder
  - Completed: 2026-09-04
  - Outcome: The Contentful Builder foundation, module contract and page-composition model are validated far enough for the migration pilot. The active catalogue now contains 25 modules; the Handbook-specific `handbook-category-card` and `handbook-step-media` contracts were independently validated on the Contentful test page, and remaining issues are isolated frontend/runtime gaps rather than a blocker to structural migration.

- [x] Complete the Landing Page Builder and Contentful MVP
  - Area: Marketing Content Platform
  - Completed: 2026-08-31
  - Outcome: Dominik completed the handover and validated his own duplicated Contentful-enabled GPT end to end: OAuth, draft creation, preview, update, explicit publish and production URL work. Continued work has moved from proving the basic Contentful MVP into the migration-focused Builder and native CoreCSS/COSMA contract.

- [x] Connect with Yvonne on the Content Marketing Agent
  - Area: Content Marketing Agent
  - Completed: 2026-08-26
  - Outcome: The follow-up is arranged; Dominik will meet Yvonne and her team next week so they can present their current projects. No separate active dashboard task is needed for the scheduled meeting.

- [x] Clarify Ciaran's remaining LP Builder & Contentful capacity
  - Area: Marketing Content Platform
  - Completed: 2026-08-26
  - Outcome: No further budget is available for Ciaran, so additional support from him should not be assumed in current platform or migration planning.

- [x] Define the Brand Agent MVP with Marie
  - Area: Brand Agent – Tone of Voice
  - Completed: 2026-08-24
  - Outcome: Marie demonstrated a near-complete Brand Agent MVP and has implemented the tone-of-voice logic as a reusable Skill for integration into other agents; the work has moved from MVP definition into final review and reuse preparation.

- [x] Complete Newsletter Automation discovery with Stefanie
  - Area: Newsletter Automation
  - Completed: 2026-08-24
  - Outcome: Dominik and Stefanie Mersmann confirmed that no newsletter workflow should currently be automated because missing user-journey and targeting signals are the main constraint on relevant content; reassess only if those signals materially improve.

- [x] Retire the standalone AI Team-Check results LP task
  - Area: AI Enablement Series
  - Completed: 2026-08-23
  - Outcome: The completed Team-Check now serves as evidence inside the running AI Enablement Series; the standalone results-LP deliverable is no longer needed.

- [x] Retire the standalone AI Enablement landing-page task
  - Area: AI Enablement Series
  - Completed: 2026-08-23
  - Outcome: The successful kickoff, recurring Series format and lightweight communication model superseded the earlier general Enablement landing-page deliverable.

- [x] Meet Andrea Mendieta about company agent discovery
  - Area: Creative Hub
  - Completed: 2026-08-18
  - Outcome: Andrea confirmed that `Lunch & Learn - Meet my Agent` is currently in summer break and that ScoutAcademy contains only a small number of past session recordings, so no reliable company-wide agent inventory emerged from the meeting.

- [x] Schedule the recurring AI Enablement sessions
  - Area: AI Enablement Series
  - Completed: 2026-08-21
  - Outcome: The recurring series was invited for every second Tuesday from 12:30–14:00, starting 2026-09-08, with Charlottenburg (07-405) as the room and the kickoff participant group invited.

- [x] Align AI operating model and priority set with Jorin
  - Area: AI Strategy & Steering
  - Completed: 2026-08-20
  - Outcome: Jorin supported the separation of broad enablement from reliable delivery and agreed with Dominik's proposed focus on AI Enablement, LP Builder & Contentful, Contentful migration, E-Mail Automation and identifying the next high-impact AI use case.

- [x] Confirm PR Intelligence Hub pause
  - Area: PR Intelligence Hub
  - Completed: 2026-08-20
  - Outcome: The project is on hold because the PR team lacks implementation capacity; Jorin participated in the pause decision. Any restart requires explicit priority and delivery capacity.

- [x] Finalize the AI Enablement kickoff story and presentation
  - Area: AI Enablement Series
  - Completed: 2026-08-20
  - Outcome: The kickoff concept and final presentation were completed around the Learn, Show & Share and Explore model. The previous shared-project-slide requirement was dropped because the Series no longer assumes that every participant maintains an individual agent or workflow project.

- [x] Deliver the Plus FOMO email design for implementation
  - Area: E-Mail Automation – Plus FOMO
  - Completed: 2026-08-12
  - Outcome: Dominik delivered the expected design work. The email will be built directly in Iterable; Mitch's AWS/GitHub module process will not be used for this implementation.

- [x] Complete the AI Enablement Teamlead alignment
  - Area: AI Enablement Series
  - Completed: 2026-08-10
  - Outcome: The Teamlead meeting took place and the first AI Enablement Series appointment was scheduled for 2026-08-20.

- [x] Hold PR Intelligence Hub follow-up session
  - Area: PR Intelligence Hub
  - Completed: 2026-08-12
  - Outcome: The team aligned on the small-step MVP approach, discussed the Medienspiegel as the first external source candidate and agreed that team organization and the MVP boundary need to be defined before implementation.

- [x] Validate Contentful integration progress with Mukhammadjon
  - Area: Landing Page Builder & Contentful
  - Completed: 2026-08-11
  - Outcome: Mukhammadjon demonstrated the working GPT Actions flow and Dominik independently verified Contentful draft creation and update through the shared Contentful-enabled Landing Page Builder.

- [x] Consolidate AI Team-Check findings into AI Enablement
  - Area: AI Enablement Series
  - Completed: 2026-08-09
  - Outcome: The completed Team-Check is now treated as the discovery and evidence phase of AI Enablement; its findings are integrated into the series rationale and active work is tracked under one project.

- [x] Complete the final Social Media interview for AI Team-Check
  - Area: AI Enablement Series
  - Completed: 2026-08-03
  - Outcome: The interview completed the planned discovery phase and added findings on daily operational AI use, natural-language quality, tool orientation, rights checks and cross-team visibility of agents.

- [x] Consolidate the role and portfolio into one steering layer and two pillars
  - Area: AI Strategy & Steering
  - Completed: 2026-07-31
  - Outcome: AI Strategy & Steering now sits above AI Enablement and AI Creative Operations; project names, task presentation and active initiative classification were aligned.

- [x] Complete the Event Team interview with Sophie
  - Area: AI Enablement Series
  - Completed: 2026-07-27
  - Outcome: The interview added Event Team findings on use-case selection, reliability, Coupa administration and an Outlook-based PO agent.

- [x] Follow up with Eve and Peter on the Creative Hub wireframe
  - Area: Creative Hub
  - Completed: 2026-07-27
  - Outcome: A collaborative whiteboard was shared and the topic moved into joint exploration and alignment.

- [x] Set up the Public publishing repository and workflow
  - Area: AI-supported work organization system
  - Completed: 2026-07-23
  - Outcome: The repository, publication structure, validation checks, GitHub Pages and controlled approval workflow were configured and tested.

- [x] Complete the AI Team-Check interview with Andreas Böhm
  - Area: AI Enablement Series
  - Completed: 2026-07-22
  - Outcome: The interview reinforced the need for smaller MVPs and highlighted overlapping initiatives, disconnected systems and manual reporting.

- [x] Create the first Agent Process Guide
  - Area: Brand Agent – Tone of Voice
  - Completed: 2026-07-21
  - Outcome: A compact guide was created for kick-off, MVP definition, build support, testing and handover or expansion.