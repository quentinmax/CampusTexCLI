import { TemplateType } from "./templateType.js";

export type PromptData = {
  templateType: TemplateType;
  userName: string;
  matriculationNumber: string;
  fileName: string;
  topic: string;
  useBibTex: boolean;
  outputDirectory?: string;
};
