export const packages = `
% LaTeX Template für Abgaben an der Universität Stuttgart
% Autor: Sandro Speth
% Bei Fragen: Sandro.Speth@iste.uni-stuttgart.de
%-----------------------------------------------------------
% Modul fuer verwendete Pakete.
% Neue Pakete einfach einfuegen mit dem \\usepackage Befehl:
% \\usepackage[options]{packagename}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[ngerman]{babel}
\\usepackage{lmodern}
\\usepackage{graphicx}
\\usepackage[pdftex,hyperref,dvipsnames]{xcolor}
\\usepackage{listings}
\\usepackage[a4paper,lmargin={2cm},rmargin={2cm},tmargin={3.5cm},bmargin = {2.5cm},headheight = {4cm}]{geometry}
\\usepackage{amsmath,amssymb,amstext,amsthm}
\\usepackage[lined,algonl,boxed]{algorithm2e}
% alternative zu algorithm2e:
%\\usepackage[]{algorithm} %counter mit chapter
%\\usepackage{algpseudocode}
\\usepackage{tikz}
\\usepackage{hyperref}
\\usepackage{url}
\\usepackage[inline]{enumitem} % Ermöglicht ändern der enum Item Zahlen
\\usepackage[headsepline]{scrlayer-scrpage} 
\\pagestyle{scrheadings} 
\\usetikzlibrary{automata,positioning}
`
