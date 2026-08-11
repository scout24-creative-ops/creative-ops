# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, reusable module system.

## Current Status

The production Landing Page Builder is currently a Custom GPT, not an agent. It is actively and frequently used by several Marketing teams, including B2B, Seeker and Homeowner.

Users open the GPT, describe the landing-page topic and select the modules they want to use from the Design Library. The GPT generates the page code from those approved modules. The productive tool still has no CMS integration and users currently place generated code manually into AEM.

A separate duplicated `Landing Page Builder (Contentful)` GPT is now being used to validate the Contentful integration without changing the production tool. Mukhammadjon connected this test GPT to Contentful through GPT Actions. Dominik has independently verified that the same GPT can create and update an unpublished Contentful draft while preserving the existing LP Builder generation workflow.

The productive GPT uses AEM-fragment output as its default contract: required asset links first, followed by approved section markup, without `doctype`, `html`, `head` or `body` tags. A complete standalone HTML document is produced only when explicitly requested for preview or download.

## Product Versions and Boundaries

### Production Custom GPT

- The original and currently used Landing Page Builder.
- Contains the broader, production-relevant module set.
- Used by multiple Marketing teams.
- Has no CMS integration or integrated preview.
- Uses AEM-fragment output by default.
- Supports complete standalone HTML only for explicit preview or downloadable HTML requests.
- Remains the current operational standard.

### Contentful-enabled Test GPT

- A duplicate of the existing Landing Page Builder used to validate the Contentful MVP.
- Keeps the existing controlled Marketing module workflow and generated HTML approach.
- Uses configured GPT Actions for Contentful read, draft creation, draft update and explicit publish operations.
- Draft creation and update require explicit approval; publishing is separate.
- Dominik verified create and update successfully on 2026-08-11.
- A dedicated preview or renderer URL for unpublished drafts is not currently returned by the Actions.

### Landing Page Builder Agent Prototype

- A separate, highly reduced prototype in Dominik's local workspace.
- Built to test the agent setup and to support a larger presentation where agent examples were requested.
- Contains only a small subset of modules.
- Includes a preview capability that the production GPT does not have.
- Is not a production replacement and is not identical to the Contentful solution being tested through GPT Actions.

### Future Contentful Agent

- The intended future replacement for the production Custom GPT.
- Will be built as an agent and designed around the Contentful integration.
- Belongs primarily to the Contentful Marketing MVP project.
- The current GPT Actions backend should ideally remain reusable by a future agent or other client rather than being tied only to the Custom GPT frontend.
- Must remain clearly separated from the existing reduced prototype until the target architecture is confirmed.

## Dominik's Role

Dominik initiated and developed the Landing Page Builder, shaped the module and governance model, onboarded the Marketing teams, and retains product, strategy, prioritization and quality responsibility.

He has gradually transferred more operational implementation work to Ciaran while continuing to direct and review the work. For the Contentful MVP, Dominik also validates that the integration preserves the existing LP Builder behavior and supports the Marketing workflow.

## Ciaran's Role

Ciaran works as a freelancer and implements new modules and system changes based on Linear tickets from Dominik. He works independently on the implementation, while Dominik retains product direction and control.

## Key Stakeholders and Users

- B2B Marketing
- Seeker Product Marketing
- Homeowner Product Marketing
- Other Marketing teams using the builder
- Ciaran for module implementation and system adjustments
- UX for module approval and design governance
- SEO for page-generation guardrails
- Mukhammadjon Kayumov for the current Contentful GPT Actions integration
- Contentful and Core Team stakeholders for the future target setup

## Confirmed Direction and Decisions

- The existing Custom GPT remains the current production tool until a viable replacement is ready.
- Reusable approved modules and the Design Library remain the basis of the creation workflow.
- AEM-fragment output is the productive default.
- Complete HTML is reserved for explicit standalone preview or downloadable-file use.
- The Contentful test integration should augment the current LP Builder rather than replace its controlled Marketing module approach with Storybook-driven generation.
- Operational module work can be handled by Ciaran, while Dominik retains strategic and product responsibility.
- The reduced agent prototype should be treated as a testcase, not as the current product or the final Contentful agent.
- The future Contentful agent should eventually replace the Custom GPT, but the current Contentful flow can be validated first through the duplicated GPT and reusable Actions backend.

## Important Developments

- 2026-07-30: Ciaran identified that the system instructions incorrectly required a full HTML document for the AEM workflow.
- Dominik worked through the issue with Codex, updated the prompt, guardrails and usage documentation, added regression tests, updated the productive Custom GPT and verified the corrected behavior in a fresh chat.
- Draft PR #3, `Make AEM fragment output the LP Builder default`, was opened for review in `scout24-creative-ops/lp-builder`.
- 2026-08-11: The duplicated Contentful-enabled GPT successfully created and then updated an unpublished Contentful draft through GPT Actions in Dominik's own test session. A fresh chat resolved an earlier session-level Action availability issue.

## Risks and Open Questions

- A transition strategy from the productive Custom GPT to the future Contentful agent is still not fully defined.
- It is unclear how much further investment should go into the current production GPT before the replacement is ready.
- Existing users, modules and working practices must be preserved or migrated without disrupting the current strong usage.
- The Contentful test flow currently lacks a dedicated preview or renderer link for unpublished drafts.
- The separate Contentful publish flow has not yet been validated by Dominik.
- Historical user-survey findings and module requests have not yet been consolidated into a current roadmap.
- The draft PR still requires review before merge.

## Next Steps

1. Ask Ciaran to review PR #3 and confirm the corrected output contract works for his workflow.
2. Merge the reviewed change when approved.
3. Continue validating the Contentful test GPT lifecycle, especially preview and publish behavior.
4. Define a transition strategy covering stabilization of the current GPT, the prototype's role and the future Contentful agent.
5. Keep the current Custom GPT operational for existing Marketing users.
6. Continue necessary module and maintenance work through Ciaran and Linear tickets.

## Last Confirmed

Contentful-enabled GPT create/update flow confirmed on 2026-08-11; production GPT remains the operational standard.

## Related Context

See [Contentful Marketing MVP](contentful-marketing-mvp.md) and [Design Library and Builder Library](design-library.md).