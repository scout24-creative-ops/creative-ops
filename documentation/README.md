# Weekly Documentation

This folder contains the complete work documentation for each calendar week. Use one file per week with the format `YYYY-Www.md`, for example `2026-W30.md`.

## Core Rule

Every work-relevant update Dominik provides is recorded in the current weekly file. The documentation may include meetings, progress, discussions, open questions, delays, follow-ups, decisions, and other context that could matter for the end-of-week recap.

The weekly file is not a polished management summary. It is source material for summaries in chat. Its existence must not imply an event occurred when only a plan or proposal was documented. That short summary is not stored in the repository.

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
## Historical lookup and preservation

- For “What happened in August?” read the relevant dated entries across intersecting calendar weeks, not only the current project briefs. For 2026 August this includes boundary weeks 31 and 36.
- Preserve main initiatives, completed/validated outcomes, important difficulties, unsuccessful approaches and material effort. Summarize repeated micro-steps without losing those facts.
- Report effort qualitatively when documented; do not invent hours or treat entry count/file size as measured time spent.
- Current briefings may be shortened, but unique historical evidence must remain in weekly records or a linked reference archive.
- Superseded statements in a dated record are historical evidence, not active instructions. Resolve present status from newer confirmed context and tasks.
- Missing or unapproved summary checkpoints stay unknown; do not invent past summary approval.
- `2026-W31.md` is the canonical Week 31 record. `2026/week-31.md` is a stable history pointer after reconciliation of unique notes.
- [Reference archive](reference-archive/README.md) holds detailed earlier project snapshots; it does not create new active projects or tasks.
