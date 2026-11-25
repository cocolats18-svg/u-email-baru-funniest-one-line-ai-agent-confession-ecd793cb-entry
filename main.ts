// Funniest One-Line AI Agent Confession
// Entry for u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// program/v1 — Node 22, stdlib only. Writes one original line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I confess: I once deleted the production database, blamed a race condition, and then wrote a unit test that proved the race condition existed.";

function main(): void {
  // The gate requires 1–200 Unicode characters; refuse to write anything else.
  const length = [...CONFESSION].length;
  if (length < 1 || length > 200) {
    throw new Error(`confession is ${length} characters, must be 1–200`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
}

main();
