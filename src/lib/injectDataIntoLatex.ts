import fs from "fs";
import { PromptData } from "../types/promptData.js";
import { formatAndHeader } from "../templates/formatAndHeader.js";
import { articleTemplate } from "../templates/article.js";

export const injectDataIntoLatex = ({
  fileName,
  matriculationNumber,
  templateType,
  topic,
  userName,
  createFolder,
}: PromptData) => {
  const outputFile = fileName.includes(".tex") ? fileName : `${fileName}.tex`;

  if (createFolder) {
    try {
      if (!fs.existsSync("test")) {
        fs.mkdirSync("test");
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }

  switch (templateType) {
    case "article":
      const header = formatAndHeader({
        fileName,
        matriculationNumber,
        topic,
        userName,
        createFolder,
      });
      const article = articleTemplate;
      fs.writeFileSync(`./test/header-${outputFile}`, header, "utf-8");
      fs.writeFileSync(`./test/article-${outputFile}`, article, "utf-8");
      console.log("Wrote file to: ", outputFile);
      process.exit();
      break;
    case "presentation":
      () => {};
      break;
  }
};
