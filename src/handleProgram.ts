import figlet from "figlet";
import { cristal } from "gradient-string";
import { sleep } from "./util/sleep.js";
import { getUserInput } from "./lib/getUserInput.js";
import { injectDataIntoLatex } from "./lib/injectDataIntoLatex.js";
import { Command } from "commander";
import { handleCustomTemplate } from "./lib/handleCustomTemplate.js";

export const handleProgram = async (command: Command) => {
  //Welcome user
  console.clear();
  const msg = "CampusTex";
  figlet(msg, (err, data) => {
    console.log(cristal.multiline(data!));
  });
  await sleep(100);

  const options = command.opts();

  if (options.template) {
    return handleCustomTemplate(options.template);
  }

  //Get user inputs
  const userInputs = await getUserInput();

  if (options.output) {
    userInputs.outputDirectory = options.output;
  }

  //Inject user inputs into latex
  injectDataIntoLatex(userInputs);
};
