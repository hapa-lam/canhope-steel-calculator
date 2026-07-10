import {
  angleSteelSpecs,
  channelSteelSpecs,
  groovedFittingOptions,
  type StandardSpec,
} from "@/data/demo/steel-specs";
import { findGalvanizedPipeReference } from "@/data/galvanized-pipe/galvanized-pipe-data";
import { findGalvanizedSheetPipeReference } from "@/data/galvanized-sheet-pipe/galvanized-sheet-pipe-data";
import { findBlackSteelPipeReference } from "@/data/black-steel-pipe/black-steel-pipe-data";
import { findGalvanizedSquareRectangularTubeReference } from "@/data/galvanized-square-rectangular-tube/galvanized-square-rectangular-tube-data";
import type {
  MaterialList,
  MaterialModule,
  MaterialRow,
  RowCalculation,
  SteelPipeProductType,
  SummaryResult,
} from "@/types/materials";

export const CONTAINER_40HQ_TON = 27.5;
const STEEL_DENSITY_FACTOR = 0.00785;
const ROUND_CARBON_STEEL_PIPE_FACTOR = 0.02466;

function findWeightFromSpec(
  specs: StandardSpec[],
  specId: string,
  thicknessId: string,
) {
  return specs
    .find((spec) => spec.id === specId)
    ?.thicknesses.find((thickness) => thickness.id === thicknessId)
    ?.weightKgPerM;
}

function isSteelPipeProduct(type: string): type is SteelPipeProductType {
  return (
    type === "galvanized_pipe" ||
    type === "galvanized_sheet_pipe" ||
    type === "black_steel_pipe"
  );
}

export function calculateRow(row: MaterialRow): RowCalculation {
  if (row.productType === "grooved_fitting") {
    const option = groovedFittingOptions.find(
      (item) =>
        item.fittingTypeId === row.fittingTypeId &&
        item.nominalSizeId === row.nominalSizeId &&
        item.modelId === row.modelId,
    );
    const unitWeightKg = option?.weightKgPerPiece;
    if (!unitWeightKg) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/件",
      };
    }

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/件",
      pieceWeightKg: unitWeightKg,
      totalWeightKg: unitWeightKg * row.quantity,
    };
  }

  if (isSteelPipeProduct(row.productType) && row.dimensionMode === "custom") {
    const outerDiameter = row.customOuterDiameterMm ?? 0;
    const thickness = row.customThicknessMm ?? 0;
    const hasValidDimensions =
      outerDiameter > 0 && thickness > 0 && thickness * 2 < outerDiameter;

    if (!hasValidDimensions) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg =
      row.productType === "black_steel_pipe"
        ? calculateRoundSteelPipeKgPerMeter(outerDiameter, thickness)
        : STEEL_DENSITY_FACTOR * Math.PI * (outerDiameter - thickness) * thickness;
    const pieceWeightKg = unitWeightKg * row.lengthM;

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/m",
      pieceWeightKg,
      totalWeightKg: pieceWeightKg * row.quantity,
    };
  }

  if (row.productType === "galvanized_square_rectangular_tube" && row.dimensionMode === "custom") {
    const width = row.customWidthMm ?? 0;
    const height = row.customHeightMm ?? 0;
    const thickness = row.customThicknessMm ?? 0;
    const hasValidDimensions =
      width > 0 && height > 0 && thickness > 0 && thickness * 2 < Math.min(width, height);

    if (!hasValidDimensions) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const sectionAreaMm2 = width * height - (width - 2 * thickness) * (height - 2 * thickness);
    const unitWeightKg = sectionAreaMm2 * STEEL_DENSITY_FACTOR;
    const pieceWeightKg = unitWeightKg * row.lengthM;

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/m",
      pieceWeightKg,
      totalWeightKg: pieceWeightKg * row.quantity,
    };
  }

  if (isSteelPipeProduct(row.productType)) {
    if (row.productType === "galvanized_pipe") {
      const reference = findGalvanizedPipeReference(row.specId, row.thicknessId);

      if (!reference) {
        return {
          rowId: row.id,
          hasWeight: false,
          unitWeightLabel: "kg/m",
        };
      }

      const unitWeightKg =
        reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
      const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;

      return {
        rowId: row.id,
        hasWeight: true,
        unitWeightKg,
        unitWeightLabel: "kg/m",
        pieceWeightKg,
        totalWeightKg: pieceWeightKg * row.quantity,
      };
    }

    if (row.productType === "galvanized_sheet_pipe") {
      const reference = findGalvanizedSheetPipeReference(row.specId, row.thicknessId);

      if (!reference) {
        return {
          rowId: row.id,
          hasWeight: false,
          unitWeightLabel: "kg/m",
        };
      }

      const unitWeightKg =
        reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
      const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;

      return {
        rowId: row.id,
        hasWeight: true,
        unitWeightKg,
        unitWeightLabel: "kg/m",
        pieceWeightKg,
        totalWeightKg: pieceWeightKg * row.quantity,
      };
    }

    if (row.productType === "black_steel_pipe") {
      const reference = findBlackSteelPipeReference(row.specId, row.thicknessId);

      if (!reference) {
        return {
          rowId: row.id,
          hasWeight: false,
          unitWeightLabel: "kg/m",
        };
      }

      const unitWeightKg = calculateRoundSteelPipeKgPerMeter(
        reference.spec.outerDiameterMm,
        reference.thickness.thicknessMm,
      );
      const pieceWeightKg = unitWeightKg * reference.thickness.standardLengthM;

      return {
        rowId: row.id,
        hasWeight: true,
        unitWeightKg,
        unitWeightLabel: "kg/m",
        pieceWeightKg,
        totalWeightKg: pieceWeightKg * row.quantity,
      };
    }

    return {
      rowId: row.id,
      hasWeight: false,
      unitWeightLabel: "kg/m",
    };
  }

  if (row.productType === "galvanized_square_rectangular_tube") {
    const reference = findGalvanizedSquareRectangularTubeReference(row.specId, row.thicknessId);

    if (!reference) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg =
      reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
    const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/m",
      pieceWeightKg,
      totalWeightKg: pieceWeightKg * row.quantity,
    };
  }

  const specs =
    row.productType === "angle_steel"
          ? angleSteelSpecs
          : null;

  const unitWeightKg =
    row.productType === "channel_steel"
      ? channelSteelSpecs.find((spec) => spec.id === row.specId)?.weightKgPerM
      : specs
        ? findWeightFromSpec(specs, row.specId, row.thicknessId)
        : undefined;

  if (!unitWeightKg) {
    return {
      rowId: row.id,
      hasWeight: false,
      unitWeightLabel: "kg/m",
    };
  }

  const pieceWeightKg = unitWeightKg * row.lengthM;

  return {
    rowId: row.id,
    hasWeight: true,
    unitWeightKg,
    unitWeightLabel: "kg/m",
    pieceWeightKg,
    totalWeightKg: pieceWeightKg * row.quantity,
  };
}

