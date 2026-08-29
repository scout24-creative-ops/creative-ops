# Contentful Migration

## Purpose

Migrate existing Marketing landing pages from AEM into the new Contentful-based setup using an AI-supported, repeatable workflow rather than rebuilding pages manually one by one.

This project is distinct from `Marketing Content Platform`: the platform project provides the Landing Page Builder, Contentful integration and future asset infrastructure; this project covers the actual migration of existing pages.

## Current Status

The broader migration now needs to be organized as a program rather than only as one page-group pilot. The existing sitemap is the starting inventory, but the migration plan, ownership model, page classification, QA model and enabling Builder work still need to be made explicit before production starts at scale.

The B2B Anwenderhandbuch / `tipps` area remains the first pilot, but it should be treated primarily as the place where the intended three-part pod model and end-to-end migration workflow are tested together. It is not a separate planning stream.

The current Landing Page Builder creates pages from a fixed catalogue of predefined modules. That catalogue is too limited to recreate the broader variety of existing AEM pages and is therefore a migration capability gap. The intended direction is to use Claude Design to analyze real page groups, create target designs/patterns that cover their variation, and extend the migration-focused LP Builder so those patterns can be used repeatedly.

Different page groups require different migration rules. Some important entry pages may require strict preservation: content and design should remain unchanged and the existing public URL may also need to remain stable. Other groups can be consolidated, redesigned or improved.

SEO and URL handling are cross-cutting migration requirements. Existing visibility must be assessed before changing URLs or content. The project needs a clear model for preserving public URLs where required, using redirects where appropriate, and understanding how Contentful slug/routing behavior maps to the final public URL.

B2B forms remain a critical dependency. Product Marketing B2B relies heavily on Salesforce-backed forms, and migration should not start at scale until there is a clean supported way to include them. The preferred direction is that the LP Builder does not generate complete form logic itself. Instead, it should place a defined form module/slot that loads or references a centrally managed form instance.

Images are not a separate MVP feature for the migration. The migration workflow should continue to use the LP Builder's established placeholder + direct-image-URL model. Existing page image URLs can be extracted during migration and later replaced with durable URLs from the planned storage / asset setup.

## Migration Organization

Use one central migration inventory / manifest as the operational backbone for the sitemap. Each page should eventually carry at least:

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
2. `Preserve exactly` — business-critical or high-value entry pages where content and design must remain unchanged and the public URL may need to remain identical.
3. `Migrate and improve` — relevant pages that should be rebuilt while using the migration to improve structure, SEO or quality.
4. `Retire / redirect` — obsolete, duplicate or superseded pages that should not be rebuilt as separate pages.
5. `Special-function page` — pages that depend on forms or other external functionality and need an explicit technical integration path.

## Pod Working Areas

The current planning model separates the migration into three working areas. The Anwenderhandbuch pilot should test how these three areas work together.

### Peter — Design and Claude Design

- Crawl and analyze page groups with Claude Design.
- Create target designs and page/module patterns that can represent the real page variation.
- Prepare the design-side handoff needed for page generation.
- Align designs with Ulrike and incorporate fachliche page requirements.

### Ulrike — Content and Page Coordination

- Coordinate page/content decisions with the B2B Product Marketing team.
- Determine which pages remain relevant and which variants are authoritative.
- Define or collect content-side requirements for the target pages.
- Review and align designs with Peter from the business/content perspective.
- Coordinate decisions where page content, structure or requirements are unclear.

### Dominik — Migration Platform and Project Lead

- Lead the overall migration project and pod.
- Provide and evolve the migration-focused Landing Page Builder.
- Adjust Builder rules for migration needs and add new modules/patterns as required.
- Aim for a workflow where the Builder receives a Claude Design target plus crawled source information such as copy, links, image IDs/references and other structured page data, generates the new page and publishes it into Contentful.
- Own the technical migration workflow, interfaces, orchestration and quality model.
- Participate in and advise on cross-area decisions without taking over the specialist work of the other areas.

The proposed Peter/Ulrike/Dominik model remains subject to final confirmation of the pod setup.

## Migration Approach

