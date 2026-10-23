# Scaling Editorial

## Purpose

Build and validate a scalable, AI-supported editorial growth engine for ImmoScout24 that can turn detectable signals into useful, publishable consumer stories, learn from performance and establish a repeatable operating model for further scaling.

Scaling Editorial was initially established as the C3 News / editorial Lighthouse within a planned 12-month pilot. On 2026-10-20 Nataliya reported a VP decision to remove Editorial from the C3 Lighthouse topic portfolio and focus the Lighthouse on other initiatives. Nataliya explicitly confirmed that the Scaling Editorial program and roadmap continue as planned. The current project name remains **Scaling Editorial**; C3/Lighthouse is now historical context, not the current classification.

## Current Status

- **Program / organizational status (confirmed 2026-10-20):** Nataliya reported Scaling Editorial is no longer in the C3 Lighthouse topic portfolio, but confirmed the program and roadmap continue. The project remains with Nataliya Medvedeva (Head of SEO) / Matthias; Dominik continues as overall AI/workflow project lead during the Marketing/Content Factory transition. Changes to budget, ownership or the actual migration schedule have not been confirmed.
- **Pre-vacation foundation (completed 2026-10-02):** Target/MVP scope, editorial architecture, Trend Matrix, Content Plan, Working Plan, Project Hub and published working documents are in place. The original price-change-only agent chain had a functional proof, but its local-statistics stories failed Dominik's broader readership-interest test.
- **Trend Finder 2.0 (tested 2026-10-22):** A separate autonomous agent built via ChatGPT Agent Builder now explores multiple available internal real-estate data signals through Starburst instead of following a fixed per-indicator search script. Signal Package Standard **3.0** and a data-source catalog are in Knowledge. Multiple real discovery runs delivered candidates including rental-house search zero-result patterns, small purchase-apartment inventory growth and renovation-condition asking-price/inventory findings. Signals are **internally validated leads, not approved publication claims**; reader potential and population consistency still need judgment. The original Trend Finder remains preserved, but a mandatory legacy-versus-new comparison is no longer the current next step.
- **Story Creator 2.0 (tested 2026-10-22):** Separate agent with direct Starburst follow-up analysis and web research, three possible editorial outcomes (develop / further research / reject) and an internal reader-value challenge before making a Writer Briefing. Its house-rental-search story required further research due to channel/event semantics and sensitive search-detail access; the small-apartment inventory topic exposed a robust-data/weak-story mismatch and was critically rejected on explicit re-review. Later neutral testing also withheld a brief due to missing context. Renovation-related Signal Packages led to a more substantial candidate and a corrected, harmonized method comparison. These are individual tests, not proof of consistent selection quality.
- **First new-pipeline Writer milestone (2026-10-22):** Trend Finder 2.0 → Story Creator 2.0 → Writer produced a complete, non-synthetic article draft on the apparent price advantage of renovation-condition homes. Builder changes made Writer mapping independent of exact Story Package field names and prioritized evidence/claim limits over headline suggestions. A requested second pass improved length, natural flow and headline. Subsequent editorial review uncovered a **story-promise gap**: statistical comparison effects do not answer the stronger buyer question of actual net savings after renovation. Draft demonstrates end-to-end generation, **not a publish-ready story or an approved SEO outcome**.
- **Current editorial priority:** Improve Story Creator's autonomous check that the proposed reader promise is actually answered by evidence and has sufficient standalone reader value; test on varied signals without steering the outcome. Explore a risk-based research stopping rule (verify decisive claims, avoid exhaustive nonmaterial checks) after reviewing costs/results. Writer's use of approachable first-person editorial data attribution (e.g. 'we analyzed...') is a later refinement, with source and time-period accuracy preserved.
- **Safety / output boundaries:** Agents may use approved internal SELECT/metadata and, for Story Creator, the web. Starburst's Create View capability remains exposed in the connector; instruction/confirmation requirements are not a hard read-only permission boundary. No SQL writes should be approved. A recurrent unwanted document workflow was addressed through additional Story Creator Instructions; one limited follow-up test stayed in chat, but a platform-level guarantee was not established. Packages and Writer Briefings are structured chat content, not automatic DOCX/PDF deliverables. External data/publication clearance remains open.
- **Operating model:** Dominik owns the end-to-end agent/workflow system; Viktoria owns the SEO/editorial quality layer; Bea owns Contentful engineering. Selected freelancers may start from November 2026, subject to confirmed onboarding, permissions and capacity; human writing first and later AI-draft review are proposed phases. Human Review, stable package orchestration, Contentful publishing and the publish→measure loop are not yet demonstrated. Article-volume and cadence assumptions remain hypotheses.

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

