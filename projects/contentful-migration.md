# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup using an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

The current ScoutWiki working page for the project is: https://wiki.scout24.com/spaces/creative-operations/pages/56156/contentful-migration-b2b-pod-working-model

## Current Status

The broader migration is being organized as a program rather than only as one page-group pilot. The existing sitemap is the starting inventory, and the intended operating model is now much clearer: work through the migration by directory / page group, apply the same repeatable pod workflow, and use the migration inventory to track treatment, ownership, dependencies and status.

The B2B Anwenderhandbuch / `tipps` area remains the first pilot and should be treated as the first end-to-end test of the collaboration model and migration loop rather than as a separate planning stream.

The current Landing Page Builder creates pages from a fixed catalogue of predefined modules. That catalogue is too limited to recreate the broader variety of existing AEM pages and is therefore a migration capability gap. The intended direction is to use Claude Design to analyze real page groups, create target designs/patterns that cover their variation, and extend the migration-focused LP Builder so those patterns can be used repeatedly.

Different page groups require different migration treatments. Some pages can stay largely as they are, some can be consolidated, some can be improved or redesigned, and some can be retired. Important SEO-visible pages may require preservation of the existing public URL or a carefully managed redirect path.

SEO and URL handling are cross-cutting migration requirements. Existing visibility must be assessed before changing URLs or content. The project needs a clear model for preserving public URLs where required, using redirects where appropriate, and understanding how Contentful slug/routing behavior maps to the final public URL.

B2B forms remain a critical dependency. Product Marketing B2B relies heavily on Salesforce-backed forms, and migration should not start at scale until there is a clean supported way to include them. The preferred direction is that the LP Builder does not generate complete form logic itself. Instead, it should place a defined form module/slot that loads or references a centrally managed form instance.

Images are not a separate MVP feature for the migration. The migration workflow should continue to use the LP Builder's established placeholder + direct-image-URL model. Existing page image URLs can be extracted during migration and later replaced with durable URLs from the planned storage / asset setup.

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

## Pod Working Areas

The current planning model separates the migration into three working areas. The Anwenderhandbuch pilot should test how these three areas work together.

### Ulrike — Content & Pages

- Own the fachlich steering of content and pages.
- Coordinate page/content decisions with the B2B Product Marketing team.
- Determine which pages remain relevant, which variants are authoritative and what should be consolidated, removed or optimized.
- Define or collect content-side requirements for the target pages.
- Review and align designs with Peter from the business/content perspective.
- Coordinate decisions where page content, structure or requirements are unclear.

### Peter — Design & Claude Design

- Crawl and analyze page groups with Claude Design.
- Capture the source-page information needed for migration, including texts, images, URLs, links and structures.
- Create target designs and page/module patterns that can represent the real page variation.
- Align designs with Ulrike and incorporate fachliche page requirements.
- Hand over final designs, module concepts / templates and structured crawl results to Dominik.

### Dominik — Migration Lead & LP Builder

- Own the planning and implementation of the migration and the overall steering of the pod.
- Take final designs, modules or templates from Peter and translate the required capabilities into the migration-focused Landing Page Builder.
- Add the required modules, rules and patterns depending on the needs of the current page group.
- Use the structured crawling results such as copy, links, image URLs / references and other page data as input for page generation.
- Generate the new pages with the Landing Page Builder and prepare them for QA and approval.
- Participate in and advise on cross-area decisions without taking over the specialist work of the other areas.

The proposed Peter/Ulrike/Dominik model remains subject to final confirmation of the pod setup.

## Repeatable Migration Workflow

The intended loop should be repeated for each new directory, page group or topic that is migrated.

1. **Content Analysis & Page Requirements — Ulrike**
   - Clarify duplicates, variants and outdated content.
   - Align with B2B Product Marketing on what should be migrated.
   - Define requirements for the future pages.
   - Mark content or functionality that must remain unchanged.
   - Hand the clarified scope and requirements to Peter and Dominik.

2. **Claude Design Analysis & Target Design — Peter**
   - Capture texts, images, links and structures from the existing pages.
   - Group pages by requirements and recurring patterns.
   - Develop target designs and page patterns.
   - Align designs with Ulrike.
   - Hand over final designs, required modules / technical requirements and crawl results to Dominik.

