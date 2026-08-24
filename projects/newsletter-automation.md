# Newsletter Automation

## Purpose

This project documents the assessment of newsletter automation and the conditions under which automation could become useful. The discovery with Stefanie Mersmann showed that the current constraint is not primarily newsletter production effort, but insufficient user and journey information to select meaningfully relevant content.

## Current Status

- Dominik met with Stefanie Mersmann on 2026-08-24 after Jorin had suggested they connect because Stefanie was reportedly already working on automation in her area.
- The meeting corrected that understanding: Stefanie is not currently running a concrete newsletter-automation initiative that Dominik should connect to.
- Stefanie is responsible for newsletter content, building the mails and creating the associated pages.
- Newsletters are primarily used to promote ImmoScout24 products while using a newsletter-style editorial structure.
- Landlord newsletters perform well, particularly with contextual topics such as new legislation.
- Tenant newsletters are less successful because the team cannot reliably determine where recipients are in the rental journey, for example whether they are casually browsing, actively searching, have already found a property or have just moved in.
- These journey states would be valuable triggers for more relevant content but are currently not available with sufficient reliability.
- Stefanie has tested Central Orchestration in B2C, where target groups are selected technically based on estimated product-purchase likelihood rather than manually. According to Stefanie, this currently works well only for a limited number of selected products.

## Decision

Dominik and Stefanie agreed that there is currently no newsletter workflow that should be automated. Without better recipient and journey signals, automation would not solve the underlying relevance problem or enable better content selection.

Newsletter automation is therefore not an active automation use case for now. A future restart should depend on materially better user, journey or targeting information that creates useful content triggers.

## Dominik's Role

The discovery is complete. No further automation work is planned unless the underlying data and targeting capabilities change enough to create a meaningful use case.

## Key Stakeholders

- Stefanie Mersmann — Content team; responsible for newsletter content, mail creation and associated pages
- Dominik Böhme — discovery and automation assessment
- Jorin Verges — suggested the discovery connection
- B2C / Central Orchestration stakeholders — relevant only if targeting capabilities become a viable dependency for a future restart

## Revisit Trigger

Reassess only if reliable user-journey or targeting signals become available that make content selection materially more relevant.

## Last Confirmed

2026-08-24
