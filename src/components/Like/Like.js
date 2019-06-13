import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Like = ({ styles }) => {
  // TODO: Use a service to update state
  const [likeCount, setLikeCount] = useState(0);
  const handleClick = useCallback(() => {
    setLikeCount(likeCount + 1);
  }, [likeCount]);

  return (
    <StyledWrapper styles={styles} className="vb--like" onClick={handleClick}>
      <div className="vb--like-icon" />
      <span className="vb--like-count">{likeCount}</span>
    </StyledWrapper>
  );
};

Like.propTypes = {
  styles: PropTypes.object
};

Like.defaultProps = {
  styles: {}
};

export default Like;
