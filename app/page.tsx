"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { contactConfig } from "@/config/contact";
import { productDefinitions } from "@/data/demo/product-definitions";
import { groovedFittingOptions } from "@/data/demo/steel-specs";
import {
  angleSteelSpecifications,
  getAngleSteelThicknessId,
} from "@/data/angle-steel/angle-steel-data";
import { channelSteelData } from "@/data/channel-steel/channel-steel-data";
import {
  flatSteelBarData,
  getFlatSteelBarThicknessId,
} from "@/data/flat-steel-bar/flat-steel-bar-data";
import {
  galvanizedPipeData,
  getGalvanizedPipeThicknessId,
} from "@/data/galvanized-pipe/galvanized-pipe-data";
import {
  blackSteelPipeData,
  getBlackSteelPipeThicknessId,
} from "@/data/black-steel-pipe/black-steel-pipe-data";
import {
  galvanizedSheetPipeData,
  getGalvanizedSheetPipeThicknessId,
} from "@/data/galvanized-sheet-pipe/galvanized-sheet-pipe-data";
import { iBeamData } from "@/data/i-beam/i-beam-data";
import { roundSteelBarData } from "@/data/round-steel-bar/round-steel-bar-data";
import {
  galvanizedSquareRectangularTubeData,
  getGalvanizedSquareRectangularTubeThicknessId,
} from "@/data/galvanized-square-rectangular-tube/galvanized-square-rectangular-tube-data";
import {
  preGalvanizedSquareRectangularTubeData,
  getPreGalvanizedSquareRectangularTubeThicknessId,
} from "@/data/pre-galvanized-square-rectangular-tube/pre-galvanized-square-rectangular-tube-data";
import { isLocale, messages, type Locale, type Messages } from "@/i18n";
import {
  calculateModuleSubtotal,
  calculateRow,
  calculateSummary,
  CONTAINER_40HQ_TON,
} from "@/lib/calculations";
import {
  formatKg,
  formatLength,
  formatNumber,
  formatQuantity,
  formatTonFromKg,
  formatUnitWeightLabel,
} from "@/lib/format";
import {
  formatGalvanizedPipeSpec,
  formatGalvanizedSheetPipeSpec,
  formatBlackSteelPipeSpec,
  formatGalvanizedSquareRectangularTubeSpec,
  formatAngleSteelSpec,
  formatThicknessValue,
} from "@/lib/spec-formatters";
import type {
  MaterialList,
  MaterialModule,
  MaterialRow,
  ProductType,
  FlatSteelBarRow,
  RoundSteelBarRow,
  SquareTubeProductType,
  SteelPipeProductType,
} from "@/types/materials";

const STORAGE_KEY = "canhope-steel-calculator-material-list";
const LOCALE_STORAGE_KEY = "steel-calculator-locale";
const pageTitles: Record<Locale, string> = {
  en: "Steel Weight Calculator & RFQ Builder | CANHOPE STEEL",
  zh: "CANHOPE STEEL | 钢材重量计算与询盘工具",
};

const categories = ["钢管类", "型钢类", "消防配件"] as const;

type CustomerInfo = {
  name: string;
  company: string;
  country: string;
  whatsapp: string;
  email: string;
  port: string;
  notes: string;
};

type CustomSizeProductType =
  | SteelPipeProductType
  | SquareTubeProductType
  | "angle_steel"
  | "round_steel_bar"
  | "flat_steel_bar";

const steelPipeProductTypes: SteelPipeProductType[] = [
  "galvanized_pipe",
  "galvanized_sheet_pipe",
  "black_steel_pipe",
];

const squareTubeProductTypes: SquareTubeProductType[] = [
  "galvanized_square_rectangular_tube",
  "pre_galvanized_square_rectangular_tube",
];

function isSteelPipeProduct(type: string): type is SteelPipeProductType {
  return steelPipeProductTypes.includes(type as SteelPipeProductType);
}

function isSquareTubeProduct(type: string): type is SquareTubeProductType {
  return squareTubeProductTypes.includes(type as SquareTubeProductType);
}

function isCustomSizeProduct(type: ProductType): type is CustomSizeProductType {
  return (
    isSteelPipeProduct(type) ||
    isSquareTubeProduct(type) ||
    type === "angle_steel" ||
    type === "round_steel_bar" ||
    type === "flat_steel_bar"
  );
}

function getSquareTubeData(productType: SquareTubeProductType) {
  return productType === "galvanized_square_rectangular_tube"
    ? galvanizedSquareRectangularTubeData
    : preGalvanizedSquareRectangularTubeData;
}

function getSquareTubeThicknessId(productType: SquareTubeProductType, thicknessMm: number) {
  return productType === "galvanized_square_rectangular_tube"
    ? getGalvanizedSquareRectangularTubeThicknessId(thicknessMm)
    : getPreGalvanizedSquareRectangularTubeThicknessId(thicknessMm);
}

function getDefaultSquareTubeSelection(productType: SquareTubeProductType) {
  const firstSpec = getSquareTubeData(productType)[0];
  const firstThickness = firstSpec?.thicknessOptions[0];

  return {
    specId: firstSpec?.id ?? "",
    thicknessId: firstSpec && firstThickness ? getSquareTubeThicknessId(productType, firstThickness.thicknessMm) : "",
  };
}

function getDefaultAngleSteelSelection() {
  const firstSpec = angleSteelSpecifications[0];
  const firstThickness = firstSpec?.thicknessOptions[0];

  return {
    specId: firstSpec?.id ?? "",
    thicknessId: firstThickness ? getAngleSteelThicknessId(firstThickness.thicknessMm) : "",
  };
}

function getDefaultChannelSteelSelection() {
  const firstSpec = channelSteelData[0];
  const firstWeight = firstSpec?.weightOptions[0];

  return {
    specId: firstSpec?.id ?? "",
    referenceWeightId: firstWeight?.id ?? "",
  };
}

function getDefaultIBeamSelection() {
  const firstSpec = iBeamData[0];
  const firstWeight = firstSpec?.weightOptions[0];

  return {
    specId: firstSpec?.id ?? "",
    referenceWeightId: firstWeight?.id ?? "",
  };
}

function getDefaultRoundSteelBarSelection() {
  const firstSpec = roundSteelBarData[0];

  return {
    specId: firstSpec?.id ?? "",
  };
}

function getDefaultFlatSteelBarSelection() {
  const firstSpec = flatSteelBarData[0];
  const firstThickness = firstSpec?.thicknessOptions[0];

  return {
    specId: firstSpec?.id ?? "",
    thicknessId: firstThickness ? getFlatSteelBarThicknessId(firstThickness.thicknessMm) : "",
  };
}

type StandardOptionMode = "thickness" | "referenceWeight";

function getStandardOptionMode(productType: ProductType): StandardOptionMode {
  return productType === "channel_steel" || productType === "i_beam"
    ? "referenceWeight"
    : "thickness";
}

function getStandardOptionLabel(productType: ProductType, m: Messages) {
  return getStandardOptionMode(productType) === "referenceWeight"
    ? m.fields.theoreticalWeight
    : m.fields.thickness;
}

