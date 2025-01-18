import eslintJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import json from "@eslint/json";
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import eslintTs from 'typescript-eslint';
import globals from 'globals';

export default [
  ...eslintTs.configs.recommended,
  // Javascript & Typescript
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys': sortKeys
    },
    languageOptions: {
      globals: { ...globals.node }
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
    files: ['**/*.{js,ts}'],
    plugins: { '@stylistic': stylistic },
    rules: {
      ...stylistic.configs['all-flat'].rules,
      '@stylistic/multiline-ternary': ['error', "consistent"],
      '@stylistic/array-element-newline': ['error', "consistent"],
      '@stylistic/function-call-argument-newline': ["error", "consistent"],
      '@stylistic/padded-blocks': ["error", "never"],
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
  // lint JSON files
  {
    plugins: {
      json,
    },
  },
  {
    files: ["**/*.json"],
    language: "json/json",
    rules: {
      "json/no-duplicate-keys": "error",
    },
  }
];
