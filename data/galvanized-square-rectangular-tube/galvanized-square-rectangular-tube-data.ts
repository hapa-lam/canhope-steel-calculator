export type GalvanizedSquareRectangularTubeThicknessOption = {
  thicknessMm: number;
  referenceWeightKgPerPiece: number;
};

export type GalvanizedSquareRectangularTubeSpec = {
  id: string;
  widthMm: number;
  heightMm: number;
  referenceLengthM: 6;
  thicknessOptions: GalvanizedSquareRectangularTubeThicknessOption[];
};

export const galvanizedSquareRectangularTubePart1 = {
  "20x20": [
    [1.5, 5.4],
    [1.8, 6.0],
    [2, 7.1],
  ],

  "25x25": [
    [1.2, 5.4],
    [1.5, 6.8],
    [1.8, 7.8],
    [2, 9.1],
    [2.5, 11.2],
    [2.75, 12.3],
  ],

  "20x30": [
    [1.2, 5.4],
    [1.5, 6.8],
    [1.8, 7.8],
    [2, 9.1],
    [2.5, 11.2],
    [2.75, 12.3],
  ],

  "30x30": [
    [1.5, 8.3],
    [1.8, 9.3],
    [2, 10.8],
    [2.5, 13.3],
    [2.75, 14.4],
    [3, 15.7],
  ],

  "40x40": [
    [1.5, 11.2],
    [1.8, 12.5],
    [2, 14.4],
    [2.5, 18.1],
    [2.75, 19.7],
    [3, 21.7],
    [3.5, 24.5],
    [3.75, 25.8],
    [4.75, 31.5],
  ],

  "50x50": [
    [1.5, 13.7],
    [1.8, 15.7],
    [2, 18.0],
    [2.5, 22.9],
    [2.75, 25.1],
    [3, 27.5],
    [3.5, 30.9],
    [3.75, 33.3],
    [4.5, 38.8],
    [4.75, 40.8],
  ],

  "60x60": [
    [1.5, 17.0],
    [1.8, 18.9],
    [2, 21.8],
    [2.5, 27.2],
    [2.75, 30.6],
    [3, 32.5],
    [3.5, 37.5],
    [3.75, 40.5],
    [4.5, 47.6],
    [4.75, 50.3],
  ],

  "70x70": [
    [2.5, 31.8],
    [2.75, 34.9],
    [3, 37.9],
    [3.5, 43.9],
    [3.75, 46.8],
    [4.5, 55.5],
    [4.75, 58.4],
  ],

  "80x80": [
    [1.5, 22.0],
    [1.8, 25.5],
    [2, 29.7],
    [2.5, 37.6],
    [2.75, 40.4],
    [3, 44.6],
    [3.5, 50.8],
    [3.75, 55.0],
    [4.5, 64.6],
    [4.75, 68.0],
    [5.5, 78.0],
    [5.75, 82.3],
  ],

  "100x100": [
    [1.5, 28.0],
    [1.8, 32.1],
    [2, 36.5],
    [2.5, 46.5],
    [2.75, 51.0],
    [3, 55.6],
    [3.5, 64.5],
    [3.75, 68.4],
    [4.5, 82.0],
    [4.75, 86.0],
    [5.5, 98.5],
    [5.75, 102.6],
  ],

  "120x120": [
    [2, 44.7],
    [2.5, 56.1],
    [2.75, 61.8],
    [3, 67.0],
    [3.5, 78.1],
    [3.75, 83.7],
    [4.5, 98.2],
    [4.75, 103.3],
    [5.5, 119.0],
    [5.75, 127.0],
  ],

  "150x150": [
    [2.5, 71.5],
    [2.75, 77.5],
    [3, 84.3],
    [3.5, 97.5],
    [3.75, 103.8],
    [4.5, 124.0],
    [4.75, 131.0],
    [5.5, 150.0],
    [5.75, 157.0],
    [7.5, 201.6],
    [7.75, 208.2],
  ],

  "200x200": [
    [2.5, 95.5],
    [2.75, 104.0],
    [3, 113.5],
    [3.5, 133.5],
    [3.75, 141.5],
    [4.5, 166.0],
    [4.75, 176.6],
    [5.5, 202.0],
    [5.75, 210.9],
    [7.5, 272.0],
    [7.75, 281.5],
    [9.5, 344.0],
    [9.75, 350.0],
  ],
} as const satisfies Record<string, readonly (readonly [number, number])[]>;

