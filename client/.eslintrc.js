module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base/legacy',
    'plugin:prettier/recommended',
  ],
  rules: {
    'func-names': 'off',
    'no-new': 'off'
  },
  globals: {
    Vue: false
  }
}
