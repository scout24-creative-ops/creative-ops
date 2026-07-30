# Tasks

## Open

- [ ] Develop the Creative Hub agent-curation strategy
  - Area: Creative Hub
  - Status: Partially complete
  - Next step: Finalize the source list and Hub-suitability requirement profile, formalize the direct in-agent prompt, define the owner review and approval step, and test the complete process with ScoutData or another relevant agent.
  - Context: A recurring four-stage model is defined: find agents, assess Hub fit, translate approved information into Hub formats and share the new Hub entry. Initial sources are relevant Slack channels, `Meet my Agent`, Team AI Operations and team meetings, with candidates converging at Dominik. A Skill cannot inspect a foreign agent from outside, so the practical MVP is a tested prompt executed directly in the source agent. It generates a compact agent description, relevance assessment, connected-tool information and initial Slider, Agent Card and Slack content. Owner validation remains required before publication.
  - Source: Agent-curation concept and prompt tests on 2026-07-30

- [ ] Create the Creative Hub content roadmap
  - Area: Creative Hub
  - Status: Open
  - Next step: Sequence the first expansion steps, starting with the slider and then agents, libraries and knowledge content, and define when recurring source integrations such as selected Slack channels should be introduced.
  - Context: Dominik, Eve and Peter agreed to increase relevance quickly without creating disproportionate technical or editorial effort. The first focus areas are agents, news and knowledge, and reusable libraries.
  - Source: Alignment with Eve and Peter on 2026-07-30

- [ ] Consolidate the Creative Hub communication structure
  - Area: Creative Hub
  - Status: Open
  - Next step: Define how the Hub, existing Slack channels, Frontify and the planned AI Enablement series should work together, including the primary destination for durable content and the role of each communication format.
  - Context: Hub-related information is currently distributed across several channels and initiatives. A coherent structure should reduce fragmentation and support Eve's communication and targeted rollout planning.
  - Source: Alignment with Eve and Peter on 2026-07-30

- [ ] Develop the concept for the binding AI enablement series
  - Area: AI Enablement
  - Status: Partially complete
  - Next step: Revise the HTML one-pager and complete the decision-ready concept, including the final cadence, participant setup, slide templates and protected working time, for alignment after Jorin's return.
  - Context: The concept now uses two initial 45-minute sessions followed by a recurring series. The second session combines use-case and MVP guidance with the presentation of already prepared projects. A shared live agent build and a fixed final session are no longer planned; testing, decisions and continuation are handled through the regular updates. The visual one-pager is being simplified into three process-based accordion items.
  - Source: Alignment with Jorin on 2026-07-21 and concept refinement on 2026-07-27

- [ ] Complete the final Social Media interview for the AI Team-Check
  - Area: AI Team-Check
  - Status: Open
  - Next step: Conduct the scheduled shared interview on Wednesday with Caroline von Cramm, Celina Mathiske, Jason Diaz Campos and Lena Mickel.
  - Context: Sophie represented the Event Team when Shari did not have time, but she did not cover Social Media. The four Social Media colleagues have been invited, and Shari has been informed that a separate interview is no longer required. There is no immediate urgency because Jorin returns from vacation in approximately two weeks.
  - Source: Interview scheduled on 2026-07-27

- [ ] Consolidate the AI Team-Check findings into cross-team themes
  - Area: AI Team-Check
  - Status: Open
  - Next step: After the Social Media interview, reduce the complete findings to a small number of recurring barriers, enablement needs and strategic opportunity themes, including use-case selection and reliability.
  - Context: The Event Team findings have been incorporated, but the Social Media perspective is still missing. The consolidated themes are needed for the management view and provide input to the separate AI Enablement project.
  - Source: Scope clarification on 2026-07-27

