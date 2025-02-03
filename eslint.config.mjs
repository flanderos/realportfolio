import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "off"
    },
  },
];