1. Use the sitemap as the source inventory and classify pages before migration.
2. Ulrike / B2B owners confirm page relevance, variants and content requirements.
3. Peter uses Claude Design to analyze the relevant page group and create the required target designs/patterns.
4. Dominik ensures the migration-focused LP Builder can represent the required patterns and accept the structured source/design input.
5. Feed crawled content, links, image references and design information into the Builder.
6. Generate the target page and create/publish it in Contentful.
7. Review content, design, SEO, URLs, redirects, assets and special functionality before publish.
8. Use the Anwenderhandbuch pilot to test and refine the collaboration and workflow before scaling to other page groups.

## Dominik's Role

Dominik leads the migration project and pod and owns the migration platform, workflow, LP Builder evolution, technical interfaces and overall orchestration.

Dominik aligned the broader direction with Daniel Herold and stated that he is confident the combination of the Landing Page Builder MVP, his responsibility for B2B Product Marketing and Claude Design can support a scalable migration approach.

Dominik should be involved as an advisor in important decisions across design, content and technical migration, but should not automatically take over the specialist work of Peter or Ulrike. Peter should own design/Claude Design work; Ulrike should own content/page coordination; SEO and platform-specific decisions should remain with the relevant specialist owners.

## Key Stakeholders

- B2B Product Marketing as the first migration target and fachlich owner for page relevance/content decisions
- Juliane Bischoff for B2B team support and the proposed pod setup
- Ulrike as the proposed content/page coordination owner
- Peter as the proposed design and Claude Design owner
- Beatrice for Contentful / LP Builder platform coordination and B2B form alignment
- Daniel Herold as a senior stakeholder for the broader migration and Core/Builders Platform direction
- SEO team for URL/slug, redirects, SEO preservation and LLM/AI visibility
- Mukhammadjon for the Contentful integration until the MVP is handed over

## Confirmed Direction and Decisions

- Treat the migration around three working areas: design/Claude Design, content/page coordination, and migration platform/project leadership.
- Use the Anwenderhandbuch as the first pilot to test this collaboration and end-to-end workflow rather than as a separate planning workstream.
- Use Claude Design for large-scale analysis, target-design creation and page-pattern definition.
- Do not assume the current fixed LP Builder module set can represent the migration target; required patterns must be added over time.
- Create a migration-focused LP Builder version that can increasingly consume Claude Design output plus structured source-page data and generate/publish the target page to Contentful.
- Treat the broader sitemap as a migration program that requires classification before page production starts at scale.
- Use a central migration inventory / manifest to connect page classification, URL/SEO rules, ownership, special functionality and migration status.
- Identify protected entry pages where content/design must remain unchanged and where the existing public URL may need to remain stable.
- Preserve exact source content and important assets wherever required; redesign or SEO improvement should depend on the migration classification rather than be applied automatically to every page.
- B2B forms should be integrated as centrally managed form instances through a dedicated slot/module rather than generated completely inside the LP Builder.
- SEO and URL/slug decisions must be aligned before broad migration because important existing URLs and visibility cannot simply be discarded.

## Risks and Open Questions

- The proposed Peter/Ulrike/Dominik pod setup is not yet fully confirmed.
- Which new or flexible page patterns are required because the current LP Builder fixed-module catalogue is too limited for the migration.
- How Claude Design-derived page patterns should be translated into durable Builder capabilities without creating uncontrolled one-off code.
- Which current pages are protected entry pages and therefore require exact content/design preservation.
- Which URLs must remain unchanged, which can be redirected, and how public URL preservation maps to Contentful slug/routing behavior.
- Which pages currently carry material SEO visibility and therefore require a preservation baseline before changes.
- Exact Salesforce form types/patterns that B2B currently uses and how they should be referenced from the LP Builder.
- How migration QA should be divided between content, design, SEO and technical checks.
- How asset URLs should transition from existing sources to the future storage setup without blocking the initial pilot.

## Next Steps

1. Confirm the three-area pod model with Peter and Ulrike / Juliane.
2. Define the high-level responsibilities and handoffs between the three areas.
3. Use the Anwenderhandbuch pilot to test the collaboration and end-to-end migration workflow.
4. After the high-level model is agreed, break Dominik's migration-platform responsibilities into concrete implementation steps.

## Last Confirmed

Three-area migration working model and use of the Anwenderhandbuch as the collaboration pilot confirmed by Dominik on 2026-08-29.

## Related Context

See [Marketing Content Platform](contentful-marketing-mvp.md) and [Landing Page Builder](landing-page-builder.md).