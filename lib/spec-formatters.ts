import type { GalvanizedPipeSpec } from "@/data/galvanized-pipe/galvanized-pipe-data";
import type { GalvanizedSheetPipeSpec } from "@/data/galvanized-sheet-pipe/galvanized-sheet-pipe-data";
import type { BlackSteelPipeSpec } from "@/data/black-steel-pipe/black-steel-pipe-data";
import type { GalvanizedSquareRectangularTubeSpec } from "@/data/galvanized-square-rectangular-tube/galvanized-square-rectangular-tube-data";
import type { Locale } from "@/i18n";

export function formatThicknessValue(thicknessMm: number, locale: Locale) {
  const value = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
    useGrouping: false,
  }).format(thicknessMm);

  return locale === "zh" ? `${value}mm` : `${value} mm`;
}

export function formatGalvanizedPipeSpec(spec: GalvanizedPipeSpec, locale: Locale) {
  if (locale === "zh") {
    return `${spec.dn} / ${spec.inchSize} / Φ${spec.outerDiameterMm}`;
  }

  return `${spec.dn} / ${spec.inchSize.replace('"', "")} in. / OD ${spec.outerDiameterMm} mm`;
}

export function formatGalvanizedSheetPipeSpec(spec: GalvanizedSheetPipeSpec, locale: Locale) {
  if (locale === "zh") {
    return [`Φ${spec.outerDiameterMm}`, `${spec.outerDiameterMm}圆`, spec.localSizeLabelZh]
      .filter(Boolean)
      .join(" / ");
  }

  return `OD ${spec.outerDiameterMm} mm`;
}

export function formatBlackSteelPipeSpec(spec: BlackSteelPipeSpec, locale: Locale) {
  if (locale === "zh") {
    return [
      `Φ${spec.outerDiameterMm}`,
      spec.dn,
      spec.inchSize ? `${spec.inchSize}"` : null,
      spec.localSizeLabelZh,
    ]
      .filter(Boolean)
      .join(" / ");
  }

  return [
    spec.dn,
    spec.inchSize ? `${spec.inchSize} in.` : null,
    `OD ${spec.outerDiameterMm} mm`,
  ]
    .filter(Boolean)
    .join(" / ");
}

export function formatGalvanizedSquareRectangularTubeSpec(
  spec: GalvanizedSquareRectangularTubeSpec,
) {
  return `${spec.widthMm} × ${spec.heightMm} mm`;
}
