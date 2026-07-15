# Calculator Refactor and Reuse Plan

## Purpose

This document plans future code organization for the CANHOPE Steel Calculator so independent SEO pages can reuse the same calculator core without copying formulas, product data, material list behavior, or RFQ logic.

No refactor is performed by this document.

## Current `app/page.tsx` Responsibilities

`app/page.tsx` currently handles many responsibilities in one client component file:

- Product imports from formal data files.
- Product default selection helpers.
- Row creation for standard and custom dimensions.
- Stored material list normalization.
- localStorage restore and persistence.
- Locale restore and switching.
- Page title updates.
- Material list state.
- Product selection and row add/delete/duplicate/update actions.
- RFQ text generation.
- Product sidebar.
- Material list rendering.
- Desktop and mobile row rendering.
- Specification selectors.
- Quantity and length inputs.
- Weight summary and 40HQ estimate display.
- RFQ modal.
- WhatsApp, email, WeChat, and copy actions.

The calculation formulas are already mostly centralized in `lib/calculations.ts`, which is the right protection boundary.

## Risks of the Current Large File

- SEO pages may be tempted to copy `app/page.tsx`, creating duplicated calculator logic.
- Product-specific page defaults are hard to express without touching the whole page.
- RFQ generation is tied to the page component rather than a reusable hook or helper.
- localStorage behavior is embedded in the homepage, making multi-route behavior risky.
- UI components and business state are mixed together.
- Future metadata/content sections cannot be added cleanly without making the file larger.
- Testing one change is harder because many behaviors live in the same file.

## Refactor Principles

- Preserve calculation results before improving code shape.
- Keep `lib/calculations.ts` as the single calculation source.
- Keep product data in `data/` and do not duplicate datasets inside route files.
- Extract the smallest stable pieces first.
- Do not split just for style; split only where reuse or risk reduction is clear.
- Keep homepage behavior unchanged after each phase.
- Preserve localStorage compatibility.

## Suggested Component and Module Boundaries

### `CalculatorShell`

- Current location: main `Home` return and top-level state in `app/page.tsx`.
- Responsibility: compose product selector, material list, summary, RFQ modal, and optional SEO content.
- Inputs: locale, optional default product, optional locked focus product, optional SEO content slots.
- Outputs/events: product add, row update, RFQ open, locale switch.
- Calculation logic: no direct formulas; calls shared summary helpers.
- Product data: receives product definitions or uses a product registry.
- localStorage: should delegate to a hook.
- Risk: high if extracted first because it touches all behavior.
- Phase: after smaller hooks/components are stable.

### `ProductSelector`

- Current location: sidebar product buttons around the productDefinitions mapping.
- Responsibility: show product groups and add products to material list.
- Inputs: product definitions, active product, locale messages.
- Outputs/events: `onAddProduct(productType)`.
- Calculation logic: no.
- Product data: product definitions only.
- localStorage: no.
- Risk: low.
- Phase: early candidate.

### `SpecificationSelector`

- Current location: selector functions such as `SteelPipeSpecSelect`, `SquareTubeSpecSelect`, `AngleSteelSpecSelect`, and thickness selectors.
- Responsibility: render product-specific size/thickness/reference-weight selectors.
- Inputs: row, product type, available specs, locale messages.
- Outputs/events: row update events.
- Calculation logic: no formulas, but must preserve spec/thickness ID behavior.
- Product data: yes, reads formal data arrays.
- localStorage: no.
- Risk: medium because spec IDs and standard lengths must remain stable.
- Phase: after ProductSelector or row display extraction.

### `QuantityInput`

- Current location: `QuantityInput` and `QuantityField`.
- Responsibility: quantity field behavior and unit display.
- Inputs: quantity, unit, locale messages.
- Outputs/events: quantity change.
- Calculation logic: no.
- Product data: no.
- localStorage: no direct access.
- Risk: low.
- Phase: early candidate.

### `MaterialList`

