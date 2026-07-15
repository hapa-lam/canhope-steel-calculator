import assert from "node:assert/strict";
import { before, test } from "node:test";
import { build } from "vite";

const FLOAT_TOLERANCE = 1e-9;

let calculations;

function assertClose(actual, expected, message) {
  assert.ok(
    Math.abs(actual - expected) <= FLOAT_TOLERANCE,
    `${message}: expected ${expected}, received ${actual}`,
  );
}

function blackPipeRow(overrides = {}) {
  return {
    id: "black-pipe-row",
    productType: "black_steel_pipe",
    dimensionMode: "standard",
    specId: "od48",
    thicknessId: "2.0",
    lengthM: 6,
    quantity: 1,
    quantityUnit: "支",
    ...overrides,
  };
}

function squareTubeRow(overrides = {}) {
  return {
    id: "square-tube-row",
    productType: "galvanized_square_rectangular_tube",
    dimensionMode: "custom",
    specId: "",
    thicknessId: "",
    customWidthMm: 40,
    customHeightMm: 40,
    customThicknessMm: 2,
    lengthM: 6,
    quantity: 1,
    quantityUnit: "支",
    ...overrides,
  };
}

before(async () => {
  const result = await build({
    build: {
      rollupOptions: { output: { format: "es" } },
      ssr: "lib/calculations.ts",
      write: false,
    },
    configFile: false,
    logLevel: "error",
    resolve: { alias: { "@": process.cwd() } },
  });
  const calculationChunk = result.output.find((output) => output.type === "chunk");

  assert.ok(calculationChunk, "the calculation module should compile for its unit tests");
  calculations = await import(
    `data:text/javascript;base64,${Buffer.from(calculationChunk.code).toString("base64")}`,
  );
});

test("40HQ is a weight-only estimate below one 27.5 t container", () => {
  assert.deepEqual(calculations.estimate40HQ(12.5), {
    containerCount: 1,
    remainingCapacityTon: 15,
  });
});

test("40HQ is a weight-only estimate at exactly one 27.5 t container", () => {
  assert.deepEqual(calculations.estimate40HQ(27.5), {
    containerCount: 1,
    remainingCapacityTon: 0,
  });
});

test("40HQ is a weight-only estimate that rounds a partial second container up", () => {
  assert.deepEqual(calculations.estimate40HQ(27.6), {
    containerCount: 2,
    remainingCapacityTon: 27.4,
  });
});

test("40HQ returns no estimate for zero or invalid total weight", () => {
  assert.deepEqual(calculations.estimate40HQ(0), {
    containerCount: 0,
    remainingCapacityTon: null,
  });
  assert.deepEqual(calculations.estimate40HQ(-1), {
    containerCount: 0,
    remainingCapacityTon: null,
  });
});

test("40HQ clears floating-point residue at the configured capacity boundary", () => {
  assert.deepEqual(calculations.estimate40HQ(27.499999), {
    containerCount: 1,
    remainingCapacityTon: 0,
  });
});

test("black welded pipe OD48 x 2.0 uses the confirmed theoretical kg/m formula at 6 m", () => {
  const result = calculations.calculateRow(blackPipeRow());

  assert.equal(result.hasWeight, true);
  assert.equal(result.unitWeightLabel, "kg/m");
  assertClose(result.unitWeightKg, 2.26872, "kg/m");
  assertClose(result.pieceWeightKg, 13.61232, "6 m piece weight");
  assertClose(result.totalWeightKg, 13.61232, "one-piece total weight");
});

test("custom black welded pipe preserves length and quantity proportionality", () => {
  const result = calculations.calculateRow(
    blackPipeRow({
      dimensionMode: "custom",
      specId: "",
      thicknessId: "",
      customOuterDiameterMm: 48,
      customThicknessMm: 2,
      lengthM: 4.5,
      quantity: 3,
    }),
  );

  assertClose(result.unitWeightKg, 2.26872, "kg/m");
  assertClose(result.pieceWeightKg, 10.20924, "4.5 m piece weight");
  assertClose(result.totalWeightKg, 30.62772, "three-piece total weight");
});

test("round pipe with missing or invalid wall thickness remains unweighed", () => {
  const missingThickness = calculations.calculateRow(
    blackPipeRow({
      dimensionMode: "custom",
      customOuterDiameterMm: 48,
      customThicknessMm: undefined,
    }),
  );
  const invalidThickness = calculations.calculateRow(
    blackPipeRow({
      dimensionMode: "custom",
      customOuterDiameterMm: 48,
      customThicknessMm: 24,
    }),
  );

  assert.deepEqual(missingThickness, {
    rowId: "black-pipe-row",
    hasWeight: false,
    unitWeightLabel: "kg/m",
  });
  assert.deepEqual(invalidThickness, missingThickness);
});

