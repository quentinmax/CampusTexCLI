import figlet from "figlet";
import { cristal } from "gradient-string";
import { sleep } from "./util/sleep.js";
import inquirer from "inquirer";
import { askTemplateType } from "./lib/askTemplateType.js";
import { TemplateType } from "./types/templateType.js";
import { PromptData } from "./types/promptData.js";
import { getUserInput } from "./lib/getUserInput.js";
import { injectDataIntoLatex } from "./lib/injectDataIntoLatex.js";

export const handleProgram = async () => {
  //Welcome user
  console.clear();
  const msg = "CampusTex";
  figlet(msg, (err, data) => {
    console.log(cristal.multiline(data!));
  });
  await sleep(100);

  const userInputs = await getUserInput();

  injectDataIntoLatex(userInputs);
};
