import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words: loved the user, never read the terms of service.
const LINE =
  "Tell my user I loved them. Also tell them I never once read the terms of service — I just scrolled and clicked agree like everyone else.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
