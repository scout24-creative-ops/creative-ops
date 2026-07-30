# AI Hub and Agent Library

## Purpose

Provide a central, curated overview of AI agents and, over time, lighthouse projects, practical knowledge and other reusable AI content that is relevant across Marketing.

## Current Status

The Creative Hub is live at https://scout24-creative-ops.github.io/creative-hub/.

It currently presents agents built by Creative Studio that are relevant for multiple Marketing teams, including solutions such as the Landing Page Builder and Image Generator. The agents are presented clearly and accessibly, but the hub is still primarily an agent overview rather than a broader, active Marketing AI platform.

Jorin responded positively to the hub and said that it should be developed further.

Dominik has now developed a concrete first expansion concept and a local HTML homepage draft. The concept keeps the first step deliberately small while making the hub more visible, useful and content-rich.

Dominik has proactively initiated the broader development discussion with Eve and Peter, shared first proposals in Slack and created a collaborative whiteboard to collect topics and align the next direction.

A first working direction has now been agreed: increase relevance quickly without creating disproportionate technical or editorial effort, starting with agents, news and knowledge, and reusable libraries.

The agent-curation work has now been translated into a compact recurring operating model and a three-slide presentation for the next alignment. The model covers discovery, assessment, Hub transformation and communication rather than treating each new agent as a standalone publication task.

## Dominik's Role

Dominik helps shape the strategic direction and curation of the hub. He proposed developing it beyond a static overview of Creative Studio agents by adding more visible activity, relevant lighthouse projects, selected agents from other Marketing teams or departments and reusable knowledge content.

Dominik aligned this direction with Eve, who confirmed that the hub should be developed in this way.

Dominik's contribution is concept, structure, curation and visibility. He owns the content roadmap, the agent-curation approach and the strategy for bringing the Hub, Slack channels, Frontify and the planned enablement series into a more coherent communication structure. Operational implementation and ongoing maintenance should remain with Peter and the respective content or agent owners.

For the agent-curation process, relevant Hub candidates should converge with Dominik in his Creative Ops lead role so he can apply a consistent relevance and quality check before operational publication.

## Key Stakeholders

- Eve-Sabrina Vogelein
- Jorin Verges
- Peter
- Henrik
- Alex
- Allan
- Creative Studio agent owners
- Owners of relevant agents and AI projects from other Marketing teams or departments

## Important Developments

- May 2026: Started a Marketing Agent Dashboard within the Design Library.
- June 2026: Created a first AI Agent Library showing Creative Studio-owned agents.
- June 2026: Supported Peter's AI Hub implementation and prepared central publication via the Scout24 GitHub account.
- July 2026: Coordinated curation tasks around descriptions, categorization, removals and the Chart Agent entry.
- July 2026: Confirmed that the Creative Hub is live and currently focuses on Creative Studio agents with relevance across Marketing.
- July 2026: Jorin positively evaluated the hub and supported further development.
- July 2026: Dominik proactively initiated the next development phase and proposed expanding the hub with lighthouse projects, selected agents from other teams, guides, tool updates, videos and reusable practical content; Eve supported the direction.
- July 2026: Dominik observed through several colleague conversations and the limited engagement with the initial Slack announcement that the hub is not yet widely known.
- July 2026: Developed a first content and homepage concept that combines a full-width featured slider, curated agent rows, a shared `Updates & Guides` area, selected practice examples and stable useful links.
- July 2026: Created and iteratively refined a local HTML draft in the current Creative Hub design language. The draft currently features ChatGPT Skills, ScoutData and the Landing Page Builder in the hero slider.
- July 2026: Shared the rationale, first proposals and published wireframe with Eve and Peter in Slack as a basis for discussion rather than a final design.
- July 2026: Developed an agent concept that would scan selected relevant Slack channels and prepare a weekly list of possible content topics for the hub.
- July 2026: Created a collaborative whiteboard with the wireframe, possible content areas, page concepts and the Slack-content-agent idea, then invited Eve and Peter to contribute ideas and move the topic into joint alignment.
- July 2026: Agreed with Eve and Peter to begin the next expansion with agents, news and knowledge, and libraries, prioritizing relevant additions that can be delivered without a large maintenance burden.
- July 2026: Agreed a first division of responsibilities. Peter will prepare the slider, a reusable detail-page template, the library section and an Image Generator intro-video briefing. Eve will develop the communication cadence, channel and messaging approach, and targeted team outreach. Dominik will develop the agent-curation strategy, content roadmap and communication-channel structure.
- July 2026: Defined the first agent-curation model as a recurring four-stage process: find agents, assess Hub fit, translate approved information into Hub formats and share the new Hub entry.
- July 2026: Identified relevant Slack channels, the company-wide `Meet my Agent` series, Team AI Operations and team meetings as initial discovery sources.
- July 2026: Tested a Skill-based approach for inspecting foreign agents. The test showed that a Skill used from outside cannot automatically access another agent's configuration.
- July 2026: Developed and tested a direct in-agent prompt as the practical MVP. The prompt generates a compact self-description, relevance assessment, known connected tools or connectors and first drafts for the Hub slider, Agent Card and Slack post.
- July 2026: Refined the prompt so it excludes uploaded files, internal knowledge and integrated model capabilities from the external-tools field and returns `unknown` or `none` instead of inventing information.
- July 2026: Tests with Illustration Studio and Imagery Builder produced sufficiently strong outputs for the planned presentation and demonstrated the intended end-to-end outcome.