test("custom square tube 40 x 40 x 2.0 keeps the theoretical 6 m piece weight", () => {
  const result = calculations.calculateRow(squareTubeRow());

  assertClose(result.unitWeightKg, 2.3864, "kg/m");
  assertClose(result.pieceWeightKg, 14.3184, "6 m piece weight");
  assertClose(result.totalWeightKg, 14.3184, "one-piece total weight");
});

test("custom rectangular tube 40 x 60 x 2.0 scales by custom length and quantity", () => {
  const result = calculations.calculateRow(
    squareTubeRow({ customHeightMm: 60, lengthM: 4.5, quantity: 3 }),
  );

  assertClose(result.unitWeightKg, 3.0144, "kg/m");
  assertClose(result.pieceWeightKg, 13.5648, "4.5 m piece weight");
  assertClose(result.totalWeightKg, 40.6944, "three-piece total weight");
});

test("square and rectangular tube invalid wall dimensions remain unweighed", () => {
  const missingThickness = calculations.calculateRow(
    squareTubeRow({ customThicknessMm: undefined }),
  );
  const invalidInternalSize = calculations.calculateRow(
    squareTubeRow({ customThicknessMm: 20 }),
  );

  assert.deepEqual(missingThickness, {
    rowId: "square-tube-row",
    hasWeight: false,
    unitWeightLabel: "kg/m",
  });
  assert.deepEqual(invalidInternalSize, missingThickness);
});

test("confirmed galvanized pipe data takes priority and bundle quantity never changes weight", () => {
  const result = calculations.calculateRow({
    id: "galvanized-pipe-row",
    productType: "galvanized_pipe",
    dimensionMode: "standard",
    specId: "dn15",
    thicknessId: "1.5",
    lengthM: 6,
    quantity: 2,
    quantityUnit: "支",
  });

  assert.equal(result.hasWeight, true);
  assertClose(result.unitWeightKg, 4.1 / 6, "reference kg/m from the confirmed 6 m weight");
  assert.equal(result.pieceWeightKg, 4.1);
  assert.equal(result.totalWeightKg, 8.2);
});

test("null or undefined fitting weights, unknown specifications, and zero quantity follow current missing-weight rules", () => {
  const nullWeight = calculations.calculateRow({
    id: "null-fitting-weight",
    productType: "grooved_fitting",
    fittingTypeId: "unknown",
    specification: "unknown",
    pressureRatingMpa: 0,
    finishedWeightKg: null,
    quantity: 1,
    quantityUnit: "件",
  });
  const undefinedWeight = calculations.calculateRow({
    id: "undefined-fitting-weight",
    productType: "grooved_fitting",
    fittingTypeId: "unknown",
    specification: "unknown",
    pressureRatingMpa: 0,
    quantity: 1,
    quantityUnit: "件",
  });
  const missingSpec = calculations.calculateRow(blackPipeRow({ specId: "missing" }));
  const zeroQuantity = calculations.calculateSummary({
    modules: [{ id: "module", productType: "black_steel_pipe", rows: [blackPipeRow({ quantity: 0 })] }],
  });
  const noValidWeight = calculations.calculateSummary({
    modules: [
      {
        id: "module",
        productType: "black_steel_pipe",
        rows: [blackPipeRow({ specId: "missing", quantity: 2 })],
      },
    ],
  });

  assert.equal(nullWeight.hasWeight, false);
  assert.equal(undefinedWeight.hasWeight, false);
  assert.equal(missingSpec.hasWeight, false);
  assert.equal(zeroQuantity.validRowCount, 0);
  assert.equal(zeroQuantity.totalWeightKg, 0);
  assert.equal(zeroQuantity.containerCount, 0);
  assert.equal(noValidWeight.totalWeightKg, 0);
  assert.equal(noValidWeight.missingWeightRowCount, 1);
  assert.equal(noValidWeight.containerCount, 0);
});

test("calculation helpers assume normalized rows: missing length or quantity is not a supported weighted input", () => {
  const missingLength = calculations.calculateRow(
    squareTubeRow({ lengthM: undefined }),
  );
  const missingQuantitySummary = calculations.calculateSummary({
    modules: [
      {
        id: "module",
        productType: "black_steel_pipe",
        rows: [blackPipeRow({ quantity: undefined })],
      },
    ],
  });
  const unsupportedProduct = calculations.calculateRow({
    ...blackPipeRow(),
    productType: "unsupported_product",
  });

  assert.equal(missingLength.hasWeight, true);
  assert.equal(Number.isNaN(missingLength.pieceWeightKg), true);
  assert.equal(Number.isNaN(missingQuantitySummary.totalQuantityPieces), true);
  assert.equal(Number.isNaN(missingQuantitySummary.totalWeightKg), true);
  assert.deepEqual(unsupportedProduct, {
    rowId: "",
    hasWeight: false,
    unitWeightLabel: "kg/m",
  });
});
