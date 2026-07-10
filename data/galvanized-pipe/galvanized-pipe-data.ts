export type GalvanizedPipeThicknessOption = {
  thicknessMm: number;
  referenceWeightKgPerPiece: number;
};

export type GalvanizedPipeSpec = {
  id: string;
  dn: string;
  inchSize: string;
  outerDiameterMm: number;
  piecesPerBundle: number | null;
  referenceLengthM: 6;
  thicknessOptions: GalvanizedPipeThicknessOption[];
};

export const galvanizedPipeData: GalvanizedPipeSpec[] = [
  {
    id: "dn15",
    dn: "DN15",
    inchSize: '1/2"',
    outerDiameterMm: 21,
    piecesPerBundle: 169,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 4.1 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 4.6 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 5.5 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 6.0 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 7.1 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 7.5 },
    ],
  },
  {
    id: "dn20",
    dn: "DN20",
    inchSize: '3/4"',
    outerDiameterMm: 27,
    piecesPerBundle: 127,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 5.2 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 5.9 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 6.8 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 7.4 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 9.1 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 9.8 },
    ],
  },
  {
    id: "dn25",
    dn: "DN25",
    inchSize: '1"',
    outerDiameterMm: 33,
    piecesPerBundle: 91,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 6.6 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 7.4 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 8.7 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 9.5 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 10.9 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 11.8 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 13.6 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 14.8 },
    ],
  },
  {
    id: "dn32",
    dn: "DN32",
    inchSize: '1 1/4"',
    outerDiameterMm: 42,
    piecesPerBundle: 61,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 8.5 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 9.8 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 11.4 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 12.5 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 14.6 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 16.3 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 17.8 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 19.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 20.7 },
    ],
  },
  {
    id: "dn40",
    dn: "DN40",
    inchSize: '1 1/2"',
    outerDiameterMm: 48,
    piecesPerBundle: 61,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 9.9 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 11.1 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 13.2 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 14.4 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 16.6 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 18.2 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 19.8 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 21.8 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 23.8 },
    ],
  },
  {
    id: "dn50",
    dn: "DN50",
    inchSize: '2"',
    outerDiameterMm: 60,
    piecesPerBundle: 37,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 12.3 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 13.9 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 16.3 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 17.9 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 21.0 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 23.0 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 25.0 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 27.5 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 29.6 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 32.1 },
    ],
  },
  {
    id: "dn65",
    dn: "DN65",
    inchSize: '2 1/2"',
    outerDiameterMm: 76,
    piecesPerBundle: 37,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 16.5 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 18.7 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 21.9 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 24.0 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 27.2 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 29.8 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 32.5 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 35.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 37.5 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 40.5 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 43.8 },
    ],
  },
  {
    id: "dn80",
    dn: "DN80",
    inchSize: '3"',
    outerDiameterMm: 89,
    piecesPerBundle: 19,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 19.4 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 22.0 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 25.7 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 28.3 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 32.0 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 35.0 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 38.0 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 41.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 44.0 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 47.0 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 50.0 },
    ],
  },
  {
    id: "dn100",
    dn: "DN100",
    inchSize: '4"',
    outerDiameterMm: 114,
    piecesPerBundle: 19,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 1.5, referenceWeightKgPerPiece: 24.9 },
      { thicknessMm: 1.7, referenceWeightKgPerPiece: 28.2 },
      { thicknessMm: 2.0, referenceWeightKgPerPiece: 33.1 },
      { thicknessMm: 2.2, referenceWeightKgPerPiece: 36.4 },
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 41.0 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 45.0 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 49.0 },
      { thicknessMm: 3.25, referenceWeightKgPerPiece: 53.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 57.0 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 61.5 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 65.6 },
    ],
  },
  {
    id: "dn125",
    dn: "DN125",
    inchSize: '5"',
    outerDiameterMm: 140,
    piecesPerBundle: 19,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 50.9 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 55.3 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 60.8 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 70.6 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 75.6 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 80.5 },
      { thicknessMm: 4.25, referenceWeightKgPerPiece: 85.5 },
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 91.4 },
    ],
  },
  {
    id: "dn150",
    dn: "DN150",
    inchSize: '6"',
    outerDiameterMm: 168,
    piecesPerBundle: 10,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 60.0 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 66.0 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 72.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 83.5 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 89.5 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 95.0 },
      { thicknessMm: 4.25, referenceWeightKgPerPiece: 101.5 },
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 107.5 },
    ],
  },
  {
    id: "dn200",
    dn: "DN200",
    inchSize: '8"',
    outerDiameterMm: 219,
    piecesPerBundle: 7,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 2.5, referenceWeightKgPerPiece: 80.0 },
      { thicknessMm: 2.75, referenceWeightKgPerPiece: 88.0 },
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 96.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 112.0 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 119.0 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 127.0 },
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 143.0 },
      { thicknessMm: 4.75, referenceWeightKgPerPiece: 151.0 },
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 158.0 },
      { thicknessMm: 5.5, referenceWeightKgPerPiece: 174.0 },
      { thicknessMm: 5.75, referenceWeightKgPerPiece: 183.0 },
      { thicknessMm: 6.0, referenceWeightKgPerPiece: 191.5 },
    ],
  },
  {
    id: "dn250",
    dn: "DN250",
    inchSize: '10"',
    outerDiameterMm: 273,
    piecesPerBundle: 4,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 120.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 140.0 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 149.0 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 159.0 },
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 179.0 },
      { thicknessMm: 4.75, referenceWeightKgPerPiece: 189.0 },
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 198.0 },
      { thicknessMm: 5.5, referenceWeightKgPerPiece: 218.0 },
      { thicknessMm: 5.75, referenceWeightKgPerPiece: 231.0 },
      { thicknessMm: 6.0, referenceWeightKgPerPiece: 241.0 },
    ],
  },
  {
    id: "dn300",
    dn: "DN300",
    inchSize: '12"',
    outerDiameterMm: 325,
    piecesPerBundle: 4,
    referenceLengthM: 6,
    thicknessOptions: [
      { thicknessMm: 3.0, referenceWeightKgPerPiece: 143.0 },
      { thicknessMm: 3.5, referenceWeightKgPerPiece: 166.0 },
      { thicknessMm: 3.75, referenceWeightKgPerPiece: 178.0 },
      { thicknessMm: 4.0, referenceWeightKgPerPiece: 190.0 },
      { thicknessMm: 4.5, referenceWeightKgPerPiece: 213.0 },
      { thicknessMm: 4.75, referenceWeightKgPerPiece: 225.0 },
      { thicknessMm: 5.0, referenceWeightKgPerPiece: 237.0 },
      { thicknessMm: 5.5, referenceWeightKgPerPiece: 260.0 },
      { thicknessMm: 5.75, referenceWeightKgPerPiece: 271.0 },
      { thicknessMm: 6.0, referenceWeightKgPerPiece: 283.0 },
    ],
  },
];

export function getGalvanizedPipeSpecLabel(spec: GalvanizedPipeSpec) {
  return `${spec.dn} / ${spec.inchSize} / Φ${spec.outerDiameterMm}`;
}

export function getGalvanizedPipeThicknessId(thicknessMm: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
    useGrouping: false,
  }).format(thicknessMm);
}

export function getGalvanizedPipeThicknessLabel(thicknessMm: number) {
  return `${getGalvanizedPipeThicknessId(thicknessMm)}mm`;
}

export function findGalvanizedPipeReference(specId: string, thicknessId: string) {
  const spec = galvanizedPipeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getGalvanizedPipeThicknessId(item.thicknessMm) === thicknessId,
  );

  return spec && thickness ? { spec, thickness } : null;
}
