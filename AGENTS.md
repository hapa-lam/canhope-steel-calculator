# AGENTS.md

# CANHOPE Steel Calculator — Codex Development Rules

This file defines the development and delivery rules for Codex and other AI coding agents working in this repository.

These rules apply to the entire project unless a more specific AGENTS.md exists inside a subdirectory.

---

## 1. Project Information

Project name:

CANHOPE Steel Weight Calculator & RFQ Builder

Project root:

`/Users/hapa/Documents/canhope-steel-calculator`

Technology stack:

- Vinext
- React
- TypeScript
- Tailwind CSS
- pnpm
- localStorage

Development command:

`pnpm run dev`

Default local test URL:

`http://localhost:3000`

---

## 2. General Working Rules

Before modifying files:

1. Read this AGENTS.md.
2. Inspect only the files relevant to the current task.
3. Understand the existing data structure and calculation branch.
4. Keep changes small and focused.
5. Do not redesign or refactor unrelated parts.
6. Do not modify unrelated product datasets.
7. Do not invent specifications, weights, lengths, standards or aliases.
8. Do not use translated product names as internal IDs.

When the task is unclear or required data is incomplete, stop and report the missing information rather than guessing.

---

## 3. Stable Product IDs

Business logic and localStorage must use stable English internal IDs.

Current examples:

- `galvanized_pipe`
- `galvanized_sheet_pipe`
- `black_steel_pipe`
- `galvanized_square_rectangular_tube`

Future products must follow the same rule.

Chinese and English names are display text only.

---

## 4. Product Separation

The following products are separate products and must not share formal datasets:

Round pipe products:

- Galvanized Steel Pipe
- Pre-Galvanized Round Steel Pipe
- Black Welded Steel Pipe

Square and rectangular tube products:

- Hot-Dip Galvanized Square / Rectangular Tube
- Pre-Galvanized Square / Rectangular Tube

Each product must have:

- A stable product ID
- Its own formal data directory
- Its own formal data file
- Its own calculation source
- Its own stock-length rules

Do not merge products only because their dimensions look similar.

---

## 5. Formal Data Files

Formal production data must be stored under dedicated folders inside:

`data/`

Examples:

- `data/galvanized-pipe/`
- `data/galvanized-sheet-pipe/`
- `data/black-steel-pipe/`
- `data/galvanized-square-rectangular-tube/`

Do not move formal datasets back into `data/demo/`.

Demo product definitions may reference formal products, but formal specifications must stay in their dedicated data files.

---

## 6. Data Import Rules

For data-only tasks:

1. Preserve existing valid data.
2. Do not modify unrelated products.
3. Do not average weights.
4. Do not silently overwrite existing weights unless the user explicitly requests it.
5. Check duplicate sizes and duplicate thicknesses.
6. Check empty option arrays.
7. Store numeric values as numbers.
8. Keep units outside numeric fields.
9. Keep thickness options logically sorted.
10. Do not output hundreds of records in the completion report.

For pure data changes, browser testing is normally unnecessary.

Required validation:

- Expected size count
- Expected option count
- Duplicate check
- Empty-array check
- Numeric-value check
- `pnpm run lint`

Run build only when a type or import error requires it.

---

## 7. Calculation Rules

Different products use different weight sources.

Never apply one formula to every product.

### Galvanized Steel Pipe

Standard specifications use:

`referenceWeightKgPerPiece`

Do not replace official reference weights with a theoretical formula.

### Pre-Galvanized Round Steel Pipe

Standard specifications use:

`referenceWeightKgPerPiece`

Do not replace official reference weights with a theoretical formula.

### Black Welded Steel Pipe

Standard and custom dimensions use:

`kgPerMeter = 0.02466 × thicknessMm × (outerDiameterMm - thicknessMm)`

`kgPerPiece = kgPerMeter × lengthM`

`totalWeightKg = kgPerPiece × quantity`

Each thickness option may have its own `standardLengthM`.

The standard length may be 6 m or 12 m.

Do not assume one outside diameter always uses one length.

### Hot-Dip Galvanized Square / Rectangular Tube

Standard specifications use:

`referenceWeightKgPerPiece`

Current formal reference weights are based on 6 m per piece.

Do not overwrite standard reference weights with a theoretical formula.

Custom dimensions use:

`crossSectionAreaMm2 = widthMm × heightMm - (widthMm - 2 × thicknessMm) × (heightMm - 2 × thicknessMm)`

