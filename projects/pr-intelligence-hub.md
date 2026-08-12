# PR Intelligence Hub

## Purpose

The PR Intelligence Hub is a joint project with the PR & Corporate Communications team. It is intended to combine selected internal and external signals, make relevant developments visible earlier and give the PR team a stronger basis for proactive decisions.

The operating logic is:

`Internal and external signals -> PR Intelligence Hub -> PR-oriented classification -> human review -> possible PR action`

The hub does not communicate externally and does not make autonomous decisions. The PR team reviews, assesses and decides.

## Long-term Goal

The hub should help the team:

- identify relevant topics and developments earlier;
- classify opportunities, risks and observations more consistently;
- connect external developments with internal data and context;
- support more proactive PR work;
- turn information into compact, understandable decision support;
- make faster and better-founded decisions.

The intended approach is deliberately practical and incremental rather than technically broad from the start.

## Current MVP Direction

The MVP should be defined explicitly before implementation, including what it should contain and be able to do and what is deliberately out of scope.

The current direction is:

- use the team's existing daily Medienspiegel as the first external source candidate;
- use a deliberately stable fake Medienspiegel during MVP development so test inputs do not change continuously;
- test with one clearly PR-relevant signal that can be supported by internal data and two additional signals that are not relevant or are not supported by internal data;
- connect selected external signals with a small number of directly usable internal data sources or contexts;
- use a simple and explainable evaluation logic;
- keep mandatory human review of every result.

The fake Medienspiegel setup is currently a supported test hypothesis, not yet the final MVP specification.

Slack remains a possible output channel, but the final communication and operating setup still needs to be agreed with the team.

## Potential Sources

### External

The first concrete MVP source candidate is the daily `Medienspiegel`, which currently arrives by email as a PDF and is manually stored by the PR team in SharePoint.

Other possible sources remain:

- selected relevant media and industry sources;
- market and trend reports;
- publicly available studies;
- competitor and industry signals.

### Internal

Possible internal sources include:

- company data;
- search and demand developments;
- product and usage data;
- marketing and campaign information;
- expert input from relevant teams;
- existing internal AI or data solutions.

ScoutData may become an important internal source because it can answer natural-language questions based on internal company data. Any numbers or claims still require validation of definitions, limitations, data quality and external-use suitability.

## Core Workstreams

### Sources and Access

- identify internal and external sources;
- clarify access and responsible contacts;
- assess reliability and freshness;
- identify missing data or source gaps;
- select a small MVP source set.

### Evaluation Logic

- define what is relevant for PR;
- collect examples of opportunities, risks and observations;
- classify relevance and urgency;
- define when internal and external signals belong together;
- test the logic with real PR examples;
- keep the criteria deliberately simple.

### Outputs and Usage

- define the outputs the team needs;
- agree content depth and detail;
- align frequency and output channel;
- define review and feedback processes;
- agree how MVP usefulness will be evaluated;
- clarify roles, responsibilities and ways of working.

## Current Status

- Kick-off, concept and roadmap are complete.
- Dominik held the follow-up session with the PR team on 2026-08-12 and reiterated the small-step MVP approach.
- The team contributed first MVP ideas and supported the fake-Medienspiegel approach as a stable test setup.
- The next priority is not implementation yet. The team should first define its project organization and the MVP boundary clearly.
- Dominik wants the team to establish how communication works, who owns which responsibilities or workstreams, how decisions are handled and how follow-up meetings are organized.
- The intended ambition is to have something tangible by the time Lennart returns from parental leave. If a working MVP is not realistic by then, the minimum useful outcome should be a clear team setup, an agreed MVP definition, planned steps and assigned roles.
- Capacity is currently a material risk because Arne is expected to be unavailable until mid-October due to parental leave and the PR team is therefore strongly understaffed.
- The team has a meeting with Jorin on 2026-08-13 and plans to give Dominik feedback on available capacity and continuation of the MVP work by the end of this week.

## Dominik's Role

Dominik provides strategic and organizational guidance rather than building the agents or technical solution himself.

His contribution includes:

- structuring the project;
- developing the target picture, concept and roadmap;
- helping the team define the MVP;
- moderating workshops and alignment;
- clarifying roles and responsibilities;
- connecting PR, Data, AI and other relevant stakeholders;
- reducing complexity and enabling a practical start;
- guiding the transition from idea to first usable pilot.

Operational implementation and later use should remain with the PR team.

## Key Stakeholders

- Jorin Verges — VP Marketing & Communications; leadership context and potential sponsor
- Lennart Dannenberg — Teamlead PR & Corporate Communications; primary functional counterpart
- Arne Hartwig — PR & Communications Manager
- Hannah Miller — Working Student
- Johanna Fitschen — PR & Communications Manager
- Theresa Lewandowski — Senior Manager Corporate Communications
- Viktoria Götte — Senior Manager Corporate Communications
- Benjamin Albus — Lead Communications; potentially relevant communications stakeholder
- Allan Fitzpatrick — Lead Automation Engineer; potential technical or methodological support
- Lars Brenncke — Lead AI Operations; potential AI operations support
- Florian Kube — Head of AI Solutions & Analytics; potential data and AI stakeholder

## Next Steps

1. Wait for the PR team's capacity feedback after its discussion with Jorin, expected by the end of the current week.
2. If sufficient capacity remains, define the team's working model: communication, ownership, responsibilities, decision handling and follow-up cadence.
3. Define the MVP cleanly, including required inputs, capabilities, output and explicit out-of-scope items.
4. Confirm whether the fake Medienspiegel becomes the first fixed test dataset and define its concrete test signals.
5. Only then move into the first implementation and validation cycle.

## Guardrails

- start small rather than designing a large solution too early;
- define the MVP boundary before implementation;
- prioritize usefulness and clarity over technical complexity;
- use stable test inputs during MVP development where useful;
- use a few reliable sources instead of maximizing input volume;
- keep human review central;
- leave communication relevance decisions with the PR team;
- clarify ownership early;
- test the MVP before expanding it;
- do not use internal data externally without validation.

## Open Questions

- Does the PR team have enough capacity to continue the MVP work in the current staffing situation?
- What is the final MVP definition and explicit out-of-scope boundary?
- Which internal data source will be used for the first test?
- Which team members own the individual workstreams?
- How will project communication, decisions and follow-up meetings be organized?
- What is the final output format and channel?
- What signals define a successful first pilot?
- Which technical or data support is actually needed after the MVP is agreed?

## Last Confirmed

2026-08-12
