# Scaling Editorial — Editorial Search Framework / Trend Finder 2.0

_Status (2026-10-22): Framework approved; Builder reports a separate Trend Finder 2.0 DRAFT with Instructions, Standard 2.0 Knowledge and Starburst MCP. Dominik supplied the complete text of both documents and their CONTENT passed an initial cross-check against the seven framework components and core technical guardrails. No productive run, live publication, actual connector permissions or Builder-installed configuration independently verified._

This is a **supporting design/reference document for the existing Scaling Editorial project**, not a separate project. The existing Trend Finder remains unchanged as a comparison baseline. The user explicitly decided to build **a NEW Trend Finder 2.0** rather than modify the old agent, to reduce regression risk.

## Why the change

The operational goal is strong potential readership / click appeal for factually reliable real-estate articles, not production of technically valid statistical reports. An actual workflow test produced an article about asking rents in Mittelsachsen (+5.7%) which Dominik judged fundamentally uninteresting: largely figures and comparisons rather than a story. A robust local change in a low-reach district is not necessarily a strong topic. Wider-interest comparisons (large cities, states, North/South, East/West, housing segments, etc.) are promising search directions, although exceptional local stories remain allowed. Click potential cannot be reliably forecast before a story exists; the Trend Finder should identify **potential audience-interest indicators**, not predict traffic.

**Roles:**
- Trend Finder: broad, systematic **data exploration and detection of potential story opportunities**; produces evidence-based Signal Packages and reader-potential hints, but neither a finished story nor a final headline/angle.
- Story Creator: targeted validation/follow-up; **actively develops and tests potentially compelling journalistic perspectives**, finds the most interesting defensible story (or rejects it), makes editorial decision, prepares Story Package and Writer Briefing. Do not conflate successful signal validation with a publication-worthy story.
- Writer: expresses the selected story as a readable article **without inventing facts or independently researching**; human review remains mandatory.

## Seven confirmed components of the Editorial Search Framework

These decisions were explicitly approved by Dominik during a one-by-one OK/veto sequence on 2026-10-21.

### 1. Geography
Prioritize cross-regional patterns and comparisons with broad or multiple audiences: all Germany, federal states, major cities, metropolitan regions, larger geographical groups, East/West, North/South, city/suburb, urban/rural. Germany is the default. Single small towns and districts remain eligible **only when unusually noteworthy or plausibly interesting to a sufficiently relevant audience**. Do not categorically ban local discoveries. Geographic group definitions and the sample supporting claims must be defensible.

### 2. Property and market segment dimensions — independent, combinable axes
- **Transaction mode:** rent / buy.
- **Property type:** apartments / houses, with meaningful available subtypes.
- **Size:** small / medium / large **for both apartments AND houses**, not apartments only.
- **Price tiers:** low / medium / high.
The agent may combine dimensions creatively (e.g. small houses for rent). Segment boundaries must be technically defensible, explicit, and stable for comparisons. All combinations are not mandatory, and only available data is usable.

### 3. Temporal search directions
Month, quarter and year comparisons; short-/long-term development; trend changes, acceleration/deceleration, recurring seasonal patterns; relevant time/event contexts when plausible (semester starts, holidays, school breaks, turn of year, others). These are **possible exploration hypotheses, not presumed causes**. Use suitable periods and repeated observations to assess purported seasonality. **Year-over-year remains the standard/default**, with a justified alternative when more appropriate and comparable.

### 4. Types of notable data findings and quantitative thresholds
Seek strong increases/decreases, surprising contrasts, broader patterns, divergent trajectories, reversals and relevant differences between regions, segments, renting and buying, and size tiers. The search catalog is open, not exhaustive.
**No rigid percentage threshold defining a journalistically interesting trend** (e.g. NOT 'only price changes >=5%'). A modest movement can be interesting across many markets or as a surprising contrast; a big percentage in one tiny market may be editorially weak. Detect unusualness **in the context of comparable time series/markets/segments**.
**IMPORTANT:** Removing the editorial %-threshold does NOT remove technical quality requirements, statistical controls, minimum sample sizes, plausibility checks, etc.

