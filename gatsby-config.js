module.exports = {
  siteMetadata: {
    title: `Square One Ventures LLC`,
    description: `We design one-of-a-kind, eco-friendly, reusable and sustainable products. From sandwich bags, to snack bags, simplicity, safety and superior durability are featured in high quality materials and craftsmanship.`,
    author: `tom raley design & dev`,
    siteUrl: `https://squareonemission.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/dist/images`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.jpg"
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
         // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        whitelist: ['navbar', 'navbar-expand-lg', 'navbar-light', 'navbar-brand', 'btn-square-one', 'btn', 'btn-primary', 'jumbotron-middle', 'jumbotron', 'jumbotron-fluid', 'about-text', 'about-img', 'aos-init', 'aos-animate', 'desktop-mission', 'mobile-footer'],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-TXLDBPS",
      },
    },
        // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
