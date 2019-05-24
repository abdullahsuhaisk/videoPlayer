import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Title = (props) => {
  const { title, description, styles } = props;

  return (
    <StyledWrapper styles={styles} className="vibuy--title-widget">
      <span className="vibuy--title-text">{title}</span>
      <span className="vibuy--title-description">{description}</span>
    </StyledWrapper>
  );
};

export default Title;
