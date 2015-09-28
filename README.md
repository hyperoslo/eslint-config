# eslint-config-hyperoslo

[![Version](https://img.shields.io/npm/v/eslint-config-hyperoslo.svg?style=flat)](https://www.npmjs.org/package/eslint-config-hyperoslo)

Hyper's ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Licensed under the **MIT** license, see LICENSE for more information.


## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev eslint-config-hyperoslo eslint-config-airbnb babel-eslint
```

### ES6

Tweak `.eslintrc`:

```json
{
  "extends": "hyperoslo"
}
```

### React

In addition to the base dependencies above, install the following:

```shell
npm install --save-dev eslint-plugin-react
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
