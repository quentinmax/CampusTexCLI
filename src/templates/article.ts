import { PromptData } from "../types/promptData.js";
import { TemplateType } from "../types/templateType.js";

export const articleTemplate = (useBibTex: boolean) => `
% LaTeX Template für Abgaben an der Universität Stuttgart
% Autor: Sandro Speth
% Bei Fragen: Sandro.Speth@iste.uni-stuttgart.de
%-----------------------------------------------------------
% Hauptmodul des Templates: Hier können andere Dateien eingebunden werden
% oder Inhalte direkt rein geschrieben werden.
% Kompiliere dieses Modul um eine PDF zu erzeugen.

% Dokumentenart. Ersetze 12pt, falls die Schriftgröße anzupassen ist.
\\documentclass[12pt]{scrartcl}
% Einbinden der Pakete, des Headers und der Formatierung.
% Mit den \\include und \\input Befehlen können Dateien eingebunden werden:
% \\include: Fügt einen Seitenumbruch nach dem Text ein
% \\input: Fügt KEINEN Seitenumbruch nach dem Text ein
\\input{styles/Packages.tex}
\\input{styles/FormatAndHeader.tex}
\\graphicspath{ {./} }
% Counter für das Blatt und die Aufgabennummer.
% Ersetze die Nummer des Übungsblattes und die Nummer der Aufgabe
% den Anforderungen entsprechend.
% Definiert werden die Counter in FormatAndHeader.tex
% Beachte:
% \\setcounter{countername}{number}: Legt den Wert des Counters fest
% \\stepcounter{countername}: Erhöht den Wert des Counters um 1.
\\setcounter{sheetnr}{1} % Nummer des Übungsblattes
\\setcounter{exnum}{1} % Nummer der Aufgabe

% Beginn des eigentlichen Dokuments
\\begin{document}
% Nutze den \\exercise{Aufgabenname} Befehl, um eine neue Aufgabe zu beginnen.
% Möchtest du eine Aufgabe in der Nummerierung überspringen, schreibe vor der Aufgabe: \\stepcounter{exnum}
% Möchtest du die Nummer einer Aufgabe auf eine beliebige Zahl x setzen, schreibe vor der Aufgabe: \\setcounter{exnum}{x}

${useBibTex ? `
\\bibliographystyle{plain}
\\bibliography{literature}
` : ``}

% Ende des Dokuments
\\end{document}
`;

