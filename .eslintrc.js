module.exports = {
  root: true,
  env: {
    browser: true,
    node: false
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended', // /base, /essential, /strongly-recommended, /recommended
    '@vue/prettier'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      // customizing prettier rules (not many of them are customizable)
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2
      }
    ],
    'no-console': 'off',
    'no-undef': 'off',
    'vue/no-v-html': 'off'
  }
}
