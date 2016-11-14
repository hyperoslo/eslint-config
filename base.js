module.exports = {
  rules: {
    // Allow anonymous functions
    'func-names': [0],

    // Enforce indentation of switch/case statements
    // See: https://github.com/airbnb/javascript/issues/470#issuecomment-145066890
    indent: [2, 2, { SwitchCase: 1 }],

    // Enforce curly spacing in object literals and destructuring
    'object-curly-spacing': [2, 'always'],
  },
};
