![campus-tex-cli-logo](https://raw.githubusercontent.com/quentinmax/CampusTexCLI/51f5b51c627dfea8ec6c1c2ac0fb1f32abf0fd36/campus-tex-cli-logo.png)

# CampusTex

CampusTex is a command line interface to quickly generate latex files for presentations or task assignments, using the [unofficial LaTeX template by the University of Stuttgart](https://github.com/spethso/Abgabentemplate) made by Sandro Speth.

> For more information about the LaTeX template, head to its [GitHub](https://github.com/spethso/Abgabentemplate).

> Should you face any errors or problems, do not hasitate to contact me [via mail](mailto:quentinhoehne.dev@gmail.com), create a [github issue](https://github.com/quentinmax/CampusTexCLI/issues) or even better, contribute :).

#### Why use it?
This CLI will help you to finish your assignments more quickly. Have you ever felt not being motivated enough to use LaTeX because of all the setup and imports you have to do just to get the styling the way you want? 
Not anymore. Just enter a little information about your work and you will be set up.

## Features
- Generate template files for articles
- Opt in and out of BibTex usage
- Inject name and matriculation number onto the sheet
- Uses the unofficial LaTeX template by the University of Stuttgart
- Most important packages are already imported

> **Presentation template is under construction**, but will be available soon

## Installation

Install `campus-tex-cli` globally using npm:
```
npm install -g campus-tex-cli
```
or run 
```
npx run campus-tex-cli
```

## Usage

Execute the CLI in the directory you want to the output to be. The CLI will automatically generate a sub directory containing every necessary file. 
From there, just input the information the CLI needs and you will be set up in a few seconds.
