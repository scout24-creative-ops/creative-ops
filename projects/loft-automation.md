# LOFT Automation

## Purpose

Automate LOFT landing-page and newsletter creation from structured input using the existing builder and agent architecture.

## Current Status

A functional MVP was documented in July 2026. A first agent could generate a landing page from JSON, and a simplified second version reduced creation time from roughly three minutes to around two minutes. The current status after the MVP needs confirmation.

## Dominik's Role

Dominik built the initial and simplified agent versions, tested the workflow, identified the JSON structure as the main bottleneck, and connected the use case to the Landing Page Builder and automated newsletter flow.

## Key Stakeholders

- LOFT team
- Agent Factory stakeholders
- Teams responsible for the newsletter and mail flow

## Important Developments

- July 2026: Built a first working agent and example page.
- July 2026: Reduced the setup to one working file and improved generation speed.
- July 2026: Identified missing module-level content in the source JSON as the main reason the agent still had to generate text.
- July 2026: Documented the idea that the LP Builder could generate a personalized mail for the LOFT special-newsletter flow.

## Decisions

- Reuse the existing builder and Agent Factory logic rather than create a separate page-production system.
- Improve the structured input before adding more generation complexity.

## Risks and Open Questions

- The final LP-specific JSON schema is not confirmed.
- Production handover, ownership and adoption are not documented.
- The relationship between landing-page generation and newsletter generation needs current confirmation.

## Next Steps

Confirm the current scope, define the complete module-based JSON input, and validate whether the MVP moved into regular use.

## Last Confirmed

July 2026 historical summary; current status needs confirmation.

## Related Context

See [Landing Page Builder](landing-page-builder.md) and [E-Mail Builder](email-builder.md).