# Brand Agent – Tone of Voice

## Purpose

Develop a Brand Agent that provides reusable brand tone-of-voice guidance to other agents. The first intended use case is the Landing Page Builder, where the Brand Agent should apply the standard brand tone by default and later support a small number of selectable communication modes.

## Current Status

- The Brand Agent MVP is close to completion.
- Marie-Lord Lumumba owns the implementation and demonstrated the current state to Dominik on 2026-08-24.
- The tone-of-voice logic has also been implemented as a reusable Skill, as Dominik requested, so it can later be integrated into other agents.
- Dominik continues to support the project through structure, scope, prioritization, enablement and quality guidance.
- The Brand team remains responsible for defining the actual tone-of-voice standards and quality criteria.
- The remaining focus is review, testing and presentation readiness rather than defining the MVP from scratch.

## MVP Hypothesis

The current working hypothesis is:

- The Brand Agent is connected to the Landing Page Builder.
- It applies the standard brand tone by default.
- The user can optionally choose one alternative mode, for example a tone for a younger target group.
- If essential context such as target group or communication objective is missing, the agent asks only for the missing information.

The implementation has progressed beyond the initial definition phase. The current version now includes reusable Skill-based tone-of-voice logic intended for use across other agents.

## Dominik's Role

- Provide process structure and keep the scope small and testable.
- Help review the MVP, test approach and next steps.
- Guide prioritization and quality without taking over the Brand team's responsibility for content standards.
- Support Marie during implementation and help turn the project into a reusable learning case for future agent projects.

## Key Stakeholders

- Marie-Lord Lumumba — implementation of the agent and reusable Skill.
- Dominik Böhme — strategic and methodological guidance.
- Brand team — definition of tone-of-voice standards and quality criteria.
- Landing Page Builder users — first intended user context for the MVP.

## Standardization Step

During the project, Dominik created a compact HTML-based Agent Process Guide covering five phases:

1. Kick-off
2. MVP definition
3. Build support
4. Testing
5. Handover and expansion

The guide uses a reduced meeting structure with accordions, one simple input field per topic, local browser storage and print/PDF support. It started as support for the Brand Agent project but is intentionally designed as an early reusable template for future agent projects.

This is a small first step toward more consistent agent development across the unit and supports the broader objective agreed with Jorin: improve practical AI maturity through clearer orientation, shared standards and reusable working methods.

The implementation of the tone-of-voice logic as a reusable Skill is an additional standardization step because the same capability can be embedded into other agents instead of rebuilding the logic each time.

## AI Enablement Contribution

Marie agreed to take a slot in the AI Enablement session on 2026-09-08. She plans to:

- demonstrate the Brand Agent and explain how she built it;
- share practical learnings from the implementation process;
- explain the reusable Skill approach;
- share her research and perspective on when to use an Agent, when to use a Skill and when another setup may be more appropriate.

Dominik and Marie will review the planned contribution together on 2026-09-04 so Dominik can inspect the agent and Skill and align the presentation before the session.

## Open Questions

- Final test cases and success criteria for the near-complete MVP.
- How Brand will provide and maintain the source material for tone-of-voice standards.
- Which future agents should use the tone-of-voice Skill.
- How the Agent Process Guide should evolve after it has been used in real projects.

## Next Steps

- Review the Brand Agent, reusable Skill and planned AI Enablement contribution with Marie on 2026-09-04.
- Validate the near-complete MVP and identify any remaining changes before broader reuse.
- Use Marie's 2026-09-08 AI Enablement contribution as a practical learning case for Agent-versus-Skill decisions.

## Last Confirmed

2026-08-24
