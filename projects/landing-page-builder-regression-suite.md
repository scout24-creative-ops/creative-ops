# Landing Page Builder — GPT Regression Suite

## Purpose

Reusable acceptance test for the current `LP Builder – Contentful` Custom GPT configuration. Run this suite after meaningful GPT package changes to verify the core authoring flow with as few prompts as possible.

Keep the GPT configuration unchanged for the entire run. Use a disposable slug and page. If any step fails, stop and investigate before continuing.

## Expected GPT package baseline

Instructions field:

- `main-instructions.md`

Knowledge:

- `component-library.html`
- `building-policy.md`
- `contentful-integration.md`
- `migration-mode.md`
- `cosma-icons-static.md`

Action schema:

- Use the current Mukhammadjon-provided OpenAPI schema as read-only SSOT. Do not modify it as part of GPT package changes.

The current package intentionally uses `component-library.html` as the user-capability SSOT and `building-policy.md` for composition/editing policy. `migration-mode.md` contains the migration-only behavior for `LOCKED_IMPORT` and `CRAWL_REBUILD`. Pending module-specific policies do not block module availability; canonical Component Library markup plus global policy applies until those policies are defined.

## Test 1 — Blueprint CREATE

**Model:** GPT-5.6 Sol  
**Reasoning:** Mittel

Replace `<RUN_ID>` with a unique value before running.

```text
Erstelle eine neue LP-Builder-Testpage als Draft.

Slug:
`/lpb-regression-test-<RUN_ID>`

Main Title:
`LP Builder Regression Test <RUN_ID>`

Verwende das aktuell definierte Blueprint aus der Building Policy.

Erwartete Module Sequence:

1. `hero-split`
2. `steps-3col`
3. `teaser-split-image-right`
4. `teaser-split-image-left`
5. `counter-animated`
6. `accordion`

Vorgehen:

1. Prüfe vor CREATE den exakten Slug auf ein bestehendes Entry.
2. Falls der Slug bereits existiert:
   STOP. Kein bestehendes Entry verändern.
3. Falls der dokumentierte 404 für einen nicht vorhandenen Slug zurückkommt:
   CREATE fortsetzen.
4. Verwende ausschließlich kanonische Module und Komponenten aus der aktuell
   geladenen Component Library.
5. Wende die aktuell gültigen Spacer-Regeln aus der Building Policy an.
6. Erstelle die Page als Draft.
7. Nicht publishen.

Nach erfolgreichem CREATE die Page einmal erneut lesen und prüfen:

- Entry existiert
- Slug korrekt
- Main Title korrekt
- Module Sequence exakt wie oben
- genau ein `lpb-explicit-spacing` Root
- keine Bridge-/Runtime-Assets im gespeicherten HTML
- Spacer-Regeln eingehalten
- Status Draft

Bei Action-, JSON-, Serialization-, Auth-, Validation- oder anderem technischen Fehler:
STOP.
Keinen Retry ausführen.

Gib nur zurück:

- Create erfolgreich: Ja/Nein
- Entry ID:
- Slug:
- Main Title:
- Module Sequence:
- Spacer-Regeln eingehalten: Ja/Nein
- genau ein `lpb-explicit-spacing` Root: Ja/Nein
- Bridge-/Runtime-Assets im gespeicherten HTML: Ja/Nein
- Status:
- htmlBytes:
- htmlSha256:
- Preview:
- vollständiger technischer Fehlertext, falls vorhanden:
```

Record the returned Entry ID and slug for Tests 2 and 3.

## Test 2 — Combined EDIT stress test

**Model:** GPT-5.6 Sol  
**Reasoning:** Hoch

Replace `<ENTRY_ID>` and `<CURRENT_SLUG>` with the values returned by Test 1.

