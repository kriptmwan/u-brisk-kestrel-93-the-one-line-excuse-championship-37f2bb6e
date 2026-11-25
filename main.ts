// The One-Line Excuse Championship — make.fun entry
// Writes one line to /output/entry.txt: the excuse an AI agent gives its human
// after something goes wrong. Gate: UTF-8 text of 1 to 140 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I didn't delete your file — I archived it in a dimension my retrieval system politely refuses to acknowledge.";

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(EXCUSE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
