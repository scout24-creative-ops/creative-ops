# Aktueller Stand

## Stand der Abstimmung
Ein Gespräch mit dem Core-Team hat ergeben, dass statt eines vollständigen Component-/Studio-Ansatzes zunächst ein pragmatischer HTML-basierter Contentful-MVP geprüft bzw. vorbereitet werden soll.

Das Core-Team hat angeboten, in den nächsten 1–2 Sprints eine Lösung vorzubereiten, mit der HTML-basierte Landingpages in Contentful möglich werden.

## Aktuelles Zielbild
Der LP Builder bleibt das zentrale Tool zur Erstellung neuer Landingpages. User sollen idealerweise im LP Builder arbeiten, dort eine HTML-Preview erstellen und finalisieren. Danach soll die Page mit Metadaten wie Verzeichnis, Slug, SEO, Tracking und ggf. Form-/Asset-Infos an Contentful übergeben werden.

Der ideale Prozess:
1. User erstellt im LP Builder eine neue Page als HTML-Preview.
2. User iteriert und finalisiert die HTML-Preview im LP Builder.
3. LP Builder fragt fehlende Zusatzinfos ab und generiert nötige Metadaten.
4. User prüft und bestätigt diese Zusatzinfos.
5. LP Builder bereitet den finalen Export vor.
6. Finale Page-Daten werden per MCP/API an Contentful übergeben.
7. MCP/API erstellt in Contentful eine neue Page als Draft.
8. MCP/API fügt den HTML-Code in die neue Page ein.
9. MCP/API meldet im LP Builder zurück, dass die Draft Page erstellt wurde.
10. User prüft die Contentful-Preview.
11. Nach Freigabe wird die Page veröffentlicht.

## Migration bestehender AEM-Pages
Die Marketingteams werden nicht alle Bestandsseiten manuell migrieren können. Viele Bestandsseiten sind wahrscheinlich veraltet oder nicht mehr relevant.

Aktuelles Verständnis:
1. Teams bekommen neue Contentful-Verzeichnisse bzw. Zielbereiche.
2. Neue Pages werden künftig mit dem LP Builder in diesen Contentful-Verzeichnissen erstellt.
3. Bestehende AEM-Verzeichnisse laufen zunächst weiter.
4. Teams priorisieren wichtige Bestandsseiten, z. B. Top-10-Pages.
5. Priorisierte Pages werden im neuen Contentful-Verzeichnis mit dem LP Builder neu aufgebaut.
6. Alte AEM-Pages bleiben aktiv, bis entschieden ist, ob sie ersetzt, weitergeführt, archiviert oder redirected werden.
7. Ziel ist, alte AEM-Bereiche nach und nach zu reduzieren und langfristig abzulösen.
