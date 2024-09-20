import { minify } from 'html-minifier-terser'

const defaultMinimizerOptions = {
  caseSensitive: true,
  // `collapseBooleanAttributes` is not always safe, since this can break CSS attribute selectors and not safe for XHTML
  collapseWhitespace: true,
  conservativeCollapse: true,
  keepClosingSlash: true,
  // We need ability to use cssnano, or setup own function without extra dependencies
  minifyCSS: true,
  minifyJS: true,
  // `minifyURLs` is unsafe, because we can't guarantee what the base URL is
  // `removeAttributeQuotes` is not safe in some rare cases, also HTML spec recommends against doing this
  removeComments: true,
  // `removeEmptyAttributes` is not safe, can affect certain style or script behavior, look at https://github.com/webpack-contrib/html-loader/issues/323
  // `removeRedundantAttributes` is not safe, can affect certain style or script behavior, look at https://github.com/webpack-contrib/html-loader/issues/323
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true // `useShortDoctype` is not safe for XHTML
}
export default function plugin(options = {}) {
  return {
    enforce: 'pre',
    name: 'vite-plugin-html',
    async transformIndexHtml(html) {
      const res = await minify(html, Object.assign(defaultMinimizerOptions, options))
      return res
    }
  }
}