- Current location: `ProductModule`, desktop row rendering, mobile row rendering.
- Responsibility: render modules and rows, provide add/delete/duplicate/update actions.
- Inputs: material list, locale, messages, handlers.
- Outputs/events: add row, add custom row, update row, delete row, duplicate row, delete module.
- Calculation logic: calls `calculateRow` only for display.
- Product data: yes through row selectors and descriptions.
- localStorage: no direct access.
- Risk: medium-high because it touches most user interactions.
- Phase: after smaller row/selector pieces are stable.

### `WeightSummary`

- Current location: `SummaryBar`.
- Responsibility: display total quantity, theoretical weight, missing weight, and RFQ CTA.
- Inputs: `SummaryResult`, locale, messages.
- Outputs/events: open RFQ, expand/collapse.
- Calculation logic: no formulas; receives calculated summary.
- Product data: no.
- localStorage: no.
- Risk: low-medium.
- Phase: early candidate.

### `ContainerEstimate`

- Current location: inside `SummaryBar`, using `CONTAINER_40HQ_TON`.
- Responsibility: display estimated 40HQ count and remaining configured capacity.
- Inputs: container count, remaining capacity, configured capacity, locale.
- Outputs/events: none.
- Calculation logic: no; estimation remains in `estimate40HQ`.
- Product data: no.
- localStorage: no.
- Risk: low if display-only.
- Phase: can be extracted with `WeightSummary` or later.

### `RFQModal`

- Current location: `RfqModal`, `CustomerInput`, contact action functions.
- Responsibility: collect customer info, preview RFQ, open WhatsApp/email/WeChat/copy actions.
- Inputs: customer, material list, summary, RFQ text, copied state, locale, messages.
- Outputs/events: update customer, copy, close, contact click tracking later.
- Calculation logic: calls `calculateRow` for display only.
- Product data: indirect through row descriptions.
- localStorage: no.
- Risk: medium because conversion actions are business-critical.
- Phase: after RFQ text generation is separated or covered by tests.

### `ContactActions`

- Current location: inside `RfqModal`.
- Responsibility: render WhatsApp, email, WeChat, and copy buttons.
- Inputs: contact config, RFQ text, copied state, messages.
- Outputs/events: click actions and future analytics events.
- Calculation logic: no.
- Product data: no.
- localStorage: no.
- Risk: low-medium; must preserve correct email and WhatsApp behavior.
- Phase: early if kept display/action focused.

### `SEOContent`

- Current location: not currently present as a reusable concept.
- Responsibility: render page-specific content blocks below or around the calculator.
- Inputs: page content config, related tools, related products, FAQ.
- Outputs/events: related link clicks, CTA clicks.
- Calculation logic: no.
- Product data: may read summary data or product page config.
- localStorage: no.
- Risk: low for new SEO pages, but should not disturb homepage.
- Phase: when first SEO page is created.

### `FAQSection`

- Current location: not currently present.
- Responsibility: render visible FAQ content and optionally support FAQ structured data.
- Inputs: FAQ item list.
- Outputs/events: none or expand/collapse.
- Calculation logic: no.
- Product data: no, unless FAQ is generated from product config.
- localStorage: no.
- Risk: low.
- Phase: first SEO page.

### `RelatedTools`

- Current location: not currently present.
- Responsibility: link between calculator pages without keyword cannibalization.
- Inputs: current tool ID, related tool config.
- Outputs/events: related tool click tracking later.
- Calculation logic: no.
- Product data: no.
- localStorage: no.
- Risk: low.
- Phase: first SEO page.

### `RelatedProducts`

- Current location: only a broad official website link exists in the intro panel.
- Responsibility: show product page types based on selected products/material list.
- Inputs: selected product types, product link config, locale.
- Outputs/events: product link click tracking later.
- Calculation logic: no.
- Product data: maps product type to product page type, not weight data.
- localStorage: no.
- Risk: medium because product URLs need human confirmation.
- Phase: after official product URLs are confirmed.

