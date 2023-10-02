/* eslint-env node */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true
  },
  overrides: [
    /**
     * Disable type checking for JavaScript files
     */
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"]
    },
    /**
     * Config files (ex: jest.config.js, prettier.config.js, tailwind.config.js)
     */
    {
      files: ["*.config.js"],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    /**
     * Jest Configuration
     */
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      env: {
        jest: true
      },
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      plugins: ["jest"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    }
  ],
  settings: {
    tailwindcss: {
      callees: ["className", "clsx", "cls", "cva", "cn"]
    }
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        varsIgnorePattern: "^_"
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type"
        ],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true
      }
    ],
    "tailwindcss/no-custom-classname": [
      "error",
      {
        cssFiles: ["app/globals.css"]
      }
    ]
  }
}
