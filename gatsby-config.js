/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const keys = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEYS)
module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: 'Curriculum & Instruction',
    siteDescription: 'site description',
    siteUrl: 'https://dancing-lamington-049ad7.netlify.app/',
    siteImage: '/lbps_logo.png',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Curriculm & Instruction`,
        short_name: `LBPSC&I`,
        start_url: `/`,
        background_color: `#064E3B`,
        theme_color: `#D1FAE5`,
        display: `standalone`,
        icon: `src/images/lbps_logo.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: keys,
      },
    },
  ],
}
