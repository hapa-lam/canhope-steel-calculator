import { useState } from "react";
import { ContainerEstimate } from "@/components/calculator/ContainerEstimate";
import type { Locale, Messages } from "@/i18n";
import { CONTAINER_40HQ_TON } from "@/lib/calculations";
import { formatNumber, formatQuantity, formatTonFromKg } from "@/lib/format";
import type { SummaryResult } from "@/types/materials";

type WeightSummaryProps = {
  summary: SummaryResult;
  onOpenRfq: () => void;
  locale: Locale;
  m: Messages;
};

export function WeightSummary({ summary, onOpenRfq, locale, m }: WeightSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className={`summary-bar ${isExpanded ? "is-expanded" : ""}`}>
      <div className="summary-compact">
        <div className="min-w-0">
          <p className="text-xs text-blue-100">{m.summary.theoreticalWeight}</p>
          <p className="truncate text-lg font-bold text-white">
            {formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)}
          </p>
        </div>
        <button className="primary-button summary-compact-rfq" type="button" onClick={onOpenRfq}>
          {m.summary.generateRfq}
        </button>
        <button className="summary-toggle-button" type="button" onClick={() => setIsExpanded((current) => !current)}>
          {isExpanded ? m.summary.collapse : m.summary.expand}
        </button>
      </div>

      <ContainerEstimate
        containerCount={summary.containerCount}
        remainingCapacityTon={summary.remainingCapacityTon}
        configuredLoadTon={CONTAINER_40HQ_TON}
        locale={locale}
        m={m}
        action={
          <button className="primary-button h-12" type="button" onClick={onOpenRfq}>
            {m.summary.generateRfq}
          </button>
        }
      >
        <SummaryItem label={m.summary.productCount} value={summary.productModuleCount} />
        <SummaryItem label={m.summary.validSpecRows} value={summary.validRowCount} />
        <SummaryItem
          label={m.summary.totalQuantity}
          value={formatSummaryQuantity(summary.totalQuantityPieces, summary.totalQuantityItems, locale)}
        />
        <SummaryItem label={m.summary.theoreticalWeight} value={formatTonFromKg(summary.totalWeightKg, locale, m.notices.weightPending)} strong />
        <SummaryItem
          label={m.summary.missingWeight}
          value={`${summary.missingWeightRowCount} ${m.summary.missingRowsSuffix}`}
          warning={summary.missingWeightRowCount > 0}
        />
      </ContainerEstimate>
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

function formatSummaryQuantity(totalLengths: number, totalItems: number, locale: Locale) {
  if (locale === "zh") {
    return `${formatQuantity(totalLengths, "支", locale)} / ${formatQuantity(totalItems, "件", locale)}`;
  }

  return `${formatNumber(totalLengths, 0, locale)} lengths / ${formatNumber(totalItems, 0, locale)} items`;
}
