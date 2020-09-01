module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'no-tabs': 0,
    'import/no-unresolved': 0,
    'import/namespace': 0,
    'indent': [
      'error',
      'tab',
      {
        'SwitchCase': 1
      }
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
