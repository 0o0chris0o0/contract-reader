import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Index({ data }) {
  const contracts = data.allContractsJson.nodes;
  console.log(data);
  return (
    <Layout>
      <Seo title="Contract Reader" />
      <div className="hero">
        <div className="container">
          <h1 className="title">Contract Reader</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="subtitle">Select a contract to read:</h2>
            <ul>
              {contracts.map(contract => (
                <li>
                  <Link to={`contracts/${contract.data.id}`}>{contract.data.attributes.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const query = graphql`
  query {
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
`;
