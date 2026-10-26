# Scaling Editorial

## Purpose

Build and validate a scalable, AI-supported editorial growth engine for ImmoScout24 that can turn detectable signals into useful, publishable consumer stories, learn from performance and establish a repeatable operating model for further scaling.

Scaling Editorial was initially established as the C3 News / editorial Lighthouse within a planned 12-month pilot. On 2026-10-20 Nataliya reported a VP decision to remove Editorial from the C3 Lighthouse topic portfolio and focus the Lighthouse on other initiatives. Nataliya explicitly confirmed that the Scaling Editorial program and roadmap continue as planned. The current project name remains **Scaling Editorial**; C3/Lighthouse is now historical context, not the current classification.

## Current Status

- **Governance (confirmed 2026-10-20):** Scaling Editorial is no longer part of the C3 Lighthouse topic portfolio; Nataliya explicitly confirmed continuation of the program and roadmap. Dominik remains overall AI/workflow lead; Nataliya / Matthias retain project oversight. Content Factory reorganization may affect future reporting, but no new ownership/budget/timetable is established.
- **Functional prototype, editorial quality still open:** Multiple Trend Finder → Story Creator → Writer tests have produced complete internal drafts, including a real-data renovation-condition article on 2026-10-22 and earlier local-statistics stories. The handoff runs; consistent **compelling, evidence-matched, reader-friendly journalism** has not been demonstrated. No completed Human Review → Contentful publication → measurement loop.
- **TF 2.0 / SC 2.0:** Trend Finder 2.0 independently discovers data candidates and uses the unversioned **`signal-package-standard.md`**. The TF's saved Instructions reference the current Master Matrix v1 and technical data knowledge; the TF confirmed both saved Wiki URLs use `https://` correctly. This confirms the saved instruction text, not live activation or removal of older attached files. SC supplied complete revised Instructions that were reviewed and found aligned with both unversioned package filenames, the SC/Writer headline division and required Writer Briefing. The two minor follow-up fixes were confirmed in a subsequent full-text review. Actual live activation is not confirmed. SC 2.0 uses targeted Starburst/web follow-up, tries to enrich the selected angle with useful **additional verified data, external primary-source context, comparisons and reader-oriented detail**, and can develop, require more research or reject. SC must check that the article can truly answer its Story Promise and must not produce an uninteresting numerical report merely because a signal is valid. Writer converts the SC decision/brief into an article **without additional independent research**.
- **Master Matrix v1 (2026-10-26):** Editorial/story/data opportunity matrix in Scout Wiki now has **66 rows / 7 thematic groups / 8 columns**; reported state **26 technically tried, 33 clarification open, 2 not checked, 5 access open**. These are not 26 independently fully validated public-use capabilities. Two ScoutData-assisted discovery/semantics rounds plus targeted direct Starburst checks informed updates. **Freeze at v1; stop open-ended matrix expansion** and let the Data Team resolve only sharply defined outstanding semantics/access issues. Matrix is an idea/source map, not a proof that every story is viable.
- **Headline roles redesigned (2026-10-26):** SC checks whether an angle has a compelling, evidence-backed hook, reader question, curiosity potential and Story Promise but does **not** prescribe a preferred final headline. Writer independently develops/selects headline wording. Agent Builder reported revised SC Instructions + Story Package Standard **2.0** and revised Writer Instructions including optional `HEADLINE_TEST` (three distinct titles with a recommendation); **both were saved in drafts; user was told to click Update. Live activation is not confirmed**. Three synthetic headline tests demonstrated different options but **not yet acceptable overall headline quality**.
- **Agreed headline goal (2026-10-26):** Maximize curiosity among **as many genuinely relevant readers as possible** with natural, direct, understandable language; avoid unnecessarily narrowing the audience, technical summaries, artificial mystery, unearned reach and invented claims. Reader should think `this could be interesting for me`. The article must deliver the headline promise. The three-tier idea (curiosity / relevant-audience breadth / simple natural wording, subject to truthfulness) is the **working definition**, not a finished Writer calibration standard. No approved examples library or finalized instructions update beyond the role split.
- **Agent configuration change workflow (confirmed 2026-10-26):** Dominik manages adding/removing Agent Builder reference files himself. For TF/SC/Writer Instruction changes, the assistant supplies concise prompts asking the **agent itself** to inspect and update its existing Instructions, rather than writing/replacing full Instructions or changing the agent configuration directly. Confirm actual draft/save/live activation separately.
- **SC reference files (2026-10-26):** User screenshot confirms `signal-package-standard.md` and `story-package-standard.md` are both attached to Story Creator. The latter was initially renamed from the old versioned reference and still had outdated version/no-signal-source claims internally. A cleaned, unversioned replacement was prepared for user installation, retaining all writer-briefing/evidence/quality rules; **the SC reports updating its Instruction references and preserving existing editorial rules; upload of corrected Story Package file content is not yet confirmed; full SC Instructions have been reviewed again and both minor corrections are confirmed fixed (headline-potential wording and handoff-step formatting); no further instruction edits needed**.
- **Writer configuration reviewed (2026-10-26):** User supplied full Writer Instructions and confirmed **no uploaded reference files** in Writer. This is appropriate because Writer works only from the standalone Writer Briefing/optional Story Package and must not independently interpret TF Signal Packages or apply SC's package construction standards. Instructions already cover evidential/claim-boundary priority, independently chosen headline, story writing, length, format and Human Review. No file upload or instruction edit recommended; actual editorial output quality still needs end-to-end tests.
- **Work priority:** Improve the editorial result using already-tested material rather than restart the pipeline or keep expanding the matrix. Focus on: evidence-to-story promise fit; reliable SC enrichment and stable signal→story→writer packages; calibrated engaging headlines; Writer readability/storytelling; human factual/editorial gate. Test concrete changes against known and new stories, not endless isolated data exploration.
- **Human/publishing target unchanged:** Human editorial and factual responsibility, freelancer roles/consent, legal/data approval, LP Builder → Contentful, agent orchestration, publishing and actual CTR/Search/Discover feedback remain subsequent dependent workstreams. Target cadence is hypothetical.
- **Fotocasa exchange (2026-10-26):** Introductory kickoff with Scout24 subsidiary Fotocasa, which pursues a similar AI scaling-editorial objective. Only a public Fotocasa Life example and portal were reviewed; **no verified information about their AI architecture, output attribution or actual performance**. Follow-up meeting is planned to learn about their process, review and results.

