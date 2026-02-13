import { defineConfig } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import storybook from 'eslint-plugin-storybook'

export default defineConfig([
  ...nextVitals,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'react/jsx-no-target-blank': 'error',
      'storybook/no-renderer-packages': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx', '**/*.stories.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'storybook-static/**', 'out/**', 'build/**'],
  },
])
