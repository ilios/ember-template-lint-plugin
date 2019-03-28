# @ilios/ember-template-lint-plugin

Ilios shared [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) plugin

### Installation

```
npm install --save-dev @ilios/ember-template-lint-plugin
```

Then inside add configuration to the `template-lintrc.js`:

```js
module.exports = {
  plugins: ['@ilios/ember-template-lint-plugin'],
  extends: 'ilios:recommended'
};
```
