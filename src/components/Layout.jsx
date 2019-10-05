import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../styles/styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const Layout = ({ children }) => (
  <Container>
    <main class="section">{children}</main>
  </Container>
);

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
