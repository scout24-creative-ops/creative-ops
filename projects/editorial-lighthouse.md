# Scaling Editorial

## Purpose

Build a repeatable, AI-supported editorial workflow for ImmoScout24: discover relevant developments, develop evidence-backed stories, produce useful consumer articles and publish only after accountable human review.

Scaling Editorial continues under the existing program and roadmap. Nataliya confirmed on 20 October that removal from the C3 Lighthouse portfolio did not cancel the program. “Lighthouse” is historical framing, not the current project name.

## Current Status

- **Manual end-to-end MVP demonstrated and qualitatively accepted.** Trend Finder → Story Creator → Article Writer → LP Builder → Contentful Draft works with manual package transfers. Dominik successfully demonstrated the building-permits journey to colleagues and reports two additional portal article integrations on 29 October. No public publication, full human-review operation, traffic result or unattended automation is confirmed.
- **Rubric portal implemented.** Seven linked category drafts, large teaser lists and article pages with “Weitere Artikel” sidebar are available. Dominik accepted the browser appearance. Categories: Immobilienmarkt; Mieten; Kaufen & Verkaufen; Finanzen; Recht & Politik; Wohnen & Architektur; Lifestyle. No separate News homepage in the current MVP.
- **Agent names and interfaces settled.** Names are exactly Trend Finder, Story Creator and Article Writer. Self-contained Signal Package → Story Package → Article Package, rendered in chat between separators. Wiki and source references use complete visible URLs.
- **Selective Wiki access tested.** TF uses taxonomy/register and public web research. SC uses taxonomy/formats and internal sources when appropriate. AW uses the Story Package without Wiki/web/Starburst factual research.
- **Working Writer entry point:** original Article Writer plus explicit starter prompt, including when the Story Package arrives as an attachment. Unprompted attachment-only production was inconsistent, including in a new Writer; its cause is unproven. Do not replace the working original or declare the generic auto-trigger fixed.
- **Images and headlines remain improvement areas.** Image-skill motif selection updated and formally validated on 30 October; three user tests were somewhat better and acceptable for now, not a final quality acceptance. Writer shows one chosen headline plus two alternatives. Humans remove alternatives before LP Builder transfer; no Builder extension is currently wanted.
- **Scope control:** Dominik considers progress ahead of expectations and explicitly wants to stop expanding implementation on 30 October. Stabilize the manual pilot before optional enhancements. The backlog is not a list of immediate delivery promises.

## Dominik's Role and Stakeholders

Dominik Böhme owns the overall system, package contracts, agent quality, end-to-end validation and operating-model coordination. Viktoria Riffel contributes SEO/editorial logic and quality; Beatrice Riedel owns Contentful engineering delivery; Nataliya Medvedeva is the Head-of-SEO stakeholder; Matthias Brandstetter provides sponsorship/support. Freelancers are intended for comparison writing and later editorial operation, but concrete review/publication responsibilities remain to be assigned.

Do not imply a separate human assistant or assign agents as staff. Do not change ownership of unrelated migration work.

## Current Workflow and Package Contracts

1. **Trend Finder:** discovers diverse timely housing/property developments from public web sources; reads taxonomy and register, checks concrete duplicates/substantive updates and outputs Signal Packages. It does not analyze internal Starburst data in its current role.
2. **Signal Package:** topic and provisional rubric/tags → observed signal → reader relevance → reader questions → potential added value → limits/open questions → sources/evidence. Unnumbered package name; priority commentary outside the copyable package.
3. **Story Creator:** researches the actual reader question, tests the angle and evidence, chooses a viable story or rejects it. It provides “Story auf einen Blick”, a self-contained Story Package for AW and separate research rationale. It owns Core Story Claim/Story Promise, not the final headline.
4. **Story Package:** editorial metadata, reader question and evidenced answer, audience/knowledge, angle/format, core and supporting facts, structure suggestions, sources with full URLs, limits/do-not-claim and required checks. Unverified calculations must not carry the story promise. Internal working references are distinct from public article sources.
5. **Article Writer:** writes from that package, generates its own headline and one labeled symbolic image using scout24-editorial-imagery. Standard article body about 500–650 words, max 700 unless otherwise requested; no new facts, external research or unsupported recalculation. Necessary human publication checks do not automatically prevent a draft.
6. **Article Package:** short bullets for draft order, rubric/tags, placement, slug proposal, author/role/date and manual image URL; then chosen headline, optional headline alternatives, intro, complete article, public sources, image metadata and real open checks. Selected headline is the sole production title; alternatives are manually removed before transfer for now. Headlines and images still require editorial judgment.
7. **LP Builder Custom GPT:** receives a cleaned Article Package with a real image URL, creates an unpublished Contentful draft and inserts its large teaser first on the matching existing category overview. Same intro for article/large teaser; preserve existing content and identity. Publication is a separate human decision.

