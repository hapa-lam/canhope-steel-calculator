import { findAngleSteelReference } from "@/data/angle-steel/angle-steel-data";
import { findChannelSteelReference } from "@/data/channel-steel/channel-steel-data";
import { findFlatSteelBarReference } from "@/data/flat-steel-bar/flat-steel-bar-data";
import { findGalvanizedPipeReference } from "@/data/galvanized-pipe/galvanized-pipe-data";
import { findGalvanizedSheetPipeReference } from "@/data/galvanized-sheet-pipe/galvanized-sheet-pipe-data";
import { findGroovedFittingRecord } from "@/data/grooved-fittings/grooved-fittings-data";
import { findIBeamReference } from "@/data/i-beam/i-beam-data";
import { findRoundSteelBarReference } from "@/data/round-steel-bar/round-steel-bar-data";
import { findBlackSteelPipeReference } from "@/data/black-steel-pipe/black-steel-pipe-data";
import { findGalvanizedSquareRectangularTubeReference } from "@/data/galvanized-square-rectangular-tube/galvanized-square-rectangular-tube-data";
import { findPreGalvanizedSquareRectangularTubeReference } from "@/data/pre-galvanized-square-rectangular-tube/pre-galvanized-square-rectangular-tube-data";
import type {
  MaterialList,
  MaterialModule,
  MaterialRow,
  RowCalculation,
  SquareTubeRow,
  SquareTubeProductType,
  SteelPipeRow,
  SteelPipeProductType,
  SummaryResult,
} from "@/types/materials";

export const CONTAINER_40HQ_TON = 27.5;
const STEEL_DENSITY_FACTOR = 0.00785;
const ROUND_CARBON_STEEL_PIPE_FACTOR = 0.02466;

function isSteelPipeProduct(type: string): type is SteelPipeProductType {
  return (
    type === "galvanized_pipe" ||
    type === "galvanized_sheet_pipe" ||
    type === "black_steel_pipe"
  );
}

function isSquareTubeProduct(type: string): type is SquareTubeProductType {
  return (
    type === "galvanized_square_rectangular_tube" ||
    type === "pre_galvanized_square_rectangular_tube"
  );
}

function isSteelPipeRow(row: MaterialRow): row is SteelPipeRow {
  return isSteelPipeProduct(row.productType);
}

function isSquareTubeRow(row: MaterialRow): row is SquareTubeRow {
  return isSquareTubeProduct(row.productType);
}

export function calculateRow(row: MaterialRow): RowCalculation {
  if (row.productType === "grooved_fitting") {
    const record = findGroovedFittingRecord(
      row.fittingTypeId,
      row.specification,
      row.pressureRatingMpa,
    );
    const unitWeightKg = record?.finishedWeightKg ?? row.finishedWeightKg ?? null;
    if (!unitWeightKg || unitWeightKg <= 0) {
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

  if (isSteelPipeRow(row) && row.dimensionMode === "custom") {
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

  if (isSquareTubeRow(row) && row.dimensionMode === "custom") {
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

  if (row.productType === "angle_steel" && row.dimensionMode === "custom") {
    const legA = row.customLegAMm ?? 0;
    const legB = row.customLegBMm ?? 0;
    const thickness = row.customThicknessMm ?? 0;
    const hasValidDimensions =
      legA > 0 &&
      legB > 0 &&
      thickness > 0 &&
      row.lengthM > 0 &&
      thickness < legA &&
      thickness < legB;

    if (!hasValidDimensions) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg = calculateAngleSteelKgPerMeter(legA, legB, thickness);
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

  if (row.productType === "round_steel_bar" && row.dimensionMode === "custom") {
    const diameter = row.customDiameterMm ?? 0;
    const hasValidDimensions = diameter > 0 && row.lengthM > 0;

    if (!hasValidDimensions) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg = calculateRoundSteelBarKgPerMeter(diameter);
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

  if (row.productType === "flat_steel_bar" && row.dimensionMode === "custom") {
    const width = row.customWidthMm ?? 0;
    const thickness = row.customThicknessMm ?? 0;
    const hasValidDimensions = width > 0 && thickness > 0 && row.lengthM > 0;

    if (!hasValidDimensions) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg = calculateFlatSteelBarKgPerMeter(width, thickness);
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

  if (isSteelPipeRow(row)) {
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

  if (isSquareTubeRow(row)) {
    const reference =
      row.productType === "galvanized_square_rectangular_tube"
        ? findGalvanizedSquareRectangularTubeReference(row.specId, row.thicknessId)
        : findPreGalvanizedSquareRectangularTubeReference(row.specId, row.thicknessId);

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

  if (row.productType === "angle_steel") {
    const reference = findAngleSteelReference(row.specId, row.thicknessId);

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

  if (row.productType === "channel_steel") {
    const reference = findChannelSteelReference(row.specId, row.referenceWeightId);

    if (!reference) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg =
      reference.weightOption.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
    const pieceWeightKg = reference.weightOption.referenceWeightKgPerPiece;

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/m",
      pieceWeightKg,
      totalWeightKg: pieceWeightKg * row.quantity,
    };
  }

  if (row.productType === "i_beam") {
    const reference = findIBeamReference(row.specId, row.referenceWeightId);

    if (!reference) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg =
      reference.weightOption.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
    const pieceWeightKg = reference.weightOption.referenceWeightKgPerPiece;

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/m",
      pieceWeightKg,
      totalWeightKg: pieceWeightKg * row.quantity,
    };
  }

  if (row.productType === "round_steel_bar") {
    const reference = findRoundSteelBarReference(row.specId);

    if (!reference) {
      return {
        rowId: row.id,
        hasWeight: false,
        unitWeightLabel: "kg/m",
      };
    }

    const unitWeightKg = reference.referenceWeightKgPerPiece / reference.referenceLengthM;
    const pieceWeightKg = reference.referenceWeightKgPerPiece;

    return {
      rowId: row.id,
      hasWeight: true,
      unitWeightKg,
      unitWeightLabel: "kg/m",
      pieceWeightKg,
      totalWeightKg: pieceWeightKg * row.quantity,
    };
  }

  if (row.productType === "flat_steel_bar") {
    const reference = findFlatSteelBarReference(row.specId, row.thicknessId);

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

  return {
    rowId: "",
    hasWeight: false,
    unitWeightLabel: "kg/m",
  };
}

export function calculateRoundSteelPipeKgPerMeter(outerDiameterMm: number, thicknessMm: number) {
  return ROUND_CARBON_STEEL_PIPE_FACTOR * thicknessMm * (outerDiameterMm - thicknessMm);
}

export function calculateAngleSteelKgPerMeter(
  legAMm: number,
  legBMm: number,
  thicknessMm: number,
) {
  return thicknessMm * (legAMm + legBMm - thicknessMm) * STEEL_DENSITY_FACTOR;
}

export function calculateRoundSteelBarKgPerMeter(diameterMm: number) {
  return diameterMm * diameterMm * 0.00617;
}

export function calculateFlatSteelBarKgPerMeter(widthMm: number, thicknessMm: number) {
  return widthMm * thicknessMm * STEEL_DENSITY_FACTOR;
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