export const galvanizedSquareRectangularTubePart2 = {
  "20x40": [
    [1.5, 8.2],
    [1.8, 9.2],
    [2, 10.8],
    [2.5, 13.5],
    [2.75, 14.4],
    [3, 15.8],
  ],

  "25x50": [
    [1.5, 10.2],
    [1.8, 11.7],
    [2, 13.4],
    [2.5, 16.8],
    [2.75, 18.4],
    [3, 20.2],
  ],

  "30x40": [
    [2, 12.5],
    [2.5, 15.5],
    [2.75, 16.7],
    [3, 18.2],
  ],

  "30x50": [
    [1.5, 11.0],
    [1.8, 12.5],
    [2, 14.4],
    [2.5, 18.1],
    [2.75, 19.7],
    [3, 21.7],
    [3.5, 24.5],
    [3.75, 25.9],
  ],

  "30x60": [
    [1.5, 13.1],
    [1.8, 14.4],
    [2, 16.6],
    [2.5, 20.6],
    [2.75, 22.6],
    [3, 24.1],
    [3.5, 27.7],
    [3.75, 29.7],
  ],

  "40x60": [
    [1.2, 11.3],
    [1.3, 12.0],
    [1.4, 12.4],
    [1.5, 13.7],
    [1.8, 15.7],
    [2, 18.0],
    [2.5, 23.0],
    [2.75, 25.0],
    [3, 27.0],
    [3.5, 30.5],
    [3.75, 32.8],
    [4.5, 39.1],
    [4.75, 41.5],
  ],

  "40x80": [
    [1.5, 16.7],
    [1.8, 18.9],
    [2, 21.8],
    [2.5, 27.5],
    [2.75, 30.2],
    [3, 32.5],
    [3.5, 37.8],
    [3.75, 40.0],
    [4.5, 47.0],
    [4.75, 49.7],
  ],

  "50x70": [
    [1.5, 16.7],
    [1.8, 18.9],
    [2, 21.8],
    [2.5, 27.0],
    [2.75, 29.7],
    [3, 32.5],
    [3.5, 37.2],
    [3.75, 40.0],
    [4.75, 50.3],
  ],

  "50x80": [
    [2.5, 29.8],
    [2.75, 32.4],
    [3, 35.1],
    [3.5, 40.6],
    [3.75, 43.7],
    [4.75, 53.6],
  ],

  "50x100": [
    [1.5, 20.9],
    [1.8, 23.8],
    [2, 27.8],
    [2.5, 35.4],
    [2.75, 38.1],
    [3, 41.7],
    [3.5, 47.8],
    [3.75, 51.4],
    [4.5, 60.0],
    [4.75, 64.3],
    [5.75, 76.0],
  ],

  "50x150": [
    [2, 36.5],
    [2.5, 46.0],
    [2.75, 51.0],
  ],
} as const satisfies Record<string, readonly (readonly [number, number])[]>;

