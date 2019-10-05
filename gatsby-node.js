// This file generates pages for each territory

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryData = await graphql(`
    {
      allContractsJson {
        nodes {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  `);

  const contracts = queryData.data.allContractsJson.nodes;

  contracts.forEach(({ data }) => {
    // Create contract pages
    createPage({
      path: `contracts/${data.id}`,
      component: path.resolve('./src/templates/IndexPage.jsx'),
      context: { contract: data },
    });
  });
};
