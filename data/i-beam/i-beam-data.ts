export type IBeamWeightOption = {
  id: string;
  referenceWeightKgPerPiece: number;
  piecesPerBundle: number | null;
};

export type IBeamSpec = {
  id: string;
  size: string;
  referenceLengthM: 6;
  weightOptions: IBeamWeightOption[];
};

const iBeamRawData: Record<string, Array<[number, number | null]>> = {
  "10#": [
    [42, 60],
    [52, 60],
    [63, 60],
  ],
  "12#": [
    [52, 48],
    [64, 48],
    [78, 48],
  ],
  "14#": [
    [63, null],
    [84, 48],
    [93, 48],
  ],
  "16#": [
    [93, 36],
    [101, 36],
    [115, 36],
  ],
  "20#": [
    [137, 18],
    [154, 20],
  ],
};

export function getIBeamReferenceWeightId(referenceWeightKgPerPiece: number) {
  return `${referenceWeightKgPerPiece}kg`;
}

export const iBeamData: IBeamSpec[] = Object.entries(iBeamRawData).map(
  ([size, options]) => ({
    id: size,
    size,
    referenceLengthM: 6,
    weightOptions: options.map(([referenceWeightKgPerPiece, piecesPerBundle]) => ({
      id: getIBeamReferenceWeightId(referenceWeightKgPerPiece),
      referenceWeightKgPerPiece,
      piecesPerBundle,
    })),
  }),
);

export function findIBeamReference(specId: string, referenceWeightId: string) {
  const spec = iBeamData.find((item) => item.id === specId);
  const weightOption = spec?.weightOptions.find((item) => item.id === referenceWeightId);

  return spec && weightOption ? { spec, weightOption } : null;
}
