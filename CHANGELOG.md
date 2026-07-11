# Changelog

## v0.8.0

### Added

- Added I-Beam with 14 selectable reference-weight records.
- Added Round Steel Bar with 8 diameter records.
- Added Flat Steel Bar with 15 width and thickness records.
- Added pieces-per-bundle data for the new structural steel products.
- Added standard and supported custom weight calculations for round steel and flat bar.

## v0.7.2

### Changed

- Updated localized browser titles and HTML language attributes.
- Corrected English row pluralization and interface wording.
- Improved RFQ, product removal, custom-size and navigation labels.
- Improved company advantage labels.
- Clarified the English total quantity units.

## v0.7.1

### Changed

- Changed the first-visit default language to English.
- Added a mobile language switcher.
- Improved the mobile summary bar with a collapsible layout.
- Added WhatsApp, email, WeChat and copy options to the RFQ contact window.
- Removed demo-only labels and updated production-facing copy.

### Added

- Added WeChat QR code and contact details.
- Added direct WhatsApp inquiry links with prefilled RFQ content.
- Added direct email inquiry links with prefilled RFQ content.

## v0.7.0

### Added
- Added Channel Steel with 9 sizes and 51 theoretical weight options.
- Added selectable theoretical weight and pieces-per-bundle display.
- Added bilingual UI, material list, RFQ, 40HQ and localStorage support.

### Changed
- Extended the standard option framework to support wall-thickness or reference-weight selection.

## v0.6.0 — Angle Steel

Version v0.6.0

### Added

- Added Angle Steel.
- Added 12 dimensions and 58 thickness/weight combinations.
- Added equal and unequal angle support.
- Added standard/custom calculation, bilingual UI, material list and RFQ support.

## v0.5.0 — Pre-Galvanized Square / Rectangular Tube

Version v0.5.0

### Added

- Added Pre-Galvanized Square / Rectangular Tube.
- Added 32 standard dimensions and 372 thickness/weight combinations.
- Added standard 6 m reference-weight calculations for the new product.
- Added custom-size theoretical calculations.
- Added Chinese and English product support.
- Added material-list, 40HQ estimate, RFQ and localStorage support.
- Added pieces-per-bundle metadata for future use without exposing it in the current UI.
- Added formal Codex and user testing responsibility rules.

### Changed

- Expanded Hot-Dip Galvanized Square / Rectangular Tube specifications.
- Manual UI interaction acceptance is now performed by the user by default.
- Codex remains responsible for lint, build, type, data and programmatic validation.

### Fixed

- Fixed material-list localStorage restoration hydration mismatch.

## v0.4.0 — Bilingual Steel Calculator & Product Data Expansion

Version v0.4.0

This release expands the steel weight calculator with bilingual support and multiple production-ready steel product datasets.

New features:
- Added Chinese and English language switching.
- Added localized product names, specifications, units, notices, and RFQ content.
- Added complete Galvanized Steel Pipe specification and weight data.
- Added complete Pre-Galvanized Round Steel Pipe specification and weight data.
- Added Black Welded Steel Pipe with 51 outside diameters and 352 thickness/length combinations.
- Added automatic 6 m and 12 m stock-length switching for black welded steel pipes.
- Added Hot-Dip Galvanized Square / Rectangular Tube with 35 sizes and 303 weight records.
- Added fixed stock-length handling for standard products.
- Kept custom-size length and theoretical-weight calculations editable.
- Improved localStorage compatibility and old-data migration.
- Improved product subtotal, total weight, container estimate, and bilingual RFQ generation.

Validation:
- pnpm run lint passed.
- pnpm run build passed.
