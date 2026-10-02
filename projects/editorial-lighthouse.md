# Scaling Editorial

## Purpose

Build and validate a scalable, AI-supported editorial growth engine for ImmoScout24 that can turn detectable signals into useful, publishable consumer stories, learn from performance and establish a repeatable operating model for further scaling.

The project is the C3 News / editorial Lighthouse and part of a 12-month pilot. "Lighthouse" describes the Scout24 priority-project classification; the working project and artifact name is now **Scaling Editorial**.

## Current Status

- Dominik is the confirmed overall project lead and owns the end-to-end system, workflow, agent design, build-out and coordination.
- Viktoria owns the SEO/editorial decision layer, including content logic and quality; Bea owns Contentful engineering delivery; external freelancers/journalists are planned for human editorial review/authorship.
- The first milestone remains a working end-to-end system and first publish → measure loop rather than maximizing article volume.
- The pre-vacation foundation was completed by 2026-10-02: Target Scope, reduced MVP Scope, architecture, Trend Matrix, high-level Working Plan, Content Plan, Project Hub and a first multi-agent proof are all in place.
- Trend Finder, Story Creator and Writer have been set up and tested together. The currently implemented/testable agent scope is intentionally narrow and focuses mainly on **Price Change**. Broader Trend Fields, including Demand–Supply, remain part of the planned expansion rather than something to assume is already implemented end to end.
- The current handoff model is package-based: Trend Finder creates a Signal Package, Story Creator creates a Story Package, and the next agent consumes that structured package. Tests should stay inside the implemented scope and pass the generated package forward rather than replacing it with unrelated free-form input.
- A clean Trend Finder run checked all 16 German states for 1–28 September 2026 vs. the same 2025 period. Example signals included Sachsen-Anhalt at +5.8% (2,184 → 2,064 €/m²; n=9,790/9,486) and Brandenburg at +5.6% (3,511 → 3,323 €/m²; n=21,275/20,905); the configured quality checks passed.
- The Story Creator / Writer chain was also tested with a synthetic Potsdam ownership-apartment case. The selected story direction was that additional space was becoming more expensive faster; the Writer output was directionally strong, with only fine-tuning around repetition/overclaiming still needed.
- On 2026-10-01 Dominik reported that the approach-sync meeting with Nataliya went very well. He gave her an overview of the setup and preparation work; Nataliya subsequently asked him to send the agent links. No further detailed decisions from that meeting were captured in chat.
- Dominik is on vacation from 2026-10-05 through 2026-10-16 and returns on 2026-10-19. The Project Hub and published working documents are the main handoff/reference during that period.

## Dominik's Role

Dominik owns the complete system rather than every implementation detail. His responsibility includes:

- shape the Scaling Editorial strategy and operating model;
- define Target and MVP scope;
- structure the end-to-end AI + human workflow;
- define agent responsibilities, inputs, outputs, package contracts and quality guardrails;
- own topic discovery and use of IS24 data for the News/editorial system;
- establish Human Review and publishing handoffs;
- coordinate contributors while leaving engineering delivery with Bea;
- validate the MVP through real end-to-end stories;
- use performance evidence to improve and later scale the system.

## Key Stakeholders

- Dominik Böhme — overall project lead / AI system and workflow leadership
- Nataliya Medvedeva — key stakeholder / Head of SEO; shared the initial Scaling Editorial concept and receives project updates
- Viktoria Riffel — SEO/editorial decision layer, content logic and quality
- Bea — Contentful engineering delivery
- Matthias Brandstetter — sponsor / organizational support
- External freelancers/journalists — planned human editorial review and accountable authorship
- Working student / operational support — possible manual publishing support where needed
- SEO / Product Intelligence contributors — Search, Discover, metadata, internal linking, editorial and publishing expertise

## Target Architecture

The maintained target flow is:

**Sources + Signal Rules → Trend Finder → Signal Package → Story Creator → Story Package → Content Creator → Production Package → Human Review → Contentful / News Pages → Learning Agent → Learning Package → feedback**

### Trend Finder

The Trend Finder uses **Focus → Monitor → Detect**:

