# Chart Agent

## Purpose

Create a reusable chart-generation agent that turns structured JSON data into charts following ImmoScout24 design guidelines. The resulting charts should be usable as building blocks inside other Marketing agents, builders and automated communication workflows.

## Current Status

The Chart Agent is being built by Alexander Penkin. The intended workflow is:

1. A user or another agent provides chart data as a JSON file.
2. The Chart Agent interprets the data and applies the relevant ImmoScout24 chart and design rules.
3. It generates the chart as an SVG or image, depending on the target channel.
4. The output is passed into another agent, builder or communication workflow.

The Chart Agent is therefore not primarily a standalone reporting tool. It is intended as a reusable generation component for multiple Marketing use cases.

Example integrations include:

- SVG charts inside the Landing Page Builder;
- image-based charts inside email generation and email automation;
- future use in reports, PDFs, presentations and other content-generation workflows.

## Dominik's Role

The Chart Agent is one of the agents that Dominik initiates and actively pushes within other teams rather than building entirely within Creative Studio.

Dominik's role is to:

- identify the cross-team need and reusable business value;
- initiate and promote the project;
- connect the agent to relevant Marketing use cases;
- ensure that the result can be reused in other agents and builders;
- create visibility for the project and support its inclusion in the Creative Hub;
- coordinate the strategic direction while Alexander Penkin owns the implementation.

This project illustrates Dominik's broader operating model: he does not need to build every agent himself, but helps other teams create solutions that fit into a shared Marketing AI ecosystem.

## Key Stakeholders

- Alexander Penkin, implementation owner
- Dominik Böhme, initiator and strategic driver
- Creative Studio and builder owners
- Landing Page Builder users
- Email and Marketing Automation stakeholders
- Owners of future reporting, PDF or presentation workflows

## Important Developments

- June 2026: The Chart Agent was separated from a broader Lighthouse or report-exposé concept to create a focused, buildable component.
- July 2026: Alexander Penkin took on the implementation of the Chart Agent.
- July 2026: The target workflow was clarified as JSON input, design-compliant chart generation and SVG or image output.
- July 2026: The Chart Agent was positioned as a reusable component for other agents and builders rather than as an isolated tool.

## Decisions

- Alexander Penkin builds the Chart Agent.
- The primary input format is structured JSON.
- Charts must follow ImmoScout24 design guidelines.
- Outputs should support SVG and image formats for different channels.
- The Chart Agent should be designed for reuse inside other agents and builder workflows.
- Initial integration examples are the Landing Page Builder and email generation.
- Dominik drives the initiative, integration and visibility rather than owning the complete implementation himself.

## Risks and Open Questions

- The first supported chart types and exact JSON schema still need to be documented.
- The exact design-rule source and update process are not yet recorded.
- SVG and image rendering quality need to be tested across target systems.
- The integration mechanism for the Landing Page Builder and email workflows still needs to be defined.
- Ownership for long-term maintenance after the initial build is not yet documented.
- Publication and access through the Creative Hub still need to be planned.

## Next Steps

1. Complete the first MVP with JSON input and a defined set of common chart types.
2. Translate the relevant ImmoScout24 design guidelines into reliable generation rules.
3. Test SVG and image output quality.
4. Validate an SVG integration in the Landing Page Builder.
5. Validate image-based use in an email-generation workflow.
6. Document the input schema, supported chart types and limitations.
7. Add the Chart Agent to the Creative Hub when it is ready for broader use.

## Last Confirmed

July 2026.
