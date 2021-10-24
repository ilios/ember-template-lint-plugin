/* eslint-env node */
'use strict';

module.exports = {
  name: 'ilios',

  rules: {
  
  },

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'inline-link-to': true,
        'eol-last': 'always',
        'no-bare-strings': true,
        quotes: 'double',
      }
    }
  }
};