export function calculateRoundSteelPipeKgPerMeter(outerDiameterMm: number, thicknessMm: number) {
  return ROUND_CARBON_STEEL_PIPE_FACTOR * thicknessMm * (outerDiameterMm - thicknessMm);
}

export function calculateModuleSubtotal(module: MaterialModule) {
  return module.rows.reduce((sum, row) => {
    return sum + (calculateRow(row).totalWeightKg ?? 0);
  }, 0);
}

export function estimate40HQ(totalWeightTon: number) {
  if (totalWeightTon <= 0) {
    return { containerCount: 0, remainingCapacityTon: null };
  }

  const containerCount = Math.ceil(totalWeightTon / CONTAINER_40HQ_TON);
  const remainingCapacityTon =
    containerCount * CONTAINER_40HQ_TON - totalWeightTon;

  return {
    containerCount,
    remainingCapacityTon:
      Math.abs(remainingCapacityTon) < 0.005 ? 0 : remainingCapacityTon,
  };
}

export function calculateSummary(list: MaterialList): SummaryResult {
  let validRowCount = 0;
  let totalQuantityPieces = 0;
  let totalQuantityItems = 0;
  let totalWeightKg = 0;
  let missingWeightRowCount = 0;

  list.modules.forEach((module) => {
    module.rows.forEach((row) => {
      const calculation = calculateRow(row);
      const hasMeaningfulQuantity = row.quantity > 0;

      if (hasMeaningfulQuantity) {
        validRowCount += 1;
      }

      if (row.quantityUnit === "支") {
        totalQuantityPieces += row.quantity;
      } else {
        totalQuantityItems += row.quantity;
      }

      if (!calculation.hasWeight && hasMeaningfulQuantity) {
        missingWeightRowCount += 1;
      }

      totalWeightKg += calculation.totalWeightKg ?? 0;
    });
  });

  const totalWeightTon = totalWeightKg / 1000;
  const container = estimate40HQ(totalWeightTon);

  return {
    productModuleCount: list.modules.length,
    validRowCount,
    totalQuantityPieces,
    totalQuantityItems,
    totalWeightKg,
    totalWeightTon,
    missingWeightRowCount,
    ...container,
  };
}