3. **LP Builder Adaptation & Page Generation — Dominik**
   - Take final designs, modules or templates from Peter.
   - Add the required modules and rules to the Landing Page Builder.
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

## Key Stakeholders

- B2B Product Marketing as the first migration target and fachlich owner for page relevance/content decisions
- Juliane Bischoff for B2B team support and the proposed pod setup
- Ulrike as the proposed content/page coordination owner
- Peter as the proposed design and Claude Design owner
- Beatrice for Contentful / LP Builder platform coordination and B2B form alignment
- Daniel Herold as a senior stakeholder for the broader migration and Core/Builders Platform direction
- SEO team for URL/slug, redirects, SEO preservation, LP Builder SEO guidance and LLM/AI visibility
- Mukhammadjon for the Contentful integration until the MVP is handed over

## Confirmed Direction and Decisions

- Treat the migration around three working areas: design/Claude Design, content/page coordination, and migration/project leadership with LP Builder enablement.
- Use the Anwenderhandbuch as the first pilot to test this collaboration and end-to-end workflow rather than as a separate planning workstream.
- Run the same four-step migration loop for each new directory / page group.
- Use Claude Design for analysis, target-design creation, page-pattern definition and structured crawl outputs.
- Do not assume the current fixed LP Builder module set can represent the migration target; required patterns must be added over time as real page groups are analyzed.
- Use the migration-focused LP Builder to consume final design / module inputs plus structured source-page data and generate target pages.
- Publish only after joint QA and approval; publishing is not part of the generation step itself.
- Treat the broader sitemap as a migration program that requires classification before page production starts at scale.
- Use a central migration inventory / manifest to connect page classification, URL/SEO rules, ownership, special functionality and migration status.
- Identify protected entry pages where content/design changes should be minimized and where the existing public URL may need to remain stable.
- Preserve exact source content and important assets wherever required; redesign or SEO improvement should depend on the migration classification rather than be applied automatically to every page.
- B2B forms should be integrated as centrally managed form instances through a dedicated slot/module rather than generated completely inside the LP Builder.
- SEO and URL/slug decisions must be aligned before broad migration because important existing URLs and visibility cannot simply be discarded.

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

### Assets

- Continue the initial migration using the established direct-image-URL model.
- Define the transition from existing source URLs to durable storage / asset URLs without blocking the pilot.

### QA Model

- Confirm which checks are mandatory for content, design, SEO, URLs, links, assets, forms and technical function.
- Define who provides the final approval for the different areas.

### Page Patterns & Builder

- Identify new design/module patterns iteratively as each page group is analyzed.
- Translate Claude Design outputs into reusable Builder capabilities without creating uncontrolled one-off code.

## Risks and Open Questions

- The proposed Peter/Ulrike/Dominik pod setup is not yet fully confirmed.
- Which new or flexible page patterns will be required once migration moves beyond the first pilot.
- Which current pages are protected entry pages and therefore require minimal content/design change.
- Which URLs must remain unchanged, which can be redirected, and how public URL preservation maps to Contentful slug/routing behavior.
- Exact Salesforce form types/patterns that B2B currently uses and how they should be referenced from the LP Builder.
- How migration QA and final approval should be divided between content, design, SEO and technical checks.
- How asset URLs should transition from existing sources to the future storage setup without blocking the initial pilot.

## Next Steps

1. Confirm the three-area pod model with Peter and Ulrike / Juliane.
2. Use the Anwenderhandbuch pilot to run the four-step workflow end to end.
3. Establish the sitemap / migration manifest as the status source for directories and page groups.
4. Align with SEO on URL preservation, redirects, the LP Builder SEO guideline and LLM/AI visibility requirements.
5. Clarify the supported Salesforce form integration pattern.
6. Capture required Builder modules / rules as they emerge from Peter's final designs rather than trying to define the complete module catalogue upfront.

## Last Confirmed

The three-area migration working model, the Anwenderhandbuch as collaboration pilot and the four-step loop through content decisions, Claude Design, LP Builder generation and QA-before-publish were consolidated on 2026-08-30.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md) and [Landing Page Builder](landing-page-builder.md).
