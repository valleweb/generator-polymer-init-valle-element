/* eslint max-len: 0 */
/* eslint quotes: 0 */

'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-valle-element', () => {

  before(() => {
    const generatorPath = path.join(__dirname, '../generators/app');
    return helpers.run(generatorPath)
      .withPrompts({
        elementName: 'valle-my-custom-element',
        elementDesc: 'Awesome valle element',
        elementGithubRepo: 'valle-my-custom-element',
        githubAccount: 'valleweb'
      });
  });

  //---------------------------

  describe('Files exists', () => {

    //-------------

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
        'index.html',
        'LICENSE.md',
        'CONTRIBUTING.md',
        'README.md'
      ]);
    });

    //-------------

    it('Should write the element file with a custom name', () => {
      assert.file([
        'test/valle-my-custom-element_basic.html',
        'test/valle-my-custom-element_a11y.html',
        'valle-my-custom-element.html'
      ]);
    });

  });

  //---------------------------

  describe('Files content', () => {

    //-------------

    it('Should write the README.md file with custom content', () => {

      const file = 'README.md';

      assert.fileContent(file, '# valle-my-custom-element');
      assert.fileContent(file, '> Awesome valle element');
      assert.fileContent(file, '[![Travis CI Status](https://travis-ci.org/valleweb/valle-my-custom-element.svg?branch=master)](https://travis-ci.org/valleweb/valle-my-custom-element)');
      assert.fileContent(file, '[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-my-custom-element)');
      assert.fileContent(file, 'bower install valle-my-custom-element --save');
      assert.fileContent(file, '<link rel="import" href="bower_components/valle-my-custom-element/valle-my-custom-element.html">');
      assert.fileContent(file, '<link rel="import" href="valle-my-custom-element.html">');
      assert.fileContent(file, '<valle-my-custom-element></valle-my-custom-element>');
      assert.fileContent(file, '//github.com/valleweb/valle-my-custom-element/issues/');
      assert.fileContent(file, '//github.com/valleweb/valle-my-custom-element/blob/master/CONTRIBUTING.md');
      assert.fileContent(file, '//github.com/valleweb/valle-my-custom-element/releases');

    });

    //-------------

    it('Should write the element file with custom content', () => {

      const file = 'valle-my-custom-element.html';

      assert.fileContent(file, 'id="valle-my-custom-element"');
      assert.fileContent(file, "return 'valle-my-custom-element'");

    });

    //-------------

    it('Should write the test/index.html file with custom content', () => {

      const file = 'test/index.html';

      assert.fileContent(file, "WCT.loadSuites(['valle-my-custom-element_basic.html', 'valle-my-custom-element_a11y.html']);");

    });

    //-------------

    it('Should write the bower.json file with custom content', () => {

      const file = 'bower.json';

      assert.fileContent(file, '"name": "valle-my-custom-element"');
      assert.fileContent(file, '"main": "valle-my-custom-element.html"');

    });

    //-------------

    it('Should write the test/valle-my-custom-element_basic.html file with custom content', () => {

      const file = 'test/valle-my-custom-element_basic.html';

      assert.fileContent(file, '<link rel="import" href="../valle-my-custom-element.html">');
      assert.fileContent(file, "suite('valle-my-custom-element'");
      assert.fileContent(file, '<valle-my-custom-element></valle-my-custom-element>');

    });

    //-------------

    it('Should write the LICENSE.md file with custom content', () => {

      const file = 'LICENSE.md';

      assert.fileContent(file, 'valleweb');

    });

  });

});
