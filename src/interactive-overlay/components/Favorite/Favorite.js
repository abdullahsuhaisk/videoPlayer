import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Favorite = (props) => {
  const { styles } = props;
  // TODO: Update favorite via service
  const [favoriteCount, setFavoriteCount] = useState(0);
  const handleClick = useCallback(() => {
    setFavoriteCount(favoriteCount + 1);
  }, [favoriteCount]);

  return (
    <StyledWrapper
      styles={styles}
      className="vibuy--favorite-widget"
      onClick={handleClick}>
      <div className="vibuy--favorite-icon" />
      <span className="vibuy--favorite-text">{favoriteCount}</span>
    </StyledWrapper>
  );
};

export default Favorite;
