import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Favorite = ({ styles }) => {
  // TODO: Update favorite via service
  const [favoriteCount, setFavoriteCount] = useState(0);
  const handleClick = useCallback(() => {
    setFavoriteCount(favoriteCount + 1);
  }, [favoriteCount]);

  return (
    <StyledWrapper
      styles={styles}
      className="vb--favorite"
      onClick={handleClick}>
      <div className="vb--favorite-icon" />
      <span className="vb--favorite-count">{favoriteCount}</span>
    </StyledWrapper>
  );
};

Favorite.propTypes = {
  styles: PropTypes.object
};

Favorite.defaultProps = {
  styles: {}
};

export default Favorite;