export const galvanizedSquareRectangularTubePart3 = {
  "60x80": [
    [1.8, 21.5],
    [2, 25.6],
    [2.5, 31.7],
    [2.75, 35.5],
    [3, 38.8],
    [3.5, 44.4],
    [3.75, 47.5],
    [4.5, 55.5],
    [4.75, 58.5],
  ],

  "60x100": [
    [2.5, 36.5],
    [2.75, 40.2],
    [3, 43.5],
    [3.5, 50.3],
    [3.75, 54.9],
    [4.5, 64.6],
    [4.75, 68.0],
  ],

  "60x120": [
    [1.8, 29.5],
    [2, 32.5],
    [2.5, 41.8],
    [2.75, 45.3],
    [3, 49.5],
    [3.5, 57.3],
    [3.75, 61.5],
    [4.5, 72.4],
    [4.75, 76.8],
    [5.5, 88.1],
    [5.75, 93.0],
  ],

  "75x150": [
    [2, 42.0],
    [2.5, 52.0],
    [2.75, 56.8],
    [3.5, 71.7],
    [3.75, 76.7],
    [4.5, 91.5],
    [4.75, 96.6],
    [5.5, 111.0],
    [5.75, 116.4],
  ],

  "80x100": [
    [2.5, 41.7],
    [2.75, 45.3],
    [3, 49.5],
    [3.5, 58.2],
    [3.75, 61.5],
    [4.5, 72.4],
    [4.75, 76.9],
    [5.5, 88.0],
    [5.75, 91.0],
  ],

  "80x120": [
    [2.5, 46.5],
    [2.75, 50.8],
    [3, 55.6],
    [3.5, 64.8],
    [3.8, 68.5],
    [4.5, 82.9],
    [4.75, 86.0],
    [5.5, 98.5],
    [5.75, 103.0],
  ],

  "80x140": [
    [2.5, 50.6],
    [2.75, 55.5],
    [3, 60.8],
    [3.5, 70.4],
    [3.75, 76.5],
    [4.5, 90.0],
    [4.75, 94.7],
    [5.5, 109.0],
    [5.75, 114.5],
  ],

  "80x160": [
    [2.5, 56.5],
    [2.75, 61.9],
    [3, 68.7],
    [3.5, 78.1],
    [3.75, 84.5],
    [4.5, 98.9],
    [4.75, 103.8],
    [5.5, 120.0],
    [5.75, 125.5],
  ],

  "100x150": [
    [2, 48.0],
    [2.5, 59.0],
    [2.75, 65.3],
    [3, 70.0],
    [3.5, 80.6],
    [3.75, 85.7],
    [4.5, 103.0],
    [4.75, 109.0],
    [5.5, 124.5],
    [5.75, 132.1],
  ],

  "100x200": [
    [2.5, 71.0],
    [2.75, 77.5],
    [3, 84.2],
    [3.5, 97.5],
    [3.75, 104.1],
    [4.5, 124.3],
    [4.75, 131.3],
    [5.5, 150.8],
    [5.75, 158.5],
    [7.5, 201.0],
    [7.75, 208.4],
    [8, 213.0],
  ],

  "150x200": [
    [3.5, 113.0],
    [3.75, 121.0],
    [4.5, 145.0],
    [4.75, 153.3],
    [5.5, 176.7],
    [5.75, 186.0],
    [7.5, 236.7],
    [7.75, 245.0],
    [9.5, 297.0],
    [9.75, 305.0],
  ],
} as const satisfies Record<string, readonly (readonly [number, number])[]>;

