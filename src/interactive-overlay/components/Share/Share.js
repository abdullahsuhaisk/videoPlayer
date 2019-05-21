import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import shareTemplate from '../../templates/shareTemplate.json';
import useWebFont from '../../hooks/useWebFont';

const StyledContainer = styled.div`
  ${shareTemplate['vibuy--share-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledIcon = styled.div`
  ${shareTemplate['vibuy--share-icon'].styles}
`;

const StyledText = styled.span`
  ${shareTemplate['vibuy--share-text'].styles}
`;

const Share = (props) => {
  const [shareCount, setShareCount] = useState(0);

  const handleClick = useCallback(() => {
    setShareCount(shareCount + 1);
  }, [shareCount]);

  useWebFont(shareTemplate);

  return (
    <StyledContainer onClick={handleClick}>
      <StyledIcon />
      <StyledText>{shareCount}</StyledText>
    </StyledContainer>
  );
};

export default Share;
