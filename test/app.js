'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-vsc-element', () => {

  before(() => {
    const generatorPath = path.join(__dirname, '../generators/app');
    return helpers.run(generatorPath)
                  .withPrompts({elementName: 'vsc-my-custom-element'});
  });

  it('Should write all files with static name', () => {
    assert.file([
      'demo/index.html',
      'test/index.html',
      '.editorconfig',
      '.eslintrc.json',
      '.gitignore',
      '.travis.yml',
      'bower.json',
      'polymer.json',
      'wct.conf.json',
      'index.html',
      'CONTRIBUTING.md',
      'README.md'
    ]);
  });

  it('Should write the element file with a custom name', () => {
    assert.file([
      'test/vsc-my-custom-element_test.html',
      'vsc-my-custom-element.html'
    ]);
  });

});
