/* eslint-env node */
'use strict';

module.exports = {
  name: 'ilios',

  rules: {
  
  },

  configurations: {
    recommended: {
      extends: 'octane',
      rules: {
        'require-valid-alt-text': true,
        'inline-link-to': true,
        'deprecated-each-syntax': true,
        'deprecated-inline-view-helper': true,
        'eol-last': 'always',
        'link-href-attributes': true,
        'no-bare-strings': true,
        'no-extra-mut-helper-argument': true,
        'no-implicit-this': true,
        'no-trailing-spaces': true,
        quotes: 'double',
      }
    }
  }
};
