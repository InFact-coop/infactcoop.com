let activeEnv = process.env.ACTIVE_ENV

if (!activeEnv) {
  activeEnv = 'development'
}

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'InFact Digital Co-op',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.DELIVERY_API_KEY,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          require('postcss-import')(), // allows you to use @import
          require('autoprefixer')(), // adds vendor prefixes like -webkit or -moz to your css for better support
          require('postcss-custom-media')(), // can set media queries as variables
          require('postcss-custom-properties')(), // allows you to use css variables e.g. var(--my-variable)
          require('postcss-clean')(), // minifies the output css (i.e. removes all the spaces and comments)
        ],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-121771892-1',
      },
    },
  ],
}
