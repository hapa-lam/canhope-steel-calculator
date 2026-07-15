# Steel Tools Center SEO Architecture

## Purpose

This document plans the future SEO structure for the CANHOPE Steel Tools Center. It does not authorize immediate page creation. New routes should be added only after the calculator core is reusable and the first pilot page can be tested safely.

The current live calculator should keep working as-is while SEO pages are added in small phases.

## Current State

- `/` is the current all-in-one Steel Weight Calculator and RFQ Builder.
- The project has a centralized SEO configuration in `config/seo.ts`, consumed by the global metadata block in `app/layout.tsx`.
- The homepage metadata is English for the primary international SEO audience.
- No independent SEO tool routes currently exist.
- The homepage has canonical, Open Graph, Twitter Card, and JSON-LD metadata. Static `public/robots.txt` and `public/sitemap.xml` are included in both build outputs.

## Current Technical Implementation

- Homepage title: `Free Steel Weight Calculator & RFQ Builder | CANHOPE`.
- Homepage description: `Select steel products, sizes, wall thicknesses and quantities to calculate theoretical weight, estimate 40HQ capacity by weight, and prepare an RFQ.`
- Canonical: the stable public URL `https://calculator.canhopesteel.com/`. Query parameters, including future product preselection parameters, do not change the canonical.
- Metadata: Vinext's verified Next-compatible `Metadata` export in `app/layout.tsx` renders title, description, canonical, Open Graph, and Twitter tags during SSR.
- Open Graph: `website`, site name, title, description, canonical URL, and `en_US` locale. No `og:image` is configured because there is no verified social-sharing card yet.
- Twitter: `summary` card, title, and description. No image is declared.
- Robots: a static `public/robots.txt` permits crawling and points to `https://calculator.canhopesteel.com/sitemap.xml`.
- Sitemap: a static `public/sitemap.xml` contains only the existing homepage and deliberately omits unbuilt tool URLs. This static implementation is preferred while the URL list is fixed; add future real pages through the shared SEO configuration and update the sitemap in the same change.
- JSON-LD: one `@graph` with `WebSite` and `WebApplication` records. `WebApplication` is the appropriate application schema for the interactive calculator; it declares a free offer without ratings, reviews, downloads, or other unverified claims.
- Language: the SSR default remains `lang="en"`. Chinese is a client-side UI preference on the same URL, so no `hreflang` is declared.
- Trailing slash: the homepage canonical uses `/`. Future public SEO routes should use trailing slashes; Vinext supports trailing-slash redirects when that configuration is introduced. No redirect policy is added in this release because deployment configuration must remain unchanged.
- Unknown URLs: no custom 404 or redirect behavior was changed. Verify the final Hostinger hosting rule does not rewrite unknown routes to the homepage before new public routes are launched.

## Recommended URL Structure

Use top-level URLs for the first phase because the URL set is small, clear, and matches search behavior.

Recommended first structure:

- `/`
- `/steel-weight-calculator/`
- `/pipe-weight-calculator/`
- `/galvanized-pipe-weight-calculator/`
- `/square-tube-weight-calculator/`
- `/container-loading-calculator/`

Future routes can remain top-level until the page count becomes hard to manage. A category directory such as `/tools/` can be considered later, but moving URLs after indexing creates redirect and ranking risk.

Use trailing slashes consistently for public SEO URLs.

## Page Role Decisions

| URL | Recommendation | Reason |
| --- | --- | --- |
| `/` | Keep as current comprehensive calculator first; later evolve into a Steel Tools Center landing page only after dedicated tool pages exist. | The homepage already works and has broad utility. Replacing it too early risks existing users and RFQ flow. |
| `/steel-weight-calculator/` | Yes, but not as an immediate first build unless homepage intent is separated. | This page can target broad steel weight calculator intent while `/` becomes brand/tool-center intent. |
| `/pipe-weight-calculator/` | Yes, high priority. | Strong tool intent and covers round pipe workflows without being limited to galvanized products. |
| `/galvanized-pipe-weight-calculator/` | Yes, high priority after pipe page. | Product-specific intent and confirmed galvanized pipe data exist. Must avoid supplier/price keywords. |
| `/square-tube-weight-calculator/` | Yes, high priority. | Strong distinct intent and existing square/rectangular tube data exists. |
| `/rectangular-tube-weight-calculator/` | Defer or merge into square tube page initially. | Search intent overlaps heavily with square tube calculator unless unique rectangular content is written. |
| `/angle-steel-weight-calculator/` | Defer to phase 2. | Existing data exists, but first phase should prove the SEO page pattern with fewer pages. |
| `/channel-steel-weight-calculator/` | Defer to phase 2. | Existing data exists; lower initial priority than pipe/square tube. |
| `/i-beam-weight-calculator/` | Defer. | Existing data exists, but page needs careful structural steel content. |
| `/round-bar-weight-calculator/` | Defer. | Existing data exists; lower priority and likely narrower traffic. |
| `/flat-bar-weight-calculator/` | Defer. | Existing data exists; lower priority and needs distinct content. |
| `/container-loading-calculator/` | Yes, but only after the current 40HQ estimate can be presented as a general estimate tool without overpromising. | Distinct logistics intent, but must clearly state weight-only estimate limits. |

