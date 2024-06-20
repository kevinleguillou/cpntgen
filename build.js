import fs from 'fs'
import chalk from 'chalk'
import mustache from 'mustache'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function toCamelCase(string, capitalize = false){
  let result = ''
  string.split('-').forEach((word, index) => {
    if(index === 0 && !capitalize){
      result += word
    }else{
      result += word[0].toUpperCase() + word.slice(1)
    }
  })
  return result
}

function buildTemplate({ workingDirectory, templatePath, componentName, destinationFolderPath, destinationFile }){
  const templateVars = {
    componentNameCamelCase: toCamelCase(componentName),
    componentNameCapitalizedCamelCase: toCamelCase(componentName, true),
    componentNameKebabCase: componentName,
    workingDirectory: workingDirectory
  }

  const template = fs.readFileSync(templatePath, { encoding: 'utf8' })
  const fileContent = mustache.render(template, templateVars)

  if(!fs.existsSync(destinationFolderPath)) fs.mkdirSync(destinationFolderPath)
  fs.writeFileSync(`${destinationFolderPath}/${destinationFile}`, fileContent)
}

export function buildComponent(componentName, workingDirectory, templatesFolder){
  const configPath = templatesFolder + 'config.json'
  try{
    const config = JSON.parse(fs.readFileSync(configPath, { encoding: 'utf8' }))
    let fileName = componentName
    if(config.filenameCase === "CapitalCamelCase"){
      fileName = toCamelCase(componentName, true)
    }
    if(config.filenameCase === "CamelCase"){
      fileName = toCamelCase(componentName)
    }

    console.log('')
    console.log(
      chalk.greenBright(chalk.bgGreenBright.black(`${fileName}`), `built with files :`)
    )

    config.templates.forEach((entry, index) => {
      buildTemplate({
        workingDirectory: workingDirectory,
        templatePath: templatesFolder + entry.template,
        componentName: componentName,
        destinationFolderPath: fileName,
        destinationFile: entry.filename.replace('{component}', fileName)
      })
      const fileBuilt = `${fileName}/${entry.filename.replace('{component}', fileName)}`
      const listItem = index === config.templates.length - 1 ? '└' : '├'
      console.log(` ${listItem} ${fileBuilt}`)
    })

    console.log('')
  }catch(error){
    console.error(chalk.red.bold(error))
  }
}