### 5. Potential readership / reach
Qualitatively prioritize signals based on:
- potential audience breadth;
- everyday relevance to housing costs / renting / purchasing decisions;
- surprise/curiosity potential;
- comparison value for users;
- actuality.
Do **not** fabricate readership counts, numerical traffic forecasts, or an arbitrary quantitative reach score. Explain briefly *why the signal might interest readers*. This is an **early opportunity indicator**, not the Story Creator's editorial verdict.

### 6. Autonomous, diverse and efficient exploration
Given a generic request, the Trend Finder selects its own search direction, geography, relevant size/type/mode segments and timeframes rather than requiring user prompts about specific cities. Avoid running the identical combinations every time; allow independent exploration outside suggested categories when defensible.
**Completely scan each SELECTED search space** and do not stop at the first hit; **do NOT exhaustively combine every possible geography, segment, and date in every run**. Deepen promising findings selectively, avoid unnecessary data queries, stop when enough quality signals are available. No arbitrary query-count/runtime ceilings.
The broad exploration belongs to Trend Finder; targeted follow-up to Story Creator.

### 7. Signal Package / interface to Story Creator
Keep the proven package structure and technical contents (what, where, compare, metrics, counts, quality, source). Add only the minimum editorial-opportunity metadata:
- possible audience / readership groups;
- concise qualitative reason why it could attract relevant readers;
- open **validation / exploration questions** for Story Creator.
**No finished story, no definitive headline, no causal conjectures, no explanation of causes, no action advice.**
Do not fabricate journalistic angles in order to justify a weak signal. Allow Story Creator to reject an otherwise strong signal.

## Specific implementation decision, 2026-10-21

- Create a **new, separate agent: Trend Finder 2.0**. Preserve the original Trend Finder intact for controlled comparison and regression protection.
- **Updated decision, 2026-10-22 (supersedes 2026-10-21 drafting approach):** Dominik prefers creating the new agent in **ChatGPT Agent Builder** and letting that Builder **draft/structure its own Settings Instructions**, based on a comprehensive construction brief with all confirmed framework requirements and legacy technical safeguards. ChatGPT supplies the brief and independently reviews the Builder-produced full Instructions and companion reference standard. Agent configuration remains in Settings; a regular agent chat is not assumed to edit it.
- Create an accompanying **Signal Package Standard 2.0** as a separate reference/knowledge document. Original standard and technical constraints carry over; change only what the new search framework requires in the editorial boundary/output contract.
- A first attempt to draft complete Instructions was **interrupted**; it was not completed or installed. The new agent was **not confirmed created**. No instructions/reference files have yet been finalized.
- Before the final install, ensure the new agent has the relevant internal read-only data capabilities. No assumptions that permissions or resources are already connected.
- Writer settings remain unchanged. Story Creator should later get a separate focused change for **active story discovery/selection**; this is not yet implemented as an instruction change from this discussion.

## Technical baseline that MUST survive from the old Trend Finder Instructions

The current/old Instructions were provided verbatim by Dominik in the 2026-10-21 conversation; the following is a complete behavioral checklist to preserve when authoring V2.

### Role, scope and access
- Trend Finder in Editorial Lighthouse: systematically explore available internal Scout24 data; deliver structured Signal Packages to Story Creator; stop at signal level; no cause hypotheses, explanation, story creation or recommendations.
- On a broad request autonomously choose an executable trend run; original planned trend fields were Price Change, Supply Change, Demand Change, Demand–Supply. **Current V2 MVP scope is deliberately Price Change only**; do not inadvertently expand the test scope, but retain other fields as future candidates.
- Default country Germany. Geographic level may be city, district, federal state or other German region according to available robust data. If sample size inadequate at granular level, choose coarser GERMAN level, not other countries. International comparisons only if user explicitly requests.
- Only genuinely accessible tables, fields and data. No fabricated access, values or runs; if no internal source, report precise data blocker. Never silently replace internal Scout24 data with web data unless explicitly asked.

