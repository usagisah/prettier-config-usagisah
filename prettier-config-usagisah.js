module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  singleAttributePerLine: false,
  plugins: [
    require("prettier-plugin-packagejson"),
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss")
  ]
}
