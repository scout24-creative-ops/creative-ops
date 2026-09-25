# Editorial Lighthouse

## Purpose

Build and validate a scalable, AI-supported editorial growth engine for ImmoScout24 that can increase consumer-oriented editorial output, learn which formats and topics create measurable traffic and engagement, and establish a repeatable operating model for further scaling.

The initiative is based on the `Scaling Editorial at IS24` concept shared by Nataliya Medvedeva. The deck proposes a 12-month editorial growth pilot that builds on existing IS24 assets, data and authority while improving how content is packaged, connected and distributed.

## Current Status

- At Scout24, a "Lighthouse" is a high-priority cross-team initiative that starts with a company cycle; multiple Lighthouses can run in parallel. Editorial Lighthouse is therefore the priority-project classification, not the name of the editorial operating model itself.
- The initiative has moved from a provisional support request into an active project.
- On 2026-09-21 Matthias Brandstetter confirmed that Dominik is expected to lead the Editorial Lighthouse project and receive support from colleagues in Matthias's organization.
- On 2026-09-23 Dominik confirmed that Matthias also asked him to move into Matthias's organization and that Dominik accepted. Matthias indicated that Dominik would retain his Fachlead role and report to Nataliya Medvedeva rather than directly to Matthias. The formal effective date and organizational implementation are not yet confirmed.
- On 2026-09-24, after Viktoria Riffel's follow-up alignment with Nataliya Medvedeva, the ownership split was clarified: Dominik owns Editorial Lighthouse overall. Viktoria owns the SEO/editorial side, including content logic and quality; Dominik owns the overall setup, end-to-end workflow, agent/system design, build-out and coordination of implementation support.
- The project is a 12-month News/editorial pilot; C3 is the launch and proof phase rather than the full lifetime of the initiative.
- The operating model is now explicitly agentic: Dominik owns the News strategy and AI-enabled production machine, Viktoria owns SEO quality/discoverability, external journalists provide human editorial review/authorship, and Bea owns engineering delivery for Contentful.
- The first 4–6 week milestone is to prove a working end-to-end system and first publish→measure loop, not to optimize for raw article count immediately.
- Current working architecture clarifies the first two AI stages: the Trend Finder acts as a **Radar** that detects predefined signals across a shared source pool; the Story Creator remains the **Brain**, acting as **Analyst + Editor** to investigate a signal, enrich it with additional data, generate multiple angles, select the strongest story candidates and only then create a Story Package.
- Management reporting will use the existing Builder Daily Call / VP round as the Lighthouse checkpoint format, expected roughly bi-weekly for about 40 minutes. The purpose is reporting plus enablement/blocker removal rather than re-approval of the Lighthouse. Nataliya may cover the first round if Dominik is already on vacation.
- The Scout24 Product Intelligence Wiki is now the primary durable fachliche source for Editorial Lighthouse. The existing Nataliya/Viktoria material should be treated as the default baseline for categories, formats, editorial strategy, cadence hypotheses, review/SEO rules and supporting research rather than being recreated from scratch. Dominik should challenge or change it only where it is materially unsuitable or technically unrealistic.
- Primary Wiki entry point / area: https://wiki.scout24.com/pages/8f2cd9f5-6fce-4e80-870f-09a262c14ec5 . Central Lighthouse page: https://wiki.scout24.com/spaces/product-intelligence/pages/56481/scaling-editorial-at-scout24-lighthouse . Relevant supporting pages include Editorial, Launch categories & article slate, Content Plan and Google Discover.
- The existing Wiki already contains a proposed editorial portfolio and operating assumptions, including launch categories, article examples, cadence hypotheses, E-E-A-T/review guidance and Discover requirements. These are inputs to the AI-system design, not work Dominik needs to independently recreate.

## Dominik's Role

Dominik is the confirmed overall owner / project lead for Editorial Lighthouse.

His ownership centers on making the complete system work rather than personally implementing every Agent. Viktoria owns the SEO/editorial decision layer; Dominik owns the end-to-end setup, workflow, agent/system design, implementation structure and coordination of contributors. This includes:

- own News strategy, editorial calendar, topic/format experimentation and publishing cadence;
- own topic discovery, use of IS24 data/inventory and competitive intelligence for story development;
- structure the end-to-end editorial workflow and AI content factory;
- break the process into clear human and agent responsibilities;
- define inputs, outputs, handoffs and quality guardrails for the agent chain;
- establish human review and approval gates;
- shape and validate the first orchestrated MVP, then scale what earns evidence;
- monitor Discover/distribution learning and use performance evidence for scale/stop decisions;
- coordinate the relevant functional contributors while leaving engineering delivery with Bea;
- identify where production-grade engineering support is required for orchestration and system integration.

This follows Dominik's established operating model: solution leadership and quality ownership should be separated from permanent implementation and production ownership where suitable delivery capacity exists.

## Key Stakeholders

