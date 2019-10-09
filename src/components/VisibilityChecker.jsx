// Simple component for checking visibility.
// When this component is visible on screen 'callback' will be fired

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIsVisible } from 'react-is-visible';

const VisibilityChecker = ({ callback }) => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  useEffect(() => {
    if (isVisible) {
      callback();
    }
  }, [isVisible]);

  return <div ref={nodeRef} />;
};

export default VisibilityChecker;

VisibilityChecker.propTypes = { callback: PropTypes.func.isRequired };
