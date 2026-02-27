import { readFileSync, writeFileSync } from "fs"

const replacements = [
  [/\\u00e1/g, "\u00e1"],  // á
  [/\\u00e9/g, "\u00e9"],  // é
  [/\\u00ed/g, "\u00ed"],  // í
  [/\\u00f3/g, "\u00f3"],  // ó
  [/\\u00fa/g, "\u00fa"],  // ú
  [/\\u00c1/g, "\u00c1"],  // Á
  [/\\u00c9/g, "\u00c9"],  // É
  [/\\u00cd/g, "\u00cd"],  // Í
  [/\\u00d3/g, "\u00d3"],  // Ó
  [/\\u00da/g, "\u00da"],  // Ú
  [/\\u00f1/g, "\u00f1"],  // ñ
  [/\\u00d1/g, "\u00d1"],  // Ñ
  [/\\u201c/g, "\u201c"],  // "
  [/\\u201d/g, "\u201d"],  // "
]

const files = [
  "/vercel/share/v0-project/components/features-section.tsx",
  "/vercel/share/v0-project/components/benefits-section.tsx",
  "/vercel/share/v0-project/components/pricing-section.tsx",
  "/vercel/share/v0-project/components/product-spotlight.tsx",
  "/vercel/share/v0-project/components/hero-section.tsx",
  "/vercel/share/v0-project/components/header.tsx",
]

for (const file of files) {
  let content = readFileSync(file, "utf8")
  let changed = false
  for (const [pattern, replacement] of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement)
      changed = true
    }
  }
  if (changed) {
    writeFileSync(file, content, "utf8")
    console.log(`[v0] Fixed tildes in: ${file}`)
  } else {
    console.log(`[v0] No changes needed: ${file}`)
  }
}

console.log("[v0] Done fixing tildes!")