## Working Plan (originally C3)

The current high-level plan deliberately overlaps workstreams rather than treating them as linear phases:

- **Agent Quality & Rules** — main post-vacation workstream; refine instructions, evidence rules, Human Relevance/story quality, package contracts, claims and edge cases.
- **Human Review** — define review responsibilities, checks and feedback.
- **Publishing Setup · LP Builder + Contentful** — reusable editorial template, required fields/metadata, Production Package mapping and final handoff.
- **Workflow Automation** — short integration step after interfaces stabilize, using the existing Agent Factory where practical.
- **End-to-End Test Stories** — run the full chain through Human Review and publishing.
- **Iterate & Stabilise** — improve the MVP from real runs.
- **Cleaning Month · January 2027** — consolidate learnings, clean technical/editorial debt, consolidate instructions/templates/docs and decide the next source/topic/automation scope.

## Working Documents and Handoff

Central Project Hub:

- https://wiki.scout24.com/spaces/product-intelligence/pages/57178/project-hub

Published working documents:

- **Editorial Flow** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/scaling-editorial-lighthouse/
- **Trend Matrix** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/trend-finder-matrix/
- **Working Plan** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/working-plan/
- **Content Plan** — https://scout24-creative-ops.github.io/public/Scaling%20Editorial/content-plan/

The four documents were visually standardized before publication: shared content width, header system, update label, language controls and Target/MVP controls where applicable. The Flow remains the interactive architecture/documentation surface; Trend Matrix operationalizes Trend Finder Focus/Monitor/Detect; Working Plan contains the original C3-era timeline and may need its framing reviewed; Content Plan holds the Target planning hypothesis and reduced MVP view.

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

- 2026-10-20 — Nataliya reported the VPs' decision to remove Editorial from the C3 Lighthouse topic portfolio, while explicitly confirming continuation of the Scaling Editorial program and roadmap as planned. No resourcing or schedule change was announced.
- 2026-10-21 — Seven-point Editorial Search Framework approved: prioritize qualitative readership potential and broad/interesting comparisons, autonomously explore independently combinable transaction/property/size/price dimensions, geographies and temporal/event contexts, detect patterns without fixed editorial % thresholds, preserve data-quality guardrails and deliver evidence plus non-causal opportunity metadata to Story Creator. Develop separate Trend Finder 2.0 rather than revise original. See [approved design brief](editorial-search-framework.md).
- 2026-10-22 — Builder-authored separate Trend Finder 2.0 and Story Creator 2.0 underwent real Starburst-supported testing. The working Signal Package standard advanced to 3.0, replacing V2 as the current contract. The old Trend Finder was retained but controlled V1/V2 comparisons were not pursued as a required next step.
- 2026-10-22 — Story Creator gained a reader-value countercheck and an explicit chat-only output instruction after two inappropriate document-workflow starts. A later limited test used chat output, without proving a hard technical ban on file tools.
- 2026-10-22 — First full updated Trend Finder → Story Creator → Writer draft completed using real renovation-related internal signals. The underlying price-comparison story remains an internal example after later review identified an unresolved mismatch between reader promise and the questions the data can answer; not approved for publication.
- 2026-10-23 — Next editorial quality direction: verify **promise-to-answer fit** before approving a Writer Briefing. Consider risk-based research effort and more natural editorial data narration, but neither refinement is yet confirmed as installed.

