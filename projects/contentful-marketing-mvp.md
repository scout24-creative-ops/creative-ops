# Contentful Marketing MVP

## Purpose

Enable Marketing to create and migrate landing pages faster and more independently while keeping the Landing Page Builder as the controlled creation workflow.

## Current Status

The current direction is a pragmatic, HTML-based Contentful MVP for new Marketing landing pages. Pages continue to be created in the Landing Page Builder and are then transferred to Contentful. In the latest alignment with Bea and Stefan Harssdorf, the described end-to-end approach was assessed as technically realistic in principle.

The next required step is a technical spike on the Contentful side. It should define the HTML-based page type or module, the expected HTML target format, read-only behavior for normal editors, and the basic API integration. Larger Landing Page Builder changes should wait until this target format is defined.

## Dominik's Role

Dominik represents Marketing and Creative Operations requirements, documents the target process, provides the existing Landing Page Builder output, prepares pilot pages and migration priorities, and adapts the Landing Page Builder after Contentful defines the required output format. He also communicates the project status to management stakeholders.

## Key Stakeholders

- Bea for Core Team coordination and alignment with Stefan
- Stefan Harssdorf for Contentful architecture and technical assessment
- Contentful team
- Marketing team leads for Seeker, Homeowner, Professional and B2B
- SEO and UX
- Jorin and Eve for management alignment when needed

## Confirmed Direction and Decisions

- The Landing Page Builder remains the central creation tool for Marketing landing pages.
- The short-term MVP should be HTML-based because a full component-based rebuild in Contentful would take too long.
- The proposed end-to-end process is considered technically realistic in principle.
- An API is currently more likely than MCP for the transfer; MCP is not a fixed requirement.
- The Contentful team must define the required HTML target format before major Landing Page Builder adaptations begin.
- Contentful should evaluate a dedicated HTML-based page type or HTML module.
- The HTML area should be largely or fully read-only for normal editors.
- Slug, SEO and other metadata do not all need to be maintained in the Landing Page Builder in the first MVP; some may initially be completed in Contentful.
- For later changes, replacing a page after editing it again in the Landing Page Builder is likely simpler than complex partial updates.
- Existing AEM pages should be migrated gradually and by priority rather than through a big-bang migration.
- During the transition, new Contentful pages may still link to old AEM pages.

## Open Questions and Risks

- Whether a complete page is stored as one HTML block or as several HTML modules.
- Which metadata is captured in the Landing Page Builder and which is initially added in Contentful.
- How previewing will work: in the Landing Page Builder, through Contentful, or through a separate preview or staging environment.
- How an existing page can later be loaded back into the Landing Page Builder for editing.
- How link checking, redirects and the retirement of old AEM URLs will be managed.
- When the technical spike starts and what timeline applies.
- Whether a regular short status sync is needed and at what cadence.

## Next Steps

1. Bea aligns with Stefan on the technical approach and coordination.
2. The Contentful team plans or starts a technical spike covering:
   - the HTML page type or HTML module;
   - read-only behavior;
   - the required HTML target format;
   - the basic API integration.
3. Dominik waits with larger Landing Page Builder changes until the target format is defined.
4. The Landing Page Builder is then adapted to produce the required Contentful output.
5. The transfer flow from Landing Page Builder through API to a Contentful draft is tested.
6. Marketing defines a small prioritized pilot set of AEM pages for gradual rebuilding.
7. The link and redirect strategy is clarified separately.

## Last Confirmed

Latest project handover and alignment with Bea and Stefan Harssdorf, July 2026.

## Related Context

See [Landing Page Builder](landing-page-builder.md).