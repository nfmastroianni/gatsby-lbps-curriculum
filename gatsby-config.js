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
    title: 'LBPS Curriculum Department',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: keys,
      },
    },
  ],
}
