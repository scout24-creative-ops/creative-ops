# LP Builder Contentful — Test Prompt Guidelines

## Purpose

Use these guidelines when testing the Contentful LP Builder GPT / Actions. The goal is to make technical smoke tests as fast, isolated and easy to diagnose as possible.

## Default rule for test prompts

When Dominik does **not** explicitly name modules and the current task is **not** about testing or developing a specific module, use the **smallest possible test prompt** that is sufficient to validate the technical question.

Do not create a broad demo page or add extra modules just to make a test more comprehensive.

Prefer:

- one clear test objective;
- the minimum number of Actions needed;
- the minimum amount of generated content;
- explicit `STOP` behavior when an Action or authentication fails;
- no follow-up Actions after a failure;
- no publish/update/create operations unless those operations are the actual subject of the test;
- technical result fields that make the outcome easy to diagnose.

Only use larger or module-rich test pages when Dominik explicitly asks for module coverage or when the technical issue being tested requires those modules.

## Reference: minimal READ smoke test

Use this pattern for a pure READ/authentication test:

```text
Führe ausschließlich einen READ-Test auf dieser bestehenden LP-Builder-Seite aus:

/dev-lp-builder-contentful-v01-test

Nichts verändern.

Gib mir nur zurück:

- Read erfolgreich: Ja/Nein
- Auth erfolgreich: Ja/Nein
- Entry ID, falls lesbar
- Slug
- verwendete Read-Action
- vollständiger Fehlertext, falls der Read fehlschlägt

Wichtig:
- kein Update
- kein Publish
- keine neue Seite
- keine weiteren Actions nach einem Fehler
- keine manuellen Tokens oder Secrets

Wenn Authentifizierung oder Read fehlschlagen:
STOP und gib den technischen Fehlertext so vollständig wie möglich zurück.
```

## Current context

As of 2026-09-16, the Contentful GPT connection is working stably again after the latest schema/auth update. The renderer-side `lpbuilder-bridge.css` issue was also reported fixed and a generated smoke-test page confirmed that the Bridge is loaded centrally by the renderer rather than being added at page level. Continue to use focused smoke tests to validate individual Action paths and regressions.