## Risks and Open Questions

- **Reader promise vs evidence:** The renovation story correctly explains aggregate/composition-adjusted asking-price comparisons but does not establish real buyer savings or renovation economics, despite a headline implying such insight. Story Creator's relevance check needs to distinguish a compelling promise from the actual question the available evidence can answer.
- **Research proportionality:** The agents can revisit data repeatedly to reconcile statistics. Central headline/claim figures require validation; peripheral discrepancies should not automatically block all drafting. A risk-based research/stop policy is a proposed next improvement, not implemented.
- **Data and rights:** Source-specific permissions and external publication approval remain open. Some sensitive user-behavior/search-detail tables are not cleared; event/channel semantics affect interpretation. The Starburst View write tool is not technically removed, despite behavioral SELECT-only rules and action confirmations. Never authorize writes as part of trend research.
- **Methods:** Stable populations and comparison partners matter. The renovation case harmonized an October 15 daily end-state sample but could not exactly reconstruct an earlier signal's house median. Controlled stratification remains descriptive, not a causal estimate or buyer saving; local-level coverage and missingness limit generalization.
- **Reliability:** Multiple tests show good autonomous inquiry and some strong reader-interest judgments, but weak stories have still received Writer Briefings. One successful chat-only run does not guarantee suppression of unrelated document workflows.
- **Review / delivery:** Human Review roles and capacity, freelancer onboarding and sharing permissions, Contentful publishing path, orchestration and actual Search/Discover traffic measurement are not finalized or end-to-end tested.
- **Governance:** Removal from C3 Lighthouse changes classification/visibility, not the confirmed Scaling Editorial roadmap. Content Factory reporting, future remit and possible resourcing effects remain open. The January 2027 Cleaning Month remains a planning item.

## Next Steps

1. **Refine Story Creator's promise-to-answer judgment** via a targeted Agent Builder change: can the evidence actually fulfill the reader question raised by the angle/headline, and is that answer strong enough to merit a standalone article? Avoid hard scores, blanket rejection or generic further research.
2. **Run neutral cross-topic tests** on new or unexploited Trend Finder 2.0 Signal Packages; evaluate whether Story Creator independently develops, researches, defers or rejects stories appropriately. Do not force a comparison to the legacy Trend Finder or salvage the existing renovation angle.
3. **Define proportionate data verification** so central claims and decision-relevant facts are robust but minor uncertainties do not consume unnecessary runtime/credits. Preserve publication-stage checks and external data permission boundaries.
4. **Evaluate Writer improvements only after additional story cases**: reader-friendly first-person attribution of original analyses, shorter and less statistical prose by default, and truthfully matched timeframes; no blanket 'we' wording or invented claims.
5. **Design Human Review and freelancer interface**: editorial/factual sign-off, data and rights clearance, expert review where needed, author voice and ownership, and explicit approve/change/reject pathways.
6. **Build publishing path** using LP Builder + Contentful, map final packages/metadata and test a reviewed story through publication and measurement; add simple Agent Factory orchestration only when contracts stabilize.
7. **Iterate on measured reader outcomes** (Search/Discover/CTR/engagement) and actual cost/review capacity, without assuming the Target content cadence has been achieved.

## Last Confirmed

2026-10-23. Separate Trend Finder 2.0, Story Creator 2.0 and Writer have produced and iterated on a complete internal article draft using real data signals. This proves a functional agent-to-agent content-draft path, **not** a publish/measure loop or consistent editorial strength. The latest editorial assessment reopens the renovation story's reader-promise suitability; no publication decision is confirmed. Next focus is Story Creator promise-to-answer fit, then proportionate research and more varied testing. The repository's previous 'Trend Finder 2.0 draft / no live test' status and mandatory old-vs-new comparison plan are superseded.
