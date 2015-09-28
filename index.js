module.exports = {
  extends: [
    'eslint-config-airbnb/base',
  ],
  rules: {
    // Allow anonymous functions
    'func-names': [0],

    // Enforce curly spacing in object literals and destructuring
    'object-curly-spacing': [2, 'always'],
  },
};
