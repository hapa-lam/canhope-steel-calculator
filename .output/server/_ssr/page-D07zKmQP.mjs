import { t as require_jsx_runtime, w as __toESM, y as require_react } from "./ssr.mjs";
import { n as homepageJsonLd, t as calculatorPaths } from "./seo-buLpr6UB.mjs";
import { A as groovedFittingProducts, C as getFirstGroovedFittingRecord, D as getGalvanizedSquareRectangularTubeThicknessId, E as getGalvanizedSheetPipeThicknessId, M as iBeamData, N as preGalvanizedSquareRectangularTubeData, O as getGroovedFittingRecordId, P as roundSteelBarData, S as getBlackSteelPipeThicknessId, T as getGalvanizedPipeThicknessId, _ as formatUnitWeightLabel, a as calculateRow, b as galvanizedSquareRectangularTubeData, c as contactConfig, d as flatSteelBarData, f as formatKg, g as formatTonFromKg, h as formatQuantity, i as calculateModuleSubtotal, j as groovedFittingRecords, k as getPreGalvanizedSquareRectangularTubeThicknessId, m as formatNumber, n as angleSteelSpecifications, o as calculateSummary, p as formatLength, r as blackSteelPipeData, s as channelSteelData, t as CONTAINER_40HQ_TON, u as findGroovedFittingRecord, v as galvanizedPipeData, w as getFlatSteelBarThicknessId, x as getAngleSteelThicknessId, y as galvanizedSheetPipeData } from "./calculations-ZcKnzvwQ.mjs";
import { t as Link } from "./link-Ds33me9j.mjs";
import { SiteHeader } from "./SiteHeader-5dwCL4Lr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-D07zKmQP.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ContainerEstimate({ children, action, containerCount, remainingCapacityTon, configuredLoadTon, locale, m }) {
	const containerText = containerCount > 0 ? `${m.summary.estimated} ${containerCount} × 40HQ，${remainingCapacityTon === 0 ? m.summary.capacityReached : `${m.summary.remainingCapacity} ${formatNumber(remainingCapacityTon ?? 0, 2, locale)} ${locale === "zh" ? "吨" : "t"}`}` : `${m.summary.estimated} 0 × 40HQ`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "summary-grid",
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-blue-100",
					children: m.summary.containerEstimate
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-base font-bold text-white",
					children: containerText
				})]
			}),
			action
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 text-xs text-blue-100",
		children: [
			m.container.note,
			locale === "zh" ? "。" : " ",
			m.container.configuredLoad,
			"：",
			formatNumber(configuredLoadTon, 1, locale),
			" ",
			locale === "zh" ? "吨" : "t",
			" / 40HQ."
		]
	})] });
}
function WeightSummary({ summary, onOpenRfq, locale, m }) {
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: `summary-bar ${isExpanded ? "is-expanded" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "summary-compact",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-blue-100",
						children: m.summary.theoreticalWeight
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-lg font-bold text-white",
						children: formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "primary-button summary-compact-rfq",
					type: "button",
					onClick: onOpenRfq,
					children: m.summary.generateRfq
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "summary-toggle-button",
					type: "button",
					onClick: () => setIsExpanded((current) => !current),
					children: isExpanded ? m.summary.collapse : m.summary.expand
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContainerEstimate, {
			containerCount: summary.containerCount,
			remainingCapacityTon: summary.remainingCapacityTon,
			configuredLoadTon: CONTAINER_40HQ_TON,
			locale,
			m,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "primary-button h-12",
				type: "button",
				onClick: onOpenRfq,
				children: m.summary.generateRfq
			}),
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
					value: formatSummaryQuantity(summary.totalQuantityPieces, summary.totalQuantityItems, locale)
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
				})
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
function formatSummaryQuantity(totalLengths, totalItems, locale) {
	if (locale === "zh") return `${formatQuantity(totalLengths, "支", locale)} / ${formatQuantity(totalItems, "件", locale)}`;
	return `${formatNumber(totalLengths, 0, locale)} lengths / ${formatNumber(totalItems, 0, locale)} items`;
}
function BrandTrustSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1500px] px-4 pb-8 sm:px-6",
		"aria-labelledby": "brand-trust-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "brand-trust-title",
					className: "text-2xl font-bold text-slate-950",
					children: "Built by Steel Industry Professionals"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl leading-7 text-slate-600",
					children: "This calculator is developed by CANHOPE STEEL, a steel and fire protection materials supplier supporting contractors, distributors and project buyers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					role: "list",
					children: [
						"Steel Experience Since 1993",
						"30,000+ m² Factory & Warehouse Facilities",
						"Approx. 30,000 Tons Inventory",
						"Project & Mixed-Container Support"
					].map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700",
						children: point
					}, point))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-sm font-semibold text-[#0e5f9f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://canhopesteel.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Visit CANHOPE STEEL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 text-slate-300",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://canhopesteel.com/products/",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Explore Products"
						})
					]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-slate-200 bg-white text-slate-600",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1500px] gap-7 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-slate-950",
					children: "CANHOPE STEEL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6",
					children: "Steel and fire protection material solutions for contractors, distributors and project buyers."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-slate-950",
					children: "Tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "block hover:text-[#0e5f9f]",
						href: calculatorPaths.home,
						children: "Full Steel Calculator"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "block hover:text-[#0e5f9f]",
						href: calculatorPaths.pipeWeightCalculator,
						children: "Pipe Weight Calculator"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-slate-950",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "block hover:text-[#0e5f9f]",
						href: "https://canhopesteel.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Official Website"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "block hover:text-[#0e5f9f]",
						href: "https://canhopesteel.com/products/",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Products"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-slate-950",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "block hover:text-[#0e5f9f]",
							href: `https://wa.me/${contactConfig.whatsapp.linkNumber}`,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "block hover:text-[#0e5f9f]",
							href: `mailto:${contactConfig.email}`,
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contactConfig.email })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-slate-100 px-4 py-4 text-center text-xs text-slate-500",
			children: "© 2026 CANHOPE STEEL. All rights reserved."
		})]
	});
}
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
		type: "i_beam",
		name: "工字钢",
		englishName: "I-Beam",
		category: "型钢类"
	},
	{
		type: "round_steel_bar",
		name: "圆钢",
		englishName: "Round Steel Bar",
		category: "型钢类"
	},
	{
		type: "flat_steel_bar",
		name: "扁铁",
		englishName: "Flat Steel Bar",
		category: "型钢类"
	},
	{
		type: "grooved_fitting",
		name: "沟槽配件",
		englishName: "Grooved Fittings",
		category: "消防配件"
	}
];
var messages = {
	zh: {
		nav: {
			subtitle: "钢材重量计算与询盘工具",
			languageZh: "中文",
			languageEn: "English",
			instructions: "使用说明",
			sendRfq: "询盘",
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
			i_beam: "工字钢",
			round_steel_bar: "圆钢",
			flat_steel_bar: "扁铁",
			grooved_fitting: "沟槽配件"
		},
		materialList: {
			addHint: "选择产品并添加到材料清单",
			title: "材料清单",
			subtitle: "",
			emptyTitle: "从添加产品开始",
			emptyDescription: "选择产品、规格和数量，然后生成询盘。",
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
			pressureRating: "压力等级",
			threadedOutlet: "丝扣出口",
			finishedWeight: "成品单重",
			packingDetails: "包装详情",
			packingQuantity: "装箱数量",
			boltSpec: "螺栓规格",
			cartonNumber: "纸箱号",
			cartonSize: "纸箱尺寸",
			cartonWeight: "装箱重量",
			note: "备注",
			modelOrAngle: "型号或角度",
			thickness: "壁厚",
			thicknessShort: "厚度",
			theoreticalWeight: "理论重量",
			piecesPerBundle: "每扎支数",
			diameter: "直径",
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
			deleteModule: "删除产品",
			clearAll: "清空清单",
			close: "关闭"
		},
		customSize: {
			noSuitableSpec: "找不到合适的规格？",
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
			expand: "展开",
			collapse: "收起",
			missingRowsSuffix: "行",
			additionalMissingRows: "另有 {count} 行重量待补充"
		},
		container: {
			note: "集装箱数量仅按设定重量估算。实际装载还会受到产品长度、体积、包装方式、装柜方法以及当地运输限重影响。",
			configuredLoad: "设定载重"
		},
		inquiry: {
			title: "您的询盘已生成",
			intro: "请选择下方联系方式与我们的销售团队联系。",
			listTitle: "材料清单",
			customerName: "客户姓名",
			companyName: "公司名称",
			country: "国家/地区",
			whatsapp: "WhatsApp",
			email: "邮箱",
			destinationPort: "目的港",
			notes: "补充要求",
			copyContent: "复制询盘内容",
			contactActions: "联系方式",
			whatsappContact: "WhatsApp联系",
			emailContact: "邮箱联系",
			wechatContact: "微信联系",
			copyRfq: "复制询盘内容",
			copied: "已复制询盘内容",
			emailSubject: "钢材产品询盘",
			wechatIntro: "微信联系 {name}",
			wechatSearchPhone: "搜索手机号：{phone}",
			wechatScan: "或扫描二维码添加好友。",
			enlargeQr: "放大二维码",
			rfqHeader: "CANHOPE STEEL 询盘清单"
		},
		notices: {
			weightPending: "重量待补充",
			weightToConfirm: "重量待确认",
			notProvided: "未提供",
			notProvidedShort: "—",
			notApplicable: "—"
		},
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
			instructions: "How to Use",
			sendRfq: "Send RFQ",
			mobileRfq: "Send RFQ"
		},
		company: {
			name: "CANHOPE STEEL",
			englishName: "BY CANHOPE STEEL GROUP",
			description: "Since 1993, supplying steel pipes, structural steel, steel sheets, fire protection materials, and custom processing solutions for global projects.",
			officialWebsite: "Official Website",
			tags: [
				"Since 1993",
				"Factory & Inventory",
				"Project Supply Solutions",
				"Global Export Experience"
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
			i_beam: "I-Beam",
			round_steel_bar: "Round Steel Bar",
			flat_steel_bar: "Flat Steel Bar",
			grooved_fitting: "Grooved Fittings"
		},
		materialList: {
			addHint: "Select a product to add it to the material list",
			title: "Material List",
			subtitle: "",
			emptyTitle: "Start by adding a product",
			emptyDescription: "Select a product, choose the specification and quantity, then generate your RFQ.",
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
			pressureRating: "Pressure Rating",
			threadedOutlet: "Threaded Outlet",
			finishedWeight: "Finished Weight",
			packingDetails: "Packing Details",
			packingQuantity: "Packing Quantity",
			boltSpec: "Bolt Specification",
			cartonNumber: "Carton Number",
			cartonSize: "Carton Size",
			cartonWeight: "Carton Weight",
			note: "Note",
			modelOrAngle: "Model / Angle",
			thickness: "Wall Thickness",
			thicknessShort: "Thickness",
			theoreticalWeight: "Theoretical Weight",
			piecesPerBundle: "Pieces per Bundle",
			diameter: "Diameter",
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
			deleteModule: "Remove Product",
			clearAll: "Clear List",
			close: "Close"
		},
		customSize: {
			noSuitableSpec: "Can't find the right size?",
			useCustomSize: "Use a custom size.",
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
			expand: "Expand",
			collapse: "Collapse",
			missingRowsSuffix: "rows",
			additionalMissingRows: "{count} rows weight pending"
		},
		container: {
			note: "Container quantity is estimated by the configured weight only. Actual loading is also affected by product length, volume, packaging, loading method, and local transport weight limits.",
			configuredLoad: "Configured load"
		},
		inquiry: {
			title: "Your RFQ is ready",
			intro: "Choose a contact method below to contact our sales team.",
			listTitle: "Material List",
			customerName: "Customer Name",
			companyName: "Company Name",
			country: "Country / Region",
			whatsapp: "WhatsApp",
			email: "Email",
			destinationPort: "Destination Port",
			notes: "Additional Requirements",
			copyContent: "Copy RFQ Content",
			contactActions: "Contact Options",
			whatsappContact: "Contact via WhatsApp",
			emailContact: "Send by Email",
			wechatContact: "Contact via WeChat",
			copyRfq: "Copy RFQ",
			copied: "RFQ Content Copied",
			emailSubject: "Steel Product Inquiry",
			wechatIntro: "Contact {name} on WeChat",
			wechatSearchPhone: "Search by phone number: {phone}",
			wechatScan: "Or scan the QR code to add me.",
			enlargeQr: "Enlarge QR code",
			rfqHeader: "Hello, I would like to request a quotation for the following products:"
		},
		notices: {
			weightPending: "Weight Pending",
			weightToConfirm: "Weight to be confirmed",
			notProvided: "Not provided",
			notProvidedShort: "—",
			notApplicable: "—"
		},
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
var dynamic = "force-static";
var STORAGE_KEY = "canhope-steel-calculator-material-list";
var LOCALE_STORAGE_KEY = "steel-calculator-locale";
var pageTitles = {
	en: "Free Steel Weight Calculator & RFQ Builder | CANHOPE",
	zh: "CANHOPE STEEL | 钢材重量计算与询盘工具"
};
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
function isSteelPipeRow(row) {
	return isSteelPipeProduct(row.productType);
}
function isSquareTubeRow(row) {
	return isSquareTubeProduct(row.productType);
}
function isAngleSteelRow(row) {
	return row.productType === "angle_steel";
}
function isChannelSteelRow(row) {
	return row.productType === "channel_steel";
}
function isIBeamRow(row) {
	return row.productType === "i_beam";
}
function isRoundSteelBarRow(row) {
	return row.productType === "round_steel_bar";
}
function isFlatSteelBarRow(row) {
	return row.productType === "flat_steel_bar";
}
function isGroovedFittingRow(row) {
	return row.productType === "grooved_fitting";
}
function isCustomSizeProduct(type) {
	return isSteelPipeProduct(type) || isSquareTubeProduct(type) || type === "angle_steel" || type === "round_steel_bar" || type === "flat_steel_bar";
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
function getDefaultIBeamSelection() {
	const firstSpec = iBeamData[0];
	const firstWeight = firstSpec?.weightOptions[0];
	return {
		specId: firstSpec?.id ?? "",
		referenceWeightId: firstWeight?.id ?? ""
	};
}
function getDefaultRoundSteelBarSelection() {
	return { specId: roundSteelBarData[0]?.id ?? "" };
}
function getDefaultFlatSteelBarSelection() {
	const firstSpec = flatSteelBarData[0];
	const firstThickness = firstSpec?.thicknessOptions[0];
	return {
		specId: firstSpec?.id ?? "",
		thicknessId: firstThickness ? getFlatSteelBarThicknessId(firstThickness.thicknessMm) : ""
	};
}
function getGroovedFittingRecordSnapshot(record) {
	return {
		fittingTypeId: record?.productId ?? "",
		specification: record?.specification ?? "",
		pressureRatingMpa: record?.pressureRatingMpa ?? 0,
		finishedWeightKg: record?.finishedWeightKg ?? null,
		threadedOutlet: record?.threadedOutlet ?? false,
		boltSpec: record?.boltSpec ?? null,
		cartonNumber: record?.cartonNumber ?? null,
		cartonSize: record?.cartonSize ?? null,
		packingQuantityPcs: record?.packingQuantityPcs ?? null,
		cartonWeightKg: record?.cartonWeightKg ?? null,
		note: record?.note ?? null
	};
}
function getSelectedGroovedFittingRecord(row) {
	return findGroovedFittingRecord(row.fittingTypeId, row.specification, row.pressureRatingMpa) ?? null;
}
function getDefaultGroovedFittingSelection(fittingTypeId) {
	return getGroovedFittingRecordSnapshot(getFirstGroovedFittingRecord(fittingTypeId));
}
function migrateGroovedFittingTypeId(fittingTypeId, legacyFlangeType) {
	if (fittingTypeId !== "ab_type_flange") return fittingTypeId;
	return legacyFlangeType === "B" ? "type_b_grooved_flange" : "type_a_grooved_flange";
}
function getGroovedFittingProductLabel(productId, locale) {
	const product = groovedFittingProducts.find((item) => item.id === productId);
	if (!product) return productId;
	return locale === "zh" ? product.nameZh : product.nameEn;
}
function formatPressureRating(value, locale) {
	return value > 0 ? `${formatNumber(value, 1, locale)} MPa` : "";
}
function formatGroovedFittingSpecOption(record, locale) {
	return groovedFittingRecords.filter((item) => item.productId === record.productId && item.specification === record.specification).length > 1 ? `${record.specification} · ${formatPressureRating(record.pressureRatingMpa, locale)}` : record.specification;
}
function getStandardOptionMode(productType) {
	return productType === "channel_steel" || productType === "i_beam" ? "referenceWeight" : "thickness";
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
	if (productType === "i_beam") {
		const defaultSelection = getDefaultIBeamSelection();
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
	if (productType === "round_steel_bar") return {
		id,
		productType,
		dimensionMode: "standard",
		specId: getDefaultRoundSteelBarSelection().specId,
		lengthM: 6,
		quantity: 0,
		quantityUnit: "支"
	};
	if (productType === "flat_steel_bar") {
		const defaultSelection = getDefaultFlatSteelBarSelection();
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
	return {
		id,
		productType,
		...getDefaultGroovedFittingSelection(),
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
	if (productType === "round_steel_bar") return {
		id,
		productType,
		dimensionMode: "custom",
		specId: "",
		customDiameterMm: 10,
		lengthM: 6,
		quantity: 0,
		quantityUnit: "支"
	};
	if (productType === "flat_steel_bar") return {
		id,
		productType,
		dimensionMode: "custom",
		specId: "",
		thicknessId: "",
		customWidthMm: 40,
		customThicknessMm: 3,
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
function formatModuleRowCount(count, locale) {
	if (locale === "zh") return `（${count}行）`;
	return ` (${count} ${count === 1 ? "row" : "rows"})`;
}
function normalizeQuantityInput(value) {
	const digitsOnly = value.match(/^\d+/)?.[0] ?? "";
	if (!digitsOnly) return "";
	return String(Number(digitsOnly));
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
function formatNullablePiecesPerBundle(piecesPerBundle, locale, m) {
	if (!piecesPerBundle) return m.notices.notProvided;
	return formatChannelSteelPiecesPerBundle(piecesPerBundle, locale);
}
function formatReferenceWeightPerPiece(weightKg, locale) {
	return locale === "zh" ? `${formatNumber(weightKg, 2, locale)} kg / 6米` : `${formatNumber(weightKg, 2, locale)} kg / 6 m`;
}
function getIBeamSelectedWeightOption(specId, referenceWeightId) {
	return iBeamData.find((item) => item.id === specId)?.weightOptions.find((item) => item.id === referenceWeightId);
}
function getIBeamSelectedReferenceWeightLabel(specId, referenceWeightId, locale) {
	const option = getIBeamSelectedWeightOption(specId, referenceWeightId);
	return option ? formatReferenceWeightPerPiece(option.referenceWeightKgPerPiece, locale) : "";
}
function getIBeamSelectedBundleLabel(specId, referenceWeightId, locale, m) {
	const option = getIBeamSelectedWeightOption(specId, referenceWeightId);
	return option ? formatNullablePiecesPerBundle(option.piecesPerBundle, locale, m) : "";
}
function formatRoundSteelBarSpec(specId) {
	return roundSteelBarData.find((item) => item.id === specId)?.sizeLabel ?? "";
}
function getRoundSteelBarSelectedReferenceWeightLabel(specId, locale) {
	const spec = roundSteelBarData.find((item) => item.id === specId);
	return spec ? formatReferenceWeightPerPiece(spec.referenceWeightKgPerPiece, locale) : "";
}
function getRoundSteelBarSelectedBundleLabel(specId, locale, m) {
	const spec = roundSteelBarData.find((item) => item.id === specId);
	return spec ? formatNullablePiecesPerBundle(spec.piecesPerBundle, locale, m) : "";
}
function formatFlatSteelBarSpec(widthMm) {
	return `${widthMm} mm`;
}
function getFlatSteelBarSelectedSpecLabel(specId) {
	const spec = flatSteelBarData.find((item) => item.id === specId);
	return spec ? formatFlatSteelBarSpec(spec.widthMm) : "";
}
function getFlatSteelBarSelectedThicknessOption(specId, thicknessId) {
	return flatSteelBarData.find((item) => item.id === specId)?.thicknessOptions.find((item) => getFlatSteelBarThicknessId(item.thicknessMm) === thicknessId);
}
function getFlatSteelBarSelectedThicknessLabel(specId, thicknessId, locale) {
	const option = getFlatSteelBarSelectedThicknessOption(specId, thicknessId);
	return option ? formatThicknessValue(option.thicknessMm, locale) : "";
}
function getFlatSteelBarSelectedReferenceWeightLabel(specId, thicknessId, locale) {
	const option = getFlatSteelBarSelectedThicknessOption(specId, thicknessId);
	return option ? formatReferenceWeightPerPiece(option.referenceWeightKgPerPiece, locale) : "";
}
function getFlatSteelBarSelectedBundleLabel(specId, thicknessId, locale, m) {
	const option = getFlatSteelBarSelectedThicknessOption(specId, thicknessId);
	return option ? formatNullablePiecesPerBundle(option.piecesPerBundle, locale, m) : "";
}
function getStandardSteelPipeLengthM(row) {
	if (row.productType === "black_steel_pipe" && row.dimensionMode !== "custom") return (blackSteelPipeData.find((item) => item.id === row.specId)?.thicknessOptions.find((item) => getBlackSteelPipeThicknessId(item.thicknessMm) === row.thicknessId))?.standardLengthM ?? 6;
	return 6;
}
function isFixedLengthStandardSteelPipeRow(row) {
	return (row.productType === "galvanized_pipe" || row.productType === "galvanized_sheet_pipe" || row.productType === "black_steel_pipe" || isSquareTubeProduct(row.productType) || row.productType === "angle_steel" || row.productType === "channel_steel" || row.productType === "i_beam" || row.productType === "round_steel_bar" || row.productType === "flat_steel_bar") && ("dimensionMode" in row ? row.dimensionMode !== "custom" : true);
}
function getDisplayLengthM(row) {
	return isFixedLengthStandardSteelPipeRow(row) ? getStandardSteelPipeLengthM(row) : row.lengthM;
}
function getRowDescription(row, locale, m) {
	if (isSteelPipeRow(row)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.outerDiameter} ${row.customOuterDiameterMm || 0} ${locale === "zh" ? "mm" : "mm"} / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [row.productType === "galvanized_pipe" ? getGalvanizedPipeSelectedSpecLabel(row.specId, locale) : row.productType === "galvanized_sheet_pipe" ? getGalvanizedSheetPipeSelectedSpecLabel(row.specId, locale) : row.productType === "black_steel_pipe" ? getBlackSteelPipeSelectedSpecLabel(row.specId, locale) : row.specId, row.productType === "galvanized_pipe" ? getGalvanizedPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale) : row.productType === "galvanized_sheet_pipe" ? getGalvanizedSheetPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale) : row.productType === "black_steel_pipe" ? getBlackSteelPipeSelectedThicknessLabel(row.specId, row.thicknessId, locale) : row.thicknessId].filter(Boolean).join(" / ");
	}
	if (isSquareTubeRow(row)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${row.customWidthMm || 0}×${row.customHeightMm || 0} mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [getSquareTubeSelectedSpecLabel(row.productType, row.specId), getSquareTubeSelectedThicknessLabel(row.productType, row.specId, row.thicknessId, locale)].filter(Boolean).join(" / ");
	}
	if (isAngleSteelRow(row)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${row.customLegAMm || 0}×${row.customLegBMm || 0} mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [getAngleSteelSelectedSpecLabel(row.specId), getAngleSteelSelectedThicknessLabel(row.specId, row.thicknessId, locale)].filter(Boolean).join(" / ");
	}
	if (isChannelSteelRow(row)) return [getChannelSteelSelectedSpecLabel(row.specId), getChannelSteelSelectedReferenceWeightLabel(row.specId, row.referenceWeightId, locale)].filter(Boolean).join(" / ");
	if (isIBeamRow(row)) return [`${m.fields.spec} ${row.specId}`, `${m.fields.theoreticalWeight} ${getIBeamSelectedReferenceWeightLabel(row.specId, row.referenceWeightId, locale)}`].filter(Boolean).join(" / ");
	if (isRoundSteelBarRow(row)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.diameter} ${row.customDiameterMm || 0} mm`;
		return [`${m.fields.diameter} ${formatRoundSteelBarSpec(row.specId)}`, `${m.fields.theoreticalWeight} ${getRoundSteelBarSelectedReferenceWeightLabel(row.specId, locale)}`].filter(Boolean).join(" / ");
	}
	if (isFlatSteelBarRow(row)) {
		if (row.dimensionMode === "custom") return `${m.customSize.customSpec} ${productName(row.productType, m)} / ${m.fields.width} ${row.customWidthMm || 0} mm / ${m.fields.thickness} ${formatThicknessValue(row.customThicknessMm || 0, locale)}`;
		return [
			`${m.fields.width} ${getFlatSteelBarSelectedSpecLabel(row.specId)}`,
			`${m.fields.thickness} ${getFlatSteelBarSelectedThicknessLabel(row.specId, row.thicknessId, locale)}`,
			`${m.fields.theoreticalWeight} ${getFlatSteelBarSelectedReferenceWeightLabel(row.specId, row.thicknessId, locale)}`
		].filter(Boolean).join(" / ");
	}
	if (isGroovedFittingRow(row)) return [
		getGroovedFittingProductLabel(row.fittingTypeId, locale),
		row.specification,
		formatPressureRating(row.pressureRatingMpa, locale),
		row.threadedOutlet ? m.fields.threadedOutlet : ""
	].filter(Boolean).join(" / ");
	return "";
}
function getGroovedFittingRfqLines(row, calc, locale, m) {
	const record = getSelectedGroovedFittingRecord(row) ?? row;
	const baseLines = locale === "zh" ? [
		`${m.fields.fittingType}：${getGroovedFittingProductLabel(row.fittingTypeId, locale)}`,
		`${m.fields.spec}：${row.specification}`,
		`${m.fields.pressureRating}：${formatPressureRating(row.pressureRatingMpa, locale)}`,
		row.threadedOutlet ? `${m.fields.threadedOutlet}：${m.fields.threadedOutlet}` : "",
		`${m.fields.finishedWeight}：${calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightToConfirm) : m.notices.weightToConfirm}`,
		`${m.fields.quantity}：${formatQuantity(row.quantity, row.quantityUnit, locale)}`,
		`${m.fields.totalWeight}：${calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightToConfirm) : m.notices.weightToConfirm}`
	] : [
		`${m.fields.fittingType}: ${getGroovedFittingProductLabel(row.fittingTypeId, locale)}`,
		`${m.fields.spec}: ${row.specification}`,
		`${m.fields.pressureRating}: ${formatPressureRating(row.pressureRatingMpa, locale)}`,
		row.threadedOutlet ? `${m.fields.threadedOutlet}: ${m.fields.threadedOutlet}` : "",
		`${m.fields.finishedWeight}: ${calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightToConfirm) : m.notices.weightToConfirm}`,
		`${m.fields.quantity}: ${formatQuantity(row.quantity, row.quantityUnit, locale)}`,
		`${m.fields.totalWeight}: ${calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightToConfirm) : m.notices.weightToConfirm}`
	];
	const separator = locale === "zh" ? "：" : ": ";
	const packingLines = [
		[m.fields.boltSpec, record.boltSpec],
		[m.fields.cartonNumber, record.cartonNumber],
		[m.fields.cartonSize, record.cartonSize],
		[m.fields.packingQuantity, record.packingQuantityPcs ? formatPackingQuantity(record.packingQuantityPcs, locale, m) : ""],
		[m.fields.cartonWeight, record.cartonWeightKg ? formatCartonWeight(record.cartonWeightKg, locale, m) : ""],
		[m.fields.note, record.note]
	].filter(([, value]) => value !== null && value !== void 0 && value !== "").map(([label, value]) => `${label}${separator}${value}`);
	return [...baseLines, ...packingLines].filter(Boolean);
}
function getGroovedFittingRowRecordId(row) {
	return getGroovedFittingRecordId({
		productId: row.fittingTypeId,
		specification: row.specification,
		pressureRatingMpa: row.pressureRatingMpa
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
				if (normalizedRow.productType === "i_beam") {
					const firstSpec = iBeamData[0];
					const matchingSpec = iBeamData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
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
				if (normalizedRow.productType === "round_steel_bar") {
					const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
					const dimensionMode = normalizedRow.dimensionMode ?? "standard";
					if (dimensionMode === "standard") {
						const firstSpec = roundSteelBarData[0];
						const matchingSpec = roundSteelBarData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
						return {
							...normalizedRow,
							dimensionMode,
							specId: matchingSpec?.id ?? "",
							lengthM: 6,
							quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
						};
					}
					return {
						...normalizedRow,
						dimensionMode,
						lengthM,
						quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
					};
				}
				if (normalizedRow.productType === "flat_steel_bar") {
					const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
					const dimensionMode = normalizedRow.dimensionMode ?? "standard";
					if (dimensionMode === "standard") {
						const firstSpec = flatSteelBarData[0];
						const matchingSpec = flatSteelBarData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
						const matchingThickness = matchingSpec?.thicknessOptions.find((thickness) => getFlatSteelBarThicknessId(thickness.thicknessMm) === normalizedRow.thicknessId) ?? matchingSpec?.thicknessOptions[0];
						return {
							...normalizedRow,
							dimensionMode,
							specId: matchingSpec?.id ?? "",
							thicknessId: matchingThickness ? getFlatSteelBarThicknessId(matchingThickness.thicknessMm) : "",
							lengthM: 6,
							quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
						};
					}
					return {
						...normalizedRow,
						dimensionMode,
						lengthM,
						quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
					};
				}
				if (normalizedRow.productType === "grooved_fitting") {
					const legacyFlangeType = "flangeType" in normalizedRow ? normalizedRow.flangeType : void 0;
					const fittingTypeId = migrateGroovedFittingTypeId(normalizedRow.fittingTypeId, legacyFlangeType);
					const snapshot = getGroovedFittingRecordSnapshot(findGroovedFittingRecord(fittingTypeId, normalizedRow.specification, normalizedRow.pressureRatingMpa) ?? getFirstGroovedFittingRecord(fittingTypeId));
					return {
						...normalizedRow,
						...snapshot,
						quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0
					};
				}
				if (isSteelPipeProduct(normalizedRow.productType) || isSquareTubeProduct(normalizedRow.productType) || normalizedRow.productType === "angle_steel") {
					const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;
					const dimensionMode = normalizedRow.dimensionMode ?? "standard";
					if (isSquareTubeProduct(normalizedRow.productType) && dimensionMode === "standard") {
						const squareTubeProductType = normalizedRow.productType;
						const squareTubeData = getSquareTubeData(squareTubeProductType);
						const firstSpec = squareTubeData[0];
						const matchingSpec = squareTubeData.find((spec) => spec.id === normalizedRow.specId) ?? firstSpec;
						const matchingThickness = matchingSpec?.thicknessOptions.find((thickness) => getSquareTubeThicknessId(squareTubeProductType, thickness.thicknessMm) === normalizedRow.thicknessId) ?? matchingSpec?.thicknessOptions[0];
						return {
							...normalizedRow,
							dimensionMode,
							specId: matchingSpec?.id ?? "",
							thicknessId: matchingThickness ? getSquareTubeThicknessId(squareTubeProductType, matchingThickness.thicknessMm) : "",
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
	const [locale, setLocale] = (0, import_react.useState)("en");
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
	(0, import_react.useEffect)(() => {
		document.title = pageTitles[locale];
		document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
	}, [locale]);
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
					if (row.productType === "grooved_fitting") {
						lines.push(`${index + 1}. ${productName(row.productType, m)}`);
						getGroovedFittingRfqLines(row, calc, locale, m).forEach((line) => lines.push(`   ${line}`));
						return;
					}
					const description = getRowDescription(row, locale, m) || m.materialList.specPending;
					lines.push(`${index + 1}. ${description}`);
					if ("lengthM" in row) lines.push(`${m.fields.length}: ${formatLength(getDisplayLengthM(row), locale)}`);
					lines.push(`${m.fields.quantity}: ${formatQuantity(row.quantity, row.quantityUnit, locale)}`);
					if ((row.productType === "pre_galvanized_square_rectangular_tube" || row.productType === "angle_steel" || row.productType === "channel_steel" || row.productType === "i_beam" || row.productType === "round_steel_bar" || row.productType === "flat_steel_bar") && calc.hasWeight) lines.push(`${m.fields.pieceWeight}: ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}`);
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
				if (row.productType === "grooved_fitting") {
					lines.push(`${index + 1}. ${productName(row.productType, m)}`);
					getGroovedFittingRfqLines(row, calc, locale, m).forEach((line) => lines.push(`   ${line}`));
					return;
				}
				const description = getRowDescription(row, locale, m) || m.materialList.specPending;
				const length = "lengthM" in row ? `，${m.fields.length} ${formatLength(getDisplayLengthM(row), locale)}` : "";
				const pieceWeight = row.productType === "pre_galvanized_square_rectangular_tube" && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : row.productType === "angle_steel" && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : row.productType === "channel_steel" && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : (row.productType === "i_beam" || row.productType === "round_steel_bar" || row.productType === "flat_steel_bar") && calc.hasWeight ? `，${m.fields.pieceWeight} ${formatKg(calc.pieceWeightKg, locale, m.notices.weightPending)}` : "";
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
		className: "app-shell min-h-screen bg-slate-100 pb-32 text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(homepageJsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
				locale,
				onLanguageChange: switchLocale
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
							children: "Steel Tools Center"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl text-sm leading-6 text-slate-600",
							children: [
								"Free steel calculation tools developed by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-semibold text-[#0e5f9f]",
									href: "https://canhopesteel.com/",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "CANHOPE STEEL"
								}),
								" for steel buyers, contractors and project procurement teams."
							]
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-normal text-slate-950",
							children: locale === "en" ? "Steel Weight Calculator" : "钢材重量计算器"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "secondary-button",
								type: "button",
								onClick: clearAll,
								children: m.actions.clearAll
							})
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeightSummary, {
				summary,
				onOpenRfq: () => setIsRfqOpen(true),
				locale,
				m
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandTrustSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
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
	const customSizeProductType = isCustomSizeProduct(module.productType) ? module.productType : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: setModuleRef,
		className: "module-card scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "module-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-lg font-bold text-slate-950",
					children: [productName(module.productType, m), formatModuleRowCount(module.rows.length, locale)]
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
			customSizeProductType ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "custom-size-link",
				type: "button",
				onClick: () => onAddCustomRow(customSizeProductType),
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
	] : productType === "i_beam" ? [
		m.fields.spec,
		m.fields.theoreticalWeight,
		m.fields.length,
		m.fields.quantity,
		m.fields.piecesPerBundle,
		m.fields.unitWeight,
		m.fields.pieceWeightFull,
		m.fields.totalWeight,
		m.fields.action
	] : productType === "round_steel_bar" ? [
		m.fields.diameter,
		m.fields.theoreticalWeight,
		m.fields.length,
		m.fields.quantity,
		m.fields.piecesPerBundle,
		m.fields.unitWeight,
		m.fields.pieceWeightFull,
		m.fields.totalWeight,
		m.fields.action
	] : productType === "flat_steel_bar" ? [
		m.fields.width,
		m.fields.thickness,
		m.fields.theoreticalWeight,
		m.fields.length,
		m.fields.quantity,
		m.fields.piecesPerBundle,
		m.fields.unitWeight,
		m.fields.pieceWeightFull,
		m.fields.totalWeight,
		m.fields.action
	] : [
		m.fields.fittingType,
		m.fields.spec,
		m.fields.threadedOutlet,
		m.fields.quantity,
		m.fields.packingQuantity,
		m.fields.packingDetails,
		m.fields.finishedWeight,
		m.fields.totalWeight,
		m.fields.action
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
	if (isSteelPipeRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
	if (isSquareTubeRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
	if (isAngleSteelRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
	if (isChannelSteelRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
	if (isIBeamRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IBeamSpecSelect, {
			value: row.specId,
			onChange: (specId) => {
				const nextWeight = iBeamData.find((spec) => spec.id === specId)?.weightOptions[0];
				onUpdateRow(row.id, {
					specId,
					referenceWeightId: nextWeight?.id ?? "",
					lengthM: 6
				});
			},
			m
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IBeamReferenceWeightSelect, {
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: getIBeamSelectedBundleLabel(row.specId, row.referenceWeightId, locale, m) }),
		actionCells
	] });
	if (isRoundSteelBarRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		row.dimensionMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomRoundSteelBarCells, {
			row,
			onUpdateRow,
			m
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: m.customSize.customSpec })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundSteelBarSpecSelect, {
			value: row.specId,
			onChange: (specId) => onUpdateRow(row.id, {
				specId,
				lengthM: 6
			}),
			m
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			readOnly: true,
			value: getRoundSteelBarSelectedReferenceWeightLabel(row.specId, locale)
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.dimensionMode === "custom" ? m.notices.notProvided : getRoundSteelBarSelectedBundleLabel(row.specId, locale, m) }),
		actionCells
	] });
	if (isFlatSteelBarRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		row.dimensionMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomFlatSteelBarCells, {
			row,
			onUpdateRow,
			m
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: m.customSize.customSpec })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlatSteelBarSpecSelect, {
				value: row.specId,
				onChange: (specId) => {
					const nextThickness = flatSteelBarData.find((spec) => spec.id === specId)?.thicknessOptions[0];
					onUpdateRow(row.id, {
						specId,
						thicknessId: nextThickness ? getFlatSteelBarThicknessId(nextThickness.thicknessMm) : "",
						lengthM: 6
					});
				},
				m
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlatSteelBarThicknessSelect, {
				specId: row.specId,
				value: row.thicknessId,
				onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
				locale,
				m
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field",
				readOnly: true,
				value: getFlatSteelBarSelectedReferenceWeightLabel(row.specId, row.thicknessId, locale)
			}) })
		] }),
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.dimensionMode === "custom" ? m.notices.notProvided : getFlatSteelBarSelectedBundleLabel(row.specId, row.thicknessId, locale, m) }),
		actionCells
	] });
	if (isGroovedFittingRow(row)) {
		const selectedRecord = getSelectedGroovedFittingRecord(row);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroovedFittingFields, {
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: formatPackingQuantity(row.packingQuantityPcs, locale, m) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackingDetails, {
				record: selectedRecord ?? row,
				locale,
				m
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: calc.hasWeight ? formatKg(calc.pieceWeightKg, locale, m.notices.weightToConfirm) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingWeight, { m }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "font-bold text-slate-950",
				children: calc.hasWeight ? formatTonFromKg(calc.totalWeightKg, locale, m.notices.weightToConfirm) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingWeight, { m })
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
	}
	return null;
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
	if (isSteelPipeRow(row)) {
		if (row.dimensionMode === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.outerDiameter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customOuterDiameterMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customOuterDiameterMm: value })
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
				children: [m.fields.spec, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SteelPipeSpecSelect, {
					productType: row.productType,
					value: row.specId,
					onChange: (specId) => onUpdateRow(row.id, {
						specId,
						thicknessId: ""
					}),
					locale,
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SteelPipeThicknessSelect, {
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
	if (isSquareTubeRow(row)) {
		if (row.dimensionMode === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
				children: [m.fields.spec, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTubeSpecSelect, {
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
				children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTubeThicknessSelect, {
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
	if (isAngleSteelRow(row)) {
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
	if (isChannelSteelRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
	if (isIBeamRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.spec, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IBeamSpecSelect, {
				value: row.specId,
				onChange: (specId) => {
					const nextWeight = iBeamData.find((spec) => spec.id === specId)?.weightOptions[0];
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
			children: [m.fields.theoreticalWeight, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IBeamReferenceWeightSelect, {
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
				value: getIBeamSelectedBundleLabel(row.specId, row.referenceWeightId, locale, m)
			})]
		})
	] });
	if (isRoundSteelBarRow(row)) {
		if (row.dimensionMode === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.diameter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customDiameterMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customDiameterMm: value })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
			row,
			onUpdateRow,
			onAddCustomRow,
			locale,
			m
		})] });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.diameter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundSteelBarSpecSelect, {
					value: row.specId,
					onChange: (specId) => onUpdateRow(row.id, {
						specId,
						lengthM: 6
					}),
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.theoreticalWeight, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					readOnly: true,
					value: getRoundSteelBarSelectedReferenceWeightLabel(row.specId, locale)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
				row,
				onUpdateRow,
				onAddCustomRow,
				locale,
				m
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.piecesPerBundle, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					readOnly: true,
					value: getRoundSteelBarSelectedBundleLabel(row.specId, locale, m)
				})]
			})
		] });
	}
	if (isFlatSteelBarRow(row)) {
		if (row.dimensionMode === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.width, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: row.customWidthMm ?? 0,
					onChange: (value) => onUpdateRow(row.id, { customWidthMm: value })
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
				children: [m.fields.width, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlatSteelBarSpecSelect, {
					value: row.specId,
					onChange: (specId) => {
						const nextThickness = flatSteelBarData.find((spec) => spec.id === specId)?.thicknessOptions[0];
						onUpdateRow(row.id, {
							specId,
							thicknessId: nextThickness ? getFlatSteelBarThicknessId(nextThickness.thicknessMm) : "",
							lengthM: 6
						});
					},
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.thickness, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlatSteelBarThicknessSelect, {
					specId: row.specId,
					value: row.thicknessId,
					onChange: (thicknessId) => onUpdateRow(row.id, { thicknessId }),
					locale,
					m
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.theoreticalWeight, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					readOnly: true,
					value: getFlatSteelBarSelectedReferenceWeightLabel(row.specId, row.thicknessId, locale)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLengthQuantity, {
				row,
				onUpdateRow,
				onAddCustomRow,
				locale,
				m
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mobile-field-label",
				children: [m.fields.piecesPerBundle, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					readOnly: true,
					value: getFlatSteelBarSelectedBundleLabel(row.specId, row.thicknessId, locale, m)
				})]
			})
		] });
	}
	if (isGroovedFittingRow(row)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroovedFittingFields, {
			row,
			onUpdateRow,
			isMobile: true,
			locale,
			m
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.quantity, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityField, {
				className: "field",
				quantity: row.quantity,
				onChange: (quantity) => onUpdateRow(row.id, { quantity })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.packingDetails, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackingDetails, {
				record: getSelectedGroovedFittingRecord(row) ?? row,
				locale,
				m
			})]
		})
	] });
	return null;
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
		children: [m.fields.quantity, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityField, {
			className: "field",
			quantity: row.quantity,
			onChange: (quantity) => onUpdateRow(row.id, { quantity })
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
function CustomRoundSteelBarCells({ row, onUpdateRow, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.diameter }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customDiameterMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customDiameterMm: value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "mm" })
		]
	}) });
}
function CustomFlatSteelBarCells({ row, onUpdateRow, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-dimension-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.fields.width }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				value: row.customWidthMm ?? 0,
				onChange: (value) => onUpdateRow(row.id, { customWidthMm: value })
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
function IBeamSpecSelect({ value, onChange, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.selectSpec
		}), iBeamData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: spec.id,
			children: spec.size
		}, spec.id))]
	});
}
function IBeamReferenceWeightSelect({ specId, value, onChange, locale, m }) {
	const weightOptions = iBeamData.find((spec) => spec.id === specId)?.weightOptions ?? [];
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
			children: formatReferenceWeightPerPiece(option.referenceWeightKgPerPiece, locale)
		}, option.id))]
	});
}
function RoundSteelBarSpecSelect({ value, onChange, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.selectSpec
		}), roundSteelBarData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: spec.id,
			children: spec.sizeLabel
		}, spec.id))]
	});
}
function FlatSteelBarSpecSelect({ value, onChange, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: m.fields.selectSpec
		}), flatSteelBarData.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: spec.id,
			children: formatFlatSteelBarSpec(spec.widthMm)
		}, spec.id))]
	});
}
function FlatSteelBarThicknessSelect({ specId, value, onChange, locale, m }) {
	const thicknesses = flatSteelBarData.find((spec) => spec.id === specId)?.thicknessOptions ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "field",
		value,
		onChange: (event) => onChange(event.target.value),
		disabled: !specId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: thicknesses.length > 0 ? m.fields.selectThickness : m.fields.thicknessDataPending
		}), thicknesses.map((thickness) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: getFlatSteelBarThicknessId(thickness.thicknessMm),
			children: formatThicknessValue(thickness.thicknessMm, locale)
		}, getFlatSteelBarThicknessId(thickness.thicknessMm)))]
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityField, {
			className: "field w-20",
			quantity: row.quantity,
			onChange: (quantity) => onUpdateRow(row.id, { quantity })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-slate-500",
			children: locale === "zh" ? row.quantityUnit : "pcs"
		})]
	}) });
}
function QuantityField({ quantity, onChange, className }) {
	const [displayValue, setDisplayValue] = (0, import_react.useState)(String(Number.isFinite(quantity) ? quantity : 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className,
		inputMode: "numeric",
		pattern: "[0-9]*",
		type: "text",
		value: displayValue,
		onBlur: (event) => {
			if (event.currentTarget.value === "") {
				setDisplayValue("0");
				onChange(0);
			}
		},
		onChange: (event) => {
			const normalized = normalizeQuantityInput(event.target.value);
			setDisplayValue(normalized);
			if (normalized !== "") onChange(Number(normalized));
		},
		onFocus: (event) => {
			if (event.currentTarget.value === "0") event.currentTarget.select();
		},
		onKeyDown: (event) => {
			if ((event.key === "Enter" || event.key === "Tab") && event.currentTarget.value === "") {
				setDisplayValue("0");
				onChange(0);
			}
		}
	});
}
function GroovedFittingFields({ row, onUpdateRow, locale, m, isMobile = false }) {
	const specificationRecords = groovedFittingRecords.filter((item) => item.productId === row.fittingTypeId);
	const applyRecord = (record) => {
		onUpdateRow(row.id, getGroovedFittingRecordSnapshot(record));
	};
	const fittingTypeField = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: "field",
		value: row.fittingTypeId,
		onChange: (event) => applyRecord(getFirstGroovedFittingRecord(event.target.value)),
		children: groovedFittingProducts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: item.id,
			children: locale === "zh" ? item.nameZh : item.nameEn
		}, item.id))
	});
	const specificationField = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: "field",
		value: getGroovedFittingRowRecordId(row),
		onChange: (event) => {
			applyRecord(specificationRecords.find((item) => getGroovedFittingRecordId(item) === event.target.value) ?? null);
		},
		children: specificationRecords.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: getGroovedFittingRecordId(item),
			children: formatGroovedFittingSpecOption(item, locale)
		}, getGroovedFittingRecordId(item)))
	});
	const threadedOutletField = row.threadedOutlet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700",
		children: m.fields.threadedOutlet
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-slate-400",
		children: "—"
	});
	if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.fittingType, fittingTypeField]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.spec, specificationField]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mobile-field-label",
			children: [m.fields.threadedOutlet, threadedOutletField]
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fittingTypeField }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: specificationField }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: threadedOutletField })
	] });
}
function formatPackingQuantity(value, locale, m) {
	if (!value) return m.notices.notProvidedShort;
	return locale === "zh" ? `${formatNumber(value, 0, locale)} 个/箱` : `${formatNumber(value, 0, locale)} pcs/carton`;
}
function formatCartonWeight(value, locale, m) {
	if (!value) return m.notices.notProvidedShort;
	return locale === "zh" ? `${formatNumber(value, 2, locale)} kg/箱` : `${formatNumber(value, 2, locale)} kg/carton`;
}
function PackingDetails({ record, locale, m }) {
	const details = [
		[m.fields.boltSpec, record.boltSpec],
		[m.fields.cartonNumber, record.cartonNumber],
		[m.fields.cartonSize, record.cartonSize],
		[m.fields.packingQuantity, formatPackingQuantity(record.packingQuantityPcs, locale, m)],
		[m.fields.cartonWeight, formatCartonWeight(record.cartonWeightKg, locale, m)],
		[m.fields.note, record.note]
	].filter(([, value]) => value !== null && value !== void 0 && value !== "" && value !== m.notices.notProvidedShort);
	if (details.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-slate-400",
		children: "—"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "packing-details",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: m.fields.packingDetails }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: details.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })] }, label)) })]
	});
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
		children: m.notices.weightToConfirm
	});
}
function RfqModal({ customer, setCustomer, materialList, summary, rfqText, copied, onCopy, onClose, locale, m }) {
	const [showWechat, setShowWechat] = (0, import_react.useState)(false);
	const [showLargeQr, setShowLargeQr] = (0, import_react.useState)(false);
	function updateCustomer(key, value) {
		setCustomer({
			...customer,
			[key]: value
		});
	}
	function openWhatsApp() {
		const url = `https://wa.me/${contactConfig.whatsapp.linkNumber}?text=${encodeURIComponent(rfqText)}`;
		window.open(url, "_blank", "noopener,noreferrer");
	}
	function openEmail() {
		const subject = encodeURIComponent(m.inquiry.emailSubject);
		const body = encodeURIComponent(rfqText);
		window.open(`mailto:${contactConfig.email}?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
	}
	const wechatIntro = m.inquiry.wechatIntro.replace("{name}", contactConfig.wechat.contactName);
	const wechatSearchPhone = m.inquiry.wechatSearchPhone.replace("{phone}", contactConfig.wechat.searchPhoneNumber);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "modal-backdrop",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": m.inquiry.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rfq-contact-actions",
							"aria-label": m.inquiry.contactActions,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "primary-button justify-center py-3",
									type: "button",
									onClick: openWhatsApp,
									children: m.inquiry.whatsappContact
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "secondary-button justify-center py-3",
									type: "button",
									onClick: openEmail,
									children: m.inquiry.emailContact
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "secondary-button justify-center py-3",
									type: "button",
									onClick: () => setShowWechat((current) => !current),
									children: m.inquiry.wechatContact
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "secondary-button justify-center py-3",
									type: "button",
									onClick: onCopy,
									children: copied ? m.inquiry.copied : m.inquiry.copyRfq
								})
							]
						}),
						showWechat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wechat-contact-panel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base font-bold text-slate-950",
									children: wechatIntro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-semibold text-slate-700",
									children: wechatSearchPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-slate-500",
									children: m.inquiry.wechatScan
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "wechat-qr-button",
								type: "button",
								onClick: () => setShowLargeQr(true),
								"aria-label": m.inquiry.enlargeQr,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: contactConfig.wechat.qrCodePath,
									alt: m.inquiry.wechatContact
								})
							})]
						}) : null
					]
				})]
			})]
		}), showLargeQr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "qr-lightbox",
			type: "button",
			onClick: () => setShowLargeQr(false),
			"aria-label": m.actions.close,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: contactConfig.wechat.qrCodePath,
				alt: m.inquiry.wechatContact
			})
		}) : null]
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
export { Home as default, dynamic };
