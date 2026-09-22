# Tasks

## Open

- [ ] Complete LP Builder migration-readiness capabilities
  - Area: Landing Page Builder
  - Status: Open
  - Next step: Add the confirmed user-facing Design Library elements to the Module Library: Rounded Buttons, Mobile Full Width Button, Chevron Link, Colors & Surfaces (Accent Colors, Neutrals, Text), Lists, and representative 24 px / 48 px Icons with Frontify/name guidance. Then define how standalone headline/body-text capabilities should be represented, while keeping technical primitives such as spacing in the Building Policy.
  - Context: The Builder is already usable for migration, but these remaining authoring/policy gaps should be closed so migration pages do not require ad-hoc HTML or ambiguous module behavior.
  - Source: Migration backlog cleanup confirmed on 2026-09-18

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

- [ ] Fix CRAWL_REBUILD temporary asset handling
  - Area: Landing Page Builder
  - Status: Open, confirmed migration-policy correction
  - Next step: Update the technical `migration-mode.md` so representable modules may use usable AEM/source asset URLs temporarily when final S3/scaler URLs are not ready, report those assets as pending migration, and reserve placeholders for genuinely missing assets or unsupported structures. Then rerun the migration-specific acceptance cases, using the Sichtbarkeit page as the main regression reference.
  - Context: The 2026-09-18 Sichtbarkeit rebuild replaced representable image/text sections with `ASSET_MISSING` callouts, which removes too much migration value. Temporary AEM URLs are acceptable in Drafts provided they are tracked for later automated bulk rewrite through the asset manifest/mapping; the contact form remains a valid `FORM_MISSING` placeholder.
  - Source: CRAWL_REBUILD test and migration asset decision confirmed on 2026-09-18

## Waiting

- [ ] Clarify timing for SEO anchor-navigation module
  - Area: Landing Page Builder
  - Status: Waiting for Ulrike's migration-scope clarification
  - Waiting for: Ulrike to confirm whether the sticky-sidebar anchor-navigation pattern is required in the current migration scope.
  - Dominik's next step: If it is needed for the current migration wave, prioritize building the already investigated SEO module; otherwise keep it in the Builder backlog for later.
  - Context: The module concept has already been investigated and uses a sticky sidebar for anchor navigation. The open question is timing/priority, not whether the capability is conceptually useful.
  - Source: Migration backlog cleanup confirmed on 2026-09-18


- [ ] Coordinate Migration Crawler implementation handoff
  - Area: Contentful Migration
  - Status: Waiting for Beatrice's follow-up next week
  - Waiting for: Bea to confirm whether Jonas has useful handover material from his initial review and whether Maciej can take over after his current task, assuming no urgent AEM work intervenes.
  - Dominik's next step: Reassess the implementation path when Bea follows up; do not start a parallel crawler build in the meantime.
  - Context: Stefan created Linear ticket `LCMS-7518` for the focused asset-discovery/download component and estimates roughly one to two days of implementation. The broader LP Builder requirements remain in Dominik's Migration Crawler briefing. Temporary AEM/static asset URLs can be used in migration drafts as a transition state until persistent asset delivery is ready.
  - Source: Slack alignment with Stefan and Beatrice on 2026-09-18

- [ ] Retest large LP Builder read-back at migration scale
  - Area: Landing Page Builder
  - Status: Waiting, central Bridge loading and the current Action flow are stable; large read-back remains the isolated scale check
  - Waiting for: A suitable platform test/fix path for `getLpBuilderPage` at roughly 50 KB.
  - Dominik's next step: Retest full `getLpBuilderPage` read-back with a migration-scale page when the platform path is ready and verify lossless full HTML retrieval.
  - Context: The central Bridge CSS now loads correctly again, and the 2026-09-17 three-prompt GPT regression suite passed CREATE, complex full-HTML EDIT and the full lifecycle without Action/auth errors. The previous Bridge and intermittent-auth blockers are therefore no longer active in the current baseline. The earlier ~50 KB `ResponseTooLargeError` was not covered by this smaller regression entry and remains a separate explicit check.
  - Source: Current GPT regression baseline and Mukhammadjon fixes confirmed on 2026-09-17

- [ ] Set up Marketing Asset Library S3 pilot
  - Area: Marketing Asset Library
  - Status: Waiting for John Ford's infrastructure guidance; asset-crawler path is technically clarified
  - Waiting for: John's preferred GitHub / CloudFormation / deployment path for the confirmed `is24-cms` pilot.
  - Dominik's next step: Follow John's infrastructure setup when he responds and test one original asset end to end: AEM original -> S3 -> scaler/delivery URL -> LP Builder/Contentful.
  - Context: Stefan created `LCMS-7518` for AEM asset discovery/download and confirmed that DAM rendition URLs can be resolved to originals; most relevant images are page-stored and have no renditions. The crawler implementation itself is coordinated separately with Bea/Maciej. A separate new Marketing AWS account remains paused for the MVP.
  - Source: John Ford alignment plus Stefan/Bea follow-up confirmed on 2026-09-18

