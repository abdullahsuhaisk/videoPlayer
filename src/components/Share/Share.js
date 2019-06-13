import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Share = ({ styles }) => {
  // TODO: Use a service to update state
  const [shareCount, setShareCount] = useState(0);
  const handleClick = useCallback(() => {
    setShareCount(shareCount + 1);
  }, [shareCount]);

  return (
    <StyledWrapper className="vb--share" styles={styles} onClick={handleClick}>
      <div className="vb--share-icon" />
      <span className="vb--share-count">{shareCount}</span>
    </StyledWrapper>
  );
};

Share.propTypes = {
  styles: PropTypes.object
};

Share.defaultProps = {
  styles: {}
};

export default Share;
