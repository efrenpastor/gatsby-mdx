const url = require('../../utils/url')

module.exports = {
  resolve: 'gatsby-plugin-sitemap',
  options: {
    query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }

        allSitePage {
          edges {
            node {
              path
              internalComponentName
            }
          }
        }
      }
    `,
    serialize: ({ site, allSitePage }) =>
      allSitePage.edges.map(edge => {
        let freq
        let priority
        switch (edge.node.internalComponentName) {
          case 'ComponentAbout':
            freq = 'never'
            priority = 0
            break
          case 'ComponentIndex':
            freq = 'daily'
            priority = 0.7
            break
          default:
            freq = 'weekly'
            priority = 0.5
            break
        }

        return {
          url: url.join(site.siteMetadata.siteUrl, edge.node.path),
          changefreq: freq,
          priority: priority
        }
      })
  }
}
