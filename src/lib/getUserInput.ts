import inquirer from "inquirer";
import { askTemplateType } from "./askTemplateType.js";
import { PromptData } from "../types/promptData.js";

export const getUserInput = async () => {
  const data: PromptData = {
    fileName: "",
    matriculationNumber: "",
    templateType: "article",
    topic: "",
    userName: "",
    createFolder: true,
  };

  //Choices: Presentation, Article
  data.templateType = await askTemplateType();

  //File name
  const answer = await inquirer.prompt({
    name: "file_name",
    type: "input",
    message: "Enter file name: ",
    default() {
      return "cli-generated.tex";
    },
  });

  data.fileName = answer.file_name;

  const folderPrompt = await inquirer.prompt({
    name: "create_folder",
    type: "checkbox",
    message: "Create folder?",
    default() {
      return true;
    },
    choices: ["Yes", "No"],
  });

  data.createFolder = folderPrompt.create_folder;

  //Name of topic
  const topicPrompt = await inquirer.prompt({
    name: "topic",
    type: "input",
    message: "What is your topic?",
    required: true,
  });

  data.topic = topicPrompt.topic;

  //User name, Matriculation number
  const usernamePrompt = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "What is your name?",
    required: true,
    default() {
      return "";
    },
  });

  data.userName = usernamePrompt.user_name;

  const matriculationNumberPrompt = await inquirer.prompt({
    name: "matriculation_number",
    type: "number",
    message: "What is your matriculation number? (Can be left empty)",
  });

  data.matriculationNumber = matriculationNumberPrompt.matriculation_number;

  return data;
};
