# E-Mail Builder

## Purpose

Create a scalable system for building stable, reusable and brand-consistent marketing emails and transferring them into delivery systems such as Iterable.

## Current Status

The historical material shows an advanced builder with reusable modules, fixed templates, team onboarding and Iterable integration. The latest documented work connects the builder to automated use cases such as HeyImmo and LOFT. The exact current release and adoption status needs confirmation.

## Dominik's Role

Dominik developed the builder and its module system, worked on client stability, coordinated templates and onboarding, connected the workflow to Iterable, and shaped the broader automation architecture.

## Key Stakeholders

- Alisa and participating Marketing teams
- Seeker and Homeowner teams
- Media and LOFT as historical pilot candidates
- Allan and Mitchell for Iterable, MCP and technical handovers
- Ciaran for module and form-related implementation support
- Beefree users and the Creative Studio

## Important Developments

- March 2026: Started building the E-Mail Builder agent and a dedicated module-generation agent.
- March 2026: Focused on Outlook stability and reusable email modules.
- March 2026: Set up an API integration that could generate and populate emails in Iterable.
- April 2026: Integrated the module set and first fixed templates and improved preview performance.
- April 2026: Started planning pilot projects with Media and LOFT.
- May 2026: Onboarded Seeker and Homeowner into a test phase with templates and flexible module selection.
- May to July 2026: Evaluated MCP-based Iterable workflows and clarified limitations compared with the earlier API path.
- July 2026: Used the builder architecture in the HeyImmo HomeOwner mail and LOFT automation use cases.

## Decisions

- Build emails from governed reusable modules rather than one-off code.
- Prioritize client stability, especially Outlook compatibility.
- Keep technical handovers between agent output, JSON, HTML, templates and Iterable explicit and testable.
- Treat concrete automated mail flows as use cases of the broader builder system.

## Risks and Open Questions

- The reliable division between Agent Factory, MCP, API and template logic needs confirmation.
- Current production adoption and ownership are not documented conclusively.
- The latest export and delivery process after July 2026 needs confirmation.

## Next Steps

Current next steps need confirmation. Historical follow-ups included stabilizing Iterable handovers, improving export logic, validating pilot use cases and scaling reusable templates.

## Last Confirmed

Historical source material through July 2026; current status needs confirmation.