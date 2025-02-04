module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  plugins: ['react', 'import-helpers', 'react-hooks', 'perfectionist', '@tanstack/query', 'jest-formatting', 'jest', 'testing-library'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  rules: {
    'no-console': 'warn',
    'linebreak-style': 'off',

    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    'react/jsx-newline': 'warn',
    'react/react-in-jsx-scope': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'tailwindcss/no-custom-classname': 'off',

    'jest/valid-title': 'error',
    'jest/valid-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-identical-title': 'error',
    'jest-formatting/padding-around-all': 2,
    'jest/require-top-level-describe': 'error',
    'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],

    'testing-library/prefer-user-event': 'warn',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/await-async-queries': 'warn',
    'testing-library/prefer-screen-queries': 'warn',
    'testing-library/prefer-find-by': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-await-sync-events': 'error',

    'padding-line-between-statements': [
      'error',
      { prev: '*', next: 'return', blankLine: 'always' },
      { prev: '*', next: 'function', blankLine: 'always' },
      { prev: '*', next: 'if', blankLine: 'always' },
      { next: '*', blankLine: 'always', prev: 'multiline-const' },
      { next: '*', blankLine: 'always', prev: 'multiline-let' },
      { next: '*', prev: 'block', blankLine: 'always' },
      { prev: '*', next: 'block', blankLine: 'always' },
      { next: '*', prev: 'block-like', blankLine: 'always' },
      { prev: '*', next: 'block-like', blankLine: 'always' },
      { next: '*', prev: 'expression', blankLine: 'always' },
    ],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        arrowParens: 'avoid',
        bracketSpacing: true,
        trailingComma: 'all',
        bracketSameLine: true,
      },
    ],

    'perfectionist/sort-maps': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'perfectionist/sort-classes': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-object-types': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-array-includes': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
        'partition-by-new-line': true,
      },
    ],
    'perfectionist/sort-object-types': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
        'partition-by-new-line': true,
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
        'partition-by-comment': true,
        'partition-by-new-line': true,
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
        'internal-pattern': ['@*/**', '@*'],
        groups: [
          ['type', 'builtin', 'external', 'unknown'],
          ['internal-type', 'internal'],
          [
            'parent-type',
            'sibling-type',
            'index-type',
            'parent',
            'sibling',
            'index',
            'object',
          ],
        ],
      },
    ],
  }
}