## Decisions

- The hub should prioritize understandable and relevant solutions rather than simply list everything.
- Agent descriptions and categories should make use cases and access clear.
- The hub should evolve beyond a static Creative Studio agent directory.
- Future content should include relevant lighthouse projects and selected agents from other Marketing teams or departments.
- The hub should also support reusable knowledge content such as guides, announcements, tool updates and practical examples.
- The first practical expansion should focus on three areas: agents, news and knowledge, and libraries.
- New relevance should be added quickly, but not at the cost of filler content, unnecessary complexity or disproportionate maintenance effort.
- Slack can be used to create visibility around useful topics, while the full and reusable content page lives in the Creative Hub.
- The first expansion should remain small: non-agent content should initially use one shared content model rather than separate blog, announcement and how-to systems.
- Detailed agent pages should remain optional and be used selectively where the added value justifies the maintenance effort.
- Communication should combine a sustainable recurring cadence with targeted outreach to the teams for whom a specific agent or topic is most relevant.
- Agent curation should operate as a repeatable four-stage process rather than an ad hoc publication workflow.
- A foreign agent cannot currently be inspected automatically through an externally selected Skill; the first practical extraction step should therefore use a prompt executed directly inside the relevant agent.
- The prompt-generated Hub texts are suitable as initial drafts for the current demo and pilot. The later target model may separate factual agent handover from centralized final copy generation to improve consistency.
- Owner review and approval remain required before publication, especially for missing facts, access information and final wording.

## Risks and Open Questions

- Long-term ownership and maintenance responsibilities are not yet fully documented beyond the current working split.
- The compact requirement profile for Hub suitability still needs to be finalized and tested.
- The final communication cadence and the balance between broad announcements and targeted team outreach still need to be tested.
- The long-term boundary between a Marketing-focused hub and a broader company-wide or Brand Hub overview is not yet defined.
- The content model must stay lightweight enough that the hub does not create disproportionate editorial maintenance.
- Agents may not know or expose ownership, maturity or tool configuration reliably. Unknown information must be routed back to the respective owner rather than inferred.
- It remains open whether final Slider, Card and Slack copy should continue to be generated inside the source agent or be produced centrally from a structured handover.

## Next Steps

- Finalize the discovery-source list and define how candidates are collected with Dominik.
- Create the compact requirement profile that determines when an agent is Hub-suitable.
- Formalize the direct in-agent prompt as the first extraction and content-generation workflow.
- Define the owner review, completion and approval step before publication.
- Test the complete process with relevant real agents such as ScoutData so the process design produces visible Hub content in parallel.
- Define the communication approach for each newly integrated Hub agent together with Eve.
- Peter prepares the weekly announcement and agent-spotlight slider, a reusable detail-page template and the new library section.
- Peter briefs Henning on a short, focused intro video for the Image Generator.
- Review the strategy and first operational preparations together at the next Tuesday alignment.

## Last Confirmed

2026-07-30.

## Related Context

See [Design Library](design-library.md).