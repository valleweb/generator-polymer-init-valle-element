/* eslint max-len: 0 */
/* eslint quotes: 0 */

'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-vsc-element', () => {

  before(() => {
    const generatorPath = path.join(__dirname, '../generators/app');
    return helpers.run(generatorPath)
                  .withPrompts({
                    elementName: 'vsc-my-custom-element',
                    elementDesc: 'Awesome vsc element',
                    elementGithubRepo: 'vsc-my-custom-element',
                    githubAccount: 'valleweb'
                  });
  });

  //---------------------------

  describe('Files exists', () => {

    //-------------

    it('Should write all files with static name', () => {
      assert.file([
        'test/index.html',
        '.editorconfig',
        '.eslintrc.json',
        '.gitignore',
        '.travis.yml',
        'bower.json',
        'polymer.json',
        'index.html',
        'LICENSE.md',
        'CONTRIBUTING.md',
        'README.md'
      ]);
    });

    //-------------

    it('Should write the element file with a custom name', () => {
      assert.file([
        'test/vsc-my-custom-element_test.html',
        'vsc-my-custom-element.html'
      ]);
    });

  });

  //---------------------------

  describe('Files content', () => {

    //-------------

    it('Should write the README.md file with custom content', () => {

      const file = 'README.md';

      assert.fileContent(file, '# vsc-my-custom-element');
      assert.fileContent(file, '> Awesome vsc element');
      assert.fileContent(file, '[![Travis CI Status](https://travis-ci.org/valleweb/vsc-my-custom-element.svg?branch=master)](https://travis-ci.org/valleweb/vsc-my-custom-element)');
      assert.fileContent(file, '[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/vsc-my-custom-element)');
      assert.fileContent(file, 'bower install vsc-my-custom-element --save');
      assert.fileContent(file, '<link rel="import" href="bower_components/vsc-my-custom-element/vsc-my-custom-element.html">');
      assert.fileContent(file, '<link rel="import" href="vsc-my-custom-element.html">');
      assert.fileContent(file, '<vsc-my-custom-element></vsc-my-custom-element>');
      assert.fileContent(file, '//github.com/valleweb/vsc-my-custom-element/issues/');
      assert.fileContent(file, '//github.com/valleweb/vsc-my-custom-element/blob/master/CONTRIBUTING.md');
      assert.fileContent(file, '//github.com/valleweb/vsc-my-custom-element/releases');

    });

    //-------------

    it('Should write the element file with custom content', () => {

      const file = 'vsc-my-custom-element.html';

      assert.fileContent(file, 'id="vsc-my-custom-element"');
      assert.fileContent(file, "return 'vsc-my-custom-element'");

    });

    //-------------

    it('Should write the test/index.html file with custom content', () => {

      const file = 'test/index.html';

      assert.fileContent(file, "WCT.loadSuites(['vsc-my-custom-element_test.html']);");

    });

    //-------------

    it('Should write the bower.json file with custom content', () => {

      const file = 'bower.json';

      assert.fileContent(file, '"name": "vsc-my-custom-element"');
      assert.fileContent(file, '"main": "vsc-my-custom-element.html"');

    });

    //-------------

    it('Should write the test/vsc-my-custom-element_test.html file with custom content', () => {

      const file = 'test/vsc-my-custom-element_test.html';

      assert.fileContent(file, '<link rel="import" href="../vsc-my-custom-element.html">');
      assert.fileContent(file, "suite('vsc-my-custom-element'");
      assert.fileContent(file, '<vsc-my-custom-element></vsc-my-custom-element>');

    });

    //-------------

    it('Should write the LICENSE.md file with custom content', () => {

      const file = 'LICENSE.md';

      assert.fileContent(file, 'valleweb');

    });

  });

});