## Hooks and Non-Visual Modules

### `useMaterialListState`

- Current location: top-level `useState`, add/update/delete/duplicate functions, localStorage effects.
- Responsibility: material list state, restore, persist, mutation handlers.
- Inputs: storage key, optional initial/default product.
- Outputs: material list, active product, handlers, restore status.
- Risk: high because localStorage and hydration rules are sensitive.
- Phase: not first; extract only after display components are stable.

### `buildRfqText`

- Current location: `useMemo` in `Home`.
- Responsibility: generate RFQ text from customer, material list, locale, messages, and summary.
- Inputs: customer info, material list, summary, locale, messages.
- Outputs: string.
- Risk: medium.
- Phase: early-medium because it is testable as a pure function.

### `productRegistry`

- Current location: product data imports and helper functions in `app/page.tsx`, plus `data/demo/product-definitions.ts`.
- Responsibility: map product type to display name, data source, default row, selector behavior, related SEO/product metadata.
- Inputs: product type.
- Outputs: product config.
- Risk: medium-high because product-specific rules must stay exact.
- Phase: after first UI extractions; do not rush.

## Reuse Strategy for SEO Pages

Use the same calculator core for every SEO page.

Recommended approach:

1. A route passes page-level props such as `defaultProductType`, `preferredDimensionMode`, `seoPageId`, and optional `contentConfig`.
2. `CalculatorShell` uses these props only to choose the initial or highlighted product.
3. All calculations continue through `calculateRow`, `calculateSummary`, and `estimate40HQ`.
4. Material list and RFQ behavior remain shared.
5. Product-specific pages should default to the relevant product but should still allow users to add other products unless a strong UX reason appears later.

Why allow other products:

- Buyers often build mixed material lists.
- RFQ value is higher when multiple products can be quoted together.
- Locking a page to one product may frustrate users and reduce conversion.

Use product focus, not hard restriction:

- On `/galvanized-pipe-weight-calculator/`, start with galvanized pipe selected or highlighted.
- Keep the full material list available.
- Related product and content sections stay galvanized-pipe focused.

## URL and Query Parameter Behavior

Recommended:

- Clean SEO routes control page intent.
- Query parameters may preselect UI state but must not be indexed.
- Query states canonicalize to the clean route.
- Do not create separate indexed URLs for each size or thickness.

Potential query parameters:

- `product`
- `mode`
- `spec`
- `thickness`

Use them only for sharing or campaign convenience after localStorage behavior is clarified.

## localStorage Plan

Current storage key:

- `canhope-steel-calculator-material-list`

Recommended near-term behavior:

- Keep one shared material list across all calculator pages.
- Do not create route-specific storage for first SEO pages.
- If a user enters from a product-specific page, default product should apply only when the saved material list is empty.
- Do not overwrite an existing saved material list just because a page has a default product.

Future option:

- Add explicit "start a new list for this tool" UI if users need separate page-specific workflows.

Hydration protection:

- Continue reading localStorage only after client mount.
- Keep first server/client render compatible.
- Do not move localStorage reads into server components.

## Calculation Logic Protection

Rules:

- Do not copy formulas into route files.
- Do not create page-specific calculation branches.
- Keep official reference weights in product data files.
- Keep theoretical custom formulas in `lib/calculations.ts`.
- Add calculation parity tests before and after extraction.

Recommended tests:

- One known standard galvanized pipe row.
- One black steel pipe standard row.
- One square tube standard row.
- One custom square tube row.
- One angle steel row.
- One channel or I-beam row.
- One 40HQ estimate sample.

## Product Data Protection

Rules:

- Do not duplicate formal product data in SEO content configs.
- SEO content may reference a small sample of common specifications, but should import or derive from existing data where safe.
- Missing product page URLs should be marked pending, not guessed.
- `piecesPerBundle` remains display-only and does not affect calculation.

## Suggested Extraction Order

