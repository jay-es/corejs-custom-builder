module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': ['error', { allow: ['error'] }]
  },
}