The normal package format is rendered Markdown chat text with horizontal separators and useful headings, not writing blocks, code blocks, Canvas or files. TF/SC source evidence goes at the end of the copyable package. Writing blocks were tested and superseded.

## Wiki Working References

- [Editorial Workspace](https://wiki.scout24.com/spaces/product-intelligence/pages/68723/editorial-workspace) — compact navigation hub, formerly Agent Knowledge.
- [Editorial Taxonomy & Topics](https://wiki.scout24.com/spaces/product-intelligence/pages/68785/editorial-taxonomy-topics) — seven rubrics, shared tags and topic guidance; orientation, not an exhaustive search list.
- [Story Formats](https://wiki.scout24.com/spaces/product-intelligence/pages/68725/story-formats) — eight flexible formats and optional data-story angles.
- [Data Source Catalog](https://wiki.scout24.com/spaces/product-intelligence/pages/68724/data-source-catalog) — 13 internal sources, methods, validation limits and Data Team questions.
- [Signalregister & Suchsteuerung](https://wiki.scout24.com/spaces/product-intelligence/pages/68732/signalregister-suchsteuerung) — signal history and editorial feedback; manual updates, no automatic writeback.
- [Open Tasks](https://wiki.scout24.com/spaces/product-intelligence/pages/68805/open-tasks) — operational detail/backlog. Central Profile tasks hold compact active outcomes and reference this list.

The older internal-data-only directory was deleted by Dominik after consolidation. Old master/technical matrix links in historical weekly files are no longer current agent dependencies. The last confirmed register content had five entries dated 28 October; implemented article backfill remains open.

## Portal and LP Builder Boundaries

- Existing IS24 Contentful shell supplies header/footer/layout; reusable Builder modules supply news navigation, rubric feeds, article and sidebar. Small sidebar teasers use image/headline; no unsupported “most read” ranking.
- Article author/date elements exist, but actual author attribution, date semantics and removal of remaining demo content are open before public launch. Intro shortening is proposed, not already deployed.
- Codex maintains local GPT Instructions/Knowledge files; Dominik manually replaces them in the Custom GPT. A repository change does not update the GPT. Codex has no authorized Contentful session here; CMS writes use the existing GPT Actions.
- Article Package intake and rubric lookup are locally implemented/tested. Recht & Politik intentionally retains category slug `dev-scaling-editorial-wohnrecht-mvp`, entry `22O849wA6VAVgxOYVT9zvB`. Article slug proposal/headline is independent of category slug and tags. No collision authorizes overwriting.
- Housing-benefit draft/first-teaser integration succeeded after a supplementary category-target prompt. The central seven-rubric lookup was implemented afterward; GPT uptake and a subsequent no-extra-prompt run still need explicit confirmation.
- Bridge CSS for portal metadata/layout and captions is delivered according to Codex reports; latest reported suite 62/62. Unrelated runtime JavaScript/Checkmark edits were excluded. Technical repositories retain exact implementation/release evidence; the earlier untracked-test-file follow-up has not been expressly closed.
- Tags remain in handoff metadata but are not visible/stored: current Actions expose no suitable tag field. LP Builder reports “not stored”; no invented metadata mapping.
- Images currently use manual static-server upload. Permanent storage/delivery, potentially AWS S3, remains to be agreed. No bucket has been provisioned.
- Headline-alternative handling in LP Builder is not requested now; manually remove review alternatives. Complete removal of the Writer alternative feature remains an option, not a decision.

## Internal Data: Reuse and Limits

The current TF is web-only. SC can use approved internal data when it materially strengthens a story. Reintroducing the former TF SQL workflow would be a future scope change.

Use the Data Source Catalog as the working source for technical definitions, tested joins, publication limits and questions. Prior technical checks are historical snapshots, not a current market dataset or broad release clearance:
- S01/S02 listing snapshots joined on listing ID and snapshot day, then S03 region ID; recheck cardinality, active population, quality flags, filters and sample sizes per analysis.
- Asking prices are not transaction prices; listed inventory is not the full market; portal/search/contact activity is not observed transactions or total demand.
- Rental cold/warm semantics and sentinel values need clarification. Historical draft flags, snapshot/version logic and population shifts limit time-series reuse.
- Geography may mix cities/counties; regional rankings require valid comparable areas. Unknown condition/equipment/construction-year fields and PROJECTED shares can bias groups.
- Earlier condition coverage checks found roughly 56% of apartment-buy and 47% of house-buy listings informative on 25 October; these figures describe that pilot population only.
- Land/site data requires Germany filtering; construction/buildability, dedup/grouping identifiers and publication-duration semantics remain unresolved.
- Search/tracking and finance-contact data can be sensitive; S08 permissions and S09–S11/S13 uses require explicit clearance. Clickouts are not rates, loan approvals or completions.
- Starburst research remains SELECT/metadata only. Historical connector write-capable actions were not technically removed; do not authorize View creation as part of editorial research.

Next data action is to prepare and send focused, prioritized Data Team questions from the catalog, then incorporate answers. Repeatable data-story recipes should follow semantic/permission clarification rather than imply all catalog sources are already usable.

## Pilot, Planning and Later Expansion

- Immediate purpose: a controlled manual freelancer/editorial pilot, clear responsibility, comparable evidence-backed briefs and a real publication/review path.
- Freelancer/AI comparison uses the same full Story Package and a shared research boundary. Style adaptation is a separate test; agents do not automatically learn permanently from manual use.
- Track quality, corrections, review/production effort and technical friction before scaling. Assign owners for currentness checks, corrections and actual publication.
- Content Plan target of 50 articles/week and publishing windows remain working hypotheses, not MVP commitments. Flexible mix of timely signals, internal data stories and service; no forced topic quotas or filler.
- Later options: chart images from exact data/design templates; contextual conversion modules linking relevant exposes/products/services; tag support; greater internal data coverage; orchestration through Agent Factory; performance feedback. These are not pilot-entry requirements unless subsequently agreed.
- No traffic/CTR/Search/Discover results are confirmed. Any learning system would need documented evidence and an explicit update process.

## Working Documents

- [Project Hub](https://wiki.scout24.com/spaces/product-intelligence/pages/57178/project-hub)
- [Editorial Flow](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/scaling-editorial-lighthouse/)
- [Trend Matrix](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/trend-finder-matrix/)
- [Working Plan](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/working-plan/)
- [Content Plan](https://scout24-creative-ops.github.io/public/Scaling%20Editorial/content-plan/)

Published planning artifacts contain older internal-data/C3-era assumptions and are not proof of current configuration. Current Wiki and agent contracts above take precedence; do not infer that the artifacts were republished this week.

## Next Focus

1. Stabilize and prepare the manual pilot: human review/approval ownership, freelancer comparison brief and one bounded validation of current portal handoffs. No further implementation expansion is required today.
2. Prepare Data Team clarification and resolve permanent image delivery; record implemented articles/feedback manually.
3. Keep headline/image refinements, charts, conversion modules, tag support and automation visible but explicitly deferred until pilot needs justify them.

## Last Confirmed

30 October 2026, consolidated from Dominik's reports, supplied Codex/LP Builder outputs, Wiki reads/updates and the saved image-skill revision. Portal and article draft integration are confirmed; public launch, settled editorial approval operation and automated scale are not.
