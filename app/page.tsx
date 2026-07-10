"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { productDefinitions } from "@/data/demo/product-definitions";
import {
  angleSteelSpecs,
  channelSteelSpecs,
  groovedFittingOptions,
  squareTubeSpecs,
  type StandardSpec,
} from "@/data/demo/steel-specs";
import {
  galvanizedPipeData,
  getGalvanizedPipeSpecLabel,
  getGalvanizedPipeThicknessId,
  getGalvanizedPipeThicknessLabel,
} from "@/data/galvanized-pipe/galvanized-pipe-data";
import {
  calculateModuleSubtotal,
  calculateRow,
  calculateSummary,
  CONTAINER_40HQ_TON,
} from "@/lib/calculations";
import { formatKg, formatNumber, formatTonFromKg } from "@/lib/format";
import type {
  MaterialList,
  MaterialModule,
  MaterialRow,
  ProductType,
  SteelPipeProductType,
} from "@/types/materials";

const STORAGE_KEY = "canhope-steel-calculator-material-list";

const categories = ["钢管类", "型钢类", "消防配件"] as const;

type CustomerInfo = {
  name: string;
  company: string;
  country: string;
  whatsapp: string;
  email: string;
  port: string;
  notes: string;
};

const steelPipeProductTypes: SteelPipeProductType[] = [
  "galvanized_pipe",
  "galvanized_sheet_pipe",
  "black_steel_pipe",
];

function isSteelPipeProduct(type: string): type is SteelPipeProductType {
  return steelPipeProductTypes.includes(type as SteelPipeProductType);
}

