import type { Locale } from "@/i18n";

export function formatNumber(value: number, digits = 2, locale: Locale = "zh") {
  return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: value % 1 === 0 ? 0 : digits,
  }).format(value);
}

export function formatKg(value?: number | null, locale: Locale = "zh", pendingLabel = "重量待补充") {
  if (value === undefined || value === null) {
    return pendingLabel;
  }

  return `${formatNumber(value, 2, locale)} ${locale === "zh" ? "千克" : "kg"}`;
}

export function formatTonFromKg(valueKg?: number | null, locale: Locale = "zh", pendingLabel = "重量待补充") {
  if (valueKg === undefined || valueKg === null) {
    return pendingLabel;
  }

  return `${formatNumber(valueKg / 1000, 2, locale)} ${locale === "zh" ? "吨" : "t"}`;
}

export function formatLength(valueM: number, locale: Locale = "zh") {
  return `${formatNumber(valueM, 2, locale)} ${locale === "zh" ? "米" : "m"}`;
}

export function formatQuantity(value: number, unit: "支" | "件", locale: Locale = "zh") {
  if (locale === "zh") {
    return `${formatNumber(value, 0, locale)}${unit}`;
  }

  return `${formatNumber(value, 0, locale)} pcs`;
}

export function formatUnitWeightLabel(label: "kg/m" | "kg/件", locale: Locale = "zh") {
  if (label === "kg/m") {
    return locale === "zh" ? "千克/米" : "kg/m";
  }

  return locale === "zh" ? "千克/件" : "kg/pc";
}
