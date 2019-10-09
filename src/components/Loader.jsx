import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  ${props => props.styling};
`;

export default function Loader({ loaderStyles, width, height }) {
  return (
    <Container styling={loaderStyles}>
      <div style={{ width, height }} className="lds-bars">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Container>
  );
}

Loader.defaultProps = {
  loaderStyles: {},
  width: '100px',
  height: '20px',
};

Loader.propTypes = {
  loaderStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.string,
  height: PropTypes.string,
};
