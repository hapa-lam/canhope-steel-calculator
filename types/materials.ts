export type ProductType =
  | "galvanized_pipe"
  | "galvanized_sheet_pipe"
  | "black_steel_pipe"
  | "square_tube"
  | "angle_steel"
  | "channel_steel"
  | "grooved_fitting";

export type SteelPipeProductType =
  | "galvanized_pipe"
  | "galvanized_sheet_pipe"
  | "black_steel_pipe";

export type QuantityUnit = "支" | "件";

export type DimensionMode = "standard" | "custom";

export type ProductDefinition = {
  type: ProductType;
  name: string;
  englishName: string;
  category: "钢管类" | "型钢类" | "消防配件";
};

export type SteelPipeRow = {
  id: string;
  productType: SteelPipeProductType;
  dimensionMode: DimensionMode;
  specId: string;
  thicknessId: string;
  customOuterDiameterMm?: number;
  customThicknessMm?: number;
  lengthM: number;
  quantity: number;
  quantityUnit: "支";
};

export type SquareTubeRow = {
  id: string;
  productType: "square_tube";
  dimensionMode: DimensionMode;
  specId: string;
  thicknessId: string;
  customWidthMm?: number;
  customHeightMm?: number;
  customThicknessMm?: number;
  lengthM: number;
  quantity: number;
  quantityUnit: "支";
};

export type AngleSteelRow = {
  id: string;
  productType: "angle_steel";
  specId: string;
  thicknessId: string;
  lengthM: number;
  quantity: number;
  quantityUnit: "支";
};

export type ChannelSteelRow = {
  id: string;
  productType: "channel_steel";
  specId: string;
  lengthM: number;
  quantity: number;
  quantityUnit: "支";
};

export type GroovedFittingRow = {
  id: string;
  productType: "grooved_fitting";
  fittingTypeId: string;
  nominalSizeId: string;
  modelId: string;
  quantity: number;
  quantityUnit: "件";
};

export type MaterialRow =
  | SteelPipeRow
  | SquareTubeRow
  | AngleSteelRow
  | ChannelSteelRow
  | GroovedFittingRow;

export type MaterialModule = {
  id: string;
  productType: ProductType;
  rows: MaterialRow[];
};

export type MaterialList = {
  modules: MaterialModule[];
};

export type RowCalculation = {
  rowId: string;
  hasWeight: boolean;
  unitWeightKg?: number;
  unitWeightLabel: "kg/m" | "kg/件";
  pieceWeightKg?: number;
  totalWeightKg?: number;
};

export type SummaryResult = {
  productModuleCount: number;
  validRowCount: number;
  totalQuantityPieces: number;
  totalQuantityItems: number;
  totalWeightKg: number;
  totalWeightTon: number;
  missingWeightRowCount: number;
  containerCount: number;
  remainingCapacityTon: number | null;
};
