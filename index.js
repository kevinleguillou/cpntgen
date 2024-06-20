#! /usr/bin/env node

import path from 'path'
import { Command } from 'commander'
import { buildComponent } from './build.js'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const program = new Command();

program
  .name('cpntgen')
  .description('Generates React/TSX components using templates')
  .version('0.2.0');

program
  .argument('<string>', 'name of component to create (with dashes)')
  .option('--template <string>', 'override the default templates with your own config')
  .action((componentName, options) => {
    const cwd = process.cwd()
    const splitByFolders = cwd.split('/')
    const destinationFolder = splitByFolders[splitByFolders.length - 1]
    const templatesFolder = options.template ?? (__dirname + "default-templates/")

    buildComponent(
      componentName,
      destinationFolder,
      templatesFolder
    )
  });

program.parse();