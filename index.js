const merge = require('merge');
const airbnb = require('eslint-config-airbnb/base');

const hyperoslo = {
  rules: {
    // Allow anonymous functions
    'func-names': [0],
  },
};

module.exports = merge.recursive(airbnb, hyperoslo);
