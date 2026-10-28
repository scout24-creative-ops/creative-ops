# Scaling Editorial

## Purpose

Build and validate a scalable, AI-supported editorial growth engine for ImmoScout24 that can turn detectable signals into useful, publishable consumer stories, learn from performance and establish a repeatable operating model for further scaling.

Scaling Editorial was initially established as the C3 News / editorial Lighthouse within a planned 12-month pilot. On 2026-10-20 Nataliya reported a VP decision to remove Editorial from the C3 Lighthouse topic portfolio and focus the Lighthouse on other initiatives. Nataliya explicitly confirmed that the Scaling Editorial program and roadmap continue as planned. The current project name remains **Scaling Editorial**; C3/Lighthouse is now historical context, not the current classification.

## Current Status

- **MVP erreicht für Content-Erstellung (2026-10-28, interne qualitative Abnahme):** Der aktuelle Pilot führt Web-/Daten-Signale über **Trend Finder → Story Finder → eigenständiges Writer-Briefing → Article Writer** zu gut lesbaren deutschen Artikeldrafts mit Headline, Quellen und direkt generiertem Titelbild. Der neue Baugenehmigungen-Test wurde von Dominik als gute MVP-Baseline beurteilt. Dies ist **keine** redaktionelle Fakten- oder Veröffentlichungsfreigabe, kein voll automatisierter Flow und kein Beleg für konsistente Qualität jeder künftigen Story oder gemessenen Traffic.
- **Agent-Zuständigkeiten und Qualität:** Trend Finder entdeckt/registriert diverse Signale und prüft Duplikate; Story Finder recherchiert/selektiert eigenständig einen belegten Angle mit Leserfrage, Core Story Claim, Story Promise, Quellen, Grenzen und standalone Writer-Briefing. Er bewertet nur Headline-Potenzial, schreibt **keine** tatsächlichen Headlines oder Arbeitstitel. Article Writer schreibt allein auf Grundlage des Briefings (Standard 500–650 Wörter), ohne neue Web-/Starburst-Recherche, und formuliert finalen Text/Headline. Negative Story-Finder-Entscheidungen sind im Pilot weniger gründlich validiert als positive.
- **Headline-Optimierung für MVP abgeschlossen:** HEADLINE_TEST mit drei Varianten und Auswahl deckte eine Schwäche auf: Präzisionszahlen und raffinierte Gegensätze wurden wiederholt über sprachlich natürlichere, interessantere Varianten gestellt (Demografie- und Heizungsförderungs-Tests). Builder meldete konsolidierte 3-Schritt-Regel (sofortige Verständlichkeit/Leserrelevanz → Passung zu Story Angle/Versprechen → journalistische Gesamtwirkung) und aktuelle Agentnamen **Article Writer** und **Story Finder**. Der normale Baugenehmigungen-Test lieferte die akzeptierte Headline „12,1 Prozent mehr Baugenehmigungen: Warum neue Wohnungen trotzdem auf sich warten lassen“. Mindestmaßstab: verständlich, natürlich, neugierig machend für die Zielgruppe, storykonform, nicht irreführend, als Draft redaktionell nutzbar; menschlicher Review bleibt nötig. Keine weiteren isolierten Tests ohne konkreten Anlass.
- **Editorial Imagery im Article Writer integriert:** Direkte Bildgenerierung funktionierte; erste Bilder wirkten generisch. Aus den Stilregeln des bestehenden Kollegen-Agenten **Imagery Builder** wurde ein installierter, gesonderter Skill **Scout24 Editorial Imagery** für fotorealistische natürliche, markennahe Titelbilder genutzt (der Skill ruft den Kollegen-Agenten nicht direkt auf). Writer-Instructions integrieren ein Bild im normalen Artikelmodus, bevorzugt 16:9, Bildbeschreibung/Symbolbildkennzeichnung und Passungscheck gegen Headline/Artikel inklusive Vermeidung irreführender Dramatisierung oder Idylle; HEADLINE_TEST und reine Textanfragen bleiben ohne Bild. Das Baugenehmigungen-Motiv wurde visuell und inhaltlich als ausreichend gut bewertet.
- **Getestete Stories:** Demografischer Regionalausblick bis 2045 und Förderung für Heizungstausch wurden für Headlines/Entwürfe genutzt; Demografie-Bildtest zeigte zunächst einen zu idyllischen Angle. Der neue vollständige Baugenehmigungen-Draft mit Bild gilt als aktueller interner MVP-Referenzfall. Frühere renovations-/preisbasierte Storys hatten teilweise Evidenz-Promise-Lücken und bleiben ohne Publikationsfreigabe.
- **Newsportal in Contentful ist aktuelle Priorität:** Der vorhandene Team-Prototyp `Scaling Editorial/IS24 News Standalone.html` ist nur eine Designreferenz (mehrere Ansichten in einer HTML-App), kein CMS-Import. Die Contentful-Seitenhülle mit IS24-Header, Main-Navigation, Footer und Grundlayout ist fest; LP Builder erzeugt ausschließlich HTML für die Contentfläche. Ziel: später simple Newsstartseite mit zweiter Rubriken-Navigation und je Rubrik einem großen neuesten Artikel plus kleineren Karten, ohne Extras. **Erster Schritt**: eine wiederverwendbare Artikel-Detailvorlage mit Blindtext und neutralem Bildplatzhalter; erst später reale Writer-Texte/Bilder. Bilder sollen vorerst manuell über bestehenden Static Server als stabile URL bereitgestellt werden.
- **Konkrete LP-Builder-Hürde (2026-10-28):** Das bestehende **LP Builder – Contentful Custom GPT** kann HTML in Contentful als Draft schreiben, Preview/Slug-Updates und Freigabe-gesteuertes Publishing; im regulären Modulmodus dürfen jedoch nur definierte Component-Library-Page-Modules verwendet werden. Für Rubrik/Headline/Subline/16:9-Titelbild/schmale Longform-Lesespalte/Quellen fehlt ein passendes Modul. Ein erster Design-Draft wurde darum **nicht** erstellt (keine Entry-ID, kein Preview). Vollständiger HTML-Replace/Import existiert als Sonderpfad, ist aber kein Ersatz für eine regulär freigegebene Templatefähigkeit.
- **Codex-Artikel-Template lokal implementiert (2026-10-28, nach Codex-Bericht):** Neues Page Module `scaling-editorial-article` + benanntes `Scaling Editorial Article Template`, das genau dieses Modul auswählt; variabler Artikelinhalt/Überschriften/Quellen im selben Modul. HTML-Payload und Mapping in `templates/scaling-editorial-article.html` / `.md`; LP-Builder-Integrationspunkte in `gpt-package/component-library.html`, `gpt-package/building-policy.md`, Bridge-CSS `platform-runtime/runtime/contentful/lpbuilder-bridge.css` (Nested Repository), Contract-Test `tests/test_gpt_package_contracts.cjs`, README. Berichtete lokale QA: 515 Blindtext-Wörter, H2/H3, Bild 16:9, Textspalte 720 px, Bild bis 960 px, mobile 390 px ohne Overflow; **59/59 Tests erfolgreich** und `git diff --check` grün, ohne neue Runtime-JS-Abhängigkeit. **CSS-Deployment-Vorbereitung abgeschlossen, nur Staging (2026-10-28):** Codex hat selektiv ausschließlich zwei Artikel-CSS-Hunks in `platform-runtime/runtime/contentful/lpbuilder-bridge.css` gestagt: eine Datei, 20 Einfügungen (17 Basiszeilen und drei Mobile-Regeln), `git diff --cached --check` grün; die fremde Checkmark-Kommentaränderung und 91 JS-Zeilen verbleiben unstaged. Vorherige 59/59 Tests grün. **Kein Commit, Push oder Deployment**; nächster Schritt nur ein ausdrücklich freigegebener Commit aus dem vorhandenen Index, danach separater Push-/Pages-Deploy-Freigabeschritt. Noch keine produktive GPT-Aktualisierung und kein Contentful-Draft; lokale Dateien/Tests sind aus dem übermittelten Codex-Bericht bekannt, hier nicht unabhängig eingesehen.
- **Human Review und Publishing (Konzept, offen):** Geplant: separate, knappe Human Review Notes vom Writer (Beleglage, Quellen, offene Checks, journalistische Vereinfachungen, Bildhinweise) und eine Preview-geführte Freelancer-Prüfung eines Contentful-Drafts. Kleine Korrekturen über LP Builder/Contentful; größere stilistische Arbeiten zum Writer, Faktenfragen zum Story Finder; gleicher Draft nach Änderungen erneut freigeben lassen. Eine Wiki-basierte Artikel-Queue/Artikelakte mit Preview, Status, Slug/Entry-ID und Review-Referenzen ist lediglich diskutiert. Veröffentlichung erst nach ausdrücklicher Freigabe der **konkreten geprüften Version**.
- **Orchestrierung später:** Interne **Agent Factory** ist eine potenzielle Plattform für einen koordinierenden Agenten (Status, Agent-zu-Agent-Handoffs, Korrekturschleifen, Publish-Gate). Dies ist ausdrücklich **nicht** Teil des MVP; als Zukunftsoption für Kollegen zu untersuchen, nicht jetzt implementieren.
- **Redaktionelle Standards und Learning später:** Evtl. zentral redaktionell pflegbare Wiki-Seite für variable Artikelvorgaben/Story-Formats, später Dokumentation finaler Headlines/URLs und vergleichbarer Klick-/CTR-/Search-/Discover-Learnings. Aktuell kein Wiki-/Starburst-Zugriff für Writer als notwendig bestätigt und keine Performance-Daten. Auch technische End-to-End-Orchestrierung, echte Human-Review-Freigabe und Publishing-Messung sind offen.
- **Governance:** Seit 2026-10-20 gehört Scaling Editorial nicht mehr zum C3 Lighthouse Themenportfolio, das Programm läuft laut Nataliya aber weiter; Dominik verantwortet das Gesamt-Agent-/Workflow-Modell, Viktoria das redaktionelle/SEO-Layer und Bea die Contentful-Engineering-Anbindung. Keine neuen Ressourcen oder Termine bestätigt.
- **Master Matrix v1 / Datenlage:** Die Scout-Wiki-Matrix hat 66 Ideen/Statuszeilen in sieben Themenfeldern; v1 ist eingefroren. Data-Team-Fragen gezielt bei publikationsrelevanten Fakten-/Semantiklücken stellen, keine neuen endlosen Matrix- oder Headline-Testzyklen. Stützende technische Data-Fakten, historische Agent-Revisionen und Einschränkungen stehen weiter unten in diesem Dokument.
- **Fotocasa (separat):** Exploratives Gespräch mit der Scout24-Tochter, die ähnliche Editorial-AI-Ziele verfolgt; Follow-up geplant, keine verifizierte Aussage zu deren Prozess/Performance.

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

