import { t as require_jsx_runtime } from "./ssr.mjs";
import { t as calculatorPaths } from "./seo-buLpr6UB.mjs";
import { t as Link } from "./link-Ds33me9j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteHeader-5dwCL4Lr.js
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader({ locale, onLanguageChange }) {
	const languageControl = locale && onLanguageChange ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1 text-xs font-semibold text-slate-600",
		"aria-label": "Language selection",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: locale === "zh" ? "text-[#0e2a47]" : "hover:text-[#0e2a47]",
				type: "button",
				onClick: () => onLanguageChange("zh"),
				children: "中文"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-slate-300",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: locale === "en" ? "text-[#0e2a47]" : "hover:text-[#0e2a47]",
				type: "button",
				onClick: () => onLanguageChange("en"),
				children: "EN"
			})
		]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-slate-200 bg-white shadow-[0_1px_3px_rgb(15_23_42/0.04)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-14 max-w-[1500px] items-center gap-3 px-4 py-2 sm:min-h-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "flex min-w-0 items-center gap-2",
				href: "https://canhopesteel.com/",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Visit the CANHOPE STEEL official website",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: calculatorPaths.asset("/canhope-logo.png"),
					alt: "CANHOPE STEEL logo",
					className: "h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-xs font-semibold tracking-wide text-slate-500 sm:inline",
					children: "Steel Tools Center"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "ml-auto flex min-w-0 items-center gap-3 text-xs font-semibold sm:gap-5 sm:text-sm",
				"aria-label": "Steel tools navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "hidden whitespace-nowrap text-slate-600 hover:text-[#0e2a47] md:inline",
						href: calculatorPaths.home,
						children: "Full Steel Calculator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "whitespace-nowrap text-slate-600 hover:text-[#0e2a47]",
						href: calculatorPaths.pipeWeightCalculator,
						children: "Pipe Calculator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "hidden whitespace-nowrap text-slate-600 hover:text-[#0e2a47] md:inline",
						href: "https://canhopesteel.com/products/",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Products"
					}),
					languageControl
				]
			})]
		})
	});
}
//#endregion
export { SiteHeader };
