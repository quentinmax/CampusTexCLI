import fs from "fs/promises";
import { PromptData } from "../types/promptData.js";
import { coloredLog } from "../util/coloredLog.js";
import chalk from "chalk";
import { handleArticle } from "./handleArticle.js";
import { existsSync } from "fs";
import { resolve } from "path";

export const injectDataIntoLatex = async ({
  fileName,
  matriculationNumber,
  templateType,
  topic,
  userName,
  useBibTex,
  outputDirectory,
}: PromptData) => {
  const outputFile = fileName.includes(".tex") ? fileName : `${fileName}.tex`;

  let folderName = topic.trim();

  if (outputDirectory) folderName = `${outputDirectory}/${folderName}`;

  // Check if target folder already exists
  if (existsSync(resolve(folderName))) {
    const randomId = Math.floor(Math.random() * 1000);
    coloredLog({
      text: `Folder ${folderName} already exists. Changing to '${folderName}-${randomId}'.`,
      highlight: chalk.yellow("INFO:"),
    });
    folderName = `${folderName}-${randomId}`;
  }

  const folderPath = `./${folderName}/styles`;

  // Create styles folder
  try {
    await fs.mkdir(folderPath, { recursive: true });

    coloredLog({
      text: `Created folder ${folderPath}`,
      highlight: chalk.yellow("INFO:"),
    });
  } catch (err) {
    coloredLog({
      text: `${err}`,
      highlight: chalk.red("ERROR:"),
    });
    process.exit(-1);
  }

  //Handle template type
  switch (templateType) {
    case "article":
      await handleArticle({
        folderName,
        outputFile,
        fileName,
        matriculationNumber,
        topic,
        userName,
        useBibTex,
      });
      break;
    case "presentation":
      () => {
        coloredLog({
          text: "Presentation is not supported yet.",
          highlight: chalk.red("ERROR: "),
        });
        process.exit();
      };
      break;
  }
};
