module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    files: ['*.ts', '*.tsx'],
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies},
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn', { "allow": ["constructors"] }],
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/comma-dangle': [0],
    '@typescript-eslint/no-use-before-define': [0],
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/naming-convention': [1],
    '@typescript-eslint/no-explicit-any': [1],
    'import/prefer-default-export': 0,
    'comma-dangle': 'off',
    'react/button-has-type': [0],
    'jsx-a11y/alt-text': [1],
    'no-console': [2],
    'react/prop-types': [0],
  },
}
