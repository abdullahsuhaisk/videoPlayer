import React from 'react';
import styled from 'styled-components';
import HotspotProductIcon from '../../assets/icons/HotspotProductIcon.svg';

const StyledComponent = styled.div`
  position: absolute;
  top: ${(props) => props.xPos};
  left: ${(props) => props.yPos};
  pointer-events: auto;
`;
// const top = `${hotspot.fixedPosition.y * 100}%`;
// const left = `${hotspot.fixedPosition.x * 100}%`;

const HotspotImageButton = ({
  hotSpot,
  setProductIdForDetail,
  currentTime
}) => {
  const { dynamicPositions } = hotSpot;
  const { id } = hotSpot.product;
  const positionCalculator = () => {
    const currentItem = dynamicPositions.find((item) => {
      return item.sec > currentTime;
    });
    return currentItem;
  };
  // transform: `translate(${positionCalculator().y *
  //   100}%, ${positionCalculator().x * 100}%)`
  // console.log(`${positionCalculator().y * 100}%`);
  if (positionCalculator())
    return (
      <div style={{ width: 1920, height: 1080, position: 'relative' }}>
        <StyledComponent
          xPos={`${positionCalculator().x * 100}%`}
          yPos={`${positionCalculator().y * 100}%`}
          style={{}}
          onClick={() => setProductIdForDetail(id)}>
          <div className="hotspotbutton--shadow">
            <div className="hotspotbutton--wrapper">
              <img src={HotspotProductIcon} alt="HotspotButton" />
            </div>
          </div>
        </StyledComponent>
      </div>
    );
  return null;
};

export default HotspotImageButton;
