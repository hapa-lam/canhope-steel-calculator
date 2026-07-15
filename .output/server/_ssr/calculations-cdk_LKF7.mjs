//#region node_modules/.nitro/vite/services/ssr/assets/calculations-cdk_LKF7.js
var contactConfig = {
	email: "info@canhopesteel.com",
	wechat: {
		contactName: "Hapa Lam",
		searchPhoneNumber: "18027418524",
		qrCodePath: "/images/wechat-qrcode.png"
	},
	whatsapp: {
		displayNumber: "+86 18027418524",
		linkNumber: "8618027418524"
	}
};
function formatNumber(value, digits = 2, locale = "zh") {
	return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US", {
		maximumFractionDigits: digits,
		minimumFractionDigits: value % 1 === 0 ? 0 : digits
	}).format(value);
}
function formatKg(value, locale = "zh", pendingLabel = "重量待补充") {
	if (value === void 0 || value === null) return pendingLabel;
	return `${formatNumber(value, 2, locale)} ${locale === "zh" ? "千克" : "kg"}`;
}
function formatTonFromKg(valueKg, locale = "zh", pendingLabel = "重量待补充") {
	if (valueKg === void 0 || valueKg === null) return pendingLabel;
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
function getFlatSteelBarThicknessId(thicknessMm) {
	return `${thicknessMm}mm`;
}
var flatSteelBarData = [
	{
		id: "width20",
		widthMm: 20,
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 2,
			referenceWeightKgPerPiece: 2,
			piecesPerBundle: 2340
		}]
	},
	{
		id: "width25",
		widthMm: 25,
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 2.75,
			referenceWeightKgPerPiece: 3.3,
			piecesPerBundle: 1283
		}, {
			thicknessMm: 3.75,
			referenceWeightKgPerPiece: 4.5,
			piecesPerBundle: 877
		}]
	},
	{
		id: "width30",
		widthMm: 30,
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 2,
			referenceWeightKgPerPiece: 3,
			piecesPerBundle: 1418
		}, {
			thicknessMm: 2.75,
			referenceWeightKgPerPiece: 3.9,
			piecesPerBundle: 1151
		}]
	},
	{
		id: "width40",
		widthMm: 40,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 2,
				referenceWeightKgPerPiece: 3.8,
				piecesPerBundle: 1058
			},
			{
				thicknessMm: 2.75,
				referenceWeightKgPerPiece: 5.2,
				piecesPerBundle: 693
			},
			{
				thicknessMm: 3,
				referenceWeightKgPerPiece: 5.65,
				piecesPerBundle: 743
			},
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 7.1,
				piecesPerBundle: 595
			},
			{
				thicknessMm: 4.75,
				referenceWeightKgPerPiece: 9,
				piecesPerBundle: 450
			}
		]
	},
	{
		id: "width50",
		widthMm: 50,
		referenceLengthM: 6,
		thicknessOptions: [
			{
				thicknessMm: 3.75,
				referenceWeightKgPerPiece: 9,
				piecesPerBundle: 455
			},
			{
				thicknessMm: 4.75,
				referenceWeightKgPerPiece: 11.3,
				piecesPerBundle: 372
			},
			{
				thicknessMm: 5.75,
				referenceWeightKgPerPiece: 13.6,
				piecesPerBundle: 325
			}
		]
	},
	{
		id: "width60",
		widthMm: 60,
		referenceLengthM: 6,
		thicknessOptions: [{
			thicknessMm: 4.75,
			referenceWeightKgPerPiece: 13.5,
			piecesPerBundle: 295
		}, {
			thicknessMm: 5.75,
			referenceWeightKgPerPiece: 16.3,
			piecesPerBundle: 256
		}]
	}
];
function findFlatSteelBarReference(specId, thicknessId) {
	const spec = flatSteelBarData.find((item) => item.id === specId);
	const thickness = spec?.thicknessOptions.find((item) => getFlatSteelBarThicknessId(item.thicknessMm) === thicknessId);
	return spec && thickness ? {
		spec,
		thickness
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
var groovedFittingProducts = [
	{
		"id": "rigid_coupling",
		"nameEn": "Rigid Coupling",
		"nameZh": "刚性卡箍",
		"category": "grooved_fittings",
		"recordCount": 12,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 108,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .69,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 32,
				"cartonWeightKg": 22.08,
				"note": null
			},
			{
				"sourceSequence": 109,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .81,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 24,
				"cartonWeightKg": 19.44,
				"note": null
			},
			{
				"sourceSequence": 110,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1,
				"boltSpec": "M10*65",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 24,
				"cartonWeightKg": 24,
				"note": null
			},
			{
				"sourceSequence": 111,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.29,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 20.64,
				"note": null
			},
			{
				"sourceSequence": 112,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.23,
				"boltSpec": "M12*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 19.68,
				"note": null
			},
			{
				"sourceSequence": 113,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.78,
				"boltSpec": "M12*75",
				"cartonNumber": 15,
				"cartonSize": "45×37×18",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.36,
				"note": null
			},
			{
				"sourceSequence": 114,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.7,
				"boltSpec": "M12*75",
				"cartonNumber": 15,
				"cartonSize": "45×37×18",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 20.4,
				"note": null
			},
			{
				"sourceSequence": 115,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.9,
				"boltSpec": "M12*75",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 22.8,
				"note": null
			},
			{
				"sourceSequence": 116,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.89,
				"boltSpec": "M12*75",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 22.68,
				"note": null
			},
			{
				"sourceSequence": 117,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.5,
				"boltSpec": "M16*100",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 21,
				"note": null
			},
			{
				"sourceSequence": 118,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.78,
				"boltSpec": "M20*140",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 35.12,
				"note": null
			},
			{
				"sourceSequence": 119,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 10.05,
				"boltSpec": "M20*140",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 40.2,
				"note": null
			}
		]
	},
	{
		"id": "flexible_coupling",
		"nameEn": "Flexible Coupling",
		"nameZh": "挠性卡箍",
		"category": "grooved_fittings",
		"recordCount": 12,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 270,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .68,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 32,
				"cartonWeightKg": 21.76,
				"note": null
			},
			{
				"sourceSequence": 271,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .9,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 24,
				"cartonWeightKg": 21.6,
				"note": null
			},
			{
				"sourceSequence": 272,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.03,
				"boltSpec": "M10*65",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 24,
				"cartonWeightKg": 24.72,
				"note": null
			},
			{
				"sourceSequence": 273,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.25,
				"boltSpec": "M12*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 20,
				"note": null
			},
			{
				"sourceSequence": 274,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.32,
				"boltSpec": "M12*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 21.12,
				"note": null
			},
			{
				"sourceSequence": 275,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.67,
				"boltSpec": "M12*75",
				"cartonNumber": 15,
				"cartonSize": "45×37×18",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 20.04,
				"note": null
			},
			{
				"sourceSequence": 276,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.87,
				"boltSpec": "M12*75",
				"cartonNumber": 15,
				"cartonSize": "45×37×18",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 22.44,
				"note": null
			},
			{
				"sourceSequence": 277,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.12,
				"boltSpec": "M12*75",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 25.44,
				"note": null
			},
			{
				"sourceSequence": 278,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.15,
				"boltSpec": "M12*75",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 25.8,
				"note": null
			},
			{
				"sourceSequence": 279,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.38,
				"boltSpec": "M16*100",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 20.28,
				"note": null
			},
			{
				"sourceSequence": 280,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.26,
				"boltSpec": "M20*140",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 29.04,
				"note": null
			},
			{
				"sourceSequence": 281,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.04,
				"boltSpec": "M20*140",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 32.16,
				"note": null
			}
		]
	},
	{
		"id": "elbow_11_25",
		"nameEn": "11.25° Elbow",
		"nameZh": "11.25°弯头",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 1,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .51,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 40,
				"cartonWeightKg": 20.4,
				"note": null
			},
			{
				"sourceSequence": 2,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .58,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 40,
				"cartonWeightKg": 23.2,
				"note": null
			},
			{
				"sourceSequence": 3,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .92,
				"boltSpec": null,
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 40,
				"cartonWeightKg": 36.8,
				"note": null
			},
			{
				"sourceSequence": 4,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.42,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 22.72,
				"note": null
			},
			{
				"sourceSequence": 5,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.14,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 18.24,
				"note": null
			},
			{
				"sourceSequence": 6,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.95,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 19.5,
				"note": null
			},
			{
				"sourceSequence": 7,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.11,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.1,
				"note": null
			},
			{
				"sourceSequence": 8,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.28,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.8,
				"note": null
			},
			{
				"sourceSequence": 9,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.32,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 23.2,
				"note": null
			},
			{
				"sourceSequence": 10,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.93,
				"boltSpec": null,
				"cartonNumber": 12,
				"cartonSize": "52×44×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 29.58,
				"note": null
			},
			{
				"sourceSequence": 11,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.24,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 2,
				"cartonWeightKg": 10.48,
				"note": null
			},
			{
				"sourceSequence": 12,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.08,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 7.08,
				"note": null
			},
			{
				"sourceSequence": 13,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.31,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.31,
				"note": null
			}
		]
	},
	{
		"id": "elbow_22_5",
		"nameEn": "22.5° Elbow",
		"nameZh": "22.5°弯头",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 14,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .58,
				"boltSpec": null,
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 26.1,
				"note": null
			},
			{
				"sourceSequence": 15,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .72,
				"boltSpec": null,
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 40,
				"cartonWeightKg": 28.8,
				"note": null
			},
			{
				"sourceSequence": 16,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .96,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 40,
				"cartonWeightKg": 38.4,
				"note": null
			},
			{
				"sourceSequence": 17,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.86,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 29.76,
				"note": null
			},
			{
				"sourceSequence": 18,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.26,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 20.16,
				"note": null
			},
			{
				"sourceSequence": 19,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.18,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 13.08,
				"note": null
			},
			{
				"sourceSequence": 20,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.22,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 13.32,
				"note": null
			},
			{
				"sourceSequence": 21,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.14,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 18.84,
				"note": null
			},
			{
				"sourceSequence": 22,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.56,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.36,
				"note": null
			},
			{
				"sourceSequence": 23,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.37,
				"boltSpec": null,
				"cartonNumber": 12,
				"cartonSize": "52×44×23",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 21.48,
				"note": null
			},
			{
				"sourceSequence": 24,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.86,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 2,
				"cartonWeightKg": 17.72,
				"note": null
			},
			{
				"sourceSequence": 25,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 11.08,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 11.08,
				"note": null
			},
			{
				"sourceSequence": 26,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 13.27,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 13.27,
				"note": null
			}
		]
	},
	{
		"id": "elbow_45",
		"nameEn": "45° Elbow",
		"nameZh": "45°弯头",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 391,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .63,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 22.68,
				"note": null
			},
			{
				"sourceSequence": 392,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .88,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 17.6,
				"note": null
			},
			{
				"sourceSequence": 393,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.15,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 18.4,
				"note": null
			},
			{
				"sourceSequence": 394,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.66,
				"boltSpec": null,
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 19.92,
				"note": null
			},
			{
				"sourceSequence": 395,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.77,
				"boltSpec": null,
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.24,
				"note": null
			},
			{
				"sourceSequence": 396,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.51,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.06,
				"note": null
			},
			{
				"sourceSequence": 397,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.84,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 17.04,
				"note": null
			},
			{
				"sourceSequence": 398,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.65,
				"boltSpec": null,
				"cartonNumber": 12,
				"cartonSize": "52×44×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 21.9,
				"note": null
			},
			{
				"sourceSequence": 399,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.1,
				"boltSpec": null,
				"cartonNumber": 12,
				"cartonSize": "52×44×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 24.6,
				"note": null
			},
			{
				"sourceSequence": 400,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.96,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 17.92,
				"note": null
			},
			{
				"sourceSequence": 401,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 17.11,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 17.11,
				"note": null
			},
			{
				"sourceSequence": 402,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 29.53,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 29.53,
				"note": null
			},
			{
				"sourceSequence": 403,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 19.06,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 19.06,
				"note": null
			}
		]
	},
	{
		"id": "elbow_90",
		"nameEn": "90° Elbow",
		"nameZh": "90°直角弯头",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 564,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .6,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 50,
				"cartonWeightKg": 30,
				"note": null
			},
			{
				"sourceSequence": 565,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .78,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 40,
				"cartonWeightKg": 31.2,
				"note": null
			},
			{
				"sourceSequence": 566,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.07,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 24,
				"cartonWeightKg": 25.68,
				"note": null
			},
			{
				"sourceSequence": 567,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.6,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 25.6,
				"note": null
			},
			{
				"sourceSequence": 568,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.47,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 16,
				"cartonWeightKg": 23.52,
				"note": null
			},
			{
				"sourceSequence": 569,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.64,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.84,
				"note": null
			},
			{
				"sourceSequence": 570,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.35,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 14.1,
				"note": null
			},
			{
				"sourceSequence": 571,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.16,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 5,
				"cartonWeightKg": 15.8,
				"note": null
			},
			{
				"sourceSequence": 572,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.7,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 5,
				"cartonWeightKg": 13.5,
				"note": null
			},
			{
				"sourceSequence": 573,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.71,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 13.42,
				"note": null
			},
			{
				"sourceSequence": 574,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 9.81,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 9.81,
				"note": null
			},
			{
				"sourceSequence": 575,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 13.7,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 13.7,
				"note": null
			},
			{
				"sourceSequence": 576,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 19.06,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 19.06,
				"note": null
			}
		]
	},
	{
		"id": "equal_tee",
		"nameEn": "Equal Tee",
		"nameZh": "等径三通",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 537,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .95,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 14.25,
				"note": null
			},
			{
				"sourceSequence": 538,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.46,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 21.9,
				"note": null
			},
			{
				"sourceSequence": 539,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.75,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 17.5,
				"note": null
			},
			{
				"sourceSequence": 540,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.3,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 18.4,
				"note": null
			},
			{
				"sourceSequence": 541,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.47,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 19.76,
				"note": null
			},
			{
				"sourceSequence": 542,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.33,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.98,
				"note": null
			},
			{
				"sourceSequence": 543,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.1,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 24.6,
				"note": null
			},
			{
				"sourceSequence": 544,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.3,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 15.9,
				"note": null
			},
			{
				"sourceSequence": 545,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.4,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 16.2,
				"note": null
			},
			{
				"sourceSequence": 546,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 11.85,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 11.85,
				"note": null
			},
			{
				"sourceSequence": 548,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 22.38,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 22.38,
				"note": null
			},
			{
				"sourceSequence": 549,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 37.66,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 37.66,
				"note": null
			},
			{
				"sourceSequence": 550,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 34.85,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 34.85,
				"note": null
			}
		]
	},
	{
		"id": "reducing_tee",
		"nameEn": "Reducing Tee",
		"nameZh": "异径三通",
		"category": "grooved_fittings",
		"recordCount": 93,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 2,
		"threadedOutletRecordCount": 54,
		"records": [
			{
				"sourceSequence": 404,
				"specification": "108×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.31,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 18.48,
				"note": null
			},
			{
				"sourceSequence": 405,
				"specification": "108×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.52,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.16,
				"note": null
			},
			{
				"sourceSequence": 406,
				"specification": "108×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.56,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.48,
				"note": null
			},
			{
				"sourceSequence": 407,
				"specification": "108×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.63,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.04,
				"note": null
			},
			{
				"sourceSequence": 408,
				"specification": "108×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.91,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 23.28,
				"note": null
			},
			{
				"sourceSequence": 409,
				"specification": "108×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.26,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 18.08,
				"note": null
			},
			{
				"sourceSequence": 410,
				"specification": "108×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.71,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.68,
				"note": null
			},
			{
				"sourceSequence": 411,
				"specification": "108×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.68,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.44,
				"note": null
			},
			{
				"sourceSequence": 412,
				"specification": "114×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.9,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 15.2,
				"note": null
			},
			{
				"sourceSequence": 413,
				"specification": "114×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.44,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 19.52,
				"note": null
			},
			{
				"sourceSequence": 414,
				"specification": "114×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.62,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.96,
				"note": null
			},
			{
				"sourceSequence": 415,
				"specification": "114×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.65,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.2,
				"note": null
			},
			{
				"sourceSequence": 416,
				"specification": "114×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.75,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 22,
				"note": null
			},
			{
				"sourceSequence": 417,
				"specification": "114×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.52,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.16,
				"note": null
			},
			{
				"sourceSequence": 418,
				"specification": "114×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.7,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.6,
				"note": null
			},
			{
				"sourceSequence": 419,
				"specification": "114×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.82,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 22.56,
				"note": null
			},
			{
				"sourceSequence": 420,
				"specification": "133×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.88,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 29.28,
				"note": null
			},
			{
				"sourceSequence": 421,
				"specification": "133×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.48,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 26.88,
				"note": null
			},
			{
				"sourceSequence": 422,
				"specification": "133×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.88,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 23.28,
				"note": null
			},
			{
				"sourceSequence": 423,
				"specification": "133×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.87,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 23.22,
				"note": null
			},
			{
				"sourceSequence": 424,
				"specification": "133×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.48,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 20.88,
				"note": null
			},
			{
				"sourceSequence": 425,
				"specification": "133×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.68,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 22.08,
				"note": null
			},
			{
				"sourceSequence": 426,
				"specification": "133×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.67,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 28.02,
				"note": null
			},
			{
				"sourceSequence": 427,
				"specification": "133×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.78,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 22.68,
				"note": null
			},
			{
				"sourceSequence": 428,
				"specification": "133×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.76,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 28.56,
				"note": null
			},
			{
				"sourceSequence": 429,
				"specification": "133×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.86,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 23.16,
				"note": null
			},
			{
				"sourceSequence": 430,
				"specification": "140×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.46,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 26.76,
				"note": null
			},
			{
				"sourceSequence": 431,
				"specification": "140×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.18,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 25.08,
				"note": null
			},
			{
				"sourceSequence": 432,
				"specification": "140×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.79,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 16.74,
				"note": null
			},
			{
				"sourceSequence": 433,
				"specification": "140×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.86,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 17.16,
				"note": null
			},
			{
				"sourceSequence": 434,
				"specification": "140×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.76,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 16.56,
				"note": null
			},
			{
				"sourceSequence": 435,
				"specification": "140×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.78,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 22.68,
				"note": null
			},
			{
				"sourceSequence": 436,
				"specification": "140×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.25,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.5,
				"note": null
			},
			{
				"sourceSequence": 437,
				"specification": "140×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.1,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 24.6,
				"note": null
			},
			{
				"sourceSequence": 438,
				"specification": "140×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.29,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.74,
				"note": null
			},
			{
				"sourceSequence": 439,
				"specification": "140×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.12,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 24.72,
				"note": null
			},
			{
				"sourceSequence": 440,
				"specification": "159×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.52,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 19.56,
				"note": null
			},
			{
				"sourceSequence": 441,
				"specification": "159×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 6.12,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 18.36,
				"note": null
			},
			{
				"sourceSequence": 442,
				"specification": "159×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.59,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 19.77,
				"note": null
			},
			{
				"sourceSequence": 443,
				"specification": "159×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.96,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 14.88,
				"note": null
			},
			{
				"sourceSequence": 444,
				"specification": "159×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 5.08,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 15.24,
				"note": null
			},
			{
				"sourceSequence": 445,
				"specification": "159×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 5.56,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 16.68,
				"note": null
			},
			{
				"sourceSequence": 446,
				"specification": "159×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 5.79,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 17.37,
				"note": null
			},
			{
				"sourceSequence": 447,
				"specification": "159×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.06,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 15.18,
				"note": null
			},
			{
				"sourceSequence": 448,
				"specification": "159×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 5.98,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 17.94,
				"note": null
			},
			{
				"sourceSequence": 449,
				"specification": "159×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.48,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 19.44,
				"note": null
			},
			{
				"sourceSequence": 450,
				"specification": "159×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 6.65,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 19.95,
				"note": null
			},
			{
				"sourceSequence": 451,
				"specification": "165×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.8,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 17.4,
				"note": null
			},
			{
				"sourceSequence": 452,
				"specification": "165×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 6.75,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 20.25,
				"note": null
			},
			{
				"sourceSequence": 453,
				"specification": "165×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.64,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 16.92,
				"note": null
			},
			{
				"sourceSequence": 454,
				"specification": "165×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.6,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 10.8,
				"note": null
			},
			{
				"sourceSequence": 455,
				"specification": "165×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.53,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 10.59,
				"note": null
			},
			{
				"sourceSequence": 456,
				"specification": "165×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.55,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 10.65,
				"note": null
			},
			{
				"sourceSequence": 457,
				"specification": "165×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.94,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 11.82,
				"note": null
			},
			{
				"sourceSequence": 458,
				"specification": "165×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.94,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 11.82,
				"note": null
			},
			{
				"sourceSequence": 459,
				"specification": "165×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.21,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 12.63,
				"note": null
			},
			{
				"sourceSequence": 460,
				"specification": "165×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.56,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 16.68,
				"note": null
			},
			{
				"sourceSequence": 461,
				"specification": "165×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.22,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 12.66,
				"note": null
			},
			{
				"sourceSequence": 462,
				"specification": "219×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.96,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.96,
				"note": null
			},
			{
				"sourceSequence": 463,
				"specification": "219×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 10.23,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 10.23,
				"note": null
			},
			{
				"sourceSequence": 464,
				"specification": "219×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 9.11,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 9.11,
				"note": null
			},
			{
				"sourceSequence": 465,
				"specification": "219×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 9.08,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 9.08,
				"note": null
			},
			{
				"sourceSequence": 466,
				"specification": "219×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 9.07,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 9.07,
				"note": null
			},
			{
				"sourceSequence": 467,
				"specification": "219×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 8.45,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.45,
				"note": null
			},
			{
				"sourceSequence": 468,
				"specification": "219×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.96,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.96,
				"note": null
			},
			{
				"sourceSequence": 469,
				"specification": "219×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 8.64,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.64,
				"note": null
			},
			{
				"sourceSequence": 470,
				"specification": "273×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 13.39,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 13.39,
				"note": null
			},
			{
				"sourceSequence": 471,
				"specification": "273×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 11.28,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 11.28,
				"note": null
			},
			{
				"sourceSequence": 472,
				"specification": "273×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 19.24,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 19.24,
				"note": null
			},
			{
				"sourceSequence": 473,
				"specification": "273×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 19.47,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 19.47,
				"note": null
			},
			{
				"sourceSequence": 474,
				"specification": "273×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 9.23,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 9.23,
				"note": null
			},
			{
				"sourceSequence": 475,
				"specification": "273×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 14.08,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 14.08,
				"note": null
			},
			{
				"sourceSequence": 476,
				"specification": "325×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 18.52,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 18.52,
				"note": null
			},
			{
				"sourceSequence": 477,
				"specification": "325×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 17.85,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 17.85,
				"note": null
			},
			{
				"sourceSequence": 478,
				"specification": "325×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 19.02,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 19.02,
				"note": null
			},
			{
				"sourceSequence": 479,
				"specification": "325×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 25.79,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 25.79,
				"note": null
			},
			{
				"sourceSequence": 480,
				"specification": "325×273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 28.04,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 28.04,
				"note": null
			},
			{
				"sourceSequence": 481,
				"specification": "377×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 31.52,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 31.52,
				"note": null
			},
			{
				"sourceSequence": 482,
				"specification": "377×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 33.47,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 33.47,
				"note": null
			},
			{
				"sourceSequence": 483,
				"specification": "60×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .87,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 13.05,
				"note": null
			},
			{
				"sourceSequence": 484,
				"specification": "60×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .93,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 13.95,
				"note": null
			},
			{
				"sourceSequence": 485,
				"specification": "65×25×65",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 486,
				"specification": "76×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.15,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 17.25,
				"note": null
			},
			{
				"sourceSequence": 487,
				"specification": "76×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.15,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 17.25,
				"note": null
			},
			{
				"sourceSequence": 488,
				"specification": "76×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.15,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 17.25,
				"note": null
			},
			{
				"sourceSequence": 489,
				"specification": "76×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.27,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 19.05,
				"note": null
			},
			{
				"sourceSequence": 490,
				"specification": "89×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.47,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 22.05,
				"note": null
			},
			{
				"sourceSequence": 491,
				"specification": "89×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.47,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 22.05,
				"note": null
			},
			{
				"sourceSequence": 492,
				"specification": "89×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.5,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 22.5,
				"note": null
			},
			{
				"sourceSequence": 493,
				"specification": "89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.63,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 24.45,
				"note": null
			},
			{
				"sourceSequence": 494,
				"specification": "89×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.85,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 27.75,
				"note": null
			},
			{
				"sourceSequence": 495,
				"specification": "89×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.8,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 496,
				"specification": "R65×25×65",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": null,
				"note": null
			}
		]
	},
	{
		"id": "mechanical_tee",
		"nameEn": "Mechanical Tee",
		"nameZh": "机械三通",
		"category": "grooved_fittings",
		"recordCount": 71,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 1,
		"threadedOutletRecordCount": 53,
		"records": [
			{
				"sourceSequence": 120,
				"specification": "108×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.19,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 21.42,
				"note": null
			},
			{
				"sourceSequence": 121,
				"specification": "108×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.29,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 23.22,
				"note": null
			},
			{
				"sourceSequence": 122,
				"specification": "108×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.4,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 25.2,
				"note": null
			},
			{
				"sourceSequence": 123,
				"specification": "108×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.93,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 34.74,
				"note": null
			},
			{
				"sourceSequence": 124,
				"specification": "108×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.75,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21,
				"note": null
			},
			{
				"sourceSequence": 125,
				"specification": "108×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.79,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.48,
				"note": null
			},
			{
				"sourceSequence": 126,
				"specification": "108×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.2,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 14.4,
				"note": null
			},
			{
				"sourceSequence": 127,
				"specification": "108×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.15,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 13.8,
				"note": null
			},
			{
				"sourceSequence": 128,
				"specification": "114×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.35,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 24.3,
				"note": null
			},
			{
				"sourceSequence": 129,
				"specification": "114×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.39,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 25.02,
				"note": null
			},
			{
				"sourceSequence": 130,
				"specification": "114×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.46,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 26.28,
				"note": null
			},
			{
				"sourceSequence": 131,
				"specification": "114×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.57,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 28.26,
				"note": null
			},
			{
				"sourceSequence": 132,
				"specification": "114×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.8,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.6,
				"note": null
			},
			{
				"sourceSequence": 133,
				"specification": "114×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.82,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.84,
				"note": null
			},
			{
				"sourceSequence": 134,
				"specification": "114×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.83,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.96,
				"note": null
			},
			{
				"sourceSequence": 135,
				"specification": "114×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.5,
				"boltSpec": "M12*70",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 30,
				"note": null
			},
			{
				"sourceSequence": 136,
				"specification": "133×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": null,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 137,
				"specification": "133×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.47,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 17.64,
				"note": null
			},
			{
				"sourceSequence": 138,
				"specification": "133×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.57,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 18.84,
				"note": null
			},
			{
				"sourceSequence": 139,
				"specification": "133×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.6,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 19.2,
				"note": null
			},
			{
				"sourceSequence": 140,
				"specification": "133×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.72,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 20.64,
				"note": null
			},
			{
				"sourceSequence": 141,
				"specification": "133×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.82,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.84,
				"note": null
			},
			{
				"sourceSequence": 142,
				"specification": "133×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.86,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 22.32,
				"note": null
			},
			{
				"sourceSequence": 143,
				"specification": "133×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.91,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 22.92,
				"note": null
			},
			{
				"sourceSequence": 144,
				"specification": "133×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.97,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 23.64,
				"note": null
			},
			{
				"sourceSequence": 145,
				"specification": "140×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.72,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 20.64,
				"note": null
			},
			{
				"sourceSequence": 146,
				"specification": "140×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.82,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.84,
				"note": null
			},
			{
				"sourceSequence": 147,
				"specification": "140×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.61,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 19.32,
				"note": null
			},
			{
				"sourceSequence": 148,
				"specification": "140×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.63,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 19.56,
				"note": null
			},
			{
				"sourceSequence": 149,
				"specification": "140×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.74,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 20.88,
				"note": null
			},
			{
				"sourceSequence": 150,
				"specification": "140×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.58,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 18.96,
				"note": null
			},
			{
				"sourceSequence": 151,
				"specification": "140×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.77,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 21.24,
				"note": null
			},
			{
				"sourceSequence": 152,
				"specification": "140×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.05,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 24.6,
				"note": null
			},
			{
				"sourceSequence": 153,
				"specification": "140×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.99,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 23.88,
				"note": null
			},
			{
				"sourceSequence": 154,
				"specification": "140×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.19,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 26.28,
				"note": null
			},
			{
				"sourceSequence": 155,
				"specification": "159×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.81,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 18.1,
				"note": null
			},
			{
				"sourceSequence": 156,
				"specification": "159×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.71,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 17.1,
				"note": null
			},
			{
				"sourceSequence": 157,
				"specification": "159×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.74,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 17.4,
				"note": null
			},
			{
				"sourceSequence": 158,
				"specification": "159×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.88,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 18.8,
				"note": null
			},
			{
				"sourceSequence": 159,
				"specification": "159×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.16,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.6,
				"note": null
			},
			{
				"sourceSequence": 160,
				"specification": "159×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.7,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 27,
				"note": null
			},
			{
				"sourceSequence": 161,
				"specification": "165×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.36,
				"boltSpec": "M12*75",
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 20.16,
				"note": null
			},
			{
				"sourceSequence": 162,
				"specification": "165×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.3,
				"boltSpec": "M12*75",
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 13.8,
				"note": null
			},
			{
				"sourceSequence": 163,
				"specification": "165×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.29,
				"boltSpec": "M12*75",
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 13.74,
				"note": null
			},
			{
				"sourceSequence": 164,
				"specification": "165×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.99,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 19.9,
				"note": null
			},
			{
				"sourceSequence": 165,
				"specification": "165×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.02,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 20.2,
				"note": null
			},
			{
				"sourceSequence": 166,
				"specification": "165×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.11,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.1,
				"note": null
			},
			{
				"sourceSequence": 167,
				"specification": "165×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.2,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22,
				"note": null
			},
			{
				"sourceSequence": 168,
				"specification": "165×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.45,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 24.5,
				"note": null
			},
			{
				"sourceSequence": 169,
				"specification": "165×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.4,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 24,
				"note": null
			},
			{
				"sourceSequence": 170,
				"specification": "165×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.57,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 25.7,
				"note": null
			},
			{
				"sourceSequence": 171,
				"specification": "165×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.64,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 26.4,
				"note": null
			},
			{
				"sourceSequence": 172,
				"specification": "219×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.53,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 27.18,
				"note": null
			},
			{
				"sourceSequence": 173,
				"specification": "219×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.05,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 18.3,
				"note": null
			},
			{
				"sourceSequence": 174,
				"specification": "219×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.98,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 31.84,
				"note": null
			},
			{
				"sourceSequence": 175,
				"specification": "219×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.17,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 37.02,
				"note": null
			},
			{
				"sourceSequence": 176,
				"specification": "219×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.84,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 30.72,
				"note": null
			},
			{
				"sourceSequence": 177,
				"specification": "219×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.46,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 27.68,
				"note": null
			},
			{
				"sourceSequence": 178,
				"specification": "219×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.12,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 32.96,
				"note": null
			},
			{
				"sourceSequence": 179,
				"specification": "219×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.33,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 34.64,
				"note": null
			},
			{
				"sourceSequence": 180,
				"specification": "219×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.09,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 32.72,
				"note": null
			},
			{
				"sourceSequence": 181,
				"specification": "76×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .76,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 26,
				"cartonWeightKg": 19.76,
				"note": null
			},
			{
				"sourceSequence": 182,
				"specification": "76×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.16,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 26,
				"cartonWeightKg": 30.16,
				"note": null
			},
			{
				"sourceSequence": 183,
				"specification": "76×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .85,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 26,
				"cartonWeightKg": 22.1,
				"note": null
			},
			{
				"sourceSequence": 184,
				"specification": "76×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .92,
				"boltSpec": "M10*60",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 27.6,
				"note": null
			},
			{
				"sourceSequence": 185,
				"specification": "89×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .85,
				"boltSpec": "M10*60",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 17,
				"note": null
			},
			{
				"sourceSequence": 186,
				"specification": "89×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .9,
				"boltSpec": "M10*60",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 18,
				"note": null
			},
			{
				"sourceSequence": 187,
				"specification": "89×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .99,
				"boltSpec": "M10*60",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 19.8,
				"note": null
			},
			{
				"sourceSequence": 188,
				"specification": "89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.35,
				"boltSpec": "M10*60",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 27,
				"note": null
			},
			{
				"sourceSequence": 189,
				"specification": "89×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.16,
				"boltSpec": "M10*60",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 23.2,
				"note": null
			},
			{
				"sourceSequence": 190,
				"specification": "89×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.16,
				"boltSpec": "M10*60",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 23.2,
				"note": null
			}
		]
	},
	{
		"id": "equal_cross",
		"nameEn": "Equal Cross",
		"nameZh": "等径四通",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 551,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.02,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 10.2,
				"note": null
			},
			{
				"sourceSequence": 552,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.65,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.5,
				"note": null
			},
			{
				"sourceSequence": 553,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.1,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21,
				"note": null
			},
			{
				"sourceSequence": 554,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.05,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 18.3,
				"note": null
			},
			{
				"sourceSequence": 555,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.25,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.5,
				"note": null
			},
			{
				"sourceSequence": 556,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.05,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 12.15,
				"note": null
			},
			{
				"sourceSequence": 557,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.91,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 14.73,
				"note": null
			},
			{
				"sourceSequence": 558,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.82,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 15.64,
				"note": null
			},
			{
				"sourceSequence": 559,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.8,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 17.6,
				"note": null
			},
			{
				"sourceSequence": 560,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 15.63,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 15.63,
				"note": null
			},
			{
				"sourceSequence": 561,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.54,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 1,
				"cartonWeightKg": 2.54,
				"note": null
			},
			{
				"sourceSequence": 562,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 33.21,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 33.21,
				"note": null
			},
			{
				"sourceSequence": 563,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 39.54,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 39.54,
				"note": null
			}
		]
	},
	{
		"id": "reducing_cross",
		"nameEn": "Reducing Cross",
		"nameZh": "异径四通",
		"category": "grooved_fittings",
		"recordCount": 40,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 2,
		"threadedOutletRecordCount": 28,
		"records": [
			{
				"sourceSequence": 497,
				"specification": "114×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.59,
				"boltSpec": null,
				"cartonNumber": 16,
				"cartonSize": null,
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.54,
				"note": null
			},
			{
				"sourceSequence": 498,
				"specification": "114×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.53,
				"boltSpec": null,
				"cartonNumber": 16,
				"cartonSize": null,
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.18,
				"note": null
			},
			{
				"sourceSequence": 499,
				"specification": "114×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.91,
				"boltSpec": null,
				"cartonNumber": 16,
				"cartonSize": null,
				"packingQuantityPcs": 6,
				"cartonWeightKg": 17.46,
				"note": null
			},
			{
				"sourceSequence": 500,
				"specification": "114×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.99,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 17.94,
				"note": null
			},
			{
				"sourceSequence": 501,
				"specification": "114×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.73,
				"boltSpec": null,
				"cartonNumber": 16,
				"cartonSize": null,
				"packingQuantityPcs": 6,
				"cartonWeightKg": 16.38,
				"note": null
			},
			{
				"sourceSequence": 502,
				"specification": "114×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.33,
				"boltSpec": null,
				"cartonNumber": 16,
				"cartonSize": null,
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.98,
				"note": null
			},
			{
				"sourceSequence": 503,
				"specification": "114×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.13,
				"boltSpec": null,
				"cartonNumber": 16,
				"cartonSize": null,
				"packingQuantityPcs": 6,
				"cartonWeightKg": 18.78,
				"note": null
			},
			{
				"sourceSequence": 504,
				"specification": "140×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 505,
				"specification": "140×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 506,
				"specification": "140×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.58,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.48,
				"note": null
			},
			{
				"sourceSequence": 507,
				"specification": "140×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.58,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.48,
				"note": null
			},
			{
				"sourceSequence": 508,
				"specification": "140×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.58,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.48,
				"note": null
			},
			{
				"sourceSequence": 509,
				"specification": "140×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.58,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.48,
				"note": null
			},
			{
				"sourceSequence": 510,
				"specification": "140×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.61,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.66,
				"note": null
			},
			{
				"sourceSequence": 511,
				"specification": "140×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.07,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 18.42,
				"note": null
			},
			{
				"sourceSequence": 512,
				"specification": "140×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.65,
				"boltSpec": null,
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 15.9,
				"note": null
			},
			{
				"sourceSequence": 513,
				"specification": "165×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.64,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 11.28,
				"note": null
			},
			{
				"sourceSequence": 514,
				"specification": "165×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.24,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 14.48,
				"note": null
			},
			{
				"sourceSequence": 515,
				"specification": "165×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.16,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 8.32,
				"note": null
			},
			{
				"sourceSequence": 516,
				"specification": "165×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.13,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 8.26,
				"note": null
			},
			{
				"sourceSequence": 517,
				"specification": "165×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 6.13,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 12.26,
				"note": null
			},
			{
				"sourceSequence": 518,
				"specification": "165×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 5.95,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 11.9,
				"note": null
			},
			{
				"sourceSequence": 519,
				"specification": "165×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.42,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 12.84,
				"note": null
			},
			{
				"sourceSequence": 520,
				"specification": "165×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 6.14,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 12.28,
				"note": null
			},
			{
				"sourceSequence": 521,
				"specification": "165×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.21,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 12.42,
				"note": null
			},
			{
				"sourceSequence": 522,
				"specification": "165×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 6.15,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 12.3,
				"note": null
			},
			{
				"sourceSequence": 523,
				"specification": "219×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 13.4,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 13.4,
				"note": null
			},
			{
				"sourceSequence": 524,
				"specification": "219×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 11.36,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 11.36,
				"note": null
			},
			{
				"sourceSequence": 525,
				"specification": "219×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.43,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.43,
				"note": null
			},
			{
				"sourceSequence": 526,
				"specification": "219×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.98,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 6.98,
				"note": null
			},
			{
				"sourceSequence": 527,
				"specification": "76×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.65,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.5,
				"note": null
			},
			{
				"sourceSequence": 528,
				"specification": "76×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.63,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.3,
				"note": null
			},
			{
				"sourceSequence": 529,
				"specification": "76×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.62,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.2,
				"note": null
			},
			{
				"sourceSequence": 530,
				"specification": "76×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.44,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 14.4,
				"note": null
			},
			{
				"sourceSequence": 531,
				"specification": "89×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.7,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 17,
				"note": null
			},
			{
				"sourceSequence": 532,
				"specification": "89×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.48,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 14.8,
				"note": null
			},
			{
				"sourceSequence": 533,
				"specification": "89×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.56,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 15.6,
				"note": null
			},
			{
				"sourceSequence": 534,
				"specification": "89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.05,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 20.5,
				"note": null
			},
			{
				"sourceSequence": 535,
				"specification": "89×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.14,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.4,
				"note": null
			},
			{
				"sourceSequence": 536,
				"specification": "89×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.15,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.5,
				"note": null
			}
		]
	},
	{
		"id": "mechanical_cross",
		"nameEn": "Mechanical Cross",
		"nameZh": "机械四通",
		"category": "grooved_fittings",
		"recordCount": 65,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 1,
		"threadedOutletRecordCount": 47,
		"records": [
			{
				"sourceSequence": 191,
				"specification": "108×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.62,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.2,
				"note": null
			},
			{
				"sourceSequence": 192,
				"specification": "108×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.98,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 19.8,
				"note": null
			},
			{
				"sourceSequence": 193,
				"specification": "108×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.23,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.3,
				"note": null
			},
			{
				"sourceSequence": 194,
				"specification": "108×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.72,
				"boltSpec": "M12*70",
				"cartonNumber": 3,
				"cartonSize": "44×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 17.2,
				"note": null
			},
			{
				"sourceSequence": 195,
				"specification": "108×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.21,
				"boltSpec": "M12*70",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.1,
				"note": null
			},
			{
				"sourceSequence": 196,
				"specification": "108×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.15,
				"boltSpec": "M12*70",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.5,
				"note": null
			},
			{
				"sourceSequence": 197,
				"specification": "114×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.51,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 15.1,
				"note": null
			},
			{
				"sourceSequence": 198,
				"specification": "114×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.66,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.6,
				"note": null
			},
			{
				"sourceSequence": 199,
				"specification": "114×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.78,
				"boltSpec": "M12*70",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 17.8,
				"note": null
			},
			{
				"sourceSequence": 200,
				"specification": "114×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.99,
				"boltSpec": "M12*70",
				"cartonNumber": 3,
				"cartonSize": "44×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 19.9,
				"note": null
			},
			{
				"sourceSequence": 201,
				"specification": "114×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.26,
				"boltSpec": "M12*70",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.6,
				"note": null
			},
			{
				"sourceSequence": 202,
				"specification": "114×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.05,
				"boltSpec": "M12*70",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 30.5,
				"note": null
			},
			{
				"sourceSequence": 203,
				"specification": "114×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.2,
				"boltSpec": "M12*70",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22,
				"note": null
			},
			{
				"sourceSequence": 204,
				"specification": "114×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.94,
				"boltSpec": "M12*70",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 19.4,
				"note": null
			},
			{
				"sourceSequence": 205,
				"specification": "133×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.53,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 25.3,
				"note": null
			},
			{
				"sourceSequence": 206,
				"specification": "133×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.41,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 24.1,
				"note": null
			},
			{
				"sourceSequence": 207,
				"specification": "133×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.92,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 29.2,
				"note": null
			},
			{
				"sourceSequence": 208,
				"specification": "133×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.15,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.5,
				"note": null
			},
			{
				"sourceSequence": 209,
				"specification": "133×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.21,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.1,
				"note": null
			},
			{
				"sourceSequence": 210,
				"specification": "133×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.23,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.3,
				"note": null
			},
			{
				"sourceSequence": 211,
				"specification": "140×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.8,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 18,
				"note": null
			},
			{
				"sourceSequence": 212,
				"specification": "140×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.9,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 19,
				"note": null
			},
			{
				"sourceSequence": 213,
				"specification": "140×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.82,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 18.2,
				"note": null
			},
			{
				"sourceSequence": 214,
				"specification": "140×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.25,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.5,
				"note": null
			},
			{
				"sourceSequence": 215,
				"specification": "140×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.44,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 24.4,
				"note": null
			},
			{
				"sourceSequence": 216,
				"specification": "140×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.68,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 26.8,
				"note": null
			},
			{
				"sourceSequence": 217,
				"specification": "140×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.38,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 23.8,
				"note": null
			},
			{
				"sourceSequence": 218,
				"specification": "140×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.8,
				"boltSpec": "M12*75",
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 28,
				"note": null
			},
			{
				"sourceSequence": 219,
				"specification": "159×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.42,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 34.2,
				"note": null
			},
			{
				"sourceSequence": 220,
				"specification": "159×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.68,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 26.8,
				"note": null
			},
			{
				"sourceSequence": 221,
				"specification": "159×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.91,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 29.1,
				"note": null
			},
			{
				"sourceSequence": 222,
				"specification": "159×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.09,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 30.9,
				"note": null
			},
			{
				"sourceSequence": 223,
				"specification": "159×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.32,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 33.2,
				"note": null
			},
			{
				"sourceSequence": 224,
				"specification": "159×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.48,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 34.8,
				"note": null
			},
			{
				"sourceSequence": 225,
				"specification": "159×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.68,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 36.8,
				"note": null
			},
			{
				"sourceSequence": 226,
				"specification": "159×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.41,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 34.1,
				"note": null
			},
			{
				"sourceSequence": 227,
				"specification": "159×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.15,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 31.5,
				"note": null
			},
			{
				"sourceSequence": 228,
				"specification": "165×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.54,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 21.24,
				"note": null
			},
			{
				"sourceSequence": 229,
				"specification": "165×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.32,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.92,
				"note": null
			},
			{
				"sourceSequence": 230,
				"specification": "165×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.3,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 19.8,
				"note": null
			},
			{
				"sourceSequence": 231,
				"specification": "165×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.15,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 21.5,
				"note": null
			},
			{
				"sourceSequence": 232,
				"specification": "165×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.27,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 22.7,
				"note": null
			},
			{
				"sourceSequence": 233,
				"specification": "165×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.35,
				"boltSpec": "M12*75",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 23.5,
				"note": null
			},
			{
				"sourceSequence": 234,
				"specification": "165×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.61,
				"boltSpec": "M12*75",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 26.1,
				"note": null
			},
			{
				"sourceSequence": 235,
				"specification": "165×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.42,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 24.2,
				"note": null
			},
			{
				"sourceSequence": 236,
				"specification": "165×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.7,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 27,
				"note": null
			},
			{
				"sourceSequence": 237,
				"specification": "165×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.82,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 28.2,
				"note": null
			},
			{
				"sourceSequence": 238,
				"specification": "165×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.02,
				"boltSpec": "M12*75",
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 30.2,
				"note": null
			},
			{
				"sourceSequence": 239,
				"specification": "219×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.8,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 34.8,
				"note": null
			},
			{
				"sourceSequence": 240,
				"specification": "219×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.16,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 18.96,
				"note": null
			},
			{
				"sourceSequence": 241,
				"specification": "219×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.85,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 35.1,
				"note": null
			},
			{
				"sourceSequence": 242,
				"specification": "219×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.95,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 23.7,
				"note": null
			},
			{
				"sourceSequence": 243,
				"specification": "219×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.07,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 24.42,
				"note": null
			},
			{
				"sourceSequence": 244,
				"specification": "219×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.18,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 31.08,
				"note": null
			},
			{
				"sourceSequence": 245,
				"specification": "219×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.62,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 27.72,
				"note": null
			},
			{
				"sourceSequence": 246,
				"specification": "219×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.06,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 24.36,
				"note": null
			},
			{
				"sourceSequence": 247,
				"specification": "219×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 5.45,
				"boltSpec": "M16*100",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 32.7,
				"note": null
			},
			{
				"sourceSequence": 248,
				"specification": "76×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .94,
				"boltSpec": "M10*60",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 28.2,
				"note": null
			},
			{
				"sourceSequence": 249,
				"specification": "76×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.06,
				"boltSpec": "M10*60",
				"cartonNumber": 9,
				"cartonSize": "46×36×24",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 31.8,
				"note": null
			},
			{
				"sourceSequence": 250,
				"specification": "76×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.34,
				"boltSpec": "M10*60",
				"cartonNumber": 8,
				"cartonSize": "49×36×22",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 40.2,
				"note": null
			},
			{
				"sourceSequence": 251,
				"specification": "89×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.14,
				"boltSpec": "M10*60",
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 22.8,
				"note": null
			},
			{
				"sourceSequence": 252,
				"specification": "89×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.16,
				"boltSpec": "M10*60",
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 23.2,
				"note": null
			},
			{
				"sourceSequence": 253,
				"specification": "89×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.31,
				"boltSpec": "M10*60",
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 26.2,
				"note": null
			},
			{
				"sourceSequence": 254,
				"specification": "89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 38.8,
				"note": null
			},
			{
				"sourceSequence": 255,
				"specification": "89×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.76,
				"boltSpec": "M10*60",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 20,
				"cartonWeightKg": 35.2,
				"note": null
			}
		]
	},
	{
		"id": "reducing_mechanical_cross",
		"nameEn": "Reducing Mechanical Cross",
		"nameZh": "变径机械四通",
		"category": "grooved_fittings",
		"recordCount": 34,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 34,
		"records": [
			{
				"sourceSequence": 74,
				"specification": "114×42S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.63,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 75,
				"specification": "114×48S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.88,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 76,
				"specification": "114×48S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.03,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 77,
				"specification": "114×60S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.89,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 78,
				"specification": "114×60S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.04,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 79,
				"specification": "114×60S×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.28,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 80,
				"specification": "114×76S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.25,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 81,
				"specification": "114×76S×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.5,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 82,
				"specification": "114×76S×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.51,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 83,
				"specification": "114×89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.58,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 84,
				"specification": "114×89S×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.56,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 85,
				"specification": "140×60S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.06,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 86,
				"specification": "140×60S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.69,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 87,
				"specification": "140×60S×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.75,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 88,
				"specification": "140×76×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.01,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 89,
				"specification": "140×76×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.41,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 90,
				"specification": "140×76×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.56,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 91,
				"specification": "140×89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.92,
				"boltSpec": "M12*70",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 92,
				"specification": "165×42S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.53,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 93,
				"specification": "165×48S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.43,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 94,
				"specification": "165×48S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.53,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 95,
				"specification": "165×60S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.47,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 96,
				"specification": "165×60S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.57,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 97,
				"specification": "165×60S×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.68,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 98,
				"specification": "165×76S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.99,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 99,
				"specification": "165×76S×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.14,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 100,
				"specification": "165×89S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.6,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 101,
				"specification": "165×89S×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.71,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 102,
				"specification": "165×89S×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 3.75,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 103,
				"specification": "165×89S×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 4.17,
				"boltSpec": "M12*75",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 104,
				"specification": "76×42S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.16,
				"boltSpec": "M10*60",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 105,
				"specification": "76×48S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.24,
				"boltSpec": "M10*60",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 106,
				"specification": "89×42S×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.33,
				"boltSpec": "M10*60",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 107,
				"specification": "89×60S×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.64,
				"boltSpec": "M10*60",
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": null,
				"cartonWeightKg": null,
				"note": null
			}
		]
	},
	{
		"id": "concentric_reducer",
		"nameEn": "Concentric Reducer",
		"nameZh": "大小头",
		"category": "grooved_fittings",
		"recordCount": 88,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 55,
		"records": [
			{
				"sourceSequence": 303,
				"specification": "108×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .71,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 25.56,
				"note": null
			},
			{
				"sourceSequence": 304,
				"specification": "108×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .82,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 29.52,
				"note": null
			},
			{
				"sourceSequence": 305,
				"specification": "108×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .89,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 32.04,
				"note": null
			},
			{
				"sourceSequence": 306,
				"specification": "108×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .79,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 28.44,
				"note": null
			},
			{
				"sourceSequence": 307,
				"specification": "108×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.17,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 42.12,
				"note": null
			},
			{
				"sourceSequence": 308,
				"specification": "108×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .98,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 35.28,
				"note": null
			},
			{
				"sourceSequence": 309,
				"specification": "108×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.42,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 51.12,
				"note": null
			},
			{
				"sourceSequence": 310,
				"specification": "108×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.09,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 39.24,
				"note": null
			},
			{
				"sourceSequence": 311,
				"specification": "114×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .85,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 30.6,
				"note": null
			},
			{
				"sourceSequence": 312,
				"specification": "114×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .86,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 30.96,
				"note": null
			},
			{
				"sourceSequence": 313,
				"specification": "114×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .9,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 32.4,
				"note": null
			},
			{
				"sourceSequence": 314,
				"specification": "114×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .88,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 31.68,
				"note": null
			},
			{
				"sourceSequence": 315,
				"specification": "114×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .85,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 30.6,
				"note": null
			},
			{
				"sourceSequence": 316,
				"specification": "114×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 36,
				"note": null
			},
			{
				"sourceSequence": 317,
				"specification": "114×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .85,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 30.6,
				"note": null
			},
			{
				"sourceSequence": 318,
				"specification": "114×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .92,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 36,
				"cartonWeightKg": 33.12,
				"note": null
			},
			{
				"sourceSequence": 319,
				"specification": "133×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.9,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 34.2,
				"note": null
			},
			{
				"sourceSequence": 320,
				"specification": "133×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.41,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 25.38,
				"note": null
			},
			{
				"sourceSequence": 321,
				"specification": "133×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.48,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 26.64,
				"note": null
			},
			{
				"sourceSequence": 322,
				"specification": "133×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.52,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.36,
				"note": null
			},
			{
				"sourceSequence": 323,
				"specification": "133×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.58,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 28.44,
				"note": null
			},
			{
				"sourceSequence": 324,
				"specification": "133×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.63,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 29.34,
				"note": null
			},
			{
				"sourceSequence": 325,
				"specification": "133×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.75,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 31.5,
				"note": null
			},
			{
				"sourceSequence": 326,
				"specification": "140×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.3,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 23.4,
				"note": null
			},
			{
				"sourceSequence": 327,
				"specification": "140×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.3,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 23.4,
				"note": null
			},
			{
				"sourceSequence": 328,
				"specification": "140×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.2,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 21.6,
				"note": null
			},
			{
				"sourceSequence": 329,
				"specification": "140×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.16,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 20.88,
				"note": null
			},
			{
				"sourceSequence": 330,
				"specification": "140×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.08,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 19.44,
				"note": null
			},
			{
				"sourceSequence": 331,
				"specification": "140×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.12,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 20.16,
				"note": null
			},
			{
				"sourceSequence": 332,
				"specification": "140×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.12,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 20.16,
				"note": null
			},
			{
				"sourceSequence": 333,
				"specification": "140×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.21,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 21.78,
				"note": null
			},
			{
				"sourceSequence": 334,
				"specification": "140×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.02,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 18.36,
				"note": null
			},
			{
				"sourceSequence": 335,
				"specification": "140×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.31,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 23.58,
				"note": null
			},
			{
				"sourceSequence": 336,
				"specification": "159×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.78,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 32.04,
				"note": null
			},
			{
				"sourceSequence": 337,
				"specification": "159×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.82,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 32.76,
				"note": null
			},
			{
				"sourceSequence": 338,
				"specification": "159×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.85,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 33.3,
				"note": null
			},
			{
				"sourceSequence": 339,
				"specification": "159×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.45,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 26.1,
				"note": null
			},
			{
				"sourceSequence": 340,
				"specification": "159×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.51,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.18,
				"note": null
			},
			{
				"sourceSequence": 341,
				"specification": "159×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.58,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 28.44,
				"note": null
			},
			{
				"sourceSequence": 342,
				"specification": "159×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.41,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 25.38,
				"note": null
			},
			{
				"sourceSequence": 343,
				"specification": "159×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.46,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 26.28,
				"note": null
			},
			{
				"sourceSequence": 344,
				"specification": "159×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.42,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 25.56,
				"note": null
			},
			{
				"sourceSequence": 345,
				"specification": "159×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.59,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 28.62,
				"note": null
			},
			{
				"sourceSequence": 346,
				"specification": "165×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.63,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 29.34,
				"note": null
			},
			{
				"sourceSequence": 347,
				"specification": "165×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.61,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 28.98,
				"note": null
			},
			{
				"sourceSequence": 348,
				"specification": "165×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.75,
				"boltSpec": null,
				"cartonNumber": 6,
				"cartonSize": "46×36×22",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 31.5,
				"note": null
			},
			{
				"sourceSequence": 349,
				"specification": "165×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.51,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.18,
				"note": null
			},
			{
				"sourceSequence": 350,
				"specification": "165×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.62,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 29.16,
				"note": null
			},
			{
				"sourceSequence": 351,
				"specification": "165×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.43,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 25.74,
				"note": null
			},
			{
				"sourceSequence": 352,
				"specification": "165×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.54,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.72,
				"note": null
			},
			{
				"sourceSequence": 353,
				"specification": "165×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.55,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.9,
				"note": null
			},
			{
				"sourceSequence": 354,
				"specification": "165×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.5,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27,
				"note": null
			},
			{
				"sourceSequence": 355,
				"specification": "165×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.53,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.54,
				"note": null
			},
			{
				"sourceSequence": 356,
				"specification": "165×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.54,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.72,
				"note": null
			},
			{
				"sourceSequence": 357,
				"specification": "219×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.83,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 22.64,
				"note": null
			},
			{
				"sourceSequence": 358,
				"specification": "219×114S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.59,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.72,
				"note": null
			},
			{
				"sourceSequence": 359,
				"specification": "219×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.12,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 24.96,
				"note": null
			},
			{
				"sourceSequence": 360,
				"specification": "219×140S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.64,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.12,
				"note": null
			},
			{
				"sourceSequence": 361,
				"specification": "219×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.24,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 25.92,
				"note": null
			},
			{
				"sourceSequence": 362,
				"specification": "219×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.69,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.52,
				"note": null
			},
			{
				"sourceSequence": 363,
				"specification": "219×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.29,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 18.32,
				"note": null
			},
			{
				"sourceSequence": 364,
				"specification": "219×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.89,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 23.12,
				"note": null
			},
			{
				"sourceSequence": 365,
				"specification": "219×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 2.45,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 19.6,
				"note": null
			},
			{
				"sourceSequence": 366,
				"specification": "273×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.43,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 16.29,
				"note": null
			},
			{
				"sourceSequence": 367,
				"specification": "273×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.73,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 11.19,
				"note": null
			},
			{
				"sourceSequence": 368,
				"specification": "273×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.57,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 10.71,
				"note": null
			},
			{
				"sourceSequence": 369,
				"specification": "273×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.55,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 10.65,
				"note": null
			},
			{
				"sourceSequence": 370,
				"specification": "273×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.23,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 18.69,
				"note": null
			},
			{
				"sourceSequence": 371,
				"specification": "273×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.28,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 21.84,
				"note": null
			},
			{
				"sourceSequence": 372,
				"specification": "325×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 16.52,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 49.56,
				"note": null
			},
			{
				"sourceSequence": 373,
				"specification": "325×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 17.85,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 53.55,
				"note": null
			},
			{
				"sourceSequence": 374,
				"specification": "325×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.69,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 23.07,
				"note": null
			},
			{
				"sourceSequence": 375,
				"specification": "325×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.25,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 24.75,
				"note": null
			},
			{
				"sourceSequence": 376,
				"specification": "325×273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.72,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 26.16,
				"note": null
			},
			{
				"sourceSequence": 377,
				"specification": "377×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.08,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 2,
				"cartonWeightKg": 16.16,
				"note": null
			},
			{
				"sourceSequence": 378,
				"specification": "377×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.96,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 2,
				"cartonWeightKg": 17.92,
				"note": null
			},
			{
				"sourceSequence": 379,
				"specification": "60×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .33,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 45,
				"cartonWeightKg": 14.85,
				"note": null
			},
			{
				"sourceSequence": 380,
				"specification": "60×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .38,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 45,
				"cartonWeightKg": 17.1,
				"note": null
			},
			{
				"sourceSequence": 381,
				"specification": "76×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .45,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 20.25,
				"note": null
			},
			{
				"sourceSequence": 382,
				"specification": "76×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .47,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 21.15,
				"note": null
			},
			{
				"sourceSequence": 383,
				"specification": "76×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .45,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 20.25,
				"note": null
			},
			{
				"sourceSequence": 384,
				"specification": "76×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .55,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 24.75,
				"note": null
			},
			{
				"sourceSequence": 385,
				"specification": "89×33S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .52,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 23.4,
				"note": null
			},
			{
				"sourceSequence": 386,
				"specification": "89×42S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .54,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 24.3,
				"note": null
			},
			{
				"sourceSequence": 387,
				"specification": "89×48S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .63,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 28.35,
				"note": null
			},
			{
				"sourceSequence": 388,
				"specification": "89×60S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .64,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 28.8,
				"note": null
			},
			{
				"sourceSequence": 389,
				"specification": "89×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .62,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 27.9,
				"note": null
			},
			{
				"sourceSequence": 390,
				"specification": "89×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .64,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 45,
				"cartonWeightKg": 28.8,
				"note": null
			}
		]
	},
	{
		"id": "eccentric_reducer",
		"nameEn": "Eccentric Reducer",
		"nameZh": "偏心大小头",
		"category": "grooved_fittings",
		"recordCount": 21,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 2,
		"records": [
			{
				"sourceSequence": 282,
				"specification": "114×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.43,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 36,
				"cartonWeightKg": 51.48,
				"note": null
			},
			{
				"sourceSequence": 283,
				"specification": "114×76S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": .82,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 36,
				"cartonWeightKg": 29.52,
				"note": null
			},
			{
				"sourceSequence": 284,
				"specification": "114×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .9,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 36,
				"cartonWeightKg": 32.4,
				"note": null
			},
			{
				"sourceSequence": 285,
				"specification": "114×89S",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": true,
				"finishedWeightKg": 1.13,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 36,
				"cartonWeightKg": 40.68,
				"note": null
			},
			{
				"sourceSequence": 286,
				"specification": "140×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.26,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 22.68,
				"note": null
			},
			{
				"sourceSequence": 287,
				"specification": "140×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.26,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 22.68,
				"note": null
			},
			{
				"sourceSequence": 288,
				"specification": "140×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.03,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 18.54,
				"note": null
			},
			{
				"sourceSequence": 289,
				"specification": "165×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.54,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 45.72,
				"note": null
			},
			{
				"sourceSequence": 290,
				"specification": "165×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.73,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 31.14,
				"note": null
			},
			{
				"sourceSequence": 291,
				"specification": "165×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.47,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 26.46,
				"note": null
			},
			{
				"sourceSequence": 292,
				"specification": "165×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.53,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 18,
				"cartonWeightKg": 27.54,
				"note": null
			},
			{
				"sourceSequence": 293,
				"specification": "219×114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.63,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.04,
				"note": null
			},
			{
				"sourceSequence": 294,
				"specification": "219×140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.61,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.88,
				"note": null
			},
			{
				"sourceSequence": 295,
				"specification": "219×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.86,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 8,
				"cartonWeightKg": 22.88,
				"note": null
			},
			{
				"sourceSequence": 296,
				"specification": "219×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.61,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.88,
				"note": null
			},
			{
				"sourceSequence": 297,
				"specification": "219×89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.68,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 8,
				"cartonWeightKg": 21.44,
				"note": null
			},
			{
				"sourceSequence": 298,
				"specification": "325×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.23,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 18.69,
				"note": null
			},
			{
				"sourceSequence": 299,
				"specification": "325×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.12,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 3,
				"cartonWeightKg": 18.36,
				"note": null
			},
			{
				"sourceSequence": 300,
				"specification": "377×165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.08,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.08,
				"note": null
			},
			{
				"sourceSequence": 301,
				"specification": "377×219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 8.96,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 8.96,
				"note": null
			},
			{
				"sourceSequence": 302,
				"specification": "89×76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .87,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 45,
				"cartonWeightKg": 39.15,
				"note": null
			}
		]
	},
	{
		"id": "type_a_grooved_flange",
		"nameEn": "Type A Grooved Flange",
		"nameZh": "A型法兰",
		"category": "grooved_fittings",
		"recordCount": 19,
		"pressureRatingsMpa": [1.6, 2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 27,
				"specification": "60",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 1.76,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 26.4,
				"note": null
			},
			{
				"sourceSequence": 28,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.65,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 24.75,
				"note": null
			},
			{
				"sourceSequence": 29,
				"specification": "76",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 1.76,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 26.4,
				"note": null
			},
			{
				"sourceSequence": 30,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.02,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 30.3,
				"note": null
			},
			{
				"sourceSequence": 31,
				"specification": "89",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 2.15,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 32.25,
				"note": null
			},
			{
				"sourceSequence": 32,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.87,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 15,
				"cartonWeightKg": 43.05,
				"note": null
			},
			{
				"sourceSequence": 33,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.02,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 14,
				"cartonWeightKg": 42.28,
				"note": null
			},
			{
				"sourceSequence": 34,
				"specification": "114",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 2.25,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 14,
				"cartonWeightKg": 31.5,
				"note": null
			},
			{
				"sourceSequence": 35,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.11,
				"boltSpec": "M10*65",
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 14,
				"cartonWeightKg": 43.54,
				"note": null
			},
			{
				"sourceSequence": 36,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.05,
				"boltSpec": "M10*65",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 48.6,
				"note": null
			},
			{
				"sourceSequence": 37,
				"specification": "140",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 2.36,
				"boltSpec": "M10*65",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 28.32,
				"note": null
			},
			{
				"sourceSequence": 38,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.26,
				"boltSpec": "M10*65",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 12,
				"cartonWeightKg": 39.12,
				"note": null
			},
			{
				"sourceSequence": 39,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.85,
				"boltSpec": "M10*65",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 38.8,
				"note": null
			},
			{
				"sourceSequence": 40,
				"specification": "165",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 3.01,
				"boltSpec": "M10*65",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 24.08,
				"note": null
			},
			{
				"sourceSequence": 41,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.12,
				"boltSpec": "M10*65",
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 32.96,
				"note": null
			},
			{
				"sourceSequence": 42,
				"specification": "219",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 5.4,
				"boltSpec": "M12*65",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 32.4,
				"note": null
			},
			{
				"sourceSequence": 43,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 7.81,
				"boltSpec": "M12*65",
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 46.86,
				"note": null
			},
			{
				"sourceSequence": 44,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.32,
				"boltSpec": "M12*65",
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 25.28,
				"note": null
			},
			{
				"sourceSequence": 45,
				"specification": "325",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 9.6,
				"boltSpec": "M12*65",
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 4,
				"cartonWeightKg": 38.4,
				"note": null
			}
		]
	},
	{
		"id": "type_b_grooved_flange",
		"nameEn": "Type B Grooved Flange",
		"nameZh": "B型法兰",
		"category": "grooved_fittings",
		"recordCount": 21,
		"pressureRatingsMpa": [2.5, 1.6],
		"missingFinishedWeightCount": 2,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 46,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.37,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 20,
				"cartonWeightKg": 27.4,
				"note": null
			},
			{
				"sourceSequence": 47,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.65,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 16.5,
				"note": null
			},
			{
				"sourceSequence": 48,
				"specification": "89",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 2.03,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 16.24,
				"note": null
			},
			{
				"sourceSequence": 49,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.53,
				"boltSpec": null,
				"cartonNumber": 4,
				"cartonSize": "45×29×20",
				"packingQuantityPcs": 8,
				"cartonWeightKg": 20.24,
				"note": null
			},
			{
				"sourceSequence": 50,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 2.48,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 9,
				"cartonWeightKg": 22.32,
				"note": null
			},
			{
				"sourceSequence": 51,
				"specification": "114",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 2.3,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 9,
				"cartonWeightKg": 20.7,
				"note": null
			},
			{
				"sourceSequence": 52,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.27,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 9,
				"cartonWeightKg": 29.43,
				"note": null
			},
			{
				"sourceSequence": 53,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.88,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 23.28,
				"note": null
			},
			{
				"sourceSequence": 54,
				"specification": "140",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 2.87,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 17.22,
				"note": null
			},
			{
				"sourceSequence": 55,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.71,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 28.26,
				"note": null
			},
			{
				"sourceSequence": 56,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 4.28,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 25.68,
				"note": null
			},
			{
				"sourceSequence": 57,
				"specification": "159",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": null,
				"note": null
			},
			{
				"sourceSequence": 58,
				"specification": "165",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 3.88,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 23.28,
				"note": null
			},
			{
				"sourceSequence": 59,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 5.67,
				"boltSpec": null,
				"cartonNumber": 11,
				"cartonSize": "51×29×23",
				"packingQuantityPcs": 6,
				"cartonWeightKg": 34.02,
				"note": null
			},
			{
				"sourceSequence": 60,
				"specification": "219",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 6.26,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 18.78,
				"note": null
			},
			{
				"sourceSequence": 61,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 9.22,
				"boltSpec": null,
				"cartonNumber": 2,
				"cartonSize": "41×33×26",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 27.66,
				"note": null
			},
			{
				"sourceSequence": 62,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 10.4,
				"boltSpec": null,
				"cartonNumber": 12,
				"cartonSize": "52×44×23",
				"packingQuantityPcs": 3,
				"cartonWeightKg": 31.2,
				"note": null
			},
			{
				"sourceSequence": 63,
				"specification": "325",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 12.74,
				"boltSpec": null,
				"cartonNumber": 10,
				"cartonSize": "49×39×24",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 25.48,
				"note": null
			},
			{
				"sourceSequence": 64,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 12.87,
				"boltSpec": null,
				"cartonNumber": 12,
				"cartonSize": "52×44×23",
				"packingQuantityPcs": 2,
				"cartonWeightKg": 25.74,
				"note": null
			},
			{
				"sourceSequence": 65,
				"specification": "377",
				"pressureRatingMpa": 1.6,
				"threadedOutlet": false,
				"finishedWeightKg": 16.85,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 16.85,
				"note": null
			},
			{
				"sourceSequence": 66,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": null,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": null,
				"note": null
			}
		]
	},
	{
		"id": "grooved_blind_plate",
		"nameEn": "Grooved Blind Plate",
		"nameZh": "沟槽盲板",
		"category": "grooved_fittings",
		"recordCount": 13,
		"pressureRatingsMpa": [2.5],
		"missingFinishedWeightCount": 0,
		"threadedOutletRecordCount": 0,
		"records": [
			{
				"sourceSequence": 256,
				"specification": "60",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .35,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 50,
				"cartonWeightKg": 17.5,
				"note": null
			},
			{
				"sourceSequence": 257,
				"specification": "76",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .42,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 12.6,
				"note": null
			},
			{
				"sourceSequence": 258,
				"specification": "89",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .52,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 15.6,
				"note": null
			},
			{
				"sourceSequence": 259,
				"specification": "108",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .84,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 25.2,
				"note": null
			},
			{
				"sourceSequence": 260,
				"specification": "114",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": .85,
				"boltSpec": null,
				"cartonNumber": 1,
				"cartonSize": "33×31×24",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 25.5,
				"note": null
			},
			{
				"sourceSequence": 261,
				"specification": "133",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.21,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 36.3,
				"note": null
			},
			{
				"sourceSequence": 262,
				"specification": "140",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.23,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 36.9,
				"note": null
			},
			{
				"sourceSequence": 263,
				"specification": "159",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.47,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 44.1,
				"note": null
			},
			{
				"sourceSequence": 264,
				"specification": "165",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 1.84,
				"boltSpec": null,
				"cartonNumber": 5,
				"cartonSize": "46×36×20",
				"packingQuantityPcs": 30,
				"cartonWeightKg": 55.2,
				"note": null
			},
			{
				"sourceSequence": 265,
				"specification": "219",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 3.93,
				"boltSpec": null,
				"cartonNumber": 7,
				"cartonSize": "49×29×23",
				"packingQuantityPcs": 10,
				"cartonWeightKg": 39.3,
				"note": null
			},
			{
				"sourceSequence": 266,
				"specification": "273",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 6.73,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 4,
				"cartonWeightKg": 26.92,
				"note": null
			},
			{
				"sourceSequence": 267,
				"specification": "325",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 9.68,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 9.68,
				"note": null
			},
			{
				"sourceSequence": 268,
				"specification": "377",
				"pressureRatingMpa": 2.5,
				"threadedOutlet": false,
				"finishedWeightKg": 19.57,
				"boltSpec": null,
				"cartonNumber": null,
				"cartonSize": null,
				"packingQuantityPcs": 1,
				"cartonWeightKg": 19.57,
				"note": null
			}
		]
	}
];
var groovedFittingRecords = groovedFittingProducts.flatMap((product) => product.records.map((record) => ({
	...record,
	productId: product.id,
	productNameEn: product.nameEn,
	productNameZh: product.nameZh
})));
function getGroovedFittingRecordId(record) {
	return [
		record.productId,
		record.specification,
		record.pressureRatingMpa
	].join("__");
}
function findGroovedFittingRecord(fittingTypeId, specification, pressureRatingMpa) {
	return groovedFittingRecords.find((record) => record.productId === fittingTypeId && record.specification === specification && record.pressureRatingMpa === pressureRatingMpa);
}
function getFirstGroovedFittingRecord(fittingTypeId) {
	return groovedFittingRecords.find((record) => !fittingTypeId || record.productId === fittingTypeId) ?? null;
}
var iBeamRawData = {
	"10#": [
		[42, 60],
		[52, 60],
		[63, 60]
	],
	"12#": [
		[52, 48],
		[64, 48],
		[78, 48]
	],
	"14#": [
		[63, null],
		[84, 48],
		[93, 48]
	],
	"16#": [
		[93, 36],
		[101, 36],
		[115, 36]
	],
	"20#": [[137, 18], [154, 20]]
};
function getIBeamReferenceWeightId(referenceWeightKgPerPiece) {
	return `${referenceWeightKgPerPiece}kg`;
}
var iBeamData = Object.entries(iBeamRawData).map(([size, options]) => ({
	id: size,
	size,
	referenceLengthM: 6,
	weightOptions: options.map(([referenceWeightKgPerPiece, piecesPerBundle]) => ({
		id: getIBeamReferenceWeightId(referenceWeightKgPerPiece),
		referenceWeightKgPerPiece,
		piecesPerBundle
	}))
}));
function findIBeamReference(specId, referenceWeightId) {
	const spec = iBeamData.find((item) => item.id === specId);
	const weightOption = spec?.weightOptions.find((item) => item.id === referenceWeightId);
	return spec && weightOption ? {
		spec,
		weightOption
	} : null;
}
var roundSteelBarData = [
	{
		id: "od6",
		diameterMm: 6,
		sizeLabel: "Φ6",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 1.5,
		piecesPerBundle: 2655
	},
	{
		id: "od8",
		diameterMm: 8,
		sizeLabel: "Φ8",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 2.4,
		piecesPerBundle: 1813
	},
	{
		id: "od10",
		diameterMm: 10,
		sizeLabel: "Φ10",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 3.7,
		piecesPerBundle: 1088
	},
	{
		id: "od12",
		diameterMm: 12,
		sizeLabel: "Φ12",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 5.33,
		piecesPerBundle: 775
	},
	{
		id: "od14",
		diameterMm: 14,
		sizeLabel: "Φ14",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 7.3,
		piecesPerBundle: 548
	},
	{
		id: "od16",
		diameterMm: 16,
		sizeLabel: "Φ16",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 9.48,
		piecesPerBundle: 449
	},
	{
		id: "od18",
		diameterMm: 18,
		sizeLabel: "Φ18",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 11.99,
		piecesPerBundle: 336
	},
	{
		id: "od20",
		diameterMm: 20,
		sizeLabel: "Φ20",
		referenceLengthM: 6,
		referenceWeightKgPerPiece: 14.81,
		piecesPerBundle: 277
	}
];
function findRoundSteelBarReference(specId) {
	return roundSteelBarData.find((item) => item.id === specId) ?? null;
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
var CONTAINER_40HQ_TON = 27.5;
var STEEL_DENSITY_FACTOR = .00785;
var ROUND_CARBON_STEEL_PIPE_FACTOR = .02466;
function isSteelPipeProduct(type) {
	return type === "galvanized_pipe" || type === "galvanized_sheet_pipe" || type === "black_steel_pipe";
}
function isSquareTubeProduct(type) {
	return type === "galvanized_square_rectangular_tube" || type === "pre_galvanized_square_rectangular_tube";
}
function isSteelPipeRow(row) {
	return isSteelPipeProduct(row.productType);
}
function isSquareTubeRow(row) {
	return isSquareTubeProduct(row.productType);
}
function calculateRow(row) {
	if (row.productType === "grooved_fitting") {
		const unitWeightKg = findGroovedFittingRecord(row.fittingTypeId, row.specification, row.pressureRatingMpa)?.finishedWeightKg ?? row.finishedWeightKg ?? null;
		if (!unitWeightKg || unitWeightKg <= 0) return {
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
	if (isSteelPipeRow(row) && row.dimensionMode === "custom") {
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
	if (isSquareTubeRow(row) && row.dimensionMode === "custom") {
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
	if (row.productType === "round_steel_bar" && row.dimensionMode === "custom") {
		const diameter = row.customDiameterMm ?? 0;
		if (!(diameter > 0 && row.lengthM > 0)) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = calculateRoundSteelBarKgPerMeter(diameter);
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
	if (row.productType === "flat_steel_bar" && row.dimensionMode === "custom") {
		const width = row.customWidthMm ?? 0;
		const thickness = row.customThicknessMm ?? 0;
		if (!(width > 0 && thickness > 0 && row.lengthM > 0)) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = calculateFlatSteelBarKgPerMeter(width, thickness);
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
	if (isSteelPipeRow(row)) {
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
	if (isSquareTubeRow(row)) {
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
	if (row.productType === "i_beam") {
		const reference = findIBeamReference(row.specId, row.referenceWeightId);
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
	if (row.productType === "round_steel_bar") {
		const reference = findRoundSteelBarReference(row.specId);
		if (!reference) return {
			rowId: row.id,
			hasWeight: false,
			unitWeightLabel: "kg/m"
		};
		const unitWeightKg = reference.referenceWeightKgPerPiece / reference.referenceLengthM;
		const pieceWeightKg = reference.referenceWeightKgPerPiece;
		return {
			rowId: row.id,
			hasWeight: true,
			unitWeightKg,
			unitWeightLabel: "kg/m",
			pieceWeightKg,
			totalWeightKg: pieceWeightKg * row.quantity
		};
	}
	if (row.productType === "flat_steel_bar") {
		const reference = findFlatSteelBarReference(row.specId, row.thicknessId);
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
	return {
		rowId: "",
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
function calculateRoundSteelBarKgPerMeter(diameterMm) {
	return diameterMm * diameterMm * .00617;
}
function calculateFlatSteelBarKgPerMeter(widthMm, thicknessMm) {
	return widthMm * thicknessMm * STEEL_DENSITY_FACTOR;
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
//#endregion
export { groovedFittingProducts as A, getFirstGroovedFittingRecord as C, getGalvanizedSquareRectangularTubeThicknessId as D, getGalvanizedSheetPipeThicknessId as E, iBeamData as M, preGalvanizedSquareRectangularTubeData as N, getGroovedFittingRecordId as O, roundSteelBarData as P, getBlackSteelPipeThicknessId as S, getGalvanizedPipeThicknessId as T, formatUnitWeightLabel as _, calculateRow as a, galvanizedSquareRectangularTubeData as b, contactConfig as c, flatSteelBarData as d, formatKg as f, formatTonFromKg as g, formatQuantity as h, calculateModuleSubtotal as i, groovedFittingRecords as j, getPreGalvanizedSquareRectangularTubeThicknessId as k, estimate40HQ as l, formatNumber as m, angleSteelSpecifications as n, calculateSummary as o, formatLength as p, blackSteelPipeData as r, channelSteelData as s, CONTAINER_40HQ_TON as t, findGroovedFittingRecord as u, galvanizedPipeData as v, getFlatSteelBarThicknessId as w, getAngleSteelThicknessId as x, galvanizedSheetPipeData as y };
