import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Share = (props) => {
  const { styles } = props;
  // TODO: Use a service to update state
  const [shareCount, setShareCount] = useState(0);
  const handleClick = useCallback(() => {
    setShareCount(shareCount + 1);
  }, [shareCount]);

  return (
    <StyledWrapper
      className="vibuy--share-widget"
      styles={styles}
      onClick={handleClick}>
      <div className="vibuy--share-icon" />
      <span className="vibuy--share-text">{shareCount}</span>
    </StyledWrapper>
  );
};

export default Share;
