/* eslint prefer-arrow-callback: 0 */

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = Generator.extend({

  //---------------------------

  prompting: function () {

    // Welcome log
    this.log(
      yosay(`Welcome to the ${chalk.red('vsc-element')} generator!`)
    );

    // Questions
    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'What is the name of the element?',
        default: 'vsc-element'
      },
      {
        type: 'input',
        name: 'elementDesc',
        message: 'What is the description of the element?',
        default: 'Awesome vsc element'
      },
      {
        type: 'input',
        name: 'elementGithubRepo',
        message: 'What is the name of the element repository?',
        default: 'vsc-element'
      },
      {
        type: 'input',
        name: 'githubAccount',
        message: 'What is your github username/organization?',
        default: 'valleweb'
      }
    ];

    // Final prompt
    const finalPrompt = this.prompt(prompts).then(function (props) {
      this.props = props; // To access props later use this.props.someAnswer;
    }.bind(this));

    return finalPrompt;
  },

  //---------------------------

  writing: function () {

    // Copy all files (except prefixed with _)
    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(''),
      this.props
    );

    // Copy main _vsc-element file
    this.fs.copyTpl(
      this.templatePath('_vsc-element.html'),
      this.destinationPath(`${this.props.elementName}.html`),
      this.props
    );

  },

  //---------------------------

  install: function () {
    this.installDependencies();
  }

});
