export type BlackSteelPipeRawOption = [thicknessMm: number, standardLengthM: 6 | 12];

export type BlackSteelPipeThicknessOption = {
  thicknessMm: number;
  standardLengthM: 6 | 12;
};

export type BlackSteelPipeSpec = {
  id: string;
  outerDiameterMm: number;
  dn: string | null;
  inchSize: string | null;
  localSizeLabelZh: string | null;
  thicknessOptions: BlackSteelPipeThicknessOption[];
};

const standardDiameterMeta: Record<
  string,
  { dn: string; inchSize: string; localSizeLabelZh: string }
> = {
  "21": { dn: "DN15", inchSize: "1/2", localSizeLabelZh: "4分" },
  "25": { dn: "DN20", inchSize: "3/4", localSizeLabelZh: "6分" },
  "33": { dn: "DN25", inchSize: "1", localSizeLabelZh: "1寸" },
  "42": { dn: "DN32", inchSize: "1 1/4", localSizeLabelZh: "1寸2" },
  "48": { dn: "DN40", inchSize: "1 1/2", localSizeLabelZh: "1寸半" },
  "60": { dn: "DN50", inchSize: "2", localSizeLabelZh: "2寸" },
  "76": { dn: "DN65", inchSize: "2 1/2", localSizeLabelZh: "2寸半" },
  "89": { dn: "DN80", inchSize: "3", localSizeLabelZh: "3寸" },
  "114": { dn: "DN100", inchSize: "4", localSizeLabelZh: "4寸" },
  "140": { dn: "DN125", inchSize: "5", localSizeLabelZh: "5寸" },
  "165": { dn: "DN150", inchSize: "6", localSizeLabelZh: "6寸" },
  "219": { dn: "DN200", inchSize: "8", localSizeLabelZh: "8寸" },
  "273": { dn: "DN250", inchSize: "10", localSizeLabelZh: "10寸" },
  "325": { dn: "DN300", inchSize: "12", localSizeLabelZh: "12寸" },
  "377": { dn: "DN350", inchSize: "14", localSizeLabelZh: "14寸" },
  "426": { dn: "DN400", inchSize: "16", localSizeLabelZh: "16寸" },
};

