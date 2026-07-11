# Changelog

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
