import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({ ...props.styles }));

const ScreenPlayingWrapper = (props) => {
  const { styles, children } = props;

  return <StyledWrapper styles={styles}>{children}</StyledWrapper>;
};

export default ScreenPlayingWrapper;
