const { languages, defaultLanguage } = require('./languages')
const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const keys = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEYS)
module.exports = {
  /* Your site config here */
  flags: {
    // DEV_SSR: true,
  },
  siteMetadata: {
    siteTitle: 'Curriculum & Instruction',
    siteDescription:
      'The Long Branch Public Schools Curriculum & Instruction office is dedicated to helping all stakeholder receive helpful resources related to what we teach and how we teach it.',
    siteUrl: 'https://dancing-lamington-049ad7.netlify.app/',
    siteImage: 'defaultSiteImage.png',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl: 'https://dancing-lamington-049ad7.netlify.app/',
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: keys,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
