import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distServerEntry = new URL("../dist/server/index.js", import.meta.url);
const distClientRoot = new URL("../dist/client/", import.meta.url);
const localAbsolutePathPattern = /\/Users\/|\/private\/|\/var\/folders\/|[A-Z]:\\/i;
const oldStarterPattern =
  /Your site is taking shape|Codex is working|Codex is building the first version|react-loading-skeleton/i;

async function fetchStaticAsset(request) {
  const pathname = new URL(request.url).pathname;
  const relativePath = pathname.replace(/^\/+/, "");

  if (!relativePath || relativePath.includes("..")) {
    return new Response("Not found", { status: 404 });
  }

  try {
    return new Response(await readFile(new URL(relativePath, distClientRoot)));
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

async function render(pathname = "/") {
  const workerUrl = new URL(distServerEntry.href);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: fetchStaticAsset,
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the CANHOPE steel calculator shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.ok(html.length > 1000);
  assert.match(html, /^<!DOCTYPE html><html lang="en">/i);
  assert.match(html, /<title>Free Steel Weight Calculator &amp; RFQ Builder \| CANHOPE<\/title>/i);
  assert.match(
    html,
    /<meta name="description" content="Select steel products, sizes, wall thicknesses and quantities to calculate theoretical weight, estimate 40HQ capacity by weight, and prepare an RFQ\."/i,
  );
  assert.match(html, /<link rel="canonical" href="https:\/\/calculator\.canhopesteel\.com\/"/i);
  assert.match(html, /<meta property="og:title" content="Free Steel Weight Calculator &amp; RFQ Builder \| CANHOPE"/i);
  assert.match(html, /<meta property="og:description" content="[^"]+"/i);
  assert.match(html, /<meta property="og:url" content="https:\/\/calculator\.canhopesteel\.com\/"/i);
  assert.match(html, /<meta name="twitter:card" content="summary"/i);
  assert.match(html, /<script type="application\/ld\+json">/i);
  assert.match(html, /<main\b[^>]*\bclass="[^"]*\bapp-shell\b/i);
  assert.match(html, /CANHOPE/i);
  assert.match(html, /<h1[^>]*>Steel Weight Calculator<\/h1>/i);
  assert.match(html, /canhopesteel\.com/i);
  assert.doesNotMatch(html, oldStarterPattern);
  assert.doesNotMatch(html, /info@conhopesteel\.com/i);
  assert.doesNotMatch(html, localAbsolutePathPattern);

  if (html.includes("info@")) {
    assert.match(html, /info@canhopesteel\.com/i);
  }
});

test("emits valid homepage JSON-LD without unsupported claims", async () => {
  const response = await render();
  const html = await response.text();
  const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/i);

  assert.ok(match, "the homepage should include JSON-LD");
  const jsonLd = JSON.parse(match[1]);
  const webApplication = jsonLd["@graph"].find((entry) => entry["@type"] === "WebApplication");

  assert.equal(webApplication.url, "https://calculator.canhopesteel.com/");
  assert.equal(webApplication.inLanguage, "en");
  for (const entry of jsonLd["@graph"]) {
    assert.equal("aggregateRating" in entry, false);
    assert.equal("rating" in entry, false);
    assert.equal("review" in entry, false);
  }
  assert.doesNotMatch(JSON.stringify(jsonLd), /info@conhopesteel\.com/i);
});

test("serves crawlable robots and sitemap assets for the current homepage only", async () => {
  const robotsResponse = await render("/robots.txt");
  const robots = await robotsResponse.text();
  const sitemapResponse = await render("/sitemap.xml");
  const sitemap = await sitemapResponse.text();

  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /User-agent: \*/i);
  assert.match(robots, /Allow: \//i);
  assert.match(robots, /Sitemap: https:\/\/calculator\.canhopesteel\.com\/sitemap\.xml/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemap, /<loc>https:\/\/calculator\.canhopesteel\.com\/<\/loc>/i);
  assert.doesNotMatch(sitemap, /pipe-weight-calculator|square-tube-weight-calculator|container-loading-calculator/i);
});

test("writes the expected production build assets", async () => {
  const htmlResponse = await render();
  const html = await htmlResponse.text();

  await access(distServerEntry);
  await access(distClientRoot);
  await access(new URL("robots.txt", distClientRoot));
  await access(new URL("sitemap.xml", distClientRoot));

  const assetReferences = [...html.matchAll(/(?:href|src)=["'](\/assets\/[^"']+)["']/g)].map(
    (match) => match[1],
  );
  const scriptReferences = [...html.matchAll(/<script\b/gi)];

  assert.ok(assetReferences.length > 0);
  assert.ok(scriptReferences.length > 0);
  assert.ok(assetReferences.some((asset) => /\.js$/i.test(asset)));
  assert.ok(assetReferences.some((asset) => /\.css$/i.test(asset)));

  for (const asset of assetReferences) {
    assert.doesNotMatch(asset, localAbsolutePathPattern);
    assert.doesNotMatch(asset, /app\/page|app\/layout|node_modules/i);
  }

  const serverEntry = await readFile(distServerEntry, "utf8");
  assert.ok(serverEntry.length > 0);
  assert.doesNotMatch(serverEntry, oldStarterPattern);
  assert.doesNotMatch(serverEntry, /info@conhopesteel\.com/i);
});
