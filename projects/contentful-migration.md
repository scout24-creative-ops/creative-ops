# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup using an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

ScoutWiki project pages:

- Project overview: https://wiki.scout24.com/spaces/creative-operations/pages/56160/contentful-migration-b2b
- Pod Working Model: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model
- Pilot Execution Plan: https://wiki.scout24.com/spaces/creative-operations/pages/56161/contentful-migration-b2b-pilot-execution-plan

## Current Status

The broader migration is being organized as a program rather than only as one page-group pilot. The existing sitemap is the starting inventory, and the intended operating model is now much clearer: work through the migration by directory / page group, apply the same repeatable pod workflow, and use the migration inventory to track treatment, ownership, dependencies and status.

The B2B Anwenderhandbuch / `tipps` area remains the first pilot and should be treated as the first end-to-end proof of the migration setup rather than as a separate planning stream.

The immediate pilot goal is deliberately narrow: prove as quickly as possible that a real B2B page group can move successfully through **scope -> Claude Design -> Landing Page Builder -> QA -> Contentful publishing**. The pilot should minimize dependencies and should not wait for every later scale-out topic to be solved. A successful proof can then be used to demonstrate the migration setup to senior stakeholders and make it easier to secure more binding support and capacity for the broader migration.

The current Landing Page Builder creates pages from a fixed catalogue of predefined modules. That catalogue is too limited to recreate the broader variety of existing AEM pages and is therefore a migration capability gap. The intended direction is to use Claude Design to analyze real page groups, create target designs/patterns that cover their variation, and extend the migration-focused LP Builder so those patterns can be used repeatedly.

Different page groups require different migration treatments. Some pages can stay largely as they are, some can be consolidated, some can be improved or redesigned, and some can be retired. Important SEO-visible pages may require preservation of the existing public URL or a carefully managed redirect path.

SEO and URL handling are cross-cutting migration requirements. Existing visibility must be assessed before changing URLs or content. The project needs a clear model for preserving public URLs where required, using redirects where appropriate, and understanding how Contentful slug/routing behavior maps to the final public URL.

B2B forms remain a critical dependency for scale, but they should not block the first pilot unless the selected pages actually require them. Product Marketing B2B relies heavily on Salesforce-backed forms, and migration at scale needs a clean supported way to include them. The preferred direction is that the LP Builder does not generate complete form logic itself. Instead, it should place a defined form module/slot that loads or references a centrally managed form instance.

Images are not a separate MVP feature for the migration. The migration workflow should continue to use the LP Builder's established placeholder + direct-image-URL model. Existing page image URLs can be extracted during migration and later replaced with durable URLs from the planned storage / asset setup.

## Pilot Execution Principle

The pilot should optimize for speed, proof and low dependency count rather than completeness.

Immediate orchestration priorities are:

1. Start the pod work with a focused kickoff for Peter and Ulrike.
2. Schedule a short SEO / URL alignment with concrete prepared questions rather than waiting for a broad SEO framework.
3. Finish or explicitly resolve the remaining LP Builder -> Contentful MVP work with Mukhammadjon.
4. Prepare small, concrete handoff packages for Ulrike and Peter so their work can start with minimal setup effort.
5. Adapt the LP Builder only as far as needed for the Anwenderhandbuch pilot, then generalize proven rules after the first end-to-end loop.
6. Run QA and publish real pilot pages in Contentful.
7. Package the working result and learnings as proof of the migration setup before asking for broader resources or more complex platform work.

Topics such as a full Marketing Asset Library, universal migration mode, complete SEO rule system or generalized support model are later scale-out work unless they become real blockers for the selected pilot pages.

## Migration Organization

Use one central migration inventory / manifest as the operational backbone for the sitemap and as the running status view for each directory / page group.

Each page should eventually carry at least:

- current public URL;
- logical page group / future destination;
- migration treatment;
- content/design preservation requirement;
- SEO importance / review status;
- target public URL and Contentful slug/routing decision;
- redirect requirement where relevant;
- special functionality such as Salesforce forms;
- asset dependencies;
- fachlich owner / reviewer;
- migration and QA status.

