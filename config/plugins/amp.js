module.exports = {
  resolve: 'gatsby-plugin-html2amp',
  options: {
    files: ['reviews/**/*.html'],
    publicPath: 'public',
    dist: 'public/amp',
    optimize: true
  }
}