### Step 1: Extract Pure Display Components

Candidates:

- `QuantityInput`
- `WeightSummary`
- `ContainerEstimate`
- `ContactActions`

Why: low calculation risk and easier to verify.

### Step 2: Extract Pure Helpers

Candidates:

- `buildRfqText`
- row description helpers if they can be moved safely

Why: pure or mostly pure functions can be tested.

### Step 3: Extract ProductSelector

Why: useful for SEO pages and low calculation risk.

### Step 4: Extract RFQModal

Why: important reuse boundary, but conversion-critical.

### Step 5: Extract MaterialList and Row Components

Why: needed for full calculator reuse, but highest interaction risk.

### Step 6: Introduce CalculatorShell

Why: should come only after the internal pieces are stable.

## State Management Plan

Do not add a new state library.

Near term:

- Keep React state.
- Use a custom hook only when extraction needs it.
- Keep state shape compatible with `MaterialList`.

Future shape:

- `useMaterialListState` for material list and handlers.
- `useLocaleState` for locale restore/switch.
- `useRfqState` for customer, copied state, modal state.

Avoid over-centralizing state before there are multiple pages using the calculator.

## Different Page Reuse Options

### Option 1: Page props preselect product type

Recommended.

- Stable and explicit.
- Easy to test.
- Keeps clean canonical URLs.

### Option 2: Route decides default product

Recommended with option 1.

- `/pipe-weight-calculator/` maps to pipe default.
- `/square-tube-weight-calculator/` maps to square tube default.

### Option 3: Query parameters preselect product/spec/thickness

Use later and carefully.

- Good for sharing configured calculators.
- Risky for SEO if indexed.
- Must canonicalize to clean page.

### Option 4: Shared calculator component

Required.

- All pages must call the same calculator components and `lib/calculations.ts`.

### Option 5: Shared material list and RFQ

Recommended.

- Better buyer workflow.
- Preserves existing RFQ value.

### Option 6: Page-specific localStorage

Not recommended for first phases.

- Can confuse users switching between pages.
- Increases migration complexity.

## How to Avoid Different Calculation Results

- One calculation module only.
- One material row type system only.
- One product data source per product.
- Tests compare homepage and SEO page results for the same row.
- Product-specific pages set defaults only; they do not set formulas.

## How to Keep Homepage Behavior Unchanged

- Extract components without changing props or data flow first.
- Compare rendered behavior before and after extraction.
- Do not change storage key.
- Do not change product IDs.
- Do not change default row values.
- Do not change existing CSS classes unless needed for extraction.
- Keep the homepage route using the same calculator config as today.

## Testing Plan

For refactor phases:

- `pnpm run lint`
- TypeScript check, preferably `pnpm exec tsc --noEmit` if no script exists.
- `pnpm run build`
- Targeted calculation parity checks.
- Manual UI acceptance on desktop and mobile.

Manual acceptance checklist:

- Add each product type.
- Change size and thickness.
- Enter quantity.
- Add custom rows where supported.
- Check standard length locking.
- Review total weight and 40HQ estimate.
- Open RFQ modal.
- Copy RFQ.
- Test WhatsApp and email button behavior without sending unintended messages.
- Refresh and confirm material list restore.
- Switch language and confirm IDs and weights remain stable.

## Rollback Plan

Each phase should be one small commit or change set.

Rollback options:

- Revert the component extraction commit.
- Keep `lib/calculations.ts` untouched so formulas remain stable.
- Keep product data untouched so data rollback is unnecessary.
- If a route causes SEO or UI issues, remove that route and sitemap entry while keeping shared components.

## Recommended Next Development Task

The next smallest safe development task is:

Create an SEO technical foundation without new tool pages:

- Add English default metadata.
- Add canonical support for `/`.
- Add basic Open Graph and Twitter metadata.
- Add robots and sitemap for only the currently launched homepage.

This should be done before creating `/pipe-weight-calculator/`.

