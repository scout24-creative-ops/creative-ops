# Landing Page Builder

## Purpose

Enable Marketing teams to create landing pages faster and more independently through a controlled, reusable module system.

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
- Keeps the existing controlled Marketing module workflow and generated HTML approach.
- Uses configured GPT Actions for Contentful read, draft creation, draft update and explicit publish operations.
- Draft creation and update require explicit approval; publishing is separate.
- Dominik verified create, direct preview and update successfully in `next` on 2026-08-12.
- The direct preview link is now returned from the GPT flow and supports review before any production-publishing step.
- Production publishing is not yet available because the LP Builder content type and renderer have not been transferred to Contentful `pro`.

### Landing Page Builder Agent Prototype

- A separate, highly reduced prototype in Dominik's local workspace.
- Built to test the agent setup and to support a larger presentation where agent examples were requested.
- Contains only a small subset of modules.
- Includes a preview capability that the production GPT does not have.
- Is not a production replacement and is not identical to the Contentful solution being tested through GPT Actions.

### Future Authoring Options

- A future agent remains one possible replacement for the production Custom GPT once the target architecture is stable.
- Matthias Brandstätter has also suggested evaluating Claude Design as a possible alternative authoring surface for the LP Builder.
- Neither option is a current migration decision. The working GPT-based Contentful MVP should continue to be validated without blocking on the long-term interface choice.
- The integration/service layer should ideally remain reusable by a future agent or other authoring client rather than being tied only to the Custom GPT frontend.

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
- Matthias Brandstätter for Contentful ownership and long-term platform direction
- Mukhammadjon Kayumov for the current Contentful GPT Actions integration
- Contentful and Core Team stakeholders for the future target setup

## Confirmed Direction and Decisions

- The existing Custom GPT remains the current production tool until a viable replacement is ready.
- Reusable approved modules and the Design Library remain the basis of the creation workflow.
- AEM-fragment output is the productive default.
- Complete HTML is reserved for explicit standalone preview or downloadable-file use.
- The Contentful test integration should augment the current LP Builder rather than replace its controlled Marketing module approach with Storybook-driven generation.
- Operational module work can be handled by Ciaran, while Dominik retains strategic and product responsibility.
- The reduced agent prototype should be treated as a testcase, not as the current product or the final Contentful solution.
- Create, update and preview can be validated through the duplicated GPT before deciding whether the long-term authoring surface should remain a GPT, move to an agent or use another interface such as Claude Design.
- Production publishing is a separate Contentful implementation phase and is not yet available in `pro`.

## Important Developments

- 2026-07-30: Ciaran identified that the system instructions incorrectly required a full HTML document for the AEM workflow.
- Dominik worked through the issue with Codex, updated the prompt, guardrails and usage documentation, added regression tests, updated the productive Custom GPT and verified the corrected behavior in a fresh chat.
- Draft PR #3, `Make AEM fragment output the LP Builder default`, was opened for review in `scout24-creative-ops/lp-builder`.
- 2026-08-11: The duplicated Contentful-enabled GPT successfully created and then updated an unpublished Contentful draft through GPT Actions in Dominik's own test session. A fresh chat resolved an earlier session-level Action availability issue.
- 2026-08-12: Mukhammadjon added a direct preview link. Dominik verified the rendered draft and a subsequent GPT-driven update successfully.
- 2026-08-12: A publish test returned a misleading published state and public 404; Mukhammadjon clarified that real LP Builder production publishing is not yet possible because the renderer/content type exist only in `next`, not `pro`.
- 2026-08-12: Matthias Brandstätter suggested evaluating Claude Design as a possible future authoring surface for the LP Builder.

## Risks and Open Questions

- The long-term transition strategy from the productive Custom GPT remains open: Custom GPT, future agent and Claude Design are possible authoring options to evaluate after the Contentful workflow is stable.
- It is unclear how much further investment should go into the current production GPT before the replacement is ready.
- Existing users, modules and working practices must be preserved or migrated without disrupting the current strong usage.
- Minor visual spacing/padding differences remain between the Contentful preview and the current LP Builder/AEM appearance.
- Real Contentful production publishing is not yet available and depends on transferring the required model/renderer to `pro` and aligning the publish flow.
- Historical user-survey findings and module requests have not yet been consolidated into a current roadmap.
- The draft PR still requires review before merge.

## Next Steps

1. Ask Ciaran to review PR #3 and confirm the corrected output contract works for his workflow.
2. Merge the reviewed change when approved.
3. Continue representative Contentful test-GPT validation in `next`, using the direct preview link for review.
4. Let the Contentful/Core implementation progress the `pro` renderer/content-type and real production-publishing phase before further publish validation.
5. Treat visual spacing/padding parity as follow-up refinement after the core integration is stable.
6. Evaluate the long-term authoring surface separately, including agent and Claude Design options, without blocking the current GPT-based MVP.
7. Keep the current Custom GPT operational for existing Marketing users and continue necessary module/maintenance work through Ciaran and Linear tickets.

## Last Confirmed

Contentful-enabled GPT create/update/preview flow confirmed in `next` on 2026-08-12; production GPT remains the operational standard and real Contentful `pro` publishing is not yet available.

## Related Context

See [Contentful Marketing MVP](contentful-marketing-mvp.md) and [Design Library and Builder Library](design-library.md).