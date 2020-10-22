require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `RBA`,
    description: `Web development portfolio with projects on Odoo, AWS Lightsail, Wordpress, Cpanel, Avada Theme, Gatsby among others.`,
    author: `@devrba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rba.dev`,
        short_name: `rba`,
        start_url: `/`,
        background_color: `#654321`,
        theme_color: `#123456`,
        display: `minimal-ui`,
        icon: `src/images/rba-dev-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