## Homepage vs Steel Weight Calculator

The homepage `/` should remain the existing comprehensive calculator in the near term. Later it can become the Steel Tools Center hub with links to all calculators, but only after dedicated tool pages exist and traffic behavior is understood.

`/steel-weight-calculator/` is still useful, but it must not duplicate `/`.

Recommended split:

- `/`: CANHOPE Steel Tools Center hub plus access to all tools, RFQ, and brand trust.
- `/steel-weight-calculator/`: broad steel weight calculator focused on calculating steel material weight across multiple product types.

To avoid cannibalization:

- Homepage primary keyword: "steel tools center" or "steel calculators by CANHOPE Steel".
- `/steel-weight-calculator/` primary keyword: "steel weight calculator".
- Homepage content should summarize tools and product paths.
- Steel calculator page content should explain inputs, formulas, weight interpretation, examples, and calculator usage.

Until this separation is implemented, avoid launching `/steel-weight-calculator/` with content that copies the homepage.

## Keyword and Search Intent Split

### Tool Pages

Tool pages target users who want to calculate or estimate now.

Examples:

- steel weight calculator
- pipe weight calculator
- steel tube weight calculator
- galvanized pipe weight calculator
- square tube weight calculator
- container loading calculator

Tool pages should include calculators, inputs, formulas, examples, common specifications, RFQ paths, and related tools.

### Blog / Knowledge Pages

Blog or guide pages target users who want explanation or education.

Examples:

- how to calculate pipe weight
- pipe weight formula explained
- theoretical weight vs actual weight
- what affects galvanized pipe actual weight
- how many tons fit in a 40HQ container

These pages can link to calculators for action and product pages for buying context.

### Commercial Product Pages

Commercial product pages belong mainly on the official website:

`https://canhopesteel.com/`

Examples:

- galvanized steel pipe supplier
- galvanized pipe manufacturer
- galvanized steel pipe price
- square steel tube supplier
- angle steel manufacturer

Calculator pages should not compete directly for supplier, manufacturer, price, factory, wholesale, or exporter intent. They can link to related product page types after the user completes a calculation.

## Recommended First-Phase Pages

Build no more than three first-phase SEO pages:

1. `/pipe-weight-calculator/`
2. `/square-tube-weight-calculator/`
3. `/container-loading-calculator/`

Recommended first pilot:

`/pipe-weight-calculator/`

Reason: it has strong search demand, clear formula logic, existing pipe product data, and can validate the reusable calculator approach before more product-specific pages are created.

Do not build all pages at once.

## Page Keyword Plans

### `/steel-weight-calculator/`

- Primary keyword: steel weight calculator
- Secondary keywords: steel weight calculation, steel weight per meter, steel material weight calculator, theoretical steel weight
- Search intent: calculate weight for multiple steel materials
- Target user: buyers, engineers, estimators, project procurement staff
- Unique calculator function: multi-product steel material list with total weight and RFQ
- Unique page content: broad explanation of steel weight calculation across pipes, tubes, bars, and structural steel
- Suggested H1: Steel Weight Calculator
- Suggested SEO title: Steel Weight Calculator for Pipes, Tubes, Bars and Structural Steel | CANHOPE Steel
- Meta description direction: Free steel weight calculator for common steel products. Estimate theoretical weight, total quantity, 40HQ loading, and prepare an RFQ.
- Related calculator pages: pipe, galvanized pipe, square tube, angle steel, channel steel, container loading
- Related product page types: steel pipe, structural steel, steel bar, fire protection fittings
- Difference from other pages: broad material calculator, not product-specific
- Cannibalization risk: high with `/` unless homepage becomes a tool center hub

