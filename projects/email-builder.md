# E-Mail Builder

## Purpose

Create a scalable, governed production system for reusable, stable and brand-consistent email modules for automated, data-driven Marketing communication.

The original broad self-service concept for normal individual Marketing emails is no longer the product direction. Beefree remains the appropriate existing solution for that use case.

## Current Status

The currently available E-Mail Builder is a Custom GPT. Two Marketing teams were originally onboarded into a pilot and received access to build emails from approved modules shown in a Design Library. The pilot is now largely inactive.

After strategic alignment with Jorin, the broad self-service direction was stopped because Beefree already covers normal Marketing email creation sufficiently well. The relevant future value of the Builder is automated, data-driven email production rather than another general composition tool for Marketing teams.

A reduced E-Mail Builder Agent prototype also exists in Dominik's local Codex workspace. It was used to explore how the Custom GPT could evolve into a specialized generation engine; it is not a production replacement.

The intended future role is closer to an automation module generation / production engine: understand an automation use case, reuse existing modules where possible, create new modules under governed design rules when needed, prepare HTML/CSS/manifest assets, support QA and bring the result into the existing controlled module and deployment process.

The Builder itself is not the journey or campaign-management system. HeyImmo and LOFT remain separate automation use cases, while reusable modules, generation patterns, data contracts and technical learnings should be shared where useful.

## Product Versions and Boundaries

### Pilot Custom GPT

- Existing team-facing pilot.
- Uses a Design Library and reusable approved modules.
- Was intended for free self-service assembly of individual emails.
- Pilot usage is now largely inactive.
- Will not be expanded as a broad self-service alternative to Beefree.

### E-Mail Builder Agent Prototype

- Separate reduced prototype in Dominik's local Codex workspace.
- Used to test an agent / specialized generation-engine approach.
- Contains only a limited subset of modules and functionality.
- Is not the current team-facing product and not a production replacement.

### Future Automation Builder Direction

- Focus on automated, data-driven email use cases.
- Prefer reuse of existing modules and proven patterns before creating new ones.
- Create new modules according to governed design and email-client rules when required.
- Produce the relevant HTML, CSS and JSON/module metadata for the existing platform model.
- Support variants, fallbacks, technical QA and visual QA.
- Prepare a controlled Git/review path into the productive module platform.
- Keep human safety gates for merge, deployment, activation and other consequential production actions until the operating model is explicitly defined.

`Automation Module Builder` is a useful working description of this direction, but is not a confirmed official product name.

## Existing Productive Module Context

The related HeyImmo work established a productive module architecture built around versioned module files in Git and a controlled deployment path into the existing AWS / data-feed / Iterable setup.

The technical source of truth for that productive platform is the relevant technical repository, not this Profile repository. Dominik has access, but productive changes should follow the platform owners' agreed branch, review, deployment and activation process.

## Dominik's Role

Dominik owns the product and strategic direction of the E-Mail Builder and the broader AI-supported email-production approach. His contribution includes module concepts and design, email-client stability, Outlook/VML patterns, rendering QA, variants and fallbacks, reusable patterns, technical handovers and evaluation of what should be shared across automation use cases.

Together with Jorin, he decided not to continue investing in the broad self-service model without a clear additional benefit over Beefree.

## Key Stakeholders

- Jorin for strategic alignment and prioritization
- Mitchell for the productive email-module / AWS workflow and related operating-model questions
- Allan for possible Iterable, API and MCP integration topics
- Marketing Automation owners for journey and campaign setup
- Ciaran for module-related implementation support when needed
- LOFT and HeyImmo stakeholders in related automation projects
- UX / Creative Studio for reusable module and design-governance standards

## Confirmed Direction and Decisions

- The current E-Mail Builder is a Custom GPT, not an agent.
- The initial broad self-service pilot is largely inactive.
- Do not continue developing the Builder as a general tool for individual Marketing emails; Beefree covers that use case.
- Focus future Builder development on automated, data-driven email use cases.
- Treat the Builder primarily as a specialized production / generation engine for reusable automation modules rather than as the journey or campaign-management system.
- HeyImmo and LOFT remain separate use cases, even when they share reusable modules, data contracts or technical patterns.
- Reuse existing modules and proven patterns before creating new ones.
- Keep the productive module platform and its technical repository as the technical source of truth.
- Do not treat merge, deployment, activation or other production changes as harmless content updates; the operating model and safety gates must be clear first.
- A future agent may prepare modules, tests and pull requests, but autonomous production deployment has not been approved.

## Risks and Open Questions

- The exact long-term product name and packaging of the automation-focused Builder are not finalized.
- The operating model still needs clear ownership for design approval, technical review, merge/deployment approval, activation, rollback and journey ownership.
- The integration boundaries between Builder, GitHub, AWS/module platform, data feed, Iterable, API and MCP are not yet fully defined.
- Existing modules and templates need to be assessed for reuse across future automation use cases.
- Design and email-client rules should become sufficiently structured and machine-readable if an agent is expected to generate reliable modules from them.
- Formal data contracts are still needed for some reusable automation patterns.

## Next Steps

1. Define the future Builder scope and ownership explicitly around automated email production.
2. Decide how the existing Custom GPT should be treated: archive it, retain it as a historical pilot, or reuse it as a knowledge/module source.
3. Review existing modules and patterns for reuse across automation use cases.
4. Clarify the governed module contract, design rules and QA requirements for generated modules.
5. Define the safe branch/review/activation operating process with the owners of the productive module platform.
6. Clarify the technical integration boundaries across Builder, GitHub, AWS/module platform, data feed, Iterable and any required API/MCP layer.
7. Only then define the next implementation phase for the automation-focused Builder.

These are project-level next steps and do not automatically create active dashboard tasks unless Dominik explicitly prioritizes them into the maintained task set.

## Last Confirmed

The broad self-service direction was stopped with Jorin; Dominik subsequently clarified that future Builder development should focus on automated, data-driven emails rather than normal individual Marketing email creation. This migration handover was reconciled into the maintained Profile context on 2026-08-26.

## Related Context

See [HeyImmo HomeOwner Mail](heyimmo-homeowner-mail.md), [LOFT Automation](loft-automation.md) and [Design Library and Builder Library](design-library.md).