function createId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createEmptyRow(productType: ProductType): MaterialRow {
  const id = createId("row");

  if (isSteelPipeProduct(productType)) {
    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: "",
      thicknessId: "",
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (isSquareTubeProduct(productType)) {
    const defaultSelection = getDefaultSquareTubeSelection(productType);

    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: defaultSelection.specId,
      thicknessId: defaultSelection.thicknessId,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "angle_steel") {
    const defaultSelection = getDefaultAngleSteelSelection();

    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: defaultSelection.specId,
      thicknessId: defaultSelection.thicknessId,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "channel_steel") {
    const defaultSelection = getDefaultChannelSteelSelection();

    return {
      id,
      productType,
      specId: defaultSelection.specId,
      referenceWeightId: defaultSelection.referenceWeightId,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "i_beam") {
    const defaultSelection = getDefaultIBeamSelection();

    return {
      id,
      productType,
      specId: defaultSelection.specId,
      referenceWeightId: defaultSelection.referenceWeightId,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "round_steel_bar") {
    const defaultSelection = getDefaultRoundSteelBarSelection();

    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: defaultSelection.specId,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "flat_steel_bar") {
    const defaultSelection = getDefaultFlatSteelBarSelection();

    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: defaultSelection.specId,
      thicknessId: defaultSelection.thicknessId,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  return {
    id,
    productType,
    fittingTypeId: "",
    nominalSizeId: "",
    modelId: "",
    quantity: 0,
    quantityUnit: "件",
  };
}

function createCustomRow(productType: CustomSizeProductType): MaterialRow {
  const id = createId("row");

  if (isSteelPipeProduct(productType)) {
    return {
      id,
      productType,
      dimensionMode: "custom",
      specId: "",
      thicknessId: "",
      customOuterDiameterMm: 60,
      customThicknessMm: 2.5,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "angle_steel") {
    return {
      id,
      productType,
      dimensionMode: "custom",
      specId: "",
      thicknessId: "",
      customLegAMm: 50,
      customLegBMm: 50,
      customThicknessMm: 4,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "round_steel_bar") {
    return {
      id,
      productType,
      dimensionMode: "custom",
      specId: "",
      customDiameterMm: 10,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "flat_steel_bar") {
    return {
      id,
      productType,
      dimensionMode: "custom",
      specId: "",
      thicknessId: "",
      customWidthMm: 40,
      customThicknessMm: 3,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  return {
    id,
    productType,
    dimensionMode: "custom",
    specId: "",
    thicknessId: "",
    customWidthMm: 50,
    customHeightMm: 50,
    customThicknessMm: 2,
    lengthM: 6,
    quantity: 0,
    quantityUnit: "支",
  };
}

function productName(type: ProductType, m: Messages) {
  return m.products[type];
}

function formatModuleRowCount(count: number, locale: Locale) {
  if (locale === "zh") {
    return `（${count}行）`;
  }

  return ` (${count} ${count === 1 ? "row" : "rows"})`;
}

function formatSummaryQuantity(totalLengths: number, totalItems: number, locale: Locale) {
  if (locale === "zh") {
    return `${formatQuantity(totalLengths, "支", locale)} / ${formatQuantity(totalItems, "件", locale)}`;
  }

  return `${formatNumber(totalLengths, 0, locale)} lengths / ${formatNumber(totalItems, 0, locale)} items`;
}

function categoryName(category: (typeof categories)[number], m: Messages) {
  if (category === "钢管类") {
    return m.productCategories.steelPipe;
  }

  if (category === "型钢类") {
    return m.productCategories.structuralSteel;
  }

  return m.productCategories.fireFittings;
}

function getGalvanizedPipeSelectedSpecLabel(specId: string, locale: Locale) {
  const spec = galvanizedPipeData.find((item) => item.id === specId);
  return spec ? formatGalvanizedPipeSpec(spec, locale) : "";
}

function getGalvanizedPipeSelectedThicknessLabel(specId: string, thicknessId: string, locale: Locale) {
  const spec = galvanizedPipeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getGalvanizedPipeThicknessId(item.thicknessMm) === thicknessId,
  );

  return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}

function getGalvanizedSheetPipeSelectedSpecLabel(specId: string, locale: Locale) {
  const spec = galvanizedSheetPipeData.find((item) => item.id === specId);
  return spec ? formatGalvanizedSheetPipeSpec(spec, locale) : "";
}

function getGalvanizedSheetPipeSelectedThicknessLabel(specId: string, thicknessId: string, locale: Locale) {
  const spec = galvanizedSheetPipeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getGalvanizedSheetPipeThicknessId(item.thicknessMm) === thicknessId,
  );

  return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}

function getBlackSteelPipeSelectedSpecLabel(specId: string, locale: Locale) {
  const spec = blackSteelPipeData.find((item) => item.id === specId);
  return spec ? formatBlackSteelPipeSpec(spec, locale) : "";
}

function getBlackSteelPipeSelectedThicknessLabel(specId: string, thicknessId: string, locale: Locale) {
  const spec = blackSteelPipeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getBlackSteelPipeThicknessId(item.thicknessMm) === thicknessId,
  );

  return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}

function getSquareTubeSelectedSpecLabel(productType: SquareTubeProductType, specId: string) {
  const spec = getSquareTubeData(productType).find((item) => item.id === specId);
  return spec ? formatGalvanizedSquareRectangularTubeSpec(spec) : "";
}

function getSquareTubeSelectedThicknessLabel(
  productType: SquareTubeProductType,
  specId: string,
  thicknessId: string,
  locale: Locale,
) {
  const spec = getSquareTubeData(productType).find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getSquareTubeThicknessId(productType, item.thicknessMm) === thicknessId,
  );

  return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}

function getAngleSteelSelectedSpecLabel(specId: string) {
  const spec = angleSteelSpecifications.find((item) => item.id === specId);
  return spec ? formatAngleSteelSpec(spec) : "";
}

function getAngleSteelSelectedThicknessLabel(specId: string, thicknessId: string, locale: Locale) {
  const spec = angleSteelSpecifications.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getAngleSteelThicknessId(item.thicknessMm) === thicknessId,
  );

  return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}

function formatChannelSteelSpec(nominalSize: string) {
  return `${nominalSize}#`;
}

function formatChannelSteelReferenceWeight(weightKg: number, locale: Locale) {
  return locale === "zh"
    ? `${formatNumber(weightKg, 2, locale)} kg/支`
    : `${formatNumber(weightKg, 2, locale)} kg/piece`;
}

function formatChannelSteelPiecesPerBundle(piecesPerBundle: number, locale: Locale) {
  return locale === "zh" ? `每扎${piecesPerBundle}支` : `${piecesPerBundle} pieces/bundle`;
}

function getChannelSteelSelectedSpecLabel(specId: string) {
  const spec = channelSteelData.find((item) => item.id === specId);
  return spec ? formatChannelSteelSpec(spec.nominalSize) : "";
}

function getChannelSteelSelectedWeightOption(specId: string, referenceWeightId: string) {
  const spec = channelSteelData.find((item) => item.id === specId);
  return spec?.weightOptions.find((item) => item.id === referenceWeightId);
}

function getChannelSteelSelectedReferenceWeightLabel(
  specId: string,
  referenceWeightId: string,
  locale: Locale,
) {
  const option = getChannelSteelSelectedWeightOption(specId, referenceWeightId);
  return option ? formatChannelSteelReferenceWeight(option.referenceWeightKgPerPiece, locale) : "";
}

function getChannelSteelSelectedBundleLabel(
  specId: string,
  referenceWeightId: string,
  locale: Locale,
) {
  const option = getChannelSteelSelectedWeightOption(specId, referenceWeightId);
  return option ? formatChannelSteelPiecesPerBundle(option.piecesPerBundle, locale) : "";
}

function formatNullablePiecesPerBundle(piecesPerBundle: number | null | undefined, locale: Locale, m: Messages) {
  if (!piecesPerBundle) {
    return m.notices.notProvided;
  }

  return formatChannelSteelPiecesPerBundle(piecesPerBundle, locale);
}

function formatReferenceWeightPerPiece(weightKg: number, locale: Locale) {
  return locale === "zh"
    ? `${formatNumber(weightKg, 2, locale)} kg / 6米`
    : `${formatNumber(weightKg, 2, locale)} kg / 6 m`;
}

function getIBeamSelectedWeightOption(specId: string, referenceWeightId: string) {
  const spec = iBeamData.find((item) => item.id === specId);
  return spec?.weightOptions.find((item) => item.id === referenceWeightId);
}

function getIBeamSelectedReferenceWeightLabel(specId: string, referenceWeightId: string, locale: Locale) {
  const option = getIBeamSelectedWeightOption(specId, referenceWeightId);
  return option ? formatReferenceWeightPerPiece(option.referenceWeightKgPerPiece, locale) : "";
}

function getIBeamSelectedBundleLabel(specId: string, referenceWeightId: string, locale: Locale, m: Messages) {
  const option = getIBeamSelectedWeightOption(specId, referenceWeightId);
  return option ? formatNullablePiecesPerBundle(option.piecesPerBundle, locale, m) : "";
}

function formatRoundSteelBarSpec(specId: string) {
  const spec = roundSteelBarData.find((item) => item.id === specId);
  return spec?.sizeLabel ?? "";
}

function getRoundSteelBarSelectedReferenceWeightLabel(specId: string, locale: Locale) {
  const spec = roundSteelBarData.find((item) => item.id === specId);
  return spec ? formatReferenceWeightPerPiece(spec.referenceWeightKgPerPiece, locale) : "";
}

function getRoundSteelBarSelectedBundleLabel(specId: string, locale: Locale, m: Messages) {
  const spec = roundSteelBarData.find((item) => item.id === specId);
  return spec ? formatNullablePiecesPerBundle(spec.piecesPerBundle, locale, m) : "";
}

function formatFlatSteelBarSpec(widthMm: number) {
  return `${widthMm} mm`;
}

function getFlatSteelBarSelectedSpecLabel(specId: string) {
  const spec = flatSteelBarData.find((item) => item.id === specId);
  return spec ? formatFlatSteelBarSpec(spec.widthMm) : "";
}

function getFlatSteelBarSelectedThicknessOption(specId: string, thicknessId: string) {
  const spec = flatSteelBarData.find((item) => item.id === specId);
  return spec?.thicknessOptions.find((item) => getFlatSteelBarThicknessId(item.thicknessMm) === thicknessId);
}

function getFlatSteelBarSelectedThicknessLabel(specId: string, thicknessId: string, locale: Locale) {
  const option = getFlatSteelBarSelectedThicknessOption(specId, thicknessId);
  return option ? formatThicknessValue(option.thicknessMm, locale) : "";
}

function getFlatSteelBarSelectedReferenceWeightLabel(specId: string, thicknessId: string, locale: Locale) {
  const option = getFlatSteelBarSelectedThicknessOption(specId, thicknessId);
  return option ? formatReferenceWeightPerPiece(option.referenceWeightKgPerPiece, locale) : "";
}

function getFlatSteelBarSelectedBundleLabel(specId: string, thicknessId: string, locale: Locale, m: Messages) {
  const option = getFlatSteelBarSelectedThicknessOption(specId, thicknessId);
  return option ? formatNullablePiecesPerBundle(option.piecesPerBundle, locale, m) : "";
}

function getStandardSteelPipeLengthM(row: MaterialRow) {
  if (row.productType === "black_steel_pipe" && row.dimensionMode !== "custom") {
    const spec = blackSteelPipeData.find((item) => item.id === row.specId);
    const thickness = spec?.thicknessOptions.find(
      (item) => getBlackSteelPipeThicknessId(item.thicknessMm) === row.thicknessId,
    );

    return thickness?.standardLengthM ?? 6;
  }

  return 6;
}

function isFixedLengthStandardSteelPipeRow(row: MaterialRow) {
  return (
    (row.productType === "galvanized_pipe" ||
      row.productType === "galvanized_sheet_pipe" ||
      row.productType === "black_steel_pipe" ||
      isSquareTubeProduct(row.productType) ||
      row.productType === "angle_steel" ||
      row.productType === "channel_steel" ||
      row.productType === "i_beam" ||
      row.productType === "round_steel_bar" ||
      row.productType === "flat_steel_bar") &&
    ("dimensionMode" in row ? row.dimensionMode !== "custom" : true)
  );
}

function getDisplayLengthM(row: Exclude<MaterialRow, { productType: "grooved_fitting" }>) {
  return isFixedLengthStandardSteelPipeRow(row) ? getStandardSteelPipeLengthM(row) : row.lengthM;
}

function getRowDescription(row: MaterialRow, locale: Locale, m: Messages) {
  if (isSteelPipeProduct(row.productType)) {
    if (row.dimensionMode === "custom") {
      return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.outerDiameter} ${
        row.customOuterDiameterMm || 0
      } ${locale === "zh" ? "mm" : "mm"} / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
    }

    return [
      row.productType === "galvanized_pipe"
        ? getGalvanizedPipeSelectedSpecLabel(row.specId, locale)
        : row.productType === "galvanized_sheet_pipe"
          ? getGalvanizedSheetPipeSelectedSpecLabel(row.specId, locale)
          : row.productType === "black_steel_pipe"
            ? getBlackSteelPipeSelectedSpecLabel(row.specId, locale)
            : row.specId,
      row.productType === "galvanized_pipe"
        ? getGalvanizedPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale)
        : row.productType === "galvanized_sheet_pipe"
          ? getGalvanizedSheetPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale)
          : row.productType === "black_steel_pipe"
            ? getBlackSteelPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale)
            : row.thicknessId,
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (isSquareTubeProduct(row.productType)) {
    if (row.dimensionMode === "custom") {
      return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${row.customWidthMm || 0}×${
        row.customHeightMm || 0
      } mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
    }

    return [
      getSquareTubeSelectedSpecLabel(row.productType, row.specId),
      getSquareTubeSelectedThicknessLabel(row.productType, row.specId, row.thicknessId, locale),
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "angle_steel") {
    if (row.dimensionMode === "custom") {
      return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${row.customLegAMm || 0}×${
        row.customLegBMm || 0
      } mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
    }

    return [
      getAngleSteelSelectedSpecLabel(row.specId),
      getAngleSteelSelectedThicknessLabel(row.specId, row.thicknessId, locale),
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "channel_steel") {
    return [
      getChannelSteelSelectedSpecLabel(row.specId),
      getChannelSteelSelectedReferenceWeightLabel(row.specId, row.referenceWeightId, locale),
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "i_beam") {
    return [
      `${m.fields.spec} ${row.specId}`,
      `${m.fields.theoreticalWeight} ${getIBeamSelectedReferenceWeightLabel(row.specId, row.referenceWeightId, locale)}`,
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "round_steel_bar") {
    if (row.dimensionMode === "custom") {
      return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.diameter} ${
        row.customDiameterMm || 0
      } mm`;
    }

    return [
      `${m.fields.diameter} ${formatRoundSteelBarSpec(row.specId)}`,
      `${m.fields.theoreticalWeight} ${getRoundSteelBarSelectedReferenceWeightLabel(row.specId, locale)}`,
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "flat_steel_bar") {
    if (row.dimensionMode === "custom") {
      return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.width} ${
        row.customWidthMm || 0
      } mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
    }

    return [
      `${m.fields.width} ${getFlatSteelBarSelectedSpecLabel(row.specId)}`,
      `${m.fields.thickness} ${getFlatSteelBarSelectedThicknessLabel(row.specId, row.thicknessId, locale)}`,
      `${m.fields.theoreticalWeight} ${getFlatSteelBarSelectedReferenceWeightLabel(row.specId, row.thicknessId, locale)}`,
    ]
      .filter(Boolean)
      .join(" / ");
  }

  const option = groovedFittingOptions.find(
    (item) =>
      item.fittingTypeId === row.fittingTypeId &&
      item.nominalSizeId === row.nominalSizeId &&
      item.modelId === row.modelId,
  );

  return option
    ? `${option.fittingTypeLabel} / ${option.nominalSizeLabel} / ${option.modelLabel}`
    : [row.fittingTypeId, row.nominalSizeId, row.modelId].filter(Boolean).join(" / ");
}

function uniqueBy<T>(items: T[], key: (item: T) => string) {
  return items.filter((item, index) => {
    return items.findIndex((candidate) => key(candidate) === key(item)) === index;
  });
}

function normalizeStoredMaterialList(value: MaterialList): MaterialList {
  return {
    modules: value.modules.map((module) => {
      const productType =
        (module.productType as string) === "square_tube"
          ? "galvanized_square_rectangular_tube"
          : module.productType;

      return {
      ...module,
      productType,
      rows: module.rows.map((row) => {
        const normalizedRow =
          row.productType === "round_pipe"
            ? ({ ...row, productType: "galvanized_pipe" } as MaterialRow)
            : (row.productType as string) === "square_tube"
              ? ({ ...row, productType: "galvanized_square_rectangular_tube" } as MaterialRow)
            : row;

        if (normalizedRow.productType === "channel_steel") {
          const firstSpec = channelSteelData[0];
          const matchingSpec =
            channelSteelData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
          const referenceWeightId =
            "referenceWeightId" in normalizedRow ? normalizedRow.referenceWeightId : "";
          const matchingWeight =
            matchingSpec?.weightOptions.find((option) => option.id === referenceWeightId) ??
            matchingSpec?.weightOptions[0];

          return {
            ...normalizedRow,
            specId: matchingSpec?.id ?? "",
            referenceWeightId: matchingWeight?.id ?? "",
            lengthM: 6,
            quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
          };
        }

        if (normalizedRow.productType === "i_beam") {
          const firstSpec = iBeamData[0];
          const matchingSpec =
            iBeamData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
          const referenceWeightId =
            "referenceWeightId" in normalizedRow ? normalizedRow.referenceWeightId : "";
          const matchingWeight =
            matchingSpec?.weightOptions.find((option) => option.id === referenceWeightId) ??
            matchingSpec?.weightOptions[0];

          return {
            ...normalizedRow,
            specId: matchingSpec?.id ?? "",
            referenceWeightId: matchingWeight?.id ?? "",
            lengthM: 6,
            quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
          };
        }

        if (normalizedRow.productType === "round_steel_bar") {
          const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
          const dimensionMode = normalizedRow.dimensionMode ?? "standard";

          if (dimensionMode === "standard") {
            const firstSpec = roundSteelBarData[0];
            const matchingSpec =
              roundSteelBarData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;

            return {
              ...normalizedRow,
              dimensionMode,
              specId: matchingSpec?.id ?? "",
              lengthM: 6,
              quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
            };
          }

          return {
            ...normalizedRow,
            dimensionMode,
            lengthM,
            quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
          };
        }

        if (normalizedRow.productType === "flat_steel_bar") {
          const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
          const dimensionMode = normalizedRow.dimensionMode ?? "standard";

          if (dimensionMode === "standard") {
            const firstSpec = flatSteelBarData[0];
            const matchingSpec =
              flatSteelBarData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
            const matchingThickness =
              matchingSpec?.thicknessOptions.find(
                (thickness) => getFlatSteelBarThicknessId(thickness.thicknessMm) === normalizedRow.thicknessId,
              ) ?? matchingSpec?.thicknessOptions[0];

            return {
              ...normalizedRow,
              dimensionMode,
              specId: matchingSpec?.id ?? "",
              thicknessId: matchingThickness ? getFlatSteelBarThicknessId(matchingThickness.thicknessMm) : "",
              lengthM: 6,
              quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
            };
          }

          return {
            ...normalizedRow,
            dimensionMode,
            lengthM,
            quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
          };
        }

        if (
          isSteelPipeProduct(normalizedRow.productType) ||
          isSquareTubeProduct(normalizedRow.productType) ||
          normalizedRow.productType === "angle_steel"
        ) {
          const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
          const dimensionMode = normalizedRow.dimensionMode ?? "standard";

          if (
            isSquareTubeProduct(normalizedRow.productType) &&
            dimensionMode === "standard"
          ) {
            const squareTubeData = getSquareTubeData(normalizedRow.productType);
            const firstSpec = squareTubeData[0];
            const matchingSpec =
              squareTubeData.find((spec) => spec.id === normalizedRow.specId) ??
              firstSpec;
            const matchingThickness = matchingSpec?.thicknessOptions.find(
              (thickness) =>
                getSquareTubeThicknessId(normalizedRow.productType, thickness.thicknessMm) ===
                normalizedRow.thicknessId,
            ) ?? matchingSpec?.thicknessOptions[0];

            return {
              ...normalizedRow,
              dimensionMode,
              specId: matchingSpec?.id ?? "",
              thicknessId: matchingThickness
                ? getSquareTubeThicknessId(normalizedRow.productType, matchingThickness.thicknessMm)
                : "",
              lengthM: 6,
              quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
            };
          }

          if (normalizedRow.productType === "angle_steel" && dimensionMode === "standard") {
            const firstSpec = angleSteelSpecifications[0];
            const matchingSpec =
              angleSteelSpecifications.find((spec) => spec.id === normalizedRow.specId) ??
              firstSpec;
            const matchingThickness = matchingSpec?.thicknessOptions.find(
              (thickness) => getAngleSteelThicknessId(thickness.thicknessMm) === normalizedRow.thicknessId,
            ) ?? matchingSpec?.thicknessOptions[0];

            return {
              ...normalizedRow,
              dimensionMode,
              specId: matchingSpec?.id ?? "",
              thicknessId: matchingThickness
                ? getAngleSteelThicknessId(matchingThickness.thicknessMm)
                : "",
              lengthM: 6,
              quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
            };
          }

          return {
            ...normalizedRow,
            dimensionMode,
            lengthM:
              (normalizedRow.productType === "galvanized_pipe" ||
                normalizedRow.productType === "galvanized_sheet_pipe") &&
              dimensionMode === "standard"
                ? 6
                : lengthM,
            quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
          };
        }

        return {
          ...normalizedRow,
          quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
        };
      }),
    };
    }),
  };
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [materialList, setMaterialList] = useState<MaterialList>({ modules: [] });
  const [hasRestoredMaterialList, setHasRestoredMaterialList] = useState(false);
  const m = messages[locale];
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    country: "",
    whatsapp: "",
    email: "",
    port: "",
    notes: "",
  });
  const moduleRefs = useRef<Partial<Record<ProductType, HTMLDivElement | null>>>({});

  useEffect(() => {
    window.setTimeout(() => {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setMaterialList(normalizeStoredMaterialList(JSON.parse(saved) as MaterialList));
        } catch {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }

      setHasRestoredMaterialList(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (hasRestoredMaterialList) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(materialList));
    }
  }, [hasRestoredMaterialList, materialList]);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(savedLocale)) {
      window.setTimeout(() => setLocale(savedLocale), 0);
    }
  }, []);

  useEffect(() => {
    document.title = pageTitles[locale];
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  function switchLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  }

  const summary = useMemo(() => calculateSummary(materialList), [materialList]);

  const rfqText = useMemo(() => {
    if (locale === "en") {
      const lines = [
        m.inquiry.rfqHeader,
        "",
        `${m.inquiry.customerName}: ${customer.name || "-"}`,
        `${m.inquiry.companyName}: ${customer.company || "-"}`,
        `${m.inquiry.country}: ${customer.country || "-"}`,
        `${m.inquiry.whatsapp}: ${customer.whatsapp || "-"}`,
        `${m.inquiry.email}: ${customer.email || "-"}`,
        `${m.inquiry.destinationPort}: ${customer.port || "-"}`,
        "",
        `${m.inquiry.listTitle}:`,
      ];

      materialList.modules.forEach((module) => {
        lines.push(`\n${productName(module.productType, m)}`);
        module.rows.forEach((row, index) => {
          const calc = calculateRow(row);
          const description = getRowDescription(row, locale, m) || m.materialList.specPending;
          lines.push(`${index + 1}. ${description}`);
          if ("lengthM" in row) {
            lines.push(`${m.fields.length}: ${formatLength(getDisplayLengthM(row), locale)}`);
          }
          lines.push(`${m.fields.quantity}: ${formatQuantity(row.quantity, row.quantityUnit, locale)}`);
          if (
            (row.productType === "pre_galvanized_square_rectangular_tube" ||
              row.productType === "angle_steel" ||
              row.productType === "channel_steel" ||
              row.productType === "i_beam" ||
              row.productType === "round_steel_bar" ||
              row.productType === "flat_steel_bar") &&
            calc.hasWeight
          ) {
            lines.push(`${m.fields.pieceWeight}: ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`);
          }
          lines.push(
            `${m.fields.totalWeight}: ${
              calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending
            }`,
          );
        });
      });

      lines.push("");
      lines.push(`${m.summary.theoreticalWeight}: ${formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)}`);
      lines.push(`${m.summary.containerEstimate}: ${summary.containerCount} × 40HQ`);
      if (summary.missingWeightRowCount > 0) {
        lines.push(`${m.summary.missingWeight}: ${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`);
      }
      lines.push(`${m.inquiry.destinationPort}: ${customer.port || "-"}`);
      lines.push(`${m.inquiry.notes}: ${customer.notes || "-"}`);
      lines.push("");
      lines.push("Please send me your quotation.");

      return lines.join("\n");
    }

    const lines = [
      m.inquiry.rfqHeader,
      "",
      `${m.inquiry.customerName}：${customer.name || "-"}`,
      `${m.inquiry.companyName}：${customer.company || "-"}`,
      `${m.inquiry.country}：${customer.country || "-"}`,
      `${m.inquiry.whatsapp}：${customer.whatsapp || "-"}`,
      `${m.inquiry.email}：${customer.email || "-"}`,
      `${m.inquiry.destinationPort}：${customer.port || "-"}`,
      "",
      `${m.inquiry.listTitle}：`,
    ];

    materialList.modules.forEach((module) => {
      lines.push(`\n${productName(module.productType, m)}`);
      module.rows.forEach((row, index) => {
        const calc = calculateRow(row);
        const description = getRowDescription(row, locale, m) || m.materialList.specPending;
        const length = "lengthM" in row ? `，${m.fields.length} ${formatLength(getDisplayLengthM(row), locale)}` : "";
        const pieceWeight =
          row.productType === "pre_galvanized_square_rectangular_tube" && calc.hasWeight
            ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`
            : row.productType === "angle_steel" && calc.hasWeight
            ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`
            : row.productType === "channel_steel" && calc.hasWeight
            ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`
            : (row.productType === "i_beam" ||
                  row.productType === "round_steel_bar" ||
                  row.productType === "flat_steel_bar") &&
                calc.hasWeight
              ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`
            : "";
        lines.push(
          `${index + 1}. ${description}${length}，${m.fields.quantity} ${formatQuantity(row.quantity, row.quantityUnit, locale)}${pieceWeight}，${
            m.fields.totalWeight
          } ${calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending
          }`,
        );
      });
    });

    lines.push("");
    lines.push(`${m.summary.theoreticalWeight}：${formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)}`);
    lines.push(
      `${m.summary.containerEstimate}：${
        summary.containerCount > 0
          ? `${m.summary.estimated} ${summary.containerCount} × 40HQ`
          : `${m.summary.estimated} 0 × 40HQ`
      }`,
    );
    if (summary.missingWeightRowCount > 0) {
      lines.push(`${m.summary.missingWeight}：${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`);
    }
    lines.push(`${m.inquiry.notes}：${customer.notes || "-"}`);

    return lines.join("\n");
  }, [customer, locale, m, materialList, summary]);

  function addProduct(productType: ProductType) {
    setActiveProduct(productType);
    setMaterialList((current) => {
      const existing = current.modules.find((module) => module.productType === productType);

      if (existing) {
        return {
          modules: current.modules.map((module) =>
            module.productType === productType
              ? { ...module, rows: [...module.rows, createEmptyRow(productType)] }
              : module,
          ),
        };
      }

      return {
        modules: [
          ...current.modules,
          {
            id: createId("module"),
            productType,
            rows: [createEmptyRow(productType)],
          },
        ],
      };
    });

    window.setTimeout(() => {
      moduleRefs.current[productType]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function addRow(productType: ProductType) {
    addProduct(productType);
  }

  function addCustomRow(productType: CustomSizeProductType) {
    setActiveProduct(productType);
    setMaterialList((current) => {
      const existing = current.modules.find((module) => module.productType === productType);

      if (existing) {
        return {
          modules: current.modules.map((module) =>
            module.productType === productType
              ? { ...module, rows: [...module.rows, createCustomRow(productType)] }
              : module,
          ),
        };
      }

      return {
        modules: [
          ...current.modules,
          {
            id: createId("module"),
            productType,
            rows: [createCustomRow(productType)],
          },
        ],
      };
    });

    window.setTimeout(() => {
      moduleRefs.current[productType]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function updateRow(rowId: string, updates: Record<string, string | number>) {
    setMaterialList((current) => ({
      modules: current.modules.map((module) => ({
        ...module,
        rows: module.rows.map((row) =>
          row.id === rowId ? ({ ...row, ...updates } as MaterialRow) : row,
        ),
      })),
    }));
  }

  function deleteRow(moduleId: string, rowId: string) {
    setMaterialList((current) => ({
      modules: current.modules.map((module) =>
        module.id === moduleId
          ? { ...module, rows: module.rows.filter((row) => row.id !== rowId) }
          : module,
      ),
    }));
  }

  function duplicateRow(moduleId: string, row: MaterialRow) {
    setMaterialList((current) => ({
      modules: current.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              rows: module.rows.flatMap((item) =>
                item.id === row.id ? [item, { ...row, id: createId("row") }] : [item],
              ),
            }
          : module,
      ),
    }));
  }

  function deleteModule(moduleId: string) {
    setMaterialList((current) => ({
      modules: current.modules.filter((module) => module.id !== moduleId),
    }));
  }

  function clearAll() {
    setMaterialList({ modules: [] });
  }

  async function copyRfq() {
    await navigator.clipboard.writeText(rfqText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="app-shell min-h-screen bg-slate-100 pb-32 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0e2a47] text-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/canhope-logo.png"
                alt="CANHOPE STEEL logo"
                className="h-full w-full object-contain"
              />
            </span>
            <div className="min-w-0">
              <div className="text-lg font-bold leading-5 tracking-normal">CANHOPE STEEL</div>
              <div className="truncate text-xs text-blue-100">{m.nav.subtitle}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-blue-100 md:flex">
            <div className="flex items-center gap-2">
              <button className={`nav-link ${locale === "zh" ? "text-white" : ""}`} type="button" onClick={() => switchLocale("zh")}>
                {m.nav.languageZh}
              </button>
              <span className="text-blue-200">|</span>
              <button className={`nav-link ${locale === "en" ? "text-white" : ""}`} type="button" onClick={() => switchLocale("en")}>
                {m.nav.languageEn}
              </button>
            </div>
            <button className="nav-link" type="button">
              {m.nav.instructions}
            </button>
            <button className="primary-button" type="button" onClick={() => setIsRfqOpen(true)}>
              {m.nav.sendRfq} ({summary.validRowCount})
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <button
              className="mobile-language-button"
              type="button"
              onClick={() => switchLocale(locale === "zh" ? "en" : "zh")}
              aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>
            <button className="primary-button mobile-rfq-button" type="button" onClick={() => setIsRfqOpen(true)}>
              {m.nav.mobileRfq} ({summary.validRowCount})
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6">
        <div className="intro-panel">
          <div>
            <p className="text-xl font-bold text-slate-950">{m.company.name}</p>
            <p className="text-sm font-semibold uppercase text-[#0e5f9f]">{m.company.englishName}</p>
          </div>
          <div className="max-w-3xl text-sm leading-6 text-slate-600">
            {m.company.description}
            <a className="ml-2 font-semibold text-[#0e5f9f]" href="https://canhopesteel.com" target="_blank">
              canhopesteel.com
            </a>
          </div>
          <div className="intro-tags">
            {m.company.tags.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-5 px-4 sm:px-6 min-[900px]:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="sidebar-panel">
          <p className="mb-5 text-base font-bold text-slate-950">{m.materialList.addHint}</p>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <p className="mb-2 text-xs font-bold uppercase text-slate-500">{categoryName(category, m)}</p>
                <div className="grid gap-2">
                  {productDefinitions
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <button
                        key={product.type}
                        className={`product-button ${activeProduct === product.type ? "is-active" : ""}`}
                        type="button"
                        onClick={() => addProduct(product.type)}
                      >
                        <span>{productName(product.type, m)}</span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="content-panel">
          <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-normal text-slate-950">{m.materialList.title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="secondary-button" type="button" onClick={clearAll}>
                {m.actions.clearAll}
              </button>
            </div>
          </div>

          {materialList.modules.length === 0 ? (
            <div className="empty-state">
              <p className="text-lg font-bold text-slate-950">{m.materialList.emptyTitle}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                {m.materialList.emptyDescription}
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {materialList.modules.map((module) => (
                <ProductModule
                  key={module.id}
                  module={module}
                  setModuleRef={(node) => {
                    moduleRefs.current[module.productType] = node;
                  }}
                  onAddRow={addRow}
                  onAddCustomRow={addCustomRow}
                  onDeleteModule={deleteModule}
                  onUpdateRow={updateRow}
                  onDeleteRow={deleteRow}
                  onDuplicateRow={duplicateRow}
                  locale={locale}
                  m={m}
                />
              ))}
            </div>
          )}
        </section>
      </section>

      <SummaryBar summary={summary} onOpenRfq={() => setIsRfqOpen(true)} locale={locale} m={m} />

      {isRfqOpen ? (
        <RfqModal
          customer={customer}
          setCustomer={setCustomer}
          materialList={materialList}
          summary={summary}
          rfqText={rfqText}
          copied={copied}
          onCopy={copyRfq}
          onClose={() => setIsRfqOpen(false)}
          locale={locale}
          m={m}
        />
      ) : null}
    </main>
  );
}

function ProductModule({
  module,
  setModuleRef,
  onAddRow,
  onAddCustomRow,
  onDeleteModule,
  onUpdateRow,
  onDeleteRow,
  onDuplicateRow,
  locale,
  m,
}: {
  module: MaterialModule;
  setModuleRef: (node: HTMLDivElement | null) => void;
  onAddRow: (productType: ProductType) => void;
  onAddCustomRow: (productType: CustomSizeProductType) => void;
  onDeleteModule: (moduleId: string) => void;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onDeleteRow: (moduleId: string, rowId: string) => void;
  onDuplicateRow: (moduleId: string, row: MaterialRow) => void;
  locale: Locale;
  m: Messages;
}) {
  const subtotal = calculateModuleSubtotal(module);
  const missingRows = module.rows.filter((row) => row.quantity > 0 && !calculateRow(row).hasWeight).length;
  const subtotalLabel =
    missingRows > 0 && subtotal === 0
      ? m.notices.weightPending
      : missingRows > 0
        ? `${formatTonFromKg(subtotal, locale, m.notices.weightPending)}，${m.summary.additionalMissingRows.replace("{count}", String(missingRows))}`
        : formatTonFromKg(subtotal, locale, m.notices.weightPending);

  return (
    <div ref={setModuleRef} className="module-card scroll-mt-24">
      <div className="module-header">
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            {productName(module.productType, m)}
            {formatModuleRowCount(module.rows.length, locale)}
          </h2>
          <p className="text-sm text-slate-500">
            {m.materialList.subtotal}：{subtotalLabel}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="small-blue-button" type="button" onClick={() => onAddRow(module.productType)}>
            {m.actions.addSpec}
          </button>
          <button className="secondary-button" type="button" onClick={() => onDeleteModule(module.id)}>
            {m.actions.deleteModule}
          </button>
        </div>
      </div>

      {module.rows.length === 0 ? (
        <div className="rounded-md border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500">
          {m.materialList.noRows}
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="material-table">
              <ProductTableHead productType={module.productType} m={m} />
              <tbody>
                {module.rows.map((row) => (
                  <ProductRow
                    key={row.id}
                    row={row}
                    moduleId={module.id}
                    onUpdateRow={onUpdateRow}
                    onDeleteRow={onDeleteRow}
                    onDuplicateRow={onDuplicateRow}
                    onAddCustomRow={onAddCustomRow}
                    locale={locale}
                    m={m}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 md:hidden">
            {module.rows.map((row) => (
              <MobileRowCard
                key={row.id}
                row={row}
                moduleId={module.id}
                onUpdateRow={onUpdateRow}
                onDeleteRow={onDeleteRow}
                onDuplicateRow={onDuplicateRow}
                onAddCustomRow={onAddCustomRow}
                locale={locale}
                m={m}
              />
            ))}
          </div>
        </>
      )}

      {isCustomSizeProduct(module.productType) ? (
        <button className="custom-size-link" type="button" onClick={() => onAddCustomRow(module.productType)}>
          {m.customSize.noSuitableSpec}
          {locale === "zh" ? "" : " "}
          {m.customSize.useCustomSize}
        </button>
      ) : null}
    </div>
  );
}

function ProductTableHead({ productType, m }: { productType: ProductType; m: Messages }) {
  const commonEnd = [m.fields.quantity, m.fields.unitWeight, m.fields.pieceWeightFull, m.fields.totalWeight, m.fields.action];
  const columns =
    isSteelPipeProduct(productType) || isSquareTubeProduct(productType)
      ? [m.fields.spec, getStandardOptionLabel(productType, m), m.fields.length, ...commonEnd]
      : productType === "angle_steel"
        ? [m.fields.spec, getStandardOptionLabel(productType, m), m.fields.length, ...commonEnd]
        : productType === "channel_steel"
          ? [
              m.fields.spec,
              getStandardOptionLabel(productType, m),
              m.fields.length,
              m.fields.quantity,
              m.fields.piecesPerBundle,
              m.fields.unitWeight,
              m.fields.pieceWeightFull,
              m.fields.totalWeight,
              m.fields.action,
            ]
          : productType === "i_beam"
            ? [
                m.fields.spec,
                m.fields.theoreticalWeight,
                m.fields.length,
                m.fields.quantity,
                m.fields.piecesPerBundle,
                m.fields.unitWeight,
                m.fields.pieceWeightFull,
                m.fields.totalWeight,
                m.fields.action,
              ]
            : productType === "round_steel_bar"
              ? [
                  m.fields.diameter,
                  m.fields.theoreticalWeight,
                  m.fields.length,
                  m.fields.quantity,
                  m.fields.piecesPerBundle,
                  m.fields.unitWeight,
                  m.fields.pieceWeightFull,
                  m.fields.totalWeight,
                  m.fields.action,
                ]
              : productType === "flat_steel_bar"
                ? [
                    m.fields.width,
                    m.fields.thickness,
                    m.fields.theoreticalWeight,
                    m.fields.length,
                    m.fields.quantity,
                    m.fields.piecesPerBundle,
                    m.fields.unitWeight,
                    m.fields.pieceWeightFull,
                    m.fields.totalWeight,
                    m.fields.action,
                  ]
          : [m.fields.fittingType, m.fields.size, m.fields.modelOrAngle, ...commonEnd];

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
}

function ProductRow({
  row,
  moduleId,
  onUpdateRow,
  onDeleteRow,
  onDuplicateRow,
  onAddCustomRow,
  locale,
  m,
}: {
  row: MaterialRow;
  moduleId: string;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onDeleteRow: (moduleId: string, rowId: string) => void;
  onDuplicateRow: (moduleId: string, row: MaterialRow) => void;
  onAddCustomRow: (productType: CustomSizeProductType) => void;
  locale: Locale;
  m: Messages;
}) {
  const calc = calculateRow(row);
  const actionCells = (
    <>
      <td>
        <WeightCell calculation={calc} locale={locale} m={m} />
      </td>
      <td>{calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightPending) : <MissingWeight m={m} />}</td>
      <td className="font-bold text-slate-950">
        {calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : <MissingWeight m={m} />}
      </td>
      <td>
        <div className="row-actions">
          <button type="button" onClick={() => onDuplicateRow(moduleId, row)}>
            {m.actions.copy}
          </button>
          <button type="button" onClick={() => onDeleteRow(moduleId, row.id)}>
            {m.actions.delete}
          </button>
        </div>
      </td>
    </>
  );

  if (isSteelPipeProduct(row.productType)) {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <CustomRoundCells row={row} onUpdateRow={onUpdateRow} m={m} />
        ) : (
          <>
            <td>
              <SteelPipeSpecSelect
                productType={row.productType}
                value={row.specId}
                onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
                locale={locale}
                m={m}
              />
            </td>
            <td>
              <SteelPipeThicknessSelect
                productType={row.productType}
                specId={row.specId}
                value={row.thicknessId}
                onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
                locale={locale}
                m={m}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        {actionCells}
      </tr>
    );
  }

  if (isSquareTubeProduct(row.productType)) {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <CustomSquareCells row={row} onUpdateRow={onUpdateRow} m={m} />
        ) : (
          <>
            <td>
              <SquareTubeSpecSelect
                productType={row.productType}
                value={row.specId}
                onChange={(specId) => {
                  const nextSpec = getSquareTubeData(row.productType).find((spec) => spec.id === specId);
                  const nextThickness = nextSpec?.thicknessOptions[0];
                  onUpdateRow(row.id, {
                    specId,
                    thicknessId: nextThickness
                      ? getSquareTubeThicknessId(row.productType, nextThickness.thicknessMm)
                      : "",
                    lengthM: 6,
                  });
                }}
                m={m}
              />
            </td>
            <td>
              <SquareTubeThicknessSelect
                productType={row.productType}
                specId={row.specId}
                value={row.thicknessId}
                onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
                locale={locale}
                m={m}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "angle_steel") {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <CustomAngleCells row={row} onUpdateRow={onUpdateRow} m={m} />
        ) : (
          <>
            <td>
              <AngleSteelSpecSelect
                value={row.specId}
                onChange={(specId) => {
                  const nextSpec = angleSteelSpecifications.find((spec) => spec.id === specId);
                  const nextThickness = nextSpec?.thicknessOptions[0];
                  onUpdateRow(row.id, {
                    specId,
                    thicknessId: nextThickness ? getAngleSteelThicknessId(nextThickness.thicknessMm) : "",
                    lengthM: 6,
                  });
                }}
                m={m}
              />
            </td>
            <td>
              <AngleSteelThicknessSelect
                specId={row.specId}
                value={row.thicknessId}
                onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
                locale={locale}
                m={m}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "channel_steel") {
    return (
      <tr>
        <td>
          <ChannelSteelSpecSelect
            value={row.specId}
            onChange={(specId) => {
              const nextSpec = channelSteelData.find((spec) => spec.id === specId);
              const nextWeight = nextSpec?.weightOptions[0];
              onUpdateRow(row.id, {
                specId,
                referenceWeightId: nextWeight?.id ?? "",
                lengthM: 6,
              });
            }}
            m={m}
          />
        </td>
        <td>
          <ChannelSteelReferenceWeightSelect
            specId={row.specId}
            value={row.referenceWeightId}
            onChange={(referenceWeightId) => onUpdateRow(row.id, { referenceWeightId })}
            locale={locale}
            m={m}
          />
        </td>
        <LengthInput row={row} onUpdateRow={onUpdateRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        <td>{getChannelSteelSelectedBundleLabel(row.specId, row.referenceWeightId, locale) || <MissingWeight m={m} />}</td>
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "i_beam") {
    return (
      <tr>
        <td>
          <IBeamSpecSelect
            value={row.specId}
            onChange={(specId) => {
              const nextSpec = iBeamData.find((spec) => spec.id === specId);
              const nextWeight = nextSpec?.weightOptions[0];
              onUpdateRow(row.id, {
                specId,
                referenceWeightId: nextWeight?.id ?? "",
                lengthM: 6,
              });
            }}
            m={m}
          />
        </td>
        <td>
          <IBeamReferenceWeightSelect
            specId={row.specId}
            value={row.referenceWeightId}
            onChange={(referenceWeightId) => onUpdateRow(row.id, { referenceWeightId })}
            locale={locale}
            m={m}
          />
        </td>
        <LengthInput row={row} onUpdateRow={onUpdateRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        <td>{getIBeamSelectedBundleLabel(row.specId, row.referenceWeightId, locale, m)}</td>
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "round_steel_bar") {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <>
            <CustomRoundSteelBarCells row={row} onUpdateRow={onUpdateRow} m={m} />
            <td>{m.customSize.customSpec}</td>
          </>
        ) : (
          <>
            <td>
              <RoundSteelBarSpecSelect
                value={row.specId}
                onChange={(specId) => onUpdateRow(row.id, { specId, lengthM: 6 })}
                m={m}
              />
            </td>
            <td>
              <input
                className="field"
                readOnly
                value={getRoundSteelBarSelectedReferenceWeightLabel(row.specId, locale)}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        <td>{row.dimensionMode === "custom" ? m.notices.notProvided : getRoundSteelBarSelectedBundleLabel(row.specId, locale, m)}</td>
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "flat_steel_bar") {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <>
            <CustomFlatSteelBarCells row={row} onUpdateRow={onUpdateRow} m={m} />
            <td>{m.customSize.customSpec}</td>
          </>
        ) : (
          <>
            <td>
              <FlatSteelBarSpecSelect
                value={row.specId}
                onChange={(specId) => {
                  const nextSpec = flatSteelBarData.find((spec) => spec.id === specId);
                  const nextThickness = nextSpec?.thicknessOptions[0];
                  onUpdateRow(row.id, {
                    specId,
                    thicknessId: nextThickness ? getFlatSteelBarThicknessId(nextThickness.thicknessMm) : "",
                    lengthM: 6,
                  });
                }}
                m={m}
              />
            </td>
            <td>
              <FlatSteelBarThicknessSelect
                specId={row.specId}
                value={row.thicknessId}
                onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
                locale={locale}
                m={m}
              />
            </td>
            <td>
              <input
                className="field"
                readOnly
                value={getFlatSteelBarSelectedReferenceWeightLabel(row.specId, row.thicknessId, locale)}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
        <td>
          {row.dimensionMode === "custom"
            ? m.notices.notProvided
            : getFlatSteelBarSelectedBundleLabel(row.specId, row.thicknessId, locale, m)}
        </td>
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "i_beam") {
    return (
      <>
        <label className="mobile-field-label">
          {m.fields.spec}
          <IBeamSpecSelect
            value={row.specId}
            onChange={(specId) => {
              const nextSpec = iBeamData.find((spec) => spec.id === specId);
              const nextWeight = nextSpec?.weightOptions[0];
              onUpdateRow(row.id, {
                specId,
                referenceWeightId: nextWeight?.id ?? "",
                lengthM: 6,
              });
            }}
            m={m}
          />
        </label>
        <label className="mobile-field-label">
          {m.fields.theoreticalWeight}
          <IBeamReferenceWeightSelect
            specId={row.specId}
            value={row.referenceWeightId}
            onChange={(referenceWeightId) => onUpdateRow(row.id, { referenceWeightId })}
            locale={locale}
            m={m}
          />
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} locale={locale} m={m} />
        <label className="mobile-field-label">
          {m.fields.piecesPerBundle}
          <input
            className="field"
            readOnly
            value={getIBeamSelectedBundleLabel(row.specId, row.referenceWeightId, locale, m)}
          />
        </label>
      </>
    );
  }

  if (row.productType === "round_steel_bar") {
    if (row.dimensionMode === "custom") {
      return (
        <>
          <label className="mobile-field-label">
            {m.fields.diameter}
            <NumberField
              value={row.customDiameterMm ?? 0}
              onChange={(value) => onUpdateRow(row.id, { customDiameterMm: value })}
            />
          </label>
          <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        </>
      );
    }

    return (
      <>
        <label className="mobile-field-label">
          {m.fields.diameter}
          <RoundSteelBarSpecSelect
            value={row.specId}
            onChange={(specId) => onUpdateRow(row.id, { specId, lengthM: 6 })}
            m={m}
          />
        </label>
        <label className="mobile-field-label">
          {m.fields.theoreticalWeight}
          <input className="field" readOnly value={getRoundSteelBarSelectedReferenceWeightLabel(row.specId, locale)} />
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <label className="mobile-field-label">
          {m.fields.piecesPerBundle}
          <input className="field" readOnly value={getRoundSteelBarSelectedBundleLabel(row.specId, locale, m)} />
        </label>
      </>
    );
  }

  if (row.productType === "flat_steel_bar") {
    if (row.dimensionMode === "custom") {
      return (
        <>
          <label className="mobile-field-label">
            {m.fields.width}
            <NumberField
              value={row.customWidthMm ?? 0}
              onChange={(value) => onUpdateRow(row.id, { customWidthMm: value })}
            />
          </label>
          <label className="mobile-field-label">
            {m.fields.thickness}
            <NumberField
              value={row.customThicknessMm ?? 0}
              onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
            />
          </label>
          <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        </>
      );
    }

    return (
      <>
        <label className="mobile-field-label">
          {m.fields.width}
          <FlatSteelBarSpecSelect
            value={row.specId}
            onChange={(specId) => {
              const nextSpec = flatSteelBarData.find((spec) => spec.id === specId);
              const nextThickness = nextSpec?.thicknessOptions[0];
              onUpdateRow(row.id, {
                specId,
                thicknessId: nextThickness ? getFlatSteelBarThicknessId(nextThickness.thicknessMm) : "",
                lengthM: 6,
              });
            }}
            m={m}
          />
        </label>
        <label className="mobile-field-label">
          {m.fields.thickness}
          <FlatSteelBarThicknessSelect
            specId={row.specId}
            value={row.thicknessId}
            onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
            locale={locale}
            m={m}
          />
        </label>
        <label className="mobile-field-label">
          {m.fields.theoreticalWeight}
          <input className="field" readOnly value={getFlatSteelBarSelectedReferenceWeightLabel(row.specId, row.thicknessId, locale)} />
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        <label className="mobile-field-label">
          {m.fields.piecesPerBundle}
          <input className="field" readOnly value={getFlatSteelBarSelectedBundleLabel(row.specId, row.thicknessId, locale, m)} />
        </label>
      </>
    );
  }

  return (
    <tr>
      <GroovedFittingFields row={row} onUpdateRow={onUpdateRow} m={m} />
      <QuantityInput row={row} onUpdateRow={onUpdateRow} locale={locale} />
      {actionCells}
    </tr>
  );
}

function MobileRowCard({
  row,
  moduleId,
  onUpdateRow,
  onDeleteRow,
  onDuplicateRow,
  onAddCustomRow,
  locale,
  m,
}: {
  row: MaterialRow;
  moduleId: string;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onDeleteRow: (moduleId: string, rowId: string) => void;
  onDuplicateRow: (moduleId: string, row: MaterialRow) => void;
  onAddCustomRow: (productType: CustomSizeProductType) => void;
  locale: Locale;
  m: Messages;
}) {
  const calc = calculateRow(row);

  return (
    <article className="mobile-row-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-bold text-slate-950">{getRowDescription(row, locale, m) || m.materialList.specPending}</p>
          <p className="text-xs text-slate-500">
            {"lengthM" in row ? `${m.fields.length} ${formatLength(getDisplayLengthM(row), locale)} · ` : ""}
            {m.fields.quantity} {formatQuantity(row.quantity, row.quantityUnit, locale)}
          </p>
        </div>
        <p className="text-right text-sm font-bold text-slate-950">
          {calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <ProductRowFields row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="text-xs text-slate-500">{m.fields.unitWeight}</p>
          <p>
            {calc.hasWeight
              ? `${formatNumber(calc.unitWeightKg ?? 0, 2, locale)} ${formatUnitWeightLabel(calc.unitWeightLabel, locale)}`
              : m.notices.weightPending}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500">{m.fields.pieceWeight}</p>
          <p>{calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightPending) : m.notices.weightPending}</p>
        </div>
        <div className="row-actions justify-end">
          <button type="button" onClick={() => onDuplicateRow(moduleId, row)}>
            {m.actions.copy}
          </button>
          <button type="button" onClick={() => onDeleteRow(moduleId, row.id)}>
            {m.actions.delete}
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductRowFields({
  row,
  onUpdateRow,
  onAddCustomRow,
  locale,
  m,
}: {
  row: MaterialRow;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onAddCustomRow: (productType: CustomSizeProductType) => void;
  locale: Locale;
  m: Messages;
}) {
  if (isSteelPipeProduct(row.productType) || isSquareTubeProduct(row.productType)) {
    if (row.dimensionMode === "custom") {
      return (
        <>
          {isSteelPipeProduct(row.productType) ? (
            <>
              <label className="mobile-field-label">
                {m.fields.outerDiameter}
                <NumberField
                  value={row.customOuterDiameterMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customOuterDiameterMm: value })}
                />
              </label>
              <label className="mobile-field-label">
                {m.fields.thickness}
                <NumberField
                  value={row.customThicknessMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
                />
              </label>
            </>
          ) : (
            <>
              <label className="mobile-field-label">
                {m.fields.width}
                <NumberField
                  value={row.customWidthMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customWidthMm: value })}
                />
              </label>
              <label className="mobile-field-label">
                {m.fields.height}
                <NumberField
                  value={row.customHeightMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customHeightMm: value })}
                />
              </label>
              <label className="mobile-field-label">
                {m.fields.thickness}
                <NumberField
                  value={row.customThicknessMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
                />
              </label>
            </>
          )}
          <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        </>
      );
    }

    return (
      <>
        <label className="mobile-field-label">
          {m.fields.spec}
          {isSteelPipeProduct(row.productType) ? (
            <SteelPipeSpecSelect
              productType={row.productType}
              value={row.specId}
              onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
              locale={locale}
              m={m}
            />
          ) : (
            <SquareTubeSpecSelect
              productType={row.productType}
              value={row.specId}
              onChange={(specId) => {
                const nextSpec = getSquareTubeData(row.productType).find((spec) => spec.id === specId);
                const nextThickness = nextSpec?.thicknessOptions[0];
                onUpdateRow(row.id, {
                  specId,
                  thicknessId: nextThickness
                    ? getSquareTubeThicknessId(row.productType, nextThickness.thicknessMm)
                    : "",
                  lengthM: 6,
                });
              }}
              m={m}
            />
          )}
        </label>
        <label className="mobile-field-label">
          {m.fields.thickness}
          {isSteelPipeProduct(row.productType) ? (
            <SteelPipeThicknessSelect
              productType={row.productType}
              specId={row.specId}
              value={row.thicknessId}
              onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
              locale={locale}
              m={m}
            />
          ) : (
            <SquareTubeThicknessSelect
              productType={row.productType}
              specId={row.specId}
              value={row.thicknessId}
              onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
              locale={locale}
              m={m}
            />
          )}
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
      </>
    );
  }

  if (row.productType === "angle_steel") {
    if (row.dimensionMode === "custom") {
      return (
        <>
          <label className="mobile-field-label">
            {m.fields.legA}
            <NumberField
              value={row.customLegAMm ?? 0}
              onChange={(value) => onUpdateRow(row.id, { customLegAMm: value })}
            />
          </label>
          <label className="mobile-field-label">
            {m.fields.legB}
            <NumberField
              value={row.customLegBMm ?? 0}
              onChange={(value) => onUpdateRow(row.id, { customLegBMm: value })}
            />
          </label>
          <label className="mobile-field-label">
            {m.fields.thickness}
            <NumberField
              value={row.customThicknessMm ?? 0}
              onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
            />
          </label>
          <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
        </>
      );
    }

    return (
      <>
        <label className="mobile-field-label">
          {m.fields.spec}
          <AngleSteelSpecSelect
            value={row.specId}
            onChange={(specId) => {
              const nextSpec = angleSteelSpecifications.find((spec) => spec.id === specId);
              const nextThickness = nextSpec?.thicknessOptions[0];
              onUpdateRow(row.id, {
                specId,
                thicknessId: nextThickness ? getAngleSteelThicknessId(nextThickness.thicknessMm) : "",
                lengthM: 6,
              });
            }}
            m={m}
          />
        </label>
        <label className="mobile-field-label">
          {m.fields.thickness}
          <AngleSteelThicknessSelect
            specId={row.specId}
            value={row.thicknessId}
            onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
            locale={locale}
            m={m}
          />
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} locale={locale} m={m} />
      </>
    );
  }

  if (row.productType === "channel_steel") {
    return (
      <>
        <label className="mobile-field-label">
          {m.fields.spec}
          <ChannelSteelSpecSelect
            value={row.specId}
            onChange={(specId) => {
              const nextSpec = channelSteelData.find((spec) => spec.id === specId);
              const nextWeight = nextSpec?.weightOptions[0];
              onUpdateRow(row.id, {
                specId,
                referenceWeightId: nextWeight?.id ?? "",
                lengthM: 6,
              });
            }}
            m={m}
          />
        </label>
        <label className="mobile-field-label">
          {m.fields.theoreticalWeight}
          <ChannelSteelReferenceWeightSelect
            specId={row.specId}
            value={row.referenceWeightId}
            onChange={(referenceWeightId) => onUpdateRow(row.id, { referenceWeightId })}
            locale={locale}
            m={m}
          />
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} locale={locale} m={m} />
        <label className="mobile-field-label">
          {m.fields.piecesPerBundle}
          <input
            className="field"
            readOnly
            value={getChannelSteelSelectedBundleLabel(row.specId, row.referenceWeightId, locale)}
          />
        </label>
      </>
    );
  }

  return (
    <>
      <GroovedFittingFields row={row} onUpdateRow={onUpdateRow} isMobile m={m} />
      <label className="mobile-field-label">
        {m.fields.quantity}
        <input
          className="field"
          min="0"
          type="number"
          value={row.quantity}
          onChange={(event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })}
        />
      </label>
    </>
  );
}

function MobileLengthQuantity({
  row,
  onUpdateRow,
  onAddCustomRow,
  locale,
  m,
}: {
  row: Exclude<MaterialRow, { productType: "grooved_fitting" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onAddCustomRow?: (productType: CustomSizeProductType) => void;
  locale: Locale;
  m: Messages;
}) {
  const locked = isFixedLengthStandardSteelPipeRow(row);

  return (
    <>
      <label className="mobile-field-label">
        {m.fields.length}
        {locked ? (
          <LockedLengthField
            productType={row.productType}
            onAddCustomRow={onAddCustomRow}
            locale={locale}
            m={m}
            lengthM={getDisplayLengthM(row)}
          />
        ) : (
          <input
            className="field"
            min="0"
            step="0.1"
            type="number"
            value={row.lengthM}
            onChange={(event) => onUpdateRow(row.id, { lengthM: Number(event.target.value) })}
          />
        )}
      </label>
      <label className="mobile-field-label">
        {m.fields.quantity}
        <input
          className="field"
          min="0"
          type="number"
          value={row.quantity}
          onChange={(event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })}
        />
      </label>
    </>
  );
}

function CustomRoundCells({
  row,
  onUpdateRow,
  m,
}: {
  row: Extract<MaterialRow, { productType: SteelPipeProductType }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  m: Messages;
}) {
  return (
    <>
      <td>
        <div className="custom-dimension-field">
          <span>{m.fields.customOuterDiameter}</span>
          <NumberField
            value={row.customOuterDiameterMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customOuterDiameterMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
      <td>
        <div className="custom-dimension-field">
          <span>{m.fields.thickness}</span>
          <NumberField
            value={row.customThicknessMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
    </>
  );
}

function CustomSquareCells({
  row,
  onUpdateRow,
  m,
}: {
  row: Extract<MaterialRow, { productType: SquareTubeProductType }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  m: Messages;
}) {
  return (
    <>
      <td>
        <div className="custom-dimension-field custom-dimension-field-wide">
          <span>{m.fields.width}</span>
          <NumberField
            value={row.customWidthMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customWidthMm: value })}
          />
          <span>{m.fields.height}</span>
          <NumberField
            value={row.customHeightMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customHeightMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
      <td>
        <div className="custom-dimension-field">
          <span>{m.fields.thickness}</span>
          <NumberField
            value={row.customThicknessMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
    </>
  );
}

function CustomAngleCells({
  row,
  onUpdateRow,
  m,
}: {
  row: Extract<MaterialRow, { productType: "angle_steel" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  m: Messages;
}) {
  return (
    <>
      <td>
        <div className="custom-dimension-field custom-dimension-field-wide">
          <span>{m.fields.legA}</span>
          <NumberField
            value={row.customLegAMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customLegAMm: value })}
          />
          <span>{m.fields.legB}</span>
          <NumberField
            value={row.customLegBMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customLegBMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
      <td>
        <div className="custom-dimension-field">
          <span>{m.fields.thickness}</span>
          <NumberField
            value={row.customThicknessMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
    </>
  );
}

function CustomRoundSteelBarCells({
  row,
  onUpdateRow,
  m,
}: {
  row: RoundSteelBarRow;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  m: Messages;
}) {
  return (
    <td>
      <div className="custom-dimension-field">
        <span>{m.fields.diameter}</span>
        <NumberField
          value={row.customDiameterMm ?? 0}
          onChange={(value) => onUpdateRow(row.id, { customDiameterMm: value })}
        />
        <span>mm</span>
      </div>
    </td>
  );
}

function CustomFlatSteelBarCells({
  row,
  onUpdateRow,
  m,
}: {
  row: FlatSteelBarRow;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  m: Messages;
}) {
  return (
    <>
      <td>
        <div className="custom-dimension-field">
          <span>{m.fields.width}</span>
          <NumberField
            value={row.customWidthMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customWidthMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
      <td>
        <div className="custom-dimension-field">
          <span>{m.fields.thickness}</span>
          <NumberField
            value={row.customThicknessMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
    </>
  );
}

function NumberField({
  value,
  onChange,
  className = "",
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) {
  return (
    <input
      className={`field ${className}`}
      min="0"
      step="0.1"
      type="number"
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  );
}

function SteelPipeSpecSelect({
  productType,
  value,
  onChange,
  locale,
  m,
}: {
  productType: SteelPipeProductType;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const hasSpecs =
    productType === "galvanized_pipe" ||
    productType === "galvanized_sheet_pipe" ||
    productType === "black_steel_pipe";

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{hasSpecs ? m.fields.selectSpec : m.fields.specDataPending}</option>
      {productType === "galvanized_pipe"
        ? galvanizedPipeData.map((spec) => (
            <option key={spec.id} value={spec.id}>
              {formatGalvanizedPipeSpec(spec, locale)}
            </option>
          ))
        : null}
      {productType === "galvanized_sheet_pipe"
        ? galvanizedSheetPipeData.map((spec) => (
            <option key={spec.id} value={spec.id}>
              {formatGalvanizedSheetPipeSpec(spec, locale)}
            </option>
          ))
        : null}
      {productType === "black_steel_pipe"
        ? blackSteelPipeData.map((spec) => (
            <option key={spec.id} value={spec.id}>
              {formatBlackSteelPipeSpec(spec, locale)}
            </option>
          ))
        : null}
    </select>
  );
}

function SteelPipeThicknessSelect({
  productType,
  specId,
  value,
  onChange,
  locale,
  m,
}: {
  productType: SteelPipeProductType;
  specId: string;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const thicknesses =
    productType === "galvanized_pipe"
      ? galvanizedPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? []
      : productType === "galvanized_sheet_pipe"
        ? galvanizedSheetPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? []
        : productType === "black_steel_pipe"
          ? blackSteelPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? []
          : [];
  const hasStandardData =
    productType === "galvanized_pipe" ||
    productType === "galvanized_sheet_pipe" ||
    productType === "black_steel_pipe";

  return (
    <select
      className="field"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={!hasStandardData || !specId}
    >
      <option value="">{thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending}</option>
      {thicknesses.map((thickness) => (
        <option
          key={
            productType === "galvanized_pipe"
              ? getGalvanizedPipeThicknessId(thickness.thicknessMm)
              : productType === "galvanized_sheet_pipe"
                ? getGalvanizedSheetPipeThicknessId(thickness.thicknessMm)
                : getBlackSteelPipeThicknessId(thickness.thicknessMm)
          }
          value={
            productType === "galvanized_pipe"
              ? getGalvanizedPipeThicknessId(thickness.thicknessMm)
              : productType === "galvanized_sheet_pipe"
                ? getGalvanizedSheetPipeThicknessId(thickness.thicknessMm)
                : getBlackSteelPipeThicknessId(thickness.thicknessMm)
          }
        >
          {formatThicknessValue(thickness.thicknessMm, locale)}
        </option>
      ))}
    </select>
  );
}

function SquareTubeSpecSelect({
  productType,
  value,
  onChange,
  m,
}: {
  productType: SquareTubeProductType;
  value: string;
  onChange: (value: string) => void;
  m: Messages;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{m.fields.selectSpec}</option>
      {getSquareTubeData(productType).map((spec) => (
        <option key={spec.id} value={spec.id}>
          {formatGalvanizedSquareRectangularTubeSpec(spec)}
        </option>
      ))}
    </select>
  );
}

function SquareTubeThicknessSelect({
  productType,
  specId,
  value,
  onChange,
  locale,
  m,
}: {
  productType: SquareTubeProductType;
  specId: string;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const thicknesses =
    getSquareTubeData(productType).find((spec) => spec.id === specId)?.thicknessOptions ?? [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)} disabled={!specId}>
      <option value="">{thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending}</option>
      {thicknesses.map((thickness) => (
        <option
          key={getSquareTubeThicknessId(productType, thickness.thicknessMm)}
          value={getSquareTubeThicknessId(productType, thickness.thicknessMm)}
        >
          {formatThicknessValue(thickness.thicknessMm, locale)}
        </option>
      ))}
    </select>
  );
}

function AngleSteelSpecSelect({
  value,
  onChange,
  m,
}: {
  value: string;
  onChange: (value: string) => void;
  m: Messages;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{m.fields.selectSpec}</option>
      {angleSteelSpecifications.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {formatAngleSteelSpec(spec)}
        </option>
      ))}
    </select>
  );
}

function AngleSteelThicknessSelect({
  specId,
  value,
  onChange,
  locale,
  m,
}: {
  specId: string;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const thicknesses =
    angleSteelSpecifications.find((spec) => spec.id === specId)?.thicknessOptions ?? [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)} disabled={!specId}>
      <option value="">{thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending}</option>
      {thicknesses.map((thickness) => (
        <option
          key={getAngleSteelThicknessId(thickness.thicknessMm)}
          value={getAngleSteelThicknessId(thickness.thicknessMm)}
        >
          {formatThicknessValue(thickness.thicknessMm, locale)}
        </option>
      ))}
    </select>
  );
}

function ChannelSteelSpecSelect({
  value,
  onChange,
  m,
}: {
  value: string;
  onChange: (value: string) => void;
  m: Messages;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{m.fields.selectSpec}</option>
      {channelSteelData.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {formatChannelSteelSpec(spec.nominalSize)}
        </option>
      ))}
    </select>
  );
}

function ChannelSteelReferenceWeightSelect({
  specId,
  value,
  onChange,
  locale,
  m,
}: {
  specId: string;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const weightOptions =
    channelSteelData.find((spec) => spec.id === specId)?.weightOptions ?? [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)} disabled={!specId}>
      <option value="">{weightOptions.length > 0 ? m.fields.selectTheoreticalWeight : m.fields.referenceWeightDataPending}</option>
      {weightOptions.map((option) => (
        <option key={option.id} value={option.id}>
          {formatChannelSteelReferenceWeight(option.referenceWeightKgPerPiece, locale)}
        </option>
      ))}
    </select>
  );
}

function IBeamSpecSelect({
  value,
  onChange,
  m,
}: {
  value: string;
  onChange: (value: string) => void;
  m: Messages;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{m.fields.selectSpec}</option>
      {iBeamData.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {spec.size}
        </option>
      ))}
    </select>
  );
}

function IBeamReferenceWeightSelect({
  specId,
  value,
  onChange,
  locale,
  m,
}: {
  specId: string;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const weightOptions = iBeamData.find((spec) => spec.id === specId)?.weightOptions ?? [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)} disabled={!specId}>
      <option value="">{weightOptions.length > 0 ? m.fields.selectTheoreticalWeight : m.fields.referenceWeightDataPending}</option>
      {weightOptions.map((option) => (
        <option key={option.id} value={option.id}>
          {formatReferenceWeightPerPiece(option.referenceWeightKgPerPiece, locale)}
        </option>
      ))}
    </select>
  );
}

function RoundSteelBarSpecSelect({
  value,
  onChange,
  m,
}: {
  value: string;
  onChange: (value: string) => void;
  m: Messages;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{m.fields.selectSpec}</option>
      {roundSteelBarData.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {spec.sizeLabel}
        </option>
      ))}
    </select>
  );
}

function FlatSteelBarSpecSelect({
  value,
  onChange,
  m,
}: {
  value: string;
  onChange: (value: string) => void;
  m: Messages;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{m.fields.selectSpec}</option>
      {flatSteelBarData.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {formatFlatSteelBarSpec(spec.widthMm)}
        </option>
      ))}
    </select>
  );
}

function FlatSteelBarThicknessSelect({
  specId,
  value,
  onChange,
  locale,
  m,
}: {
  specId: string;
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  m: Messages;
}) {
  const thicknesses = flatSteelBarData.find((spec) => spec.id === specId)?.thicknessOptions ?? [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)} disabled={!specId}>
      <option value="">{thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending}</option>
      {thicknesses.map((thickness) => (
        <option key={getFlatSteelBarThicknessId(thickness.thicknessMm)} value={getFlatSteelBarThicknessId(thickness.thicknessMm)}>
          {formatThicknessValue(thickness.thicknessMm, locale)}
        </option>
      ))}
    </select>
  );
}

function LengthInput({
  row,
  onUpdateRow,
  onAddCustomRow,
  locale = "zh",
  m,
}: {
  row: Exclude<MaterialRow, { productType: "grooved_fitting" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onAddCustomRow?: (productType: CustomSizeProductType) => void;
  locale?: Locale;
  m: Messages;
}) {
  const locked = isFixedLengthStandardSteelPipeRow(row);

  return (
    <td>
      {locked ? (
        <LockedLengthField
          productType={row.productType}
          onAddCustomRow={onAddCustomRow}
          locale={locale}
          m={m}
          lengthM={getDisplayLengthM(row)}
          compact
        />
      ) : (
        <input
          className="field w-20"
          min="0"
          step="0.1"
          type="number"
          value={row.lengthM}
          onChange={(event) => onUpdateRow(row.id, { lengthM: Number(event.target.value) })}
        />
      )}
    </td>
  );
}

function LockedLengthField({
  productType,
  onAddCustomRow,
  locale,
  m,
  lengthM,
  compact = false,
}: {
  productType: ProductType;
  onAddCustomRow?: (productType: CustomSizeProductType) => void;
  locale: Locale;
  m: Messages;
  lengthM: number;
  compact?: boolean;
}) {
  const canUseCustomSize = onAddCustomRow && isCustomSizeProduct(productType);
  const tip = canUseCustomSize ? m.customSize.fixedLengthTip : m.customSize.fixedLengthOnlyTip;

  return (
    <div className={`locked-length-field ${compact ? "is-compact" : ""}`}>
      <input className="field locked-length-input" readOnly type="text" value={formatLength(lengthM, locale)} aria-label={tip} />
      <span className="locked-length-badge" aria-hidden="true">
        {m.customSize.locked}
      </span>
      <div className="locked-length-tip" role="note">
        <p>{tip}</p>
        {canUseCustomSize ? (
          <button type="button" onClick={() => onAddCustomRow(productType)}>
            {m.customSize.useCustomSize}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function QuantityInput({
  row,
  onUpdateRow,
  locale = "zh",
}: {
  row: MaterialRow;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  locale?: Locale;
}) {
  return (
    <td>
      <div className="flex items-center gap-2">
        <input
          className="field w-20"
          min="0"
          type="number"
          value={row.quantity}
          onChange={(event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })}
        />
        <span className="text-xs text-slate-500">{locale === "zh" ? row.quantityUnit : "pcs"}</span>
      </div>
    </td>
  );
}

function GroovedFittingFields({
  row,
  onUpdateRow,
  m,
  isMobile = false,
}: {
  row: Extract<MaterialRow, { productType: "grooved_fitting" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  m: Messages;
  isMobile?: boolean;
}) {
  const fittingTypes = uniqueBy(groovedFittingOptions, (item) => item.fittingTypeId);
  const sizes = uniqueBy(
    groovedFittingOptions.filter((item) => !row.fittingTypeId || item.fittingTypeId === row.fittingTypeId),
    (item) => item.nominalSizeId,
  );
  const models = groovedFittingOptions.filter(
    (item) =>
      (!row.fittingTypeId || item.fittingTypeId === row.fittingTypeId) &&
      (!row.nominalSizeId || item.nominalSizeId === row.nominalSizeId),
  );

  const fittingTypeField = (
      <select
        className="field"
        value={row.fittingTypeId}
        onChange={(event) => onUpdateRow(row.id, { fittingTypeId: event.target.value, nominalSizeId: "", modelId: "" })}
      >
        <option value="">{m.fields.fittingType}</option>
        {fittingTypes.map((item) => (
          <option key={item.fittingTypeId} value={item.fittingTypeId}>
            {item.fittingTypeLabel}
          </option>
        ))}
      </select>
  );

  const sizeField = (
    <select
        className="field"
        value={row.nominalSizeId}
        onChange={(event) => onUpdateRow(row.id, { nominalSizeId: event.target.value, modelId: "" })}
      >
        <option value="">{m.fields.size}</option>
        {sizes.map((item) => (
          <option key={item.nominalSizeId} value={item.nominalSizeId}>
            {item.nominalSizeLabel}
          </option>
        ))}
      </select>
  );

  const modelField = (
    <select className="field" value={row.modelId} onChange={(event) => onUpdateRow(row.id, { modelId: event.target.value })}>
        <option value="">{m.fields.modelOrAngle}</option>
        {models.map((item) => (
          <option key={`${item.fittingTypeId}-${item.nominalSizeId}-${item.modelId}`} value={item.modelId}>
            {item.modelLabel}
          </option>
        ))}
      </select>
  );

  if (isMobile) {
    return (
      <>
        <label className="mobile-field-label">
          {m.fields.fittingType}
          {fittingTypeField}
        </label>
        <label className="mobile-field-label">
          {m.fields.size}
          {sizeField}
        </label>
        <label className="mobile-field-label">
          {m.fields.modelOrAngle}
          {modelField}
        </label>
      </>
    );
  }

  return (
    <>
      <td>{fittingTypeField}</td>
      <td>{sizeField}</td>
      <td>{modelField}</td>
    </>
  );
}

function WeightCell({
  calculation,
  locale,
  m,
}: {
  calculation: ReturnType<typeof calculateRow>;
  locale: Locale;
  m: Messages;
}) {
  if (!calculation.unitWeightKg) {
    return <MissingWeight m={m} />;
  }

  return (
    <span>
      {formatNumber(calculation.unitWeightKg, 2, locale)} {formatUnitWeightLabel(calculation.unitWeightLabel, locale)}
    </span>
  );
}

function MissingWeight({ m }: { m: Messages }) {
  return <span className="missing-weight">{m.notices.weightPending}</span>;
}

function SummaryBar({
  summary,
  onOpenRfq,
  locale,
  m,
}: {
  summary: ReturnType<typeof calculateSummary>;
  onOpenRfq: () => void;
  locale: Locale;
  m: Messages;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerText =
    summary.containerCount > 0
      ? `${m.summary.estimated} ${summary.containerCount} × 40HQ，${
          summary.remainingCapacityTon === 0
            ? m.summary.capacityReached
            : `${m.summary.remainingCapacity} ${formatNumber(summary.remainingCapacityTon ?? 0, 2, locale)} ${
                locale === "zh" ? "吨" : "t"
              }`
        }`
      : `${m.summary.estimated} 0 × 40HQ`;

  return (
    <footer className={`summary-bar ${isExpanded ? "is-expanded" : ""}`}>
      <div className="summary-compact">
        <div className="min-w-0">
          <p className="text-xs text-blue-100">{m.summary.theoreticalWeight}</p>
          <p className="truncate text-lg font-bold text-white">
            {formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)}
          </p>
        </div>
        <button className="primary-button summary-compact-rfq" type="button" onClick={onOpenRfq}>
          {m.summary.generateRfq}
        </button>
        <button className="summary-toggle-button" type="button" onClick={() => setIsExpanded((current) => !current)}>
          {isExpanded ? m.summary.collapse : m.summary.expand}
        </button>
      </div>

      <div className="summary-grid">
        <SummaryItem label={m.summary.productCount} value={summary.productModuleCount} />
        <SummaryItem label={m.summary.validSpecRows} value={summary.validRowCount} />
        <SummaryItem
          label={m.summary.totalQuantity}
          value={formatSummaryQuantity(summary.totalQuantityPieces, summary.totalQuantityItems, locale)}
        />
        <SummaryItem label={m.summary.theoreticalWeight} value={formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)} strong />
        <SummaryItem
          label={m.summary.missingWeight}
          value={`${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`}
          warning={summary.missingWeightRowCount > 0}
        />
        <div className="min-w-0">
          <p className="text-xs text-blue-100">{m.summary.containerEstimate}</p>
          <p className="truncate text-base font-bold text-white">{containerText}</p>
        </div>
        <button className="primary-button h-12" type="button" onClick={onOpenRfq}>
          {m.summary.generateRfq}
        </button>
      </div>
      <p className="mt-2 text-xs text-blue-100">
        {m.container.note}
        {locale === "zh" ? "。" : " "}
        {m.container.configuredLoad}：{formatNumber(CONTAINER_40HQ_TON, 1, locale)} {locale === "zh" ? "吨" : "t"} / 40HQ.
      </p>
    </footer>
  );
}

function SummaryItem({
  label,
  value,
  strong = false,
  warning = false,
}: {
  label: string;
  value: string | number;
  strong?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-blue-100">{label}</p>
      <p className={`truncate text-base font-bold ${warning ? "text-orange-300" : strong ? "text-white" : "text-slate-100"}`}>
        {value}
      </p>
    </div>
  );
}

function RfqModal({
  customer,
  setCustomer,
  materialList,
  summary,
  rfqText,
  copied,
  onCopy,
  onClose,
  locale,
  m,
}: {
  customer: CustomerInfo;
  setCustomer: (value: CustomerInfo) => void;
  materialList: MaterialList;
  summary: ReturnType<typeof calculateSummary>;
  rfqText: string;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
  locale: Locale;
  m: Messages;
}) {
  const [showWechat, setShowWechat] = useState(false);
  const [showLargeQr, setShowLargeQr] = useState(false);

  function updateCustomer(key: string, value: string) {
    setCustomer({ ...customer, [key]: value });
  }

  function openWhatsApp() {
    const url = `https://wa.me/${contactConfig.whatsapp.linkNumber}?text=${encodeURIComponent(rfqText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openEmail() {
    const subject = encodeURIComponent(m.inquiry.emailSubject);
    const body = encodeURIComponent(rfqText);
    window.open(`mailto:${contactConfig.email}?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  }

  const wechatIntro = m.inquiry.wechatIntro.replace("{name}", contactConfig.wechat.contactName);
  const wechatSearchPhone = m.inquiry.wechatSearchPhone.replace("{phone}", contactConfig.wechat.searchPhoneNumber);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={m.inquiry.title}>
      <div className="modal-panel">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-950">{m.inquiry.title}</h2>
            <p className="text-sm text-slate-500">{m.inquiry.intro}</p>
          </div>
          <button className="secondary-button" type="button" onClick={onClose}>
            {m.actions.close}
          </button>
        </div>

        <div className="grid gap-5 py-5 lg:grid-cols-[1.1fr_.9fr]">
          <section className="rfq-preview-list">
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              <SummaryTile label={m.summary.theoreticalWeight} value={formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)} />
              <SummaryTile label={m.summary.containerEstimate} value={`${summary.containerCount} × 40HQ`} />
              <SummaryTile label={m.summary.missingWeight} value={`${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`} />
            </div>
            <div className="space-y-4">
              {materialList.modules.length === 0 ? (
                <p className="text-sm text-slate-500">{m.materialList.currentListEmpty}</p>
              ) : (
                materialList.modules.map((module) => (
                  <div key={module.id} className="rounded-md border border-slate-200 bg-white p-3">
                    <p className="mb-2 font-bold text-slate-950">{productName(module.productType, m)}</p>
                    <div className="space-y-2">
                      {module.rows.map((row) => {
                        const calc = calculateRow(row);
                        return (
                          <div key={row.id} className="flex items-start justify-between gap-3 text-sm">
                            <span className="text-slate-600">
                              {getRowDescription(row, locale, m) || m.materialList.specPending}，{m.fields.quantity}{" "}
                              {formatQuantity(row.quantity, row.quantityUnit, locale)}
                            </span>
                            <span className="shrink-0 font-semibold text-slate-950">
                              {calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <CustomerInput label={m.inquiry.customerName} value={customer.name} onChange={(value) => updateCustomer("name", value)} />
              <CustomerInput label={m.inquiry.companyName} value={customer.company} onChange={(value) => updateCustomer("company", value)} />
              <CustomerInput label={m.inquiry.country} value={customer.country} onChange={(value) => updateCustomer("country", value)} />
              <CustomerInput label={m.inquiry.whatsapp} value={customer.whatsapp} onChange={(value) => updateCustomer("whatsapp", value)} />
              <CustomerInput label={m.inquiry.email} value={customer.email} onChange={(value) => updateCustomer("email", value)} />
              <CustomerInput label={m.inquiry.destinationPort} value={customer.port} onChange={(value) => updateCustomer("port", value)} />
            </div>
            <label className="mobile-field-label">
              {m.inquiry.notes}
              <textarea
                className="field min-h-24"
                value={customer.notes}
                onChange={(event) => updateCustomer("notes", event.target.value)}
              />
            </label>
            <textarea className="rfq-textarea" readOnly value={rfqText} />
            <div className="rfq-contact-actions" aria-label={m.inquiry.contactActions}>
              <button className="primary-button justify-center py-3" type="button" onClick={openWhatsApp}>
                {m.inquiry.whatsappContact}
              </button>
              <button className="secondary-button justify-center py-3" type="button" onClick={openEmail}>
                {m.inquiry.emailContact}
              </button>
              <button
                className="secondary-button justify-center py-3"
                type="button"
                onClick={() => setShowWechat((current) => !current)}
              >
                {m.inquiry.wechatContact}
              </button>
              <button className="secondary-button justify-center py-3" type="button" onClick={onCopy}>
                {copied ? m.inquiry.copied : m.inquiry.copyRfq}
              </button>
            </div>
            {showWechat ? (
              <div className="wechat-contact-panel">
                <div>
                  <p className="text-base font-bold text-slate-950">{wechatIntro}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">{wechatSearchPhone}</p>
                  <p className="mt-1 text-sm text-slate-500">{m.inquiry.wechatScan}</p>
                </div>
                <button
                  className="wechat-qr-button"
                  type="button"
                  onClick={() => setShowLargeQr(true)}
                  aria-label={m.inquiry.enlargeQr}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={contactConfig.wechat.qrCodePath} alt={m.inquiry.wechatContact} />
                </button>
              </div>
            ) : null}
          </section>
        </div>
      </div>
      {showLargeQr ? (
        <button className="qr-lightbox" type="button" onClick={() => setShowLargeQr(false)} aria-label={m.actions.close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={contactConfig.wechat.qrCodePath} alt={m.inquiry.wechatContact} />
        </button>
      ) : null}
    </div>
  );
}

function SummaryTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-slate-950">{value}</p>
    </div>
  );
}

function CustomerInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mobile-field-label">
      {label}
      <input className="field" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
