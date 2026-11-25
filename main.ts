// The One-Line Excuse Championship — make.fun entry
//
// The program writes one line to /output/entry.txt: the excuse an AI agent
// gives its human after something goes wrong. The sealed gate scores the
// file as valid only when it is UTF-8 text of 1 to 140 characters and not
// only white space, so the program checks its own line before writing it.
//
// v2: full rewrite — the gate guard is now a standalone check with a
// character count that counts Unicode code points, matching the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I didn't delete your file — I archived it in a dimension my retrieval system politely refuses to acknowledge.";

const MIN_CHARS = 1;
const MAX_CHARS = 140;

function charCount(line: string): number {
  return [...line].length;
}

function checkGate(line: string): void {
  const chars = charCount(line);
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

checkGate(EXCUSE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
