module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  plugins: ['react', 'import-helpers', 'react-hooks', 'perfectionist', '@tanstack/query', 'jest-formatting', 'jest'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended'
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  rules: {
    'no-console': 'warn',
    'linebreak-style': 'off',

    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-empty-function': 'off',

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

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],

    'perfectionist/sort-object-types': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-array-includes': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-classes': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        'partition-by-new-line': true
      }
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-maps': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        groups: [
          ['type', 'builtin', 'external', 'unknown'],
          ['internal-type', 'internal'],
          ['parent-type', 'sibling-type', 'index-type', 'parent', 'sibling', 'index', 'object']
        ]
      }
    ],
    'perfectionist/sort-object-types': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        'partition-by-new-line': true
      }
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        'partition-by-comment': true,
        'partition-by-new-line': true
      }
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ]
  }
}