**Aktueller manuell verbundener Pilot:** Signalquellen → Trend Finder → Signal Package → Story Finder → Story Package + eigenständiges Writer-Briefing → Article Writer (Text + Titelbild) → zukünftige LP-Builder-Contentful-Draft-Übergabe → zukünftiger Human Review → gesonderte Veröffentlichungsfreigabe.

**Langfristiger Ausbau:** Agent Factory/Orchestrierung und Artikelakte könnten Übergaben/Korrekturen koordinieren; ein späterer Learning-Prozess würde Publikations- und Nutzungsdaten in Redaktionsregeln zurückführen. Das ist derzeit nicht implementiert.

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

### Story Finder (früher Story Creator)

The Story Creator is the editorial decision layer / "Brain":

**Validate → Human Relevance → Shape → Select**

It validates the evidence, asks whether the signal matters to people, develops multiple angles, checks those angles against evidence and selects the strongest viable story. A signal is not automatically an article. In den aktuellen Web-Story-Tests lautet der finale redaktionelle Ausgang Entwickeln oder Verwerfen; ein noch offener Publikationscheck ist kein dritter Writer-Handoff-Status.

The Story Finder should produce a Story Package only when evidence supports a useful, differentiated and low-speculation story **and actually answers the proposed reader promise**. It should autonomously find a few high-value supporting analyses, comparable views, primary-source facts and useful explanatory material where available, without endless research or fabricated claims. Additional helpful context is distinguished from publication-blocking validation; the writer receives only verified material for reuse.