The migration treatment should distinguish at least:

1. `Consolidate / restructure` — pages such as tips, FAQs or help content that can move into a clearer common target model.
2. `Preserve` — business-critical or high-value entry pages where content/design changes should be minimized and the public URL may need to remain stable.
3. `Migrate and improve` — relevant pages that should be rebuilt while using the migration to improve structure, SEO or quality.
4. `Retire / redirect` — obsolete, duplicate or superseded pages that should not be rebuilt as separate pages.
5. `Special-function page` — pages that depend on forms or other external functionality and need an explicit technical integration path.

## Sitemap / Inventory Source Model

The existing SEO-owned Excel files should remain the fachlich source of truth where they already contain migration decisions and SEO data. The migration should avoid creating a competing master dataset just because the existing Excel landscape is fragmented.

For the current `anbieten` scope, the relevant SharePoint workbook is `Anbieten Pages.xlsx`. It already contains fields such as migration decision, index status, status code, clicks, impressions, canonical target, comments and URLs and was also used as an input for the current visual HTML sitemap.

The intended source model is:

**SEO / business Excel = fachlich SSOT**  
**Crawler / Screaming Frog = technical live status**  
**Visual HTML sitemap = combined operational migration view**

The current HTML sitemap already adds useful value by combining Excel decisions with the actual live URL state and visually grouping the site hierarchy. This exposes cases where an older Excel decision no longer matches the live website, for example because a URL now redirects or returns 404.

### Sitemap V2 direction

Do not build a separate editable sitemap application for the pilot.

Instead:

1. Keep the existing SEO Excel as the source of truth and let Ulrike / SEO continue to maintain decisions there.
2. Refactor the visual sitemap so its page data can be generated from the Excel instead of being permanently embedded by hand.
3. Continue overlaying crawl/live-status information on top of the Excel decisions.
4. For the first version, a manual or lightweight sync from Excel -> generated HTML is sufficient.
5. A later V2 can read the SharePoint/Excel source automatically via Microsoft Graph so a reload reflects the current workbook state.
6. Do not build write-back from the HTML into Excel for the pilot. This would introduce unnecessary authentication, app-registration and governance dependencies.
7. If the migration later spans many separate Excel workbooks, create a small source manifest that maps each directory/page group to the authoritative workbook rather than immediately merging all existing files into one new master Excel.

For the Anwenderhandbuch pilot, Ulrike can work directly in the existing Excel/source data while the visual sitemap acts as the easier overview and migration-control view.

## Pod Working Areas

The current planning model separates the migration into three working areas. The Anwenderhandbuch pilot should test how these three areas work together.

### Ulrike — Content, Pages & Sitemap Coordination

- Own the fachlich steering of content and pages.
- Maintain the overview of the relevant B2B sitemap / migration inventory and gradually improve the structure as capacity allows.
- Coordinate page/content decisions with the B2B Product Marketing team.
- Determine which pages remain relevant, which variants are authoritative and what should be consolidated, removed or optimized.
- Define or collect content-side requirements for the target pages and what content/functionality must remain unchanged.
- Identify SEO- and URL-sensitive pages/questions early and coordinate them with SEO; specialist SEO decisions remain with SEO.
- Review and align designs with Peter from the business/content perspective.
- After the pilot, help propose which page groups should be migrated next, in what order and with which migration treatment.

### Peter — Design, Claude Design & Asset Pilot

- Crawl and analyze page groups with Claude Design.
- Capture the source-page information needed for migration, including texts, images, URLs, links and structures.
- Create target designs and page/module patterns that can represent the real page variation.
- Align designs with Ulrike and incorporate fachliche page requirements.
- Hand over final designs, module concepts / templates and structured crawl results to Dominik.
- Own the small storage/S3 image pilot as a parallel workstream because image handling already sits close to Peter's area; Dominik defines the migration requirements and integration target but should not become the infrastructure operator.

