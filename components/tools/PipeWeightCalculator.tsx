"use client";

import Link from "next/link";
import { useState } from "react";
import { contactConfig } from "@/config/contact";
import {
  blackSteelPipeData,
  getBlackSteelPipeThicknessId,
} from "@/data/black-steel-pipe/black-steel-pipe-data";
import {
  galvanizedPipeData,
  getGalvanizedPipeThicknessId,
} from "@/data/galvanized-pipe/galvanized-pipe-data";
import {
  galvanizedSheetPipeData,
  getGalvanizedSheetPipeThicknessId,
} from "@/data/galvanized-sheet-pipe/galvanized-sheet-pipe-data";
import { calculateRow, estimate40HQ } from "@/lib/calculations";
import { formatNumber } from "@/lib/format";
import type { SteelPipeProductType, SteelPipeRow } from "@/types/materials";

type Mode = "standard" | "custom";

type ProductOption = {
  id: SteelPipeProductType;
  name: string;
};

const productOptions: ProductOption[] = [
  { id: "galvanized_pipe", name: "Galvanized Steel Pipe" },
  { id: "galvanized_sheet_pipe", name: "Pre-Galvanized Round Steel Pipe" },
  { id: "black_steel_pipe", name: "Black Welded Steel Pipe" },
];

function getProductData(productType: SteelPipeProductType) {
  if (productType === "galvanized_pipe") return galvanizedPipeData;
  if (productType === "galvanized_sheet_pipe") return galvanizedSheetPipeData;
  return blackSteelPipeData;
}

function getThicknessId(productType: SteelPipeProductType, thicknessMm: number) {
  if (productType === "galvanized_pipe") return getGalvanizedPipeThicknessId(thicknessMm);
  if (productType === "galvanized_sheet_pipe") return getGalvanizedSheetPipeThicknessId(thicknessMm);
  return getBlackSteelPipeThicknessId(thicknessMm);
}

type PipeSpec = (typeof galvanizedPipeData)[number] | (typeof galvanizedSheetPipeData)[number] | (typeof blackSteelPipeData)[number];

function getSpecLabel(productType: SteelPipeProductType, spec: PipeSpec) {
  if (productType === "galvanized_pipe") {
    const galvanizedSpec = spec as (typeof galvanizedPipeData)[number];
    return `${galvanizedSpec.dn} / ${galvanizedSpec.inchSize} / OD ${galvanizedSpec.outerDiameterMm} mm`;
  }
  const pipeSpec = spec as (typeof blackSteelPipeData)[number] | (typeof galvanizedSheetPipeData)[number];
  return [("dn" in pipeSpec ? pipeSpec.dn : null), ("inchSize" in pipeSpec && pipeSpec.inchSize) ? `${pipeSpec.inchSize}\"` : null, `OD ${pipeSpec.outerDiameterMm} mm`]
    .filter(Boolean)
    .join(" / ");
}

function numberOrZero(value: string) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