### Story Package

The Story Package is the production-ready editorial decision: **which story are we telling and on what evidence?**

It contains the selected angle, Core Story Claim, Story Promise, reader question, supported curiosity/hook, core and supporting evidence/sources, claim boundaries, verified editorial enrichment and a prioritized, standalone Writer Briefing. **No preferred headline recommendation from SC**; Writer independently formulates the headline.

### Article Writer / Content-Produktion

Der **Article Writer** erstellt aus dem standalone Writer-Briefing den journalistischen Text und inzwischen direkt ein Titelbild über den installierten Scout24 Editorial Imagery Skill. Er recherchiert keine neuen Fakten. Der Story Finder legt die Story und ihre Grenzen fest, der Writer die finalen Formulierungen und Headline. Ein separater Image Creator oder Chart Creator kann später bei Bedarf ergänzt werden; für den derzeitigen MVP ist keiner erforderlich.

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

**Artikel + Bild (+ künftig Review Notes) → LP Builder → Contentful Draft/Preview → Freelancer Human Review → explizite Freigabe der konkreten Version → LP Builder Publish**

Der bestehende HTML-Newsportal-Prototyp ist nur eine gestalterische Grundlage. Der LP Builder benötigt erst eine freigegebene, wiederverwendbare Artikel-Templatefähigkeit; hierzu ist Codex lokal beauftragt. Die Contentful-Preview-/Freigabeschleife ist noch nicht implementiert und diese Reihenfolge eine abgestimmte Konzept-Richtung, keine getestete Automation.

