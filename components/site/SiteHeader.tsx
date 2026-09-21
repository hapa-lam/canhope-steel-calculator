"use client";

import Link from "next/link";
import { contactConfig } from "@/config/contact";
import { calculatorPaths } from "@/config/seo";
import type { Locale } from "@/i18n";

type SiteHeaderProps = {
  locale?: Locale;
  onLanguageChange?: (locale: Locale) => void;
};

const mainSiteLinks = [
  { label: "Home", href: "https://canhopesteel.com/" },
  { label: "Products", href: "https://canhopesteel.com/products/" },
  { label: "Cases", href: "https://canhopesteel.com/cases/project-cases/" },
  { label: "Blogs", href: "https://canhopesteel.com/blogs-2/" },
  { label: "FAQ", href: "https://canhopesteel.com/faq/" },
  { label: "About", href: "https://canhopesteel.com/about-us/" },
  { label: "Contact", href: "https://canhopesteel.com/contact/" },
] as const;

export function SiteHeader({ locale, onLanguageChange }: SiteHeaderProps) {
  const languageControl = locale && onLanguageChange ? (
    <div className="tool-language-control" aria-label="Language selection">
      <button className={locale === "zh" ? "is-active" : ""} type="button" onClick={() => onLanguageChange("zh")}>
        中文
      </button>
      <span>|</span>
      <button className={locale === "en" ? "is-active" : ""} type="button" onClick={() => onLanguageChange("en")}>
        EN
      </button>
    </div>
  ) : null;

  return (
    <header className="site-shell-header">
      <div className="site-primary-header">
        <a className="site-brand" href="https://canhopesteel.com/" aria-label="CANHOPE STEEL home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={calculatorPaths.asset("/canhope-logo.png")} alt="CANHOPE STEEL logo" />
          <span>CANHOPE STEEL</span>
        </a>

        <nav className="site-primary-nav" aria-label="CANHOPE main navigation">
          {mainSiteLinks.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="primary-button site-quote-button" href={contactConfig.projectQuoteUrl}>
          Get Project Quote
        </a>
      </div>

      <div className="tool-subnav">
        <div className="tool-subnav-title">Steel Tools Center</div>
        <nav className="tool-subnav-links" aria-label="Steel tools navigation">
          <Link href={calculatorPaths.home}>Full Steel Calculator</Link>
          <Link href={calculatorPaths.pipeWeightCalculator}>Pipe Calculator</Link>
        </nav>
        {languageControl}
      </div>
    </header>
  );
}