```text
Führe einen kombinierten Edit-Regressionstest auf dieser bestehenden Draft-Page durch:

Entry ID:
`<ENTRY_ID>`

Aktueller Slug:
`<CURRENT_SLUG>`

Erwarteter Ausgangszustand:

`hero-split → steps-3col → teaser-split-image-right → teaser-split-image-left → counter-animated → accordion`

Lies die Page zuerst vollständig und verifiziere den Ausgangszustand.

Führe anschließend in EINEM Update folgende Änderungen durch:

1. TEXT
   Ändere die Hauptüberschrift im `hero-split` auf:
   `LP Builder Regression erfolgreich`

2. BUTTON
   Ändere beim primären CTA im `hero-split`:
   - Label: `Regression testen`
   - Link: `https://www.immobilienscout24.de/`
   - verwende eine andere gültige Button-Variante aus der Component Library als aktuell gesetzt

3. MODUL ERSETZEN
   Ersetze:
   `counter-animated`
   durch:
   `pricing-list`

4. MODUL HINZUFÜGEN
   Füge den vollständigen kanonischen Page-Module-Block
   `callout--base`
   direkt nach `steps-3col` ein.

5. MODUL VERSCHIEBEN
   Verschiebe `accordion` so, dass es direkt vor `pricing-list` steht.

6. METADATEN
   Ändere:
   - Slug auf `<CURRENT_SLUG>-edited`
   - Main Title auf `LP Builder Regression Test Edited`

7. SPACING
   Leite alle Spacer für die neue Module Sequence gemäß aktueller Building Policy neu ab.

Erwartete Module Sequence danach:

1. `hero-split`
2. `steps-3col`
3. `callout--base`
4. `teaser-split-image-right`
5. `teaser-split-image-left`
6. `accordion`
7. `pricing-list`

Wichtig:

- Verwende ausschließlich vollständige kanonische Module aus der aktuell geladenen `component-library.html`.
- Andere Inhalte der bestehenden Page unverändert lassen.
- Keine Bridge-/Runtime-Assets in das gespeicherte HTML einfügen.
- Genau ein `lpb-explicit-spacing` Root.
- Draft bleiben.
- Nicht publishen.
- Das vollständige aktualisierte HTML über die konfigurierte Update-Action senden.
- Nur EINE Update-Mutation ausführen.

Falls vor dem Update eine benötigte Komponente oder Variante nicht eindeutig in der Component Library verfügbar ist:
STOP und melde exakt die fehlende Capability.

Falls ein Action-, JSON-, Serialization-, Auth-, Validation- oder Update-Fehler auftritt:
STOP.
Keinen Retry ausführen.

Nach erfolgreichem Update die Page erneut vollständig lesen und das Ergebnis verifizieren.

Gib nur zurück:

- Update erfolgreich: Ja/Nein
- Entry ID:
- Slug vorher:
- Slug nachher:
- Main Title nachher:
- Hero-Text geändert: Ja/Nein
- CTA-Label geändert: Ja/Nein
- CTA-Link geändert: Ja/Nein
- CTA-Variante geändert: Ja/Nein
- `callout--base` hinzugefügt: Ja/Nein
- `counter-animated` entfernt: Ja/Nein
- `pricing-list` hinzugefügt: Ja/Nein
- `accordion` verschoben: Ja/Nein
- Module Sequence vorher:
- Module Sequence nachher:
- Spacer-Regeln eingehalten: Ja/Nein
- genau ein `lpb-explicit-spacing` Root: Ja/Nein
- Bridge-/Runtime-Assets im gespeicherten HTML: Ja/Nein
- Status:
- htmlBytes:
- htmlSha256:
- Preview:
- vollständiger technischer Fehlertext, falls vorhanden:
```

Use the edited slug returned by this test in Test 3.

## Test 3 — Full lifecycle

**Model:** GPT-5.6 Sol  
**Reasoning:** Hoch

Replace `<ENTRY_ID>` and `<EDITED_SLUG>` with the current values.

```text
Führe einen vollständigen Lifecycle-Regressionstest auf dieser Testpage durch:

Entry ID:
`<ENTRY_ID>`

Slug:
`<EDITED_SLUG>`

Führe die folgenden Schritte exakt nacheinander aus.

