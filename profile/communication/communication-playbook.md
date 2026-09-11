# Dominik Communication Playbook

Use this as the central, evolving calibration for Dominik's internal work communication. It supplements the general Writer guidance with format-specific patterns that have been confirmed in real work.

Before drafting, load only the section that matches the requested format. The examples are decision aids, not text to copy mechanically. When Dominik approves a meaningful revision, add the concise before/after example and the rule it demonstrates.

## Weekly summaries for colleagues

### Purpose

Show a small number of concrete, understandable outcomes from the week. Prioritize what Dominik initiated, decided, tested, brought close to completion or aligned into implementation.

### Selection

- Prefer, in order: concrete initiatives or decisions; tested or validated progress; reached milestones; aligned implementation steps.
- Add strategic context only when it makes the concrete result understandable.
- Do not include a topic mainly because it was discussed, or because it established that no action is currently appropriate, unless that clarification materially affects the team.
- Use the canonical project name and emoji. Write in English, with one compact bullet per workstream.

### Manager-facing Friday Slack summary calibration

Dominik posts the Friday `Summary of the week` in a Slack channel for his manager. This version must sit at management altitude rather than implementation altitude.

Use this pattern by default:

- Start with `Dominik` on its own line and `This week’s progress` below it.
- Use one bullet per project or workstream only. Never repeat the same project in multiple bullets.
- Keep each bullet focused on what Dominik moved forward, aligned, created, validated or opened up.
- Mention collaborators or teams when they show progress or alignment, for example `with Ulrike Sperlich` or `with the Core Team`.
- Translate technical work into business or collaboration progress. Avoid implementation metrics, file sizes, exact payload sizes, error codes, crawl counts, asset counts, class names, paths, tooling internals and similar details unless Dominik explicitly asks for a technical version.
- Exclude topics where nothing materially new happened during the week.
- Prefer wording such as `continued building out`, `started the first concrete work`, `aligned the main open topic`, `created new draft concepts`, or `opened a potential use case`.

Approved Week 37 direction:

- 🎓 **AI Enablement Series** – Launched the first recurring AI Enablement session format with a clear structure for learning, peer sharing and open discussion. The setup is intentionally lightweight, so the format can continue regularly without creating too much preparation overhead.
- 🤖 **Landing Page Builder** – Continued building out the LP Builder as a practical tool for real Contentful work. Several additional modules were added, and the Builder’s Contentful integration was further developed together with the Core Team developer to support a more scalable migration workflow.
- 🔗 **Contentful Migration** – Started the first concrete migration work together with Ulrike Sperlich. The focus was on structuring how to work together, clarifying priorities and aligning the most important topic — forms — in a kickoff with the Core Team.
- ✉️ **E-Mail Automation – Seeker | Plus FOMO** – Created new draft concepts for a FOMO email that guides users into the Bewerbungsassistent. This moves the automation work from general setup further toward concrete user-facing communication.
- 🤝 **Fotocasa** – Presented the LP Builder to Fotocasa and opened a potential use case for them. They are interested in exploring it because they currently rely on an external agency for landing pages, which makes the process slower and more expensive.

### Calibration example — Week 35, 2026

**Less effective**

- 🔗 **Marketing Content Platform** – Narrowed the asset topic to a small migration-storage pilot, keeping the immediate need focused on stable image URLs while setting a scalable longer-term direction for a shared Marketing Asset Library.
- 🔗 **Contentful Migration** – Turned the Anwenderhandbuch into a concrete migration blueprint, validated the Claude Design approach and created an asset inventory for 30 pages to support repeatable migration work.
- 📨 **Newsletter Automation** – Clarified with Stefanie that automation is not the current bottleneck; better recipient and journey signals are the key prerequisite for more relevant newsletter communication.

**Improved**

- 🔗 **Marketing Content Platform** – Initiated an alignment with Matthias and Paul to assess whether a central Marketing Asset Library as a single source of truth is useful and feasible. AWS storage with an attached CDN emerged as a promising direction and will now be validated.
- 🔗 **Contentful Migration** – Selected the first Product Marketing B2B use case and tested the initial migration flow with the new MVP. The next steps are now being aligned with the B2B team and Beatrice’s team.
- 🤖 **Landing Page Builder** – Brought the MVP close to completion. The remaining step is the move to the live environment, and the developer has already received the assignment.

**What this demonstrates**

- Lead with the action and outcome that colleagues can understand, not the internal programme label or technical framing.
- Make the relevance of a pilot clear through the tested step and the teams now involved.
- Exclude secondary discovery whose main result is a current non-decision.

## AI Enablement Series

Use these patterns for Topic Calls, agendas, reminders, session updates and follow-ups. Keep the series collaborative: do not imply that Dominik prepares every contribution or owns participants' content.

- **Topic Call:** State the upcoming session and ask clearly for contributions. Say in one sentence what kind of input is useful.
- **Agenda or reminder:** Lead with the date or immediate purpose, list the agenda compactly and name any preparation explicitly.
- **Session update:** State what is happening, why it is useful and what participants should do next.
- **Follow-up:** Thank participants briefly when appropriate, capture the few useful outcomes or shared resources and make the next action explicit.

### Approved Agenda / Reminder pattern

For recurring AI Enablement Agenda / Reminder posts, use the confirmed 2026-09-07 pattern as the default starting point.

- Output both German and English every time unless Dominik explicitly asks for one language only.
- Put German first and English directly below it; do not add separate `DE` / `EN` labels.
- Use one short heading: `🎓 AI Enablement | Morgen, [TIME]` / `🎓 AI Enablement | Tomorrow, [TIME]`.
- Start with a friendly greeting and `@hier` / `@here`, followed by one short sentence that the next AI Enablement session is happening and what participants can expect.
- Use exactly three compact bullets when all three pillars are present:
  - `📚 Learn:` topic + one-line explanation.
  - `🔍 Show & Share:` contributor names with short topic labels in parentheses, separated by `·`.
  - `💬 Explore:` the discussion topic as an open question or exploration when no decision has been made.
- Close simply with `Bis morgen! 🙂` / `See you tomorrow! 🙂`.
- Keep the English version structurally equivalent to the German version rather than rewriting it into a different style.

### Scout Wiki pages

Use the `Creative Operations` Scout Wiki space as the shared home for the Series.

- **Hub page:** Keep it deliberately reduced: one short purpose statement, one compact callout naming the next session, then the dynamic list of session subpages. Do not add programme explanations, large grids or extra status sections.
- **Session detail page:** Use the existing 08.09.2026 page as the literal source template and duplicate it in the Wiki for future sessions so its manual layout is preserved. Start with the page title only, then use three columns for `01 · Learn`, `02 · Show & Share` and `03 · Explore`.
- In the Wiki editor, add a manual divider at the top of each column and use a large heading plus only the minimum session content below it. Do not add explanatory hero text, duplicate agenda sections or extra callouts.
- Below the slide-like agenda, retain only three compact collapsible areas: `Live-Notizen & wichtigste Erkenntnisse`, `Aufzeichnung & Ressourcen` and `Entscheidungen & Follow-ups`.

Add approved examples here as the recurring formats become established.

## General Slack and project updates

- Lead with the result, decision or request; do not begin with background.
- Give only the context needed for colleagues to understand why it matters.
- Use short paragraphs or compact bullets when there are multiple points.
- Be direct about a required action, owner or next step when it is confirmed.
- Keep the tone open, practical and natural; avoid promotional or corporate phrasing.

Add approved examples here when a recurring posting direction has emerged.
