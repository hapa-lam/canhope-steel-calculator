const isStaticSubdirectoryBuild =
  process.env.STATIC_SUBDIRECTORY_BUILD === "1";
const calculatorBasePath = isStaticSubdirectoryBuild ? "/steel-calculator" : "";

export const calculatorPaths = {
  home: `${calculatorBasePath}/` || "/",
  pipeWeightCalculator: `${calculatorBasePath}/pipe-weight-calculator/`,
  asset: (path: `/${string}`) => `${calculatorBasePath}${path}` || path,
} as const;

export const seoConfig = {
  siteName: "CANHOPE Steel Calculator",
  brandName: "CANHOPE STEEL",
  siteUrl: isStaticSubdirectoryBuild
    ? "https://canhopesteel.com/steel-calculator/"
    : "https://calculator.canhopesteel.com/",
  pipeWeightCalculatorUrl: isStaticSubdirectoryBuild
    ? "https://canhopesteel.com/steel-calculator/pipe-weight-calculator/"
    : "https://calculator.canhopesteel.com/pipe-weight-calculator/",
  mainWebsiteUrl: "https://canhopesteel.com/",
  defaultLocale: "en_US",
  defaultLanguage: "en",
  title: "Free Steel Weight Calculator & RFQ Builder | CANHOPE",
  description:
    "Select steel products, sizes, wall thicknesses and quantities to calculate theoretical weight, estimate 40HQ capacity by weight, and prepare an RFQ.",
  logoPath: calculatorPaths.asset("/canhope-logo.png"),
  twitterCard: "summary" as const,
} as const;

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      inLanguage: seoConfig.defaultLanguage,
      publisher: {
        "@type": "Organization",
        name: seoConfig.brandName,
        url: seoConfig.mainWebsiteUrl,
        logo: `${seoConfig.mainWebsiteUrl.replace(/\/$/, "")}${seoConfig.logoPath}`,
      },
    },
    {
      "@type": "WebApplication",
      name: seoConfig.title,
      url: seoConfig.siteUrl,
      description: seoConfig.description,
      inLanguage: seoConfig.defaultLanguage,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
      },
      publisher: {
        "@type": "Organization",
        name: seoConfig.brandName,
        url: seoConfig.mainWebsiteUrl,
      },
    },
  ],
} as const;
