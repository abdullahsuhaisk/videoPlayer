import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import likeTemplate from '../../templates/likeTemplate.json';
import useWebFont from '../../hooks/useWebFont';

const StyledContainer = styled.div`
  ${likeTemplate['vibuy--like-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledIcon = styled.div`
  ${likeTemplate['vibuy--like-icon'].styles}
`;

const StyledText = styled.span`
  ${likeTemplate['vibuy--like-text'].styles}
`;

const Like = (props) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = useCallback(() => {
    setLikeCount(likeCount + 1);
  }, [likeCount]);

  useWebFont(likeTemplate);

  return (
    <StyledContainer onClick={handleClick}>
      <StyledIcon />
      <StyledText>{likeCount}</StyledText>
    </StyledContainer>
  );
};

export default Like;