### `/pipe-weight-calculator/`

- Primary keyword: pipe weight calculator
- Secondary keywords: steel pipe weight calculator, round pipe weight calculator, pipe weight per meter, welded pipe weight calculator
- Search intent: calculate round pipe weight by OD, thickness, length, and quantity
- Target user: buyers, engineers, contractors, pipe procurement staff
- Unique calculator function: pipe-focused default selection and custom pipe input
- Unique page content: pipe-specific formula, OD/thickness explanation, standard vs custom pipe note
- Suggested H1: Pipe Weight Calculator
- Suggested SEO title: Pipe Weight Calculator for Steel Pipe OD, Thickness and Length | CANHOPE Steel
- Meta description direction: Calculate steel pipe theoretical weight by outside diameter, wall thickness, length, and quantity. Build a material list and prepare an RFQ.
- Related calculator pages: galvanized pipe, steel weight, container loading
- Related product page types: black welded steel pipe, galvanized steel pipe, pre-galvanized round pipe
- Difference from other pages: round pipe intent, not square/rectangular tube
- Cannibalization risk: medium with galvanized pipe page; keep this page generic and product-neutral

### `/galvanized-pipe-weight-calculator/`

- Primary keyword: galvanized pipe weight calculator
- Secondary keywords: galvanized steel pipe weight, GI pipe weight calculator, galvanized pipe theoretical weight, galvanized pipe weight per piece
- Search intent: calculate or check galvanized pipe weight
- Target user: galvanized pipe buyers and project procurement staff
- Unique calculator function: default galvanized pipe product with confirmed reference weight data
- Unique page content: galvanized pipe reference weight notes, coating/actual weight caution, stock length explanation
- Suggested H1: Galvanized Pipe Weight Calculator
- Suggested SEO title: Galvanized Pipe Weight Calculator with Standard Size Reference | CANHOPE Steel
- Meta description direction: Estimate galvanized steel pipe weight using standard sizes or custom dimensions. Check total weight and prepare an RFQ.
- Related calculator pages: pipe, steel weight, container loading
- Related product page types: galvanized steel pipe, hot-dip galvanized pipe
- Difference from other pages: galvanized product-specific reference weights
- Cannibalization risk: high if it targets "supplier", "manufacturer", or "price"; keep tool intent only

### `/square-tube-weight-calculator/`

- Primary keyword: square tube weight calculator
- Secondary keywords: square steel tube weight calculator, SHS weight calculator, square hollow section weight, steel square tube weight
- Search intent: calculate square tube weight
- Target user: structural buyers, fabricators, contractors
- Unique calculator function: square tube default product with width, height, thickness, length
- Unique page content: square hollow section formula and examples
- Suggested H1: Square Tube Weight Calculator
- Suggested SEO title: Square Tube Weight Calculator for Steel Hollow Sections | CANHOPE Steel
- Meta description direction: Calculate square steel tube theoretical weight by size, wall thickness, length, and quantity. Estimate totals and prepare an RFQ.
- Related calculator pages: rectangular tube, steel weight, container loading
- Related product page types: hot-dip galvanized square tube, pre-galvanized square tube
- Difference from other pages: square tube only; rectangular should be handled carefully
- Cannibalization risk: medium with rectangular tube page; first page may cover both square and rectangular until enough unique content exists

### `/rectangular-tube-weight-calculator/`

- Primary keyword: rectangular tube weight calculator
- Secondary keywords: rectangular steel tube weight calculator, RHS weight calculator, rectangular hollow section weight
- Search intent: calculate rectangular tube weight
- Target user: structural steel buyers and project engineers
- Unique calculator function: rectangular tube default product and examples with different width/height
- Unique page content: rectangular examples, RHS terminology, width vs height input guidance
- Suggested H1: Rectangular Tube Weight Calculator
- Suggested SEO title: Rectangular Tube Weight Calculator for RHS Steel Sections | CANHOPE Steel
- Meta description direction: Estimate rectangular steel tube weight by width, height, wall thickness, length, and quantity.
- Related calculator pages: square tube, steel weight, container loading
- Related product page types: galvanized rectangular tube, pre-galvanized rectangular tube
- Difference from other pages: rectangular-only examples and RHS language
- Cannibalization risk: high with square tube page; defer until unique content is ready

### `/angle-steel-weight-calculator/`

