# cpntgen

Generates a component with all the files used in React projects, and adds the proper imports at the top of the TSX file.

All the files are exported from a main `index.ts`.

## Usage

Install globally with :

```
yarn global add git@github.com:kevinleguillou/cpntgen.git
```

In your `component` or `container` folder, run :

```bash
cpntgen component-name
```

Will output :

```
component-name/
  index.ts
  component-name.tsx
  component-name.interfaces.ts
  component-name.scss
```

## Custom Templates

You can override the files produced by adding a `--template <template-folder>` option.

The template folder must follow the same organisation as the example in `default-templates` : 

### config.json

A config file listing each template file you want in your component folder, and its final file name.

Adding a `filenameCase` (`<KebabCase, CapitalCamelCase, CamelCase>`) option will change the style of the folder and filenames produced.

`{component}` will be replaced by the component name you entered in the command line, using the style in `filenameCase`.

```json
{
  "filenameCase": "KebabCase",
  "templates" : [
    {
      "template": "component.tsx",
      "filename": "{component}.tsx"
    }
  ]
}
```

These settings produce : 

```
$ cpntgen component-name --template my-template-folder/

component-name built with files :
 └ component-name/component-name.tsx
```

### Template files

Each file you list in the `template` key in `config.json` must exist in your template folder, and contain the endfile you want (for instance, a boilerplate TSX component, starter CSS Module, etc.).

These templates can use the following Mustache variables :

- `componentNameCamelCase`
- `componentNameCapitalizedCamelCase`
- `componentNameKebabCase`
- `workingDirectory` : the directory where you are running the command line

See `default-templates/` for a working example that builds kebab-case components and absolute path imports.

### Simplify the usage of a custom config

Once you're happy with your custom config, replace the whole command with a command line alias so you don't have to type it each time :

In your `~/.bash_profile` file or equivalent :

```
alias tiltedgen="tiltedgen --template my-template-folder/"
```