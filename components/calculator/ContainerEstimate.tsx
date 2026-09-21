import type { ReactNode } from "react";
import type { Locale, Messages } from "@/i18n";
import { formatNumber } from "@/lib/format";

type ContainerEstimateProps = {
  children: ReactNode;
  action: ReactNode;
  containerCount: number;
  remainingCapacityTon: number | null;
  configuredLoadTon: number;
  totalWeightTon: number;
  missingWeightRowCount: number;
  locale: Locale;
  m: Messages;
};

export function ContainerEstimate({
  children,
  action,
  containerCount,
  remainingCapacityTon,
  configuredLoadTon,
  totalWeightTon,
  missingWeightRowCount,
  locale,
  m,
}: ContainerEstimateProps) {
  const capacityPrefix = missingWeightRowCount > 0
    ? m.summary.knownWeightsOnly
    : m.summary.byWeightOnly;

  const containerText =
    totalWeightTon > 0 && containerCount > 0
      ? `${capacityPrefix}: ${m.summary.fitsWithin} ${containerCount} × 40HQ${remainingCapacityTon === null
          ? ""
          : remainingCapacityTon === 0
            ? ` · ${m.summary.capacityReached}`
            : ` · ${m.summary.remainingCapacity} ${formatNumber(remainingCapacityTon, 2, locale)} ${locale === "zh" ? "吨" : "t"}`}`
      : m.summary.noLoadEntered;

  const pendingWeightText = missingWeightRowCount > 0
    ? m.summary.pendingWeights.replace("{count}", String(missingWeightRowCount))
    : null;

  return (
    <>
      <div className="summary-grid">
        {children}
        <div className="min-w-0">
          <p className="text-xs text-blue-100">{m.summary.containerEstimate}</p>
          <p className="text-base font-bold text-white">{containerText}</p>
        </div>
        {action}
      </div>
      <p className="mt-2 text-xs text-blue-100">
        {pendingWeightText ? `${pendingWeightText}. ` : ""}
        {m.container.note}
        {locale === "zh" ? "。" : " "}
        {m.container.configuredLoad}：{formatNumber(configuredLoadTon, 1, locale)} {locale === "zh" ? "吨" : "t"} / 40HQ.
      </p>
    </>
  );
}
