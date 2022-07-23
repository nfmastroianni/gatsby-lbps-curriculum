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
    title: 'Curriculum & Instruction',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
