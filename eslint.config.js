import antfu from '@antfu/eslint-config';

export default antfu({
  ignores: [],
  stylistic: false,
  typescript: {
    parserOptions: {
      project: './tsconfig.json',
      projectService: true,
    },
    overrides: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'ts/explicit-function-return-type': 'off',
      'ts/explicit-member-accessibility': ['error'],
      'ts/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],
      'ts/no-floating-promises': ['error'],
      'ts/no-misused-promises': ['error'],
      'ts/no-confusing-void-expression': ['error'],
      'ts/strict-boolean-expressions': 'off',
      'ts/switch-exhaustiveness-check': ['error'],
      'ts/array-type': ['error', { default: 'array-simple' }],
      'ts/no-restricted-types': [
        'error',
        { types: { Omit: 'Use `OmitStrict`.' } },
      ],
      'ts/no-unsafe-argument': 'error',
    },
  },
  rules: {
    'antfu/no-top-level-await': 'off',
    'no-console': 'off',
  },
  react: {
    overrides: {
      'react-refresh/only-export-components': 'off',
    },
  },
  astro: true,
  formatters: true,
});