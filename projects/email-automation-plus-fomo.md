# E-Mail Automation – Plus FOMO

## Purpose

Develop a personalized multi-touchpoint FOMO and conversion concept for Suchen+ aimed at Basic users who have viewed or saved paywalled listings but have not contacted the provider or converted to Plus.

## Current Status

The original Plus FOMO design delivery is complete. A new related follow-up concept for deactivated saved listings and the Bewerbungsassistent has now been prepared as a real HTML email reference in the existing local email project.

Two structural variants exist: V1 without and V2 with an additional `Ähnliche Angebote ansehen` CTA below the deactivated property card. For visual stakeholder comparison, each structure is available with three alternative assistant-box background colors: blue `#00DFFF`, yellow `#F5F200` and grey `#F5F5F5`. All comparison variants use the same Charcoal `#333333` primary CTA so the only visual difference is the box background.

The variants were tested in the rendering tool, refined for dark-mode compatibility, and sent to a colleague for comparison/review.

The implementation path for the earlier Plus FOMO mail remains direct construction in Iterable. The previously considered handover into Mitch's newer AWS/GitHub module process is not the implementation route for that mail.

## Scope and Channel Direction

The broader project is not limited to email. The intended channel mix includes:

- personalized email;
- push notifications;
- existing embedded or in-app messages;
- possible later product placements on exposé or deactivation pages;
- possible alignment with paid retargeting.

The first confirmed use cases focus on Basic users who have repeatedly viewed a paywalled listing or saved one without contacting or converting. The last relevant listing is intended to be the central personalization and FOMO trigger.

The working campaign logic is staged: first communicate without a voucher, then later add a personal voucher after repeated contacts. Saved-listing and deactivated-listing cases are follow-up scenarios rather than part of the first immediate delivery.

## Dominik's Contribution

Dominik:

- reviewed Alisa's two initial email designs;
- aligned his feedback with Alisa;
- identified communication, hierarchy, UX and robustness issues in the initial concepts;
- created two revised designs with one clear primary action, a stronger property focus, more robust variable-content handling and a consolidated Suchen+ value proposition;
- implemented the first revised design together with Codex as a full local email reference and reusable dynamic exposé module;
- prepared responsive desktop and mobile behavior, rendering tests, stress cases, hosted assets and Outlook/VML support;
- iteratively corrected typography, spacing, image handling, footer usage, mobile width behavior and Outlook-specific rendering issues;
- delivered the expected design for implementation;
- prepared the new Bewerbungsassistent/deactivated-listing HTML concept in two structural variants using existing email modules and project rules;
- validated the concept in the rendering tool, including the dynamic property image, corrected headline wording, established dark-mode-safe ImmoScout24 logo, Outlook/VML button behavior and background-color comparison variants;
- sent the six comparison templates and matching review versions to a colleague for visual review.

## Technical Direction

The current implementation path for the earlier Plus FOMO mail is direct construction in Iterable.

The local email reference implementation remains useful as design and rendering context. The new Bewerbungsassistent concept intentionally reuses the existing local email project, existing footer/app-download patterns, email-safe table structure and Outlook/VML patterns rather than introducing a separate architecture.

## Important Decisions

- The property listing is the main visual and narrative focus of the mail.
- The mail should present one clear primary CTA rather than several competing actions.
- The Suchen+ value proposition should be consolidated into one understandable message.
- The deactivated-exposé case is now being explored as a dedicated follow-up email concept around the Bewerbungsassistent rather than through special logic inside the earlier Plus FOMO mail.
- New product placements or persistent banners should not be presented as immediately deliverable without Product or App commitment.
- The current comparison set keeps CTA styling constant and varies only the assistant-box background to make stakeholder evaluation cleaner.
- The earlier Plus FOMO mail will be implemented directly in Iterable.
- Mitch's AWS/GitHub module process will not be used for that implementation.

## Dependencies and Open Questions

- Colleague feedback is pending on the preferred Bewerbungsassistent visual variant.
- Final campaign frequency, orchestration and the transition from non-voucher to voucher communication remain broader project questions.
- Deep-link and placement mappings should be maintained consistently in the implementation setup.
- The reason for changing the earlier implementation path from the AWS/GitHub module process to direct Iterable construction has not been confirmed to Dominik.

## Next Steps

1. Review colleague feedback on the blue, yellow and grey Bewerbungsassistent comparison variants.
2. Select the preferred visual treatment and, if approved, consolidate the chosen variant for handoff/implementation.
3. Keep the broader campaign orchestration and channel logic separate from the email-design implementation itself.

## Last Confirmed

2026-09-16: The new Bewerbungsassistent/deactivated-listing HTML concept was tested in the rendering tool and delivered to a colleague as six comparison templates plus matching review files. The three background variants are blue `#00DFFF`, yellow `#F5F200` and grey `#F5F5F5`, all with the same Charcoal primary CTA.

## Related Context

See [HeyImmo automated HomeOwner mail](heyimmo-homeowner-mail.md), [E-Mail Builder](email-builder.md) and [Design Library and Builder Library](design-library.md).
