module.exports = {
  siteMetadata: {
    title: 'InFact Digital Co-op',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'infact-digital-coop-webstie',
        short_name: 'infact',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'browser',
        // TODO: add site icon
        // icon: '', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import')(), // allows you to use @import
          require('autoprefixer')(), // adds vendor prefixes like -webkit or -moz to your css for better support
          require('postcss-custom-media')(), // can set media queries as variables
          require('postcss-custom-properties')(), // allows you to use css variables e.g. var(--my-variable)
          require('postcss-clean')(), // minifies the output css (i.e. removes all the spaces and comments)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-121771892-1',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
