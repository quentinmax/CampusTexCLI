#!/usr/bin/env node

import { Command } from "commander";
import { handleProgram } from "./handleProgram.js";

export const program = new Command();

program
  .version("1.1.1")
  .name("campus-tex-cli")
  .description(
    "A CLI to quickly generate latex files for presentations or task assignments, using the unofficial template from University of Stuttgart."
  );

program
  .option("-n, --name <string>", "file name")
  .option("-t, --template <string>", "path to template - e.g './template.json'")
  .option(
    "-o, --output <string>",
    "output directory - e.g 'C:/Users/JohnDoe/Documents/Uni/DSA'"
  )
  .action(() => handleProgram(program));

program.parse(process.argv);
