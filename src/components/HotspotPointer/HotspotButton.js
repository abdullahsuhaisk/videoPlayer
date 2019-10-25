import React from 'react';
import styled from 'styled-components';
import HotspotProductIcon from '../../assets/icons/bag-btn-line.svg';
import HotspotActiveProductIcon from '../../assets/icons/bag-btn-glphy.svg';

const StyledComponent = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const HotspotButton = ({ top, left, ProductId, setProductIdForDetail }) => {
  // console.log(ProductId);
  const [activetedButton, setActivedetButton] = React.useState(false);

  const mouseEnterHandler = () => {
    setActivedetButton(true);
  };

  const mouseLeaveHandler = () => {
    setActivedetButton(false);
  };
  return (
    <StyledComponent
      top={top}
      left={left}
      style={{ pointerEvents: 'auto' }}
      onClick={() => setProductIdForDetail(ProductId)}
      onMouseEnter={() => mouseEnterHandler()}
      onMouseLeave={() => mouseLeaveHandler()}>
      <div className="hotspotbutton--shadow">
        <div className="hotspotbutton--wrapper">
          <img
            className={
              activetedButton === true ? 'hotspotImageHover' : 'hotspotImage'
            }
            src={
              activetedButton === true
                ? HotspotActiveProductIcon
                : HotspotProductIcon
            }
            alt="HotspotButton"
          />
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
