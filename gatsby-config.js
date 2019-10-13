module.exports = {
  siteMetadata: {
    title: 'Quick starter',
    description: 'Seo main description',
    author: '@mamadOuologuem',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // allows users to add your site to their home screen on most mobile browsers
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Your App name',
        short_name: 'Your App short name',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/logos/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
