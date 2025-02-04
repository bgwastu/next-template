import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import unusedImports from "eslint-plugin-unused-imports";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line
export default [
  ...fixupConfigRules(
    compat.extends(
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/recommended",
      "plugin:import/react",
      "plugin:import/typescript"
    )
  ),
  {
    plugins: {
      "unused-imports": unusedImports,
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      parser: tsParser,
    },

    settings: {},

    rules: {
      "import/no-dynamic-require": "error",
      "import/no-cycle": "error",
      "import/no-empty-named-blocks": "error",
      "import/export": "error",
      "import/no-unresolved": "error",
      "react-hooks/exhaustive-deps": "off",
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "no-var": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          varsIgnorePattern: "^__ignore",
          argsIgnorePattern: "^__ignore",
          destructuredArrayIgnorePattern: "^__ignore",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^__ignore",
        },
      ],
    },
  },
];
