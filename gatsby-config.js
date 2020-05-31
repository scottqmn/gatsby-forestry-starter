const config = require("./config.json")

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    repoUrl: config.repository_url,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locations",
        path: `${__dirname}/content/locations`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-forestry-starter",
        short_name: "gatsby-forestry",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/images/gazebo.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
