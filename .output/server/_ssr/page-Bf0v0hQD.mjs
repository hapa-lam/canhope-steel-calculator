import { a as require_react, o as __toESM, t as require_jsx_runtime } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-Bf0v0hQD.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var productDefinitions = [
	{
		type: "galvanized_pipe",
		name: "镀锌管",
		englishName: "Galvanized Steel Pipe",
		category: "钢管类"
	},
	{
		type: "galvanized_sheet_pipe",
		name: "镀锌板管",
		englishName: "Galvanized Sheet Pipe",
		category: "钢管类"
	},
	{
		type: "black_steel_pipe",
		name: "黑料钢管",
		englishName: "Black Steel Pipe",
		category: "钢管类"
	},
	{
		type: "galvanized_square_rectangular_tube",
		name: "镀锌方矩管",
		englishName: "Hot-Dip Galvanized Square / Rectangular Tube",
		category: "钢管类"
	},
	{
		type: "pre_galvanized_square_rectangular_tube",
		name: "镀锌板方矩管",
		englishName: "Pre-Galvanized Square / Rectangular Tube",
		category: "钢管类"
	},
	{
		type: "angle_steel",
		name: "角钢",
		englishName: "Angle Steel",
		category: "型钢类"
	},
	{
		type: "channel_steel",
		name: "槽钢",
		englishName: "Channel Steel",
		category: "型钢类"
	},
	{
		type: "grooved_fitting",
		name: "沟槽管件",
		englishName: "Grooved Fittings",
		category: "消防配件"
	}
];
var groovedFittingOptions = [
	{
		fittingTypeId: "elbow",
		fittingTypeLabel: "沟槽弯头",
		nominalSizeId: "dn80",
		nominalSizeLabel: "DN80",
		modelId: "90",
		modelLabel: "90°",
		weightKgPerPiece: 2.15
	},
	{
		fittingTypeId: "elbow",
		fittingTypeLabel: "沟槽弯头",
		nominalSizeId: "dn100",
		nominalSizeLabel: "DN100",
		modelId: "90",
		modelLabel: "90°"
	},
	{
		fittingTypeId: "tee",
		fittingTypeLabel: "沟槽三通",
		nominalSizeId: "dn100",
		nominalSizeLabel: "DN100",
		modelId: "standard",
		modelLabel: "标准型",
		weightKgPerPiece: 3.8
	},
	{
		fittingTypeId: "coupling",
		fittingTypeLabel: "沟槽卡箍",
		nominalSizeId: "dn150",
		nominalSizeLabel: "DN150",
		modelId: "heavy",
		modelLabel: "加强型",
		weightKgPerPiece: 2.9
	}
];
var angleSteelSpecifications = [
	{
		id: "30x30",
		legAMm: 30,
		legBMm: 30,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2.3,
				referenceWeightKgPerPiece: 5.5,
				piecesPerBundle: 400
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 6.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 2.8,
				referenceWeightKgPerPiece: 7.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 8,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3.2,
				referenceWeightKgPerPiece: 8.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3.8,
				referenceWeightKgPerPiece: 9.5,
				piecesPerBundle: 300
			}
		]
	},
	{
		id: "40x40",
		legAMm: 40,
		legBMm: 40,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2.4,
				referenceWeightKgPerPiece: 7.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 8.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 2.8,
				referenceWeightKgPerPiece: 9.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 10.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3.2,
				referenceWeightKgPerPiece: 11,
				piecesPerBundle: 218
			},
			{
				thicknessMm: 3.3,
				referenceWeightKgPerPiece: 11.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3.6,
				referenceWeightKgPerPiece: 12.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 3.9,
				referenceWeightKgPerPiece: 13.5,
				piecesPerBundle: 300
			},
			{
				thicknessMm: 4.2,
				referenceWeightKgPerPiece: 14.5,
				piecesPerBundle: 241
			},
			{
				thicknessMm: 4.8,
				referenceWeightKgPerPiece: 16.5,
				piecesPerBundle: 241
			}
		]
	},
	{
		id: "50x50",
		legAMm: 50,
		legBMm: 50,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2.6,
				referenceWeightKgPerPiece: 11.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 2.8,
				referenceWeightKgPerPiece: 12.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 3.2,
				referenceWeightKgPerPiece: 13.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 14.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 3.6,
				referenceWeightKgPerPiece: 15.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 3.7,
				referenceWeightKgPerPiece: 16.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 17.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 4.2,
				referenceWeightKgPerPiece: 18.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 19.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 4.7,
				referenceWeightKgPerPiece: 20.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 21.5,
				piecesPerBundle: 200
			},
			{
				thicknessMm: 5.2,
				referenceWeightKgPerPiece: 22.5,
				piecesPerBundle: 200
			}
		]
	},
	{
		id: "63x63",
		legAMm: 63,
		legBMm: 63,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 4.2,
				referenceWeightKgPerPiece: 23,
				piecesPerBundle: 131
			},
			{
				thicknessMm: 4.7,
				referenceWeightKgPerPiece: 26,
				piecesPerBundle: 131
			},
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 28,
				piecesPerBundle: 131
			},
			{
				thicknessMm: 5.5,
				referenceWeightKgPerPiece: 30,
				piecesPerBundle: 131
			},
			{
				thicknessMm: 5.8,
				referenceWeightKgPerPiece: 32,
				piecesPerBundle: 131
			}
		]
	},
	{
		id: "70x70",
		legAMm: 70,
		legBMm: 70,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 4.3,
				referenceWeightKgPerPiece: 28,
				piecesPerBundle: 158
			},
			{
				thicknessMm: 4.9,
				referenceWeightKgPerPiece: 30,
				piecesPerBundle: 158
			},
			{
				thicknessMm: 5.5,
				referenceWeightKgPerPiece: 35,
				piecesPerBundle: 131
			},
			{
				thicknessMm: 6,
				referenceWeightKgPerPiece: 38,
				piecesPerBundle: 113
			},
			{
				thicknessMm: 6.5,
				referenceWeightKgPerPiece: 41,
				piecesPerBundle: 113
			}
		]
	},
	{
		id: "75x75",
		legAMm: 75,
		legBMm: 75,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 30,
				piecesPerBundle: 116
			},
			{
				thicknessMm: 4.9,
				referenceWeightKgPerPiece: 32,
				piecesPerBundle: 149
			},
			{
				thicknessMm: 5.3,
				referenceWeightKgPerPiece: 35,
				piecesPerBundle: 122
			},
			{
				thicknessMm: 5.9,
				referenceWeightKgPerPiece: 39,
				piecesPerBundle: 122
			},
			{
				thicknessMm: 6.8,
				referenceWeightKgPerPiece: 45,
				piecesPerBundle: 95
			},
			{
				thicknessMm: 7.5,
				referenceWeightKgPerPiece: 50,
				piecesPerBundle: 95
			}
		]
	},
	{
		id: "80x80",
		legAMm: 80,
		legBMm: 80,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 37,
				piecesPerBundle: 95
			},
			{
				thicknessMm: 5.7,
				referenceWeightKgPerPiece: 41,
				piecesPerBundle: 109
			},
			{
				thicknessMm: 7.6,
				referenceWeightKgPerPiece: 54,
				piecesPerBundle: 81
			}
		]
	},
	{
		id: "100x100",
		legAMm: 100,
		legBMm: 100,
		angleType: "equal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 47,
				piecesPerBundle: 83
			},
			{
				thicknessMm: 5.8,
				referenceWeightKgPerPiece: 52,
				piecesPerBundle: 83
			},
			{
				thicknessMm: 7.8,
				referenceWeightKgPerPiece: 68,
				piecesPerBundle: 63
			},
			{
				thicknessMm: 9.8,
				referenceWeightKgPerPiece: 84,
				piecesPerBundle: 58
			}
		]
	},
	{
		id: "50x32",
		legAMm: 50,
		legBMm: 32,
		angleType: "unequal",
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 3.9,
			referenceWeightKgPerPiece: 15,
			piecesPerBundle: 293
		}]
	},
	{
		id: "63x40",
		legAMm: 63,
		legBMm: 40,
		angleType: "unequal",
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 4.7,
			referenceWeightKgPerPiece: 22,
			piecesPerBundle: 215
		}]
	},
	{
		id: "75x50",
		legAMm: 75,
		legBMm: 50,
		angleType: "unequal",
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 24,
				piecesPerBundle: 185
			},
			{
				thicknessMm: 4.7,
				referenceWeightKgPerPiece: 28,
				piecesPerBundle: 185
			},
			{
				thicknessMm: 5.8,
				referenceWeightKgPerPiece: 32,
				piecesPerBundle: 149
			}
		]
	},
	{
		id: "100x63",
		legAMm: 100,
		legBMm: 63,
		angleType: "unequal",
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 5,
			referenceWeightKgPerPiece: 38,
			piecesPerBundle: 109
		}, {
			thicknessMm: 5.8,
			referenceWeightKgPerPiece: 42,
			piecesPerBundle: 109
		}]
	}
];
function getAngleSteelThicknessId(thicknessMm) {
	return `${thicknessMm}mm`;
}
function findAngleSteelReference(specId, thicknessId) {
	const spec = angleSteelSpecifications.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getAngleSteelThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
	} : null;
}
var channelSteelRawData = {
	"5": [
		[22, 144],
		[26, 144],
		[30, 144]
	],
	"6.3": [
		[20.5, 126],
		[23, 120],
		[26, 126],
		[30, 120],
		[34, 120]
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
		[44, 80]
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
		[54, 80]
	],
	"12": [
		[43, 64],
		[48, 64],
		[53, 64],
		[59, 64],
		[64, 64]
	],
	"14": [
		[59, 56],
		[63, 56],
		[69, 56],
		[72, 56],
		[76, 56],
		[80, 56]
	],
	"16": [
		[66, 48],
		[72, 42],
		[76, 48],
		[80, 48],
		[87, 42],
		[94, 42]
	],
	"18": [
		[92, 36],
		[102, 36],
		[112, 36]
	],
	"20": [
		[104, 30],
		[115, 30],
		[123, 30]
	]
};
function getChannelSteelReferenceWeightId(referenceWeightKgPerPiece) {
	return `${referenceWeightKgPerPiece}kg`;
}
var channelSteelData = Object.entries(channelSteelRawData).map(([nominalSize, options]) => ({
	id: nominalSize,
	nominalSize,
	referenceLengthM: 6,
	weightOptions: options.map(([referenceWeightKgPerPiece, piecesPerBundle]) => ({
		id: getChannelSteelReferenceWeightId(referenceWeightKgPerPiece),
		referenceWeightKgPerPiece,
		piecesPerBundle
	}))
}));
function findChannelSteelReference(specId, referenceWeightId) {
	const spec = channelSteelData.find((item) => item.id === specId);
	const weightOption = spec?.weightOptions.find((item) => item.id === referenceWeightId);
	return spec && weightOption ? {
		spec,
		weightOption
	} : null;
}
var galvanizedPipeData = [
	{
		id: "dn15",
		dn: "DN15",
		inchSize: "1/2\"",
		outerDiameterMm: 21,
		piecesPerBundle: 169,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 4.1
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 4.6
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 5.5
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 7.1
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 7.5
			}
		]
	},
	{
		id: "dn20",
		dn: "DN20",
		inchSize: "3/4\"",
		outerDiameterMm: 27,
		piecesPerBundle: 127,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 5.9
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 6.8
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 9.1
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 9.8
			}
		]
	},
	{
		id: "dn25",
		dn: "DN25",
		inchSize: "1\"",
		outerDiameterMm: 33,
		piecesPerBundle: 91,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 6.6
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 8.7
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 9.5
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 10.9
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 11.8
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 13.6
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 14.8
			}
		]
	},
	{
		id: "dn32",
		dn: "DN32",
		inchSize: "1 1/4\"",
		outerDiameterMm: 42,
		piecesPerBundle: 61,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 8.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 9.8
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 11.4
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 12.5
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 14.6
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 16.3
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 17.8
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 19
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 20.7
			}
		]
	},
	{
		id: "dn40",
		dn: "DN40",
		inchSize: "1 1/2\"",
		outerDiameterMm: 48,
		piecesPerBundle: 61,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 9.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 11.1
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 13.2
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 14.4
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 16.6
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 18.2
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 19.8
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 21.8
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 23.8
			}
		]
	},
	{
		id: "dn50",
		dn: "DN50",
		inchSize: "2\"",
		outerDiameterMm: 60,
		piecesPerBundle: 37,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 12.3
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 13.9
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 16.3
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 17.9
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 21
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 23
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 25
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 27.5
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 29.6
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 32.1
			}
		]
	},
	{
		id: "dn65",
		dn: "DN65",
		inchSize: "2 1/2\"",
		outerDiameterMm: 76,
		piecesPerBundle: 37,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 16.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 18.7
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 21.9
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 24
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 27.2
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 29.8
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 32.5
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 35
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 37.5
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 40.5
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 43.8
			}
		]
	},
	{
		id: "dn80",
		dn: "DN80",
		inchSize: "3\"",
		outerDiameterMm: 89,
		piecesPerBundle: 19,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 19.4
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 22
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 25.7
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 28.3
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 32
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 35
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 38
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 41
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 44
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 47
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 50
			}
		]
	},
	{
		id: "dn100",
		dn: "DN100",
		inchSize: "4\"",
		outerDiameterMm: 114,
		piecesPerBundle: 19,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 24.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 28.2
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 33.1
			},
			{
				thicknessMm: 2.2,
				referenceWeightKgPerPiece: 36.4
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 41
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 45
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 49
			},
			{
				thicknessMm: 3.25,
				referenceWeightKgPerPiece: 53
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 57
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 61.5
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 65.6
			}
		]
	},
	{
		id: "dn125",
		dn: "DN125",
		inchSize: "5\"",
		outerDiameterMm: 140,
		piecesPerBundle: 19,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 50.9
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 55.3
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 60.8
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 70.6
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 75.6
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 80.5
			},
			{
				thicknessMm: 4.25,
				referenceWeightKgPerPiece: 85.5
			},
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 91.4
			}
		]
	},
	{
		id: "dn150",
		dn: "DN150",
		inchSize: "6\"",
		outerDiameterMm: 168,
		piecesPerBundle: 10,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 60
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 66
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 72
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 83.5
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 89.5
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 95
			},
			{
				thicknessMm: 4.25,
				referenceWeightKgPerPiece: 101.5
			},
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 107.5
			}
		]
	},
	{
		id: "dn200",
		dn: "DN200",
		inchSize: "8\"",
		outerDiameterMm: 219,
		piecesPerBundle: 7,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 80
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 88
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 96
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 112
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 119
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 127
			},
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 143
			},
			{
				thicknessMm: 4.75,
				referenceWeightKgPerPiece: 151
			},
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 158
			},
			{
				thicknessMm: 5.5,
				referenceWeightKgPerPiece: 174
			},
			{
				thicknessMm: 5.75,
				referenceWeightKgPerPiece: 183
			},
			{
				thicknessMm: 6,
				referenceWeightKgPerPiece: 191.5
			}
		]
	},
	{
		id: "dn250",
		dn: "DN250",
		inchSize: "10\"",
		outerDiameterMm: 273,
		piecesPerBundle: 4,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 120
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 140
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 149
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 159
			},
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 179
			},
			{
				thicknessMm: 4.75,
				referenceWeightKgPerPiece: 189
			},
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 198
			},
			{
				thicknessMm: 5.5,
				referenceWeightKgPerPiece: 218
			},
			{
				thicknessMm: 5.75,
				referenceWeightKgPerPiece: 231
			},
			{
				thicknessMm: 6,
				referenceWeightKgPerPiece: 241
			}
		]
	},
	{
		id: "dn300",
		dn: "DN300",
		inchSize: "12\"",
		outerDiameterMm: 325,
		piecesPerBundle: 4,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 143
			},
			{
				thicknessMm: 3.5,
				referenceWeightKgPerPiece: 166
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 178
			},
			{
				thicknessMm: 4,
				referenceWeightKgPerPiece: 190
			},
			{
				thicknessMm: 4.5,
				referenceWeightKgPerPiece: 213
			},
			{
				thicknessMm: 4.75,
				referenceWeightKgPerPiece: 225
			},
			{
				thicknessMm: 5,
				referenceWeightKgPerPiece: 237
			},
			{
				thicknessMm: 5.5,
				referenceWeightKgPerPiece: 260
			},
			{
				thicknessMm: 5.75,
				referenceWeightKgPerPiece: 271
			},
			{
				thicknessMm: 6,
				referenceWeightKgPerPiece: 283
			}
		]
	}
];
function getGalvanizedPipeThicknessId(thicknessMm) {
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 2,
		useGrouping: false
	}).format(thicknessMm);
}
function findGalvanizedPipeReference(specId, thicknessId) {
	const spec = galvanizedPipeData.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getGalvanizedPipeThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
	} : null;
}
var standardDiameterMeta = {
	"21": {
		dn: "DN15",
		inchSize: "1/2",
		localSizeLabelZh: "4分"
	},
	"25": {
		dn: "DN20",
		inchSize: "3/4",
		localSizeLabelZh: "6分"
	},
	"33": {
		dn: "DN25",
		inchSize: "1",
		localSizeLabelZh: "1寸"
	},
	"42": {
		dn: "DN32",
		inchSize: "1 1/4",
		localSizeLabelZh: "1寸2"
	},
	"48": {
		dn: "DN40",
		inchSize: "1 1/2",
		localSizeLabelZh: "1寸半"
	},
	"60": {
		dn: "DN50",
		inchSize: "2",
		localSizeLabelZh: "2寸"
	},
	"76": {
		dn: "DN65",
		inchSize: "2 1/2",
		localSizeLabelZh: "2寸半"
	},
	"89": {
		dn: "DN80",
		inchSize: "3",
		localSizeLabelZh: "3寸"
	},
	"114": {
		dn: "DN100",
		inchSize: "4",
		localSizeLabelZh: "4寸"
	},
	"140": {
		dn: "DN125",
		inchSize: "5",
		localSizeLabelZh: "5寸"
	},
	"165": {
		dn: "DN150",
		inchSize: "6",
		localSizeLabelZh: "6寸"
	},
	"219": {
		dn: "DN200",
		inchSize: "8",
		localSizeLabelZh: "8寸"
	},
	"273": {
		dn: "DN250",
		inchSize: "10",
		localSizeLabelZh: "10寸"
	},
	"325": {
		dn: "DN300",
		inchSize: "12",
		localSizeLabelZh: "12寸"
	},
	"377": {
		dn: "DN350",
		inchSize: "14",
		localSizeLabelZh: "14寸"
	},
	"426": {
		dn: "DN400",
		inchSize: "16",
		localSizeLabelZh: "16寸"
	}
};
var blackSteelPipeData = Object.entries({
	"21": [
		[2, 6],
		[2.2, 6],
		[2.5, 6],
		[2.75, 6]
	],
	"25": [
		[1.5, 6],
		[2, 6],
		[2.5, 6],
		[2.75, 6]
	],
	"25.4": [[3.5, 6]],
	"27": [[2, 6]],
	"28": [[2, 6], [2.5, 6]],
	"30": [
		[2, 6],
		[2.5, 6],
		[3, 6]
	],
	"32": [[1.5, 6], [3.5, 6]],
	"33": [
		[2, 6],
		[2.5, 6],
		[2.8, 6],
		[3, 6],
		[3.25, 6],
		[4, 6]
	],
	"38": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[4.5, 6]
	],
	"40": [
		[2, 6],
		[2.5, 6],
		[3, 6]
	],
	"42": [
		[1.5, 6],
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.25, 6],
		[3.5, 6],
		[4, 6]
	],
	"45": [[2, 6], [3, 6]],
	"48": [
		[1.5, 6],
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.25, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6]
	],
	"50": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[4, 6],
		[4.5, 6]
	],
	"57": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[4, 6]
	],
	"60": [
		[1.5, 6],
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6]
	],
	"63": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6]
	],
	"70": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[4, 6]
	],
	"76": [
		[1.5, 6],
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6]
	],
	"80": [
		[2, 6],
		[3, 6],
		[3.5, 6],
		[4, 6],
		[4.5, 6]
	],
	"83": [
		[2, 6],
		[3, 6],
		[3.5, 6],
		[4, 6],
		[4.5, 6]
	],
	"89": [
		[1.5, 6],
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5, 6],
		[5.5, 6],
		[5.75, 6]
	],
	"95": [
		[2, 6],
		[3, 6],
		[3.5, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6]
	],
	"102": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6]
	],
	"108": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.7, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5, 6],
		[6, 6],
		[7.75, 12]
	],
	"114": [
		[2, 6],
		[2.2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5, 6],
		[5.5, 6],
		[6, 6],
		[7.75, 12]
	],
	"121": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.25, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6]
	],
	"127": [
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6]
	],
	"133": [
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6],
		[7.75, 12]
	],
	"140": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.25, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.25, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6],
		[8, 12],
		[10, 12]
	],
	"146": [
		[3.5, 6],
		[3.75, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6]
	],
	"152": [
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5.75, 6],
		[7.75, 12]
	],
	"159": [
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5, 6],
		[5.5, 6],
		[5.75, 6],
		[6, 12],
		[7.75, 12],
		[9.75, 12]
	],
	"165": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[4, 6],
		[4.25, 6],
		[4.5, 6],
		[5, 6],
		[5.5, 6],
		[6, 6]
	],
	"168": [
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[6, 12],
		[7, 12],
		[8, 12],
		[10, 12]
	],
	"180": [
		[3, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[5, 12],
		[6, 12],
		[8, 12],
		[10, 12]
	],
	"194": [
		[4, 6],
		[4.75, 12],
		[5.75, 12],
		[7.75, 12],
		[9.75, 12]
	],
	"203": [
		[5, 12],
		[6, 12],
		[8, 12],
		[10, 12]
	],
	"219": [
		[1.7, 6],
		[2, 6],
		[2.2, 6],
		[2.5, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[4.75, 6],
		[5, 6],
		[5.5, 6],
		[5.75, 6],
		[6, 12],
		[7, 12],
		[8, 12],
		[10, 12],
		[12, 6]
	],
	"245": [
		[5, 12],
		[6, 12],
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"273": [
		[2, 6],
		[2.5, 6],
		[3, 6],
		[3.5, 6],
		[3.75, 6],
		[4, 6],
		[4.5, 6],
		[5, 6],
		[5.5, 12],
		[6, 12],
		[7, 12],
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"299": [
		[6, 12],
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"325": [
		[2, 6],
		[2.5, 6],
		[2.75, 6],
		[3, 6],
		[3.5, 6],
		[4, 6],
		[4.5, 6],
		[5, 12],
		[5.5, 12],
		[6, 12],
		[7, 12],
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"377": [
		[3, 12],
		[4, 12],
		[5, 12],
		[6, 12],
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"406": [
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"426": [
		[3, 12],
		[4, 12],
		[5, 12],
		[6, 12],
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"457": [[10, 12]],
	"480": [[8, 12], [10, 12]],
	"508": [
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"530": [
		[8, 12],
		[10, 12],
		[12, 12]
	],
	"630": [[10, 12], [12, 12]]
}).map(([outerDiameter, options]) => {
	const meta = standardDiameterMeta[outerDiameter];
	return {
		id: `od${outerDiameter.replace(".", "-")}`,
		outerDiameterMm: Number(outerDiameter),
		dn: meta?.dn ?? null,
		inchSize: meta?.inchSize ?? null,
		localSizeLabelZh: meta?.localSizeLabelZh ?? null,
		thicknessOptions: options.map(([thicknessMm, standardLengthM]) => ({
			thicknessMm,
			standardLengthM
		}))
	};
});
function getBlackSteelPipeThicknessId(thicknessMm) {
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 2,
		useGrouping: false
	}).format(thicknessMm);
}
function findBlackSteelPipeReference(specId, thicknessId) {
	const spec = blackSteelPipeData.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getBlackSteelPipeThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
	} : null;
}
var galvanizedSheetPipeData = [
	{
		id: "od16",
		outerDiameterMm: 16,
		localSizeLabelZh: "3分",
		piecesPerBundle: 271,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 1.38
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 1.75
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 1.9
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 2
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 2.2
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 2.4
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 2.6
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 2.8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 3
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 3.2
			}
		]
	},
	{
		id: "od19",
		outerDiameterMm: 19,
		localSizeLabelZh: "4分",
		piecesPerBundle: 169,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 1.6
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 1.9
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 2.2
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 2.4
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 2.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 2.8
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 3.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 3.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 3.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 3.8
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 4
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 4.3
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 4.6
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 5
			}
		]
	},
	{
		id: "od25",
		outerDiameterMm: 25,
		localSizeLabelZh: "6分",
		piecesPerBundle: 127,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 2.6
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 2.9
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.2
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 3.3
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 3.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 4
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 4.4
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 5.1
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 5.4
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 6.1
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 6.8
			}
		]
	},
	{
		id: "od28",
		outerDiameterMm: 28,
		localSizeLabelZh: null,
		piecesPerBundle: 91,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 3.3
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.46
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 3.79
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 4.2
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 4.61
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 5.02
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 5.44
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 5.8
			}
		]
	},
	{
		id: "od32",
		outerDiameterMm: 32,
		localSizeLabelZh: "1寸",
		piecesPerBundle: 91,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 3
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 3.6
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.9
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 4.3
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 6.5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 6.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 7.9
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 8.7
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 12
			}
		]
	},
	{
		id: "od38",
		outerDiameterMm: 38,
		localSizeLabelZh: null,
		piecesPerBundle: 91,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.2
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.17
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 6.2
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 6.7
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 7.55
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 7.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 9
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 10.1
			}
		]
	},
	{
		id: "od42",
		outerDiameterMm: 42,
		localSizeLabelZh: "1寸2",
		piecesPerBundle: 91,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.75
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 6.3
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 6.7
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 8
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 8.5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 9.2
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 9.8
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 10.4
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 11.3
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 11.3
			}
		]
	},
	{
		id: "od48",
		outerDiameterMm: 48,
		localSizeLabelZh: "1寸半",
		piecesPerBundle: 61,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 4.8
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5.5
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 6.4
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 7.2
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 8
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 8.6
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 9.3
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 9.8
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 10.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 11.3
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 12.1
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 12.9
			},
			{
				thicknessMm: 2.1,
				referenceWeightKgPerPiece: 13.9
			}
		]
	},
	{
		id: "od58",
		outerDiameterMm: 58,
		localSizeLabelZh: "2寸",
		piecesPerBundle: 61,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 7.2
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 8.3
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 8.9
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 9.7
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 10.4
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 11.5
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 12
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 13.1
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 13.8
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 14.5
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 15.67
			}
		]
	},
	{
		id: "od76",
		outerDiameterMm: 76,
		localSizeLabelZh: "2寸半",
		piecesPerBundle: 37,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 9.3
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 10.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 11.6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 12.7
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 13.8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 15
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 16.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 18.1
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 19.6
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 20.8
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 26.6
			}
		]
	},
	{
		id: "od89",
		outerDiameterMm: 89,
		localSizeLabelZh: "3寸",
		piecesPerBundle: 19,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 12.4
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 13.1
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 15
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 17.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 18.5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 19.49
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 20.77
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 23
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 24
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 31
			}
		]
	},
	{
		id: "od114",
		outerDiameterMm: 114,
		localSizeLabelZh: "4寸",
		piecesPerBundle: 19,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 17.3
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 19
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 21
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 22.5
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 23.8
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 25.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 27
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 29.2
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 31.3
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 40.7
			}
		]
	},
	{
		id: "od134",
		outerDiameterMm: 134,
		localSizeLabelZh: null,
		piecesPerBundle: 14,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 22.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 24.2
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 27.85
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 37.59
			}
		]
	},
	{
		id: "od138",
		outerDiameterMm: 138,
		localSizeLabelZh: "5寸",
		piecesPerBundle: 14,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 22
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 23.7
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 25
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 27.3
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 29.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 31.4
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 32.9
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 35.4
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 38.5
			}
		]
	},
	{
		id: "od160",
		outerDiameterMm: 160,
		localSizeLabelZh: null,
		piecesPerBundle: 10,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 26.3
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 28.8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 31.1
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 33.3
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 38.2
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 44
			}
		]
	},
	{
		id: "od164",
		outerDiameterMm: 164,
		localSizeLabelZh: "6寸",
		piecesPerBundle: 10,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 26
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 27.33
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 29.5
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 32
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 34
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 36
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 39.77
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 41.2
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 46.36
			},
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 48.32
			}
		]
	}
];
function getGalvanizedSheetPipeThicknessId(thicknessMm) {
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 2,
		useGrouping: false
	}).format(thicknessMm);
}
function findGalvanizedSheetPipeReference(specId, thicknessId) {
	const spec = galvanizedSheetPipeData.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getGalvanizedSheetPipeThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
	} : null;
}
var galvanizedSquareRectangularTubePart1 = {
	"20x20": [
		[1.5, 5.4],
		[1.8, 6],
		[2, 7.1]
	],
	"25x25": [
		[1.2, 5.4],
		[1.5, 6.8],
		[1.8, 7.8],
		[2, 9.1],
		[2.5, 11.2],
		[2.75, 12.3]
	],
	"20x30": [
		[1.2, 5.4],
		[1.5, 6.8],
		[1.8, 7.8],
		[2, 9.1],
		[2.5, 11.2],
		[2.75, 12.3]
	],
	"30x30": [
		[1.5, 8.3],
		[1.8, 9.3],
		[2, 10.8],
		[2.5, 13.3],
		[2.75, 14.4],
		[3, 15.7]
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
		[4.75, 31.5]
	],
	"50x50": [
		[1.5, 13.7],
		[1.8, 15.7],
		[2, 18],
		[2.5, 22.9],
		[2.75, 25.1],
		[3, 27.5],
		[3.5, 30.9],
		[3.75, 33.3],
		[4.5, 38.8],
		[4.75, 40.8]
	],
	"60x60": [
		[1.5, 17],
		[1.8, 18.9],
		[2, 21.8],
		[2.5, 27.2],
		[2.75, 30.6],
		[3, 32.5],
		[3.5, 37.5],
		[3.75, 40.5],
		[4.5, 47.6],
		[4.75, 50.3]
	],
	"70x70": [
		[2.5, 31.8],
		[2.75, 34.9],
		[3, 37.9],
		[3.5, 43.9],
		[3.75, 46.8],
		[4.5, 55.5],
		[4.75, 58.4]
	],
	"80x80": [
		[1.5, 22],
		[1.8, 25.5],
		[2, 29.7],
		[2.5, 37.6],
		[2.75, 40.4],
		[3, 44.6],
		[3.5, 50.8],
		[3.75, 55],
		[4.5, 64.6],
		[4.75, 68],
		[5.5, 78],
		[5.75, 82.3]
	],
	"100x100": [
		[1.5, 28],
		[1.8, 32.1],
		[2, 36.5],
		[2.5, 46.5],
		[2.75, 51],
		[3, 55.6],
		[3.5, 64.5],
		[3.75, 68.4],
		[4.5, 82],
		[4.75, 86],
		[5.5, 98.5],
		[5.75, 102.6]
	],
	"120x120": [
		[2, 44.7],
		[2.5, 56.1],
		[2.75, 61.8],
		[3, 67],
		[3.5, 78.1],
		[3.75, 83.7],
		[4.5, 98.2],
		[4.75, 103.3],
		[5.5, 119],
		[5.75, 127]
	],
	"150x150": [
		[2.5, 71.5],
		[2.75, 77.5],
		[3, 84.3],
		[3.5, 97.5],
		[3.75, 103.8],
		[4.5, 124],
		[4.75, 131],
		[5.5, 150],
		[5.75, 157],
		[7.5, 201.6],
		[7.75, 208.2]
	],
	"200x200": [
		[2.5, 95.5],
		[2.75, 104],
		[3, 113.5],
		[3.5, 133.5],
		[3.75, 141.5],
		[4.5, 166],
		[4.75, 176.6],
		[5.5, 202],
		[5.75, 210.9],
		[7.5, 272],
		[7.75, 281.5],
		[9.5, 344],
		[9.75, 350]
	]
};
var galvanizedSquareRectangularTubePart2 = {
	"20x40": [
		[1.5, 8.2],
		[1.8, 9.2],
		[2, 10.8],
		[2.5, 13.5],
		[2.75, 14.4],
		[3, 15.8]
	],
	"25x50": [
		[1.5, 10.2],
		[1.8, 11.7],
		[2, 13.4],
		[2.5, 16.8],
		[2.75, 18.4],
		[3, 20.2]
	],
	"30x40": [
		[2, 12.5],
		[2.5, 15.5],
		[2.75, 16.7],
		[3, 18.2]
	],
	"30x50": [
		[1.5, 11],
		[1.8, 12.5],
		[2, 14.4],
		[2.5, 18.1],
		[2.75, 19.7],
		[3, 21.7],
		[3.5, 24.5],
		[3.75, 25.9]
	],
	"30x60": [
		[1.5, 13.1],
		[1.8, 14.4],
		[2, 16.6],
		[2.5, 20.6],
		[2.75, 22.6],
		[3, 24.1],
		[3.5, 27.7],
		[3.75, 29.7]
	],
	"40x60": [
		[1.2, 11.3],
		[1.3, 12],
		[1.4, 12.4],
		[1.5, 13.7],
		[1.8, 15.7],
		[2, 18],
		[2.5, 23],
		[2.75, 25],
		[3, 27],
		[3.5, 30.5],
		[3.75, 32.8],
		[4.5, 39.1],
		[4.75, 41.5]
	],
	"40x80": [
		[1.5, 16.7],
		[1.8, 18.9],
		[2, 21.8],
		[2.5, 27.5],
		[2.75, 30.2],
		[3, 32.5],
		[3.5, 37.8],
		[3.75, 40],
		[4.5, 47],
		[4.75, 49.7]
	],
	"50x70": [
		[1.5, 16.7],
		[1.8, 18.9],
		[2, 21.8],
		[2.5, 27],
		[2.75, 29.7],
		[3, 32.5],
		[3.5, 37.2],
		[3.75, 40],
		[4.75, 50.3]
	],
	"50x80": [
		[2.5, 29.8],
		[2.75, 32.4],
		[3, 35.1],
		[3.5, 40.6],
		[3.75, 43.7],
		[4.75, 53.6]
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
		[4.5, 60],
		[4.75, 64.3],
		[5.75, 76]
	],
	"50x150": [
		[2, 36.5],
		[2.5, 46],
		[2.75, 51]
	]
};
var galvanizedSquareRectangularTubePart3 = {
	"60x80": [
		[1.8, 21.5],
		[2, 25.6],
		[2.5, 31.7],
		[2.75, 35.5],
		[3, 38.8],
		[3.5, 44.4],
		[3.75, 47.5],
		[4.5, 55.5],
		[4.75, 58.5]
	],
	"60x100": [
		[2.5, 36.5],
		[2.75, 40.2],
		[3, 43.5],
		[3.5, 50.3],
		[3.75, 54.9],
		[4.5, 64.6],
		[4.75, 68]
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
		[5.75, 93]
	],
	"75x150": [
		[2, 42],
		[2.5, 52],
		[2.75, 56.8],
		[3.5, 71.7],
		[3.75, 76.7],
		[4.5, 91.5],
		[4.75, 96.6],
		[5.5, 111],
		[5.75, 116.4]
	],
	"80x100": [
		[2.5, 41.7],
		[2.75, 45.3],
		[3, 49.5],
		[3.5, 58.2],
		[3.75, 61.5],
		[4.5, 72.4],
		[4.75, 76.9],
		[5.5, 88],
		[5.75, 91]
	],
	"80x120": [
		[2.5, 46.5],
		[2.75, 50.8],
		[3, 55.6],
		[3.5, 64.8],
		[3.8, 68.5],
		[4.5, 82.9],
		[4.75, 86],
		[5.5, 98.5],
		[5.75, 103]
	],
	"80x140": [
		[2.5, 50.6],
		[2.75, 55.5],
		[3, 60.8],
		[3.5, 70.4],
		[3.75, 76.5],
		[4.5, 90],
		[4.75, 94.7],
		[5.5, 109],
		[5.75, 114.5]
	],
	"80x160": [
		[2.5, 56.5],
		[2.75, 61.9],
		[3, 68.7],
		[3.5, 78.1],
		[3.75, 84.5],
		[4.5, 98.9],
		[4.75, 103.8],
		[5.5, 120],
		[5.75, 125.5]
	],
	"100x150": [
		[2, 48],
		[2.5, 59],
		[2.75, 65.3],
		[3, 70],
		[3.5, 80.6],
		[3.75, 85.7],
		[4.5, 103],
		[4.75, 109],
		[5.5, 124.5],
		[5.75, 132.1]
	],
	"100x200": [
		[2.5, 71],
		[2.75, 77.5],
		[3, 84.2],
		[3.5, 97.5],
		[3.75, 104.1],
		[4.5, 124.3],
		[4.75, 131.3],
		[5.5, 150.8],
		[5.75, 158.5],
		[7.5, 201],
		[7.75, 208.4],
		[8, 213]
	],
	"150x200": [
		[3.5, 113],
		[3.75, 121],
		[4.5, 145],
		[4.75, 153.3],
		[5.5, 176.7],
		[5.75, 186],
		[7.5, 236.7],
		[7.75, 245],
		[9.5, 297],
		[9.75, 305]
	]
};
var galvanizedSquareRectangularTubeAdditions = {
	"20x20": [[1.7, 5.88]],
	"20x40": [
		[1, 5.3],
		[1.1, 5.85],
		[1.2, 6.5],
		[1.3, 6.76],
		[1.7, 8.8]
	],
	"25x25": [[1.7, 7.4], [3, 12.7]],
	"25x50": [[1.7, 11.3]],
	"30x30": [
		[1, 5.33],
		[1.1, 5.9],
		[1.2, 6.5],
		[1.3, 6.76],
		[1.7, 8.9]
	],
	"30x50": [
		[1, 6.99],
		[1.1, 7.72],
		[1.2, 8.44],
		[1.3, 8.75],
		[1.7, 12.2]
	],
	"38x58": [
		[1, 8.4],
		[1.1, 9.41],
		[1.2, 9.62],
		[1.3, 10.67],
		[1.5, 12.3],
		[1.7, 13.9],
		[2, 16.5],
		[2.5, 20.4],
		[2.75, 22.3],
		[3, 24.2]
	],
	"40x40": [
		[1, 7.44],
		[1.1, 7.73],
		[1.2, 8.52],
		[1.3, 8.89],
		[1.4, 9.8],
		[1.7, 12]
	],
	"40x60": [
		[1, 9.02],
		[1.1, 10.1],
		[1.7, 15.1]
	],
	"40x80": [
		[1, 11.03],
		[1.1, 11.77],
		[1.2, 13],
		[1.3, 13.48],
		[1.7, 18]
	],
	"45x95": [
		[1.5, 18.25],
		[1.7, 20.83],
		[2, 24.11]
	],
	"50x50": [[1.7, 15]],
	"50x70": [[4.5, 47]],
	"50x100": [[1.7, 22.5], [5.5, 73]],
	"50x150": [
		[3, 55.9],
		[3.5, 64.9],
		[3.75, 69.4],
		[4.5, 82.6],
		[4.75, 86.9]
	],
	"60x60": [
		[1.7, 18],
		[5.5, 57],
		[5.75, 59.5]
	],
	"60x80": [[1.5, 18.3], [1.7, 20.8]],
	"60x120": [[1.5, 24.11], [1.7, 27.8]],
	"80x80": [[1.7, 23.9]],
	"80x120": [[3.75, 68.3]],
	"100x100": [[1.7, 30.5]]
};
var galvanizedSquareRectangularTubeBaseRawData = {
	...galvanizedSquareRectangularTubePart1,
	...galvanizedSquareRectangularTubePart2,
	...galvanizedSquareRectangularTubePart3
};
function mergeMissingThicknessOptions(baseData, additions) {
	const merged = {};
	Object.entries(baseData).forEach(([size, options]) => {
		merged[size] = options.map(([thicknessMm, referenceWeightKgPerPiece]) => [thicknessMm, referenceWeightKgPerPiece]);
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
var galvanizedSquareRectangularTubeRawData = mergeMissingThicknessOptions(galvanizedSquareRectangularTubeBaseRawData, galvanizedSquareRectangularTubeAdditions);
var galvanizedSquareRectangularTubeData = Object.entries(galvanizedSquareRectangularTubeRawData).map(([size, options]) => {
	const [widthMm, heightMm] = size.split("x").map(Number);
	return {
		id: size,
		widthMm,
		heightMm,
		referenceLengthM: 6,
		thicknessOptions: options.map(([thicknessMm, referenceWeightKgPerPiece]) => ({
			thicknessMm,
			referenceWeightKgPerPiece
		}))
	};
});
function getGalvanizedSquareRectangularTubeThicknessId(thicknessMm) {
	return `${thicknessMm}mm`;
}
function findGalvanizedSquareRectangularTubeReference(specId, thicknessId) {
	const spec = galvanizedSquareRectangularTubeData.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getGalvanizedSquareRectangularTubeThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
	} : null;
}
var preGalvanizedSquareRectangularTubeData = [
	{
		id: "16x16",
		widthMm: 16,
		heightMm: 16,
		piecesPerBundle: 255,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 1.66
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 2
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 2.2
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 2.4
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 2.6
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 2.9
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 3.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 3.5
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 3.7
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 3.9
			}
		]
	},
	{
		id: "19x19",
		widthMm: 19,
		heightMm: 19,
		piecesPerBundle: 156,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 2
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 2.41
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 2.7
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 2.9
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 3.2
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 3.4
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 3.8
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 4.1
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 4.4
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 4.7
			}
		]
	},
	{
		id: "20x20",
		widthMm: 20,
		heightMm: 20,
		piecesPerBundle: 156,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 2.16
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 2.5
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 2.9
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.1
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 3.4
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 3.8
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 4.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 4.4
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 5.4
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 6.6
			}
		]
	},
	{
		id: "25x25",
		widthMm: 25,
		heightMm: 25,
		piecesPerBundle: 120,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 2.8
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 3.2
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 3.6
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.9
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 4.2
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 4.6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 5.4
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 6.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 6.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 7.6
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 8.4
			}
		]
	},
	{
		id: "28x28",
		widthMm: 28,
		heightMm: 28,
		piecesPerBundle: 120,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 3
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 3.6
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.1
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 4.4
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 5.3
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 6.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 6.8
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 7.7
			}
		]
	},
	{
		id: "30x30",
		widthMm: 30,
		heightMm: 30,
		piecesPerBundle: 100,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 3.26
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 3.7
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.3
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.1
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 6.2
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 6.7
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 7.2
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 7.8
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 8.3
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 8.5
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 9.2
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 10
			}
		]
	},
	{
		id: "32x32",
		widthMm: 32,
		heightMm: 32,
		piecesPerBundle: 100,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.8
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.6
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 6.5
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 8
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 9
			}
		]
	},
	{
		id: "35x35",
		widthMm: 35,
		heightMm: 35,
		piecesPerBundle: 100,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 4.4
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 5.5
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.9
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 6.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 7.2
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 7.8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 8.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 9.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 9.6
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 10.2
			}
		]
	},
	{
		id: "40x40",
		widthMm: 40,
		heightMm: 40,
		piecesPerBundle: 72,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 5.3
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5.8
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 6.2
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 6.8
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 7.6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 8.3
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 8.8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 9.5
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 10.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 11.3
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 12
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 13
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 13.8
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 17
			}
		]
	},
	{
		id: "45x45",
		widthMm: 45,
		heightMm: 45,
		piecesPerBundle: 64,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 9.2
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 10.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 11
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 11.7
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 13.6
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 15.7
			}
		]
	},
	{
		id: "50x50",
		widthMm: 50,
		heightMm: 50,
		piecesPerBundle: 49,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 6.4
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 8.1
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 8.6
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 9.5
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 10.5
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 11
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 12.2
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 13.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 14.1
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 14.8
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 17.5
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 21.6
			}
		]
	},
	{
		id: "60x60",
		widthMm: 60,
		heightMm: 60,
		piecesPerBundle: 36,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 8.9
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 9.8
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 10.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 11.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 12.7
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 13.9
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 14.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 17.78
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 18.1
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 19
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 21
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 26.4
			}
		]
	},
	{
		id: "80x80",
		widthMm: 80,
		heightMm: 80,
		piecesPerBundle: 36,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 14
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 15.5
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 17
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 18
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 19.5
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 21
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 23
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 24
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 26
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 27.8
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 35.5
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 40.5
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 42.5
			}
		]
	},
	{
		id: "100x100",
		widthMm: 100,
		heightMm: 100,
		piecesPerBundle: 16,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 17.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 19
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 21.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 22.8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 25
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 26.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 29.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 30.4
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 32
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 36
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 43.5
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 50.8
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 55.4
			}
		]
	},
	{
		id: "120x120",
		widthMm: 120,
		heightMm: 120,
		piecesPerBundle: 16,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 29.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 31.5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 33.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 36.5
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 38.8
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 42
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 54
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 61.1
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 66.7
			}
		]
	},
	{
		id: "150x150",
		widthMm: 150,
		heightMm: 150,
		piecesPerBundle: 9,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 41.8
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 46
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 53
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 67
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 77
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 84
			}
		]
	},
	{
		id: "10x20",
		widthMm: 10,
		heightMm: 20,
		piecesPerBundle: 200,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 1.57
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 1.9
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 2.1
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 2.3
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 2.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 2.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 3
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 3.2
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 3.4
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 3.73
			}
		]
	},
	{
		id: "15x30",
		widthMm: 15,
		heightMm: 30,
		piecesPerBundle: 180,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 2.4
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 2.9
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 3.1
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.4
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 3.8
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 4.1
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 4.6
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 5
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 5.4
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 5.8
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 6.5
			}
		]
	},
	{
		id: "20x30",
		widthMm: 20,
		heightMm: 30,
		piecesPerBundle: 120,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 2.65
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 3.1
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 3.6
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 3.8
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 4.3
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 4.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 5.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 5.5
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 6.5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 6.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 7.7
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 8.3
			}
		]
	},
	{
		id: "20x40",
		widthMm: 20,
		heightMm: 40,
		piecesPerBundle: 98,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .6,
				referenceWeightKgPerPiece: 3.17
			},
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 3.9
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.4
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 4.8
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.3
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 5.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 6.21
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 6.7
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 7.2
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 7.8
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 8.2
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 8.8
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 9.3
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 10.2
			}
		]
	},
	{
		id: "25x38",
		widthMm: 25,
		heightMm: 38,
		piecesPerBundle: 96,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 4.5
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 4.8
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 5.3
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 5.8
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 6.5
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 7.1
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 8.1
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 9.5
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 10.4
			}
		]
	},
	{
		id: "25x50",
		widthMm: 25,
		heightMm: 50,
		piecesPerBundle: 72,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 5
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5.5
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 6.4
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 7.1
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 7.8
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 8.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 9.2
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 9.7
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 10.7
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 11.1
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 11.8
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 12.7
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 17
			}
		]
	},
	{
		id: "28x48",
		widthMm: 28,
		heightMm: 48,
		piecesPerBundle: 70,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5.4
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 5.8
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 6.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 7.9
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 8.4
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 9.3
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 9.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 11.2
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 11.6
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 12.7
			}
		]
	},
	{
		id: "30x40",
		widthMm: 30,
		heightMm: 40,
		piecesPerBundle: 80,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 4.3
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 5.5
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 6
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 6.7
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 8
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 8.4
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 8.8
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 9.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 10.5
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 10.9
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 12
			}
		]
	},
	{
		id: "30x50",
		widthMm: 30,
		heightMm: 50,
		piecesPerBundle: 70,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 5.2
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 5.8
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 6.3
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 6.8
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 7.6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 8.1
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 8.9
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 9.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 10.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 11
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 11.6
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 12.8
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 13.5
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 17
			}
		]
	},
	{
		id: "30x60",
		widthMm: 30,
		heightMm: 60,
		piecesPerBundle: 60,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 7.3
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 7.9
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 8.5
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 9.3
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 10.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 10.8
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 11.9
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 12.3
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 13.4
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 14.3
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 15.7
			},
			{
				thicknessMm: 2.4,
				referenceWeightKgPerPiece: 19.5
			}
		]
	},
	{
		id: "35x55",
		widthMm: 35,
		heightMm: 55,
		piecesPerBundle: 70,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 6.5
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 7.1
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 7.7
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 8.6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 9.6
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 10.6
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 11.1
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 12.5
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 12.9
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 14.1
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 14.8
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 16
			}
		]
	},
	{
		id: "40x60",
		widthMm: 40,
		heightMm: 60,
		piecesPerBundle: 70,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .7,
				referenceWeightKgPerPiece: 6.3
			},
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 7.4
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 8
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 8.7
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 9.6
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 10.4
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 11.4
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 12.3
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 13.3
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 13.8
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 15
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 17.3
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 21.5
			}
		]
	},
	{
		id: "40x80",
		widthMm: 40,
		heightMm: 80,
		piecesPerBundle: 50,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: .8,
				referenceWeightKgPerPiece: 8.8
			},
			{
				thicknessMm: .9,
				referenceWeightKgPerPiece: 9.4
			},
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 10.5
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 11.3
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 12.5
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 13.7
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 14.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 15.7
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 17
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 18.3
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 19.2
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 21
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 26.3
			}
		]
	},
	{
		id: "50x100",
		widthMm: 50,
		heightMm: 100,
		piecesPerBundle: 32,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1,
				referenceWeightKgPerPiece: 12.9
			},
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 14.3
			},
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 16
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 17.3
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 18.6
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 19.68
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 20.5
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 22.5
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 24.3
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 26.6
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 32.7
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 38
			}
		]
	},
	{
		id: "60x80",
		widthMm: 60,
		heightMm: 80,
		piecesPerBundle: 42,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.2,
				referenceWeightKgPerPiece: 15
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 15.95
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 16.9
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 18.3
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 21
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 22.69
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 24.5
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 31
			}
		]
	},
	{
		id: "60x120",
		widthMm: 60,
		heightMm: 120,
		piecesPerBundle: 28,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 1.1,
				referenceWeightKgPerPiece: 16.9
			},
			{
				thicknessMm: 1.3,
				referenceWeightKgPerPiece: 21.74
			},
			{
				thicknessMm: 1.4,
				referenceWeightKgPerPiece: 22
			},
			{
				thicknessMm: 1.5,
				referenceWeightKgPerPiece: 24.4
			},
			{
				thicknessMm: 1.6,
				referenceWeightKgPerPiece: 26.75
			},
			{
				thicknessMm: 1.7,
				referenceWeightKgPerPiece: 27
			},
			{
				thicknessMm: 1.8,
				referenceWeightKgPerPiece: 28.5
			},
			{
				thicknessMm: 1.9,
				referenceWeightKgPerPiece: 31.4
			},
			{
				thicknessMm: 2.5,
				referenceWeightKgPerPiece: 40
			}
		]
	}
];
function getPreGalvanizedSquareRectangularTubeThicknessId(thicknessMm) {
	return `${thicknessMm}mm`;
}
function findPreGalvanizedSquareRectangularTubeReference(specId, thicknessId) {
	const spec = preGalvanizedSquareRectangularTubeData.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getPreGalvanizedSquareRectangularTubeThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
	} : null;
}
var messages = {
	zh: {
		nav: {
			subtitle: "钢材重量计算与询盘工具",
			languageZh: "中文",
			languageEn: "English",
			instructions: "使用说明",
			sendRfq: "发送询盘",
			mobileRfq: "询盘"
		},
		company: {
			name: "灿煌钢铁集团",
			englishName: "CANHOPE STEEL GROUP",
			description: "始于1993年，提供钢管、型钢、板材、消防系统材料及工程加工出口服务。",
			officialWebsite: "官方网站",
			tags: [
				"始于1993年",
				"工厂与库存",
				"项目配套",
				"全球出口"
			]
		},
		productCategories: {
			steelPipe: "钢管类",
			structuralSteel: "型钢类",
			fireFittings: "消防配件"
		},
		products: {
			galvanized_pipe: "镀锌管",
			galvanized_sheet_pipe: "镀锌板管",
			black_steel_pipe: "黑料焊管",
			galvanized_square_rectangular_tube: "镀锌方矩管",
			pre_galvanized_square_rectangular_tube: "镀锌板方矩管",
			angle_steel: "角钢",
			channel_steel: "槽钢",
			grooved_fitting: "沟槽管件"
		},
		materialList: {
			addHint: "点击产品，添加到材料清单",
			title: "材料清单",
			subtitle: "Material List",
			demoMode: "演示数据模式",
			emptyTitle: "从左侧添加一个产品开始",
			emptyDescription: "第一版使用少量演示数据。点击同一产品会继续增加规格行，不会隐藏已有品类。",
			subtotal: "小计",
			rows: "行",
			noRows: "暂无规格，点击“增加规格”添加一行。",
			specPending: "规格待选择",
			currentListEmpty: "当前材料清单为空。"
		},
		fields: {
			spec: "规格",
			specModel: "规格/型号",
			size: "公称尺寸",
			fittingType: "管件类型",
			modelOrAngle: "型号或角度",
			thickness: "壁厚",
			thicknessShort: "厚度",
			theoreticalWeight: "理论重量",
			piecesPerBundle: "每扎支数",
			length: "长度",
			quantity: "数量",
			unitWeight: "单位重量",
			weightPerMeter: "单米重量",
			pieceWeight: "单支/件",
			pieceWeightFull: "单支/单件重量",
			totalWeight: "总重量",
			action: "操作",
			outerDiameter: "外径",
			customOuterDiameter: "自定义外径",
			width: "宽",
			height: "高",
			legA: "边A",
			legB: "边B",
			equalAngle: "等边角钢",
			unequalAngle: "不等边角钢",
			selectSpec: "选择规格",
			selectThickness: "选择厚度",
			selectTheoreticalWeight: "选择理论重量",
			specDataPending: "规格数据待导入",
			thicknessDataPending: "厚度数据待导入",
			referenceWeightDataPending: "理论重量数据待导入"
		},
		actions: {
			addSpec: "增加规格",
			copy: "复制",
			delete: "删除",
			deleteModule: "删除模块",
			clearAll: "清空清单",
			close: "关闭"
		},
		customSize: {
			noSuitableSpec: "没有合适规格？",
			useCustomSize: "使用自定义尺寸",
			customSpec: "自定义规格",
			locked: "锁定",
			fixedLengthTip: "现货常规长度为6米定尺。如需其他长度，请使用自定义尺寸。",
			fixedLengthOnlyTip: "标准长度固定为6米定尺。"
		},
		summary: {
			productCount: "品种数",
			validSpecRows: "有效规格行数",
			totalQuantity: "总数量",
			theoreticalWeight: "理论总重量",
			missingWeight: "缺少重量",
			containerEstimate: "40HQ集装箱估算",
			estimated: "预计",
			remainingCapacity: "还可装",
			capacityReached: "已达到设定载重",
			generateRfq: "生成询盘",
			missingRowsSuffix: "行",
			additionalMissingRows: "另有 {count} 行重量待补充"
		},
		container: {
			note: "集装箱数量仅按设定重量估算。实际装载还会受到产品长度、体积、包装方式、装柜方法以及当地运输限重影响。",
			configuredLoad: "设定载重"
		},
		inquiry: {
			title: "询盘预览",
			intro: "第一版仅生成和复制询盘内容，暂不连接真实发送服务。",
			listTitle: "材料清单",
			customerName: "客户姓名",
			companyName: "公司名称",
			country: "国家/地区",
			whatsapp: "WhatsApp",
			email: "邮箱",
			destinationPort: "目的港",
			notes: "补充要求",
			copyContent: "复制询盘内容",
			copied: "已复制询盘内容",
			rfqHeader: "CANHOPE STEEL 询盘清单"
		},
		notices: { weightPending: "重量待补充" },
		units: {
			meter: "米",
			millimeter: "毫米",
			kg: "千克",
			ton: "吨",
			piece: "支",
			item: "件",
			row: "行"
		}
	},
	en: {
		nav: {
			subtitle: "Steel Weight Calculator & RFQ Builder",
			languageZh: "中文",
			languageEn: "English",
			instructions: "Instructions",
			sendRfq: "Send RFQ",
			mobileRfq: "RFQ"
		},
		company: {
			name: "CANHOPE STEEL GROUP",
			englishName: "CANHOPE STEEL GROUP",
			description: "Since 1993, supplying steel pipes, structural steel, steel sheets, fire protection materials, and custom processing solutions for global projects.",
			officialWebsite: "Official Website",
			tags: [
				"Since 1993",
				"Factory & Stock",
				"Project Supply",
				"Global Export"
			]
		},
		productCategories: {
			steelPipe: "Steel Pipes",
			structuralSteel: "Structural Steel",
			fireFittings: "Fire Protection Fittings"
		},
		products: {
			galvanized_pipe: "Galvanized Steel Pipe",
			galvanized_sheet_pipe: "Pre-Galvanized Round Steel Pipe",
			black_steel_pipe: "Black Welded Steel Pipe",
			galvanized_square_rectangular_tube: "Hot-Dip Galvanized Square / Rectangular Tube",
			pre_galvanized_square_rectangular_tube: "Pre-Galvanized Square / Rectangular Tube",
			angle_steel: "Angle Steel",
			channel_steel: "Channel Steel",
			grooved_fitting: "Grooved Fittings"
		},
		materialList: {
			addHint: "Click a product to add it to the material list",
			title: "Material List",
			subtitle: "材料清单",
			demoMode: "Demo Data Mode",
			emptyTitle: "Add a product from the left to start",
			emptyDescription: "V0.1 uses limited demo data. Clicking the same product adds another specification row without hiding existing product groups.",
			subtotal: "Subtotal",
			rows: "rows",
			noRows: "No specifications yet. Click Add Specification to add a row.",
			specPending: "Size Pending",
			currentListEmpty: "The material list is empty."
		},
		fields: {
			spec: "Size",
			specModel: "Size / Model",
			size: "Nominal Size",
			fittingType: "Fitting Type",
			modelOrAngle: "Model / Angle",
			thickness: "Wall Thickness",
			thicknessShort: "Thickness",
			theoreticalWeight: "Theoretical Weight",
			piecesPerBundle: "Pieces per Bundle",
			length: "Length",
			quantity: "Quantity",
			unitWeight: "Unit Weight",
			weightPerMeter: "Weight per Meter",
			pieceWeight: "Piece Weight",
			pieceWeightFull: "Weight per Piece / Item",
			totalWeight: "Total Weight",
			action: "Action",
			outerDiameter: "Outer Diameter",
			customOuterDiameter: "Custom OD",
			width: "Width",
			height: "Height",
			legA: "Leg A",
			legB: "Leg B",
			equalAngle: "Equal Angle",
			unequalAngle: "Unequal Angle",
			selectSpec: "Select Size",
			selectThickness: "Select Thickness",
			selectTheoreticalWeight: "Select Theoretical Weight",
			specDataPending: "Size data pending",
			thicknessDataPending: "Thickness data pending",
			referenceWeightDataPending: "Reference weight data pending"
		},
		actions: {
			addSpec: "Add Specification",
			copy: "Copy",
			delete: "Delete",
			deleteModule: "Delete Category",
			clearAll: "Clear All",
			close: "Close"
		},
		customSize: {
			noSuitableSpec: "No suitable size?",
			useCustomSize: "Use Custom Size",
			customSpec: "Custom Size",
			locked: "Locked",
			fixedLengthTip: "Standard stock length is fixed at 6 meters. For other lengths, please use Custom Size.",
			fixedLengthOnlyTip: "Standard length is fixed at 6 meters."
		},
		summary: {
			productCount: "Product Types",
			validSpecRows: "Specifications",
			totalQuantity: "Total Quantity",
			theoreticalWeight: "Theoretical Weight",
			missingWeight: "Missing Weight",
			containerEstimate: "40HQ Estimate",
			estimated: "Estimated",
			remainingCapacity: "Remaining Capacity",
			capacityReached: "Configured Capacity Reached",
			generateRfq: "Generate RFQ",
			missingRowsSuffix: "rows",
			additionalMissingRows: "{count} rows weight pending"
		},
		container: {
			note: "Container quantity is estimated by the configured weight only. Actual loading is also affected by product length, volume, packaging, loading method, and local transport weight limits.",
			configuredLoad: "Configured load"
		},
		inquiry: {
			title: "RFQ Preview",
			intro: "This version only generates and copies RFQ content. It does not send a real inquiry.",
			listTitle: "Material List",
			customerName: "Customer Name",
			companyName: "Company Name",
			country: "Country / Region",
			whatsapp: "WhatsApp",
			email: "Email",
			destinationPort: "Destination Port",
			notes: "Additional Requirements",
			copyContent: "Copy RFQ Content",
			copied: "RFQ Content Copied",
			rfqHeader: "Hello, I would like to request a quotation for the following products:"
		},
		notices: { weightPending: "Weight Pending" },
		units: {
			meter: "m",
			millimeter: "mm",
			kg: "kg",
			ton: "t",
			piece: "pcs",
			item: "pcs",
			row: "rows"
		}
	}
};
function isLocale(value) {
	return value === "zh" || value === "en";
}
var CONTAINER_40HQ_TON = 27.5;
var STEEL_DENSITY_FACTOR = .00785;
var ROUND_CARBON_STEEL_PIPE_FACTOR = .02466;
function isSteelPipeProduct$1(type) {
	return type === "galvanized_pipe" || type === "galvanized_sheet_pipe" || type === "black_steel_pipe";
}
function isSquareTubeProduct$1(type) {
	return type === "galvanized_square_rectangular_tube" || type === "pre_galvanized_square_rectangular_tube";
}
function calculateRow(row) {
	if (row.productType === "grooved_fitting") {
		const unitWeightKg = groovedFittingOptions.find((item) => item.fittingTypeId === row.fittingTypeId && item.nominalSizeId === row.nominalSizeId && item.modelId === row.modelId)?.weightKgPerPiece;
		if (!unitWeightKg) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/件"
		};
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/件",
			pieceWeightKg: unitWeightKg,
			totalWeightKg: unitWeightKg * row.quantity
		};
	}
	if (isSteelPipeProduct$1(row.productType) && row.dimensionMode === "custom") {
		const outerDiameter = row.customOuterDiameterMm ?? 0;
		const thickness = row.customThicknessMm ?? 0;
		if (!(outerDiameter > 0 && thickness > 0 && thickness * 2 < outerDiameter)) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = row.productType === "black_steel_pipe" ? calculateRoundSteelPipeKgPerMeter(outerDiameter, thickness) : STEEL_DENSITY_FACTOR * Math.PI * (outerDiameter - thickness) * thickness;
		const pieceWeightKg = unitWeightKg * row.lengthM;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	if (isSquareTubeProduct$1(row.productType) && row.dimensionMode === "custom") {
		const width = row.customWidthMm ?? 0;
		const height = row.customHeightMm ?? 0;
		const thickness = row.customThicknessMm ?? 0;
		if (!(width > 0 && height > 0 && thickness > 0 && thickness * 2 < Math.min(width, height))) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = (width * height - (width - 2 * thickness) * (height - 2 * thickness)) * STEEL_DENSITY_FACTOR;
		const pieceWeightKg = unitWeightKg * row.lengthM;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	if (row.productType === "angle_steel" && row.dimensionMode === "custom") {
		const legA = row.customLegAMm ?? 0;
		const legB = row.customLegBMm ?? 0;
		const thickness = row.customThicknessMm ?? 0;
		if (!(legA > 0 && legB > 0 && thickness > 0 && row.lengthM > 0 && thickness < legA && thickness < legB)) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = calculateAngleSteelKgPerMeter(legA, legB, thickness);
		const pieceWeightKg = unitWeightKg * row.lengthM;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	if (isSteelPipeProduct$1(row.productType)) {
		if (row.productType === "galvanized_pipe") {
			const reference = findGalvanizedPipeReference(row.specId, row.thicknessId);
			if (!reference) return {
				rowId: row.id,
				hasWeight: false,
				unitWeightLabel: "kg/m"
			};
			const unitWeightKg = reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
			const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;
			return {
				rowId: row.id,
				hasWeight: true,
				unitWeightKg,
				unitWeightLabel: "kg/m",
				pieceWeightKg,
				totalWeightKg: pieceWeightKg * row.quantity
			};
		}
		if (row.productType === "galvanized_sheet_pipe") {
			const reference = findGalvanizedSheetPipeReference(row.specId, row.thicknessId);
			if (!reference) return {
				rowId: row.id,
				hasWeight: false,
				unitWeightLabel: "kg/m"
			};
			const unitWeightKg = reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
			const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;
			return {
				rowId: row.id,
				hasWeight: true,
				unitWeightKg,
				unitWeightLabel: "kg/m",
				pieceWeightKg,
				totalWeightKg: pieceWeightKg * row.quantity
			};
		}
		if (row.productType === "black_steel_pipe") {
			const reference = findBlackSteelPipeReference(row.specId, row.thicknessId);
			if (!reference) return {
				rowId: row.id,
				hasWeight: false,
				unitWeightLabel: "kg/m"
			};
			const unitWeightKg = calculateRoundSteelPipeKgPerMeter(reference.spec.outerDiameterMm, reference.thickness.thicknessMm);
			const pieceWeightKg = unitWeightKg * reference.thickness.standardLengthM;
			return {
				rowId: row.id,
				hasWeight: true,
				unitWeightKg,
				unitWeightLabel: "kg/m",
				pieceWeightKg,
				totalWeightKg: pieceWeightKg * row.quantity
			};
		}
		return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
	}
	if (isSquareTubeProduct$1(row.productType)) {
		const reference = row.productType === "galvanized_square_rectangular_tube" ? findGalvanizedSquareRectangularTubeReference(row.specId, row.thicknessId) : findPreGalvanizedSquareRectangularTubeReference(row.specId, row.thicknessId);
		if (!reference) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
		const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	if (row.productType === "angle_steel") {
		const reference = findAngleSteelReference(row.specId, row.thicknessId);
		if (!reference) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = reference.thickness.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
		const pieceWeightKg = reference.thickness.referenceWeightKgPerPiece;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	if (row.productType === "channel_steel") {
		const reference = findChannelSteelReference(row.specId, row.referenceWeightId);
		if (!reference) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = reference.weightOption.referenceWeightKgPerPiece / reference.spec.referenceLengthM;
		const pieceWeightKg = reference.weightOption.referenceWeightKgPerPiece;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	return {
		rowId: row.id,
		hasWeight: false,
		unitWeightLabel: "kg/m"
	};
}
function calculateRoundSteelPipeKgPerMeter(outerDiameterMm, thicknessMm) {
	return ROUND_CARBON_STEEL_PIPE_FACTOR * thicknessMm * (outerDiameterMm - thicknessMm);
}
function calculateAngleSteelKgPerMeter(legAMm, legBMm, thicknessMm) {
	return thicknessMm * (legAMm + legBMm - thicknessMm) * STEEL_DENSITY_FACTOR;
}
function calculateModuleSubtotal(module) {
	return module.rows.reduce((sum, row) => {
		return sum + (calculateRow(row).totalWeightKg ?? 0);
	}, 0);
}
function estimate40HQ(totalWeightTon) {
	if (totalWeightTon <= 0) return {
		containerCount: 0,
		remainingCapacityTon: null
	};
	const containerCount = Math.ceil(totalWeightTon / CONTAINER_40HQ_TON);
	const remainingCapacityTon = containerCount * CONTAINER_40HQ_TON - totalWeightTon;
	return {
		containerCount,
		remainingCapacityTon: Math.abs(remainingCapacityTon) < .005 ? 0 : remainingCapacityTon
	};
}
function calculateSummary(list) {
	let validRowCount = 0;
	let totalQuantityPieces = 0;
	let totalQuantityItems = 0;
	let totalWeightKg = 0;
	let missingWeightRowCount = 0;
	list.modules.forEach((module) => {
		module.rows.forEach((row) => {
			const calculation = calculateRow(row);
			const hasMeaningfulQuantity = row.quantity > 0;
			if (hasMeaningfulQuantity) validRowCount += 1;
			if (row.quantityUnit === "支") totalQuantityPieces += row.quantity;
			else totalQuantityItems += row.quantity;
			if (!calculation.hasWeight && hasMeaningfulQuantity) missingWeightRowCount += 1;
			totalWeightKg += calculation.totalWeightKg ?? 0;
		});
	});
	const totalWeightTon = totalWeightKg / 1e3;
	const container = estimate40HQ(totalWeightTon);
	return {
		productModuleCount: list.modules.length,
		validRowCount,
		totalQuantityPieces,
		totalQuantityItems,
		totalWeightKg,
		totalWeightTon,
		missingWeightRowCount,
		...container
	};
}
function formatNumber(value, digits = 2, locale = "zh") {
	return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US", {
		maximumFractionDigits: digits,
		minimumFractionDigits: value % 1 === 0 ? 0 : digits
	}).format(value);
}
function formatKg(value, locale = "zh", pendingLabel = "重量待补充") {
	if (value === void 0) return pendingLabel;
	return `${formatNumber(value, 2, locale)} ${locale === "zh" ? "千克" : "kg"}`;
}
function formatTonFromKg(valueKg, locale = "zh", pendingLabel = "重量待补充") {
	if (valueKg === void 0) return pendingLabel;
	return `${formatNumber(valueKg / 1e3, 2, locale)} ${locale === "zh" ? "吨" : "t"}`;
}
function formatLength(valueM, locale = "zh") {
	return `${formatNumber(valueM, 2, locale)} ${locale === "zh" ? "米" : "m"}`;
}
function formatQuantity(value, unit, locale = "zh") {
	if (locale === "zh") return `${formatNumber(value, 0, locale)}${unit}`;
	return `${formatNumber(value, 0, locale)} pcs`;
}
function formatUnitWeightLabel(label, locale = "zh") {
	if (label === "kg/m") return locale === "zh" ? "千克/米" : "kg/m";
	return locale === "zh" ? "千克/件" : "kg/pc";
}
function formatThicknessValue(thicknessMm, locale) {
	const value = new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 2,
		useGrouping: false
	}).format(thicknessMm);
	return locale === "zh" ? `${value}mm` : `${value} mm`;
}
function formatGalvanizedPipeSpec(spec, locale) {
	if (locale === "zh") return `${spec.dn} / ${spec.inchSize} / Φ${spec.outerDiameterMm}`;
	return `${spec.dn} / ${spec.inchSize.replace("\"", "")} in. / OD ${spec.outerDiameterMm} mm`;
}
function formatGalvanizedSheetPipeSpec(spec, locale) {
	if (locale === "zh") return [
		`Φ${spec.outerDiameterMm}`,
		`${spec.outerDiameterMm}圆`,
		spec.localSizeLabelZh
	].filter(Boolean).join(" / ");
	return `OD ${spec.outerDiameterMm} mm`;
}
function formatBlackSteelPipeSpec(spec, locale) {
	if (locale === "zh") return [
		`Φ${spec.outerDiameterMm}`,
		spec.dn,
		spec.inchSize ? `${spec.inchSize}"` : null,
		spec.localSizeLabelZh
	].filter(Boolean).join(" / ");
	return [
		spec.dn,
		spec.inchSize ? `${spec.inchSize} in.` : null,
		`OD ${spec.outerDiameterMm} mm`
	].filter(Boolean).join(" / ");
}
function formatGalvanizedSquareRectangularTubeSpec(spec) {
	return `${spec.widthMm} × ${spec.heightMm} mm`;
}
function formatAngleSteelSpec(spec) {
	return `${spec.legAMm} × ${spec.legBMm} mm`;
}
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "canhope-steel-calculator-material-list";
var LOCALE_STORAGE_KEY = "steel-calculator-locale";
var categories = [
	"钢管类",
	"型钢类",
	"消防配件"
];
var steelPipeProductTypes = [
	"galvanized_pipe",
	"galvanized_sheet_pipe",
	"black_steel_pipe"
];
var squareTubeProductTypes = ["galvanized_square_rectangular_tube", "pre_galvanized_square_rectangular_tube"];
function isSteelPipeProduct(type) {
	return steelPipeProductTypes.includes(type);
}
function isSquareTubeProduct(type) {
	return squareTubeProductTypes.includes(type);
}
function isCustomSizeProduct(type) {
	return isSteelPipeProduct(type) || isSquareTubeProduct(type) || type === "angle_steel";
}
function getSquareTubeData(productType) {
	return productType === "galvanized_square_rectangular_tube" ? galvanizedSquareRectangularTubeData : preGalvanizedSquareRectangularTubeData;
}
function getSquareTubeThicknessId(productType, thicknessMm) {
	return productType === "galvanized_square_rectangular_tube" ? getGalvanizedSquareRectangularTubeThicknessId(thicknessMm) : getPreGalvanizedSquareRectangularTubeThicknessId(thicknessMm);
}
function getDefaultSquareTubeSelection(productType) {
	const firstSpec = getSquareTubeData(productType)[0];
	const firstThickness = firstSpec?.thicknessOptions[0];
	return {
		specId: firstSpec?.id ?? "",
		thicknessId: firstSpec && firstThickness ? getSquareTubeThicknessId(productType, firstThickness.thicknessMm) : ""
	};
}
function getDefaultAngleSteelSelection() {
	const firstSpec = angleSteelSpecifications[0];
	const firstThickness = firstSpec?.thicknessOptions[0];
	return {
		specId: firstSpec?.id ?? "",
		thicknessId: firstThickness ? getAngleSteelThicknessId(firstThickness.thicknessMm) : ""
	};
}
function getDefaultChannelSteelSelection() {
	const firstSpec = channelSteelData[0];
	const firstWeight = firstSpec?.weightOptions[0];
	return {
		specId: firstSpec?.id ?? "",
		referenceWeightId: firstWeight?.id ?? ""
	};
}
function getStandardOptionMode(productType) {
	return productType === "channel_steel" ? "referenceWeight" : "thickness";
}
function getStandardOptionLabel(productType, m) {
	return getStandardOptionMode(productType) === "referenceWeight" ? m.fields.theoreticalWeight : m.fields.thickness;
}
function createId(prefix) {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return `${prefix}-${crypto.randomUUID()}`;
	return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function createEmptyRow(productType) {
	const id = createId("row");
	if (isSteelPipeProduct(productType)) return {
		id,
		productType,
		dimensionMode: "standard",
		specId: "",
		thicknessId: "",
		lengthM: 6,
		quantity: 0,
		quantityUnit: "支"
	};
	if (isSquareTubeProduct(productType)) {
		const defaultSelection = getDefaultSquareTubeSelection(productType);
		return {
			id,
			productType,
			dimensionMode: "standard",
			specId: defaultSelection.specId,
			thicknessId: defaultSelection.thicknessId,
			lengthM: 6,
			quantity: 0,
			quantityUnit: "支"
		};
	}
	if (productType === "angle_steel") {
		const defaultSelection = getDefaultAngleSteelSelection();
		return {
			id,
			productType,
			dimensionMode: "standard",
			specId: defaultSelection.specId,
			thicknessId: defaultSelection.thicknessId,
			lengthM: 6,
			quantity: 0,
			quantityUnit: "支"
		};
	}
	if (productType === "channel_steel") {
		const defaultSelection = getDefaultChannelSteelSelection();
		return {
			id,
			productType,
			specId: defaultSelection.specId,
			referenceWeightId: defaultSelection.referenceWeightId,
			lengthM: 6,
			quantity: 0,
			quantityUnit: "支"
		};
	}
	return {
		id,
		productType,
		fittingTypeId: "",
		nominalSizeId: "",
		modelId: "",
		quantity: 0,
		quantityUnit: "件"
	};
}
function createCustomRow(productType) {
	const id = createId("row");
	if (isSteelPipeProduct(productType)) return {
		id,
		productType,
		dimensionMode: "custom",
		specId: "",
		thicknessId: "",
		customOuterDiameterMm: 60,
		customThicknessMm: 2.5,
		lengthM: 6,
		quantity: 0,
		quantityUnit: "支"
	};
	if (productType === "angle_steel") return {
		id,
		productType,
		dimensionMode: "custom",
		specId: "",
		thicknessId: "",
		customLegAMm: 50,
		customLegBMm: 50,
		customThicknessMm: 4,
		lengthM: 6,
		quantity: 0,
		quantityUnit: "支"
	};
	return {
		id,
		productType,
		dimensionMode: "custom",
		specId: "",
		thicknessId: "",
		customWidthMm: 50,
		customHeightMm: 50,
		customThicknessMm: 2,
		lengthM: 6,
		quantity: 0,
		quantityUnit: "支"
	};
}
function productName(type, m) {
	return m.products[type];
}
function categoryName(category, m) {
	if (category === "钢管类") return m.productCategories.steelPipe;
	if (category === "型钢类") return m.productCategories.structuralSteel;
	return m.productCategories.fireFittings;
}
function getGalvanizedPipeSelectedSpecLabel(specId, locale) {
	const spec = galvanizedPipeData.find((item) => item.id === specId);
	return spec ? formatGalvanizedPipeSpec(spec, locale) : "";
}
function getGalvanizedPipeSelectedThicknessLabel(specId, thicknessId, locale) {
	const thickness = galvanizedPipeData.find((item) => item.id === specId)?.thicknessOptions.find((item) => getGalvanizedPipeThicknessId(item.thicknessMm) === thicknessId);
	return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}
function getGalvanizedSheetPipeSelectedSpecLabel(specId, locale) {
	const spec = galvanizedSheetPipeData.find((item) => item.id === specId);
	return spec ? formatGalvanizedSheetPipeSpec(spec, locale) : "";
}
function getGalvanizedSheetPipeSelectedThicknessLabel(specId, thicknessId, locale) {
	const thickness = galvanizedSheetPipeData.find((item) => item.id === specId)?.thicknessOptions.find((item) => getGalvanizedSheetPipeThicknessId(item.thicknessMm) === thicknessId);
	return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}
function getBlackSteelPipeSelectedSpecLabel(specId, locale) {
	const spec = blackSteelPipeData.find((item) => item.id === specId);
	return spec ? formatBlackSteelPipeSpec(spec, locale) : "";
}
function getBlackSteelPipeSelectedThicknessLabel(specId, thicknessId, locale) {
	const thickness = blackSteelPipeData.find((item) => item.id === specId)?.thicknessOptions.find((item) => getBlackSteelPipeThicknessId(item.thicknessMm) === thicknessId);
	return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}
function getSquareTubeSelectedSpecLabel(productType, specId) {
	const spec = getSquareTubeData(productType).find((item) => item.id === specId);
	return spec ? formatGalvanizedSquareRectangularTubeSpec(spec) : "";
}
function getSquareTubeSelectedThicknessLabel(productType, specId, thicknessId, locale) {
	const thickness = getSquareTubeData(productType).find((item) => item.id === specId)?.thicknessOptions.find((item) => getSquareTubeThicknessId(productType, item.thicknessMm) === thicknessId);
	return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}
function getAngleSteelSelectedSpecLabel(specId) {
	const spec = angleSteelSpecifications.find((item) => item.id === specId);
	return spec ? formatAngleSteelSpec(spec) : "";
}
function getAngleSteelSelectedThicknessLabel(specId, thicknessId, locale) {
	const thickness = angleSteelSpecifications.find((item) => item.id === specId)?.thicknessOptions.find((item) => getAngleSteelThicknessId(item.thicknessMm) === thicknessId);
	return thickness ? formatThicknessValue(thickness.thicknessMm, locale) : "";
}
function formatChannelSteelSpec(nominalSize) {
	return `${nominalSize}#`;
}
function formatChannelSteelReferenceWeight(weightKg, locale) {
	return locale === "zh" ? `${formatNumber(weightKg, 2, locale)} kg/支` : `${formatNumber(weightKg, 2, locale)} kg/piece`;
}
function formatChannelSteelPiecesPerBundle(piecesPerBundle, locale) {
	return locale === "zh" ? `每扎${piecesPerBundle}支` : `${piecesPerBundle} pieces/bundle`;
}
function getChannelSteelSelectedSpecLabel(specId) {
	const spec = channelSteelData.find((item) => item.id === specId);
	return spec ? formatChannelSteelSpec(spec.nominalSize) : "";
}
function getChannelSteelSelectedWeightOption(specId, referenceWeightId) {
	return channelSteelData.find((item) => item.id === specId)?.weightOptions.find((item) => item.id === referenceWeightId);
}
function getChannelSteelSelectedReferenceWeightLabel(specId, referenceWeightId, locale) {
	const option = getChannelSteelSelectedWeightOption(specId, referenceWeightId);
	return option ? formatChannelSteelReferenceWeight(option.referenceWeightKgPerPiece, locale) : "";
}
function getChannelSteelSelectedBundleLabel(specId, referenceWeightId, locale) {
	const option = getChannelSteelSelectedWeightOption(specId, referenceWeightId);
	return option ? formatChannelSteelPiecesPerBundle(option.piecesPerBundle, locale) : "";
}
function getStandardSteelPipeLengthM(row) {
	if (row.productType === "black_steel_pipe" && row.dimensionMode !== "custom") return (blackSteelPipeData.find((item) => item.id === row.specId)?.thicknessOptions.find((item) => getBlackSteelPipeThicknessId(item.thicknessMm) === row.thicknessId))?.standardLengthM ?? 6;
	return 6;
}
function isFixedLengthStandardSteelPipeRow(row) {
	return (row.productType === "galvanized_pipe" || row.productType === "galvanized_sheet_pipe" || row.productType === "black_steel_pipe" || isSquareTubeProduct(row.productType) || row.productType === "angle_steel" || row.productType === "channel_steel") && ("dimensionMode" in row ? row.dimensionMode !== "custom" : true);
}
function getDisplayLengthM(row) {
	return isFixedLengthStandardSteelPipeRow(row) ? getStandardSteelPipeLengthM(row) : row.lengthM;
}
function getRowDescription(row, locale, m) {
	if (isSteelPipeProduct(row.productType)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.outerDiameter} ${row.customOuterDiameterMm || 0} ${locale === "zh" ? "mm" : "mm"} / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [row.productType === "galvanized_pipe" ? getGalvanizedPipeSelectedSpecLabel(row.specId, locale) : row.productType === "galvanized_sheet_pipe" ? getGalvanizedSheetPipeSelectedSpecLabel(row.specId, locale) : row.productType === "black_steel_pipe" ? getBlackSteelPipeSelectedSpecLabel(row.specId, locale) : row.specId, row.productType === "galvanized_pipe" ? getGalvanizedPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale) : row.productType === "galvanized_sheet_pipe" ? getGalvanizedSheetPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale) : row.productType === "black_steel_pipe" ? getBlackSteelPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale) : row.thicknessId].filter(Boolean).join(" / ");
	}
	if (isSquareTubeProduct(row.productType)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${row.customWidthMm || 0}×${row.customHeightMm || 0} mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [getSquareTubeSelectedSpecLabel(row.productType, row.specId), getSquareTubeSelectedThicknessLabel(row.productType, row.specId, row.thicknessId, locale)].filter(Boolean).join(" / ");
	}
	if (row.productType === "angle_steel") {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${row.customLegAMm || 0}×${row.customLegBMm || 0} mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [getAngleSteelSelectedSpecLabel(row.specId), getAngleSteelSelectedThicknessLabel(row.specId, row.thicknessId, locale)].filter(Boolean).join(" / ");
	}
	if (row.productType === "channel_steel") return [getChannelSteelSelectedSpecLabel(row.specId), getChannelSteelSelectedReferenceWeightLabel(row.specId, row.referenceWeightId, locale)].filter(Boolean).join(" / ");
	const option = groovedFittingOptions.find((item) => item.fittingTypeId === row.fittingTypeId && item.nominalSizeId === row.nominalSizeId && item.modelId === row.modelId);
	return option ? `${option.fittingTypeLabel} / ${option.nominalSizeLabel} / ${option.modelLabel}` : [
		row.fittingTypeId,
		row.nominalSizeId,
		row.modelId
	].filter(Boolean).join(" / ");
}
function uniqueBy(items, key) {
	return items.filter((item, index) => {
		return items.findIndex((candidate) => key(candidate) === key(item)) === index;
	});
}
function normalizeStoredMaterialList(value) {
	return { modules: value.modules.map((module) => {
		const productType = module.productType === "square_tube" ? "galvanized_square_rectangular_tube" : module.productType;
		return {
			...module,
			productType,
			rows: module.rows.map((row) => {
				const normalizedRow = row.productType === "round_pipe" ? {
					...row,
					productType: "galvanized_pipe"
				} : row.productType === "square_tube" ? {
					...row,
					productType: "galvanized_square_rectangular_tube"
				} : row;
				if (normalizedRow.productType === "channel_steel") {
					const firstSpec = channelSteelData[0];
					const matchingSpec = channelSteelData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
					const referenceWeightId = "referenceWeightId" in normalizedRow ? normalizedRow.referenceWeightId : "";
					const matchingWeight = matchingSpec?.weightOptions.find((option) => option.id === referenceWeightId) ?? matchingSpec?.weightOptions[0];
					return {
						...normalizedRow,
						specId: matchingSpec?.id ?? "",
						referenceWeightId: matchingWeight?.id ?? "",
						lengthM: 6,
						quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
					};
				}
				if (isSteelPipeProduct(normalizedRow.productType) || isSquareTubeProduct(normalizedRow.productType) || normalizedRow.productType === "angle_steel") {
					const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
					const dimensionMode = normalizedRow.dimensionMode ?? "standard";
					if (isSquareTubeProduct(normalizedRow.productType) && dimensionMode === "standard") {
						const squareTubeData = getSquareTubeData(normalizedRow.productType);
						const firstSpec = squareTubeData[0];
						const matchingSpec = squareTubeData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
						const matchingThickness = matchingSpec?.thicknessOptions.find((thickness) => getSquareTubeThicknessId(normalizedRow.productType, thickness.thicknessMm) === normalizedRow.thicknessId) ?? matchingSpec?.thicknessOptions[0];
						return {
							...normalizedRow,
							dimensionMode,
							specId: matchingSpec?.id ?? "",
							thicknessId: matchingThickness ? getSquareTubeThicknessId(normalizedRow.productType, matchingThickness.thicknessMm) : "",
							lengthM: 6,
							quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
						};
					}
					if (normalizedRow.productType === "angle_steel" && dimensionMode === "standard") {
						const firstSpec = angleSteelSpecifications[0];
						const matchingSpec = angleSteelSpecifications.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
						const matchingThickness = matchingSpec?.thicknessOptions.find((thickness) => getAngleSteelThicknessId(thickness.thicknessMm) === normalizedRow.thicknessId) ?? matchingSpec?.thicknessOptions[0];
						return {
							...normalizedRow,
							dimensionMode,
							specId: matchingSpec?.id ?? "",
							thicknessId: matchingThickness ? getAngleSteelThicknessId(matchingThickness.thicknessMm) : "",
							lengthM: 6,
							quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
						};
					}
					return {
						...normalizedRow,
						dimensionMode,
						lengthM: (normalizedRow.productType === "galvanized_pipe" || normalizedRow.productType === "galvanized_sheet_pipe") && dimensionMode === "standard" ? 6 : lengthM,
						quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
					};
				}
				return {
					...normalizedRow,
					quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
				};
			})
		};
	}) };
}
function Home() {
	const [locale, setLocale] = (0, import_react.useState)("zh");
	const [materialList, setMaterialList] = (0, import_react.useState)({ modules: [] });
	const [hasRestoredMaterialList, setHasRestoredMaterialList] = (0, import_react.useState)(false);
	const m = messages[locale];
	const [activeProduct, setActiveProduct] = (0, import_react.useState)(null);
	const [isRfqOpen, setIsRfqOpen] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [customer, setCustomer] = (0, import_react.useState)({
		name: "",
		company: "",
		country: "",
		whatsapp: "",
		email: "",
		port: "",
		notes: ""
	});
	const moduleRefs = (0, import_react.useRef)({});
	(0, import_react.useEffect)(() => {
		window.setTimeout(() => {
			const saved = window.localStorage.getItem(STORAGE_KEY);
			if (saved) try {
				setMaterialList(normalizeStoredMaterialList(JSON.parse(saved)));
			} catch {
				window.localStorage.removeItem(STORAGE_KEY);
			}
			setHasRestoredMaterialList(true);
		}, 0);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hasRestoredMaterialList) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(materialList));
	}, [hasRestoredMaterialList, materialList]);
	(0, import_react.useEffect)(() => {
		const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
		if (isLocale(savedLocale)) window.setTimeout(() => setLocale(savedLocale), 0);
	}, []);
	function switchLocale(nextLocale) {
		setLocale(nextLocale);
		window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
	}
	const summary = (0, import_react.useMemo)(() => calculateSummary(materialList), [materialList]);
	const rfqText = (0, import_react.useMemo)(() => {
		if (locale === "en") {
			const lines = [
				m.inquiry.rfqHeader,
				"",
				`${m.inquiry.customerName}: ${customer.name || "-"}`,
				`${m.inquiry.companyName}: ${customer.company || "-"}`,
				`${m.inquiry.country}: ${customer.country || "-"}`,
				`${m.inquiry.whatsapp}: ${customer.whatsapp || "-"}`,
				`${m.inquiry.email}: ${customer.email || "-"}`,
				`${m.inquiry.destinationPort}: ${customer.port || "-"}`,
				"",
				`${m.inquiry.listTitle}:`
			];
			materialList.modules.forEach((module) => {
				lines.push(`\n${productName(module.productType, m)}`);
				module.rows.forEach((row, index) => {
					const calc = calculateRow(row);
					const description = getRowDescription(row, locale, m) || m.materialList.specPending;
					lines.push(`${index + 1}. ${description}`);
					if ("lengthM" in row) lines.push(`${m.fields.length}: ${formatLength(getDisplayLengthM(row), locale)}`);
					lines.push(`${m.fields.quantity}: ${formatQuantity(row.quantity, row.quantityUnit, locale)}`);
					if ((row.productType === "pre_galvanized_square_rectangular_tube" || row.productType === "angle_steel" || row.productType === "channel_steel") && calc.hasWeight) lines.push(`${m.fields.pieceWeight}: ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`);
					lines.push(`${m.fields.totalWeight}: ${calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending}`);
				});
			});
			lines.push("");
			lines.push(`${m.summary.theoreticalWeight}: ${formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)}`);
			lines.push(`${m.summary.containerEstimate}: ${summary.containerCount} × 40HQ`);
			if (summary.missingWeightRowCount > 0) lines.push(`${m.summary.missingWeight}: ${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`);
			lines.push(`${m.inquiry.destinationPort}: ${customer.port || "-"}`);
			lines.push(`${m.inquiry.notes}: ${customer.notes || "-"}`);
			lines.push("");
			lines.push("Please send me your quotation.");
			return lines.join("\n");
		}
		const lines = [
			m.inquiry.rfqHeader,
			"",
			`${m.inquiry.customerName}：${customer.name || "-"}`,
			`${m.inquiry.companyName}：${customer.company || "-"}`,
			`${m.inquiry.country}：${customer.country || "-"}`,
			`${m.inquiry.whatsapp}：${customer.whatsapp || "-"}`,
			`${m.inquiry.email}：${customer.email || "-"}`,
			`${m.inquiry.destinationPort}：${customer.port || "-"}`,
			"",
			`${m.inquiry.listTitle}：`
		];
		materialList.modules.forEach((module) => {
			lines.push(`\n${productName(module.productType, m)}`);
			module.rows.forEach((row, index) => {
				const calc = calculateRow(row);
				const description = getRowDescription(row, locale, m) || m.materialList.specPending;
				const length = "lengthM" in row ? `，${m.fields.length} ${formatLength(getDisplayLengthM(row), locale)}` : "";
				const pieceWeight = row.productType === "pre_galvanized_square_rectangular_tube" && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : row.productType === "angle_steel" && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : row.productType === "channel_steel" && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : "";
				lines.push(`${index + 1}. ${description}${length}，${m.fields.quantity} ${formatQuantity(row.quantity, row.quantityUnit, locale)}${pieceWeight}，${m.fields.totalWeight} ${calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending}`);
			});
		});
		lines.push("");
		lines.push(`${m.summary.theoreticalWeight}：${formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)}`);
		lines.push(`${m.summary.containerEstimate}：${summary.containerCount > 0 ? `${m.summary.estimated} ${summary.containerCount} × 40HQ` : `${m.summary.estimated} 0 × 40HQ`}`);
		if (summary.missingWeightRowCount > 0) lines.push(`${m.summary.missingWeight}：${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`);
		lines.push(`${m.inquiry.notes}：${customer.notes || "-"}`);
		return lines.join("\n");
	}, [
		customer,
		locale,
		m,
		materialList,
		summary
	]);
	function addProduct(productType) {
		setActiveProduct(productType);
		setMaterialList((current) => {
			if (current.modules.find((module) => module.productType === productType)) return { modules: current.modules.map((module) => module.productType === productType ? {
				...module,
				rows: [...module.rows, createEmptyRow(productType)]
			} : module) };
			return { modules: [...current.modules, {
				id: createId("module"),
				productType,
				rows: [createEmptyRow(productType)]
			}] };
		});
		window.setTimeout(() => {
			moduleRefs.current[productType]?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 80);
	}
	function addRow(productType) {
		addProduct(productType);
	}
	function addCustomRow(productType) {
		setActiveProduct(productType);
		setMaterialList((current) => {
			if (current.modules.find((module) => module.productType === productType)) return { modules: current.modules.map((module) => module.productType === productType ? {
				...module,
				rows: [...module.rows, createCustomRow(productType)]
			} : module) };
			return { modules: [...current.modules, {
				id: createId("module"),
				productType,
				rows: [createCustomRow(productType)]
			}] };
		});
		window.setTimeout(() => {
			moduleRefs.current[productType]?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 80);
	}
	function updateRow(rowId, updates) {
		setMaterialList((current) => ({ modules: current.modules.map((module) => ({
			...module,
			rows: module.rows.map((row) => row.id === rowId ? {
				...row,
				...updates
			} : row)
		})) }));
	}
	function deleteRow(moduleId, rowId) {
		setMaterialList((current) => ({ modules: current.modules.map((module) => module.id === moduleId ? {
			...module,
			rows: module.rows.filter((row) => row.id !== rowId)
		} : module) }));
	}
	function duplicateRow(moduleId, row) {
		setMaterialList((current) => ({ modules: current.modules.map((module) => module.id === moduleId ? {
			...module,
			rows: module.rows.flatMap((item) => item.id === row.id ? [item, {
				...row,
				id: createId("row")
			}] : [item])
		} : module) }));
	}
	function deleteModule(moduleId) {
		setMaterialList((current) => ({ modules: current.modules.filter((module) => module.id !== moduleId) }));
	}
	function clearAll() {
		setMaterialList({ modules: [] });
	}
	async function copyRfq() {
		await navigator.clipboard.writeText(rfqText);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-100 pb-32 text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-slate-800 bg-[#0e2a47] text-white shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/canhope-logo.png",
									alt: "CANHOPE STEEL logo",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-bold leading-5 tracking-normal",
									children: "CANHOPE STEEL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs text-blue-100",
									children: m.nav.subtitle
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-5 text-sm text-blue-100 md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: `nav-link ${locale === "zh" ? "text-white" : ""}`,
											type: "button",
											onClick: () => switchLocale("zh"),
											children: m.nav.languageZh
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-200",
											children: "|"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: `nav-link ${locale === "en" ? "text-white" : ""}`,
											type: "button",
											onClick: () => switchLocale("en"),
											children: m.nav.languageEn
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "nav-link",
									type: "button",
									children: m.nav.instructions
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "primary-button",
									type: "button",
									onClick: () => setIsRfqOpen(true),
									children: [
										m.nav.sendRfq,
										" ",
										summary.validRowCount
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "primary-button md:hidden",
							type: "button",
							onClick: () => setIsRfqOpen(true),
							children: [
								m.nav.mobileRfq,
								" ",
								summary.validRowCount
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[1500px] px-4 py-5 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-bold text-slate-950",
							children: m.company.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase text-[#0e5f9f]",
							children: m.company.englishName
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl text-sm leading-6 text-slate-600",
							children: [m.company.description, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "ml-2 font-semibold text-[#0e5f9f]",
								href: "https://canhopesteel.com",
								target: "_blank",
								children: "canhopesteel.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "intro-tags",
							children: m.company.tags.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-[1500px] gap-5 px-4 sm:px-6 min-[900px]:grid-cols-[270px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "sidebar-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-base font-bold text-slate-950",
						children: m.materialList.addHint
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-bold uppercase text-slate-500",
							children: categoryName(category, m)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2",
							children: productDefinitions.filter((product) => product.category === category).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `product-button ${activeProduct === product.type ? "is-active" : ""}`,
								type: "button",
								onClick: () => addProduct(product.type),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: productName(product.type, m) })
							}, product.type))
						})] }, category))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "content-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex flex-col gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-normal text-slate-950",
							children: m.materialList.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-500",
							children: m.materialList.subtitle
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "status-pill",
								children: m.materialList.demoMode
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "secondary-button",
								type: "button",
								onClick: clearAll,
								children: m.actions.clearAll
							})]
						})]
					}), materialList.modules.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold text-slate-950",
							children: m.materialList.emptyTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-6 text-slate-500",
							children: m.materialList.emptyDescription
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: materialList.modules.map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModule, {
							module,
							setModuleRef: (node) => {
								moduleRefs.current[module.productType] = node;
							},
							onAddRow: addRow,
							onAddCustomRow: addCustomRow,
							onDeleteModule: deleteModule,
							onUpdateRow: updateRow,
							onDeleteRow: deleteRow,
							onDuplicateRow: duplicateRow,
							locale,
							m
						}, module.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBar, {
				summary,
				onOpenRfq: () => setIsRfqOpen(true),
				locale,
				m
			}),
			isRfqOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RfqModal, {
				customer,
				setCustomer,
				materialList,
				summary,
				rfqText,
				copied,
				onCopy: copyRfq,
				onClose: () => setIsRfqOpen(false),
				locale,
				m
			}) : null
		]
	});
}
function ProductModule({ module, setModuleRef, onAddRow, onAddCustomRow, onDeleteModule, onUpdateRow, onDeleteRow, onDuplicateRow, locale, m }) {
	const subtotal = calculateModuleSubtotal(module);
	const missingRows = module.rows.filter((row) => row.quantity > 0 && !calculateRow(row).hasWeight).length;
	const subtotalLabel = missingRows > 0 && subtotal === 0 ? m.notices.weightPending : missingRows > 0 ? `${formatTonFromKg(subtotal, locale, m.notices.weightPending)}，${m.summary.additionalMissingRows.replace("{count}", String(missingRows))}` : formatTonFromKg(subtotal, locale, m.notices.weightPending);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: setModuleRef,
		className: "module-card scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "module-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-lg font-bold text-slate-950",
					children: [
						productName(module.productType, m),
						"（",
						module.rows.length,
						" ",
						m.materialList.rows,
						"）"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-slate-500",
					children: [
						m.materialList.subtotal,
						"：",
						subtotalLabel
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "small-blue-button",
						type: "button",
						onClick: () => onAddRow(module.productType),
						children: m.actions.addSpec
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "secondary-button",
						type: "button",
						onClick: () => onDeleteModule(module.id),
						children: m.actions.deleteModule
					})]
				})]
			}),
			module.rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500",
				children: m.materialList.noRows
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-x-auto md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "material-table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTableHead, {
						productType: module.productType,
						m
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: module.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, {
						row,
						moduleId: module.id,
						onUpdateRow,
						onDeleteRow,
						onDuplicateRow,
						onAddCustomRow,
						locale,
						m
					}, row.id)) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:hidden",
				children: module.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileRowCard, {
					row,
					moduleId: module.id,
					onUpdateRow,
					onDeleteRow,
					onDuplicateRow,
					onAddCustomRow,
					locale,
					m
				}, row.id))
			})] }),
			isSteelPipeProduct(module.productType) || isSquareTubeProduct(module.productType) || module.productType === "angle_steel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "custom-size-link",
				type: "button",
				onClick: () => onAddCustomRow(module.productType),
				children: [
					m.customSize.noSuitableSpec,
					locale === "zh" ? "" : " ",
					m.customSize.useCustomSize
				]
			}) : null
		]
	});
}
function ProductTableHead({ productType, m }) {
	const commonEnd = [
		m.fields.quantity,
		m.fields.unitWeight,
		m.fields.pieceWeightFull,
		m.fields.totalWeight,
		m.fields.action
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: (isSteelPipeProduct(productType) || isSquareTubeProduct(productType) ? [
		m.fields.spec,
		getStandardOptionLabel(productType, m),
		m.fields.length,
		...commonEnd
	] : productType === "angle_steel" ? [
		m.fields.spec,
		getStandardOptionLabel(productType, m),
		m.fields.length,
		...commonEnd
	] : productType === "channel_steel" ? [
		m.fields.spec,
		getStandardOptionLabel(productType, m),
		m.fields.length,
		m.fields.quantity,
		m.fields.piecesPerBundle,
		m.fields.unitWeight,
		m.fields.pieceWeightFull,
		m.fields.totalWeight,
		m.fields.action
	] : [
		m.fields.fittingType,
		m.fields.size,
		m.fields.modelOrAngle,
		...commonEnd
	]).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: column }, column)) }) });
}
function ProductRow({ row, moduleId, onUpdateRow, onDeleteRow, onDuplicateRow, onAddCustomRow, locale, m }) {
	const calc = calculateRow(row);
	const actionCells = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeightCell, {
			calculation: calc,
			locale,
			m
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightPending) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingWeight, { m }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "font-bold text-slate-950",
			children: calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingWeight, { m })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "row-actions",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onDuplicateRow(moduleId, row),
				children: m.actions.copy
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onDeleteRow(moduleId, row.id),
				children: m.actions.delete
			})]
		}) })
	] });
	if (isSteelPipeProduct(row.productType)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		row.dimensionMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomRoundCells, {
			row,
			onUpdateRow,
			m
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SteelPipeSpecSelect, {
			productType: row.productType,
			value: row.specId,
			onChange: (specId) => onUpdateRow(row.id, {
				specId,
				thicknessId: ""
			}),
			locale,
			m
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SteelPipeThicknessSelect, {
			productType: row.productType,
			specId: row.specId,
			value: row.thicknessId,
			onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
			locale,
			m
		}) })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LengthInput, {
			row,
			onUpdateRow,
			onAddCustomRow,
			locale,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityInput, {
			row,
			onUpdateRow,
			locale
		}),
		actionCells
	] });
	if (isSquareTubeProduct(row.productType)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		row.dimensionMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSquareCells, {
			row,
			onUpdateRow,
			m
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTubeSpecSelect, {
			productType: row.productType,
			value: row.specId,
			onChange: (specId) => {
				const nextThickness = getSquareTubeData(row.productType).find((spec) => spec.id === specId)?.thicknessOptions[0];
				onUpdateRow(row.id, {
					specId,
					thicknessId: nextThickness ? getSquareTubeThicknessId(row.productType, nextThickness.thicknessMm) : "",
					lengthM: 6
				});
			},
			m
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTubeThicknessSelect, {
			productType: row.productType,
			specId: row.specId,
			value: row.thicknessId,
			onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
			locale,
			m
		}) })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LengthInput, {
			row,
			onUpdateRow,
			onAddCustomRow,
			locale,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityInput, {
			row,
			onUpdateRow,
			locale
		}),
		actionCells
	] });
	if (row.productType === "angle_steel") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		row.dimensionMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAngleCells, {
			row,
			onUpdateRow,
			m
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngleSteelSpecSelect, {
			value: row.specId,
			onChange: (specId) => {
				const nextThickness = angleSteelSpecifications.find((spec) => spec.id === specId)?.thicknessOptions[0];
				onUpdateRow(row.id, {
					specId,
					thicknessId: nextThickness ? getAngleSteelThicknessId(nextThickness.thicknessMm) : "",
					lengthM: 6
				});
			},
			m
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngleSteelThicknessSelect, {
			specId: row.specId,
			value: row.thicknessId,
			onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
			locale,
			m
		}) })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LengthInput, {
			row,
			onUpdateRow,
			onAddCustomRow,
			locale,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityInput, {
			row,
			onUpdateRow,
			locale
		}),
		actionCells
	] });
	if (row.productType === "channel_steel") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelSteelSpecSelect, {
			value: row.specId,
			onChange: (specId) => {
				const nextWeight = channelSteelData.find((spec) => spec.id === specId)?.weightOptions[0];
				onUpdateRow(row.id, {
					specId,
					referenceWeightId: nextWeight?.id ?? "",
					lengthM: 6
				});
			},
			m
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelSteelReferenceWeightSelect, {
			specId: row.specId,
			value: row.referenceWeightId,
			onChange: (referenceWeightId) => onUpdateRow(row.id, { referenceWeightId }),
			locale,
			m
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LengthInput, {
			row,
			onUpdateRow,
			locale,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityInput, {
			row,
			onUpdateRow,
			locale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: getChannelSteelSelectedBundleLabel(row.specId, row.referenceWeightId, locale) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingWeight, { m }) }),
		actionCells
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroovedFittingFields, {
			row,
			onUpdateRow,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityInput, {
			row,
			onUpdateRow,
			locale
		}),
		actionCells
	] });
}
function MobileRowCard({ row, moduleId, onUpdateRow, onDeleteRow, onDuplicateRow, onAddCustomRow, locale, m }) {
	const calc = calculateRow(row);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mobile-row-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-slate-950",
					children: getRowDescription(row, locale, m) || m.materialList.specPending
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-slate-500",
					children: [
						"lengthM" in row ? `${m.fields.length} ${formatLength(getDisplayLengthM(row), locale)} · ` : "",
						m.fields.quantity,
						" ",
						formatQuantity(row.quantity, row.quantityUnit, locale)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-right text-sm font-bold text-slate-950",
					children: calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRowFields, {
					row,
					onUpdateRow,
					onAddCustomRow,
					locale,
					m
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-3 gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500",
						children: m.fields.unitWeight
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: calc.hasWeight ? `${formatNumber(calc.unitWeightKg ?? 0, 2, locale)} ${formatUnitWeightLabel(calc.unitWeightLabel, locale)}` : m.notices.weightPending })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500",
						children: m.fields.pieceWeight
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightPending) : m.notices.weightPending })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-actions justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onDuplicateRow(moduleId, row),
							children: m.actions.copy
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onDeleteRow(moduleId, row.id),
							children: m.actions.delete
						})]
					})
				]
			})
		]
	});
}
function ProductRowFields({ row, onUpdateRow, onAddCustomRow, locale, m }) {
	if (isSteelPipeProduct(row.productType) || isSquareTubeProduct(row.productType)) {
		if (row.dimensionMode === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isSteelPipeProduct(row.productType) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.outerDiameter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customOuterDiameterMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customOuterDiameterMm: value })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customThicknessMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customThicknessMm: value })
			})]
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.width, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customWidthMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customWidthMm: value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.height, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customHeightMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customHeightMm: value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customThicknessMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customThicknessMm: value })
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
			row,
			onUpdateRow,
			onAddCustomRow,
			locale,
			m
		})] });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.spec, isSteelPipeProduct(row.productType) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SteelPipeSpecSelect, {
					productType: row.productType,
					value: row.specId,
					onChange: (specId) => onUpdateRow(row.id, {
						specId,
						thicknessId: ""
					}),
					locale,
					m
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTubeSpecSelect, {
					productType: row.productType,
					value: row.specId,
					onChange: (specId) => {
						const nextThickness = getSquareTubeData(row.productType).find((spec) => spec.id === specId)?.thicknessOptions[0];
						onUpdateRow(row.id, {
							specId,
							thicknessId: nextThickness ? getSquareTubeThicknessId(row.productType, nextThickness.thicknessMm) : "",
							lengthM: 6
						});
					},
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.thickness, isSteelPipeProduct(row.productType) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SteelPipeThicknessSelect, {
					productType: row.productType,
					specId: row.specId,
					value: row.thicknessId,
					onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
					locale,
					m
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTubeThicknessSelect, {
					productType: row.productType,
					specId: row.specId,
					value: row.thicknessId,
					onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
					locale,
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
				row,
				onUpdateRow,
				onAddCustomRow,
				locale,
				m
			})
		] });
	}
	if (row.productType === "angle_steel") {
		if (row.dimensionMode === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.legA, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customLegAMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customLegAMm: value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.legB, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customLegBMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customLegBMm: value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customThicknessMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customThicknessMm: value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
				row,
				onUpdateRow,
				onAddCustomRow,
				locale,
				m
			})
		] });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.spec, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngleSteelSpecSelect, {
					value: row.specId,
					onChange: (specId) => {
						const nextThickness = angleSteelSpecifications.find((spec) => spec.id === specId)?.thicknessOptions[0];
						onUpdateRow(row.id, {
							specId,
							thicknessId: nextThickness ? getAngleSteelThicknessId(nextThickness.thicknessMm) : "",
							lengthM: 6
						});
					},
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngleSteelThicknessSelect, {
					specId: row.specId,
					value: row.thicknessId,
					onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
					locale,
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
				row,
				onUpdateRow,
				onAddCustomRow,
				locale,
				m
			})
		] });
	}
	if (row.productType === "channel_steel") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.spec, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelSteelSpecSelect, {
				value: row.specId,
				onChange: (specId) => {
					const nextWeight = channelSteelData.find((spec) => spec.id === specId)?.weightOptions[0];
					onUpdateRow(row.id, {
						specId,
						referenceWeightId: nextWeight?.id ?? "",
						lengthM: 6
					});
				},
				m
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.theoreticalWeight, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelSteelReferenceWeightSelect, {
				specId: row.specId,
				value: row.referenceWeightId,
				onChange: (referenceWeightId) => onUpdateRow(row.id, { referenceWeightId }),
				locale,
				m
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
			row,
			onUpdateRow,
			locale,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.piecesPerBundle, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field",
				readOnly: true,
				value: getChannelSteelSelectedBundleLabel(row.specId, row.referenceWeightId, locale)
			})]
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroovedFittingFields, {
		row,
		onUpdateRow,
		isMobile: true,
		m
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mobile-field-label",
		children: [m.fields.quantity, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			min: "0",
			type: "number",
			value: row.quantity,
			onChange: (event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })
		})]
	})] });
}
function MobileLengthQuantity({ row, onUpdateRow, onAddCustomRow, locale, m }) {
	const locked = isFixedLengthStandardSteelPipeRow(row);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mobile-field-label",
		children: [m.fields.length, locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockedLengthField, {
			productType: row.productType,
			onAddCustomRow,
			locale,
			m,
			lengthM: getDisplayLengthM(row)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			min: "0",
			step: "0.1",
			type: "number",
			value: row.lengthM,
			onChange: (event) => onUpdateRow(row.id, { lengthM: Number(event.target.value) })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mobile-field-label",
		children: [m.fields.quantity, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			min: "0",
			type: "number",
			value: row.quantity,
			onChange: (event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })
		})]
	})] });
}
function CustomRoundCells({ row, onUpdateRow, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.customOuterDiameter }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customOuterDiameterMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customOuterDiameterMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.thickness }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customThicknessMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customThicknessMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) })] });
}
function CustomSquareCells({ row, onUpdateRow, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field custom-dimension-field-wide",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.width }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customWidthMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customWidthMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.height }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customHeightMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customHeightMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.thickness }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customThicknessMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customThicknessMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) })] });
}
function CustomAngleCells({ row, onUpdateRow, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field custom-dimension-field-wide",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.legA }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customLegAMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customLegAMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.legB }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customLegBMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customLegBMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.thickness }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customThicknessMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customThicknessMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) })] });
}
function NumberField({ value, onChange, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: `field ${className}`,
		min: "0",
		step: "0.1",
		type: "number",
		value,
		onChange: (event) => onChange(Number(event.target.value))
	});
}
function SteelPipeSpecSelect({ productType, value, onChange, locale, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: productType === "galvanized_pipe" || productType === "galvanized_sheet_pipe" || productType === "black_steel_pipe" ? m.fields.selectSpec : m.fields.specDataPending
			}),
			productType === "galvanized_pipe" ? galvanizedPipeData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: spec.id,
				children: formatGalvanizedPipeSpec(spec, locale)
			}, spec.id)) : null,
			productType === "galvanized_sheet_pipe" ? galvanizedSheetPipeData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: spec.id,
				children: formatGalvanizedSheetPipeSpec(spec, locale)
			}, spec.id)) : null,
			productType === "black_steel_pipe" ? blackSteelPipeData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: spec.id,
				children: formatBlackSteelPipeSpec(spec, locale)
			}, spec.id)) : null
		]
	});
}
function SteelPipeThicknessSelect({ productType, specId, value, onChange, locale, m }) {
	const thicknesses = productType === "galvanized_pipe" ? galvanizedPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? [] : productType === "galvanized_sheet_pipe" ? galvanizedSheetPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? [] : productType === "black_steel_pipe" ? blackSteelPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? [] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		disabled: !(productType === "galvanized_pipe" || productType === "galvanized_sheet_pipe" || productType === "black_steel_pipe") || !specId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending
		}), thicknesses.map((thickness) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: productType === "galvanized_pipe" ? getGalvanizedPipeThicknessId(thickness.thicknessMm) : productType === "galvanized_sheet_pipe" ? getGalvanizedSheetPipeThicknessId(thickness.thicknessMm) : getBlackSteelPipeThicknessId(thickness.thicknessMm),
			children: formatThicknessValue(thickness.thicknessMm, locale)
		}, productType === "galvanized_pipe" ? getGalvanizedPipeThicknessId(thickness.thicknessMm) : productType === "galvanized_sheet_pipe" ? getGalvanizedSheetPipeThicknessId(thickness.thicknessMm) : getBlackSteelPipeThicknessId(thickness.thicknessMm)))]
	});
}
function SquareTubeSpecSelect({ productType, value, onChange, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.selectSpec
		}), getSquareTubeData(productType).map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: spec.id,
			children: formatGalvanizedSquareRectangularTubeSpec(spec)
		}, spec.id))]
	});
}
function SquareTubeThicknessSelect({ productType, specId, value, onChange, locale, m }) {
	const thicknesses = getSquareTubeData(productType).find((spec) => spec.id === specId)?.thicknessOptions ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		disabled: !specId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending
		}), thicknesses.map((thickness) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: getSquareTubeThicknessId(productType, thickness.thicknessMm),
			children: formatThicknessValue(thickness.thicknessMm, locale)
		}, getSquareTubeThicknessId(productType, thickness.thicknessMm)))]
	});
}
function AngleSteelSpecSelect({ value, onChange, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.selectSpec
		}), angleSteelSpecifications.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: spec.id,
			children: formatAngleSteelSpec(spec)
		}, spec.id))]
	});
}
function AngleSteelThicknessSelect({ specId, value, onChange, locale, m }) {
	const thicknesses = angleSteelSpecifications.find((spec) => spec.id === specId)?.thicknessOptions ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		disabled: !specId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending
		}), thicknesses.map((thickness) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: getAngleSteelThicknessId(thickness.thicknessMm),
			children: formatThicknessValue(thickness.thicknessMm, locale)
		}, getAngleSteelThicknessId(thickness.thicknessMm)))]
	});
}
function ChannelSteelSpecSelect({ value, onChange, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.selectSpec
		}), channelSteelData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: spec.id,
			children: formatChannelSteelSpec(spec.nominalSize)
		}, spec.id))]
	});
}
function ChannelSteelReferenceWeightSelect({ specId, value, onChange, locale, m }) {
	const weightOptions = channelSteelData.find((spec) => spec.id === specId)?.weightOptions ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		disabled: !specId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: weightOptions.length > 0 ? m.fields.selectTheoreticalWeight : m.fields.referenceWeightDataPending
		}), weightOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option.id,
			children: formatChannelSteelReferenceWeight(option.referenceWeightKgPerPiece, locale)
		}, option.id))]
	});
}
function LengthInput({ row, onUpdateRow, onAddCustomRow, locale = "zh", m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: isFixedLengthStandardSteelPipeRow(row) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockedLengthField, {
		productType: row.productType,
		onAddCustomRow,
		locale,
		m,
		lengthM: getDisplayLengthM(row),
		compact: true
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: "field w-20",
		min: "0",
		step: "0.1",
		type: "number",
		value: row.lengthM,
		onChange: (event) => onUpdateRow(row.id, { lengthM: Number(event.target.value) })
	}) });
}
function LockedLengthField({ productType, onAddCustomRow, locale, m, lengthM, compact = false }) {
	const canUseCustomSize = onAddCustomRow && isCustomSizeProduct(productType);
	const tip = canUseCustomSize ? m.customSize.fixedLengthTip : m.customSize.fixedLengthOnlyTip;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `locked-length-field ${compact ? "is-compact" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field locked-length-input",
				readOnly: true,
				type: "text",
				value: formatLength(lengthM, locale),
				"aria-label": tip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "locked-length-badge",
				"aria-hidden": "true",
				children: m.customSize.locked
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "locked-length-tip",
				role: "note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tip }), canUseCustomSize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onAddCustomRow(productType),
					children: m.customSize.useCustomSize
				}) : null]
			})
		]
	});
}
function QuantityInput({ row, onUpdateRow, locale = "zh" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field w-20",
			min: "0",
			type: "number",
			value: row.quantity,
			onChange: (event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-slate-500",
			children: locale === "zh" ? row.quantityUnit : "pcs"
		})]
	}) });
}
function GroovedFittingFields({ row, onUpdateRow, m, isMobile = false }) {
	const fittingTypes = uniqueBy(groovedFittingOptions, (item) => item.fittingTypeId);
	const sizes = uniqueBy(groovedFittingOptions.filter((item) => !row.fittingTypeId || item.fittingTypeId === row.fittingTypeId), (item) => item.nominalSizeId);
	const models = groovedFittingOptions.filter((item) => (!row.fittingTypeId || item.fittingTypeId === row.fittingTypeId) && (!row.nominalSizeId || item.nominalSizeId === row.nominalSizeId));
	const fittingTypeField = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value: row.fittingTypeId,
		onChange: (event) => onUpdateRow(row.id, {
			fittingTypeId: event.target.value,
			nominalSizeId: "",
			modelId: ""
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.fittingType
		}), fittingTypes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: item.fittingTypeId,
			children: item.fittingTypeLabel
		}, item.fittingTypeId))]
	});
	const sizeField = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value: row.nominalSizeId,
		onChange: (event) => onUpdateRow(row.id, {
			nominalSizeId: event.target.value,
			modelId: ""
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.size
		}), sizes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: item.nominalSizeId,
			children: item.nominalSizeLabel
		}, item.nominalSizeId))]
	});
	const modelField = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value: row.modelId,
		onChange: (event) => onUpdateRow(row.id, { modelId: event.target.value }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.modelOrAngle
		}), models.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: item.modelId,
			children: item.modelLabel
		}, `${item.fittingTypeId}-${item.nominalSizeId}-${item.modelId}`))]
	});
	if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.fittingType, fittingTypeField]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.size, sizeField]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.modelOrAngle, modelField]
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fittingTypeField }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: sizeField }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: modelField })
	] });
}
function WeightCell({ calculation, locale, m }) {
	if (!calculation.unitWeightKg) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingWeight, { m });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
		formatNumber(calculation.unitWeightKg, 2, locale),
		" ",
		formatUnitWeightLabel(calculation.unitWeightLabel, locale)
	] });
}
function MissingWeight({ m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "missing-weight",
		children: m.notices.weightPending
	});
}
function SummaryBar({ summary, onOpenRfq, locale, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "summary-bar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "summary-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
					label: m.summary.productCount,
					value: summary.productModuleCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
					label: m.summary.validSpecRows,
					value: summary.validRowCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
					label: m.summary.totalQuantity,
					value: `${formatQuantity(summary.totalQuantityPieces, "支", locale)} / ${formatQuantity(summary.totalQuantityItems, "件", locale)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
					label: m.summary.theoreticalWeight,
					value: formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending),
					strong: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
					label: m.summary.missingWeight,
					value: `${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`,
					warning: summary.missingWeightRowCount > 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-blue-100",
						children: m.summary.containerEstimate
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-base font-bold text-white",
						children: summary.containerCount > 0 ? `${m.summary.estimated} ${summary.containerCount} × 40HQ，${summary.remainingCapacityTon === 0 ? m.summary.capacityReached : `${m.summary.remainingCapacity} ${formatNumber(summary.remainingCapacityTon ?? 0, 2, locale)} ${locale === "zh" ? "吨" : "t"}`}` : `${m.summary.estimated} 0 × 40HQ`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "primary-button h-12",
					type: "button",
					onClick: onOpenRfq,
					children: m.summary.generateRfq
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-xs text-blue-100",
			children: [
				m.container.note,
				locale === "zh" ? "。" : " ",
				m.container.configuredLoad,
				"：",
				formatNumber(CONTAINER_40HQ_TON, 1, locale),
				" ",
				locale === "zh" ? "吨" : "t",
				" / 40HQ."
			]
		})]
	});
}
function SummaryItem({ label, value, strong = false, warning = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-blue-100",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `truncate text-base font-bold ${warning ? "text-orange-300" : strong ? "text-white" : "text-slate-100"}`,
			children: value
		})]
	});
}
function RfqModal({ customer, setCustomer, materialList, summary, rfqText, copied, onCopy, onClose, locale, m }) {
	function updateCustomer(key, value) {
		setCustomer({
			...customer,
			[key]: value
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-backdrop",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": m.inquiry.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 border-b border-slate-200 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-slate-950",
					children: m.inquiry.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500",
					children: m.inquiry.intro
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "secondary-button",
					type: "button",
					onClick: onClose,
					children: m.actions.close
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 py-5 lg:grid-cols-[1.1fr_.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rfq-preview-list",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryTile, {
								label: m.summary.theoreticalWeight,
								value: formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryTile, {
								label: m.summary.containerEstimate,
								value: `${summary.containerCount} × 40HQ`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryTile, {
								label: m.summary.missingWeight,
								value: `${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: materialList.modules.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-500",
							children: m.materialList.currentListEmpty
						}) : materialList.modules.map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-slate-200 bg-white p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-bold text-slate-950",
								children: productName(module.productType, m)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: module.rows.map((row) => {
									const calc = calculateRow(row);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-slate-600",
											children: [
												getRowDescription(row, locale, m) || m.materialList.specPending,
												"，",
												m.fields.quantity,
												" ",
												formatQuantity(row.quantity, row.quantityUnit, locale)
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 font-semibold text-slate-950",
											children: calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightPending) : m.notices.weightPending
										})]
									}, row.id);
								})
							})]
						}, module.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInput, {
									label: m.inquiry.customerName,
									value: customer.name,
									onChange: (value) => updateCustomer("name", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInput, {
									label: m.inquiry.companyName,
									value: customer.company,
									onChange: (value) => updateCustomer("company", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInput, {
									label: m.inquiry.country,
									value: customer.country,
									onChange: (value) => updateCustomer("country", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInput, {
									label: m.inquiry.whatsapp,
									value: customer.whatsapp,
									onChange: (value) => updateCustomer("whatsapp", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInput, {
									label: m.inquiry.email,
									value: customer.email,
									onChange: (value) => updateCustomer("email", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInput, {
									label: m.inquiry.destinationPort,
									value: customer.port,
									onChange: (value) => updateCustomer("port", value)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mobile-field-label",
							children: [m.inquiry.notes, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-24",
								value: customer.notes,
								onChange: (event) => updateCustomer("notes", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "rfq-textarea",
							readOnly: true,
							value: rfqText
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "primary-button w-full justify-center py-3",
							type: "button",
							onClick: onCopy,
							children: copied ? m.inquiry.copied : m.inquiry.copyContent
						})
					]
				})]
			})]
		})
	});
}
function SummaryTile({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-slate-200 bg-slate-50 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-bold text-slate-950",
			children: value
		})]
	});
}
function CustomerInput({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mobile-field-label",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
//#endregion
export { Home as default };