- Primary keyword: angle steel weight calculator
- Secondary keywords: angle bar weight calculator, equal angle weight, unequal angle weight, steel angle weight per meter
- Search intent: calculate angle steel weight
- Target user: structural buyers, contractors, fabricators
- Unique calculator function: equal/unequal angle standard and custom rows
- Unique page content: equal vs unequal angle explanation and examples
- Suggested H1: Angle Steel Weight Calculator
- Suggested SEO title: Angle Steel Weight Calculator for Equal and Unequal Angles | CANHOPE Steel
- Meta description direction: Calculate theoretical weight for steel angle sizes, thickness, length, and quantity.
- Related calculator pages: steel weight, channel steel, container loading
- Related product page types: angle steel
- Difference from other pages: angle-specific leg A/leg B inputs
- Cannibalization risk: low with pipe pages; medium with structural steel hub if created later

### `/channel-steel-weight-calculator/`

- Primary keyword: channel steel weight calculator
- Secondary keywords: U channel weight calculator, channel bar weight, steel channel weight per meter
- Search intent: calculate channel steel weight
- Target user: structural steel buyers and engineers
- Unique calculator function: standard channel model and reference weight selection
- Unique page content: model selection guidance and channel steel examples
- Suggested H1: Channel Steel Weight Calculator
- Suggested SEO title: Channel Steel Weight Calculator for Standard Steel Channels | CANHOPE Steel
- Meta description direction: Estimate channel steel theoretical weight by model, length, quantity, and reference weight.
- Related calculator pages: angle steel, I-beam, steel weight
- Related product page types: channel steel
- Difference from other pages: model/reference-weight workflow
- Cannibalization risk: low initially

### `/i-beam-weight-calculator/`

- Primary keyword: I-beam weight calculator
- Secondary keywords: steel beam weight calculator, I section weight, I beam weight per meter
- Search intent: calculate I-beam weight
- Target user: structural buyers and project engineers
- Unique calculator function: I-beam model and reference weight selection
- Unique page content: beam model reference, project estimation cautions
- Suggested H1: I-Beam Weight Calculator
- Suggested SEO title: I-Beam Weight Calculator for Steel Beam Weight Estimates | CANHOPE Steel
- Meta description direction: Estimate I-beam theoretical weight using standard model data, length, and quantity.
- Related calculator pages: channel steel, steel weight, container loading
- Related product page types: I-beam and structural steel
- Difference from other pages: beam-specific model content
- Cannibalization risk: medium with future structural steel calculator hub

### `/round-bar-weight-calculator/`

- Primary keyword: round bar weight calculator
- Secondary keywords: steel round bar weight, round steel bar weight per meter, bar weight calculator
- Search intent: calculate round bar weight
- Target user: steel bar buyers, machining and fabrication buyers
- Unique calculator function: diameter-based round bar calculation
- Unique page content: diameter formula and standard diameter references
- Suggested H1: Round Bar Weight Calculator
- Suggested SEO title: Round Bar Weight Calculator for Steel Bar Diameter and Length | CANHOPE Steel
- Meta description direction: Calculate steel round bar theoretical weight by diameter, length, and quantity.
- Related calculator pages: flat bar, steel weight
- Related product page types: round steel bar
- Difference from other pages: solid round section, not pipe
- Cannibalization risk: medium with pipe page if copy does not clearly say solid bar

### `/flat-bar-weight-calculator/`

- Primary keyword: flat bar weight calculator
- Secondary keywords: flat steel bar weight, steel flat bar weight calculator, flat bar weight per meter
- Search intent: calculate flat bar weight
- Target user: buyers and fabricators
- Unique calculator function: width/thickness/length flat bar calculation
- Unique page content: rectangular solid section formula and examples
- Suggested H1: Flat Bar Weight Calculator
- Suggested SEO title: Flat Bar Weight Calculator for Steel Width, Thickness and Length | CANHOPE Steel
- Meta description direction: Estimate flat steel bar theoretical weight using width, thickness, length, and quantity.
- Related calculator pages: round bar, steel weight
- Related product page types: flat steel bar
- Difference from other pages: solid flat bar, not hollow rectangular tube
- Cannibalization risk: low if content is specific

### `/container-loading-calculator/`

