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
      yosay(`Welcome to the ${chalk.red('valle-element')} generator!`)
    );

    // Questions
    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'What is the name of the element?',
        default: 'valle-element'
      },
      {
        type: 'input',
        name: 'elementDesc',
        message: 'What is the description of the element?',
        default: 'Awesome valle element'
      },
      {
        type: 'input',
        name: 'elementGithubRepo',
        message: 'What is the name of the element repository?',
        default: 'valle-element'
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

    // Copy all files (except prefixed with valle-)
    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(''),
      this.props
    );

    // Copy main _valle-element file
    this.fs.copyTpl(
      this.templatePath('_valle-element.html'),
      this.destinationPath(`${this.props.elementName}.html`),
      this.props
    );

    // Copy main test/_valle-element_basic file
    this.fs.copyTpl(
      this.templatePath('test/_valle-element_basic.html'),
      this.destinationPath(`test/${this.props.elementName}_basic.html`),
      this.props
    );

    // Copy main test/_valle-element_a11y file
    this.fs.copyTpl(
      this.templatePath('test/_valle-element_a11y.html'),
      this.destinationPath(`test/${this.props.elementName}_a11y.html`),
      this.props
    );


    // Copy hidden files
    this.fs.copyTpl(
      this.templatePath('_editorconfig'),
      this.destinationPath('.editorconfig'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_eslintrc.json'),
      this.destinationPath('.eslintrc.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_travis.yml'),
      this.destinationPath('.travis.yml'),
      this.props
    );
  },

  //---------------------------

  install: function () {
    this.installDependencies();
  }

});