### Workflow Automation

The expected orchestration is intentionally simple and predominantly linear:

**Agent → Package → Agent → Package → Agent**

Die interne Agent Factory ist für eine spätere Orchestrierung relevant, wurde in dieser Unterhaltung aber nicht technisch untersucht. Agent-zu-Agent-Tool-Aufrufe sind **nicht** schon durch Skills oder Chat-Erwähnungen gegeben. Komplexe Automatisierung ist kein Bestandteil des MVP; zunächst manuelle Übergaben und ein redaktionelles Review-Gate.

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

- 2026-10-28 — Nach Codex-Architekturprüfung ist **ein `scaling-editorial-article` Page Module plus benanntes, auf genau dieses Modul verweisendes Artikel-Template** lokal implementiert. Die Wahl vermeidet künstliche Modulgrenzen/Spacingregeln in fortlaufender redaktioneller Prosa; endgültige Host-Akzeptanz erst nach Bridge-CSS-Deployment, GPT-Update und Contentful-Preview.
- 2026-10-28 — Dominik hat den regulären Article-Writer-Test zu Baugenehmigungen mit Headline und direkt generiertem Skill-basiertem Titelbild als **MVP ausreichend** bewertet; Headline-Optimierung ist vorerst abgeschlossen. Human Review bleibt zwingend.
- 2026-10-28 — Newsportal-Scope: Erst Artikel-Template mit Blindtext/Platzhalterbild, danach echte Artikel; fixe Contentful-Shell nicht duplizieren, spätere minimalistische Kategorie-Navigation mit einem großen jüngsten Teaser und kleineren Karten. Bilder vorerst manuell auf Static Server.
- 2026-10-28 — Ein reguläres LP-Builder-Artikelmodul fehlt: kein Contentful-Draft im Test erstellt. Codex soll lokal die passende MVP-Templatepage anhand der bestehenden Modul-/Policy-Architektur und `IS24 News Standalone.html` entwickeln; keine Live-/CMS-Writes ohne separaten Schritt.
- 2026-10-28 — Agent Factory-Orchestrierung und Wiki-basierte Freelancer-Korrektur-Queue sind spätere Optionen, nicht MVP-Implementierungsumfang. Der Freelancer soll nicht dauerhaft Agent-Übergaben manuell koordinieren müssen.
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

- **Artikel-Template lokal gelöst, aber noch nicht live integriert:** Der frühere normale LP-Builder-Designauftrag blieb ohne Draft, weil ein Artikelmodul fehlte. Codex hat lokal die Templatefunktion plus CSS und Tests implementiert (berichtete 59/59 bestanden). Nicht produktiv nutzbar ohne separaten, kontrollierten **Bridge-CSS-Deploy (Nested Repository)**, anschließendes GPT-Paket-Update und einen ersten Contentful-Host-Preview-Test. Bestehende fremde Änderungen in lokalen Arbeitsbäumen wurden laut Codex nicht verändert.
- **Bild-Asset-Bereitstellung:** Manuelles Hosting auf bestehendem Static Server ist als MVP-Methode entschieden, konkrete URL und späterer CMS-Test noch offen. Der Writer-Skill verbessert die Stilnähe, garantiert aber keine immer korrekte redaktionelle Bildaussage.
- **Reader promise vs evidence:** The renovation story correctly explains aggregate/composition-adjusted asking-price comparisons but does not establish real buyer savings or renovation economics, despite a headline implying such insight. Story Creator's relevance check needs to distinguish a compelling promise from the actual question the available evidence can answer.
- **Research proportionality:** The agents can revisit data repeatedly to reconcile statistics. Central headline/claim figures require validation; peripheral discrepancies should not automatically block all drafting. A risk-based research/stop policy is a proposed next improvement, not implemented.
- **Data and rights:** Source-specific permissions and external publication approval remain open. Some sensitive user-behavior/search-detail tables are not cleared; event/channel semantics affect interpretation. The Starburst View write tool is not technically removed, despite behavioral SELECT-only rules and action confirmations. Never authorize writes as part of trend research.
- **Methods:** Stable populations and comparison partners matter. The renovation case harmonized an October 15 daily end-state sample but could not exactly reconstruct an earlier signal's house median. Controlled stratification remains descriptive, not a causal estimate or buyer saving; local-level coverage and missingness limit generalization.
- **Reliability:** Multiple tests show good autonomous inquiry and some strong reader-interest judgments, but weak stories have still received Writer Briefings. One successful chat-only run does not guarantee suppression of unrelated document workflows.
- **Review / delivery:** Human Review roles and capacity, freelancer onboarding and sharing permissions, Contentful publishing path, orchestration and actual Search/Discover traffic measurement are not finalized or end-to-end tested.
- **Governance:** Removal from C3 Lighthouse changes classification/visibility, not the confirmed Scaling Editorial roadmap. Content Factory reporting, future remit and possible resourcing effects remain open. The January 2027 Cleaning Month remains a planning item.

