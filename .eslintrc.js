module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    'vue/max-len': [
      'warn',
      {
        code: 120,
        template: 120,
        tabWidth: 4,
        comments: 120,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
      },
    ],
    'vue/multi-word-component-names': ['off'],
    // 'vue/singleline-html-element-content-newline': ['off'],
    'vue/no-setup-props-destructure': ['off'],  
    'vue/html-self-closing': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'tailwindcss/enforces-negative-arbitrary-values': ['off'],
  },
  // tailwindConfig: './tailwind.config.js',
}
