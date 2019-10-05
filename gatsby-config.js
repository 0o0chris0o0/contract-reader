require('dotenv').config({ path: `.env.${process.env.ENV}` });

module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    description: 'Gatsby',
    author: 'Chris Martin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: './src/data' },
    },
  ],
};
