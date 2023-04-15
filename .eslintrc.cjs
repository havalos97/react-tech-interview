module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [2, {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      pathGroups: [],
      alphabetize: { order: 'asc' }
    }],
    'max-len': [2, 120, 4, { ignoreComments: true, ignoreUrls: true }],
    'max-lines': [2, { max: 500, skipBlankLines: true, skipComments: true }],
    'sort-imports': [2, { ignoreDeclarationSort: true }]
  }
}
