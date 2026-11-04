# Scaling Editorial

## Purpose

Build a repeatable, AI-supported editorial workflow for ImmoScout24: discover relevant developments, develop evidence-backed stories, produce useful consumer articles and publish after accountable human review. The program continues outside the former C3 Lighthouse framing; no traffic or scaled-production success is established.

## Current Status

- **Technical Contentful pilot completed on 3 November.** Five new articles and three updated category overviews were published through LP Builder GPT Actions and read back, according to the supplied LP Builder report. Three old articles were unpublished, not deleted. Dominik subsequently checked the portal and confirmed that its appearance was good. This is a labeled technical pilot, not full editorial clearance or a regular public newsroom launch.
- **Seven-category portal:** Immobilienmarkt; Mieten; Kaufen & Verkaufen; Finanzen; Recht & Politik; Wohnen & Architektur; Lifestyle. No separate News homepage. The cutover changed Immobilienmarkt (Generationenwechsel, Baugenehmigungen), Recht & Politik (Wohngeldreform, Energiewende) and Finanzen (Heizenergiepreise); four other categories were untouched.
- **Signal register reset and maintained.** Five selected developments retain SIG-20261103-01 through -05 and now have final headlines, Contentful identities, production links, technical-pilot status and Dominik's visual confirmation. Older register rows were removed at his request. A subsequent TF run visibly used the register to exclude already-covered developments without new facts.
- **Writer image delivery improved and tested.** One selected final PNG, 1920 × 1080 px, named to the article convention, plus one text download link. Native generation previews are not proof of export dimensions and application cards can still differ. A newer real-subject/symbolic-image rule is saved in the image capability, reported incorporated in Writer instructions and successfully tested by Dominik.
- **Data meeting prepared for 4 November.** A bounded Starburst read-only audit on 3 November produced concrete standard-data findings. The internal catalog now groups seven analysis areas and separates Agent usage guidance from Data Team questions. ⚠️ is reserved for unresolved questions in the Data Team column.
- **First freelancer onboarding held on 4 November.** Dominik explained the complete process to both freelance writers, showed examples and introduced their first tasks. They are waiting for the written assignments, which Dominik plans to send on 4 November, plus a request for five articles each previously written for other clients. Assignment dispatch, receipt, return dates and sample delivery are not yet confirmed. The three older Wiki briefs exist; a live check found them and the parent in Draft status without direct child links in the parent's body.

## Workflow and Responsibilities

1. **Trend Finder:** public web research; reads taxonomy and the signal register. It excludes the same concrete development without substantial new evidence. A new period, decision or material finding can justify an update linked to the earlier ID. Topics are not permanently “used up.” Current TF is not an internal SQL agent.
2. **Story Creator:** tests the reader question, angle and evidence; adds appropriate research, limitations and source material. Current SC practice uses internal data when it materially answers the story question. The broader Wiki project brief still says every page should be enriched with internal IS24 data; reconciling this with stories where those data cannot answer the reader question remains an internal scope question.
3. **Article Writer:** works from the supplied Story Package, without independent Wiki/web/Starburst factual research. Produces selected headline, review alternatives, intro, article, sources and image metadata. Standard body roughly 500–650 words, maximum 700 unless requested. Use the working original Writer with its starter prompt when needed; generic attachment-only triggering is not conclusively resolved.
4. **Human review:** intended regular-production requirements include factual/currentness checks, editorial sign-off and accountable authorship. Named operational owners and review capacity still need agreement.
5. **LP Builder Custom GPT:** receives a cleaned Article Package and a real hosted image URL. Draft creation, category integration and publication are separate actions. Standalone article previews do not establish teaser integration. Publishing requires the authorized target scope.
6. **Registry maintenance:** currently manual through Dominik and this project chat. No automatic Wiki writeback by TF, SC, Writer or LP Builder. Creating IDs, registering a package and documenting a publication are distinct from automated orchestration.

Signal → Story → Article Packages are self-contained rendered Markdown in chat. Humans remove headline alternatives before production handoff; no special Builder feature is requested for this. Prompts for another tool/chat must be complete in one code block. Quality and manageable review effort take priority over adding process machinery.

## People and Working Boundaries

Dominik Böhme owns system design, agent/package quality, end-to-end validation and operating coordination. Viktoria Riffel supports SEO/editorial work; Beatrice Riedel owns Contentful engineering delivery; Nataliya Medvedeva is the Head-of-SEO stakeholder; Matthias Brandstetter provides sponsorship/support.

Kristian Kehlert is listed as the project's Data / Data PR contact. His exact remit, technical counterpart and ongoing support commitment remain to be clarified; a meeting was planned for 4 November, with no result yet documented. The first onboarding with both freelance writers took place on 4 November. Their names and delivery deadlines are not recorded here; the written briefs and request for five prior articles each are still to be sent by Dominik.

