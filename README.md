# cpntgen

Generates a component with all the files you want.

```
$ cpntgen component-name

component-name built with files :
 ├ component-name/component-name.tsx
 ├ component-name/component-name.module.scss
 └ component-name/component-name.interfaces.ts
```

## Usage

Install globally with :

```
yarn global add git@github.com:kevinleguillou/cpntgen.git
```

## Presets

The following presets are available : 

```
$ cpntgen component-name --preset react
$ cpntgen component-name --preset react-native
$ cpntgen component-name --preset solidjs
```

## Custom Presets

You can override the files produced by adding a `--template <template-folder>` option.

The template folder must follow the same organisation as the example in `templates` : 

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

See `templates/` for examples that builds kebab-case components and path imports with aliases (like `@components/`).

### Simplify the usage of a custom config

Once you're happy with your custom config, replace the whole command with a command line alias so you don't have to type it each time :

In your `~/.zshrc` file or equivalent :

```
alias generate="cpntgen --template my-template-folder/"

$ generate my-component
```