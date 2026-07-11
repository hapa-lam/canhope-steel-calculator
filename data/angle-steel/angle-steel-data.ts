export type AngleSteelThicknessOption = {
  thicknessMm: number;
  referenceWeightKgPerPiece: number;
  piecesPerBundle: number;
};

export type AngleSteelSpecification = {
  id: string;
  legAMm: number;
  legBMm: number;
  angleType: "equal" | "unequal";
  referenceLengthM: 6;
  thicknessOptions: AngleSteelThicknessOption[];
};

export const angleSteelSpecifications = [
  {
    id: "30x30",
    legAMm: 30,
    legBMm: 30,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.3, referenceWeightKgPerPiece: 5.5, piecesPerBundle: 400 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 6.5, piecesPerBundle: 300 },
      { thicknessMm: 2.8, referenceWeightKgPerPiece: 7.5, piecesPerBundle: 300 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 8.0, piecesPerBundle: 300 },
      { thicknessMm: 3.2, referenceWeightKgPerPiece: 8.5, piecesPerBundle: 300 },
      { thicknessMm: 3.8, referenceWeightKgPerPiece: 9.5, piecesPerBundle: 300 },
    ],
  },
  {
    id: "40x40",
    legAMm: 40,
    legBMm: 40,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.4, referenceWeightKgPerPiece: 7.5, piecesPerBundle: 300 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 8.5, piecesPerBundle: 300 },
      { thicknessMm: 2.8, referenceWeightKgPerPiece: 9.5, piecesPerBundle: 300 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 10.5, piecesPerBundle: 300 },
      { thicknessMm: 3.2, referenceWeightKgPerPiece: 11.0, piecesPerBundle: 218 },
      { thicknessMm: 3.3, referenceWeightKgPerPiece: 11.5, piecesPerBundle: 300 },
      { thicknessMm: 3.6, referenceWeightKgPerPiece: 12.5, piecesPerBundle: 300 },
      { thicknessMm: 3.9, referenceWeightKgPerPiece: 13.5, piecesPerBundle: 300 },
      { thicknessMm: 4.2, referenceWeightKgPerPiece: 14.5, piecesPerBundle: 241 },
      { thicknessMm: 4.8, referenceWeightKgPerPiece: 16.5, piecesPerBundle: 241 },
    ],
  },
  {
    id: "50x50",
    legAMm: 50,
    legBMm: 50,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.6, referenceWeightKgPerPiece: 11.5, piecesPerBundle: 200 },
      { thicknessMm: 2.8, referenceWeightKgPerPiece: 12.5, piecesPerBundle: 200 },
      { thicknessMm: 3.2, referenceWeightKgPerPiece: 13.5, piecesPerBundle: 200 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 14.5, piecesPerBundle: 200 },
      { thicknessMm: 3.6, referenceWeightKgPerPiece: 15.5, piecesPerBundle: 200 },
      { thicknessMm: 3.7, referenceWeightKgPerPiece: 16.5, piecesPerBundle: 200 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 17.5, piecesPerBundle: 200 },
      { thicknessMm: 4.2, referenceWeightKgPerPiece: 18.5, piecesPerBundle: 200 },
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 19.5, piecesPerBundle: 200 },
      { thicknessMm: 4.7, referenceWeightKgPerPiece: 20.5, piecesPerBundle: 200 },
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 21.5, piecesPerBundle: 200 },
      { thicknessMm: 5.2, referenceWeightKgPerPiece: 22.5, piecesPerBundle: 200 },
    ],
  },
  {
    id: "63x63",
    legAMm: 63,
    legBMm: 63,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 4.2, referenceWeightKgPerPiece: 23.0, piecesPerBundle: 131 },
      { thicknessMm: 4.7, referenceWeightKgPerPiece: 26.0, piecesPerBundle: 131 },
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 28.0, piecesPerBundle: 131 },
      { thicknessMm: 5.5, referenceWeightKgPerPiece: 30.0, piecesPerBundle: 131 },
      { thicknessMm: 5.8, referenceWeightKgPerPiece: 32.0, piecesPerBundle: 131 },
    ],
  },
  {
    id: "70x70",
    legAMm: 70,
    legBMm: 70,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 4.3, referenceWeightKgPerPiece: 28.0, piecesPerBundle: 158 },
      { thicknessMm: 4.9, referenceWeightKgPerPiece: 30.0, piecesPerBundle: 158 },
      { thicknessMm: 5.5, referenceWeightKgPerPiece: 35.0, piecesPerBundle: 131 },
      { thicknessMm: 6.0, referenceWeightKgPerPiece: 38.0, piecesPerBundle: 113 },
      { thicknessMm: 6.5, referenceWeightKgPerPiece: 41.0, piecesPerBundle: 113 },
    ],
  },
  {
    id: "75x75",
    legAMm: 75,
    legBMm: 75,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 30.0, piecesPerBundle: 116 },
      { thicknessMm: 4.9, referenceWeightKgPerPiece: 32.0, piecesPerBundle: 149 },
      { thicknessMm: 5.3, referenceWeightKgPerPiece: 35.0, piecesPerBundle: 122 },
      { thicknessMm: 5.9, referenceWeightKgPerPiece: 39.0, piecesPerBundle: 122 },
      { thicknessMm: 6.8, referenceWeightKgPerPiece: 45.0, piecesPerBundle: 95 },
      { thicknessMm: 7.5, referenceWeightKgPerPiece: 50.0, piecesPerBundle: 95 },
    ],
  },
  {
    id: "80x80",
    legAMm: 80,
    legBMm: 80,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 37.0, piecesPerBundle: 95 },
      { thicknessMm: 5.7, referenceWeightKgPerPiece: 41.0, piecesPerBundle: 109 },
      { thicknessMm: 7.6, referenceWeightKgPerPiece: 54.0, piecesPerBundle: 81 },
    ],
  },
  {
    id: "100x100",
    legAMm: 100,
    legBMm: 100,
    angleType: "equal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 47.0, piecesPerBundle: 83 },
      { thicknessMm: 5.8, referenceWeightKgPerPiece: 52.0, piecesPerBundle: 83 },
      { thicknessMm: 7.8, referenceWeightKgPerPiece: 68.0, piecesPerBundle: 63 },
      { thicknessMm: 9.8, referenceWeightKgPerPiece: 84.0, piecesPerBundle: 58 },
    ],
  },
  {
    id: "50x32",
    legAMm: 50,
    legBMm: 32,
    angleType: "unequal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 3.9, referenceWeightKgPerPiece: 15.0, piecesPerBundle: 293 },
    ],
  },
  {
    id: "63x40",
    legAMm: 63,
    legBMm: 40,
    angleType: "unequal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 4.7, referenceWeightKgPerPiece: 22.0, piecesPerBundle: 215 },
    ],
  },
  {
    id: "75x50",
    legAMm: 75,
    legBMm: 50,
    angleType: "unequal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 24.0, piecesPerBundle: 185 },
      { thicknessMm: 4.7, referenceWeightKgPerPiece: 28.0, piecesPerBundle: 185 },
      { thicknessMm: 5.8, referenceWeightKgPerPiece: 32.0, piecesPerBundle: 149 },
    ],
  },
  {
    id: "100x63",
    legAMm: 100,
    legBMm: 63,
    angleType: "unequal",
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 38.0, piecesPerBundle: 109 },
      { thicknessMm: 5.8, referenceWeightKgPerPiece: 42.0, piecesPerBundle: 109 },
    ],
  },
] as const satisfies AngleSteelSpecification[];

export function getAngleSteelThicknessId(thicknessMm: number) {
  return `${thicknessMm}mm`;
}

export function findAngleSteelReference(specId: string, thicknessId: string) {
  const spec = angleSteelSpecifications.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getAngleSteelThicknessId(item.thicknessMm) === thicknessId,
  );

  return spec && thickness ? { spec, thickness } : null;
}
