# E-Mail Builder

## Purpose

Create a scalable, governed system for generating stable, reusable and brand-consistent Marketing emails. The original concept focused on self-service email creation for Marketing teams; the likely future direction is a more specialized builder for automated, data-driven email flows.

## Current Status

The currently available E-Mail Builder is a Custom GPT. Two Marketing teams were onboarded into a pilot several months ago and received access to build emails from approved modules shown in a Design Library.

The pilot is currently largely inactive and is probably not being used in day-to-day work. Further expansion as a broad self-service product was paused after alignment with Jorin because Beefree already enables Marketing teams to create regular emails sufficiently well and quickly. Continuing to build and maintain a parallel self-service system would create substantial effort without enough additional outcome.

There is currently no productive connection to Iterable.

## Product Versions and Boundaries

### Pilot Custom GPT

- The currently available E-Mail Builder used for the initial team pilot.
- Uses a Design Library and reusable approved modules.
- Was intended to let teams freely assemble their own emails.
- Two teams were onboarded, but active usage is currently unlikely.
- Has no productive Iterable connection.
- Is not planned to be expanded further in its current broad self-service form.

### E-Mail Builder Agent Prototype

- A separate, highly reduced prototype in Dominik's local Codex workspace.
- Built to test how the Custom GPT could be transformed into an agent.
- Contains only a limited subset of modules and functionality.
- Is not the current team-facing product and is not yet a production replacement.

### Possible Future Automation Builder

- A not-yet-finalized agent-based direction for automated, data-driven email generation.
- Would likely be used by Dominik or a small selected group rather than by all Marketing teams for free self-service creation.
- Could support automation projects that generate emails from measured or customer-provided data.
- May later connect to Iterable through API or MCP, or use AWS depending on the final architecture.
- Could eventually become part of the Agent Factory, but no concrete implementation plan exists yet.

## Dominik's Role

Dominik developed the builder concept and module system, coordinated the initial team onboarding, worked on email-client stability and reusable templates, and retains responsibility for the product direction and future automation strategy.

Together with Jorin, he decided not to continue investing in the current broad self-service model without a clearer additional benefit over Beefree.

## Key Stakeholders

- Jorin for strategic alignment and prioritization
- The two Marketing teams that participated in the pilot
- Seeker and Homeowner as historical pilot users
- Beefree users and the Creative Studio
- Allan and Mitchell for possible Iterable, API and MCP integration topics
- Ciaran for module-related implementation support when needed
- LOFT and HeyImmo stakeholders in related automation projects

## Confirmed Direction and Decisions

- The current E-Mail Builder is a Custom GPT, not an agent.
- The self-service pilot is available but currently largely inactive.
- The broad self-service concept should not be expanded further while Beefree already covers normal email creation sufficiently well.
- The reduced local agent prototype is a testcase and not a production replacement.
- The most likely future value lies in specialized automated email generation rather than general daily email building for all teams.
- LOFT and HeyImmo remain separate projects, even though they share the broader direction of data-driven automated communication.
- The final technical integration path between API, MCP, Iterable and possibly AWS is still open.
- Agent Factory participation is possible later but not currently planned in concrete terms.

## Risks and Open Questions

- The future role and scope of the E-Mail Builder have not yet been formally defined.
- The relationship between the builder, LOFT, HeyImmo and a wider AI E-Mail Automation strategy needs to be clarified.
- It is still open whether Iterable should be connected through API or MCP, or whether AWS should handle parts of the flow.
- Ownership and access for a future specialized automation builder need to be defined.
- Existing pilot modules and templates may need to be reviewed before being reused in an automation-focused setup.

## Next Steps

1. Review LOFT, HeyImmo and the broader AI E-Mail Automation direction as separate projects.
2. Define the role of the E-Mail Builder within that shared strategy.
3. Decide whether the current Custom GPT should be archived, maintained as a pilot, or used as a source for the future agent.
4. Define the intended users and ownership model for an automation-focused builder.
5. Select and test the required integration architecture across Iterable, API, MCP and possibly AWS.
6. Only then plan the next implementation phase and any possible Agent Factory integration.

## Last Confirmed

Current status and strategic direction clarified by Dominik in July 2026.

## Related Context

See [HeyImmo HomeOwner Mail](heyimmo-homeowner-mail.md) and [LOFT Automation](loft-automation.md).