- **Focus** — which editorial areas / Trend Fields should be observed;
- **Monitor** — which sources, dimensions, comparison periods and cadence are scanned;
- **Detect** — which signal logic turns an unusual observation into a Signal Package.

The MVP Focus is deliberately small and constrained by reliable data availability. The Target Focus can later become broader and more editorially driven.

Current data / quality principles for price-change work include:

- internal Starburst access;
- bi_data_is24_etl.d_listings_without_pii and d_regions as the primary current price-data basis;
- medians rather than means;
- minimum sample size around n ≥ 200;
- fraud/phishing filtering;
- explicit quality notes;
- YoY as the default price comparison;
- Germany-wide scan of the configured Search Space;
- exploration/ranking rather than an arbitrary fixed threshold during early calibration;
- no causal or story interpretation inside Trend Finder;
- maximum of five Signal Packages per run.

Supply/demand sources validated for later expansion include approved activeListings and currentSavedSearchStock.

### Signal Package

A Signal Package is the structured observation: **what is unusual?** It should contain enough data, comparison and quality context for the Story Creator to investigate without already deciding the story.

### Story Creator

The Story Creator is the editorial decision layer / "Brain":

**Validate → Human Relevance → Shape → Select**

It validates the evidence, asks whether the signal matters to people, develops multiple angles, checks those angles against evidence and selects the strongest viable story. A signal is not automatically an article.

The Story Creator should produce a Story Package only when the evidence supports a useful, differentiated and low-speculation story.

### Story Package

The Story Package is the production-ready editorial decision: **which story are we telling and on what evidence?**

It contains the selected angle, Core Story Claim, Story Promise, headline direction, evidence/sources and a prioritized Writer Briefing.

### Content Creator

The Content Creator turns the Story Package into production assets. The current target view contains:

- Writer
- Image Creator
- Chart Creator

The Story Creator decides what the story is; the Content Creator produces how that already-decided story is expressed.

### Human Review

Human Review remains a mandatory separate workstream and final responsibility layer. The MVP needs to define:

- what must be reviewed;
- which claims, sources and data require checks;
- Approve / Change / Reject outcomes;
- who reviews what;
- when expert/legal/compliance review is required;
- how review feedback feeds agent improvement.

No publication should happen without human editorial/factual review.

### Publishing

Publishing is a separate workstream from Human Review. The intended path is:

**Final Production Package → LP Builder → Contentful Page → Publish**

The MVP should reuse Viktoria's existing editorial / LP design, implement it once through the existing LP Builder in Contentful, define reusable template fields/metadata and map the Production Package into that template.

### Workflow Automation

The expected orchestration is intentionally simple and predominantly linear:

**Agent → Package → Agent → Package → Agent**

The existing Agent Factory / AI Team setup should be reused where possible. Complex multi-agent orchestration is not the goal of the first MVP. Automation should be connected only after package contracts and agent interfaces are stable.

### Learning

The later Learning Agent measures and interprets performance such as Search, Discover, CTR, impressions, traffic, engagement and conversion, then creates a Learning Package that can update Trend Finder priorities/rules and Story Creator selection logic.

## Editorial Planning

The Product Intelligence Wiki remains the fachliche baseline for editorial strategy, formats and content planning.

Initial editorial tracks include:

1. Market journalism
2. Local and property stories
3. Evergreen expertise
4. Recurring curiosity formats
5. Service-led explainers

The current Target Content Plan is a **working hypothesis**, not a commitment. It uses a capacity assumption of up to 50 reviewed articles per week and a proposed distribution across the week, with the strongest publishing emphasis Monday–Wednesday and initial windows around 10:30–11:30 and 18:30–19:30. Timely news should publish when verified rather than wait for a scheduled slot.

The MVP does **not** yet commit to a fixed weekly/daily cadence. It first needs to prove realistic production, review and publishing capacity.

## C3 Working Plan

The current high-level plan deliberately overlaps workstreams rather than treating them as linear phases:

- **Agent Quality & Rules** — main post-vacation workstream; refine instructions, evidence rules, Human Relevance/story quality, package contracts, claims and edge cases.
- **Human Review** — define review responsibilities, checks and feedback.
- **Publishing Setup · LP Builder + Contentful** — reusable editorial template, required fields/metadata, Production Package mapping and final handoff.
- **Workflow Automation** — short integration step after interfaces stabilize, using the existing Agent Factory where practical.
- **End-to-End Test Stories** — run the full chain through Human Review and publishing.
- **Iterate & Stabilise** — improve the MVP from real runs through the end of C3.
- **Cleaning Month · January 2027** — consolidate learnings, clean technical/editorial debt, consolidate instructions/templates/docs and decide the next source/topic/automation scope.

## Working Documents and Handoff

Central Project Hub:

- https://wiki.scout24.com/spaces/product-intelligence/pages/57178/project-hub

Published working documents:

- **Editorial Flow** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/scaling-editorial-lighthouse/
- **Trend Matrix** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/trend-finder-matrix/
- **Working Plan** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/working-plan/
- **Content Plan** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/content-plan/

The four documents were visually standardized before publication: shared content width, header system, update label, language controls and Target/MVP controls where applicable. The Flow remains the interactive architecture/documentation surface; Trend Matrix operationalizes Trend Finder Focus/Monitor/Detect; Working Plan holds the C3 timeline; Content Plan holds the Target planning hypothesis and reduced MVP view.

## Decisions

- 2026-09-21 — Dominik became the confirmed overall lead for the Lighthouse initiative.
- 2026-09-24 — Ownership split clarified: Dominik owns the end-to-end system and AI workflow; Viktoria owns SEO/editorial decision logic and quality; Bea owns Contentful engineering delivery.
- 2026-09-24 — First milestone defined as a working end-to-end machine and publish → measure loop, not raw article volume.
- 2026-09-28 — MVP should be data-first, starting from already accessible internal data and expanding only after the first loop works.
- 2026-09-28 — Semantic Signal Rules and technical Thresholds/Triggers should be separated.
- 2026-10-01 — The project/artifact naming was simplified to **Scaling Editorial**; "Lighthouse" remains useful as the Scout24 priority classification, not as the repeated document title.
- 2026-10-01 — Target and MVP both use Focus → Monitor → Detect; MVP is smaller and data-constrained, while Target can later drive expansion into new sources and Trend Fields.
- 2026-10-01 — Human Review and Publishing are separate workstreams.
- 2026-10-01 — Workflow Automation should remain simple and linear for the MVP and follow stable package/interface definitions.
- 2026-10-01 — Current agents should be treated as an early MVP, primarily covering price changes; package-based handoffs are part of the intended test flow.
- 2026-10-02 — The four core documents and Project Hub are complete and published as the pre-vacation handoff/reference set.

## Risks and Open Questions

- Current agent capability is much narrower than the Target Matrix; additional Trend Fields and source types still need implementation and validation.
- Price-change rules are working as a first proof, but broader signal types and thresholds still need evidence-based calibration.
- Story/Writer quality needs more real test cases to harden evidence handling, claims and edge cases.
- Human Review responsibilities and scalable review capacity still need to be defined.
- LP Builder + Contentful publishing integration for this editorial flow still needs end-to-end implementation/testing.
- Workflow Automation is intentionally not yet the focus; it should follow stable interfaces.
- External journalist capacity and operating model still need confirmation.
- The Learning Agent / feedback loop is Target scope and has not yet been proven in the MVP.
- Target article volume and cadence remain hypotheses until real production/review capacity is observed.

## Next Steps

After Dominik returns on 2026-10-19:

1. Continue **Agent Quality & Rules** with additional Trend Finder, Story Creator and Writer test cases.
2. Define the **Human Review** process and quality checks.
3. Set up the reusable **LP Builder + Contentful** publishing path.
4. Connect stable agent/package handoffs through the existing **Agent Factory**.
5. Run and publish multiple real **end-to-end test stories**.
6. Iterate and stabilize the MVP from those runs.
7. Use the January Cleaning Month to consolidate learnings and decide the next sources, Trend Fields, topics, automation and learning scope.

## Last Confirmed

2026-10-02. The pre-vacation project setup, four core working documents and first agent-chain proof are complete. The 2026-10-01 approach-sync with Nataliya was reported as successful; she asked for the agent links. Dominik is away 2026-10-05 through 2026-10-16 and returns 2026-10-19.
