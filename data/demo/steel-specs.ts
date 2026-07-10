export type ThicknessOption = {
  id: string;
  label: string;
  weightKgPerM?: number;
};

export type StandardSpec = {
  id: string;
  label: string;
  thicknesses: ThicknessOption[];
};

export const squareTubeSpecs: StandardSpec[] = [
  {
    id: "40x40",
    label: "40×40",
    thicknesses: [
      { id: "1.8", label: "1.8mm", weightKgPerM: 2.22 },
      { id: "2.0", label: "2.0mm", weightKgPerM: 2.43 },
    ],
  },
  {
    id: "50x50",
    label: "50×50",
    thicknesses: [
      { id: "2.0", label: "2.0mm", weightKgPerM: 3.01 },
      { id: "2.5", label: "2.5mm", weightKgPerM: 3.72 },
    ],
  },
  {
    id: "80x80",
    label: "80×80",
    thicknesses: [
      { id: "3.0", label: "3.0mm", weightKgPerM: 7.14 },
      { id: "4.0", label: "4.0mm" },
    ],
  },
];

export const angleSteelSpecs: StandardSpec[] = [
  {
    id: "30x30",
    label: "30×30",
    thicknesses: [
      { id: "3", label: "3mm", weightKgPerM: 1.37 },
      { id: "4", label: "4mm", weightKgPerM: 1.79 },
    ],
  },
  {
    id: "50x50",
    label: "50×50",
    thicknesses: [
      { id: "5", label: "5mm", weightKgPerM: 3.77 },
      { id: "6", label: "6mm", weightKgPerM: 4.46 },
    ],
  },
  {
    id: "75x75",
    label: "75×75",
    thicknesses: [{ id: "6", label: "6mm" }],
  },
];

export type ChannelSpec = {
  id: string;
  label: string;
  weightKgPerM?: number;
};

export const channelSteelSpecs: ChannelSpec[] = [
  { id: "8", label: "8#", weightKgPerM: 8.04 },
  { id: "10", label: "10#", weightKgPerM: 10.01 },
  { id: "12", label: "12#", weightKgPerM: 12.06 },
  { id: "14", label: "14#" },
];

export type GroovedFittingOption = {
  fittingTypeId: string;
  fittingTypeLabel: string;
  nominalSizeId: string;
  nominalSizeLabel: string;
  modelId: string;
  modelLabel: string;
  weightKgPerPiece?: number;
};

export const groovedFittingOptions: GroovedFittingOption[] = [
  {
    fittingTypeId: "elbow",
    fittingTypeLabel: "沟槽弯头",
    nominalSizeId: "dn80",
    nominalSizeLabel: "DN80",
    modelId: "90",
    modelLabel: "90°",
    weightKgPerPiece: 2.15,
  },
  {
    fittingTypeId: "elbow",
    fittingTypeLabel: "沟槽弯头",
    nominalSizeId: "dn100",
    nominalSizeLabel: "DN100",
    modelId: "90",
    modelLabel: "90°",
  },
  {
    fittingTypeId: "tee",
    fittingTypeLabel: "沟槽三通",
    nominalSizeId: "dn100",
    nominalSizeLabel: "DN100",
    modelId: "standard",
    modelLabel: "标准型",
    weightKgPerPiece: 3.8,
  },
  {
    fittingTypeId: "coupling",
    fittingTypeLabel: "沟槽卡箍",
    nominalSizeId: "dn150",
    nominalSizeLabel: "DN150",
    modelId: "heavy",
    modelLabel: "加强型",
    weightKgPerPiece: 2.9,
  },
];
