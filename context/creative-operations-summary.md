# Creative Operations Summary

_Last updated: 2026-07-20_

This summary consolidates the currently documented cross-project context. Project-specific technical facts must be verified in the relevant project repository. The source material for the Contentful MVP and the work record was last updated on 2026-07-14; statements without a newer date may no longer reflect the current status.

## Current Priorities

- Develop Creative Operations into scalable, reusable, AI-supported marketing systems.
- Advance marketing AI enablement, builders, agents, automations, standards, and self-service.
- Strengthen quality, speed, and collaboration across Creative Studio, Marketing, AI Solutions & Data, SEO, UX, and platform and product areas.
- Prepare a pragmatic Contentful MVP for marketing landing pages while preserving the LP Builder as the controlled creation workflow.

## Active Projects

### Contentful MVP Marketing

#### Goal

Enable Marketing to create new landing pages faster and with more independence, without waiting for long component-development cycles in Contentful. The intended direction is that the LP Builder creates and finalizes HTML landing pages and, in a later step, transfers page data to Contentful through an API or MCP-based integration.

#### Current Status

The documented outcome of a Core Team discussion is that a pragmatic HTML-based Contentful MVP should be explored or prepared before a full component or studio approach. The Core Team offered to prepare a solution for HTML-based landing pages in the next one to two sprints. This is a historical statement from 2026-07-14 and requires confirmation before being treated as current.

The documented target flow is:

1. A user creates, iterates, and finalizes an HTML preview in the LP Builder.
2. The LP Builder collects and confirms required metadata, such as directory, slug, SEO, tracking, and, where applicable, form or asset information.
3. The LP Builder prepares an export and sends final page data to Contentful through an API or MCP integration.
4. Contentful creates a draft page, receives the HTML, and reports creation back to the LP Builder.
5. The user reviews the Contentful preview before publication.

For existing AEM pages, the documented approach is gradual migration: teams receive new Contentful target areas, create new pages there with the LP Builder, prioritize important existing pages such as top-ten pages, and keep old AEM pages active until replacement, continuation, archival, or redirects are decided.

#### Key Stakeholders

- Marketing / Creative Operations: requirements, LP Builder target process, example pages, and migration priorities.
- Core Team: Contentful MVP, technical implementation, API/MCP options, and new target areas.
- UX: possible role in page rules, quality, templates or page types, and governance.
- Jorin and Eve: relevant management stakeholders for alignment and visibility.

#### Recent Developments

- On 2026-07-14, the work-context system was established to bring context previously spread across chats, projects, and tools into one versioned knowledge base. The documented intended effect was to make context available across chats and projects.
- The same journal entry records that GitHub access for ChatGPT was set up and that the initial repository structure was prepared. Its documented next step was to add core knowledge and active projects and to create context and update skills. It is a historical work record, not a current authentication statement.

#### Important Decisions

- Start with an HTML-based MVP rather than immediate full component migration, because the LP Builder already produces HTML, Marketing needs a functional near-term solution, and a complete component/template approach was assessed as too slow.
- Keep the LP Builder as the central tool for creation, iteration, and export to avoid uncontrolled manual HTML changes and preserve its controlled module and rule base.
- Use new Contentful directories or target areas for teams rather than freezing and fully migrating existing AEM directories at once.

#### Risks and Blockers

- The end-to-end process, MVP scope, ownership model, and timing remain unconfirmed.
- It is unresolved whether users can avoid direct HTML access, how later page changes are initiated, and which export rules must be added to the LP Builder.
- The treatment of legacy AEM pages, internal links, migrated HTML pages, and later editing remains undecided.
- Responsibilities across the Core Team, Marketing, UX, and decision-makers are not yet assigned in the documented context.

#### Next Steps

1. Hold the planned Contentful MVP Marketing alignment with the Core Team.
2. Review the documented question set and record confirmed answers.
3. Document MVP scope, responsibilities, timing, example pages, target areas, and migration priorities.
4. Prepare marketing example pages and potential top-ten legacy pages.
5. Update this summary once the discussion produces confirmed information.

## Important Cross-Project Decisions

- **2026-07-14 — Central knowledge base:** `scout24-creative-ops/work-context` is the central cross-project knowledge base. Context knowledge and work records are kept separately. Changes require Dominik's explicit approval.
- **2026-07-14 — Active GitHub work location:** New active work generally belongs in `scout24-creative-ops`. Legacy repositories remain when existing pages or runtime paths depend on them.

## Upcoming Milestones

- The Core Team's stated aim to prepare an HTML-based solution within one to two sprints is recorded as of 2026-07-14 and must be reconfirmed.
- The next Contentful MVP alignment is the next documented project checkpoint; no date is recorded.

## Open Follow-ups

- Confirm the realistic end-to-end MVP process and distinguish MVP scope from later phases.
- Confirm Contentful directory strategy, migration handling, and ownership for legacy AEM pages.
- Confirm responsibility split across Core Team, Marketing, UX, and decision-makers.
- Confirm timings, test availability, accountable owners, and the next status check.
- Add confirmed outcomes and longer-term relevant information here; use weekly summaries only for concise week-specific reporting.