function createId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createEmptyRow(productType: ProductType): MaterialRow {
  const id = createId("row");

  if (isSteelPipeProduct(productType)) {
    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: "",
      thicknessId: "",
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "square_tube") {
    return {
      id,
      productType,
      dimensionMode: "standard",
      specId: "",
      thicknessId: "",
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "angle_steel") {
    return {
      id,
      productType,
      specId: "",
      thicknessId: "",
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  if (productType === "channel_steel") {
    return {
      id,
      productType,
      specId: "",
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

  return {
    id,
    productType,
    fittingTypeId: "",
    nominalSizeId: "",
    modelId: "",
    quantity: 0,
    quantityUnit: "件",
  };
}

function createCustomRow(productType: SteelPipeProductType | "square_tube"): MaterialRow {
  const id = createId("row");

  if (isSteelPipeProduct(productType)) {
    return {
      id,
      productType,
      dimensionMode: "custom",
      specId: "",
      thicknessId: "",
      customOuterDiameterMm: 60,
      customThicknessMm: 2.5,
      lengthM: 6,
      quantity: 0,
      quantityUnit: "支",
    };
  }

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
    quantityUnit: "支",
  };
}

function productName(type: ProductType) {
  return productDefinitions.find((product) => product.type === type)?.name ?? type;
}

function getSpecLabel(specs: StandardSpec[], specId: string) {
  return specs.find((spec) => spec.id === specId)?.label ?? "";
}

function getThicknessLabel(specs: StandardSpec[], specId: string, thicknessId: string) {
  return (
    specs
      .find((spec) => spec.id === specId)
      ?.thicknesses.find((thickness) => thickness.id === thicknessId)?.label ?? ""
  );
}

function getGalvanizedPipeSelectedSpecLabel(specId: string) {
  const spec = galvanizedPipeData.find((item) => item.id === specId);
  return spec ? getGalvanizedPipeSpecLabel(spec) : "";
}

function getGalvanizedPipeSelectedThicknessLabel(specId: string, thicknessId: string) {
  const spec = galvanizedPipeData.find((item) => item.id === specId);
  const thickness = spec?.thicknessOptions.find(
    (item) => getGalvanizedPipeThicknessId(item.thicknessMm) === thicknessId,
  );

  return thickness ? getGalvanizedPipeThicknessLabel(thickness.thicknessMm) : "";
}

function isStandardGalvanizedPipeRow(row: MaterialRow) {
  return row.productType === "galvanized_pipe" && row.dimensionMode !== "custom";
}

function getRowDescription(row: MaterialRow) {
  if (isSteelPipeProduct(row.productType)) {
    if (row.dimensionMode === "custom") {
      return `自定义${productName(row.productType)} / 外径 ${row.customOuterDiameterMm || 0}mm / 壁厚 ${
        row.customThicknessMm || 0
      }mm`;
    }

    return [
      row.productType === "galvanized_pipe"
        ? getGalvanizedPipeSelectedSpecLabel(row.specId)
        : row.specId,
      row.productType === "galvanized_pipe"
        ? getGalvanizedPipeSelectedThicknessLabel(row.specId, row.thicknessId)
        : row.thicknessId,
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "square_tube") {
    if (row.dimensionMode === "custom") {
      return `自定义方矩管 / ${row.customWidthMm || 0}×${row.customHeightMm || 0}mm / 壁厚 ${
        row.customThicknessMm || 0
      }mm`;
    }

    return [
      getSpecLabel(squareTubeSpecs, row.specId),
      getThicknessLabel(squareTubeSpecs, row.specId, row.thicknessId),
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "angle_steel") {
    return [
      getSpecLabel(angleSteelSpecs, row.specId),
      getThicknessLabel(angleSteelSpecs, row.specId, row.thicknessId),
    ]
      .filter(Boolean)
      .join(" / ");
  }

  if (row.productType === "channel_steel") {
    return channelSteelSpecs.find((spec) => spec.id === row.specId)?.label ?? "";
  }

  const option = groovedFittingOptions.find(
    (item) =>
      item.fittingTypeId === row.fittingTypeId &&
      item.nominalSizeId === row.nominalSizeId &&
      item.modelId === row.modelId,
  );

  return option
    ? `${option.fittingTypeLabel} / ${option.nominalSizeLabel} / ${option.modelLabel}`
    : [row.fittingTypeId, row.nominalSizeId, row.modelId].filter(Boolean).join(" / ");
}

function uniqueBy<T>(items: T[], key: (item: T) => string) {
  return items.filter((item, index) => {
    return items.findIndex((candidate) => key(candidate) === key(item)) === index;
  });
}

function normalizeStoredMaterialList(value: MaterialList): MaterialList {
  return {
    modules: value.modules.map((module) => ({
      ...module,
      rows: module.rows.map((row) => {
        const normalizedRow =
          row.productType === "round_pipe"
            ? ({ ...row, productType: "galvanized_pipe" } as MaterialRow)
            : row;

        if (isSteelPipeProduct(normalizedRow.productType) || normalizedRow.productType === "square_tube") {
          const lengthM = Number.isFinite(normalizedRow.lengthM) ? normalizedRow.lengthM : 6;

          return {
            ...normalizedRow,
            dimensionMode: normalizedRow.dimensionMode ?? "standard",
            lengthM:
              normalizedRow.productType === "galvanized_pipe" &&
              (normalizedRow.dimensionMode ?? "standard") === "standard"
                ? 6
                : lengthM,
            quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
          };
        }

        return {
          ...normalizedRow,
          quantity: Number.isFinite(normalizedRow.quantity) ? normalizedRow.quantity : 0,
        };
      }),
    })),
  };
}

export default function Home() {
  const [materialList, setMaterialList] = useState<MaterialList>(() => {
    if (typeof window === "undefined") {
      return { modules: [] };
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return { modules: [] };
    }

    try {
      return normalizeStoredMaterialList(JSON.parse(saved) as MaterialList);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return { modules: [] };
    }
  });
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    country: "",
    whatsapp: "",
    email: "",
    port: "",
    notes: "",
  });
  const moduleRefs = useRef<Partial<Record<ProductType, HTMLDivElement | null>>>({});

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(materialList));
  }, [materialList]);

  const summary = useMemo(() => calculateSummary(materialList), [materialList]);

  const rfqText = useMemo(() => {
    const lines = [
      "CANHOPE STEEL 询盘清单",
      "",
      `客户姓名：${customer.name || "-"}`,
      `公司名称：${customer.company || "-"}`,
      `国家/地区：${customer.country || "-"}`,
      `WhatsApp：${customer.whatsapp || "-"}`,
      `邮箱：${customer.email || "-"}`,
      `目的港：${customer.port || "-"}`,
      "",
      "材料清单：",
    ];

    materialList.modules.forEach((module) => {
      lines.push(`\n${productName(module.productType)}`);
      module.rows.forEach((row, index) => {
        const calc = calculateRow(row);
        const description = getRowDescription(row) || "规格待选择";
        const length = "lengthM" in row ? `，长度 ${row.lengthM}m` : "";
        lines.push(
          `${index + 1}. ${description}${length}，数量 ${row.quantity}${row.quantityUnit}，总重量 ${
            calc.hasWeight ? formatTonFromKg(calc.totalWeightKg) : "重量待补充"
          }`,
        );
      });
    });

    lines.push("");
    lines.push(`理论总重量：${formatNumber(summary.totalWeightTon)} 吨`);
    lines.push(
      `40HQ估算：${
        summary.containerCount > 0
          ? `预计 ${summary.containerCount} × 40HQ`
          : "预计 0 × 40HQ"
      }`,
    );
    if (summary.missingWeightRowCount > 0) {
      lines.push(`缺少重量：${summary.missingWeightRowCount} 行`);
    }
    lines.push(`补充要求：${customer.notes || "-"}`);

    return lines.join("\n");
  }, [customer, materialList, summary]);

  function addProduct(productType: ProductType) {
    setActiveProduct(productType);
    setMaterialList((current) => {
      const existing = current.modules.find((module) => module.productType === productType);

      if (existing) {
        return {
          modules: current.modules.map((module) =>
            module.productType === productType
              ? { ...module, rows: [...module.rows, createEmptyRow(productType)] }
              : module,
          ),
        };
      }

      return {
        modules: [
          ...current.modules,
          {
            id: createId("module"),
            productType,
            rows: [createEmptyRow(productType)],
          },
        ],
      };
    });

    window.setTimeout(() => {
      moduleRefs.current[productType]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function addRow(productType: ProductType) {
    addProduct(productType);
  }

  function addCustomRow(productType: SteelPipeProductType | "square_tube") {
    setActiveProduct(productType);
    setMaterialList((current) => {
      const existing = current.modules.find((module) => module.productType === productType);

      if (existing) {
        return {
          modules: current.modules.map((module) =>
            module.productType === productType
              ? { ...module, rows: [...module.rows, createCustomRow(productType)] }
              : module,
          ),
        };
      }

      return {
        modules: [
          ...current.modules,
          {
            id: createId("module"),
            productType,
            rows: [createCustomRow(productType)],
          },
        ],
      };
    });

    window.setTimeout(() => {
      moduleRefs.current[productType]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function updateRow(rowId: string, updates: Record<string, string | number>) {
    setMaterialList((current) => ({
      modules: current.modules.map((module) => ({
        ...module,
        rows: module.rows.map((row) =>
          row.id === rowId ? ({ ...row, ...updates } as MaterialRow) : row,
        ),
      })),
    }));
  }

  function deleteRow(moduleId: string, rowId: string) {
    setMaterialList((current) => ({
      modules: current.modules.map((module) =>
        module.id === moduleId
          ? { ...module, rows: module.rows.filter((row) => row.id !== rowId) }
          : module,
      ),
    }));
  }

  function duplicateRow(moduleId: string, row: MaterialRow) {
    setMaterialList((current) => ({
      modules: current.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              rows: module.rows.flatMap((item) =>
                item.id === row.id ? [item, { ...row, id: createId("row") }] : [item],
              ),
            }
          : module,
      ),
    }));
  }

  function deleteModule(moduleId: string) {
    setMaterialList((current) => ({
      modules: current.modules.filter((module) => module.id !== moduleId),
    }));
  }

  function clearAll() {
    setMaterialList({ modules: [] });
  }

  async function copyRfq() {
    await navigator.clipboard.writeText(rfqText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="min-h-screen bg-slate-100 pb-32 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0e2a47] text-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/canhope-logo.png"
                alt="CANHOPE STEEL logo"
                className="h-full w-full object-contain"
              />
            </span>
            <div className="min-w-0">
              <div className="text-lg font-bold leading-5 tracking-normal">CANHOPE STEEL</div>
              <div className="truncate text-xs text-blue-100">钢材重量计算与询盘工具</div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-blue-100 md:flex">
            <button className="nav-link" type="button">
              中文 / English
            </button>
            <button className="nav-link" type="button">
              使用说明
            </button>
            <button className="primary-button" type="button" onClick={() => setIsRfqOpen(true)}>
              发送询盘 {summary.validRowCount}
            </button>
          </nav>

          <button className="primary-button md:hidden" type="button" onClick={() => setIsRfqOpen(true)}>
            询盘 {summary.validRowCount}
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6">
        <div className="intro-panel">
          <div>
            <p className="text-xl font-bold text-slate-950">灿煌钢铁集团</p>
            <p className="text-sm font-semibold uppercase text-[#0e5f9f]">CANHOPE STEEL GROUP</p>
          </div>
          <div className="max-w-3xl text-sm leading-6 text-slate-600">
            始于1993年，提供钢管、型钢、板材、消防系统材料及工程加工出口服务。
            <a className="ml-2 font-semibold text-[#0e5f9f]" href="https://canhopesteel.com" target="_blank">
              canhopesteel.com
            </a>
          </div>
          <div className="intro-tags">
            {["始于1993年", "工厂与库存", "项目配套", "全球出口"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-5 px-4 sm:px-6 min-[900px]:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="sidebar-panel">
          <p className="mb-5 text-base font-bold text-slate-950">点击产品，添加到材料清单</p>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <p className="mb-2 text-xs font-bold uppercase text-slate-500">{category}</p>
                <div className="grid gap-2">
                  {productDefinitions
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <button
                        key={product.type}
                        className={`product-button ${activeProduct === product.type ? "is-active" : ""}`}
                        type="button"
                        onClick={() => addProduct(product.type)}
                      >
                        <span>{product.name}</span>
                        <span className="text-xs">{product.englishName}</span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="content-panel">
          <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-normal text-slate-950">材料清单</h1>
              <p className="text-sm text-slate-500">Material List</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="status-pill">演示数据模式</span>
              <button className="secondary-button" type="button" onClick={clearAll}>
                清空清单
              </button>
            </div>
          </div>

          {materialList.modules.length === 0 ? (
            <div className="empty-state">
              <p className="text-lg font-bold text-slate-950">从左侧添加一个产品开始</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                第一版使用少量演示数据。点击同一产品会继续增加规格行，不会隐藏已有品类。
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {materialList.modules.map((module) => (
                <ProductModule
                  key={module.id}
                  module={module}
                  setModuleRef={(node) => {
                    moduleRefs.current[module.productType] = node;
                  }}
                  onAddRow={addRow}
                  onAddCustomRow={addCustomRow}
                  onDeleteModule={deleteModule}
                  onUpdateRow={updateRow}
                  onDeleteRow={deleteRow}
                  onDuplicateRow={duplicateRow}
                />
              ))}
            </div>
          )}
        </section>
      </section>

      <SummaryBar summary={summary} onOpenRfq={() => setIsRfqOpen(true)} />

      {isRfqOpen ? (
        <RfqModal
          customer={customer}
          setCustomer={setCustomer}
          materialList={materialList}
          summary={summary}
          rfqText={rfqText}
          copied={copied}
          onCopy={copyRfq}
          onClose={() => setIsRfqOpen(false)}
        />
      ) : null}
    </main>
  );
}

function ProductModule({
  module,
  setModuleRef,
  onAddRow,
  onAddCustomRow,
  onDeleteModule,
  onUpdateRow,
  onDeleteRow,
  onDuplicateRow,
}: {
  module: MaterialModule;
  setModuleRef: (node: HTMLDivElement | null) => void;
  onAddRow: (productType: ProductType) => void;
  onAddCustomRow: (productType: SteelPipeProductType | "square_tube") => void;
  onDeleteModule: (moduleId: string) => void;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onDeleteRow: (moduleId: string, rowId: string) => void;
  onDuplicateRow: (moduleId: string, row: MaterialRow) => void;
}) {
  const subtotal = calculateModuleSubtotal(module);
  const missingRows = module.rows.filter((row) => row.quantity > 0 && !calculateRow(row).hasWeight).length;
  const subtotalLabel =
    missingRows > 0 && subtotal === 0
      ? "重量待补充"
      : missingRows > 0
        ? `${formatTonFromKg(subtotal)}，另有 ${missingRows} 行重量待补充`
        : formatTonFromKg(subtotal);

  return (
    <div ref={setModuleRef} className="module-card scroll-mt-24">
      <div className="module-header">
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            {productName(module.productType)}（{module.rows.length}行）
          </h2>
          <p className="text-sm text-slate-500">小计：{subtotalLabel}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="small-blue-button" type="button" onClick={() => onAddRow(module.productType)}>
            增加规格
          </button>
          <button className="secondary-button" type="button" onClick={() => onDeleteModule(module.id)}>
            删除模块
          </button>
        </div>
      </div>

      {module.rows.length === 0 ? (
        <div className="rounded-md border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500">
          暂无规格，点击“增加规格”添加一行。
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="material-table">
              <ProductTableHead productType={module.productType} />
              <tbody>
                {module.rows.map((row) => (
                  <ProductRow
                    key={row.id}
                    row={row}
                    moduleId={module.id}
                    onUpdateRow={onUpdateRow}
                    onDeleteRow={onDeleteRow}
                    onDuplicateRow={onDuplicateRow}
                    onAddCustomRow={onAddCustomRow}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 md:hidden">
            {module.rows.map((row) => (
              <MobileRowCard
                key={row.id}
                row={row}
                moduleId={module.id}
                onUpdateRow={onUpdateRow}
                onDeleteRow={onDeleteRow}
                onDuplicateRow={onDuplicateRow}
                onAddCustomRow={onAddCustomRow}
              />
            ))}
          </div>
        </>
      )}

      {isSteelPipeProduct(module.productType) || module.productType === "square_tube" ? (
        <button className="custom-size-link" type="button" onClick={() => onAddCustomRow(module.productType)}>
          没有合适规格？使用自定义尺寸
        </button>
      ) : null}
    </div>
  );
}

function ProductTableHead({ productType }: { productType: ProductType }) {
  const commonEnd = ["数量", "单位重量", "单支/单件重量", "总重量", "操作"];
  const columns =
    isSteelPipeProduct(productType) || productType === "square_tube"
      ? ["规格", "壁厚", "长度m", ...commonEnd]
      : productType === "angle_steel"
        ? ["规格/型号", "厚度", "长度m", ...commonEnd]
        : productType === "channel_steel"
          ? ["规格/型号", "长度m", ...commonEnd]
          : ["管件类型", "公称尺寸", "型号或角度", ...commonEnd];

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
}

function ProductRow({
  row,
  moduleId,
  onUpdateRow,
  onDeleteRow,
  onDuplicateRow,
  onAddCustomRow,
}: {
  row: MaterialRow;
  moduleId: string;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onDeleteRow: (moduleId: string, rowId: string) => void;
  onDuplicateRow: (moduleId: string, row: MaterialRow) => void;
  onAddCustomRow: (productType: SteelPipeProductType | "square_tube") => void;
}) {
  const calc = calculateRow(row);
  const actionCells = (
    <>
      <td>
        <WeightCell calculation={calc} />
      </td>
      <td>{calc.hasWeight ? formatKg(calc.pieceWeightKg) : <MissingWeight />}</td>
      <td className="font-bold text-slate-950">
        {calc.hasWeight ? formatTonFromKg(calc.totalWeightKg) : <MissingWeight />}
      </td>
      <td>
        <div className="row-actions">
          <button type="button" onClick={() => onDuplicateRow(moduleId, row)}>
            复制
          </button>
          <button type="button" onClick={() => onDeleteRow(moduleId, row.id)}>
            删除
          </button>
        </div>
      </td>
    </>
  );

  if (isSteelPipeProduct(row.productType)) {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <CustomRoundCells row={row} onUpdateRow={onUpdateRow} />
        ) : (
          <>
            <td>
              <SteelPipeSpecSelect
                productType={row.productType}
                value={row.specId}
                onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
              />
            </td>
            <td>
              <SteelPipeThicknessSelect
                productType={row.productType}
                specId={row.specId}
                value={row.thicknessId}
                onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} />
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "square_tube") {
    return (
      <tr>
        {row.dimensionMode === "custom" ? (
          <CustomSquareCells row={row} onUpdateRow={onUpdateRow} />
        ) : (
          <>
            <td>
              <SpecSelect
                specs={squareTubeSpecs}
                value={row.specId}
                onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
              />
            </td>
            <td>
              <ThicknessSelect
                specs={squareTubeSpecs}
                specId={row.specId}
                value={row.thicknessId}
                onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
              />
            </td>
          </>
        )}
        <LengthInput row={row} onUpdateRow={onUpdateRow} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} />
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "angle_steel") {
    return (
      <tr>
        <td>
          <SpecSelect
            specs={angleSteelSpecs}
            value={row.specId}
            onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
          />
        </td>
        <td>
          <ThicknessSelect
            specs={angleSteelSpecs}
            specId={row.specId}
            value={row.thicknessId}
            onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
          />
        </td>
        <LengthInput row={row} onUpdateRow={onUpdateRow} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} />
        {actionCells}
      </tr>
    );
  }

  if (row.productType === "channel_steel") {
    return (
      <tr>
        <td>
          <select className="field" value={row.specId} onChange={(event) => onUpdateRow(row.id, { specId: event.target.value })}>
            <option value="">选择规格</option>
            {channelSteelSpecs.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.label}
              </option>
            ))}
          </select>
        </td>
        <LengthInput row={row} onUpdateRow={onUpdateRow} />
        <QuantityInput row={row} onUpdateRow={onUpdateRow} />
        {actionCells}
      </tr>
    );
  }

  return (
    <tr>
      <GroovedFittingFields row={row} onUpdateRow={onUpdateRow} />
      <QuantityInput row={row} onUpdateRow={onUpdateRow} />
      {actionCells}
    </tr>
  );
}

function MobileRowCard({
  row,
  moduleId,
  onUpdateRow,
  onDeleteRow,
  onDuplicateRow,
  onAddCustomRow,
}: {
  row: MaterialRow;
  moduleId: string;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onDeleteRow: (moduleId: string, rowId: string) => void;
  onDuplicateRow: (moduleId: string, row: MaterialRow) => void;
  onAddCustomRow: (productType: SteelPipeProductType | "square_tube") => void;
}) {
  const calc = calculateRow(row);

  return (
    <article className="mobile-row-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-bold text-slate-950">{getRowDescription(row) || "规格待选择"}</p>
          <p className="text-xs text-slate-500">
            {"lengthM" in row ? `长度 ${row.lengthM}m · ` : ""}
            数量 {row.quantity}
            {row.quantityUnit}
          </p>
        </div>
        <p className="text-right text-sm font-bold text-slate-950">
          {calc.hasWeight ? formatTonFromKg(calc.totalWeightKg) : "重量待补充"}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <ProductRowFields row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="text-xs text-slate-500">单位重量</p>
          <p>{calc.hasWeight ? `${formatNumber(calc.unitWeightKg ?? 0)} ${calc.unitWeightLabel}` : "重量待补充"}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">单支/件</p>
          <p>{calc.hasWeight ? formatKg(calc.pieceWeightKg) : "重量待补充"}</p>
        </div>
        <div className="row-actions justify-end">
          <button type="button" onClick={() => onDuplicateRow(moduleId, row)}>
            复制
          </button>
          <button type="button" onClick={() => onDeleteRow(moduleId, row.id)}>
            删除
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductRowFields({
  row,
  onUpdateRow,
  onAddCustomRow,
}: {
  row: MaterialRow;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onAddCustomRow: (productType: SteelPipeProductType | "square_tube") => void;
}) {
  if (isSteelPipeProduct(row.productType) || row.productType === "square_tube") {
    if (row.dimensionMode === "custom") {
      return (
        <>
          {isSteelPipeProduct(row.productType) ? (
            <>
              <label className="mobile-field-label">
                外径mm
                <NumberField
                  value={row.customOuterDiameterMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customOuterDiameterMm: value })}
                />
              </label>
              <label className="mobile-field-label">
                壁厚mm
                <NumberField
                  value={row.customThicknessMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
                />
              </label>
            </>
          ) : (
            <>
              <label className="mobile-field-label">
                宽度mm
                <NumberField
                  value={row.customWidthMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customWidthMm: value })}
                />
              </label>
              <label className="mobile-field-label">
                高度mm
                <NumberField
                  value={row.customHeightMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customHeightMm: value })}
                />
              </label>
              <label className="mobile-field-label">
                壁厚mm
                <NumberField
                  value={row.customThicknessMm ?? 0}
                  onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
                />
              </label>
            </>
          )}
          <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} />
        </>
      );
    }

    return (
      <>
        <label className="mobile-field-label">
          规格
          {isSteelPipeProduct(row.productType) ? (
            <SteelPipeSpecSelect
              productType={row.productType}
              value={row.specId}
              onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
            />
          ) : (
            <SpecSelect
              specs={squareTubeSpecs}
              value={row.specId}
              onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })}
            />
          )}
        </label>
        <label className="mobile-field-label">
          壁厚
          {isSteelPipeProduct(row.productType) ? (
            <SteelPipeThicknessSelect
              productType={row.productType}
              specId={row.specId}
              value={row.thicknessId}
              onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
            />
          ) : (
            <ThicknessSelect
              specs={squareTubeSpecs}
              specId={row.specId}
              value={row.thicknessId}
              onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })}
            />
          )}
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} />
      </>
    );
  }

  if (row.productType === "angle_steel") {
    return (
      <>
        <label className="mobile-field-label">
          规格
          <SpecSelect specs={angleSteelSpecs} value={row.specId} onChange={(specId) => onUpdateRow(row.id, { specId, thicknessId: "" })} />
        </label>
        <label className="mobile-field-label">
          厚度
          <ThicknessSelect specs={angleSteelSpecs} specId={row.specId} value={row.thicknessId} onChange={(thicknessId) => onUpdateRow(row.id, { thicknessId })} />
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} />
      </>
    );
  }

  if (row.productType === "channel_steel") {
    return (
      <>
        <label className="mobile-field-label">
          规格
          <select className="field" value={row.specId} onChange={(event) => onUpdateRow(row.id, { specId: event.target.value })}>
            <option value="">选择规格</option>
            {channelSteelSpecs.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.label}
              </option>
            ))}
          </select>
        </label>
        <MobileLengthQuantity row={row} onUpdateRow={onUpdateRow} onAddCustomRow={onAddCustomRow} />
      </>
    );
  }

  return (
    <>
      <GroovedFittingFields row={row} onUpdateRow={onUpdateRow} isMobile />
      <label className="mobile-field-label">
        数量件
        <input
          className="field"
          min="0"
          type="number"
          value={row.quantity}
          onChange={(event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })}
        />
      </label>
    </>
  );
}

