# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, AI-supported creation workflow.

## Current Status

The production Landing Page Builder is currently a Custom GPT, not an agent. It is actively and frequently used by several Marketing teams, including B2B, Seeker and Homeowner.

Users open the GPT, describe the landing-page topic and select the modules they want to use from the Design Library. The GPT generates the page code from those approved modules. The productive tool still has no CMS integration and users currently place generated code manually into AEM.

A separate duplicated `Landing Page Builder (Contentful)` GPT is now being used to validate the Contentful integration without changing the production tool. Mukhammadjon connected this test GPT to Contentful through GPT Actions. Dominik has independently verified that the same GPT can create a draft, return a direct preview link, update the same draft and show the updated result in the Contentful `next` environment while preserving the existing LP Builder generation workflow.

The Contentful preview already looks broadly consistent with the normal LP Builder output. Some spacing and top/bottom padding differences remain and should be treated as later visual-parity refinement rather than a blocker for the current integration validation.

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
- Keeps the existing Marketing workflow and generated HTML approach.
- Uses configured GPT Actions for Contentful read, draft creation, draft update and explicit publish operations.
- Draft creation and update require explicit approval; publishing is separate.
- Dominik verified create, direct preview and update successfully in `next` on 2026-08-12.
- Production publishing is not yet available because the LP Builder content type and renderer have not been transferred to Contentful `pro`.

### Landing Page Builder Agent Prototype

- A separate, highly reduced prototype in Dominik's local workspace.
- Built to test the agent setup and to support a larger presentation where agent examples were requested.
- Contains only a small subset of modules.
- Includes a preview capability that the production GPT does not have.
- Is not a production replacement and is not identical to the Contentful solution being tested through GPT Actions.

## Long-term Product Direction

Marketing has different authoring needs from long-lived product and UX development. Marketing pages are often more individual, need to be created and published quickly, and may only be relevant for a limited period. Waiting for a centrally developed reusable component for every new marketing requirement can therefore be too slow or disproportionate for short-lived use cases.

AI-supported tools such as Claude Design make it increasingly practical to analyze, restructure and rebuild complete pages and page groups automatically. Dominik therefore does not see a fixed component catalogue as the long-term limiting authoring model for Marketing.

The long-term direction is a controlled generative layer: the LP Builder should be able to create new modules and pages within defined brand, design and technical rules rather than being limited to only pre-built permanent components. Control should come through design tokens, brand rules, layout and UX guidance, accessibility and SEO requirements, technical guardrails and pre-publish checks.

This is not intended to replace central product components where they are useful and durable. The goal is to avoid requiring a new permanent central component for every temporary or highly specific Marketing use case.

Marketing is the primary use case, but the same controlled generative approach may later be useful for other teams. UX has also had recurring needs for temporary elements or modules that do not necessarily justify a full permanent component-development process. The LP Builder should therefore not be designed in a way that artificially prevents broader future use.

The intended system boundaries are:

- Contentful handles CMS and publishing.
- A future central Marketing Asset Library / AWS-based setup provides reusable asset URLs.
- Salesforce or other central systems should own specialized capabilities such as forms, while the LP Builder integrates them through defined slots/modules.
- The Design System remains an important source for design tokens, rules and reusable patterns.
- The LP Builder generates and orchestrates the final page within those constraints.

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
- UX for design governance and potential future temporary-module use cases
- SEO for page-generation guardrails
- Matthias Brandstätter for Contentful ownership and long-term platform direction
- Mukhammadjon Kayumov for the current Contentful GPT Actions integration
- Beatrice for Core Team coordination and production-publishing alignment
- Daniel Herold, Director of Tech - Core/Builders Platform, for broader Builder-platform direction
- Contentful and Core Team stakeholders for the future target setup

## Confirmed Direction and Decisions

- The existing Custom GPT remains the current production tool until a viable replacement is ready.
- The current reusable approved modules and Design Library remain the basis of the existing production workflow.
- AEM-fragment output is the productive default.
- Complete HTML is reserved for explicit standalone preview or downloadable-file use.
- The Contentful test integration should augment the current LP Builder without disrupting the working Marketing workflow.
- Operational module work can be handled by Ciaran, while Dominik retains strategic and product responsibility.
- The reduced agent prototype should be treated as a testcase, not as the current product or the final Contentful solution.
- Create, update and preview can be validated through the duplicated GPT before deciding the long-term authoring surface.
- Production publishing is a separate Contentful implementation phase and is not yet available in `pro`.
- Long term, the LP Builder should evolve beyond a fixed component-only authoring model toward controlled generation of pages and modules within clear brand, design-token and technical guardrails.
- Central reusable components should still be used where they make sense, but Marketing should not depend on a new permanent component being developed for every temporary or highly specific use case.
- The future architecture should keep specialized concerns in their respective systems and let the LP Builder orchestrate them rather than rebuilding them internally.
- The platform direction should remain open to future use by other teams where temporary or highly specific modules are needed.

## Important Developments

- 2026-07-30: Ciaran identified that the system instructions incorrectly required a full HTML document for the AEM workflow.
- Dominik worked through the issue with Codex, updated the prompt, guardrails and usage documentation, added regression tests, updated the productive Custom GPT and verified the corrected behavior in a fresh chat.
- Draft PR #3, `Make AEM fragment output the LP Builder default`, was opened for review in `scout24-creative-ops/lp-builder`.
- 2026-08-11: The duplicated Contentful-enabled GPT successfully created and then updated an unpublished Contentful draft through GPT Actions in Dominik's own test session.
- 2026-08-12: Mukhammadjon added a direct preview link. Dominik verified the rendered draft and a subsequent GPT-driven update successfully.
- 2026-08-12: A publish test returned a misleading published state and public 404; Mukhammadjon clarified that real LP Builder production publishing is not yet possible because the renderer/content type exist only in `next`, not `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder.
- 2026-08-27: Dominik clarified the longer-term product direction: Marketing should be able to generate pages and modules within brand/design/technical guardrails without depending on a permanent central component for every use case. The same approach may later support other teams with temporary UI needs.

## Risks and Open Questions

- How to evolve from today's approved-module production model toward controlled generative modules without losing brand, UX, accessibility or technical quality.
- The long-term transition strategy from the productive Custom GPT remains open: Custom GPT, future agent and Claude Design are possible authoring options to evaluate after the Contentful workflow is stable.
- Existing users, modules and working practices must be preserved or migrated without disrupting current usage.
- Minor visual spacing/padding differences remain between the Contentful preview and the current LP Builder/AEM appearance.
- Real Contentful production publishing is not yet available and depends on transferring the required model/renderer to `pro` and aligning the publish flow.
- Historical user-survey findings and module requests have not yet been consolidated into a current roadmap.
- The draft PR still requires review before merge.

## Next Steps

1. Complete the Contentful MVP and production-publishing path.
2. Use the upcoming Core/Builders Platform alignment to discuss the broader target model, including the role of generative modules versus long-lived reusable components.
3. Continue representative Contentful validation while keeping the current production GPT operational.
4. Evaluate the long-term authoring surface separately, including agent and Claude Design options.
5. Develop the guardrail model needed for more flexible generated modules and pages after the MVP is stable.

## Last Confirmed

Long-term controlled-generative direction confirmed by Dominik on 2026-08-27. Contentful-enabled GPT create/update/preview flow remains confirmed in `next`; production GPT remains the operational standard and real Contentful `pro` publishing is not yet available.

## Related Context

See [Contentful Marketing MVP](contentful-marketing-mvp.md) and [Design Library and Builder Library](design-library.md).