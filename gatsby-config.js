module.exports = {
  siteMetadata: {
    title: `test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://datainwedo.com/graphql"
    }
  }]
};