module.exports = {
  parser: ['babel-eslint'],
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      experimentalDecorations: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'eslint.autoFixOnSave': 1
  }
};