- [ ] Finalize the visual AI Team-Check results presentation
  - Area: AI Team-Check
  - Status: Partially complete
  - Next step: Complete the current HTML management view after incorporating the Social Media interview, without person- or team-based scoring and without unsupported numerical precision.
  - Context: An initial landing-page presentation exists, but the structure and visual implementation are not yet final.
  - Source: Work in progress and scope clarification on 2026-07-27

- [ ] Define and confirm the Brand Agent MVP
  - Area: Brand Agent – Tone of Voice
  - Status: Open
  - Next step: Use the upcoming meeting to agree the smallest testable scope, the first test case, success criteria, responsibilities and initial implementation steps with Marie.
  - Context: The current MVP hypothesis is still a proposal. Marie owns implementation; Dominik provides structure, prioritization and quality guidance.
  - Source: Project alignment on 2026-07-21

- [ ] Prepare and facilitate the next PR Intelligence Hub working session
  - Area: PR Intelligence Hub
  - Status: Open
  - Next step: Prepare the session so the team can confirm the MVP, distribute roles and responsibilities, agree the working model and output channel, and prepare the first small test run.
  - Context: The kick-off, concept and roadmap have been completed and the small-step MVP direction was positively received. The next session should turn the shared understanding into a concrete operating setup.
  - Source: Project handover confirmed on 2026-07-26

- [ ] Re-establish the recurring alignment setup with Allan and Lars
  - Area: Stakeholder alignment
  - Status: Open
  - Next step: Align with Allan and Lars on whether future check-ins should be separate or joint and agree a useful cadence before creating new recurring calendar series.
  - Context: The recurring meetings appear to have been cancelled entirely when they were paused for Dominik's vacation. The previous rhythm is uncertain; likely every two weeks for 45 minutes with Allan and monthly with Lars.
  - Source: Dominik confirmed the task on 2026-07-22

- [ ] Check in with Mukhammadjon on the Contentful implementation progress
  - Area: Contentful Marketing MVP
  - Status: Open
  - Next step: Send Mukhammadjon a Slack message during KW31 asking how far the Contentful work has progressed, whether anything is blocked and whether support or clarification is needed.
  - Context: Bea expects Mukhammadjon to start working on the Landing Page Builder integration for Contentful in KW31. Dominik wants to maintain visible follow-up and make sure the implementation is actively progressing before the first possible end-to-end tests after 2026-08-10.
  - Source: Bea's Slack update and Dominik's confirmation on 2026-07-22

- [ ] Build reusable client-stable email standards for Codex
  - Area: E-Mail Automation
  - Status: Open
  - Next step: Review the confirmed Plus FOMO and HeyImmo rendering learnings and turn them into a first repository standard with concise `AGENTS.md` rules, detailed email-client guidelines, reusable tested components and a small automated HTML-check script.
  - Context: Codex should not rely on chat memory for recurring email issues. The durable setup should capture approved patterns for Make It Better typography, explicit paragraph spacing, mobile-first fluid tables, Outlook/VML buttons and voucher pills, hosted rendering assets, DIMS3 image handling, footer reuse and required full-mail/module/stress tests. Reusable components should include at least the fluid shell, primary VML CTA, voucher pill, responsive property image and approved footer. Automated checks should detect common regressions such as missing font setup, default paragraph margins, mismatched HTML/VML links, local image paths, unsafe fixed widths and malformed conditional comments. Only solutions confirmed through real rendering tests should become approved global patterns.
  - Source: Plus FOMO implementation learnings and Dominik's confirmation on 2026-07-29

## Waiting

- [ ] Continue the Plus FOMO email after presentation feedback
  - Area: E-Mail Automation – Plus FOMO
  - Status: Waiting for feedback
  - Waiting for: Feedback from the 2026-07-30 project presentation
  - Dominik's next step: Review confirmed feedback, update both email concepts and the implemented first variant where needed, validate the DIMS3 image resizing with real listings and then prepare a controlled test of Mitch's AWS/GitHub module process.
  - Context: Dominik reviewed Alisa's two initial designs, aligned feedback with her, redesigned both concepts and implemented the first responsive Outlook-aware reference mail with Codex. The mail is currently ready for presentation feedback; the second concept should reuse the established structure.

