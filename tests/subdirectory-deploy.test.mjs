import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const deployRoot = new URL("../deploy/steel-calculator/", import.meta.url);
const homepage = new URL("index.html", deployRoot);
const pipePage = new URL("pipe-weight-calculator/index.html", deployRoot);
const sitemap = new URL("sitemap.xml", deployRoot);

async function read(url) {
  return readFile(url, "utf8");
}

test("creates a WordPress-subdirectory static deployment package", async () => {
  await access(homepage);
  await access(pipePage);
  await access(new URL("assets/", deployRoot));
  await assert.rejects(access(new URL("robots.txt", deployRoot)));
});

test("uses the /steel-calculator/ base path for static HTML and assets", async () => {
  const [homeHtml, pipeHtml] = await Promise.all([read(homepage), read(pipePage)]);
  const packageHtml = `${homeHtml}\n${pipeHtml}`;

  assert.match(homeHtml, /href="\/steel-calculator\/assets\//i);
  assert.match(homeHtml, /href="\/steel-calculator\/assets\/[^\"]+\.js"/i);
  assert.match(packageHtml, /href="\/steel-calculator\/"[^>]*>Full Steel Calculator</i);
  assert.match(packageHtml, /href="\/steel-calculator\/pipe-weight-calculator\/"[^>]*>Pipe (?:Calculator|Weight Calculator)</i);
  assert.match(packageHtml, /src="\/steel-calculator\/canhope-logo\.png"/i);
  assert.match(packageHtml, /href="https:\/\/canhopesteel\.com\/products\/"/i);
  assert.doesNotMatch(packageHtml, /(?:href|src)="\/assets\//i);
  assert.doesNotMatch(packageHtml, /\/steel-calculator\/steel-calculator\//i);
});

test("exports the new canonical URLs and a subdirectory sitemap", async () => {
  const [homeHtml, pipeHtml, sitemapXml] = await Promise.all([
    read(homepage),
    read(pipePage),
    read(sitemap),
  ]);
  const packageText = `${homeHtml}\n${pipeHtml}\n${sitemapXml}`;

  assert.match(homeHtml, /<link rel="canonical" href="https:\/\/canhopesteel\.com\/steel-calculator\/"/i);
  assert.match(homeHtml, /<meta property="og:url" content="https:\/\/canhopesteel\.com\/steel-calculator\/"/i);
  assert.match(pipeHtml, /<link rel="canonical" href="https:\/\/canhopesteel\.com\/steel-calculator\/pipe-weight-calculator\/"/i);
  assert.match(pipeHtml, /<meta property="og:url" content="https:\/\/canhopesteel\.com\/steel-calculator\/pipe-weight-calculator\/"/i);
  assert.match(sitemapXml, /<loc>https:\/\/canhopesteel\.com\/steel-calculator\/<\/loc>/i);
  assert.match(sitemapXml, /<loc>https:\/\/canhopesteel\.com\/steel-calculator\/pipe-weight-calculator\/<\/loc>/i);
  assert.doesNotMatch(packageText, /https:\/\/calculator\.canhopesteel\.com\//i);
  assert.doesNotMatch(packageText, /localhost|\/Users\/|\/private\/|\/var\/folders\//i);
});
