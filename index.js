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
  .option('--preset <string>', 'use a preset template (react, react-native, solidjs)')
  .action((componentName, options) => {
    const cwd = process.cwd()
    const splitByFolders = cwd.split('/')
    const destinationFolder = splitByFolders[splitByFolders.length - 1]
    let templatesFolder = ""
    const preset = options.preset
    if(preset){
      switch(preset){
        case 'react':
          templatesFolder = __dirname + "templates/react/"
          break
        case 'react-native':
          templatesFolder = __dirname + "templates/react-native/"
          break
        case 'solidjs':
          templatesFolder = __dirname + "templates/solidjs/"
          break
      }
    }
    if(options.template){
      templatesFolder = options.template
    }
    if(options.template === undefined && options.preset === undefined){
      templatesFolder = __dirname + "templates/react/"
    }

    buildComponent(
      componentName,
      destinationFolder,
      templatesFolder
    )
  });

program.parse();