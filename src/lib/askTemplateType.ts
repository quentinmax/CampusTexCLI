import inquirer from "inquirer";
import { TemplateType } from "../types/templateType.js";
import chalk from "chalk";

export const askTemplateType = async () => {
  console.log(chalk.gray("\nPresentation template will be available soon :)\n"))
  console.log("Continuing with article template...\n")
  return "article" as TemplateType
  // const choicesPrompt = await inquirer.prompt({
  //   name: "template_type",
  //   message: "What template would you like to use?",
  //   type: "list",
  //   choices: ["Article"],
  //   default() {
  //     return "Article";
  //   },
  // });


  // return (choicesPrompt.template_type as String).toLowerCase() as TemplateType;
};
