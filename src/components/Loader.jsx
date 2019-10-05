import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  ${props => props.styling};
`;

export default function Loader({ loaderStyles, color, size }) {
  return (
    <Container className="lds-ring" styling={loaderStyles} style={{ width: size, height: size }}>
      <div style={{ borderColor: `${color} transparent transparent transparent` }} />
      <div style={{ borderColor: `${color} transparent transparent transparent` }} />
      <div style={{ borderColor: `${color} transparent transparent transparent` }} />
      <div style={{ borderColor: `${color} transparent transparent transparent` }} />
    </Container>
  );
}

Loader.defaultProps = {
  loaderStyles: {},
  color: 'black',
  size: '40px',
};

Loader.propTypes = {
  loaderStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  color: PropTypes.string,
  size: PropTypes.string,
};
