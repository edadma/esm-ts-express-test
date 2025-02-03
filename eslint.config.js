import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // TypeScript recommended rules
      'prettier/prettier': 'error', // Enforce Prettier formatting
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables prefixed with _
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional function typing
      curly: ['error', 'all'], // Enforce curly braces for all statements
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // JavaScript configuration (minimal)
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      curly: ['error', 'all'], // Enforce curly braces for all statements
    },
  },
]