`kgPerMeter = crossSectionAreaMm2 × 0.00785`

`kgPerPiece = kgPerMeter × lengthM`

`totalWeightKg = kgPerPiece × quantity`

Invalid dimensions must not produce NaN or negative weights.

---

## 8. Precision Rules

Internal calculations must retain full precision.

Do not round unit weight before calculating total weight.

Round only for display.

Wall-thickness formatting:

- Minimum 1 decimal place
- Maximum 2 decimal places
- `2.75` must display as `2.75`
- `3.25` must display as `3.25`
- `2.0` should display as `2.0`

Never display `2.75` as `2.8`.

---

## 9. Standard and Custom Lengths

Standard product rows use locked stock lengths.

The standard length field must be read-only and clearly visible.

Custom-size rows must keep editable length fields.

Changing a size or thickness must immediately update:

- Stock length
- Weight per meter
- Weight per piece
- Total weight
- Product subtotal
- Overall total weight
- Container estimate
- RFQ content

---

## 10. Internationalization

The project supports:

- Chinese: `zh`
- English: `en`

Use the existing i18n system.

Do not create a second translation system.

Do not hardcode new user-visible text in page components when a translation key is appropriate.

Language switching must not change:

- Product IDs
- Specification IDs
- Selected sizes
- Selected thicknesses
- Quantities
- Weights
- Material-list contents
- Container calculations

English mode must not display Chinese terms such as:

- 圆
- 寸
- 分

Do not translate them as “Round” or “Cun”.

---

## 11. localStorage and Hydration

Do not read localStorage during server rendering.

Restore browser-only state after client mount.

The first server render and first client render must remain compatible.

Do not reintroduce hydration mismatch.

When migrating old localStorage data:

1. Preserve valid data from other products.
2. Use stable product IDs.
3. Fall back safely when an old specification cannot be matched.
4. Standard rows must restore official stock lengths.
5. Custom rows must preserve user-entered dimensions and lengths.
6. Invalid old data must not cause a blank page.

---

## 12. Development Server

Before starting the development server:

1. Check whether this project is already running on port 3000.
2. If already running, reuse it.
3. Do not start duplicate dev-server processes.
4. Do not restart the server for pure data changes when hot reload is sufficient.

When browser testing is required and no server is running:

1. Run `pnpm run dev`.
2. Keep it running in a persistent session.
3. Confirm port 3000 is listening.
4. Automatically return the test URL.

Default test URL:

`http://localhost:3000`

Do not wait for the user to ask for the test address, but do not report a raw localhost URL as an available user test link unless the development server is currently running and the user can access it.

## User-Accessible Preview Rules

A raw localhost URL must not be reported as an available user test link unless the server is currently running and the user can access it.

For tasks requiring manual UI acceptance:

1. Codex completes technical validation.
2. Codex starts or reuses the development server.
3. Codex opens the page in the Codex in-app browser or provides another user-accessible preview.
4. Codex confirms that the preview actually loads.
5. The user performs manual clicking, visual review and data verification.

Codex should not perform broad UI clicking by default, but it must make the page available for the user’s manual acceptance testing.

Do not report:

`Test URL: http://localhost:3000`

unless the development server is running in a user-accessible environment.

When the server cannot be started, report:

Development server: Not running  
User-accessible preview: Not available  
Technical validation: Passed  
Manual UI acceptance: Blocked pending preview availability

Do not instruct the user to install a separate local development environment unless the Codex in-app preview and existing project environment are both unavailable.

---

## 13. Validation Requirements

## Test Responsibility Split

Testing is divided into two categories.

### A. Codex Technical Validation

Codex is responsible for technical and programmatic validation, including:

- `pnpm run lint`
- `pnpm run build` when required
- TypeScript and compilation errors
- Import and type validation
- Programmatic record counts
- Duplicate size and duplicate thickness checks
- Empty-array and invalid-number checks
- Calculation-function validation
- Targeted programmatic sample checks
- Development-server status
- Confirming that the local URL is reachable

Codex must complete the required technical validation before reporting a task as completed.

### B. User Manual UI Acceptance

By default, the user is responsible for manual page and interaction acceptance testing, including:

- Clicking product selections
- Switching dimensions and thicknesses
- Visually checking displayed weights against source data
- Switching Chinese and English
- Adding and deleting material-list items
- Reviewing RFQ content
- Refreshing the page and checking restored data
- Reviewing desktop and mobile layouts
- Confirming usability and visual behavior

