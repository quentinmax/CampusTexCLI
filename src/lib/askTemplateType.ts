import inquirer from "inquirer";

export const askTemplateType = async () => {
  const choicesPrompt = await inquirer.prompt({
    name: "template_type",
    type: "list",
    message: "What template would you like to use?",
    choices: ["Presentation", "Article"],
    default() {
      return "Article";
    },
  });

  return handleAnswer(choicesPrompt.template_type);
};

const handleAnswer = (choice: string) => {
  if (choice === "Presentation") {
    return "presentation";
  } else {
    return "article";
  }
};