- Dominik Böhme — project lead / AI solution and workflow leadership
- Matthias Brandstetter — sponsor / organizational support
- Nataliya Medvedeva — key stakeholder from SEO; shared the initial `Scaling Editorial at IS24` concept
- Viktoria Riffel — owns the SEO/editorial side of Lighthouse, including content logic, editorial rules and quality
- SEO team — expected contributor for technical SEO, distribution, metadata, internal linking, Search/Discover requirements and publishing expertise
- Editorial / journalist capacity — required for professional judgement, fact-checking, editing and authorship where the pilot uses AI-generated drafts
- Engineering / platform contributors — to be involved where the prototype requires production-grade orchestration or system integration

Current contributor model: Dominik leads News/editorial growth and AI orchestration; Viktoria co-leads News from the SEO side and owns SEO quality/discoverability; Bea owns engineering delivery for Contentful; two external freelancers/journalists are planned for human editorial review/authorship; a working student can support manual publishing/operational work. Exact capacity and final staffing still need confirmation.

## Source Concept

The `Scaling Editorial at IS24` deck frames the opportunity around the gap between IS24 and larger editorial ecosystems such as Idealista.

The proposed 12-month growth pilot includes:

- use existing IS24 assets such as WohnBarometer, Orte, Wissen, Preisatlas, financing tools and listings as source material;
- package proprietary data, evergreen expertise and marketplace signals into timely consumer-oriented stories;
- create a connected editorial ecosystem including a dedicated `/news/` hub, topic collections, recurring series, internal linking and freshness signals;
- test multiple content plays such as market journalism, pricing and supply/demand stories, local content, remarkable properties, lifestyle/architecture and selected high-curiosity formats;
- continuously test and optimize topics, formats, headlines, imagery, publishing cadence and distribution.

The deck also proposes an AI-supported production chain consisting of:

1. **Trend Finder Agent** — topic discovery, trend and competitor analysis;
2. **Story Generator Agent** — combines listings, pricing, geo and proprietary IS24 data into story angles, charts and insights;
3. **Research / Writer Agent** — research plus complete article drafts, titles, metadata and schema;
4. **Image Creator Agent** — imagery, social assets, infographics and supporting visuals;
5. **Human editorial quality layer** — professional review, fact-checking, editing and accountable authorship;
6. **SEO / publishing layer** — link and CTA review, publishing, distribution optimization and continued agent improvement.

## Decisions

- 2026-09-18: Initial support request remained provisional because scope, desired outcome and Dominik's role were not yet confirmed.
- 2026-09-21: Matthias confirmed that Dominik should lead Editorial Lighthouse and receive support from colleagues in Matthias's organization.
- 2026-09-21: Dominik confirmed that Editorial Lighthouse should now be treated as a distinct active project in his maintained work context.
- 2026-09-24: Nataliya clarified the operating model: News is the C3 Lighthouse and a 12-month pilot; Dominik is accountable for News strategy, editorial calendar, experimentation and AI orchestration, while Viktoria owns the SEO quality/discoverability side.
- 2026-09-24: The first 4–6 week objective is a working end-to-end machine and first publish→measure loop. Article-volume targets are directional vision inputs rather than proven near-term capacity.
- 2026-09-24: Lighthouse management updates are expected through the existing Builder Daily Call / VP round, roughly bi-weekly; Nataliya can support or cover the first round, but Dominik and Viktoria are expected to increasingly present their own work.

## Working Architecture — Radar → Brain → Production → Learn

Current working hypothesis, aligned with Nataliya's Trend Finder → Story Generator model but more explicit about internal logic. The target flow is:

**Sources + Signal Rules → Trend Finder / Radar → Signal Package → Story Creator / Brain → Story Package → Production → Production Package → Human Review → Publish → Performance & Learning Agent → Learning Package → feedback to Trend Finder + Story Creator**

Key logic:

- **Shared source pool:** Trend Finder and Story Creator can access the same overall pool of internal and external sources, but they use different subsets depending on the case. Candidate source types include News/regulatory sources, Google Trends/Search, competitors, IS24 listings/inventory, pricing/market data, Sprengnetter, demand/search behaviour, geo/location data and other approved Data Lake or producer-owned sources.
- **Access layer vs. source:** ScoutData should not automatically be treated as one business-data source. Internal Slack evidence indicates that ScoutData is an agent/access layer that uses Collate for discovery and Starburst for actual Data Lake queries. For some transactional use cases, the authoritative source may still be the original data producer rather than the Data Lake.
- **Trend Finder = Radar / Signal Playbook:** monitors selected sources and detects explicit signal types, e.g. unusual demand change, price anomaly, exceptional listing performance, regulatory/news event, Google/Search trend or competitor signal. Signal rules are source-specific and can be expanded over time.
- **Story Creator = Brain / Analyst + Editor:** receives a signal, then uses an **Analysis Playbook** to decide which additional data to inspect and whether enough evidence exists for a story. It then uses an **Editorial/Story Playbook** to generate several possible angles, compare them and select the strongest candidates.
- **Gatekeeper logic:** a signal does not automatically trigger article production. The Story Creator can reject weak signals. A Story Package should only be created when the evidence supports a useful, sufficiently differentiated and low-speculation angle.
- **Selection criteria tested in chat:** data strength, information value and speculation risk are useful first criteria for comparing story angles.
- **Story Package:** production-ready editorial brief containing the selected angle, headline direction, subline, core message, evidence/facts, sources, chart/visual idea, writer brief and image brief.
- **Production:** Writer + Image Creator turn the Story Package into a **Production Package**. The package represents the prepared article and visual production output handed to Human Review.
- **Human Review:** humans retain responsibility for editorial judgement, factuality, trust and final publication. A failed review should eventually route back to the relevant producer depending on the problem: language/style → Writer, image issue → Image Creator, factual/evidence/angle issue → Story Creator. This revision routing is intentionally not yet drawn into the target diagram.
- **Performance & Learning Agent:** one agent measures and interprets Search, Discover, CTR, impressions, traffic, engagement and conversion, then creates a **Learning Package**. Learnings feed back into Trend Finder priorities/signal rules and Story Creator angles, playbooks and selection criteria.
- **Diagram semantics:** agent-to-package creation is shown as a neutral line without arrowhead; package-to-next-step is a directed arrow; source access is neutral dashed; learning feedback is dashed and directed.
- **Example — demand signal:** Radar sees unusually high demand for 1-room apartments in Munich. The Analyst checks supply, prices, historical development, peer cities and relevant geo/market context. The Editor can then form an angle such as rising demand meeting falling supply, if supported by the data.
- **Example — external event:** Radar detects a relevant rental-law change from trusted external/regulatory sources. The Analyst checks who is affected, what changes, timing and available Scout context/data; the Editor forms the most useful explanatory angle instead of merely repeating the external news.

The durable shorthand for the first stages is: **Radar finds what is unusual; Brain understands what it means and decides whether there is a story.**

## Risks and Open Questions

- Which existing Product Intelligence categories/formats should be translated first into operational Trend Finder topic fields and signal playbooks?
- Which one or few topic fields, bounded sources, signal types and corresponding analysis playbooks should define the first Trend Finder / Story Creator MVP before broader scaling?
- How much of review and publishing should remain manual in the MVP, and when should automated Quality Gate / Contentful rendering be introduced?
- Which existing IS24 data sources and APIs are available to the agent workflow and under what access constraints?
- How quickly can the external-journalist setup and manual publishing support be established?
- What article cadence is a credible target once the core Story Creator hypothesis has been validated?
- Which metrics beyond Search/Discover traffic should define early success and management reporting?

## Pre-vacation Deliverables — complete in this order

Before Dominik's last working day on 2026-10-02, the work should be narrowed to three deliverables:

1. **Target Architecture final**
   - Finish the end-to-end target diagram: Sources → Trend Finder → Signal Package → Story Creator → Story Package → Production → Production Package → Human Review → Publish → Performance & Learning → Learning Package / feedback.
   - Make agent boundaries, packages, human responsibility, orchestration and future learning loop understandable.
   - This is the full target scope, not a promise that every component is implemented immediately.

2. **MVP Scope on one page**
   - Show which parts of the target process will be implemented/tested first, which are simplified, manually operated or fed with prepared data, and which are postponed.
   - Start from a very small, controlled editorial case; current likely direction is an operational topic under the existing **Immobilien & Markt** portfolio, with market-price data as a strong candidate rather than inventing a new editorial strategy.
   - Make confidence, major unknowns and the amount of manual work explicit.
   - Nataliya specifically expects visibility into which agents exist, how they interact, whether orchestration is realistic and where manual work remains.

3. **Editorial Operating View**
   - Use the existing Product Intelligence Wiki as the baseline for categories, formats, article examples, cadence hypotheses, SEO/Discover rules and human-review model.
   - Show **what we intend to write about, how often / on which days or windows, and who does what** across AI, freelancers/human review, SEO and publishing.
   - Distinguish recurring/plannable formats from reactive/timely coverage.
   - Treat article counts and publishing cadence as directional hypotheses for the pilot, not proven near-term production capacity.
   - Reuse Nataliya/Viktoria's strategy instead of rebuilding it; flag only material mismatches or implementation concerns.

These three deliverables together should provide the 2–3 management-ready slides Nataliya asked for and support the team/VP communication while Dominik is on vacation.

## Next Steps

- Continue now with Deliverable 1: finalize the Target Architecture diagram.
- Then derive Deliverable 2: map the full target process to the deliberately reduced MVP.
- Only after those are stable, create Deliverable 3 from the existing Product Intelligence editorial material rather than starting from a blank content strategy.
- Align with Bea on Monday and use that feedback for the larger mission/engineering kickoff on Wednesday.
- Prepare the first Builder Daily Call / VP update; Nataliya can cover the first round if it lands during Dominik's vacation.

## Last Confirmed

Operating model, first 4–6 week objective and management-reporting setup confirmed in the Nataliya/Viktoria/Dominik kickoff on 2026-09-24. On 2026-09-25, Viktoria's knowledge transfer and review of the Product Intelligence Wiki clarified that the existing Wiki material is the default editorial baseline and that the pre-vacation work should be executed in three ordered deliverables: Target Architecture, MVP Scope, then Editorial Operating View. Formal effective date of the org move remains open.
