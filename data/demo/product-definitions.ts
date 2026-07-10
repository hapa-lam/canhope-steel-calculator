import type { ProductDefinition } from "@/types/materials";

export const productDefinitions: ProductDefinition[] = [
  {
    type: "galvanized_pipe",
    name: "镀锌管",
    englishName: "Galvanized Steel Pipe",
    category: "钢管类",
  },
  {
    type: "galvanized_sheet_pipe",
    name: "镀锌板管",
    englishName: "Galvanized Sheet Pipe",
    category: "钢管类",
  },
  {
    type: "black_steel_pipe",
    name: "黑料钢管",
    englishName: "Black Steel Pipe",
    category: "钢管类",
  },
  {
    type: "square_tube",
    name: "方矩管",
    englishName: "Square / Rectangular Tube",
    category: "钢管类",
  },
  {
    type: "angle_steel",
    name: "角钢",
    englishName: "Angle Steel",
    category: "型钢类",
  },
  {
    type: "channel_steel",
    name: "槽钢",
    englishName: "Channel Steel",
    category: "型钢类",
  },
  {
    type: "grooved_fitting",
    name: "沟槽管件",
    englishName: "Grooved Fittings",
    category: "消防配件",
  },
];
