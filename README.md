![campus-tex-cli-logo](https://raw.githubusercontent.com/quentinmax/CampusTexCLI/51f5b51c627dfea8ec6c1c2ac0fb1f32abf0fd36/campus-tex-cli-logo.png)

# CampusTex

CampusTex is a command line interface to quickly generate latex files for presentations or task assignments, using the [unofficial LaTeX template by the University of Stuttgart](https://github.com/spethso/Abgabentemplate) made by Sandro Speth.

> For more information about the LaTeX template, head to its [GitHub](https://github.com/spethso/Abgabentemplate).

> Should you face any errors or problems, do not hasitate to contact me [via mail](mailto:quentinhoehne.dev@gmail.com), create a [github issue](https://github.com/quentinmax/CampusTexCLI/issues) or even better, contribute :).

#### Why use it?

This CLI will help you to finish your assignments more quickly. Have you ever felt not being motivated enough to use LaTeX because of all the setup and imports you have to do just to get the styling the way you want?
Not anymore. Just enter a little information about your work and you will be set up.

## Features

- **NEW:** Custom templates to autofill required data
- Generate template files for articles
- Opt in and out of BibTex usage
- Inject name and matriculation number onto the sheet
- Uses the unofficial LaTeX template by the University of Stuttgart
- Most important packages are already imported

> **Presentation template is under construction**, but will be available soon

## Installation

Install `campus-tex-cli` globally using npm:

```
npm install -g campus-tex-cli@latest
```

or run

```
npx run campus-tex-cli@latest
```

## Usage

Execute the CLI in the directory you want to the output to be. The CLI will automatically generate a sub directory containing every necessary file.
From there, just input the information the CLI needs and you will be set up in a few seconds.

You can also pass a `-o` or `--output` flag, pointing towards a directory where you want the generated files to go.

```
npx run campus-tex-cli -o ./path/to/directory
```

### Custom Autofill Templates

You can also create custom autofill JSON templates, in order to get started even quicker!

Such a template is written in JSON and might look like this:

```json
{
  "templateName": "DSA",
  "matriculationNumber": "123456", //Make sure its a string!
  "templateType": "article",
  "topic": "Data Structures and Algorithms",
  "userName": "John Doe",
  "useBibTex": false,
  "fileName": "dsa_assignment.tex",

  "outputDirectory": "C:/Users/JohnDoe/Documents/Uni/DSA" //Optional
}
```

These are all possible and required fields you will need to pass, in order to use a template.

Optionally, you can also specify an output directory for a template. This is especially helpful if you
have different templates for different subjects where each subject has its own folder on your system.

#### Usage

Pass a `-t` or `--template` flag provided with a path pointing towards your JSON template file.

```
npx run campus-tex-cli -t ./path/to/template.json
```

### Tips and Tricks

1. Use templates. If your going to use this cli rather often than it can get a bit frustrating always having to type out all inputs again. Spend 30 seconds and make a template to improve this.
   <br>

2. Having an assignment with multiple people and therefore having to enter multiple names with their corresponding matriculation number?
   If your using the cli inputs fields themselves, leave the matriculation number field empty and put everything in the name field.

    <br>
    If your using a template file, leave a whitespace in the matriculation number field:

   ```json
   {
     "templateName": "DSA",
     "matriculationNumber": " ", //leave a whitespace
     "templateType": "article",
     "topic": "Data Structures and Algorithms",
     "userName": "John Doe (123456), Jane Doe (654321)", //put everything here
     "useBibTex": false,
     "fileName": "dsa_assignment.tex"
   }
   ```
