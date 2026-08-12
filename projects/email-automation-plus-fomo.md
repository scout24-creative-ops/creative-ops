# E-Mail Automation – Plus FOMO

## Purpose

Develop a personalized multi-touchpoint FOMO and conversion concept for Suchen+ aimed at Basic users who have viewed or saved paywalled listings but have not contacted the provider or converted to Plus.

## Current Status

Dominik's design work for the current Plus FOMO email is complete and has been delivered.

The email will now be built directly in Iterable. The previously considered handover into Mitch's newer AWS/GitHub module process will not be used for this implementation.

Dominik does not currently know why that implementation decision changed because it happened while he was out sick, but no further design delivery is expected from him for the current mail.

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
- delivered the expected design for implementation.

## Technical Direction

The current implementation path is direct construction in Iterable.

The previously explored local reference implementation and technical learnings remain useful as design and rendering context, but Mitch's newer AWS/GitHub module process is not the implementation route for this mail.

## Important Decisions

- The property listing is the main visual and narrative focus of the mail.
- The mail should present one clear primary CTA rather than several competing actions.
- The Suchen+ value proposition should be consolidated into one understandable message.
- The deactivated-exposé case is not handled through email logic; the target-page experience is a separate product-dependent use case.
- New product placements or persistent banners should not be presented as immediately deliverable without Product or App commitment.
- The current mail will be implemented directly in Iterable.
- Mitch's AWS/GitHub module process will not be used for this implementation.

## Dependencies and Open Questions

- Final campaign frequency, orchestration and the transition from non-voucher to voucher communication remain broader project questions.
- Deep-link and placement mappings should be maintained consistently in the implementation setup.
- The reason for changing the implementation path from the AWS/GitHub module process to direct Iterable construction has not been confirmed to Dominik.

## Next Steps

No active Dominik task remains for the current email design delivery. Implementation continues in Iterable with the responsible team.

## Last Confirmed

2026-08-12.

## Related Context

See [HeyImmo automated HomeOwner mail](heyimmo-homeowner-mail.md), [E-Mail Builder](email-builder.md) and [Design Library and Builder Library](design-library.md).
