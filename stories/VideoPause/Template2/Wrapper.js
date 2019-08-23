import React from 'react';
import styled from 'styled-components';
import './overlay2.css';

const Wrapper = styled.div`
  padding: 5em;
`;

const SecondTmplateWrapper = ({children}) => {return <Wrapper className="Template2">{children}</Wrapper>};

export default SecondTmplateWrapper;
