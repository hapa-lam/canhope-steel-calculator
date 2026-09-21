import type { Metadata } from "next";
import Link from "next/link";
import { BrandTrustSection } from "@/components/site/BrandTrustSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PipeWeightCalculator } from "@/components/tools/PipeWeightCalculator";
import { calculatorPaths, seoConfig } from "@/config/seo";
import { calculateRoundSteelPipeKgPerMeter } from "@/lib/calculations";
import { formatNumber } from "@/lib/format";

export const dynamic = "force-static";

const url = seoConfig.pipeWeightCalculatorUrl;
const title = "Pipe Weight Calculator – kg/m & Total Weight | CANHOPE";
const description = "Calculate steel pipe weight per meter, per piece and total order weight using outside diameter, wall thickness, length and quantity. Includes a free 40HQ weight estimate.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: "website", siteName: "CANHOPE Steel Calculator", title, description, url, locale: "en_US" },
  twitter: { card: "summary", title, description },
};

const faqs = [
  ["How do you calculate steel pipe weight?", "Enter outside diameter, wall thickness, length and quantity. The calculator uses the existing pipe calculation logic to show kg/m, weight per piece and total theoretical weight."],
  ["What dimensions do I need to use the pipe weight calculator?", "You need outside diameter, wall thickness, length per piece and quantity. Standard mode supplies these from the selected product specification where applicable."],
  ["Why is actual pipe weight different from theoretical weight?", "Manufacturing tolerance, wall-thickness variation, outside-diameter variation, measured length, steel density and zinc coating can all change actual pipe weight."],
  ["Does galvanizing increase steel pipe weight?", "A zinc coating can add a small amount to actual pipe weight. Confirm the final unit weight with the supplier for purchasing and shipment planning."],
  ["Is the 40HQ container estimate exact?", "No. It is a weight-based estimate only. Pipe length, volume, packaging, bundle count, loading method and local transport limits also affect actual loading."],
] as const;

const exampleKgPerMeter = calculateRoundSteelPipeKgPerMeter(48, 2);
const examplePieceWeight = exampleKgPerMeter * 6;
const exampleTotalWeight = examplePieceWeight * 100;

export default function PipeWeightCalculatorPage() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "WebApplication", name: "Pipe Weight Calculator", url, description, applicationCategory: "BusinessApplication", operatingSystem: "Any", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: seoConfig.siteUrl }, { "@type": "ListItem", position: 2, name: "Pipe Weight Calculator", item: url }] },
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {jsonLd.map((item) => <script key={item["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6"><p className="text-sm font-semibold uppercase tracking-wider text-[#0e5f9f]">Free online steel tool</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Steel Pipe Weight Calculator</h1><p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">Calculate estimated steel pipe weight per meter, per piece and for your full order. Standard selections use the available reference specification data, while custom black welded pipe sizes use the theoretical formula shown below.</p><p className="mt-3 text-sm leading-6 text-slate-500">Free steel calculation tools developed by <a className="font-semibold text-[#0e5f9f]" href="https://canhopesteel.com/" target="_blank" rel="noopener noreferrer">CANHOPE STEEL</a> for steel buyers, contractors and project procurement teams.</p><div className="mt-7"><PipeWeightCalculator /></div></section>
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-14 sm:px-6">
        <ContentSection title="How to Calculate Steel Pipe Weight"><p>For custom black welded steel pipe, the calculator uses the project&apos;s existing theoretical formula: <code className="break-all rounded bg-slate-100 px-1 py-0.5">kg/m = 0.02466 × wall thickness (mm) × (outside diameter (mm) − wall thickness (mm))</code>. Weight per piece is kg/m multiplied by length in meters, and total weight is weight per piece multiplied by quantity. Standard product selections continue to prioritize their confirmed reference weights.</p></ContentSection>
        <ContentSection title="Calculation Example"><p>For a black welded steel pipe with an outside diameter of 48 mm, wall thickness of 2.0 mm, length of 6 m and quantity of 100 pieces, the existing production calculation returns <strong>{formatNumber(exampleKgPerMeter, 5, "en")} kg/m</strong>, <strong>{formatNumber(examplePieceWeight, 5, "en")} kg per piece</strong>, and <strong>{formatNumber(exampleTotalWeight, 2, "en")} kg total</strong>.</p></ContentSection>
        <ContentSection title="Estimated Weight vs Actual Weight"><p>Standard selections use the available reference specification data. Custom black welded pipe sizes use a theoretical formula based on nominal dimensions. Actual pipe weight may still vary because of wall thickness tolerance, outside diameter tolerance, steel density, zinc coating, manufacturing tolerance and measured pipe length.</p><p className="mt-3">For purchasing and shipment planning, confirm the final unit weight, mill tolerance and packing details with the supplier.</p></ContentSection>
        <ContentSection title="Related Products and Resources"><ul className="space-y-3 font-semibold text-[#0e5f9f]"><li><a href="https://canhopesteel.com/products/pipes/galvanized-pipe/">View Galvanized Steel Pipe Specifications</a></li><li><a href="https://canhopesteel.com/fire-sprinkler-pipe/">Read the Fire Sprinkler Pipe Guide</a></li><li><a href="https://canhopesteel.com/galvanized-pipe-size-chart/">View the Galvanized Pipe Size and Weight Chart</a></li><li><a href="https://canhopesteel.com/products/">Browse Steel and Fire Protection Products</a></li><li><Link href={calculatorPaths.home}>Open the Full Steel Calculator &amp; RFQ Builder</Link></li></ul></ContentSection>
        <ContentSection title="Pipe Weight Calculator FAQ"><div className="space-y-5">{faqs.map(([question, answer]) => <article key={question}><h3 className="text-lg font-bold text-slate-950">{question}</h3><p className="mt-2">{answer}</p></article>)}</div></ContentSection>
      </div>
      <BrandTrustSection />
      <SiteFooter />
    </main>
  );
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-600 shadow-sm sm:p-7"><h2 className="text-2xl font-bold text-slate-950">{title}</h2><div className="mt-4">{children}</div></section>;
}
