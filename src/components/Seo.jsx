/**
 *  SEO component
 *  Because of how Gatsby generates the pages, this component won't work during dev
 *  In order to test this component out run 'yarn build' and then 'yarn serve'
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SEO({ title }) {
  return (
    <Helmet title={title}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />
    </Helmet>
  );
}

SEO.propTypes = { title: PropTypes.string.isRequired };

export default SEO;
