export type TemplateType = "presentation" | "article";

export type CustomTemplate = {
  templateName: string;
  matriculationNumber: string;
  templateType: TemplateType;
  topic: string;
  userName: string;
  useBibTex: boolean;
  fileName: string;
  outputDirectory?: string;
};
