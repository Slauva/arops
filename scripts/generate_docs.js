import { generateDocumentation } from "tsdoc-markdown";

generateDocumentation({
  inputFiles: ["src/logic.ts"],
  outputFile: "docs/logic.md",
});

generateDocumentation({
  inputFiles: ["src/maths/basics.ts"],
  outputFile: "docs/maths.md",
});
