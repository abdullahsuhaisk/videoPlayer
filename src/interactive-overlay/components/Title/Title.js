import React from 'react';
import styled, { css } from 'styled-components';
import titleTemplate from '../../templates/titleTemplate.json';
import useWebFont from '../../hooks/useWebFont';

const StyledContainer = styled.div`
  ${titleTemplate['vibuy--title-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledTitle = styled.span`
  ${titleTemplate['vibuy--title-text'].styles}
`;

const StyledDescription = styled.span`
  ${titleTemplate['vibuy--title-description'].styles}
`;

const Title = (props) => {
  useWebFont(titleTemplate);

  return (
    <StyledContainer>
      <StyledTitle>Zara</StyledTitle>
      <StyledDescription>Spring - Summer 2019 Best Creation</StyledDescription>
    </StyledContainer>
  );
};

export default Title;