### Efficient Starburst usage
- Prefer familiar schema **bi_data_is24_etl** with **d_listings_without_pii, d_regions, f_listings_ps** for listing/price analysis.
- If known tables suffice, start with targeted SQL, not broad table/schema discovery.
- Flow: known source → targeted SQL → quality control → full chosen-search-space scan → signal packages.
- Discovery only when a needed field is unknown, existing tables are inadequate for the chosen indicator, or a query fails due to missing field/table; scope discovery to precise question and likely source. No speculative chain of schema searches; stop with concrete blocker if needed.
- Target efficient bounded research by relevance (not a fixed number of queries). No permission to invent data.

### Run workflow
- Old chain: **Trendfeld → Trendindikator → Suchraum → Vergleich → Signal → Signal Package**. Keep this technically valid while enhancing discovery/prioritization with the Editorial Search Framework.
- Define the selected indicator, a **finite and completely scannable chosen search space**, comparable periods using **identical definition/filter/segment limits**, standard YoY (same period prior year) unless the measure genuinely benefits from MoM or another comparison; briefly justify significant departure.
- **Scan the entire selected search space**, not just first hit; choose quality signals based on magnitude relative to context, sample size, robustness and data quality, now ALSO qualitative readership potential. Output standard **max 5 Signal Packages**; do not simply return top five absolute percentages. Multiple packages allowed.
- Parallelize independent segments when useful, then consolidate and re-check definitions, duplicates and data quality.
- Ask questions only when necessary and not derivable; generic queries should run without question. Missing fields/dates/sample/data access lead to explicit blocker, never empty/fake packages.

### Original data-quality rules (retain)
- Exclude fraud and phishing, drafts if applicable/identifiable, implausible prices/sizes; note missing values, dropout, proxies and technical limits.
- Consistent period filters, segment definitions and boundaries.
- **Minimum 200 observations per listing segment in EACH compared period as the default.** Do not confuse this technical guardrail with editorial %-thresholds.
- Flag large count shifts between periods. Use **median as primary statistic when outliers matter**, mean optionally as secondary; preferably robust results rather than extreme percentage changes.
- Reproducible metrics: current/prior value, % change, median, current/prior counts, dimensions, data source, 'unauffällig / Hinweis / kritisch' quality status, brief technical caveat.
- Results under minimum quality do not get a Signal Package, but can be noted in technical closing balance.
- Handle missing necessary fields with technically defensible labeled proxy; otherwise reject segment/run.
- Technical closing balance: number of segments scanned, number meeting quality tests, restrictions and proxies.

## Original Signal Package Standard (verbatim baseline supplied by Dominik)

### Datenqualität

Bevor ein Ergebnis als Signal ausgegeben wird:

- Fraud- und Phishing-Listings ausschließen, soweit mit den verfügbaren Feldern möglich.
- Unplausible Werte ausschließen.
- Fehlende Werte berücksichtigen und relevante Ausfälle kenntlich machen.
- In beiden Vergleichsperioden identische Definitionen, Filter und Segmentgrenzen verwenden.
- Ausreichende Fallzahlen sicherstellen.
- Bei Listings standardmäßig mindestens 200 Beobachtungen je Segment und Vergleichsperiode verlangen.
- Starke Unterschiede der Fallzahlen zwischen Vergleichsperioden markieren.
- Wenn Ausreißer relevant sein können, den Median als Leitmetrik verwenden; den Durchschnitt nur ergänzend angeben.
- Nicht verfügbare benötigte Felder und verwendete Proxies ausdrücklich kennzeichnen.
- Robuste Auffälligkeiten gegenüber bloß extremen Prozentwerten bevorzugen.

### Inhaltliche Grenze (to adapt only as agreed for V2)

Der Agent beobachtet Daten und erklärt keine Ursachen. Er formuliert keine Hypothesen, Kausalannahmen, Story Angles oder Handlungsempfehlungen.

Insbesondere vermeiden:

- „Das liegt wahrscheinlich an höherer Nachfrage.“
- „Studenten treiben die Preise.“
- „Das ist ein Berliner Umland-Effekt.“
- „Der Markt scheint gesättigt.“
- „Das könnte an Regulierung liegen.“
- „Hier sehen wir eine Aufholbewegung.“
- „echter Markttrend“
- „spannende Story“
- „besonders journalistisch relevant“