- Primary keyword: container loading calculator
- Secondary keywords: 40HQ loading calculator, steel container loading estimate, container weight capacity calculator
- Search intent: estimate container count or remaining capacity
- Target user: procurement, logistics, export buyers
- Unique calculator function: estimate containers from material list total weight
- Unique page content: 40HQ weight-only estimate limits, product length/volume cautions
- Suggested H1: Container Loading Calculator
- Suggested SEO title: Container Loading Calculator for Steel Material Weight Estimates | CANHOPE Steel
- Meta description direction: Estimate 40HQ container count from steel material weight. Results are weight-based estimates and depend on size, volume, packaging, and local limits.
- Related calculator pages: steel weight, pipe, square tube
- Related product page types: all export steel product categories
- Difference from other pages: logistics estimate, not product weight formula
- Cannibalization risk: low, but high liability risk if wording overpromises loading

## Content Structure for Independent Tool Pages

Each page should have reusable structure but product-specific content.

Recommended structure:

1. H1 and concise product-specific explanation.
2. Direct calculator area with preselected product or tool mode.
3. Input guidance for size, thickness, length, quantity, and unit.
4. Formula section.
5. Example calculation using realistic values.
6. Theoretical weight notes.
7. Theoretical weight vs actual weight explanation.
8. Common specification reference from existing data where safe.
9. FAQ written specifically for the product/tool.
10. Related tools.
11. Related CanHope Steel product page links.
12. RFQ, WhatsApp, or email entry after results.

Reusable modules:

- Calculator shell
- Formula block layout
- Example calculation layout
- Theoretical vs actual weight disclaimer
- FAQ rendering component
- Related tools list
- Related products block
- RFQ and contact CTA block

Must be product-specific:

- H1
- SEO title and meta description
- Formula wording
- Example values
- FAQ questions and answers
- Common specification tables
- Related product links
- Product-specific cautions

Can come from existing data:

- Product names
- Standard sizes
- Thickness options
- Reference lengths
- Reference weights where confirmed
- Product categories

Needs human confirmation:

- Official product page URLs on `https://canhopesteel.com/`
- Commercial claims
- Market wording such as standards, coatings, or available stock
- Any missing or uncertain sizes
- Any loading guidance beyond weight-only 40HQ estimates

Avoid thin pages by requiring every new page to have a distinct calculator default, distinct examples, distinct FAQ, and distinct related product path.

## Technical SEO Plan

### Metadata

Each public page should define independent metadata:

- Title
- Description
- Canonical URL
- Open Graph title, description, URL, site name, type
- Twitter Card title and description

The current Chinese global description should be changed to an English default in a future SEO foundation task.

### Canonical

Canonical rules:

- `/` canonical: `https://calculator.canhopesteel.com/`
- `/pipe-weight-calculator/` canonical: `https://calculator.canhopesteel.com/pipe-weight-calculator/`
- Other tool pages use their exact clean trailing-slash URLs.
- Query-parameter states must canonicalize to the clean route.

Query parameters used for preselecting product, size, or thickness should not create indexable pages.

### Indexing Query Parameters

Do not allow indexed pages for query states such as:

- `?product=galvanized_pipe`
- `?spec=...`
- `?thickness=...`

They should be treated as UI state only and canonicalized to the base tool page.

### Robots and Sitemap

Add `robots.txt` in the SEO foundation phase:

- Allow public tool pages.
- Disallow internal build or preview paths if exposed.
- Reference sitemap URL.

Add `sitemap.xml` in the SEO foundation phase:

- Include `/`
- Include launched SEO tool pages only
- Exclude query-parameter URLs
- Exclude pages not yet built

Future tool pages should enter sitemap through a single route metadata registry to avoid forgetting canonical and sitemap updates.

### Structured Data

Appropriate:

- BreadcrumbList for tool pages.
- WebApplication or SoftwareApplication for calculator pages.
- FAQPage only when the visible page includes real FAQ content.

Do not overuse:

- FAQPage on pages without visible FAQ.
- Product structured data for calculator pages unless the page is truly a product sales page.
- Review, rating, offer, or price schema without verified data.

### Language and Hreflang

Near term:

- Primary SEO pages should be English.
- Keep the app-level UI language switch intact.
- HTML language should match the selected route/default language when possible.

Hreflang:

- Only add hreflang when real translated pages exist at stable URLs.
- Do not declare Chinese hreflang pages if they are only client-side language states without independent canonical URLs.

### URL and Redirect Rules

- Use trailing slash for SEO URLs.
- Redirect non-trailing slash to trailing slash if the platform allows stable redirects.
- Avoid changing URLs after launch.
- Provide a useful 404 that links back to the tools hub and main calculator.

