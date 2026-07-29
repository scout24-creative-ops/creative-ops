# E-Mail Automation – Plus FOMO

## Purpose

Develop a personalized multi-touchpoint FOMO and conversion concept for Suchen+ aimed at Basic users who have viewed or saved paywalled listings but have not contacted the provider or converted to Plus.

## Current Status

The first email concept has been redesigned and implemented as a local responsive reference mail in the `email-automation` repository. The current version has been iteratively optimized for desktop, mobile and Outlook rendering, including VML support for the CTA and voucher-code pill, hosted test assets, dynamic listing data and rendering stress tests.

The mail is ready for stakeholder feedback. The project will be presented on 2026-07-30 without Dominik attending. Feedback may lead to another design or implementation round.

A second email variant exists as a related concept and is expected to reuse most of the first implementation because the structure is very similar.

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
- kept the productive AWS, Iterable and module platform untouched while preparing the local implementation for later handover.

## Technical Direction

The local implementation lives in Dominik's `email-automation` repository and follows the same safe working model as the HeyImmo email work:

- complete local HTML reference first;
- separate dynamic exposé module;
- desktop, mobile and stress-test previews;
- Outlook-compatible VML for supported rounded elements;
- dynamic listing title, address, image and target link;
- optional personalized voucher data;
- later handover into Mitch's AWS/GitHub module process only after review and alignment.

The dynamic property image uses the IS24 DIMS3 resizing service. The chosen resize variant still needs final testing with real exposé image paths, file sizes and source-image formats.

## Important Decisions

- The property listing is the main visual and narrative focus of the mail.
- The mail should present one clear primary CTA rather than several competing actions.
- The Suchen+ value proposition should be consolidated into one understandable message.
- The deactivated-exposé case is not handled through email logic; the target-page experience is a separate product-dependent use case.
- New product placements or persistent banners should not be presented as immediately deliverable without Product or App commitment.
- The first technical implementation remains local until stakeholder feedback and a safe integration process are confirmed.

## Dependencies and Open Questions

- Feedback from the 2026-07-30 presentation may change messaging, design or scope.
- Final campaign frequency, orchestration and the transition from non-voucher to voucher communication need confirmation.
- Deep-link and placement mappings should be maintained in the shared JSON lookup that is intended as a source of truth.
- The DIMS3 resize URL must be validated with real listing images and resulting file sizes.
- The deactivated-listing experience requires Product support and may use a revised page, CTA or embedded message.
- Push notifications cannot currently preload a voucher code into checkout.
- Productive maximum voucher-code length must be agreed for Outlook-safe rendering.
- The outer grey card may remain square in Windows Outlook until a robust dynamic-height rounded-container solution is validated.
- Final ownership of launch, campaign configuration, deployment and activation still needs alignment.

## Next Steps

1. Wait for feedback from the 2026-07-30 presentation.
2. Incorporate confirmed feedback into both email variants and the first implementation.
3. Validate the DIMS3 resize prefix with real exposé images, including resulting dimensions, crop behavior and file size.
4. Confirm deep-link, variable, fallback and voucher-code constraints.
5. After approval, test Mitch's new AWS/GitHub module process in a controlled and aligned way.
6. Prepare the second similar email variant by reusing the established technical structure.

## Last Confirmed

Project scope, Dominik's contribution and current status confirmed on 2026-07-29 from the implementation work and project meeting transcript.

## Related Context

See [HeyImmo automated HomeOwner mail](heyimmo-homeowner-mail.md), [E-Mail Builder](email-builder.md) and [Design Library and Builder Library](design-library.md).
