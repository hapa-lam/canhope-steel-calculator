# Changelog

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
