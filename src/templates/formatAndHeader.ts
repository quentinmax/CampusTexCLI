import { PromptData } from "../types/promptData.js";

export const formatAndHeader = ({
  matriculationNumber,
  topic,
  userName,
  useBibTex

}: Omit<PromptData, "templateType">) => {
  return `
% LaTeX Template für Abgaben an der Universität Stuttgart
% Autor: Sandro Speth
% Bei Fragen: Sandro.Speth@iste.uni-stuttgart.de
%-----------------------------------------------------------
% Modul beinhaltet Befehl fuer Aufgabennummerierung,
% sowie die Header Informationen.

% Überschreibt enumerate Befehl, sodass 1. Ebene Items mit
\\renewcommand{\\theenumi}{(\\alph{enumi})}
% (a), (b), etc. nummeriert werden.
\\renewcommand{\\labelenumi}{\\text{\\theenumi}}

% Counter für das Blatt und die Aufgabennummer.
% Ersetze die Nummer des Übungsblattes und die Nummer der Aufgabe
% den Anforderungen entsprechend.
% Gesetz werden die counter in der hauptdatei, damit siese hier nicht jedes mal verändert werden muss
% Beachte:
% \\setcounter{countername}{number}: Legt den Wert des Counters fest
% \\stepcounter{countername}: Erhöht den Wert des Counters um 1.
\\newcounter{sheetnr}
\\newcounter{exnum}

% Befehl für die Aufgabentitel
\\newcommand{\\exercise}[1]{\\section*{Aufgabe \\theexnum\\stepcounter{exnum}: #1}} % Befehl für Aufgabentitel

% Formatierung der Kopfzeile
% \\ohead: Setzt rechten Teil der Kopfzeile mit
% Namen und Matrikelnummern aller Bearbeiter
\\ohead{${userName} ${matriculationNumber && ("(" + matriculationNumber + ")")}}
% \\chead{} kann mittleren Kopfzeilen Teil sezten
% \\ihead: Setzt linken Teil der Kopfzeile mit
% Modulnamen, Semester und Übungsblattnummer
\\ihead{${topic}}
`;
};
