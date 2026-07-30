# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, reusable module system.

## Current Status

The production Landing Page Builder is currently a Custom GPT, not an agent. It is actively and frequently used by several Marketing teams, including B2B, Seeker and Homeowner.

Users open the GPT, describe the landing-page topic and select the modules they want to use from the Design Library. The GPT generates the page code from those approved modules. The result is not yet connected to a CMS and has no integrated preview; users currently need to place the generated code manually into an empty AEM page to see the complete design result.

The productive GPT now uses AEM-fragment output as its default contract: required asset links first, followed by approved section markup, without `doctype`, `html`, `head` or `body` tags. A complete standalone HTML document is produced only when explicitly requested for preview or download.

The product remains strategically important, but active development has slowed down in recent months. A new transition strategy is still needed.

## Product Versions and Boundaries

### Production Custom GPT

- The original and currently used Landing Page Builder.
- Contains the broader, production-relevant module set.
- Used by multiple Marketing teams.
- Has no CMS integration or integrated preview.
- Uses AEM-fragment output by default.
- Supports complete standalone HTML only for explicit preview or downloadable HTML requests.
- Remains the current operational standard.

### Landing Page Builder Agent Prototype

- A separate, highly reduced prototype in Dominik's local workspace.
- Built to test the agent setup and to support a larger presentation where agent examples were requested.
- Contains only a small subset of modules.
- Includes a preview capability that the production GPT does not have.
- Is not a production replacement and is not identical to the future Contentful solution.

### Future Contentful Agent

- The intended future replacement for the production Custom GPT.
- Will be built as an agent and designed around the Contentful integration.
- Belongs primarily to the Contentful Marketing MVP project.
- Must remain clearly separated from the existing prototype until the target architecture and Contentful output format are defined.

## Dominik's Role

Dominik initiated and developed the Landing Page Builder, shaped the module and governance model, onboarded the Marketing teams, and retains product, strategy, prioritization and quality responsibility.

He has gradually transferred more operational implementation work to Ciaran while continuing to direct and review the work.

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
- Contentful and Core Team stakeholders for the future target setup

## Confirmed Direction and Decisions

- The existing Custom GPT remains the current production tool until a viable replacement is ready.
- Reusable approved modules and the Design Library remain the basis of the creation workflow.
- AEM-fragment output is the productive default.
- Complete HTML is reserved for explicit standalone preview or downloadable-file use.
- Operational module work can be handled by Ciaran, while Dominik retains strategic and product responsibility.
- The reduced agent prototype should be treated as a testcase, not as the current product or the final Contentful agent.
- The future Contentful agent should eventually replace the Custom GPT, but only after the target architecture and integration approach are defined.

## Important Developments

- 2026-07-30: Ciaran identified that the system instructions incorrectly required a full HTML document for the AEM workflow.
- Dominik worked through the issue with Codex, updated the prompt, guardrails and usage documentation, added regression tests, updated the productive Custom GPT and verified the corrected behavior in a fresh chat.
- Draft PR #3, `Make AEM fragment output the LP Builder default`, was opened for review in `scout24-creative-ops/lp-builder`.

## Risks and Open Questions

- A transition strategy from the productive Custom GPT to the future Contentful agent is not yet defined.
- It is unclear how much further investment should go into the current GPT before the replacement is ready.
- Existing users, modules and working practices must be preserved or migrated without disrupting the current strong usage.
- The future handling of preview, CMS transfer and later editing depends on the Contentful MVP decisions.
- Historical user-survey findings and module requests have not yet been consolidated into a current roadmap.
- The draft PR still requires review before merge.

## Next Steps

1. Ask Ciaran to review PR #3 and confirm the corrected output contract works for his workflow.
2. Merge the reviewed change when approved.
3. Define a transition strategy covering stabilization of the current GPT, the prototype's role and the future Contentful agent.
4. Keep the current Custom GPT operational for existing Marketing users.
5. Continue necessary module and maintenance work through Ciaran and Linear tickets.
6. Wait for the Contentful target format before making larger architectural changes.

## Last Confirmed

Productive GPT output and repository review setup confirmed on 2026-07-30.

## Related Context

See [Contentful Marketing MVP](contentful-marketing-mvp.md) and [Design Library and Builder Library](design-library.md).
