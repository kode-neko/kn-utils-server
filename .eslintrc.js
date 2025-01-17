import eslintJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import jsonc from 'eslint-plugin-jsonc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import parserJsonc from 'jsonc-eslint-parser';
import eslintTs from 'typescript-eslint';

export default [

  // Json - Jsonc - Json5
  {
    files: ['**/*.{json,jsonc}'],
    languageOptions: { parser: parserJsonc },
    plugins: { jsonc },
    rules: {
      ...jsonc.configs['flat/all'].rules,
      'jsonc/indent': [
        'error',
        2,
        {}
      ]
    }
  },

  // Javascript & Typescript
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys': sortKeys
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...eslintTs.configs.recommended.rules,
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
      'sort-keys': 'error',
      'sort-keys/sort-keys-fix': 'error'
    }
  },

  // Stylistic
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { '@stylistic': stylistic },
    rules: {
      ...stylistic.configs['all-flat'].rules,
      '@stylistic/array-bracket-spacing': ['error', 'always'],
      '@stylistic/array-element-newline': ['error', { minItems: 3 }],
      '@stylistic/comma-spacing': [
        'error', {
          after: true,
          before: false
        }
      ],
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-max-props-per-line': [1, { maximum: 2 }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': [
        'error', {
          max: 1,
          maxBOF: 1
        }
      ],
      '@stylistic/object-curly-newline': ['error', { multiline: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single']
    }
  },
];
