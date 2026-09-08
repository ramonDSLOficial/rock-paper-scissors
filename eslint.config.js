import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      "plugin:prettier/recommended",
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": 'error',
      "@typescript-eslint/no-unusd-vars": ["warn", {argsIgnorePattern: "^_"}],
      "@typescript-eslint/no-explicit-any": "warn",
      "react-refresh/only-export-compnents": ["warn", {allowConstantExport: true}],
      "semi": ["error", 'always'],
      "indent": ["error", 4],
      "quotes": ["error", "single"],
      "no-else-return": "error",
      "no-trailing-spaces": "warn",
      "no-console": "warn",
      "eol-last": ["error", "always"],
      "comma-dangle": ["error", "always"],
      "space-before-function-paren": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "eqeqeq": "error", //erro se não usar === ou !==
      "no-dupe-args": 'error',
      "no-dupe-else-if": 'error',
      "no-dupe-keys": 'error',
      "no-duplicate-case": 'error',
      "no-duplicate-imports": 'error',
    }
  },
])
