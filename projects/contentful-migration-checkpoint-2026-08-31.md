# Contentful Migration — Checkpoint 2026-08-31

## Current state

The Contentful-enabled LP Builder setup is now usable as an independent working base for the migration work.

### Contentful / GPT handover

- Mukhammadjon granted edit access to the current Contentful LP Builder GPT and provided OAuth credentials for the GPT-to-Contentful connection.
- A separate GPT copy was created so the migration work can continue independently from Mukhammadjon's GPT configuration.
- OAuth had to be configured again in the duplicated GPT because authentication settings were not preserved by the duplication.
- The duplicated GPT was tested successfully end to end:
  - OAuth authorization works.
  - Contentful draft creation works.
  - A preview URL is returned for the unpublished draft.
  - Explicit publishing works.
  - The published result returns a `pro-is24-cms-frontend...` production URL rather than the `next` preview environment.
- The tested flow is therefore: **GPT -> OAuth -> Contentful Draft -> Preview -> explicit Publish -> Production (`pro`)**.
- Mukhammadjon was informed that the setup works from the duplicated GPT. Dominik will continue adapting the GPT for the migration workflow and can return to Mukhammadjon for infrastructure/API questions if needed.

## Migration Builder — agreed first architecture

The first migration-focused version should deliberately stay small. Before implementing migration intelligence, establish a reliable page-composition base.

### Module source

- Reuse the existing LP Builder module library rather than creating a new component system.
- `knowledge/component-library.html` remains the binding module source.
- Module metadata can help discover available modules, but the actual module markup comes from the component library.

### No blueprint logic in the first version

The migration GPT should not inherit the current LP Builder idea of mandatory modules or a predefined page blueprint.

Instead:

- There are no mandatory modules.
- There is no automatic module sequence.
- The required module IDs and their order are supplied explicitly as input.
- The GPT composes exactly those modules in exactly that order.

Example concept:

`hero-split -> teaser-2col -> accordion`

### Content filling

The first version should already use real supplied content rather than lorem ipsum.

The GPT may fill existing module content slots with supplied values such as:

- headline / copy;
- CTA labels;
- links;
- image URLs;
- alt text.

For the initial version the GPT should behave as a controlled composer, not as a copywriter:

- do not invent missing content;
- do not rewrite supplied content unless explicitly requested later;
- do not change module structure, CSS classes or technical attributes;
- if required input is missing, report it rather than guessing.

### First technical proof

The next small proof should be:

**explicit module list + concrete content -> generated LP Builder HTML -> Contentful Draft -> Preview**

This proves that the GPT can use the controlled module library and render the result through the real Contentful pipeline before migration-specific source mapping is added.

## Contentful renderer / CSS direction

A first inspection of the Contentful frontend shows that the LP Builder HTML is rendered through the existing `LPBuilderPage` renderer and uses an existing Contentful/COSMA styling layer.

Before producing new migration modules at scale, clarify which existing CSS classes and COSMA tokens are a stable contract for LP Builder HTML and which classes are internal renderer implementation details.

This should guide future module production so new modules align with the actual Contentful renderer instead of introducing a parallel styling system.

## What is intentionally not being solved yet

Do not expand the first builder version yet into:

- automatic scope decisions;
- preserve / improve / consolidate orchestration;
- multi-page consolidation;
- SEO or redirect strategy;
- automatic module selection;
- universal migration mode;
- new module generation;
- asset-library integration.

Those topics should be added only after the basic module-composition flow works reliably in Contentful.

## Next steps

1. Review the existing Contentful renderer/CSS contract and identify the stable classes/tokens that LP Builder modules should rely on.
2. Define the smallest input contract for a test page: exact module order plus concrete slot content.
3. Adapt the duplicated GPT incrementally rather than replacing all instructions at once.
4. Test every small change through the real flow: generation -> Draft -> Preview.
5. Once the composition base is reliable, add migration-specific mapping from structured AEM source data into the predefined target modules.
