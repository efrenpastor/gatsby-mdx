module.exports = {
  resolve: 'gatsby-plugin-mdx',
  options: {
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {
          linkImagesToOriginal: false,
          showCaptions: false,
          maxWidth: 1200
        }
      }
    ]
  }
}
