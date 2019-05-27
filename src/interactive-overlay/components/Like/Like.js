import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Like = (props) => {
  const { styles } = props;
  // TODO: Use a service to update state
  const [likeCount, setLikeCount] = useState(0);
  const handleClick = useCallback(() => {
    setLikeCount(likeCount + 1);
  }, [likeCount]);

  return (
    <StyledWrapper
      styles={styles}
      className="vibuy--like-widget"
      onClick={handleClick}>
      <div className="vibuy--like-icon" />
      <span className="vibuy--like-text">{likeCount}</span>
    </StyledWrapper>
  );
};

export default Like;
