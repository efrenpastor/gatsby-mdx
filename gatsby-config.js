/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/siteMetadata')
const sitemap = require('./config/plugins/sitemap')
const robots = require('./config/plugins/robots')
const manifest = require('./config/plugins/manifest')
const sharp = require('./config/plugins/sharp')
const transformerRemark = require('./config/plugins/transformerRemark')
const sourceFilesystem = require('./config/plugins/sourceFilesystem')
const mdx = require('./config/plugins/mdx')
const emotion = require('./config/plugins/emotion')
const typography = require('./config/plugins/typography')
const reactHelmet = require('./config/plugins/reactHelmet')
const amp = require('./config/plugins/amp')

module.exports = {
  siteMetadata,
  plugins: [
    sitemap,
    robots,
    manifest,
    sharp,
    transformerRemark,
    sourceFilesystem.content,
    sourceFilesystem.images,
    mdx,
    emotion,
    typography,
    reactHelmet,
    amp
  ]
}