/**
 * Convert oversized PNG/JPG images under src/images to WebP.
 *
 * - Skips files smaller than the size threshold (small icons stay as-is).
 * - Resizes anything wider than --max-width.
 * - Writes <name>.webp alongside the original. Originals are NOT deleted by
 *   this script; remove them after verifying imports build cleanly.
 *
 * Usage: node scripts/convert-images.mjs [--max-width=1400] [--quality=80] [--min-kb=80]
 */

import { readdir, stat } from "node:fs/promises";
import { join, extname, basename, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "src", "images");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  })
);

const MAX_WIDTH = Number(args["max-width"] ?? 1400);
const QUALITY = Number(args.quality ?? 80);
const MIN_KB = Number(args["min-kb"] ?? 80);

// Folders skipped entirely - small UI assets that already compress poorly.
const SKIP_DIRS = new Set(["logos", "fonts", "social-media"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

const isConvertible = (file) => /\.(png|jpe?g)$/i.test(file);

let totalIn = 0;
let totalOut = 0;
let converted = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  if (!isConvertible(file)) continue;
  const sizeKb = (await stat(file)).size / 1024;
  if (sizeKb < MIN_KB) {
    skipped++;
    continue;
  }
  const out = join(dirname(file), basename(file, extname(file)) + ".webp");
  const rel = relative(ROOT, file);
  try {
    const image = sharp(file);
    const meta = await image.metadata();
    const pipeline = (meta.width ?? 0) > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;
    await pipeline.webp({ quality: QUALITY }).toFile(out);
    const outKb = (await stat(out)).size / 1024;
    totalIn += sizeKb;
    totalOut += outKb;
    converted++;
    console.log(
      `  ${rel}  ${sizeKb.toFixed(0)}KB -> ${outKb.toFixed(0)}KB  (${(
        (1 - outKb / sizeKb) *
        100
      ).toFixed(0)}% smaller)`
    );
  } catch (err) {
    console.error(`! Failed: ${rel}`, err.message);
  }
}

console.log(`\nConverted ${converted} files, skipped ${skipped} small ones.`);
console.log(
  `Total: ${(totalIn / 1024).toFixed(1)}MB -> ${(totalOut / 1024).toFixed(
    1
  )}MB  (${((1 - totalOut / totalIn) * 100).toFixed(0)}% reduction)`
);
console.log(
  "\nNext: update imports in src/ from .png/.jpg to .webp, then delete the original files."
);