**Implementation workflow:** Codex edits local LP Builder Instructions/Knowledge files; Dominik replaces the files in the Custom GPT. A local edit does not update the GPT automatically. Existing GPT Actions handle Contentful writes. Do not directly edit the LP Builder package in this chat or start a parallel implementation.

## Article and Image Contracts

- Canonical article order: visible technical-pilot notice when required → headline → author module → title-image figure/caption → intro → body. Topic tags, where already supported, follow the body; category context remains under its existing contract.
- Article intro and large rubric-teaser intro must match. Preserve selected headline, body, sources, image/caption, identity, slug and valid links during layout updates.
- All five current pilot articles reportedly show date 03.11.2026 and calculated reading time 3 minutes. Reading time must be calculated from the final body; dates must not be invented or automatically refreshed. This pilot's stored date is not a general default.
- Fictitious profiles are restricted to the exact five pilot entries: test-autor-1 = Maria Müller; test-autor-2 = Elisabeth König; both “Expertin für Immobilien,” internal status test-placeholder, registered avatars and unlinked names. Exactly one visible notice before the article header: “Technischer Pilot – fiktives Autorenprofil.” This exception does not clear other test entries or real publication authorship.
- Article assets: final PNG 1920 × 1080; separately requested avatars 240 × 240. Filename: `scaling-editorial-[article-slug]-titelbild-v01.png`; increment only for a known replacement. Writer must identify and technically export the real selected file, not merely state dimensions or change its extension. Preserve the scene during resizing; no unnecessary variants.
- For an article about a specific real property/person/place/event, automatically select a thematically relevant generic motif that cannot be mistaken for documentary evidence. Do not fabricate project exteriors, interiors, residents or technical installations. No original-photo request or extra motif approval is normally required.
- Align final alt text and caption to the actual chosen image. Specific-case captions visibly include an adapted clarification such as “KI-generiertes Symbolbild – keine Aufnahme des beschriebenen Gebäudes.” Metadata-only labeling is insufficient; a misleading motif must first be changed. The Ingolstadt pilot-house test passed according to Dominik.
- **LP Builder image rule:** use complete safe URLs from the package/author register. Mandatory remote download, decoding, pixel/availability checks, ZIPs or proof checksums were removed from the actual Building Policy after repeated environment DNS failures. Network failures are not a publish blocker. Missing/unsafe/incomplete URLs or unresolved placeholders remain issues. This does not remove Writer's own technical export requirements.
- Images are still uploaded manually to the static server; permanent storage/ownership/upload access remains open. Tags are in package metadata but current Actions offer no appropriate storage field.

## Internal Data and Data Team Coordination