## Data Matrix, ScoutData and Starburst — verified working limits

- Master matrix: https://wiki.scout24.com/spaces/product-intelligence/pages/68700/scaling-editorial-master-matrix-tabellentest ; technical data reference: https://wiki.scout24.com/spaces/product-intelligence/pages/68682/scaling-editorial-technisches-datenwissen-matrix-v0-2 . The older published Trend Matrix and the new Scout Wiki master matrix are **not identical documents**.
- Method: ScoutData formulates candidate sources/definitions/hypotheses → direct **read-only Starburst** checks verify actual table/field presence, populations, joins, coverage and reproducibility → Data Team clarifies unresolved semantics/rights. A ScoutData report alone is not proof. No bot message was sent through Slack; user supplied reports/manual prompts.
- **Property condition:** On an active 2026-10-25 buy-listing snapshot, informative condition codes (excluding unknown/no information) cover approx. **292,095/521,405 apartment-buy (56.0%)** and **260,954/554,034 house-buy (47.1%)** rows. Missingness is substantial; condition-based stories must state the known subset, avoid generalizing to the whole stock or to real renovation economics. Historical renovation article has a separate promise-to-evidence gap.
- **Rental prices:** Positive `rent_per_month` in the checked active snapshot for approx. **238,557/239,755 apartment-rent (99.5%)**, **13,952/14,349 house-rent (97.2%)**; `total_rent` lower coverage (77.3% / 37.5%). Residential `rent_per_sqm` is not directly available in the examined data; derive only with checked usable floor area. Cold/warm rent meaning not formally confirmed.
- **Land/site (`LIVING_BUY_SITE`):** Active inventory has many foreign-country records; **country filter Germany is essential**. In the checked sample ~27,076 active listings were German; ~25,018 German listings had positive price and area and clean one-to-one joins used for a site-price comparison. Site/constructibility/deduplication/permissions still need semantic confirmation. Do not treat asking price per site m² as a verified land-value benchmark.
- **Quality blockers:** `publication_duration_is24` has suspicious high/sentinel values (e.g. 90,000), so public "listing duration" stories are not ready; `building_id`/grouping IDs in checked buy populations were unknown; `construction_year=0` is common; `construction_phase` is incomplete; `d_regions` can mix city/county labels; historic `is_draft_listing` differs from recent snapshots. Presence of `expose_updates` fields does not prove validated longitudinal feature tracking. `HOUSE_TYPE` subtypes exist, contrary to one ScoutData assumption. Search/demand story sources still have **five access-open matrix rows**. Each proposed article must apply defensible filters and avoid causal/unverified claims.
- Pending Data Team questions should be **few, specific and blocking**, notably rent semantics, property/land taxonomy, building/dedup keys, publication/relisting semantics, geography definition, historical status consistency, user-search permissions, source rights/publication. Do not wait for all unresolved matrix rows before producing a good internal story.

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

The Story Creator should produce a Story Package only when evidence supports a useful, differentiated and low-speculation story **and actually answers the proposed reader promise**. It should autonomously find a few high-value supporting analyses, comparable views, primary-source facts and useful explanatory material where available, without endless research or fabricated claims. Additional helpful context is distinguished from publication-blocking validation; the writer receives only verified material for reuse.

### Story Package

The Story Package is the production-ready editorial decision: **which story are we telling and on what evidence?**

It contains the selected angle, Core Story Claim, Story Promise, reader question, supported curiosity/hook, core and supporting evidence/sources, claim boundaries, verified editorial enrichment and a prioritized, standalone Writer Briefing. **No preferred headline recommendation from SC**; Writer independently formulates the headline.

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