- [ ] Align the AI Enablement concept with Jorin
  - Area: AI Enablement
  - Status: Waiting for another person or decision
  - Waiting for: Jorin's return and concept alignment
  - Dominik's next step: Complete the revised three-part concept and visual overview during Jorin's vacation.

- [ ] Clarify Coupa AI support and review the existing PO agent
  - Area: AI Team-Check
  - Status: Waiting for another person or decision
  - Waiting for: Jana Homfeldt's response about the responsible Coupa contact and existing or planned AI support
  - Dominik's next step: After the Coupa clarification, speak with Franziska Stober about her Outlook-based PO-status agent and assess whether its learnings are reusable.
  - Context: Sophie identified Coupa as a major administrative pain point for the Event Team. Central ownership and existing plans should be understood before any solution work is started.

## Suggestions

- [ ] Offer a discovery conversation to Yvonne about the Content Marketing Agent
  - Area: Content Marketing Agent
  - Status: Suggestion
  - Reason: Andreas described the existing initiative during the AI Team-Check interview. Dominik proactively offered support, but this is not a formal assignment. A short discovery conversation would clarify status, ownership, MVP scope and whether support is useful.

- [ ] Offer a discovery conversation to Steffi about Newsletter Automation
  - Area: Newsletter Automation
  - Status: Suggestion
  - Reason: Andreas described the existing newsletter and content automation work during the AI Team-Check interview. Dominik proactively offered support, but this is not a formal assignment. A short discovery conversation would clarify current work, pain points, ownership and the smallest useful next step.

- [ ] Remove the checked legacy `Shared` folder
  - Area: AI-supported work organization system
  - Status: Suggestion
  - Reason: The folder was checked and contains no relevant files or active references. Removing it would simplify the workspace, but it is not required for the Public publishing workflow.

- [ ] Turn the Agent Process Guide into a reusable standard after practical use
  - Area: AI Enablement
  - Status: Suggestion
  - Reason: The guide already covers kick-off, MVP definition, build support, testing and handover. Improving it from real project experience could create a reusable working standard for future agent initiatives.

## Completed

- [x] Complete the Event Team interview with Sophie
  - Area: AI Team-Check
  - Completed: 2026-07-27
  - Outcome: Sophie represented the Event Team because Mohamed Sharia Rahim did not have time. The interview added findings on use-case selection, reliability, Coupa administration and Franziska Stober's Outlook-based PO agent. Social Media remains open as a separate final interview.

- [x] Follow up with Eve and Peter on the Creative Hub wireframe
  - Area: Creative Hub
  - Completed: 2026-07-27
  - Outcome: Dominik created a collaborative whiteboard with the wireframe, possible content areas and the Slack-content-agent idea, invited Eve and Peter and moved the topic into joint exploration and alignment.

- [x] Set up the Public publishing repository and workflow
  - Area: AI-supported work organization system
  - Completed: 2026-07-23
  - Outcome: `scout24-creative-ops/public`, the project-based publication structure, metadata and hash checks, GitHub Pages and workspace-wide Codex routing were configured and tested. An explicit publish command from a source project now starts the Public workflow, reports the expected direct link and requests separate approval before commit and push.

- [x] Complete the AI Team-Check interview with Andreas Böhm
  - Area: AI Team-Check
  - Completed: 2026-07-22
  - Outcome: The interview reinforced the need for smaller MVPs and highlighted overlapping initiatives, disconnected systems and manual reporting as recurring barriers.

- [x] Create the first Agent Process Guide
  - Area: Brand Agent – Tone of Voice
  - Completed: 2026-07-21
  - Outcome: A compact HTML-based guide was created for kick-off, MVP definition, build support, testing and handover or expansion.