## Next Steps

1. **Artikel-CSS-Commit freigeben:** Codex hat die zwei CSS-Hunks selektiv gestagt und `git diff --cached --check` bestanden; nur `lpbuilder-bridge.css` mit 20 Insertions im Index. Nach ausdrücklicher Zustimmung **nur staged Inhalte committen**, Commit-SHA und weiteren Git-Status prüfen; Checkmark-Kommentar und `lpbuilder-runtime.js` ungestagt erhalten. Push/Deployment und Contentful-Host-Test bleiben getrennte spätere Freigaben.
2. **Zwei getrennte Integrationsschritte freigeben:** (a) Bridge-CSS nach Review über den regulären Prozess committen/pushen/deployen, (b) aktualisierte GPT-Knowledge-/Building-Policy-/Component-Library-Dateien im gepflegten LP Builder – Contentful konfigurieren und Regression prüfen. Laut Codex kein `main-instructions.md`-Update erforderlich. Keine Deployment-/Repository-Writes ohne ausdrückliche Freigabe.
3. **Erste echte Contentful-Preview:** Mit separater Freigabe das neue Artikel-Template ausschließlich als Draft mit Blindtext und neutralem Bildplatzhalter anlegen; Entry-ID, Slug, Preview und produktive CSS-/Bild-/Responsive-Darstellung prüfen. Erst danach echtes Article-Writer-Package und statische Bild-URL einsetzen.
4. **Reduziertes Newsportal entwickeln:** Auf Grundlage des vorhandenen Team-Prototyps eine kleine Startseite mit zweiter Rubriken-Navigation und pro Rubrik einem neuesten großen Artikel plus kleineren Karten erstellen; bestehende Contentful-Shell unverändert lassen.
5. **Human Review / Publikationsfreigabe definieren:** Knappes Review-Notes-Paket für Freelancer, Quellen-/Fakten-/Rechteprüfungen, Änderungsrouting und Freigabe der konkreten Contentful-Version; keine ungeprüfte Livepublikation.
6. **Später:** Agent Factory/Orchestrierungs-Agent und mögliche Wiki-Artikel-Queue konzeptionell zeigen, aber nicht im MVP automatisieren; Lernschleife aus echten URL-/CTR-/Traffic-Daten erst nach Publikation. Master Matrix v1 bleibt eingefroren.

## Last Confirmed

2026-10-28. Codex hat laut übermitteltem Bericht lokal eine wiederverwendbare `scaling-editorial-article`-Templatepage samt Component-Library-/Building-Policy-/Bridge-CSS-Integration erstellt und erfolgreich mit 59 Tests sowie Desktop/Mobile überprüft. Die Änderungen liegen nur lokal; Git/Bridge-CSS-Deployment, produktive GPT-Übernahme, Contentful-Draft, Human Review, Veröffentlichung, Messung und Orchestrierung stehen weiterhin aus. Article Writer (Headline + Bild) bleibt die intern akzeptierte MVP-Baseline.

2026-10-26. Multiple internal end-to-end drafts exist; matrix v1 expanded to 66 entries and now frozen; SC/Writer headline-role changes have been reported saved in draft but live activation is **unverified**; three synthetic Headline Tests surfaced an unsatisfactory baseline. Priority is better real stories, verified supplementary reporting and package/Writer quality, not re-proving the handoff or indefinite data discovery. No externally published / measured pipeline outcome confirmed.
