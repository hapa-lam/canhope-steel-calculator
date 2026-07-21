import { access, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const staticClientDirectory = resolve(projectRoot, "dist", "client");
const deployDirectory = resolve(projectRoot, "deploy", "steel-calculator");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://canhopesteel.com/steel-calculator/</loc>
  </url>
  <url>
    <loc>https://canhopesteel.com/steel-calculator/pipe-weight-calculator/</loc>
  </url>
</urlset>
`;

await access(resolve(staticClientDirectory, "index.html"));
await access(resolve(staticClientDirectory, "pipe-weight-calculator", "index.html"));

await rm(deployDirectory, { recursive: true, force: true });
await mkdir(deployDirectory, { recursive: true });
await cp(staticClientDirectory, deployDirectory, { recursive: true });

// The main WordPress domain owns robots.txt. A child deployment must not
// publish a competing robots file, but it does provide its own sitemap.
await rm(resolve(deployDirectory, "robots.txt"), { force: true });
await writeFile(resolve(deployDirectory, "sitemap.xml"), sitemap, "utf8");
