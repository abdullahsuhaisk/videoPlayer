import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import favoriteTemplate from '../../templates/favoriteTemplate.json';
import useWebFont from '../../hooks/useWebFont';

const StyledContainer = styled.div`
  ${favoriteTemplate['vibuy--favorite-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledIcon = styled.div`
  ${favoriteTemplate['vibuy--favorite-icon'].styles}
`;

const StyledText = styled.span`
  ${favoriteTemplate['vibuy--like-text'].styles}
`;

const Favorite = (props) => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleClick = useCallback(() => {
    setFavoriteCount(favoriteCount + 1);
  }, [favoriteCount]);

  useWebFont(favoriteTemplate);

  return (
    <StyledContainer onClick={handleClick}>
      <StyledIcon />
      <StyledText>{favoriteCount}</StyledText>
    </StyledContainer>
  );
};

export default Favorite;
