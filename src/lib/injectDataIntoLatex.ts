import fs from "fs/promises";
import { PromptData } from "../types/promptData.js";
import { formatAndHeader } from "../templates/formatAndHeader.js";
import { articleTemplate } from "../templates/article.js";
import { packages } from "../templates/packages.js";
import { coloredLog } from "../util/coloredLog.js";
import chalk from "chalk";

const handleArticle = async (folderName: string, outputFile: string, fileName: string, matriculationNumber: string, topic: string, userName: string) => {
  const header = formatAndHeader({
    fileName,
    matriculationNumber,
    topic,
    userName,
  });

  coloredLog({
    text: `Writing Header file to ./${folderName}/style/FormatAndHeader.tex`,
    highlight: chalk.yellow("INFO:"),
  })

  await fs.writeFile(`./${folderName}/styles/FormatAndHeader.tex`, header, "utf-8");

  coloredLog({
    text: `Writing Packages file to ./${folderName}/style/Packages.tex`,
    highlight: chalk.yellow("INFO:"),
  })

  await fs.writeFile(`./${folderName}/styles/Packages.tex`, packages, "utf-8");

  coloredLog({
    text: `Writing template file to ./${folderName}/${outputFile}`,
    highlight: chalk.yellow("INFO:"),
  })

  await fs.writeFile(`./${folderName}/${outputFile}`, articleTemplate, "utf-8");

  console.log(chalk.green("Successfully created files."))

  process.exit(0);
}

export const injectDataIntoLatex = async ({
  fileName,
  matriculationNumber,
  templateType,
  topic,
  userName,
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
      await handleArticle(folderName, outputFile, fileName, matriculationNumber, topic, userName)
      break;
    case "presentation":
      () => {};
      break;
  }
};
