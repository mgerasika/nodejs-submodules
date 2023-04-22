import { StringBuilder } from "../swagger-to-typescript/src/utils/string-builder";
import { getDoc } from "../swagger-to-typescript/src/swagger-to-model/swagger-to-model.service";
import { swaggerToTypescript } from "../swagger-to-typescript/src/swagger-to-typescript/swagger-to-typescript.service";
import prettier from "prettier";

const fs = require("fs");
const path = require("path");

const INSERT_START = "// INSERT START";
const INSERT_END = "// INSERT END";

export const writeTsToFile = (outFile: string, content: string): void => {
  const sb = new StringBuilder();
  const indexContent = fs.readFileSync(outFile).toString();
  const startIndex = indexContent.indexOf(INSERT_START) + INSERT_START.length;
  const endIndex = indexContent.indexOf(INSERT_END);
  sb.append(indexContent.substring(0, startIndex));

  sb.append(content);

  sb.appendLine(indexContent.substring(endIndex));
  fs.writeFileSync(path.resolve(outFile), sb.toString());

  try {
    formatFile(outFile, outFile);
  } catch {
    console.error("format with prettier error " + outFile);
  }
  console.log("generate typescript code success. " + outFile);
};

const formatFile = (inputFilePath: string, outputFilePath: string): void => {
  const fileContent = fs.readFileSync(inputFilePath, "utf8");
  prettier.resolveConfig(inputFilePath).then((prettierConfig) => {
    fs.writeFileSync(
      outputFilePath,
      prettier.format(fileContent, {
        ...prettierConfig,
        filepath: inputFilePath,
      })
    );
  });
};

const res = fs.readFileSync("../spec.json").toString();
const doc = getDoc(JSON.parse(res));
if (!doc) {
  throw "Document cannot be null";
}
const tsCode = swaggerToTypescript(doc);
writeTsToFile(`src/api.generated.ts`, tsCode);
