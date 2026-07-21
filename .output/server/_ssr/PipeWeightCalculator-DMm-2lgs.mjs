import { t as require_jsx_runtime, w as __toESM, y as require_react } from "./ssr.mjs";
import { t as calculatorPaths } from "./seo-buLpr6UB.mjs";
import { E as getGalvanizedSheetPipeThicknessId, S as getBlackSteelPipeThicknessId, T as getGalvanizedPipeThicknessId, a as calculateRow, c as contactConfig, l as estimate40HQ, m as formatNumber, r as blackSteelPipeData, v as galvanizedPipeData, y as galvanizedSheetPipeData } from "./calculations-ZcKnzvwQ.mjs";
import { t as Link } from "./link-Ds33me9j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PipeWeightCalculator-DMm-2lgs.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var productOptions = [
	{
		id: "galvanized_pipe",
		name: "Galvanized Steel Pipe"
	},
	{
		id: "galvanized_sheet_pipe",
		name: "Pre-Galvanized Round Steel Pipe"
	},
	{
		id: "black_steel_pipe",
		name: "Black Welded Steel Pipe"
	}
];
function getProductData(productType) {
	if (productType === "galvanized_pipe") return galvanizedPipeData;
	if (productType === "galvanized_sheet_pipe") return galvanizedSheetPipeData;
	return blackSteelPipeData;
}
function getThicknessId(productType, thicknessMm) {
	if (productType === "galvanized_pipe") return getGalvanizedPipeThicknessId(thicknessMm);
	if (productType === "galvanized_sheet_pipe") return getGalvanizedSheetPipeThicknessId(thicknessMm);
	return getBlackSteelPipeThicknessId(thicknessMm);
}
function getSpecLabel(productType, spec) {
	if (productType === "galvanized_pipe") {
		const galvanizedSpec = spec;
		return `${galvanizedSpec.dn} / ${galvanizedSpec.inchSize} / OD ${galvanizedSpec.outerDiameterMm} mm`;
	}
	const pipeSpec = spec;
	return [
		"dn" in pipeSpec ? pipeSpec.dn : null,
		"inchSize" in pipeSpec && pipeSpec.inchSize ? `${pipeSpec.inchSize}\"` : null,
		`OD ${pipeSpec.outerDiameterMm} mm`
	].filter(Boolean).join(" / ");
}
function numberOrZero(value) {
	const number = Number(value);
	return Number.isFinite(number) ? number : 0;
}
function PipeWeightCalculator() {
	const [mode, setMode] = (0, import_react.useState)("standard");
	const [productType, setProductType] = (0, import_react.useState)("galvanized_pipe");
	const [specId, setSpecId] = (0, import_react.useState)(galvanizedPipeData[0]?.id ?? "");
	const [thicknessId, setThicknessId] = (0, import_react.useState)(getGalvanizedPipeThicknessId(galvanizedPipeData[0]?.thicknessOptions[0]?.thicknessMm ?? 0));
	const [customOd, setCustomOd] = (0, import_react.useState)("48");
	const [customThickness, setCustomThickness] = (0, import_react.useState)("2.0");
	const [customLength, setCustomLength] = (0, import_react.useState)("6");
	const [quantity, setQuantity] = (0, import_react.useState)("1");
	const specs = getProductData(productType);
	const selectedSpec = specs.find((item) => item.id === specId) ?? null;
	const thicknessOptions = selectedSpec?.thicknessOptions ?? [];
	const selectedThickness = thicknessOptions.find((item) => getThicknessId(productType, item.thicknessMm) === thicknessId);
	const row = mode === "standard" ? {
		id: "pipe-tool-row",
		productType,
		dimensionMode: "standard",
		specId,
		thicknessId,
		lengthM: productType === "black_steel_pipe" ? selectedThickness?.standardLengthM ?? 0 : selectedSpec && "referenceLengthM" in selectedSpec ? selectedSpec.referenceLengthM : 0,
		quantity: numberOrZero(quantity),
		quantityUnit: "支"
	} : {
		id: "pipe-tool-row",
		productType: "black_steel_pipe",
		dimensionMode: "custom",
		specId: "",
		thicknessId: "",
		customOuterDiameterMm: numberOrZero(customOd),
		customThicknessMm: numberOrZero(customThickness),
		lengthM: numberOrZero(customLength),
		quantity: numberOrZero(quantity),
		quantityUnit: "支"
	};
	const calculation = {
		row,
		result: calculateRow(row)
	};
	const errors = getValidationErrors({
		mode,
		productType,
		selectedSpec,
		selectedThickness,
		customOd,
		customThickness,
		customLength,
		quantity
	});
	const result = calculation.result.hasWeight && errors.length === 0 ? calculation.result : null;
	const totalWeightKg = result?.totalWeightKg ?? 0;
	const totalWeightTon = totalWeightKg / 1e3;
	const container = estimate40HQ(totalWeightTon);
	const inquiryText = buildInquiryText(mode, productType, selectedSpec, selectedThickness, calculation.row, totalWeightKg);
	function selectProduct(nextProduct) {
		const nextSpec = getProductData(nextProduct)[0];
		setProductType(nextProduct);
		setSpecId(nextSpec?.id ?? "");
		setThicknessId(getThicknessId(nextProduct, nextSpec?.thicknessOptions[0]?.thicknessMm ?? 0));
	}
	function selectSpec(nextSpecId) {
		const nextSpec = specs.find((item) => item.id === nextSpecId);
		setSpecId(nextSpecId);
		setThicknessId(getThicknessId(productType, nextSpec?.thicknessOptions[0]?.thicknessMm ?? 0));
	}
	function openWhatsApp() {
		window.open(`https://wa.me/${contactConfig.whatsapp.linkNumber}?text=${encodeURIComponent(inquiryText)}`, "_blank", "noopener,noreferrer");
	}
	function openEmail() {
		window.open(`mailto:${contactConfig.email}?subject=${encodeURIComponent("Pipe Weight Calculator Inquiry")}&body=${encodeURIComponent(inquiryText)}`, "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7",
		"aria-label": "Pipe weight calculator",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Calculation method",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: mode === "standard" ? "primary-button" : "secondary-button",
					type: "button",
					onClick: () => setMode("standard"),
					children: "Standard Pipe Specification"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: mode === "custom" ? "primary-button" : "secondary-button",
					type: "button",
					onClick: () => setMode("custom"),
					children: "Custom Pipe Size"
				})]
			}),
			mode === "standard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				"data-testid": "pipe-standard-inputs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Product Type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field",
							value: productType,
							onChange: (event) => selectProduct(event.target.value),
							children: productOptions.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: product.id,
								children: product.name
							}, product.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Size / Nominal Size",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field",
							value: specId,
							onChange: (event) => selectSpec(event.target.value),
							children: specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: spec.id,
								children: getSpecLabel(productType, spec)
							}, spec.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Wall Thickness",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field",
							value: thicknessId,
							onChange: (event) => setThicknessId(event.target.value),
							children: thicknessOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: getThicknessId(productType, option.thicknessMm),
								children: [formatThickness(option.thicknessMm), " mm"]
							}, option.thicknessMm))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Stock Length",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field bg-slate-100",
							value: `${calculation.row.lengthM || "—"} m`,
							readOnly: true,
							"aria-readonly": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Quantity",
						value: quantity,
						onChange: setQuantity,
						min: "1"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				"data-testid": "pipe-custom-inputs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Outside Diameter (mm)",
						value: customOd,
						onChange: setCustomOd,
						min: "0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Wall Thickness (mm)",
						value: customThickness,
						onChange: setCustomThickness,
						min: "0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Length (m)",
						value: customLength,
						onChange: setCustomLength,
						min: "0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Quantity",
						value: quantity,
						onChange: setQuantity,
						min: "1"
					})
				]
			}),
			errors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-medium text-red-700",
				role: "alert",
				children: errors[0]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 rounded-lg bg-slate-50 p-5",
				"data-testid": "pipe-weight-results",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-slate-950",
							children: "Theoretical weight estimate"
						}), result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800",
							children: "Calculation ready"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Weight per Meter",
								value: result ? `${formatNumber(result.unitWeightKg ?? 0, 3, "en")} kg/m` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Weight per Piece",
								value: result ? `${formatNumber(result.pieceWeightKg ?? 0, 2, "en")} kg` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Total Quantity",
								value: result ? `${formatNumber(numberOrZero(quantity), 0, "en")} pcs` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Total Weight in kg",
								value: result ? `${formatNumber(totalWeightKg, 2, "en")} kg` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Total Weight in metric tons",
								value: result ? `${formatNumber(totalWeightTon, 3, "en")} metric tons` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Estimated 40HQ Containers",
								value: result ? `${container.containerCount}` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Remaining Capacity",
								value: result && container.remainingCapacityTon !== null ? `${formatNumber(container.remainingCapacityTon, 2, "en")} t` : "—"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-6 text-slate-600",
						"data-testid": "pipe-40hq-note",
						children: "The 40HQ result is a weight-based estimate only. Actual loading also depends on pipe length, bundle size, volume, packaging and local transport limits."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-slate-950",
						children: "Need Steel Pipes for Your Project?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-6 text-slate-700",
						children: "After calculating the theoretical weight, review CANHOPE steel pipe specifications or send us the size, wall thickness, length and quantity for quotation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "secondary-button justify-center",
								href: "https://canhopesteel.com/products/pipes/galvanized-pipe/",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "View Galvanized Steel Pipe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "secondary-button justify-center",
								href: "https://canhopesteel.com/products/",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Browse CANHOPE Products"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "secondary-button justify-center",
								href: calculatorPaths.home,
								children: "Build a Multi-Product RFQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "primary-button justify-center",
								type: "button",
								onClick: openWhatsApp,
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "secondary-button justify-center",
								type: "button",
								onClick: openEmail,
								children: "Email"
							})
						]
					})
				]
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-semibold text-slate-700",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block",
			children
		})]
	});
}
function NumberField({ label, value, onChange, min }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			type: "number",
			inputMode: "decimal",
			min,
			step: "any",
			value,
			onChange: (event) => onChange(event.target.value)
		})
	});
}
function Result({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-slate-200 bg-white p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 break-words text-base font-bold text-slate-950",
			children: value
		})]
	});
}
function formatThickness(value) {
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 2,
		useGrouping: false
	}).format(value);
}
function getValidationErrors({ mode, selectedSpec, selectedThickness, customOd, customThickness, customLength, quantity }) {
	if (mode === "standard") {
		if (!selectedSpec || !selectedThickness) return ["Choose a valid standard pipe size and wall thickness."];
		if (!Number.isFinite(numberOrZero(quantity)) || numberOrZero(quantity) <= 0) return ["Enter a quantity greater than 0."];
		return [];
	}
	const od = numberOrZero(customOd), thickness = numberOrZero(customThickness), length = numberOrZero(customLength), amount = numberOrZero(quantity);
	if (od <= 0 || thickness <= 0 || length <= 0 || amount <= 0) return ["Enter positive values for OD, wall thickness, length and quantity."];
	if (thickness * 2 >= od) return ["Wall thickness must be less than half of the outside diameter."];
	return [];
}
function buildInquiryText(mode, productType, spec, thickness, row, totalWeightKg) {
	if (mode === "standard" && spec && thickness) return `Hello, I would like a quotation for ${productOptions.find((item) => item.id === productType)?.name ?? "Steel Pipe"}: OD ${spec.outerDiameterMm} mm, wall thickness ${formatThickness(thickness.thicknessMm)} mm, stock length ${row.lengthM} m, quantity ${row.quantity} pcs. The calculator shows a theoretical total weight of ${formatNumber(totalWeightKg, 2, "en")} kg.`;
	if (mode === "custom" && totalWeightKg > 0) return `Hello, I would like a quotation for a custom black welded steel pipe: OD ${row.customOuterDiameterMm} mm, wall thickness ${row.customThicknessMm} mm, length ${row.lengthM} m, quantity ${row.quantity} pcs. The calculator shows a theoretical total weight of ${formatNumber(totalWeightKg, 2, "en")} kg.`;
	return "Hello, I would like a quotation for steel pipe. Please help confirm the suitable size, wall thickness, length, quantity, packing and shipment requirements.";
}
//#endregion
export { PipeWeightCalculator };
