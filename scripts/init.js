/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Updated by Guillaume L. <glarivie@student.42.fr>
 */

'use strict'

const fs = require('fs-extra')
const { join, resolve } = require('path')
const chalk = require('chalk')
const spawn = require('react-dev-utils/crossSpawn')
const _ = require('lodash')

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

const isReactInstalled = ({ dependencies }) =>
  !_.isUndefined(dependencies['react']) && !_.isUndefined(dependencies['react-dom'])

module.exports = (appPath, appName, verbose, originalDirectory, template) => {
  const { name } = require(join(__dirname, '..', 'package.json'))
  const ownPath = join(appPath, 'node_modules', name)
  const useYarn = fs.existsSync(join(appPath, 'yarn.lock'))
  const readme = join(appPath, 'README.md')
  const templatePath = template ? resolve(originalDirectory, template) : join(ownPath, 'template')
  const templateDependenciesPath = join(appPath, '.template.dependencies.json')

  const appPackage = {
    ...require(join(appPath, 'package.json')),
    // Setup the script rules
    scripts: {
      start:  'redux-scripts start',
      build:  'redux-scripts build',
      test:   'redux-scripts test --env=jsdom',
      eject:  'redux-scripts eject',
    },
  }

  // Write package.json
  fs.writeFileSync(join(appPath, 'package.json'), JSON.stringify(appPackage, null, 2))

  // Delete existing Readme
  if (fs.existsSync(readme)) fs.unlinkSync(readme)

  // Copy the files for the user
  if (fs.existsSync(templatePath))
    fs.copySync(templatePath, appPath)
  else
    return console.error(`Could not locate supplied template: ${chalk.green(templatePath)}`)

  // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
  // See: https://github.com/npm/npm/issues/1862
  fs.move(join(appPath, 'gitignore'), join(appPath, '.gitignore'), [], err => {
    if (err) { // Append if there's already a `.gitignore` file there
      if (err.code === 'EEXIST') {
        const data = fs.readFileSync(join(appPath, 'gitignore'))

        fs.appendFileSync(join(appPath, '.gitignore'), data)
        fs.unlinkSync(join(appPath, 'gitignore'))
      } else {
        throw err
      }
    }
  })

  const command = useYarn ? 'yarn' : 'npm'
  const args = (useYarn ? ['add'] : ['install', '--save', verbose && '--verbose'])
    .concat(
      'react',
      'react-dom',
      'lodash',
      'react-redux',
      'react-router-dom',
      'react-router-redux@next',
      'history',
      'redux',
      'classnames',
    )
  const devArgs = (useYarn ? ['add', '--dev'] : ['install', '--save-dev', verbose && '--verbose'])
    .concat(
      'babel-eslint',
      'eslint',
      'eslint-config-react-app',
      'eslint-plugin-flowtype',
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'prop-types',
    )

  // Install additional template dependencies, if present
  if (fs.existsSync(templateDependenciesPath)) {
    const { dependencies, devDependencies } = require(templateDependenciesPath)

    args = args.concat(Object.keys(dependencies).map(key => `${key}@${dependencies[key]}`))
    devArgs = devArgs.concat(Object.keys(devDependencies).map(key => `${key}@${devDependencies[key]}`))

    fs.unlinkSync(templateDependenciesPath)
  }

  // Install react and react-dom for backward compatibility with old CRA cli
  // which doesn't install react and react-dom along with redux-scripts
  // or template is presetend (via --internal-testing-template)
  console.log(`Installing dependencies using ${command}...`)

  const dependenciesInstall = spawn.sync(command, args, { stdio: 'inherit' })
  const devDependenciesInstall = spawn.sync(command, devArgs, { stdio: 'inherit' })

  if (dependenciesInstall.status !== 0)
    return console.error(`"${command} ${args.join(' ')}" failed`)

  if (devDependenciesInstall.status !== 0)
    return console.error(`"${command} ${devArgs.join(' ')}" failed`)

  // Display the most elegant way to cd.
  // This needs to handle an undefined originalDirectory for
  // backward compatibility with old global-cli's.
  const cdpath = originalDirectory && join(originalDirectory, appName) === appPath ? appName : appPath

  console.log([
    `Success! Created ${appName} at ${appPath}`,
    'Inside that directory, you can run several commands:',
    '',
    chalk.cyan(`  ${command} start`),
    '    Starts the development server.',
    '',
    chalk.cyan(`  ${command} ${useYarn ? '' : 'run '}build`),
    '    Bundles the app into static files for production.',
    '',
    chalk.cyan(`  ${command} test`),
    '    Starts the test runner.',
    '',
    chalk.cyan(`  ${command} ${useYarn ? '' : 'run '}eject`),
    '    Removes this tool and copies build dependencies, configuration files',
    '    and scripts into the app directory. If you do this, you can’t go back!',
    '',
    'We suggest that you begin by typing:',
    '',
    `${chalk.cyan('  cd')} ${cdpath}`,
    `  ${chalk.cyan(`${command} start`)}`,
    '',
    'Happy hacking!',
  ].join('\n'))
}
