# Scaling Editorial — data-led article pool continuation

_Imported on 10 November 2026 from Dominik's attached “Eingefügtes Markdown(9).md”. Original conversation dates are not supplied. This is an old-chat migration, not evidence that the reported work happened on the import date._

## Confirmed direction from Dominik

- The team agreed to start Scaling Editorial with repeatable article templates using internal data.
- Build a pool from data actually available: inspect house prices across large cities, then apartment prices, over a bounded period of several years. Explore useful findings before choosing templates.
- Iterate: inspect available data → examine reader-relevant results → select useful article types → document the working method and specific gaps.
- Do not make a complete catalog of every dataset or answers to all Data Team questions a prerequisite. Do not start with a template whose first step is another broad support request to Kristian (KK).
- Examples mentioned by Dominik (“three cities with the strongest house-price increases”, “cheapest terraced houses by federal state”) express possible article types, not validated outputs or an accepted fixed first template.

## Prior-chat reported work — not independently reverified at import

The former assistant reported revising and fully reading back [Data Source Catalog](https://wiki.scout24.com/spaces/product-intelligence/pages/68724/data-source-catalog): seven topic areas and a short intro retained; confirmed sources, fields, temporal resolutions and output rules separated from genuine questions and extension wishes. Five already answered fundamentals no longer carried questions. The excerpt does not identify those five items or contain the revised page body. The later proposal to replace the broad catalog with a template-led reference was not reported as implemented.

A proposed Story Creator check covered (1) Berlin apartment rents year-on-year and (2) Berlin rental demand from September to October 2026, asking only for source/fields, resolution/filters, permitted calculation/output and limits, without SQL or a Story Package. No completed acceptance result is supplied; Dominik said the Agent was hanging.

An initial price probe reportedly covered Berlin, Hamburg, Munich, Cologne and Frankfurt am Main for Q3 2025 and Q2/Q3 2026, with comparison rates calculated. A five-city sample cannot establish Germany-wide rankings. A repeated monthly supply/demand query still had no confirmed result.

The final assistant response reported this larger availability check:

| Purchase-price series | Unambiguously mapped large cities | Period | Reported coverage |
| --- | ---: | --- | --- |
| Houses — existing stock | 69 | 2021–2025 | All 20 quarters populated; positive values |
| Houses — new build | 69 | 2021–2025 | All 20 quarters populated; positive values |
| Owner-occupied apartments — existing stock | 69 | 2021–2025 | All 20 quarters populated; positive values |
| Owner-occupied apartments — new build | 69 | 2021–2025 | All 20 quarters populated; positive values |

- City mapping reportedly used the large-city list as of end-2025. Ambiguous mappings were excluded; county values did not substitute for city values. “69” is the reported usable subset, not a verified complete list of all German large cities.
- The supplied excerpt contains no SQL, exact tables/fields, output rows, city list, mapping evidence or reference-list source. These checks remain reported prior-chat results, not a newly reproduced database audit.
- Availability does not settle price-metric definition/unit, approved historical comparability, reference-object differences or external usage clearance.
- An independent terraced-house metric and a valid federal-state aggregation were not demonstrated. Supply/demand analyses remain unverified.
- Receipt of Kristian's promised guide as a distinct delivered document is not established by this excerpt. Do not keep waiting for every definition before inspecting available data, but do not invent the guide's delivery or close remaining semantic questions.

## Candidate explorations, not accepted templates

The former assistant suggested price levels, quarter-on-quarter/year-on-year changes, multi-year trajectories and new-build/existing-stock differences within a city. Earlier candidates were price-development ranking, price-level comparison, local price update, opposite developments, new-build versus existing stock, and later supply/demand development.

Dominik redirected this toward building the actual data pool first. No first template, top-three ranking, final article, valid metric unit or nationally complete comparison was accepted. A new-build/existing-stock difference must not automatically be called a premium for otherwise identical properties. Explaining causes requires additional evidence.

## Proposed Wiki division — not yet implemented for this pool

- [Story Formats](https://wiki.scout24.com/spaces/product-intelligence/pages/68725/story-formats), extending “04 · Datenstory / Regionalvergleich”: reader question, article structure, variable elements and required results.
- Data Source Catalog: linked source, tested access, fields/filters, calculation, valid parameters and limitations, maintained once per reusable method.
- Keep a few shared usage rules and add methods incrementally. Reducing the broad active catalog was proposed, not executed in the supplied continuation.
- Neither new pool templates nor the proposed Wiki restructuring are reported as saved. No handoff of the revised approach to Kristian is confirmed.

## Concrete continuation

Recover or reproduce the reported price-data check with exact source/fields, city mapping, quarters and completeness results; retain the chosen 69-city subset if verified. Explore price levels and changes across the available house/apartment series for 2021–2025, then propose a small useful article pool from actual findings. Record technical availability and semantic/publication limits separately. Ask Kristian only about specific unresolved gaps needed for selected uses.

No live Wiki, database or Agent test was performed during this import. Current project context: [Scaling Editorial](../projects/editorial-lighthouse.md). Active personal work: [tasks.md](../tasks.md).