export const blackWeldedPipeRawOptions = {
  "21": [[2, 6], [2.2, 6], [2.5, 6], [2.75, 6]],
  "25": [[1.5, 6], [2, 6], [2.5, 6], [2.75, 6]],
  "25.4": [[3.5, 6]],
  "27": [[2, 6]],
  "28": [[2, 6], [2.5, 6]],
  "30": [[2, 6], [2.5, 6], [3, 6]],
  "32": [[1.5, 6], [3.5, 6]],
  "33": [[2, 6], [2.5, 6], [2.8, 6], [3, 6], [3.25, 6], [4, 6]],
  "38": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [4.5, 6]],
  "40": [[2, 6], [2.5, 6], [3, 6]],
  "42": [[1.5, 6], [2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.25, 6], [3.5, 6], [4, 6]],
  "45": [[2, 6], [3, 6]],
  "48": [[1.5, 6], [2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.25, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6]],
  "50": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [4, 6], [4.5, 6]],
  "57": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [4, 6]],
  "60": [[1.5, 6], [2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6]],
  "63": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6]],
  "70": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [4, 6]],
  "76": [[1.5, 6], [2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6]],
  "80": [[2, 6], [3, 6], [3.5, 6], [4, 6], [4.5, 6]],
  "83": [[2, 6], [3, 6], [3.5, 6], [4, 6], [4.5, 6]],
  "89": [[1.5, 6], [2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5, 6], [5.5, 6], [5.75, 6]],
  "95": [[2, 6], [3, 6], [3.5, 6], [4, 6], [4.5, 6], [4.75, 6]],
  "102": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6]],
  "108": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.7, 6], [4, 6], [4.5, 6], [4.75, 6], [5, 6], [6, 6], [7.75, 12]],
  "114": [[2, 6], [2.2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5, 6], [5.5, 6], [6, 6], [7.75, 12]],
  "121": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.25, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6]],
  "127": [[2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6]],
  "133": [[2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6], [7.75, 12]],
  "140": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.25, 6], [3.5, 6], [3.75, 6], [4, 6], [4.25, 6], [4.5, 6], [4.75, 6], [5.75, 6], [8, 12], [10, 12]],
  "146": [[3.5, 6], [3.75, 6], [4.5, 6], [4.75, 6], [5.75, 6]],
  "152": [[2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5.75, 6], [7.75, 12]],
  "159": [[2.75, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5, 6], [5.5, 6], [5.75, 6], [6, 12], [7.75, 12], [9.75, 12]],
  "165": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [4, 6], [4.25, 6], [4.5, 6], [5, 6], [5.5, 6], [6, 6]],
  "168": [[4, 6], [4.5, 6], [4.75, 6], [6, 12], [7, 12], [8, 12], [10, 12]],
  "180": [[3, 6], [3.75, 6], [4, 6], [4.5, 6], [5, 12], [6, 12], [8, 12], [10, 12]],
  "194": [[4, 6], [4.75, 12], [5.75, 12], [7.75, 12], [9.75, 12]],
  "203": [[5, 12], [6, 12], [8, 12], [10, 12]],
  "219": [[1.7, 6], [2, 6], [2.2, 6], [2.5, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [4.75, 6], [5, 6], [5.5, 6], [5.75, 6], [6, 12], [7, 12], [8, 12], [10, 12], [12, 6]],
  "245": [[5, 12], [6, 12], [8, 12], [10, 12], [12, 12]],
  "273": [[2, 6], [2.5, 6], [3, 6], [3.5, 6], [3.75, 6], [4, 6], [4.5, 6], [5, 6], [5.5, 12], [6, 12], [7, 12], [8, 12], [10, 12], [12, 12]],
  "299": [[6, 12], [8, 12], [10, 12], [12, 12]],
  "325": [[2, 6], [2.5, 6], [2.75, 6], [3, 6], [3.5, 6], [4, 6], [4.5, 6], [5, 12], [5.5, 12], [6, 12], [7, 12], [8, 12], [10, 12], [12, 12]],
  "377": [[3, 12], [4, 12], [5, 12], [6, 12], [8, 12], [10, 12], [12, 12]],
  "406": [[8, 12], [10, 12], [12, 12]],
  "426": [[3, 12], [4, 12], [5, 12], [6, 12], [8, 12], [10, 12], [12, 12]],
  "457": [[10, 12]],
  "480": [[8, 12], [10, 12]],
  "508": [[8, 12], [10, 12], [12, 12]],
  "530": [[8, 12], [10, 12], [12, 12]],
  "630": [[10, 12], [12, 12]],
} as const satisfies Record<string, readonly BlackSteelPipeRawOption[]>;

export const blackSteelPipeData: BlackSteelPipeSpec[] = Object.entries(blackWeldedPipeRawOptions).map(
  ([outerDiameter, options]) => {
    const meta = standardDiameterMeta[outerDiameter];

    return {
      id: `od${outerDiameter.replace(".", "-")}`,
      outerDiameterMm: Number(outerDiameter),
      dn: meta?.dn ?? null,
      inchSize: meta?.inchSize ?? null,
      localSizeLabelZh: meta?.localSizeLabelZh ?? null,
      thicknessOptions: options.map(([thicknessMm, standardLengthM]) => ({
        thicknessMm,
        standardLengthM,
      })),
    };
  },
);

export function getBlackSteelPipeThicknessId(thicknessMm: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
    useGrouping: false,
  }).format(thicknessMm);
}

export function findBlackSteelPipeReference(specId: string, thicknessId: string) {
  const spec = blackSteelPipeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getBlackSteelPipeThicknessId(item.thicknessMm) === thicknessId,
  );

  return spec && thickness ? { spec, thickness } : null;
}