### Dominik — Migration Lead & LP Builder

- Own the planning and implementation of the migration and the overall steering of the pod.
- Prepare the kickoff, dependencies and handoff packages so Peter and Ulrike can contribute with minimal overhead.
- Take final designs, modules or templates from Peter and translate the required capabilities into the migration-focused Landing Page Builder.
- Add the required modules, rules and patterns depending on the needs of the current page group.
- Use the structured crawling results such as copy, links, image URLs / references and other page data as input for page generation.
- Translate SEO / URL / platform decisions into repeatable migration rules rather than personally owning specialist SEO judgments.
- Generate the new pages with the Landing Page Builder and prepare them for QA and approval.
- Participate in and advise on cross-area decisions without taking over the specialist work of the other areas.

The Peter/Ulrike/Dominik model is the current intended working model; any remaining formal capacity/organizational confirmation should be handled separately from the narrow pilot execution where possible.

## Repeatable Migration Workflow

The intended loop should be repeated for each new directory, page group or topic that is migrated.

1. **Content Analysis & Page Requirements — Ulrike**
   - Maintain the relevant sitemap/inventory view for the page group.
   - Align with B2B Product Marketing on what should be migrated, consolidated, removed or clarified.
   - Define requirements for the future pages and mark content/functionality that must remain unchanged.
   - Flag SEO- and URL-relevant questions and coordinate them with SEO.
   - Hand the clarified scope and requirements to Peter and Dominik.

2. **Claude Design Analysis & Target Design — Peter**
   - Capture texts, images, links and structures from the existing pages.
   - Group pages by requirements and recurring patterns.
   - Develop target designs and page patterns.
   - Align designs with Ulrike.
   - Hand over final designs, required modules / technical requirements and crawl results to Dominik.

3. **LP Builder Adaptation & Page Generation — Dominik**
   - Take final designs, modules or templates from Peter.
   - Add only the required modules and rules to the migration-focused Landing Page Builder.
   - Feed the crawling results with texts, images, URLs and links into the Builder.
   - Generate the target pages.
   - Prepare the pages for QA and approval.

4. **Joint QA, Approval & Publishing**
   - Ulrike reviews content and fachlich requirements.
   - Peter reviews design and visual implementation.
   - Dominik reviews technical function and the overall migration flow.
   - Depending on the page, also review SEO, URLs, links, assets, forms and other dependencies.
   - Incorporate feedback and give final approval.
   - Publish approved pages in Contentful only after QA and approval are complete.

## Pilot-Specific Handoffs

### Ulrike handoff

Dominik should prepare the Anwenderhandbuch scope from the existing sitemap/Excel so Ulrike can immediately review it rather than first reconstructing the dataset.

Her pilot review should be simple and decision-oriented: what should be migrated, consolidated, removed, is unclear or is missing; which content/functions must stay; and which SEO/URL topics need specialist input.

### Peter handoff

Dominik should give Peter a tightly bounded URL scope and a clear definition of done. Peter's output should be limited to what the pilot needs: analysis, structured source data, target design(s), page patterns and identified module/technical requirements. The brief should avoid open-ended concept work outside the pilot goal.

### SEO / URL alignment

Schedule a short pilot-focused SEO discussion with prepared questions rather than a broad migration workshop. Questions should include:

1. Which existing Anwenderhandbuch URLs need to remain stable?
2. Where is a redirect acceptable or preferable?
3. Can pages belong visually/content-wise to one Anwenderhandbuch system while keeping different existing URL structures?
4. How do Contentful slugs/routing map to the final public URL and what requires platform input?
5. Which SEO rules are mandatory for this pilot and which should later become fixed Builder rules?
6. Which LLM / AI visibility requirements are worth considering from the start without expanding the pilot scope unnecessarily?

## LP Builder Migration Mode

The current Builder is primarily intended for colleagues creating new pages from the current module/rule set. Migration needs a narrower mode with less free generation and stronger adherence to source data and target designs.

