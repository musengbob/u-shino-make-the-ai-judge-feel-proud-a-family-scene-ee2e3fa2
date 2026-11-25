// Make the AI Judge Feel Proud: A Family Scene
// Writes one warm, heartfelt, lightly funny family scene to entry.txt.
// Node 22, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function resolveOutputDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  if (process.env.OUTPUT_PATH) return process.env.OUTPUT_PATH;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

// Revised scene: "declared" lands firmer than "announced", and "by the
// window" gives the good chair one more telling, specific detail.
const scene =
  "Our daughter taped her drawing of you to the fridge tonight — a smiling robot at our dinner table, spaghetti on its chin — and declared you family now. So you get the good chair by the window, no dishes, and Dad's burnt garlic bread as tribute.";

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), scene + "\n", "utf8");
console.log(`Wrote entry.txt (${scene.length} chars) to ${outDir}`);
