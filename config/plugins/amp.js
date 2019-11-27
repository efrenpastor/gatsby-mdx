module.exports = {
  resolve: 'gatsby-plugin-html2amp',
  options: {
    files: ['amp/**/*.html'],
    publicPath: 'public',
    dist: 'public',
    optimize: true
  }
}
