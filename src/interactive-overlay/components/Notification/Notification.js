import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Notification = (props) => {
  const [active, setActive] = useState(false);

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
  `;

  const Text = styled.span`
    display: block;
    margin-top: 15px;
    font-size: 18px;
  `;

  const activeStyle = {
    height: '50px'
  };

  useEffect(() => {
    setActive(true);
  }, []);

  //   setTimeout(() => {
  //     // notify.classList.remove('notify-active');
  //     onClose();
  //   }, 2000);

  return (
    <Wrapper style={active ? activeStyle : {}}>
      <Text>Email or password is incorrect!</Text>
    </Wrapper>
  );
};

export default Notification;
