import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 0;
  box-sizing: border-box;
  color: white;
  text-align: center;
  background: rgba(200, 0, 40, 1);
  overflow: hidden;
  box-sizing: border-box;
  transition: height 0.2s;
  height: 50px;
`;

const Text = styled.span`
  display: block;
  margin-top: 15px;
  font-size: 18px;
`;

const ValidationError = (props) => {
  const { text } = props;

  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ValidationError;
