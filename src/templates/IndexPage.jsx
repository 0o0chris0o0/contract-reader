import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Api from '../utils/api';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage({ pageContext }) {
  const [paragraphs, updateParagraphs] = useState([]);

  const contractApi = new Api({
    endpoint: `contracts/${pageContext.contract.id}/paragraphs`,
  });

  const getParagraphs = () => {
    contractApi.submit().then(response => {
      updateParagraphs(response);
    });
  };

  useEffect(() => {
    getParagraphs();
  }, []);

  return (
    <Layout>
      <Seo title={pageContext.contract.attributes.name} />
      <div className="navbar">
        <div className="container">
          <Link className="button" to="/">
            &lt; Back
          </Link>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="content">
            <h1 className="title">{pageContext.contract.attributes.name}</h1>
            {paragraphs.map(para => (
              <p key={para.id}>{para.attributes.text}</p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

IndexPage.propTypes = {
  pageContext: PropTypes.objectOf(PropTypes.any),
};