The current [Data Source Catalog](https://wiki.scout24.com/spaces/product-intelligence/pages/68724/data-source-catalog) is an internal-data working reference, not proof that all 13 sources are usable. Seven areas: purchase prices/supply; rents/supply; geography; history/duration; search/interest; competitors; financing. Each table now contains source/method, tested status, Agent usage guidance and a separate Data Team questions column. Only the latter marks open rows with ⚠️; “—” does not imply broad publication clearance. Source IDs S01–S13 and the page URL remain stable. External sources have only a placeholder; create their own catalog when reusable sources are actually documented.

The 3 November audit confirmed access, current partition 02.11.2026 and a nonmultiplying S01/S02/S03 join for the tested active apartment-buy/rent population. It also confirmed rental €/m² sentinel values, active/draft overlaps, missing positive prices/areas, historical draft-field changes and city/county distinctions. Exact filters and counts are in the catalog and [Week 45](../documentation/2026-W45.md). These are diagnostics before cleaning, not market statistics or source-owner validation.

Priorities for Kristian: correct rent fields/definitions; valid active-listing population/filters; comparable historical treatment; existing approved data views/queries; technical contacts and external reuse rules. Do not expect every catalog question to be answered in one meeting.

**Proposed future process, not yet agreed or implemented:** agent reuses documented methods → reports a precise new data gap with source/fields/filters/period/evidence → Dominik checks duplicates and batches Wiki questions → Data Team answers → confirmed method/usage guidance is updated and answered ⚠️ removed. Automatic gap reporting or writeback is not configured. A small set of jointly checked standard queries is a proposal, not an existing benchmark. Search/tracking permissions remain unresolved; do not explore sensitive raw data without clearance. SELECT/metadata only; no view creation.

## Freelancer Comparison and Immediate Continuation

Dominik explained the full agent process in the first onboarding on 4 November; the immediate assignment remains comparison writing and style references rather than independent operation of the entire chain. Both writers should receive the same three complete fixed-version Story Packages and write in their own style without generative text production. The latest confirmed request is five articles per person previously written for other clients, superseding the earlier two-to-three-sample briefing. Suggested body length is 500–650 words unless the package differs. Further factual research is outside the comparison brief; flag gaps and changes rather than silently altering the shared evidence. Two examples for style development and a third held out for evaluation were discussed; operational details remain to be agreed. This is prompting/style guidance, not automatic model training or a promise of AI-detection avoidance.

Verified on 4 November:
- [Authors Story-Packages](https://wiki.scout24.com/spaces/product-intelligence/pages/68912/authors-story-packages) — briefing exists, but no explicit child links in its body; status Draft.
- [Wohngeldreform](https://wiki.scout24.com/spaces/product-intelligence/pages/68914/wohngeldreform) — package exists; Draft.
- [Kaufpreisentwicklung](https://wiki.scout24.com/spaces/product-intelligence/pages/68915/kaufpreisentwicklung) — package exists; Draft.
- [Baugenehmigungen](https://wiki.scout24.com/spaces/product-intelligence/pages/68916/baugenehmigungen) — package exists; Draft.

The parent already excludes unverified individual Wohngeld calculations (about EUR 49 / 582 and derived cuts), requires attribution of the purchase-to-rent interpretation, and makes the building-permits research appendix optional. Earlier child-page correction attempts failed; the parent holds these binding briefing caveats. These three older freelancer packages are not automatically identical to the later five regenerated Writer packages or the currently published portal articles. External Wiki access has not been tested. A 13-page Word/PDF handout now provides the three source-based writing briefs and a short shared instruction independently of Wiki navigation, with unapproved Wohngeld calculations excluded and the purchase-to-rent interpretation qualified. The instruction has been updated to five prior articles each. Files are prepared; Dominik's actual dispatch is still pending. No Wiki publishing, permission change or parent-link repair was performed.

## Fotocasa Exchange

Meeting transcript supplied on 3 November: Fotocasa had recently published roughly ten initial AI articles, uses human review and initially combines story/content generation in one agent. It plans phased scaling, topic discovery and more automation, with performance results still pending. Approximate volumes/AI-share targets in the transcript conflict; do not treat them as one agreed forecast.

Useful collaboration topics: evaluation of extraction from internal data, early article-performance results, content-to-listings journeys and shared patterns with brand/language-specific editorial instructions. Monthly exchange was discussed, not a confirmed scheduled series. No joint delivery commitments, shared platform decision or measured success is established. “Watermark/humanizer” discussion was not technically substantiated.

## References

- [Editorial Workspace](https://wiki.scout24.com/spaces/product-intelligence/pages/68723/editorial-workspace)
- [Taxonomy](https://wiki.scout24.com/spaces/product-intelligence/pages/68785/editorial-taxonomy-topics) · [Story Formats](https://wiki.scout24.com/spaces/product-intelligence/pages/68725/story-formats)
- [Signal register](https://wiki.scout24.com/spaces/product-intelligence/pages/68732/signalregister-suchsteuerung) · [Author register](https://wiki.scout24.com/spaces/product-intelligence/pages/68902/autorenregister-scaling-editorial)
- [Wiki Open Tasks](https://wiki.scout24.com/spaces/product-intelligence/pages/68805/open-tasks) was reviewed and updated on 4 November: completed portal/registry backfill tasks removed, image and onboarding progress reflected, pending dispatch/assignments and Data Team clarification retained. Central tasks.md remains the source of truth for confirmed active personal tasks; optional Wiki enhancements remain a backlog.
- [Week 45 evidence, identities and handover](../documentation/2026-W45.md) · [LP Builder](landing-page-builder.md)
- [Project Hub](https://wiki.scout24.com/spaces/product-intelligence/pages/57178/project-hub) · [Editorial Flow](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/scaling-editorial-lighthouse/) · [Trend Matrix](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/trend-finder-matrix/) · [Working Plan](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/working-plan/) · [Content Plan](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/content-plan/)
- Older published planning artifacts may retain internal-data/C3 assumptions; they are not proof of current configuration or a newly republished roadmap.

## Open Decisions and Next Focus

1. Send the prepared writing assignments to both freelance writers on 4 November and request five prior articles each; then confirm receipt and agree delivery deadlines. Record the returned texts/samples and evaluate them against the same package baseline. Wiki navigation/access remains unresolved if that channel is used.
2. Hold/record the Kristian discussion; agree source definitions, contacts and the smallest reusable standard-data workflow.
3. Define regular human facts/currentness review, authorship, publication and correction ownership. Technical fictitious-author pilot clearance does not settle these.
4. Keep permanent image delivery, headline quality, charts, conversion modules, visible/stored tags, Agent Factory orchestration and performance feedback visible as later work, without making them pilot prerequisites.
5. No traffic, CTR, Search/Discover outcome, actual learning agent or unattended scale has been confirmed. The existing landing-page large-HTML issue remains open until explicitly reconfirmed; this successful pilot does not close it automatically.

## Last Confirmed

4 November 2026. Current Wiki reads, the 3 November Starburst audit, user-supplied LP Builder/Codex reports and Dominik's visual/test acceptance; no repository-independent CMS audit or external-freelancer access test performed in this closing sync.
