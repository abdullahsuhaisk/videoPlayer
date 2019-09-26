import React from 'react';
import styled from 'styled-components';
import HotspotProductIcon from '../../assets/icons/HotspotProductIcon.svg';

const StyledComponent = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const HotspotButton = ({ top, left, ProductId, setProductIdForDetail }) => {
  console.log(ProductId);
  return (
    <StyledComponent
      top={top}
      left={left}
      style={{ pointerEvents: 'auto' }}
      onClick={() => setProductIdForDetail(ProductId)}>
      <div className="hotspotbutton--shadow">
        <div className="hotspotbutton--wrapper">
          <img src={HotspotProductIcon} alt="HotspotButton" />
        </div>
      </div>
    </StyledComponent>
  );
};

HotspotButton.defaultProps = {
  top: '50%',
  left: '50%'
};

export default HotspotButton;
