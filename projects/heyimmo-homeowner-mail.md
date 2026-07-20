# HeyImmo Automated HomeOwner Mail

## Purpose

Turn the HeyImmo hackathon concept into an automated and personalized HomeOwner email flow using property, broker and market data. The project is part of the broader AI E-Mail Automation direction and is intended for real operational use.

## Current Status

The HeyImmo HomeOwner mail is in an advanced integration and testing stage and is intended to be used by the responsible team. It may already be in use, but the exact live, launch and production status is not currently confirmed.

The mail combines static Iterable template elements with dynamically generated modules. The main dynamic blocks are the agent module and the market overview. A newer market-overview variant uses two KPIs because the average marketing-duration data point is not reliably available.

The core technical platform is documented as operational, but no runtime verification of the concrete HeyImmo journey or current sending activity has been completed.

## Repository and System Boundaries

### Dominik's `email-automation` Repository

- Local working and QA repository for the HeyImmo email assets.
- Contains source HTML, extracted modules, Iterable-oriented snippets, variable specifications, full-email templates and rendering tests.
- Used for module design, email-client compatibility, Outlook and VML work, controlled variants and technical handover preparation.
- Does not itself contain the productive AWS import or deployment pipeline.

### Mitch's `is24-email-modules` Repository

- Productive module platform and source of truth for deployed email modules.
- Combines a module library with an AWS SAM pipeline.
- Modules are stored as matching HTML, CSS and JSON manifest files under a product and audience structure.
- Relevant pushes to `main` can run tests, deploy the SAM stack and seed modules into DynamoDB.
- Iterable retrieves rendered HTML and CSS blocks from a protected data feed at send time.
- Dominik now has access and has the repository available locally.
- The repository must remain read-only for Dominik for now. No files, modules, commits, pushes, activations or GitHub changes should be made until he has reviewed the setup carefully and aligned the operating workflow with the responsible owners.

## Confirmed Architecture

The documented end-to-end direction is:

```text
Module HTML, CSS and JSON in Git
→ GitHub main workflow
→ tests, AWS SAM deployment and module seeding
→ DynamoDB module registry and rendered-content storage
→ protected data feed
→ Iterable template slots
```

Iterable receives up to five pairs of dynamic HTML and CSS blocks. Different renderer types support agent cards, price charts, static modules and request-parameter-based modules.

The platform also uses AWS components including Lambda, DynamoDB, S3, SQS, EventBridge, API Gateway, Secrets Manager and CloudFront. The documented platform status is operational, but the actual current AWS and Iterable runtime state was not independently verified.

## Module Contract

A module in the productive platform requires three matching files:

```text
{slug}.html
{slug}.css
{slug}.json
```

The files live under:

```text
modules/{product}/{audience}/
```

The manifest includes fields such as module ID, renderer type, products, intents, position, active state and required fields. New modules should begin with `active: false` and only be activated after review.

## Dominik's Role

Dominik is responsible or strongly involved in:

- email-module concept and design;
- email-compatible table layouts;
- Outlook compatibility and VML buttons;
- desktop and mobile behavior;
- rendering QA and test mails;
- controlled module variants and fallbacks;
- preparing modules and handovers for the technical platform;
- coordinating the wider AI E-Mail Automation direction.

He should not currently make operational changes in Mitch's productive repository or work directly in AWS, DynamoDB, deployment workflows, Iterable journeys or campaigns without prior alignment.

## Key Stakeholders and Responsibilities

- Mitch for the productive module platform, data feed, AWS and DynamoDB workflow, rendering infrastructure and integration.
- Christopher and the relevant Marketing Automation team for the Iterable journey or campaign setup and final operational integration.
- Taha and Katja for data and variable alignment where required.
- Cristina and other testers for email-client and rendering feedback.
- Dominik for module design, compatibility, QA and product direction.

Exact operational ownership of activation, deployment approval and the final Iterable journey still needs confirmation.

## Confirmed Direction and Decisions

- HeyImmo is a concrete project within the broader AI E-Mail Automation direction, not merely a feature of the E-Mail Builder.
- The flow should combine stable static template elements with externally generated dynamic modules.
- Git-hosted module files are the source of truth for the productive module platform.
- The market overview should use the two-KPI variant because average marketing duration is not reliably available.
- Directly sent test mails should be used for rendering QA; forwarded mails can break media-query hide and show behavior.
- Dominik now has repository access, so access is no longer a blocker.
- Mitch's repository must not be modified until Dominik has understood the platform and agreed on a safe operating process.
- A push to `main` must be treated as an operational deployment action, not as a harmless content upload.

## Current Issues and Risks

- The exact live, launch and current sending status of the HeyImmo journey is unconfirmed.
- Agent images do not load in Windows Outlook, while a Beefree-hosted control image does. The likely cause is image hosting, CDN behavior, headers, redirects or Microsoft access rather than the email HTML itself.
- The affected Windows Outlook test also landed in spam, which may be a separate deliverability issue.
- Rounded CTA buttons in the dynamic agent and market modules need the original Outlook-compatible VML pattern restored.
- The two-KPI market module must be confirmed as the final productive version.
- Forwarded messages can display both desktop and mobile charts because clients alter CSS and media queries.
- Final Iterable event fields, variable names, fallbacks, journey ownership and activation responsibilities still need confirmation.
- The platform documentation describes an operational system, but actual AWS and Iterable runtime data has not been checked.
- Changes in the productive module repository can trigger deployment and DynamoDB seeding, creating an operational risk if the process is not understood first.

## Next Steps

1. Confirm with the responsible team whether the HeyImmo journey is currently live, scheduled for launch or still in final testing.
2. Keep Mitch's repository fully read-only while Dominik reviews its documentation, module contract, workflows and ownership model.
3. Align with Mitch or the responsible AWS owner on the safe process for branches, reviews, activation and pushes before making any module change.
4. Resolve the Windows Outlook agent-image hosting issue with the responsible hosting or platform team.
5. Restore and verify the VML button pattern in the dynamically rendered agent and market modules.
6. Confirm the two-KPI market overview as the productive standard.
7. Clarify final Iterable variables, fallbacks, journey ownership and campaign configuration.
8. Later define how HeyImmo, LOFT and the E-Mail Builder fit into a shared AI E-Mail Automation strategy.

## Last Confirmed

Current project, repository and architecture context clarified by Dominik and repository handovers in July 2026.

## Related Context

See [E-Mail Builder](email-builder.md) and [LOFT Automation](loft-automation.md).