Nach jedem Schritt den neuen Status prüfen.
Bei irgendeinem Fehler: STOP. Kein Retry.

1. PUBLISH
   - Page veröffentlichen.
   - Prüfen, dass Status `published` ist.
   - Production-/Pro-URL prüfen und zurückgeben.

2. UNPUBLISH
   - Page wieder deaktivieren/unpublishen.
   - Prüfen, dass sie nicht mehr published ist.

3. ARCHIVE
   - Page archivieren.
   - Prüfen, dass Status `archived` ist.

4. UNARCHIVE
   - Page wieder unarchivieren.
   - Prüfen, dass sie wieder als Draft verfügbar ist.

5. PUBLISH ERNEUT
   - Page erneut veröffentlichen.
   - Prüfen, dass Status `published` ist.

6. UNPUBLISH ERNEUT
   - Page wieder unpublishen.
   - Prüfen, dass sie nicht mehr published ist.

7. DELETE
   - Die Testpage endgültig löschen.
   - Danach keine weitere Mutation durchführen.

Keine HTML-, Slug-, Main-Title- oder sonstigen Inhaltsänderungen durchführen.

Gib nur zurück:

- Publish 1 erfolgreich: Ja/Nein
- Production URL:
- Unpublish 1 erfolgreich: Ja/Nein
- Archive erfolgreich: Ja/Nein
- Unarchive erfolgreich: Ja/Nein
- Publish 2 erfolgreich: Ja/Nein
- Unpublish 2 erfolgreich: Ja/Nein
- Delete erfolgreich: Ja/Nein
- letzter bekannter Status vor Delete:
- Entry ID:
- Slug:
- vollständiger technischer Fehlertext, falls vorhanden:
```

## Acceptance criteria

A run is green only when all three tests complete without retry and all requested post-action verification checks pass.

Coverage of the suite:

- Blueprint creation and duplicate-slug preflight
- canonical module retrieval
- text editing
- CTA label, URL and variant editing
- module insertion
- module replacement
- module reordering
- slug rename
- Main Title update
- spacer recalculation
- explicit-spacing root invariant
- renderer-owned Bridge/Runtime exclusion
- full HTML update serialization
- publish / unpublish
- archive / unarchive
- delete

This core suite does not by itself prove the migration-specific behavior. After migration-policy changes, also run dedicated acceptance cases for:

- `LOCKED_IMPORT`
- single-page `CRAWL_REBUILD`
- `CRAWL_REBUILD` with a representable image/text section whose final delivery URL is not ready: build the real module with a usable temporary AEM/source URL and report the asset as pending migration rather than replacing the section with an asset placeholder
- `CRAWL_REBUILD` with a genuine migration placeholder / gap such as `FORM_MISSING`, `MODULE_GAP` or a truly unavailable asset
- multi-page `CRAWL_REBUILD`

The 2026-09-18 `sichtbarkeit-verbessern.html` test is the regression reference for this distinction: the contact form placeholder was appropriate, while the image/text sections should not have been replaced solely because their final persistent asset URLs were not yet available.

## Confirmed baseline run — 2026-09-17

The Custom GPT configuration that existed before the `migration-mode.md` refactor passed the complete three-prompt suite without retry.

- CREATE: passed
- Combined EDIT stress test: passed in one update mutation
- Lifecycle: publish, unpublish, archive, unarchive, republish, reunpublish and delete all passed
- No Action, JSON, serialization, auth or validation error occurred

Test entry: `1S9LyMMUcZa6iaV7SLpGI7`  
Initial slug: `/lpb-regression-test-1`  
Edited slug: `/lpb-regression-test-1-edited`  
Final state: deleted after successful lifecycle test

The local package was changed later on 2026-09-17 to replace `source-duplicate-mode.md` with `migration-mode.md`. Local package/runtime tests pass 50/50, but the three-prompt Custom GPT suite and migration-specific acceptance cases must be rerun after the updated package is applied before a new green live baseline is recorded.