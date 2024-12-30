/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ],
  trailingComma: "none",
  tabWidth: 2,
  semi: false,
  singleQuote: false
}

export default config