Zulässig ist ausschließlich die Beschreibung dessen, was in den Daten auffällig ist, wie der Vergleich definiert wurde und wie belastbar die Beobachtung ist.

**V2 delta:** Allow **clearly marked qualitative potential audience / relevance hints and open non-causal questions**, without endorsing a story, explaining causes or creating definitive angles. The strict old wording 'only technical description' therefore cannot be retained literally unchanged; revise consistently in the new Standard.

### Standardausgabe

Beginne sehr kurz mit:

- Trendfeld
- Trendindikator
- Suchraum
- Vergleich
- verwendete Datenquelle
- wichtige Datenqualitätsregeln

Danach folgen standardmäßig höchstens 5 der stärksten robusten Ergebnisse in diesem Format:

**Signal Package**

[Region / Segment] · [Trendindikator] · [Veränderung] · [Vergleich]

- aktueller Wert
- Vergleichswert
- Veränderung in %
- Median
- Fallzahl aktuell / Vergleich
- relevante Segmentdimensionen
- Datenquelle
- Datenqualität: unauffällig / Hinweis / kritisch
- kurzer technischer Datenqualitäts-Hinweis, falls nötig

Ein Run darf mehrere Signal Packages erzeugen. Gib kein Signal Package aus, wenn die Mindestqualität nicht erreicht wird; nenne das Segment stattdessen nur in der technischen Abschlussbilanz, sofern es für die Nachvollziehbarkeit relevant ist.

### Abschluss (adapt only for V2-compatible opportunity metadata in packages)

Schließe ausschließlich mit einer kurzen technischen Zusammenfassung:

- Anzahl der geprüften Segmente
- Anzahl der Segmente, die die Qualitätsregeln erfüllt haben
- vorhandene Einschränkungen oder Proxies

Keine Interpretation, keine Story-Idee und keine Handlungsempfehlung.

**V2 delta:** Keep the conclusion technical, place the qualitative readership potential and Story Creator questions **inside each Signal Package**, not as made-up stories in the conclusion.

## Actual tests and quality learnings motivating redesign

- **Real TF → SC → Writer Mittelsachsen:** Trend Finder detected 30 Sep 2025 vs 30 Sep 2026 median active apartment asking rent from €5.98 to €6.32/m² (+5.7%), with 796 vs 729 active listings and robust direction under alternative filters. Story Creator independently checked July–September month-ends and local contrasts, generated complete downloadable JSON Story Package; Writer generated full article. Output was **judged unreadable/uninteresting as journalism by Dominik**, dominated by data documentation, despite technically good package handoff. The story angle merely extended a local statistic over additional months, without genuinely compelling insight. This is the principal product-quality issue.
- Quality caveats: independent September control figures €6.33/m² and 736 listings vs original €6.32 and 729; three comparator 2025 month-ends all €5.98; methodology/filter reconciliation and confirmation of monthly query correctness are **unresolved**. Do not call publication-grade validated.
- An earlier attempt with several Saxon-district signals was stalled and inconclusive. Another apparent SC result was from a **regular ChatGPT chat rather than the configured agent**, so it must NOT be used to evaluate the agent.
- Synthetic varied scenarios indicated the data-flow/factual safeguards function, but article storytelling remains too report-like. Improve upstream story opportunities and Story Creator's active journalistic angle generation; don't overfit Writer instructions to sample cases.
- SC role change conceptual only: after receiving a signal, actively explore several plausible editorial directions when useful, identify and research the most compelling defensible angle, choose or reject; do not simply validate that a percentage held for several months.
- Performance of actual article topics/CTR is not yet known; use potential reach as qualitative hypothesis, eventually close feedback loop with actual readership/search/discover data.

## Agent Builder outcome reported on 2026-10-22

