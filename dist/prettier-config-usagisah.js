import { createRequire } from "module";
const require = createRequire(import.meta.url);
const baseOptions = {
  printWidth: Infinity,
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
};
const pluginPkg = require("prettier-plugin-packagejson");
const pluginImports = require("prettier-plugin-organize-imports");
const pluginTailwind = import("prettier-plugin-tailwindcss");
export default {
  ...baseOptions,
  plugins: [pluginPkg, pluginImports, pluginTailwind],
};
export function create({ tailwind = false }) {
  const plugins = [pluginPkg, pluginImports];
  if (tailwind) {
    plugins.push(pluginTailwind);
  }
  return { ...baseOptions, plugins };
}