export function PipeWeightCalculator() {
  const [mode, setMode] = useState<Mode>("standard");
  const [productType, setProductType] = useState<SteelPipeProductType>("galvanized_pipe");
  const [specId, setSpecId] = useState(galvanizedPipeData[0]?.id ?? "");
  const [thicknessId, setThicknessId] = useState(
    getGalvanizedPipeThicknessId(galvanizedPipeData[0]?.thicknessOptions[0]?.thicknessMm ?? 0),
  );
  const [customOd, setCustomOd] = useState("48");
  const [customThickness, setCustomThickness] = useState("2.0");
  const [customLength, setCustomLength] = useState("6");
  const [quantity, setQuantity] = useState("1");

  const specs = getProductData(productType);
  const selectedSpec = specs.find((item) => item.id === specId) ?? null;
  const thicknessOptions = selectedSpec?.thicknessOptions ?? [];
  const selectedThickness = thicknessOptions.find(
    (item) => getThicknessId(productType, item.thicknessMm) === thicknessId,
  );

  const row: SteelPipeRow = mode === "standard"
    ? {
        id: "pipe-tool-row", productType, dimensionMode: "standard", specId, thicknessId,
        lengthM: productType === "black_steel_pipe"
          ? (selectedThickness as { standardLengthM?: number } | undefined)?.standardLengthM ?? 0
          : (selectedSpec && "referenceLengthM" in selectedSpec ? selectedSpec.referenceLengthM : 0),
        quantity: numberOrZero(quantity), quantityUnit: "支",
      }
    : {
        id: "pipe-tool-row", productType: "black_steel_pipe", dimensionMode: "custom", specId: "", thicknessId: "",
        customOuterDiameterMm: numberOrZero(customOd), customThicknessMm: numberOrZero(customThickness),
        lengthM: numberOrZero(customLength), quantity: numberOrZero(quantity), quantityUnit: "支",
      };
  const calculation = { row, result: calculateRow(row) };

  const errors = getValidationErrors({
    mode,
    productType,
    selectedSpec,
    selectedThickness,
    customOd,
    customThickness,
    customLength,
    quantity,
  });
  const result = calculation.result.hasWeight && errors.length === 0 ? calculation.result : null;
  const totalWeightKg = result?.totalWeightKg ?? 0;
  const totalWeightTon = totalWeightKg / 1000;
  const container = estimate40HQ(totalWeightTon);
  const inquiryText = buildInquiryText(mode, productType, selectedSpec, selectedThickness, calculation.row, totalWeightKg);

  function selectProduct(nextProduct: SteelPipeProductType) {
    const nextSpec = getProductData(nextProduct)[0];
    setProductType(nextProduct);
    setSpecId(nextSpec?.id ?? "");
    setThicknessId(getThicknessId(nextProduct, nextSpec?.thicknessOptions[0]?.thicknessMm ?? 0));
  }

  function selectSpec(nextSpecId: string) {
    const nextSpec = specs.find((item) => item.id === nextSpecId);
    setSpecId(nextSpecId);
    setThicknessId(getThicknessId(productType, nextSpec?.thicknessOptions[0]?.thicknessMm ?? 0));
  }

  function openWhatsApp() {
    window.open(
      `https://wa.me/${contactConfig.whatsapp.linkNumber}?text=${encodeURIComponent(inquiryText)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function openEmail() {
    window.open(
      `mailto:${contactConfig.email}?subject=${encodeURIComponent("Pipe Weight Calculator Inquiry")}&body=${encodeURIComponent(inquiryText)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-label="Pipe weight calculator">
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Calculation method">
        <button className={mode === "standard" ? "primary-button" : "secondary-button"} type="button" onClick={() => setMode("standard")}>
          Standard Pipe Specification
        </button>
        <button className={mode === "custom" ? "primary-button" : "secondary-button"} type="button" onClick={() => setMode("custom")}>
          Custom Pipe Size
        </button>
      </div>

      {mode === "standard" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" data-testid="pipe-standard-inputs">
          <Field label="Product Type">
            <select className="field" value={productType} onChange={(event) => selectProduct(event.target.value as SteelPipeProductType)}>
              {productOptions.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
            </select>
          </Field>
          <Field label="Size / Nominal Size">
            <select className="field" value={specId} onChange={(event) => selectSpec(event.target.value)}>
              {specs.map((spec) => <option key={spec.id} value={spec.id}>{getSpecLabel(productType, spec)}</option>)}
            </select>
          </Field>
          <Field label="Wall Thickness">
            <select className="field" value={thicknessId} onChange={(event) => setThicknessId(event.target.value)}>
              {thicknessOptions.map((option) => <option key={option.thicknessMm} value={getThicknessId(productType, option.thicknessMm)}>{formatThickness(option.thicknessMm)} mm</option>)}
            </select>
          </Field>
          <Field label="Stock Length">
            <input className="field bg-slate-100" value={`${calculation.row.lengthM || "—"} m`} readOnly aria-readonly="true" />
          </Field>
          <NumberField label="Quantity" value={quantity} onChange={setQuantity} min="1" />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="pipe-custom-inputs">
          <NumberField label="Outside Diameter (mm)" value={customOd} onChange={setCustomOd} min="0" />
          <NumberField label="Wall Thickness (mm)" value={customThickness} onChange={setCustomThickness} min="0" />
          <NumberField label="Length (m)" value={customLength} onChange={setCustomLength} min="0" />
          <NumberField label="Quantity" value={quantity} onChange={setQuantity} min="1" />
        </div>
      )}

      {errors.length > 0 ? <p className="mt-4 text-sm font-medium text-red-700" role="alert">{errors[0]}</p> : null}

      <div className="mt-7 rounded-lg bg-slate-50 p-5" data-testid="pipe-weight-results" aria-live="polite">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-950">Theoretical weight estimate</h2>
          {result ? <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">Calculation ready</span> : null}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Result label="Weight per Meter" value={result ? `${formatNumber(result.unitWeightKg ?? 0, 3, "en")} kg/m` : "—"} />
          <Result label="Weight per Piece" value={result ? `${formatNumber(result.pieceWeightKg ?? 0, 2, "en")} kg` : "—"} />
          <Result label="Total Quantity" value={result ? `${formatNumber(numberOrZero(quantity), 0, "en")} pcs` : "—"} />
          <Result label="Total Weight in kg" value={result ? `${formatNumber(totalWeightKg, 2, "en")} kg` : "—"} />
          <Result label="Total Weight in metric tons" value={result ? `${formatNumber(totalWeightTon, 3, "en")} metric tons` : "—"} />
          <Result label="Estimated 40HQ Containers" value={result ? `${container.containerCount}` : "—"} />
          <Result label="Remaining Capacity" value={result && container.remainingCapacityTon !== null ? `${formatNumber(container.remainingCapacityTon, 2, "en")} t` : "—"} />
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600" data-testid="pipe-40hq-note">
          The 40HQ result is a weight-based estimate only. Actual loading also depends on pipe length, bundle size, volume, packaging and local transport limits.
        </p>
      </div>

      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5">
        <h2 className="text-lg font-bold text-slate-950">Need Steel Pipes for Your Project?</h2>
        <p className="mt-1 text-sm leading-6 text-slate-700">After calculating the theoretical weight, review CANHOPE steel pipe specifications or send us the size, wall thickness, length and quantity for quotation.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="secondary-button justify-center" href="https://canhopesteel.com/products/pipes/galvanized-pipe/" target="_blank" rel="noopener noreferrer">View Galvanized Steel Pipe</a>
          <a className="secondary-button justify-center" href="https://canhopesteel.com/products/" target="_blank" rel="noopener noreferrer">Browse CANHOPE Products</a>
          <Link className="secondary-button justify-center" href="/">Build a Multi-Product RFQ</Link>
          <button className="primary-button justify-center" type="button" onClick={openWhatsApp}>WhatsApp</button>
          <button className="secondary-button justify-center" type="button" onClick={openEmail}>Email</button>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-slate-700">{label}<span className="mt-1 block">{children}</span></label>;
}

function NumberField({ label, value, onChange, min }: { label: string; value: string; onChange: (value: string) => void; min: string }) {
  return <Field label={label}><input className="field" type="number" inputMode="decimal" min={min} step="any" value={value} onChange={(event) => onChange(event.target.value)} /></Field>;
}

function Result({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-slate-200 bg-white p-3"><p className="text-xs text-slate-500">{label}</p><p className="mt-1 break-words text-base font-bold text-slate-950">{value}</p></div>;
}

function formatThickness(value: number) {
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 2, useGrouping: false }).format(value);
}

function getValidationErrors({ mode, selectedSpec, selectedThickness, customOd, customThickness, customLength, quantity }: {
  mode: Mode; productType: SteelPipeProductType; selectedSpec: object | null; selectedThickness: { thicknessMm: number } | undefined; customOd: string; customThickness: string; customLength: string; quantity: string;
}) {
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

function buildInquiryText(mode: Mode, productType: SteelPipeProductType, spec: { outerDiameterMm: number } | null, thickness: { thicknessMm: number } | undefined, row: SteelPipeRow, totalWeightKg: number) {
  if (mode === "standard" && spec && thickness) {
    const product = productOptions.find((item) => item.id === productType)?.name ?? "Steel Pipe";
    return `Hello, I would like a quotation for ${product}: OD ${spec.outerDiameterMm} mm, wall thickness ${formatThickness(thickness.thicknessMm)} mm, stock length ${row.lengthM} m, quantity ${row.quantity} pcs. The calculator shows a theoretical total weight of ${formatNumber(totalWeightKg, 2, "en")} kg.`;
  }
  if (mode === "custom" && totalWeightKg > 0) return `Hello, I would like a quotation for a custom black welded steel pipe: OD ${row.customOuterDiameterMm} mm, wall thickness ${row.customThicknessMm} mm, length ${row.lengthM} m, quantity ${row.quantity} pcs. The calculator shows a theoretical total weight of ${formatNumber(totalWeightKg, 2, "en")} kg.`;
  return "Hello, I would like a quotation for steel pipe. Please help confirm the suitable size, wall thickness, length, quantity, packing and shipment requirements.";
}