function MobileLengthQuantity({
  row,
  onUpdateRow,
  onAddCustomRow,
}: {
  row: Exclude<MaterialRow, { productType: "grooved_fitting" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onAddCustomRow: (productType: SteelPipeProductType | "square_tube") => void;
}) {
  const locked = isStandardGalvanizedPipeRow(row);

  return (
    <>
      <label className="mobile-field-label">
        长度m
        {locked ? (
          <LockedLengthField productType={row.productType as SteelPipeProductType} onAddCustomRow={onAddCustomRow} />
        ) : (
          <input
            className="field"
            min="0"
            step="0.1"
            type="number"
            value={row.lengthM}
            onChange={(event) => onUpdateRow(row.id, { lengthM: Number(event.target.value) })}
          />
        )}
      </label>
      <label className="mobile-field-label">
        数量支
        <input
          className="field"
          min="0"
          type="number"
          value={row.quantity}
          onChange={(event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })}
        />
      </label>
    </>
  );
}

function CustomRoundCells({
  row,
  onUpdateRow,
}: {
  row: Extract<MaterialRow, { productType: SteelPipeProductType }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
}) {
  return (
    <>
      <td>
        <div className="custom-dimension-field">
          <span>自定义外径</span>
          <NumberField
            value={row.customOuterDiameterMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customOuterDiameterMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
      <td>
        <div className="custom-dimension-field">
          <span>壁厚</span>
          <NumberField
            value={row.customThicknessMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
    </>
  );
}

function CustomSquareCells({
  row,
  onUpdateRow,
}: {
  row: Extract<MaterialRow, { productType: "square_tube" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
}) {
  return (
    <>
      <td>
        <div className="custom-dimension-field custom-dimension-field-wide">
          <span>宽</span>
          <NumberField
            value={row.customWidthMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customWidthMm: value })}
          />
          <span>高</span>
          <NumberField
            value={row.customHeightMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customHeightMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
      <td>
        <div className="custom-dimension-field">
          <span>壁厚</span>
          <NumberField
            value={row.customThicknessMm ?? 0}
            onChange={(value) => onUpdateRow(row.id, { customThicknessMm: value })}
          />
          <span>mm</span>
        </div>
      </td>
    </>
  );
}

function NumberField({
  value,
  onChange,
  className = "",
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) {
  return (
    <input
      className={`field ${className}`}
      min="0"
      step="0.1"
      type="number"
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  );
}

function SteelPipeSpecSelect({
  productType,
  value,
  onChange,
}: {
  productType: SteelPipeProductType;
  value: string;
  onChange: (value: string) => void;
}) {
  const specs = productType === "galvanized_pipe" ? galvanizedPipeData : [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{specs.length > 0 ? "选择规格" : "规格数据待导入"}</option>
      {specs.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {getGalvanizedPipeSpecLabel(spec)}
        </option>
      ))}
    </select>
  );
}

function SteelPipeThicknessSelect({
  productType,
  specId,
  value,
  onChange,
}: {
  productType: SteelPipeProductType;
  specId: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const thicknesses =
    productType === "galvanized_pipe"
      ? galvanizedPipeData.find((spec) => spec.id === specId)?.thicknessOptions ?? []
      : [];

  return (
    <select
      className="field"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={productType !== "galvanized_pipe" || !specId}
    >
      <option value="">{thicknesses.length > 0 ? "选择厚度" : "厚度数据待导入"}</option>
      {thicknesses.map((thickness) => (
        <option
          key={getGalvanizedPipeThicknessId(thickness.thicknessMm)}
          value={getGalvanizedPipeThicknessId(thickness.thicknessMm)}
        >
          {getGalvanizedPipeThicknessLabel(thickness.thicknessMm)}
        </option>
      ))}
    </select>
  );
}

function SpecSelect({
  specs,
  value,
  onChange,
}: {
  specs: StandardSpec[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">选择规格</option>
      {specs.map((spec) => (
        <option key={spec.id} value={spec.id}>
          {spec.label}
        </option>
      ))}
    </select>
  );
}

function ThicknessSelect({
  specs,
  specId,
  value,
  onChange,
}: {
  specs: StandardSpec[];
  specId: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const thicknesses = specs.find((spec) => spec.id === specId)?.thicknesses ?? [];

  return (
    <select className="field" value={value} onChange={(event) => onChange(event.target.value)} disabled={!specId}>
      <option value="">选择厚度</option>
      {thicknesses.map((thickness) => (
        <option key={thickness.id} value={thickness.id}>
          {thickness.label}
        </option>
      ))}
    </select>
  );
}

function LengthInput({
  row,
  onUpdateRow,
  onAddCustomRow,
}: {
  row: Exclude<MaterialRow, { productType: "grooved_fitting" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  onAddCustomRow?: (productType: SteelPipeProductType | "square_tube") => void;
}) {
  const locked = isStandardGalvanizedPipeRow(row);

  return (
    <td>
      {locked && onAddCustomRow ? (
        <LockedLengthField productType={row.productType as SteelPipeProductType} onAddCustomRow={onAddCustomRow} compact />
      ) : (
        <input
          className="field w-20"
          min="0"
          step="0.1"
          type="number"
          value={row.lengthM}
          onChange={(event) => onUpdateRow(row.id, { lengthM: Number(event.target.value) })}
        />
      )}
    </td>
  );
}

function LockedLengthField({
  productType,
  onAddCustomRow,
  compact = false,
}: {
  productType: SteelPipeProductType;
  onAddCustomRow: (productType: SteelPipeProductType | "square_tube") => void;
  compact?: boolean;
}) {
  return (
    <div className={`locked-length-field ${compact ? "is-compact" : ""}`}>
      <input className="field locked-length-input" readOnly type="text" value="6 m" aria-label="长度固定为6米" />
      <span className="locked-length-badge" aria-hidden="true">
        锁定
      </span>
      <div className="locked-length-tip" role="note">
        <p>现货常规长度为6米定尺。如需其他长度，请使用自定义尺寸。</p>
        <button type="button" onClick={() => onAddCustomRow(productType)}>
          使用自定义尺寸
        </button>
      </div>
    </div>
  );
}

function QuantityInput({
  row,
  onUpdateRow,
}: {
  row: MaterialRow;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
}) {
  return (
    <td>
      <div className="flex items-center gap-2">
        <input
          className="field w-20"
          min="0"
          type="number"
          value={row.quantity}
          onChange={(event) => onUpdateRow(row.id, { quantity: Number(event.target.value) })}
        />
        <span className="text-xs text-slate-500">{row.quantityUnit}</span>
      </div>
    </td>
  );
}

function GroovedFittingFields({
  row,
  onUpdateRow,
  isMobile = false,
}: {
  row: Extract<MaterialRow, { productType: "grooved_fitting" }>;
  onUpdateRow: (rowId: string, updates: Record<string, string | number>) => void;
  isMobile?: boolean;
}) {
  const fittingTypes = uniqueBy(groovedFittingOptions, (item) => item.fittingTypeId);
  const sizes = uniqueBy(
    groovedFittingOptions.filter((item) => !row.fittingTypeId || item.fittingTypeId === row.fittingTypeId),
    (item) => item.nominalSizeId,
  );
  const models = groovedFittingOptions.filter(
    (item) =>
      (!row.fittingTypeId || item.fittingTypeId === row.fittingTypeId) &&
      (!row.nominalSizeId || item.nominalSizeId === row.nominalSizeId),
  );

  const fittingTypeField = (
      <select
        className="field"
        value={row.fittingTypeId}
        onChange={(event) => onUpdateRow(row.id, { fittingTypeId: event.target.value, nominalSizeId: "", modelId: "" })}
      >
        <option value="">管件类型</option>
        {fittingTypes.map((item) => (
          <option key={item.fittingTypeId} value={item.fittingTypeId}>
            {item.fittingTypeLabel}
          </option>
        ))}
      </select>
  );

  const sizeField = (
    <select
        className="field"
        value={row.nominalSizeId}
        onChange={(event) => onUpdateRow(row.id, { nominalSizeId: event.target.value, modelId: "" })}
      >
        <option value="">公称尺寸</option>
        {sizes.map((item) => (
          <option key={item.nominalSizeId} value={item.nominalSizeId}>
            {item.nominalSizeLabel}
          </option>
        ))}
      </select>
  );

  const modelField = (
    <select className="field" value={row.modelId} onChange={(event) => onUpdateRow(row.id, { modelId: event.target.value })}>
        <option value="">型号或角度</option>
        {models.map((item) => (
          <option key={`${item.fittingTypeId}-${item.nominalSizeId}-${item.modelId}`} value={item.modelId}>
            {item.modelLabel}
          </option>
        ))}
      </select>
  );

  if (isMobile) {
    return (
      <>
        <label className="mobile-field-label">
          管件类型
          {fittingTypeField}
        </label>
        <label className="mobile-field-label">
          公称尺寸
          {sizeField}
        </label>
        <label className="mobile-field-label">
          型号或角度
          {modelField}
        </label>
      </>
    );
  }

  return (
    <>
      <td>{fittingTypeField}</td>
      <td>{sizeField}</td>
      <td>{modelField}</td>
    </>
  );
}

function WeightCell({ calculation }: { calculation: ReturnType<typeof calculateRow> }) {
  if (!calculation.unitWeightKg) {
    return <MissingWeight />;
  }

  return (
    <span>
      {formatNumber(calculation.unitWeightKg)} {calculation.unitWeightLabel}
    </span>
  );
}

function MissingWeight() {
  return <span className="missing-weight">重量待补充</span>;
}

function SummaryBar({
  summary,
  onOpenRfq,
}: {
  summary: ReturnType<typeof calculateSummary>;
  onOpenRfq: () => void;
}) {
  return (
    <footer className="summary-bar">
      <div className="summary-grid">
        <SummaryItem label="品种数" value={summary.productModuleCount} />
        <SummaryItem label="有效规格行数" value={summary.validRowCount} />
        <SummaryItem
          label="总数量"
          value={`${summary.totalQuantityPieces} 支 / ${summary.totalQuantityItems} 件`}
        />
        <SummaryItem label="理论总重量" value={`${formatNumber(summary.totalWeightTon)} 吨`} strong />
        <SummaryItem label="缺少重量" value={`${summary.missingWeightRowCount} 行`} warning={summary.missingWeightRowCount > 0} />
        <div className="min-w-0">
          <p className="text-xs text-blue-100">40HQ集装箱估算</p>
          <p className="truncate text-base font-bold text-white">
            {summary.containerCount > 0
              ? `预计 ${summary.containerCount} × 40HQ，${
                  summary.remainingCapacityTon === 0
                    ? "已达到设定载重"
                    : `还可装 ${formatNumber(summary.remainingCapacityTon ?? 0)} 吨`
                }`
              : "预计 0 × 40HQ"}
          </p>
        </div>
        <button className="primary-button h-12" type="button" onClick={onOpenRfq}>
          生成询盘
        </button>
      </div>
      <p className="mt-2 text-xs text-blue-100">
        集装箱数量仅按设定重量估算。实际装载还会受到产品长度、体积、包装方式、装柜方法以及当地运输限重影响。设定载重：
        {CONTAINER_40HQ_TON} 吨 / 40HQ。
      </p>
    </footer>
  );
}

function SummaryItem({
  label,
  value,
  strong = false,
  warning = false,
}: {
  label: string;
  value: string | number;
  strong?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-blue-100">{label}</p>
      <p className={`truncate text-base font-bold ${warning ? "text-orange-300" : strong ? "text-white" : "text-slate-100"}`}>
        {value}
      </p>
    </div>
  );
}

function RfqModal({
  customer,
  setCustomer,
  materialList,
  summary,
  rfqText,
  copied,
  onCopy,
  onClose,
}: {
  customer: CustomerInfo;
  setCustomer: (value: CustomerInfo) => void;
  materialList: MaterialList;
  summary: ReturnType<typeof calculateSummary>;
  rfqText: string;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
}) {
  function updateCustomer(key: string, value: string) {
    setCustomer({ ...customer, [key]: value });
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="询盘预览">
      <div className="modal-panel">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-950">询盘预览</h2>
            <p className="text-sm text-slate-500">第一版仅生成和复制询盘内容，暂不连接真实发送服务。</p>
          </div>
          <button className="secondary-button" type="button" onClick={onClose}>
            关闭
          </button>
        </div>

        <div className="grid gap-5 py-5 lg:grid-cols-[1.1fr_.9fr]">
          <section className="rfq-preview-list">
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              <SummaryTile label="理论总重量" value={`${formatNumber(summary.totalWeightTon)} 吨`} />
              <SummaryTile label="40HQ估算" value={`${summary.containerCount} × 40HQ`} />
              <SummaryTile label="缺少重量" value={`${summary.missingWeightRowCount} 行`} />
            </div>
            <div className="space-y-4">
              {materialList.modules.length === 0 ? (
                <p className="text-sm text-slate-500">当前材料清单为空。</p>
              ) : (
                materialList.modules.map((module) => (
                  <div key={module.id} className="rounded-md border border-slate-200 bg-white p-3">
                    <p className="mb-2 font-bold text-slate-950">{productName(module.productType)}</p>
                    <div className="space-y-2">
                      {module.rows.map((row) => {
                        const calc = calculateRow(row);
                        return (
                          <div key={row.id} className="flex items-start justify-between gap-3 text-sm">
                            <span className="text-slate-600">
                              {getRowDescription(row) || "规格待选择"}，数量 {row.quantity}
                              {row.quantityUnit}
                            </span>
                            <span className="shrink-0 font-semibold text-slate-950">
                              {calc.hasWeight ? formatTonFromKg(calc.totalWeightKg) : "重量待补充"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <CustomerInput label="客户姓名" value={customer.name} onChange={(value) => updateCustomer("name", value)} />
              <CustomerInput label="公司名称" value={customer.company} onChange={(value) => updateCustomer("company", value)} />
              <CustomerInput label="国家/地区" value={customer.country} onChange={(value) => updateCustomer("country", value)} />
              <CustomerInput label="WhatsApp" value={customer.whatsapp} onChange={(value) => updateCustomer("whatsapp", value)} />
              <CustomerInput label="邮箱" value={customer.email} onChange={(value) => updateCustomer("email", value)} />
              <CustomerInput label="目的港" value={customer.port} onChange={(value) => updateCustomer("port", value)} />
            </div>
            <label className="mobile-field-label">
              补充要求
              <textarea
                className="field min-h-24"
                value={customer.notes}
                onChange={(event) => updateCustomer("notes", event.target.value)}
              />
            </label>
            <textarea className="rfq-textarea" readOnly value={rfqText} />
            <button className="primary-button w-full justify-center py-3" type="button" onClick={onCopy}>
              {copied ? "已复制询盘内容" : "复制询盘内容"}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

function SummaryTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-slate-950">{value}</p>
    </div>
  );
}

function CustomerInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mobile-field-label">
      {label}
      <input className="field" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
