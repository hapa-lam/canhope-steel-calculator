export type ChannelSteelWeightOption = {
  id: string;
  referenceWeightKgPerPiece: number;
  piecesPerBundle: number;
};

export type ChannelSteelSpec = {
  id: string;
  nominalSize: string;
  referenceLengthM: 6;
  weightOptions: ChannelSteelWeightOption[];
};

const channelSteelRawData: Record<string, [number, number][]> = {
  "5": [
    [22, 144],
    [26, 144],
    [30, 144],
  ],
  "6.3": [
    [20.5, 126],
    [23, 120],
    [26, 126],
    [30, 120],
    [34, 120],
  ],
  "8": [
    [23, 120],
    [26, 120],
    [28, 120],
    [31, 120],
    [33, 120],
    [36, 120],
    [39, 80],
    [41, 80],
    [44, 80],
  ],
  "10": [
    [28, 100],
    [30, 100],
    [32, 80],
    [33, 100],
    [35, 100],
    [38, 100],
    [42, 80],
    [46, 80],
    [48, 80],
    [50, 80],
    [54, 80],
  ],
  "12": [
    [43, 64],
    [48, 64],
    [53, 64],
    [59, 64],
    [64, 64],
  ],
  "14": [
    [59, 56],
    [63, 56],
    [69, 56],
    [72, 56],
    [76, 56],
    [80, 56],
  ],
  "16": [
    [66, 48],
    [72, 42],
    [76, 48],
    [80, 48],
    [87, 42],
    [94, 42],
  ],
  "18": [
    [92, 36],
    [102, 36],
    [112, 36],
  ],
  "20": [
    [104, 30],
    [115, 30],
    [123, 30],
  ],
};

export function getChannelSteelReferenceWeightId(referenceWeightKgPerPiece: number) {
  return `${referenceWeightKgPerPiece}kg`;
}

export const channelSteelData: ChannelSteelSpec[] = Object.entries(channelSteelRawData).map(
  ([nominalSize, options]) => ({
    id: nominalSize,
    nominalSize,
    referenceLengthM: 6,
    weightOptions: options.map(([referenceWeightKgPerPiece, piecesPerBundle]) => ({
      id: getChannelSteelReferenceWeightId(referenceWeightKgPerPiece),
      referenceWeightKgPerPiece,
      piecesPerBundle,
    })),
  }),
);

export function findChannelSteelReference(specId: string, referenceWeightId: string) {
  const spec = channelSteelData.find((item) => item.id === specId);
  const weightOption = spec?.weightOptions.find((item) => item.id === referenceWeightId);

  return spec && weightOption ? { spec, weightOption } : null;
}