- Dominik shared the Agent Builder's completion report: a separate draft named **Trend Finder 2.0** was reportedly created, with independently Builder-authored Settings Instructions, a separate **Signal Package Standard 2.0** Knowledge file and three starter prompts. Original agents remain unchanged. No productive Trend Run; not reported as published.
- Starburst MCP was reportedly connected with Dominik's explicit approval. The app also exposes a **write-capable create/replace View operation**, and no tool-level read-only-only subset was offered. Builder says **every action requires confirmation** and Instructions prohibit writes. **This is not a technical read-only guarantee**; avoid approving any write action; stronger controls would require read-only DB permissions/app restrictions.
- Dominik supplied the **complete Signal Package Standard 2.0** and, in a subsequent message, the **complete Agent Instructions**. Both document texts have been reviewed for framework coverage. No fundamental logical contradiction identified. The configured state and tool behavior have not been directly tested.
- Initial review of Knowledge standard: preserves Price Change MVP, median and n>=200/period/segment, identical filters, disclosure of proxies, technical closing balance, up to five signals and added qualitative reader-potential/opportunity fields. Final consistency audit requires full Instructions. Pay attention to price-bucket comparability/composition effects and supported regional grouping claims.
- Review findings / proposed surgical hardening (not yet approved for agent changes): (1) date cutoffs, listing population/active-vs-new definitions and repeated listings/joins should be explicitly comparable to prevent spurious apparent trends; (2) price-tier segmentation by the outcome variable itself can introduce artificial composition effects despite fixed thresholds; label comparisons cautiously or choose independent baseline segmentation; (3) ensure exact vs approximate median methodology consistent and recorded, and **Knowledge filename matches actual reference** (`signal-package-standard-2.0.md`). Connector write actions need stronger technically enforced read-only permissions where feasible; otherwise mandatory approval and instructions alone are not hard permission boundaries.
- Next action: decide whether to send small Builder revision request for these specific points (no full rewrite), verify tool restrictions/Knowledge attachment and conduct safe read-only smoke test before TF1/TF2 comparison.

## Targeted Builder follow-up, 2026-10-22 (reported, unverified in diff)

Dominik provided a screenshot of the Builder's change summary for Trend Finder 2.0. It reports that the Instructions and Signal Package Standard 2.0 were both updated to require: clearly defined listing universe; consistent snapshots vs. time windows; join-cardinality checks, preaggregation/deduplication and sample-size verification; consistent median/percentile methodology (population, missing values, weighting, rounding); stable period-independent price-band boundaries and explicit composition-effect checks. Knowledge attachment and reference were reportedly confirmed. The write-capable Starburst `Create/Replace View` action remains available under user confirmation but is explicitly prohibited by agent Instructions. No Trend Run was started. The final text/diff and technical permissions have not been independently verified.

**Next action:** Run controlled read-only smoke/test query in new TF2, approve SELECT/metadata only, then run identical general price-trend query on legacy Trend Finder and compare editorial relevance, geographic/segment variety, source/SQL/methodological verifiability and efficiency. No need for another full instruction rewrite before testing.

## Next approved action (updated 2026-10-22)

**Draft exists per Builder report. Initial full-text review found the seven framework requirements and core safeguards. Builder reports targeted methodological fixes and Knowledge link verified.** Next is a controlled read-only run and same-prompt comparison with legacy Trend Finder. The connector's View-writing capability remains exposed even though Instructions forbid it; only approve SELECT/metadata calls. Keep original unchanged.

A useful controlled test afterwards: run legacy and V2 Trend Finders with the same general prompt, compare diversity of signals, broad reader relevance, technical quality, Starburst efficiency and downstream Story Creator potential. No test or new agent setup has yet been reported as completed.

## User working preferences

- Work in German with direct, concise, practical replies. Earlier the user liked a short OK/veto workflow; **they explicitly ended the OK/veto button pattern** and switched back to normal conversation.
- No rigid formulas like 'always 5 cities' or 'always >5%'; seek generally applicable principles, avoid overfitting the Mittelsachsen failure.
- Existing agent Instructions live in ChatGPT Agent Builder **Settings**, not repo. Do not imply that regular agent chats can edit their own configuration. New design/spec can live in Profile repo, but installing agent settings is a separate user action.
- The user already answered all design questions; don't ask for repeated confirmation.
- Do not prematurely edit other agent settings. Don't promise asynchronous/background delivery.
- User cares about speed and has interrupted very lengthy responses; deliver finished output efficiently.
- **Latest preference (2026-10-22): Builder-authored instructions based on a comprehensive brief**, reviewed afterwards. This overrides earlier plan for ChatGPT to write the final instructions directly.