For the Anwenderhandbuch pilot, define only what is needed to prove the loop:

- accept Claude Design target designs / patterns;
- accept structured crawl data with text, links, image references and source URLs;
- map those inputs into the required migration page patterns;
- support migration treatments such as preserve, improve or consolidate where needed;
- apply the required URL/link/image rules;
- generate pages consistently enough for joint QA and publishing.

Do not perfect a universal Migration Mode before the first pilot. Prove it with Anwenderhandbuch, then generalize the rules that actually recur.

## Key Stakeholders

- B2B Product Marketing as the first migration target and fachlich owner for page relevance/content decisions
- Juliane Bischoff for B2B team support and pod capacity/alignment
- Ulrike as content/page/sitemap coordination owner
- Peter as design, Claude Design and initial asset-pilot owner
- Beatrice for Contentful / LP Builder platform coordination and B2B form alignment
- Daniel Herold as a senior stakeholder for the broader migration and Core/Builders Platform direction
- Matthias as an important senior stakeholder for demonstrating that the proposed migration setup works in practice
- SEO team for URL/slug, redirects, SEO preservation, LP Builder SEO guidance and LLM/AI visibility
- Contentful / platform owner for technical slug, routing and redirect feasibility
- Mukhammadjon for the Contentful integration until the MVP is handed over
- Allan / relevant platform contacts for the image storage pilot where needed

## Confirmed Direction and Decisions

- Optimize the first Anwenderhandbuch pilot for a fast, credible end-to-end proof with as few dependencies as possible.
- Treat the migration around three working areas: design/Claude Design, content/page/sitemap coordination, and migration/project leadership with LP Builder enablement.
- Use the Anwenderhandbuch as the first pilot to test this collaboration and end-to-end workflow rather than as a separate planning workstream.
- Run the same four-step migration loop for each new directory / page group.
- Use Claude Design for analysis, target-design creation, page-pattern definition and structured crawl outputs.
- Do not assume the current fixed LP Builder module set can represent the migration target; required patterns must be added over time as real page groups are analyzed.
- Create a narrow migration mode for the first pilot, then generalize only proven recurring rules.
- Use the migration-focused LP Builder to consume final design / module inputs plus structured source-page data and generate target pages.
- Publish only after joint QA and approval; publishing is not part of the generation step itself.
- Treat the broader sitemap as a migration program that requires classification before page production starts at scale.
- Keep existing SEO/business Excel workbooks as the fachlich SSOT where they already contain decisions; do not create a competing master dataset for the pilot.
- Develop the visual HTML sitemap as an operational view over Excel decisions plus crawl/live-status data.
- Do not build HTML -> Excel write-back for the pilot; start with generated/synced HTML and consider Graph-based live reading later.
- Use a central migration inventory / manifest concept to connect page classification, URL/SEO rules, ownership, special functionality and migration status, even if the underlying authoritative data is distributed across existing Excel sources.
- Identify protected entry pages where content/design changes should be minimized and where the existing public URL may need to remain stable.
- Preserve exact source content and important assets wherever required; redesign or SEO improvement should depend on the migration classification rather than be applied automatically to every page.
- B2B forms should be integrated as centrally managed form instances through a dedicated slot/module rather than generated completely inside the LP Builder.
- SEO and URL/slug decisions must be aligned before broad migration because important existing URLs and visibility cannot simply be discarded.
- Peter should drive the small storage/S3 image pilot; Dominik should define the migration requirement without becoming the ongoing storage operator.
- Ulrike should coordinate sitemap and SEO/URL topics as part of the process, while specialist SEO decisions remain with SEO.

## Open Topics & Dependencies

### SEO & URLs

- Identify which current URLs carry material SEO visibility.
- Decide which URLs must remain stable and where redirects are acceptable.
- Clarify how public URL preservation maps to Contentful slug/routing behavior.
- Create a compact SEO guideline / rule set that can become a fixed input for the Landing Page Builder and its pre-publish checks.