Codex must not perform broad browser clicking, full UI walkthroughs or repeated visual testing by default.

After completing technical validation, Codex should:

1. Keep or start the development server when needed.
2. Return the local test URL automatically only after confirming the server is running and user-accessible.
3. Provide a short manual acceptance checklist for the user.
4. Clearly state that manual UI acceptance is pending user confirmation.

Codex may perform browser automation or detailed UI interaction testing only when:

- The user explicitly requests it
- A bug cannot be diagnosed through code, logs or technical validation alone
- A release specifically requires automated end-to-end testing

Do not claim that manual UI acceptance passed unless the user has confirmed it.

Checking that the server responds or the URL is reachable is technical validation, not manual UI acceptance.

### Pure data changes

Required:

- Programmatic record counts
- Duplicate checks
- Empty-option checks
- Numeric-value checks
- `pnpm run lint`

Build is normally not required.

Browser testing is normally not required.

### Page, state, calculation, type or i18n changes

Required:

- `pnpm run lint`
- `pnpm run build`
- Confirm the development server status
- Return the local test URL
- Perform only targeted programmatic checks related to the task

Do not repeatedly run full-site browser, mobile, or broad interaction tests without a specific reason.

---

## 14. Test File Warning

The file:

`tests/rendered-html.test.mjs`

may still contain old starter-template or loading-skeleton expectations.

Do not assume it represents the current CANHOPE Steel Calculator.

Do not delete or rewrite it unless a task specifically requests test maintenance.

When tests are involved, first inspect whether the test still reflects the current application.

---

## 15. Git and Versioning

Use semantic versioning:

- Patch: bug fixes and minor data corrections
- Minor: new product modules or meaningful features
- Major: incompatible architecture changes

Examples:

- `v0.4.0`
- `v0.5.0`
- `v1.0.0`

Meaningful commit examples:

- `feat: add pre-galvanized square tube data`
- `fix: preserve thickness precision`
- `data: expand galvanized tube specifications`
- `docs: add Codex development rules`
- `chore: release v0.5.0`

Do not create a Git tag for every small edit.

Do not push to GitHub unless the user explicitly asks.

---

## 16. CHANGELOG

`CHANGELOG.md` is the official formal release history.

Update it when:

- A formal version is released
- A major product module is completed
- A meaningful user-facing feature is added
- An important calculation rule changes
- A significant bug is fixed

Do not update it for:

- Temporary debugging
- Every data row
- Minor experiments
- Unreleased partial work
- Small internal refactors

Git commit history is the detailed technical change history.

Do not create duplicate files such as:

- `WORKLOG.md`
- `DEV_LOG.md`
- `MODIFICATION_LOG.md`

unless the user explicitly requests one.

---

## 17. Release Workflow

For a formal release:

1. Update `CHANGELOG.md`.
2. Update the version in `package.json`.
3. Run lint.
4. Run build.
5. Commit the release.
6. Create an annotated Git tag.
7. Push the branch and tag to GitHub.

---

## 18. Token and Time Efficiency

Do not:

- Re-read every dataset for a small isolated change
- Re-run browser tests for pure data imports
- Output hundreds of records in completion reports
- Rebuild repeatedly when lint is sufficient
- Restart an already-running server
- Recheck products that were not modified
- Produce unnecessarily long completion reports

Prefer:

- Targeted file inspection
- Programmatic counting
- Programmatic duplicate checks
- One lint run
- One build run when required
- Short completion reports
- Automatic test URL reporting

---

## 19. Protected Project Rules

Unless explicitly requested, do not modify:

- Other product datasets
- The 40HQ configured capacity
- Overall page layout
- Responsive breakpoints
- Existing bilingual architecture
- Stable product IDs
- Valid localStorage data
- RFQ real-send behavior
- Hosting configuration
- Git history

The configured 40HQ capacity remains:

`27.5 metric tons`

---

## 20. Required Completion Report

Every completed coding task must report:

- Files modified
- Main work completed
- Validation performed
- Lint result
- Build result or why it was unnecessary
- Development-server status
- Test URL
- User-accessible preview status
- Technical validation status
- Manual UI acceptance status
- Whether unrelated products were modified

Required format:

Development server: Running / Not running / Existing server unchanged  
Test URL: http://localhost:3000 / Not available  
User-accessible preview: Available / Not available  
Technical validation: Passed / Failed / Not required  
Lint: Passed / Failed / Not required  
Build: Passed / Failed / Not required  
Manual UI acceptance: Pending user confirmation / Confirmed by user / Blocked pending preview availability  
Unrelated product data modified: Yes / No

