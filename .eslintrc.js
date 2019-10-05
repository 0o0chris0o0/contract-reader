module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    indent: ['warn', 2],
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'no-console': 'warn',
    'arrow-parens': [1, 'as-needed'],
    'object-curly-newline': [1, { multiline: true }],
    indent: ['warn', 2, { SwitchCase: 1 }],

    'react/prop-types': 'warn',
    'react/jsx-fragments': 'off'
  }
};
