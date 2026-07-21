//#region node_modules/.nitro/vite/services/ssr/assets/seo-buLpr6UB.js
var calculatorBasePath = "";
var calculatorPaths = {
	home: `${calculatorBasePath}/` || "/",
	pipeWeightCalculator: `${calculatorBasePath}/pipe-weight-calculator/`,
	asset: (path) => `${calculatorBasePath}${path}` || path
};
var seoConfig = {
	siteName: "CANHOPE Steel Calculator",
	brandName: "CANHOPE STEEL",
	siteUrl: "https://calculator.canhopesteel.com/",
	pipeWeightCalculatorUrl: "https://calculator.canhopesteel.com/pipe-weight-calculator/",
	mainWebsiteUrl: "https://canhopesteel.com/",
	defaultLocale: "en_US",
	defaultLanguage: "en",
	title: "Free Steel Weight Calculator & RFQ Builder | CANHOPE",
	description: "Select steel products, sizes, wall thicknesses and quantities to calculate theoretical weight, estimate 40HQ capacity by weight, and prepare an RFQ.",
	logoPath: calculatorPaths.asset("/canhope-logo.png"),
	twitterCard: "summary"
};
var homepageJsonLd = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "WebSite",
		name: seoConfig.siteName,
		url: seoConfig.siteUrl,
		inLanguage: seoConfig.defaultLanguage,
		publisher: {
			"@type": "Organization",
			name: seoConfig.brandName,
			url: seoConfig.mainWebsiteUrl,
			logo: `${seoConfig.mainWebsiteUrl.replace(/\/$/, "")}${seoConfig.logoPath}`
		}
	}, {
		"@type": "WebApplication",
		name: seoConfig.title,
		url: seoConfig.siteUrl,
		description: seoConfig.description,
		inLanguage: seoConfig.defaultLanguage,
		applicationCategory: "BusinessApplication",
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0"
		},
		publisher: {
			"@type": "Organization",
			name: seoConfig.brandName,
			url: seoConfig.mainWebsiteUrl
		}
	}]
};
//#endregion
export { homepageJsonLd as n, calculatorPaths as t };