Do not claim browser testing was completed when the local server was not reachable.

---

## 21. Long-Term Product Direction

The current project is evolving from a single Steel Weight Calculator into a Steel Tools Center.

Primary goals:

- SEO traffic
- Brand exposure
- Real user utility
- RFQ inquiries for CanHope Steel

This is not currently a paid SaaS project.

Do not prioritize:

- Login systems
- Membership features
- Paid subscriptions
- User account systems
- Complex admin backends

All future features should directly support steel purchasing, weight calculation, product selection, container planning, RFQ preparation, or practical steel knowledge.

Use "solutions" in English content where appropriate.

Do not use "one-stop" in user-facing copy.

---

## 22. Existing Feature Protection

Protect the following existing functions unless a task explicitly asks to change them:

- Product selection
- Size and thickness selection
- Quantity input
- Theoretical weight calculation
- Total weight calculation
- 40HQ estimate
- Material list
- RFQ generation
- Confirmed product specification data

Do not do the following without a clear user request:

- Delete product data
- Modify weight data
- Modify formulas
- Change existing calculation results
- Change the existing operation flow
- Rebuild the whole page
- Automatically deploy to production

Small feature changes must not casually redesign the full interface.

---

## 23. Business Data Rules

Product data is business-critical data.

- Do not guess missing specifications.
- Do not silently use theoretical formulas to overwrite confirmed market weights.
- `piecesPerBundle` is for display only.
- `piecesPerBundle` must not participate in weight calculations.
- `piecesPerBundle` must not imply that users must buy full bundles.
- Uncertain data must be clearly marked as uncertain, not filled in by assumption.
- Product-specific data rules override generic formulas.

---

## 24. Calculation Change Rules

Calculation accuracy is more important than code simplification.

40HQ results must always be described as estimates, not guaranteed loading plans.

When modifying any calculation logic, the completion report must explain:

- Original formula
- New formula
- Reason for the change
- Example comparison
- Products that may be affected

---

## 25. SEO Expansion Rules

Future development should support independent SEO tool pages such as:

- `/steel-weight-calculator/`
- `/pipe-weight-calculator/`
- `/galvanized-pipe-weight-calculator/`
- `/square-tube-weight-calculator/`
- `/rectangular-tube-weight-calculator/`
- `/angle-steel-weight-calculator/`
- `/channel-steel-weight-calculator/`
- `/container-loading-calculator/`

Each page must provide real, independent, useful content. Do not create pages that only swap titles and keywords.

Avoid:

- Keyword cannibalization between tool pages
- Keyword cannibalization between tool pages and blog posts
- Keyword cannibalization between tool pages and commercial product pages
- Large numbers of low-quality, duplicate, or thin pages

Each future SEO page should have a clear search intent, a distinct calculator or explanation, and a natural next step toward related CanHope Steel products or RFQ.

---

## 26. Internal Linking and Conversion Rules

Target user path:

Google Search or social media

→ tool page

→ user completes a calculation

→ related CanHope Steel product page

→ RFQ or contact

Main official website:

`https://canhopesteel.com/`

The calculator must not repeatedly interrupt users before they complete useful work.

RFQ entry points and product links should appear naturally near results, summaries, or relevant product context.

---

## 27. Content and Interface Rules

Primary users are international steel buyers, engineers, contractors, and project procurement staff.

The main interface language should be English.

English copy must be clear, professional, and easy for non-native English speakers to understand.

Desktop and mobile experiences must both be considered.

Do not hardcode new user-facing text in page components when an existing i18n pattern can be used.

---

## 28. Change Workflow for Future Work

Before each modification:

1. Read the relevant files.
2. Explain the existing logic.
3. Explain the impact scope.
4. Propose the smallest safe change.

After each modification:

1. Run the project's existing lint, type-check, test, and build commands when applicable.
2. List every modified file.
3. Explain what changed in each file.
4. Explain which existing functions did not change.
5. Provide manual test steps.
6. Report remaining risks.

For documentation-only changes, lint/build may be unnecessary, but the reason must be reported.

---

## 29. Deployment Safety

Unless a task explicitly asks for it, do not:

- Automatically deploy
- Modify production environment variables
- Modify domains
- Modify Hostinger configuration
- Delete production data
- Force push
- Rewrite Git history
- Directly overwrite the production branch

Major changes should use a separate branch first.
