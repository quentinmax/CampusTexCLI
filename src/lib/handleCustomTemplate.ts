import { existsSync, readFileSync } from "fs";
import path from "path";
import { coloredLog } from "../util/coloredLog.js";
import chalk from "chalk";
import { TemplateType } from "../types/templateType.js";
import { injectDataIntoLatex } from "./injectDataIntoLatex.js";
import { PromptData } from "../types/promptData.js";

export const handleCustomTemplate = async (_templatePath: string) => {
  console.log(
    chalk.bold("Creating LaTeX structure, using a custom template...\n")
  );

  const templatePath = path.resolve(_templatePath);

  //Check if path exists
  if (!existsSync(templatePath)) {
    coloredLog({
      text: `Template path ${templatePath} does not exist.`,
      highlight: chalk.red("ERROR:"),
    });
    process.exit(1);
  }

  coloredLog({
    text: `Found ${templatePath}...`,
    highlight: chalk.yellow("INFO:"),
  });

  //Parse json file
  const fileContents = readFileSync(templatePath, "utf8");
  const template = JSON.parse(fileContents);

  console.log(template);

  //Check if template has all required fields
  const requiredFields = [
    "templateName",
    "fileName",
    "matriculationNumber",
    "templateType",
    "topic",
    "userName",
    "useBibTex",
  ];
  const missingFields = requiredFields.filter(
    (field) => !template[field]?.toString()
  );
  if (missingFields.length > 0) {
    coloredLog({
      text: `Template ${templatePath} is missing the following fields: ${missingFields.join(
        ", "
      )}`,
      highlight: chalk.red("ERROR:"),
    });
    process.exit(1);
  }
  coloredLog({
    text: `Template ${templatePath} has all required fields.`,
    highlight: chalk.yellow("INFO:"),
  });

  //Check if template has valid fields
  const validFields = [
    "templateName",
    "fileName",
    "matriculationNumber",
    "templateType",
    "topic",
    "userName",
    "useBibTex",
    "outputDirectory",
  ];
  const invalidFields = Object.keys(template).filter(
    (field) => !validFields.includes(field)
  );
  if (invalidFields.length > 0) {
    coloredLog({
      text: `Template ${
        template.templateName
      } has the following invalid fields: ${invalidFields.join(", ")}`,
      highlight: chalk.red("ERROR:"),
    });
    process.exit(1);
  }

  //Check if template has valid templateType
  const validTemplateTypes = ["article", "presentation"] as TemplateType[];
  if (!validTemplateTypes.includes(template.templateType)) {
    coloredLog({
      text: `Template ${template.templateName} has an invalid templateType: ${template.templateType}`,
      highlight: chalk.red("ERROR:"),
    });
    process.exit(1);
  }

  //Check if template has valid useBibTex
  if (typeof template.useBibTex !== "boolean") {
    coloredLog({
      text: `Template ${template.templateName} has an invalid useBibTex: ${template.useBibTex}`,
      highlight: chalk.red("ERROR:"),
    });
    process.exit(1);
  }

  coloredLog({
    text: `Template ${template.templateName} has all valid fields.`,
    highlight: chalk.yellow("INFO:"),
  });

  console.log(
    chalk.green(`Successfully parsed template named ${template?.templateName}.`)
  );

  injectDataIntoLatex(template as PromptData);
};
