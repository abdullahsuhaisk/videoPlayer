import React from 'react';
import styled from 'styled-components';
import './overlay.css';
import '../../../public/css/overlay.css';
// import '../../../public/css/template3.css';

const Wrapper = styled.div`
  padding: 5em;
`;

const FirstTemplateWrapper = ({ children }) => { return <Wrapper className="Template1">{children}</Wrapper> };

export default FirstTemplateWrapper;
