module.exports = {
  content: {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: './src/content'
    }
  },
  images: {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/content'
    }
  }
}
