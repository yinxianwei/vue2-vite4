module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  ignorePatterns: ['node_modules'],
  rules: {
    'space-before-function-paren': 'off'
  }
}
