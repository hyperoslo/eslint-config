# eslint-config-hyperoslo

[![Version](https://img.shields.io/npm/v/eslint-config-hyperoslo.svg?style=flat)](https://www.npmjs.org/package/eslint-config-hyperoslo)

Hyper's ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Licensed under the **MIT** license, see LICENSE for more information.

## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev eslint-config-hyperoslo eslint-config-airbnb eslint
```

### ES6

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint
```

Tweak `.eslintrc`:

```json
{
  "extends": "hyperoslo"
}
```

### ES5 (legacy)

Tweak `.eslintrc`:

```json
{
  "extends": "hyperoslo/legacy",
}
```

### React

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint eslint-plugin-react
```

Tweak `.eslintrc`:

```json
{
  "extends": "hyperoslo/react"
}
```

## Credits

Hyper made this. We're a digital communications agency with a passion for good code,
and if you're using this configuration we probably want to hire you.
