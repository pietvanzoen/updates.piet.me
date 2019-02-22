module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', 'nofunc'] // functions are hoisted
  },
  env: {
    browser: true
  }
};
