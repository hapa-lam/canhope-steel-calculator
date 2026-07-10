export function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: value % 1 === 0 ? 0 : digits,
  }).format(value);
}

export function formatKg(value?: number) {
  if (value === undefined) {
    return "重量待补充";
  }

  return `${formatNumber(value)} kg`;
}

export function formatTonFromKg(valueKg?: number) {
  if (valueKg === undefined) {
    return "重量待补充";
  }

  return `${formatNumber(valueKg / 1000)} 吨`;
}