- [ ] Clarify B2B contact form plan for Contentful
  - Area: Contentful Migration
  - Status: Waiting for Beatrice feedback
  - Waiting for: Beatrice's current implementation plan and timing for the B2B contact form module.
  - Dominik's next step: If useful, connect Ulrike with the relevant developer so B2B/Salesforce requirements can be clarified while the component is being built.
  - Context: The contact form is expected to become one of the most important remaining B2B migration capabilities. Existing B2B forms use Salesforce and require multiple variants/field sets; the LP Builder should configure/integrate a centrally managed form rather than recreate Salesforce logic per page.
  - Source: Dominik asked Beatrice for the current contact-form plan and offered Ulrike as B2B support on 2026-09-06

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

- [x] Align Marketing Asset Library direction with John Ford
  - Area: Marketing Asset Library
  - Completed: 2026-09-17
  - Outcome: John confirmed that the existing Scout image-scaler approach is a strong fit for the migration pilot and a possible future cross-Marketing Asset Library. He recommended exporting original AEM assets to S3 while preserving source-path structure where practical, mapping crawled page references back to those originals, and then using scaler-generated production delivery URLs. Advanced cropping remains outside the MVP. Bea identified the existing `is24-cms` AWS account as the pilot home, and John subsequently confirmed that the account is sufficient.

- [x] Validate the Codex crawl for Gold product-detail pages
  - Area: Contentful Migration
  - Completed: 2026-09-08
  - Outcome: The crawl identified 38 product tiles and 36 unique targets, including one redirect, two duplicate targets and one HTTP-404 Objektdatenbank target. It produced per-page source/content/link/asset packages with 1,723 asset references, 300 downloaded originals and zero download errors. Rendered browser DOM and full-page screenshots remain unavailable for all 36 targets, so dynamic/interactive content is not fully verified. The crawl is sufficient as the current working source inventory; Dominik's focus should now move to LP Builder readiness while operational migration shifts to Ulrike. Mitch is not part of Contentful Migration and should not be suggested for migration work; he is relevant in E-Mail Automation contexts instead.

- [x] Simplify the reusable AI Enablement preparation model
  - Area: AI Enablement Series
  - Completed: 2026-09-07
  - Outcome: Dominik decided not to create recurring Series presentation decks or a contributor presentation template because the preparation overhead is too high. Future sessions use the Scout Wiki session page as the agenda and documentation surface, while Dominik facilitates verbally and contributors decide themselves how they present or demo. Reusable Slack patterns remain in place.

- [x] Prepare the AI Enablement session on 2026-09-08
  - Area: AI Enablement Series
  - Completed: 2026-09-07
  - Outcome: The first recurring 90-minute session is prepared around all three pillars: Learn uses Scout Wiki with a live ChatGPT knowledge-flow demo; Show & Share includes Marie-Lord Lumumba, Peter and Sophie; Explore discusses whether a central knowledge source is needed and what ownership and maintenance would require. The moderator flow, participant-facing Wiki page and bilingual Slack agenda are ready.

- [x] Validate the CoreCSS/COSMA HTML contract
  - Area: Landing Page Builder
  - Completed: 2026-09-04
  - Outcome: The Contentful Builder foundation, module contract and page-composition model are validated far enough for the migration pilot. The active catalogue now contains 25 modules; the Handbook-specific `handbook-category-card` and `handbook-step-media` contracts were independently validated on the Contentful test page, and remaining issues are isolated frontend/runtime gaps rather than a blocker to structural migration.

- [x] Complete the Landing Page Builder and Contentful MVP
  - Area: Landing Page Builder
  - Completed: 2026-08-31
  - Outcome: Dominik completed the handover and validated his own duplicated Contentful-enabled GPT end to end: OAuth, draft creation, preview, update, explicit publish and production URL work. Continued work has moved from proving the basic Contentful MVP into the migration-focused Builder and native CoreCSS/COSMA contract.

- [x] Connect with Yvonne on the Content Marketing Agent
  - Area: Content Marketing Agent
  - Completed: 2026-08-26
  - Outcome: The follow-up is arranged; Dominik will meet Yvonne and her team next week so they can present their current projects. No separate active dashboard task is needed for the scheduled meeting.

- [x] Clarify Ciaran's remaining LP Builder & Contentful capacity
  - Area: Landing Page Builder
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
  - Outcome: The recurring series was invited for every second Tuesday from 12:30–14:00, starting on 2026-09-08, with Charlottenburg (07-405) as the room and the kickoff participant group invited.

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
  - Area: E-Mail Automation – Seeker | Plus FOMO
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
  - Area: Landing Page Builder
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