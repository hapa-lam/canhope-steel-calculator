export type FlatSteelBarThicknessOption = {
  thicknessMm: number;
  referenceWeightKgPerPiece: number;
  piecesPerBundle: number;
};

export type FlatSteelBarSpec = {
  id: string;
  widthMm: number;
  referenceLengthM: 6;
  thicknessOptions: FlatSteelBarThicknessOption[];
};

export function getFlatSteelBarThicknessId(thicknessMm: number) {
  return `${thicknessMm}mm`;
}

export const flatSteelBarData: FlatSteelBarSpec[] = [
  {
    id: "width20",
    widthMm: 20,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 2.0, piecesPerBundle: 2340 },
    ],
  },
  {
    id: "width25",
    widthMm: 25,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 3.3, piecesPerBundle: 1283 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 4.5, piecesPerBundle: 877 },
    ],
  },
  {
    id: "width30",
    widthMm: 30,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 3.0, piecesPerBundle: 1418 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 3.9, piecesPerBundle: 1151 },
    ],
  },
  {
    id: "width40",
    widthMm: 40,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 3.8, piecesPerBundle: 1058 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 5.2, piecesPerBundle: 693 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 5.65, piecesPerBundle: 743 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 7.1, piecesPerBundle: 595 },
      { thicknessMm: 4.75, referenceWeightKgPerPiece: 9.0, piecesPerBundle: 450 },
    ],
  },
  {
    id: "width50",
    widthMm: 50,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 9.0, piecesPerBundle: 455 },
      { thicknessMm: 4.75, referenceWeightKgPerPiece: 11.3, piecesPerBundle: 372 },
      { thicknessMm: 5.75, referenceWeightKgPerPiece: 13.6, piecesPerBundle: 325 },
    ],
  },
  {
    id: "width60",
    widthMm: 60,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 4.75, referenceWeightKgPerPiece: 13.5, piecesPerBundle: 295 },
      { thicknessMm: 5.75, referenceWeightKgPerPiece: 16.3, piecesPerBundle: 256 },
    ],
  },
];

export function findFlatSteelBarReference(specId: string, thicknessId: string) {
  const spec = flatSteelBarData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getFlatSteelBarThicknessId(item.thicknessMm) === thicknessId,
  );

  return spec && thickness ? { spec, thickness } : null;
}
