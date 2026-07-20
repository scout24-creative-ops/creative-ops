# LOFT Automation

## Purpose

Automate the creation of paid B2B campaign assets for LOFT real-estate projects using structured project data and reusable builder logic. The long-term vision is a self-service campaign flow that can generate and deliver multiple touchpoints such as email, landing pages, push notifications and embedded messages.

## Business Context

LOFT supports B2B customers with large real-estate developments and currently sells and produces additional marketing services largely through manual processes. A customer may want more than a standard listing, for example a campaign email, a dedicated landing page or additional reach through other channels.

The future concept is that a B2B customer is shown that one of their registered projects is losing visibility. The customer can then purchase additional reach directly, choose touchpoints and audience volume, and use the already available project data as the input for automated campaign creation and delivery.

## Current Status

The current repository is a prompt and asset setup for a technical MVP, not an end-to-end production campaign platform.

The implemented MVP demonstrates that a JSON file with project data can be uploaded and transformed into a campaign asset for a presentation. The repository inspection mainly shows landing-page preview generation, while Dominik's project context confirms that an E-Mail Builder Agent was also prepared specifically for the LOFT demo to generate a customer-facing email from the same type of structured input.

There are two prompt variants:

- `standard`: the first, more complete and rule-heavy version. It produced a good result but took approximately 32 minutes in the tested presentation setup.
- `speed`: a reduced copy of the first version, iteratively simplified to improve generation time for the presentation.

The two variants are not competing product versions and neither has been selected as the permanent source of truth. The standard version remains the fuller reference; the speed version demonstrates a performance-optimized approach.

Dominik currently has no concrete follow-up task. A future alignment meeting with Florian Kuppe is expected to clarify the next steps.

## Intended End-to-End Direction

```text
B2B project loses visibility
→ customer receives an offer for additional reach
→ customer selects reach and campaign touchpoints
→ existing project and campaign data are provided as structured input
→ assets are generated automatically
→ selected audiences and channels are activated
→ email, landing page, push or embedded messages are delivered
```

The current MVP only covers isolated generation steps and does not yet implement purchasing, targeting, publishing, delivery or a complete orchestration flow.

## Relationship to HeyImmo

HeyImmo and LOFT share a broader automation principle but represent different use cases:

- HeyImmo is a B2C intent-triggered flow. A user's behavior or question in the AI Chat Assistant is interpreted and used to generate a personalized communication.
- LOFT is a B2B commerce and campaign flow. A professional customer purchases additional reach for an existing project and the campaign assets should be generated from known project data.

Both projects can provide reusable patterns for data-driven and personalized marketing automation.

## Builder and System Roles

The Landing Page Builder and E-Mail Builder were originally designed as self-service tools for Marketing users. LOFT points toward a future role in which the builders also act as generation engines:

- the Landing Page Builder can turn structured project data into a campaign landing page;
- the E-Mail Builder or shared email-module platform can generate modular campaign emails;
- further channel-specific systems could later support push and embedded messages.

The exact future architecture and ownership across these systems are not yet defined.

## Dominik's Role

Dominik:

- provided an E-Mail Builder Agent for the LOFT MVP and presentation;
- created the first complete version and the reduced speed variant;
- tested generation quality and performance;
- adapted the setup to the minimum modules and rules needed for the LOFT demo;
- connected the use case to the Landing Page Builder and wider E-Mail Automation direction;
- evaluates how the technical and operational patterns can be reused in other Marketing areas.

## Key Stakeholders

- Florian Kuppe as the main contact for the broader E-Mail Automation setup and the LOFT MVP direction
- Mitch for related technical automation and module-platform topics
- Katja Scholz for related data, campaign or stakeholder alignment
- the LOFT team as the business owner of the B2B marketing-service use case
- future teams responsible for campaign purchasing, targeting, delivery and channel activation

## Strategic Relevance

LOFT should not be treated only as a one-off demo. Together with HeyImmo, it can serve as a blueprint for additional Marketing automation use cases.

Potential future areas include:

- Content and newsletter production
- B2B Marketing and customer-facing campaign services
- recurring data-driven communication processes in other Marketing teams
- automated multi-touchpoint campaigns

The strategic value lies in creating reusable modules, data contracts, generation logic and operational patterns rather than repeatedly building isolated solutions.

## Confirmed Direction and Decisions

- The current MVP is a technical demonstration and not yet a complete production flow.
- LOFT is intended as a multi-touchpoint campaign-automation use case, even though the repository mainly contains landing-page preview assets.
- Email and landing-page generation are both relevant because the future commercial offer can combine several campaign products.
- The standard and speed variants should both be retained until a future target architecture and performance requirement are defined.
- Existing builder logic should be reused rather than creating independent generation systems for every channel.
- LOFT and HeyImmo remain separate use cases but should contribute to a reusable Marketing automation blueprint.

## Risks and Open Questions

- The next project phase and current business priority have not yet been confirmed.
- It is unclear which agent variant should be developed further.
- The structured input contract is not formally defined as a complete schema.
- The repository does not contain an end-to-end purchasing, campaign, publishing or delivery workflow.
- The relationship between generated email, landing page and further touchpoints needs a clear orchestration model.
- Ownership for targeting, legal review, tracking, forms, lead routing and channel activation is not defined.
- The final platforms for publishing and delivery are still open.
- A clear distinction is needed between reusable shared engines and LOFT-specific campaign logic.

## Next Steps

1. Align with Florian Kuppe and the relevant stakeholders on the next LOFT phase and expected outcome.
2. Clarify whether the next milestone is another presentation, a technical prototype or a production-oriented pilot.
3. Define the required campaign inputs, touchpoints and output responsibilities.
4. Decide how the standard and speed variants should be used as reference, test or future implementation bases.
5. Define a formal structured-data contract for project and campaign information.
6. Clarify the future roles of the Landing Page Builder, E-Mail Builder and shared email-module platform.
7. Identify reusable patterns that can be transferred to Content, newsletters, B2B Marketing and other teams.
8. Later define how LOFT, HeyImmo and the E-Mail Builder fit into a shared E-Mail and Campaign Automation strategy.

## Last Confirmed

Current business context, MVP purpose, stakeholders and strategic relevance clarified by Dominik in July 2026.

## Related Context

See [Landing Page Builder](landing-page-builder.md), [E-Mail Builder](email-builder.md) and [HeyImmo Automated HomeOwner Mail](heyimmo-homeowner-mail.md).