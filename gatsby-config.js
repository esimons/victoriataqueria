module.exports = {
  siteMetadata: {
    title: "La Victoria"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    }
  ]
};
