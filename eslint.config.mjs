// @ts-check

import path from "node:path"
import { fileURLToPath } from "node:url"
import { includeIgnoreFile } from "@eslint/compat"
import eslint from "@eslint/js"
import prettier from "eslint-config-prettier"
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript"
import astro from "eslint-plugin-astro"
import importX from "eslint-plugin-import-x"
import tseslint from "typescript-eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importX.flatConfigs.recommended,
  importX.flatConfigs.react,
  importX.flatConfigs.typescript,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-strict"],
  {
    languageOptions: {
      parserOptions: { project: true, tsconfigRootDir: import.meta.dirname }
    },
    settings: { "import-x/resolver-next": [createTypeScriptImportResolver()] },
    rules: {
      "import-x/consistent-type-specifier-style": ["warn", "prefer-top-level"],
      "import-x/no-unresolved": [
        "error",
        { ignore: ["\\?url$", "^astro(:\\w+)?$"] }
      ], // Allow imports with ?url
      "import-x/order": [
        "warn",
        {
          "newlines-between": "never",
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "object",
            "type"
          ],
          alphabetize: { order: "asc" }
        }
      ],
      "sort-imports": ["warn", { ignoreDeclarationSort: true }]
    }
  },
  /**
   * Config files
   */
  {
    files: ["*.config.{js,mjs,cjs,ts}"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "import-x/no-named-as-default-member": "off"
    }
  },
  /**
   * Javascript files.
   *
   * Ignore type-checking
   */
  { files: ["**/*.{js,mjs,cjs}"], ...tseslint.configs.disableTypeChecked },

  prettier
)
