module.exports = {
  siteMetadata: {
    title: `Wish Fountain`,
    description: `Make a wish!`,
    author: `Johnnie Regalado`,
    siteUrl: `https://wish-fountain.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
