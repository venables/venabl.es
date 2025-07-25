/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  trailingComma: "none",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  printWidth: 120,
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindFunctions: ["clsx", "cva", "cn"]
}

export default config
