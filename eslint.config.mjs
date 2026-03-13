import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      prettier: prettier,
      "unused-imports": unusedImports,
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",

      "import/order": [
        "warn",
        {
          groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],

          alphabetize: {
            order: "asc",
            caseInsensitive: false,
          },

          "newlines-between": "always",
          named: true,
        },
      ],

      "arrow-body-style": "error",
      "prefer-template": "error",

      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],

      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],

      "react/jsx-no-leaked-render": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "react/self-closing-comp": [
        "error",
        {
          html: true,
          component: true,
        },
      ],

      "react-hooks/set-state-in-effect": "off",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);

export default eslintConfig;