- 2026-10-24 to 2026-10-26 — Master Matrix expanded and checked in two ScoutData-led cycles with direct Starburst spot-checks; 66 rows in seven themes at v1. Decision: **freeze v1**, clarify only material Data Team semantics, shift attention to the reader-facing end-to-end article.
- 2026-10-26 — Editorial package direction: enforce stand-alone, evidence-led TF Signal Package 3.0 → SC Story Package Standard 2.0 / Writer Briefing contracts. SC should autonomously enrich a promising story with relevant researched facts, meaningful comparisons and external sources, separate verified content from open research, and reject/defer when promise cannot be met. Package/quality reliability remains to be tested, not declared finished.
- 2026-10-26 — Headline decision: SC owns story/reader promise/hook validity; Writer owns final headline creation and first selection; mandatory Human Review remains. Revised SC and Writer instructions/SC package standard were reported saved in drafts, not confirmed live.
- 2026-10-26 — Headline quality working definition: prioritize curiosity and a concrete reason to click for the broadest **relevant** audience, natural/direct wording, and an honest evidence-backed article promise. No finalized headline calibration examples. Three wholly synthetic `HEADLINE_TEST` runs were **not satisfactory overall**; Writer recommendations overly favored numeric summary in two of three cases.
- 2026-10-26 — Fotocasa exploratory kickoff, public example article shared and follow-up meeting planned. Their AI workflow, review and KPIs unknown.

## Risks and Open Questions

- **Reader promise vs evidence:** The renovation story correctly explains aggregate/composition-adjusted asking-price comparisons but does not establish real buyer savings or renovation economics, despite a headline implying such insight. Story Creator's relevance check needs to distinguish a compelling promise from the actual question the available evidence can answer.
- **Research proportionality:** The agents can revisit data repeatedly to reconcile statistics. Central headline/claim figures require validation; peripheral discrepancies should not automatically block all drafting. A risk-based research/stop policy is a proposed next improvement, not implemented.
- **Data and rights:** Source-specific permissions and external publication approval remain open. Some sensitive user-behavior/search-detail tables are not cleared; event/channel semantics affect interpretation. The Starburst View write tool is not technically removed, despite behavioral SELECT-only rules and action confirmations. Never authorize writes as part of trend research.
- **Methods:** Stable populations and comparison partners matter. The renovation case harmonized an October 15 daily end-state sample but could not exactly reconstruct an earlier signal's house median. Controlled stratification remains descriptive, not a causal estimate or buyer saving; local-level coverage and missingness limit generalization.
- **Reliability:** Multiple tests show good autonomous inquiry and some strong reader-interest judgments, but weak stories have still received Writer Briefings. One successful chat-only run does not guarantee suppression of unrelated document workflows.
- **Review / delivery:** Human Review roles and capacity, freelancer onboarding and sharing permissions, Contentful publishing path, orchestration and actual Search/Discover traffic measurement are not finalized or end-to-end tested.
- **Governance:** Removal from C3 Lighthouse changes classification/visibility, not the confirmed Scaling Editorial roadmap. Content Factory reporting, future remit and possible resourcing effects remain open. The January 2027 Cleaning Month remains a planning item.

## Next Steps

1. **Headline calibration**: agree and refine a lean editorial definition with examples before further Writer instruction changes. Evaluate whether a headline creates a compelling, relevant click reason in natural language, stays truthful, avoids overexplaining statistics and unnecessarily limiting the audience. The 3 synthetic tests exposed weak output, **not** a proven improvement. Confirm both agents' `Update`/live state first.
2. **Strengthen SC → Writer packages** against current Signal Package 3.0 and Story Package Standard 2.0: ensure each contains the real reader question, promise and evidence-based answer, core/supporting evidence, source provenance, limits, researched editorial enrichment, optional open leads, article-useful structure and no prescriptive SC headline. Test completeness and independent readability.
3. **Produce a convincingly good internal article using the existing proven flow**, not an initial proof of connectivity: select a defensible opportunity, let SC seek **few high-value extra data/facts**, write, critically assess headline, editorial interest, reader value, original insight, factual trustworthiness, editing effort. Existing prior drafts are baselines; avoid repetitive tests without learning.
4. **Freeze master matrix v1 and send only concrete blocking semantic/access questions to Data Team**; preserve source caveats, Germany filter, unknown values and statistical restrictions. Reopen source exploration only if an actual article needs it.
5. **Define human review / freelancers and approvals**, then operationalize package → LP Builder → Contentful template, simple orchestration after stable contracts, publish/measure/learning loop. Publication, permissions, author attribution and measured performance remain pending.
6. **Fotocasa follow-up meeting**: ask what AI actually builds, which public pieces are AI-assisted, how headlines/research/human review are handled, and what time/quality/performance results exist. Do not infer implementation from the public portal alone.

## Last Confirmed

2026-10-26. Multiple internal end-to-end drafts exist; matrix v1 expanded to 66 entries and now frozen; SC/Writer headline-role changes have been reported saved in draft but live activation is **unverified**; three synthetic Headline Tests surfaced an unsatisfactory baseline. Priority is better real stories, verified supplementary reporting and package/Writer quality, not re-proving the handoff or indefinite data discovery. No externally published / measured pipeline outcome confirmed.
