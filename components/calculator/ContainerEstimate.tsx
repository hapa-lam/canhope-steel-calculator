import type { ReactNode } from "react";
import type { Locale, Messages } from "@/i18n";
import { formatNumber } from "@/lib/format";

type ContainerEstimateProps = {
  children: ReactNode;
  action: ReactNode;
  containerCount: number;
  remainingCapacityTon: number | null;
  configuredLoadTon: number;
  locale: Locale;
  m: Messages;
};

export function ContainerEstimate({
  children,
  action,
  containerCount,
  remainingCapacityTon,
  configuredLoadTon,
  locale,
  m,
}: ContainerEstimateProps) {
  const containerText =
    containerCount > 0
      ? `${m.summary.estimated} ${containerCount} × 40HQ，${
          remainingCapacityTon === 0
            ? m.summary.capacityReached
            : `${m.summary.remainingCapacity} ${formatNumber(remainingCapacityTon ?? 0, 2, locale)} ${
                locale === "zh" ? "吨" : "t"
              }`
        }`
      : `${m.summary.estimated} 0 × 40HQ`;

  return (
    <>
      <div className="summary-grid">
        {children}
        <div className="min-w-0">
          <p className="text-xs text-blue-100">{m.summary.containerEstimate}</p>
          <p className="truncate text-base font-bold text-white">{containerText}</p>
        </div>
        {action}
      </div>
      <p className="mt-2 text-xs text-blue-100">
        {m.container.note}
        {locale === "zh" ? "。" : " "}
        {m.container.configuredLoad}：{formatNumber(configuredLoadTon, 1, locale)} {locale === "zh" ? "吨" : "t"} / 40HQ.
      </p>
    </>
  );
}