export const galvanizedSquareRectangularTubeAdditions = {
  "20x20": [[1.7, 5.88]],

  "20x40": [
    [1.0, 5.3],
    [1.1, 5.85],
    [1.2, 6.5],
    [1.3, 6.76],
    [1.7, 8.8],
  ],

  "25x25": [
    [1.7, 7.4],
    [3.0, 12.7],
  ],

  "25x50": [[1.7, 11.3]],

  "30x30": [
    [1.0, 5.33],
    [1.1, 5.9],
    [1.2, 6.5],
    [1.3, 6.76],
    [1.7, 8.9],
  ],

  "30x50": [
    [1.0, 6.99],
    [1.1, 7.72],
    [1.2, 8.44],
    [1.3, 8.75],
    [1.7, 12.2],
  ],

  "38x58": [
    [1.0, 8.4],
    [1.1, 9.41],
    [1.2, 9.62],
    [1.3, 10.67],
    [1.5, 12.3],
    [1.7, 13.9],
    [2.0, 16.5],
    [2.5, 20.4],
    [2.75, 22.3],
    [3.0, 24.2],
  ],

  "40x40": [
    [1.0, 7.44],
    [1.1, 7.73],
    [1.2, 8.52],
    [1.3, 8.89],
    [1.4, 9.8],
    [1.7, 12.0],
  ],

  "40x60": [
    [1.0, 9.02],
    [1.1, 10.1],
    [1.7, 15.1],
  ],

  "40x80": [
    [1.0, 11.03],
    [1.1, 11.77],
    [1.2, 13.0],
    [1.3, 13.48],
    [1.7, 18.0],
  ],

  "45x95": [
    [1.5, 18.25],
    [1.7, 20.83],
    [2.0, 24.11],
  ],

  "50x50": [[1.7, 15.0]],

  "50x70": [[4.5, 47.0]],

  "50x100": [
    [1.7, 22.5],
    [5.5, 73.0],
  ],

  "50x150": [
    [3.0, 55.9],
    [3.5, 64.9],
    [3.75, 69.4],
    [4.5, 82.6],
    [4.75, 86.9],
  ],

  "60x60": [
    [1.7, 18.0],
    [5.5, 57.0],
    [5.75, 59.5],
  ],

  "60x80": [
    [1.5, 18.3],
    [1.7, 20.8],
  ],

  "60x120": [
    [1.5, 24.11],
    [1.7, 27.8],
  ],

  "80x80": [[1.7, 23.9]],

  "80x120": [[3.75, 68.3]],

  "100x100": [[1.7, 30.5]],
} as const satisfies Record<string, readonly (readonly [number, number])[]>;

const galvanizedSquareRectangularTubeBaseRawData = {
  ...galvanizedSquareRectangularTubePart1,
  ...galvanizedSquareRectangularTubePart2,
  ...galvanizedSquareRectangularTubePart3,
} as const satisfies Record<string, readonly (readonly [number, number])[]>;

function mergeMissingThicknessOptions(
  baseData: Record<string, readonly (readonly [number, number])[]>,
  additions: Record<string, readonly (readonly [number, number])[]>,
) {
  const merged: Record<string, [number, number][]> = {};

  Object.entries(baseData).forEach(([size, options]) => {
    merged[size] = options.map(([thicknessMm, referenceWeightKgPerPiece]) => [
      thicknessMm,
      referenceWeightKgPerPiece,
    ]);
  });

  Object.entries(additions).forEach(([size, options]) => {
    const existingOptions = merged[size] ?? [];
    const existingThicknesses = new Set(existingOptions.map(([thicknessMm]) => thicknessMm));

    options.forEach(([thicknessMm, referenceWeightKgPerPiece]) => {
      if (!existingThicknesses.has(thicknessMm)) {
        existingOptions.push([thicknessMm, referenceWeightKgPerPiece]);
        existingThicknesses.add(thicknessMm);
      }
    });

    merged[size] = existingOptions.sort(([thicknessA], [thicknessB]) => thicknessA - thicknessB);
  });

  return merged;
}

const galvanizedSquareRectangularTubeRawData = mergeMissingThicknessOptions(
  galvanizedSquareRectangularTubeBaseRawData,
  galvanizedSquareRectangularTubeAdditions,
);

export const galvanizedSquareRectangularTubeData: GalvanizedSquareRectangularTubeSpec[] =
  Object.entries(galvanizedSquareRectangularTubeRawData).map(([size, options]) => {
    const [widthMm, heightMm] = size.split("x").map(Number);

    return {
      id: size,
      widthMm,
      heightMm,
      referenceLengthM: 6,
      thicknessOptions: options.map(([thicknessMm, referenceWeightKgPerPiece]) => ({
        thicknessMm,
        referenceWeightKgPerPiece,
      })),
    };
  });

export function getGalvanizedSquareRectangularTubeThicknessId(thicknessMm: number) {
  return `${thicknessMm}mm`;
}

export function findGalvanizedSquareRectangularTubeReference(specId: string, thicknessId: string) {
  const spec = galvanizedSquareRectangularTubeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getGalvanizedSquareRectangularTubeThicknessId(item.thicknessMm) === thicknessId,
  );

  return spec && thickness ? { spec, thickness } : null;
}
