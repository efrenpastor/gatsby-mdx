/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/siteMetadata')
const sitemap = require('./config/plugins/sitemap')
const robots = require('./config/plugins/robots')
const manifest = require('./config/plugins/manifest')
const offline = require('./config/plugins/offline')
const sharp = require('./config/plugins/sharp')
const transformerRemark = require('./config/plugins/transformerRemark')
const sourceFilesystem = require('./config/plugins/sourceFilesystem')
const mdx = require('./config/plugins/mdx')
const sass = require('./config/plugins/sass')
const reactHelmet = require('./config/plugins/reactHelmet')
const amp = require('./config/plugins/amp')
const rss = require('./config/plugins/rss')

module.exports = {
  siteMetadata,
  plugins: [
    sitemap,
    robots,
    manifest,
    offline,
    sharp,
    transformerRemark,
    sourceFilesystem.content,
    mdx,
    sass,
    reactHelmet,
    amp,
    rss
  ]
}