## Internal Linking and Conversion Plan

Target path:

Google Search or social media -> tool page -> calculation -> results -> related CanHope Steel product page -> RFQ, WhatsApp, or email.

Related product links should appear:

- Near the result summary after at least one valid row exists.
- Inside RFQ modal as supporting product context if not distracting.
- Below the calculator in the related products section.
- In related content after formula and examples.

CTA placement:

- Do not interrupt before calculation.
- Keep primary RFQ CTA near total weight and 40HQ estimate.
- Keep WhatsApp and email inside RFQ/contact area.
- Avoid repeated CTA blocks above every section.

Product-link logic:

- If the user has selected galvanized pipe, show galvanized pipe product page type.
- If the material list contains multiple product types, show grouped related product links.
- If no product is selected, show broad steel pipe or structural steel category links.

Tracking plan:

- Track related product link clicks.
- Track RFQ modal open.
- Track RFQ copy.
- Track WhatsApp click.
- Track email click.
- Track related calculator clicks.
- Track calculator page source URL and selected product type.

Tracking should be added through a small analytics helper later, not scattered across components.

## Keyword Cannibalization Risks

High-risk overlaps:

- `/` vs `/steel-weight-calculator/`
- `/pipe-weight-calculator/` vs `/galvanized-pipe-weight-calculator/`
- `/square-tube-weight-calculator/` vs `/rectangular-tube-weight-calculator/`
- Tool pages vs official commercial product pages on `https://canhopesteel.com/`

Mitigation:

- Assign one primary keyword per page.
- Keep product-specific pages focused on calculation, not supplier intent.
- Keep blog pages focused on explanation.
- Keep commercial product pages focused on buying, supplier, manufacturer, standards, and inquiry intent.
- Use internal links to pass users from informational/tool intent to product/RFQ intent.

## Phased Implementation Plan

### Phase 1: SEO Technical Foundation

- Goal: prepare metadata, canonical, sitemap, robots, OG, and structured data utilities.
- File scope: `app/layout.tsx`, route metadata helpers, sitemap/robots files, possible config file.
- Risks: incorrect canonical, accidental indexing of query states, metadata duplication.
- Testing: lint, type-check, build, inspect generated metadata and sitemap.
- Done when: homepage has English metadata, canonical exists, sitemap/robots are stable.
- Preview: yes.
- Human confirmation: yes for titles/descriptions.
- Rollback: revert SEO helper and metadata files.

### Phase 2: Minimal Safe Component Extraction

- Goal: extract low-risk UI and content blocks needed by SEO pages.
- File scope: selected components from `app/page.tsx`, likely summary/RFQ/contact/content blocks first.
- Risks: broken localStorage, RFQ, row updates, hydration.
- Testing: lint, type-check, build, targeted manual calculator checks.
- Done when: homepage behavior is unchanged.
- Preview: yes.
- Human confirmation: yes.
- Rollback: revert component extraction commit.

### Phase 3: First Independent SEO Tool Page

- Goal: launch one pilot route, recommended `/pipe-weight-calculator/`.
- File scope: one route, metadata, reusable calculator shell, content sections.
- Risks: duplicated calculation logic, localStorage conflicts, keyword overlap.
- Testing: calculation parity with homepage, RFQ, localStorage, metadata, sitemap.
- Done when: pilot page works and uses shared calculation code.
- Preview: yes.
- Human confirmation: yes.
- Rollback: remove pilot route and sitemap entry.

### Phase 4: Validation

- Goal: verify calculator, material list, localStorage, RFQ, mobile, desktop, SEO metadata, canonical, sitemap, internal links, and contact actions.
- File scope: no broad new development.
- Risks: hidden UI regressions.
- Testing: programmatic checks plus targeted manual acceptance.
- Done when: user confirms manual acceptance.
- Preview: required.
- Human confirmation: required.
- Rollback: revert Phase 3 if issues are not quickly fixable.

### Phase 5: Expand to Other High-Value Tool Pages

- Goal: add more pages only after pilot proves stable.
- File scope: new routes and content configs, not duplicated calculator logic.
- Risks: thin content, keyword cannibalization, sitemap mistakes.
- Testing: same as pilot, plus content uniqueness review.
- Done when: each new page has unique intent and verified shared calculator behavior.
- Preview: required.
- Human confirmation: required.
- Rollback: remove individual new page route and sitemap entry.
