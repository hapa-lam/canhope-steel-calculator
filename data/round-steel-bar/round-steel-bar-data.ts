export type RoundSteelBarSpec = {
  id: string;
  diameterMm: number;
  sizeLabel: string;
  referenceLengthM: 6;
  referenceWeightKgPerPiece: number;
  piecesPerBundle: number;
};

export const roundSteelBarData: RoundSteelBarSpec[] = [
  { id: "od6", diameterMm: 6, sizeLabel: "Φ6", referenceLengthM: 6, referenceWeightKgPerPiece: 1.5, piecesPerBundle: 2655 },
  { id: "od8", diameterMm: 8, sizeLabel: "Φ8", referenceLengthM: 6, referenceWeightKgPerPiece: 2.4, piecesPerBundle: 1813 },
  { id: "od10", diameterMm: 10, sizeLabel: "Φ10", referenceLengthM: 6, referenceWeightKgPerPiece: 3.7, piecesPerBundle: 1088 },
  { id: "od12", diameterMm: 12, sizeLabel: "Φ12", referenceLengthM: 6, referenceWeightKgPerPiece: 5.33, piecesPerBundle: 775 },
  { id: "od14", diameterMm: 14, sizeLabel: "Φ14", referenceLengthM: 6, referenceWeightKgPerPiece: 7.3, piecesPerBundle: 548 },
  { id: "od16", diameterMm: 16, sizeLabel: "Φ16", referenceLengthM: 6, referenceWeightKgPerPiece: 9.48, piecesPerBundle: 449 },
  { id: "od18", diameterMm: 18, sizeLabel: "Φ18", referenceLengthM: 6, referenceWeightKgPerPiece: 11.99, piecesPerBundle: 336 },
  { id: "od20", diameterMm: 20, sizeLabel: "Φ20", referenceLengthM: 6, referenceWeightKgPerPiece: 14.81, piecesPerBundle: 277 },
];

export function findRoundSteelBarReference(specId: string) {
  return roundSteelBarData.find((item) => item.id === specId) ?? null;
}
