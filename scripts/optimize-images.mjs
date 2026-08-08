/**
 * Optimize source photography for the web.
 *
 *   node scripts/optimize-images.mjs <file-or-dir> [...] [--out DIR] [--width N] [--quality N]
 *
 * Examples:
 *   node scripts/optimize-images.mjs ~/Downloads/hero --out public/Home/hero
 *   node scripts/optimize-images.mjs public/Home/hero/slide-01.png --width 2400
 *
 * Writes WebP, preserving aspect ratio and never upscaling. Aspect is left
 * alone on purpose: the hero components crop with object-cover plus a per-slide
 * `focus` value, so baking a crop in here would remove that control.
 *
 * Uses the `sharp` that ships with Next.js rather than adding a dependency.
 * If a future Next drops it, `npm i -D sharp` restores this script.
 */

import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"]);

function parseArgs(argv) {
  const inputs = [];
  const opts = { out: "public/Home/hero", width: 2000, quality: 80 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--out") opts.out = argv[++i];
    else if (a === "--width") opts.width = Number(argv[++i]);
    else if (a === "--quality") opts.quality = Number(argv[++i]);
    else inputs.push(a);
  }
  return { inputs, opts };
}

async function collect(target) {
  const info = await stat(target);
  if (info.isFile()) return IMAGE_EXT.has(path.extname(target).toLowerCase()) ? [target] : [];
  const entries = await readdir(target, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.isFile() && IMAGE_EXT.has(path.extname(e.name).toLowerCase())) {
      files.push(path.join(target, e.name));
    }
  }
  return files;
}

const { inputs, opts } = parseArgs(process.argv.slice(2));

if (inputs.length === 0) {
  console.error("Usage: node scripts/optimize-images.mjs <file-or-dir> [...] [--out DIR] [--width N] [--quality N]");
  process.exit(1);
}

await mkdir(opts.out, { recursive: true });

const files = (await Promise.all(inputs.map(collect))).flat();
if (files.length === 0) {
  console.error("No images found in:", inputs.join(", "));
  process.exit(1);
}

let totalIn = 0;
let totalOut = 0;

for (const file of files) {
  const src = sharp(file);
  const meta = await src.metadata();
  const outName = path.basename(file, path.extname(file)) + ".webp";
  const outPath = path.join(opts.out, outName);

  const buf = await src
    .resize({ width: Math.min(opts.width, meta.width ?? opts.width), withoutEnlargement: true })
    .webp({ quality: opts.quality })
    .toBuffer();

  await writeFile(outPath, buf);

  const inSize = (await stat(file)).size;
  totalIn += inSize;
  totalOut += buf.length;

  const kb = (n) => `${Math.round(n / 1024)} KB`;
  const pct = Math.round((1 - buf.length / inSize) * 100);
  console.log(
    `${path.basename(file)}  ${meta.width}x${meta.height} ${kb(inSize)}  ->  ${outName} ${kb(buf.length)}  (-${pct}%)`,
  );
}

const mb = (n) => `${(n / 1024 / 1024).toFixed(2)} MB`;
console.log(`\n${files.length} images: ${mb(totalIn)} -> ${mb(totalOut)}  (-${Math.round((1 - totalOut / totalIn) * 100)}%)`);
console.log(`Output: ${opts.out}`);
