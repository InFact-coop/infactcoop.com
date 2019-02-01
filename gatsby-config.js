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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "infact-digital-coop-webstie",
        short_name: "infact",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "browser",
        // TODO: add site icon
        // icon: '', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
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
          require("postcss-import")(), // allows you to use @import
          require("autoprefixer")(), // adds vendor prefixes like -webkit or -moz to your css for better support
          require("postcss-custom-media")(), // can set media queries as variables
          require("postcss-custom-properties")(), // allows you to use css variables e.g. var(--my-variable)
          require("postcss-clean")(), // minifies the output css (i.e. removes all the spaces and comments)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-121771892-1',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
          {
            urlPattern: /\.mp4$/,
            handler: `networkFirst`,
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
