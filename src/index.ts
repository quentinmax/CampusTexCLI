#!/usr/bin/env node

import { Command } from "commander";
import { handleProgram } from "./handleProgram.js";

export const program = new Command();

program
  .version("0.0.1")
  .name("campusTexCLI")
  .description(
    "A CLI to quickly generate latex files for presentations or task assignments, using the unofficial template from University of Stuttgart."
  );

program.option("-n, --name <string>", "file name").action(handleProgram);

program.parse(process.argv);
