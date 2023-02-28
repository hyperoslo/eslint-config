# @tryhuset/eslint-config

[![Version](https://img.shields.io/npm/v/@tryhuset/eslint-config.svg?style=flat)](https://www.npmjs.org/package/@tryhuset/eslint-config)

Hyper's ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Licensed under the **MIT** license, see LICENSE for more information.

## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev eslint @tryhuset/eslint-config eslint-config-airbnb
```

### ES6

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint eslint-plugin-import
```

Tweak `.eslintrc`:

```json
{
  "extends": "@tryhuset/eslint-config"
}
```

### React

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

Tweak `.eslintrc`:

```json
{
  "extends": "@tryhuset/eslint-config/react"
}
```

## Credits

Hyper made this. We're a digital communications agency with a passion for good code,
and if you're using this configuration we probably want to hire you.
