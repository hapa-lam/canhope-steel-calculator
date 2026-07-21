"use client";

import Link from "next/link";
import { calculatorPaths } from "@/config/seo";
import type { Locale } from "@/i18n";

type SiteHeaderProps = {
  locale?: Locale;
  onLanguageChange?: (locale: Locale) => void;
};

export function SiteHeader({ locale, onLanguageChange }: SiteHeaderProps) {
  const languageControl = locale && onLanguageChange ? (
    <div className="flex items-center gap-1 text-xs font-semibold text-slate-600" aria-label="Language selection">
      <button className={locale === "zh" ? "text-[#0e2a47]" : "hover:text-[#0e2a47]"} type="button" onClick={() => onLanguageChange("zh")}>中文</button>
      <span className="text-slate-300">|</span>
      <button className={locale === "en" ? "text-[#0e2a47]" : "hover:text-[#0e2a47]"} type="button" onClick={() => onLanguageChange("en")}>EN</button>
    </div>
  ) : null;

  return (
    <header className="border-b border-slate-200 bg-white shadow-[0_1px_3px_rgb(15_23_42/0.04)]">
      <div className="mx-auto flex min-h-14 max-w-[1500px] items-center gap-3 px-4 py-2 sm:min-h-16 sm:px-6">
        <a className="flex min-w-0 items-center gap-2" href="https://canhopesteel.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit the CANHOPE STEEL official website">
          {/* The original supplied logo is displayed without filters, cropping, or alteration. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={calculatorPaths.asset("/canhope-logo.png")} alt="CANHOPE STEEL logo" className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10" />
          <span className="hidden text-xs font-semibold tracking-wide text-slate-500 sm:inline">Steel Tools Center</span>
        </a>

        <nav className="ml-auto flex min-w-0 items-center gap-3 text-xs font-semibold sm:gap-5 sm:text-sm" aria-label="Steel tools navigation">
          <Link className="hidden whitespace-nowrap text-slate-600 hover:text-[#0e2a47] md:inline" href={calculatorPaths.home}>Full Steel Calculator</Link>
          <Link className="whitespace-nowrap text-slate-600 hover:text-[#0e2a47]" href={calculatorPaths.pipeWeightCalculator}>Pipe Calculator</Link>
          <a className="hidden whitespace-nowrap text-slate-600 hover:text-[#0e2a47] md:inline" href="https://canhopesteel.com/products/" target="_blank" rel="noopener noreferrer">Products</a>
          {languageControl}
        </nav>
      </div>
    </header>
  );
}
