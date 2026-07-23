# Weekly Documentation

This folder contains the complete work documentation for each calendar week. Use one file per week with the format `YYYY-Www.md`, for example `2026-W30.md`.

## Core Rule

Every work-relevant update Dominik provides is recorded in the current weekly file. The documentation may include meetings, progress, discussions, open questions, delays, follow-ups, decisions, and other context that could matter for the end-of-week recap.

The weekly file is not a polished management summary. It is the source material from which a later skill creates a short summary for Jorin in the chat. That short summary is not stored in the repository.

## Summary tracking

Each weekly file must distinguish updates that have already been included in a generated summary from updates that are still relevant for the next summary.

Use these sections:

```markdown
## Summary status

- Last summary created: YYYY-MM-DD
- Summary scope: Complete week through the previous checkpoint

## Updates since last summary

- YYYY-MM-DD — Project or workstream: Update
```

Rules:

- After a summary is generated and Dominik confirms it as the completed summary, update `Last summary created` and start a fresh `Updates since last summary` section.
- New work-relevant information added after that checkpoint belongs under `Updates since last summary`, even when it occurs in the same calendar week.
- `Erstelle ein Update seit der letzten Zusammenfassung.` uses only `Updates since last summary`.
- `Erstelle die vollständige Zusammenfassung für diese Woche.` may use the whole weekly file, including previously summarized material.
- Do not advance the checkpoint merely because a draft summary was generated. Advance it only after Dominik confirms that the summary is the completed version.
- Preserve project details in the durable project files when required; the checkpoint controls summary inclusion, not durable-context classification.
- When the calendar week changes, create the new weekly file with `Last summary created: none` and an empty `Updates since last summary` section.

## Durable Context Check

After recording an update here, check whether it also changes durable context:

- update the matching file in `projects/` when project status, scope, ownership, decisions, risks, milestones, or durable next steps change;
- update `profile/` for lasting role or responsibility changes;
- update `organization/` for lasting team, stakeholder, or reporting changes;
- update `github-setup/` for lasting repository, workspace, or protection changes.

Routine activity can remain only in the weekly documentation.

## Suggested Structure

```markdown
# Documentation — YYYY-Www

_Period: YYYY-MM-DD to YYYY-MM-DD_

## Summary status

- Last summary created: none
- Summary scope: No completed summary yet

## Updates since last summary

- ...
```

Keep entries factual and understandable. Preserve useful details, but do not invent conclusions or promote temporary events into durable project truth.