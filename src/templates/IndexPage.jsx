import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Api from '../utils/api';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Loader from '../components/Loader';
import VisibilityChecker from '../components/VisibilityChecker';

export default function IndexPage({ pageContext }) {
  const [paragraphs, updateParagraphs] = useState([]);
  const [isLoading, updateLoading] = useState(true);
  const [page, updatePage] = useState(1);
  const [limitReached, setlimitReached] = useState(false);

  const contractApi = new Api({ endpoint: `contracts/${pageContext.contract.id}/paragraphs` });

  const getParagraphs = () => {
    if (!limitReached) {
      // toggle loading spinner
      updateLoading(true);

      // get paragraphs for current page
      contractApi.submit({ page, pageSize: 5 }).then(response => {
        // clone original paragraph state
        const paraClone = paragraphs.slice(0);

        // add new paragraphs
        paraClone.push(...response.paragraphs);

        // update paragraphs state
        updateParagraphs(paraClone);

        // update current page
        updatePage(page + 1);

        // if we're on the last page disable getting any more paragraphs
        if (page >= response.pagination.pages) {
          setlimitReached(true);
        }

        // toggle loading spinner
        updateLoading(false);
      });
    }
  };

  useEffect(() => {
    // get initial paragraphs on mount
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
          <TransitionGroup>
            {!!paragraphs.length
              && paragraphs.map(para => (
                <CSSTransition key={para.id} timeout={500} classNames="paragraph">
                  <p>{para.attributes.text}</p>
                </CSSTransition>
              ))}
          </TransitionGroup>
          {isLoading && (
            <Loader
              width="50px"
              loaderStyles={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                textAlign: 'center',
                height: '100px',
              }}
            />
          )}
          {!isLoading && <VisibilityChecker callback={getParagraphs} />}
        </div>
      </section>
    </Layout>
  );
}

IndexPage.propTypes = { pageContext: PropTypes.objectOf(PropTypes.any).isRequired };