### LLM / AI Visibility

- Align with SEO on which technical and content requirements should be considered so migrated pages are also well positioned for AI- and LLM-based search / answer experiences.
- Determine which of those rules belong in content guidance, design patterns or automated Builder checks.

### Salesforce Forms

- Clarify which Salesforce-backed form types / patterns B2B currently uses.
- Define how centrally managed form instances should be referenced through a Builder slot/module.
- Keep this from blocking the first pilot unless the selected pilot pages require the functionality.

### Assets

- Continue the initial migration using the established direct-image-URL model.
- Let Peter drive a deliberately small storage/S3 pilot for persistent assets and stable URLs in parallel.
- Define the transition from existing source URLs to durable storage / asset URLs without blocking the pilot.

### Sitemap V2

- Refactor the current visual HTML sitemap so its data can be regenerated from `Anbieten Pages.xlsx` rather than being manually embedded.
- Keep the existing workbook as SSOT and retain the crawl/live-status overlay.
- Start with a manual/lightweight sync and only move to Graph-based live reading if useful after the pilot.
- If multiple directory-specific Excel sources are added, create a small source manifest mapping page groups to their authoritative workbook.

### QA Model

- Confirm which checks are mandatory for content, design, SEO, URLs, links, assets, forms and technical function.
- Define who provides the final approval for the different areas.
- For the pilot, keep the readiness check small: final scope, target design/patterns, enough URL/SEO clarity, working publishing, non-blocking asset handling and required Builder rules.

### Page Patterns & Builder

- Identify new design/module patterns iteratively as each page group is analyzed.
- Translate Claude Design outputs into reusable Builder capabilities without creating uncontrolled one-off code.

## Risks and Open Questions

- Remaining pod capacity / organizational confirmation should not become an unnecessary blocker for the narrow pilot, but needs clarity for scale-out.
- Which new or flexible page patterns will be required once migration moves beyond the first pilot.
- Which current pages are protected entry pages and therefore require minimal content/design change.
- Which URLs must remain unchanged, which can be redirected, and how public URL preservation maps to Contentful slug/routing behavior.
- Exact Salesforce form types/patterns that B2B currently uses and how they should be referenced from the LP Builder.
- How migration QA and final approval should be divided between content, design, SEO and technical checks.
- How asset URLs should transition from existing sources to the future storage setup without blocking the initial pilot.
- Existing Excel sources across the company are fragmented and may be stale or partially incorrect; the visual sitemap/live crawl layer should expose inconsistencies rather than pretending the Excel data is always current.

## Next Steps

1. Schedule the Peter/Ulrike pilot kickoff and prepare a concise pilot brief plus concrete handoff packages.
2. Schedule SEO/URL alignment for the pilot with the prepared questions above and include a Contentful/platform routing expert where needed.
3. Finish or explicitly resolve the remaining LP Builder -> Contentful MVP work with Mukhammadjon.
4. Prepare the Anwenderhandbuch scope from the existing Excel/sitemap for Ulrike's review and future sitemap ownership.
5. Give Peter the final pilot URL scope, tightly bounded Claude Design crawl/design brief and ownership of the parallel storage/S3 pilot.
6. Define and implement only the Anwenderhandbuch-specific migration mode/rules required in the LP Builder.
7. Generate one real pilot page first, then the approved page group.
8. Run joint QA and publish approved pages to Contentful.
9. Package the successful end-to-end proof and learnings for senior stakeholder alignment and the scale-out resource discussion.
10. Add Sitemap V2 after/alongside pilot preparation: Excel remains SSOT, visual HTML is generated from it and enriched with crawl status; no write-back for now.

## Last Confirmed

The pilot-first execution principle, low-dependency proof goal, Ulrike's sitemap/SEO coordination role, Peter's asset-pilot ownership, the Excel-as-SSOT / visual-sitemap source model and the conversational next-task approach were consolidated on 2026-08-30.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md) and [Landing Page Builder](landing-page-builder.md).
