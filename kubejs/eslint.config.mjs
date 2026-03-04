import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "script"
    }
  },
  {
    plugins: {
      "@stylistic": stylistic
    }
  },
  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@stylistic/newline-per-chained-call": [
        "warn",
        {
          ignoreChainWithDepth: 1
        }
      ],
      "@stylistic/indent": ["warn", 2],
      "@stylistic/max-len": [
        "warn",
        {
          code: 200,
          ignoreStrings: true,
          ignoreComments: true
        }
      ]
    }
  }
]);
