import fs from "fs/promises";
import { PromptData } from "../types/promptData.js";
import { coloredLog } from "../util/coloredLog.js";
import chalk from "chalk";
import { handleArticle } from "./handleArticle.js";

export const injectDataIntoLatex = async ({
  fileName,
  matriculationNumber,
  templateType,
  topic,
  userName,
  useBibTex
}: PromptData) => {
 
  const outputFile = fileName.includes(".tex") ? fileName : `${fileName}.tex`;

  const folderName = topic.trim();
  const folderPath = `./${folderName}/styles`

  try {
    await fs.mkdir(folderPath, { recursive: true });

    coloredLog({
      text: `Created folder ${folderPath}`,
      highlight: chalk.yellow("INFO:"),
    })
  } catch (err) {
    coloredLog({
      text: `${err}`,
      highlight: chalk.red("ERROR:"),
    })
    process.exit(-1);
  }

  switch (templateType) {
    case "article":
      await handleArticle({ folderName, outputFile, fileName, matriculationNumber, topic, userName, useBibTex })
      break;
    case "presentation":
      () => {
        coloredLog({
          text: "Presentation is not supported yet.",
          highlight: chalk.red("ERROR: ")
        })
        process.exit();
      };
      break;
  }
};
