import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: absolute;
  left: ${(props) => props.xPos};
  top: ${(props) => props.yPos};
  transition: all 0.1s linear;
  pointer-events: auto;
  margin-left: -55px !important;
  margin-top: -55px !important;
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
  const {
    product: {
      image: { imageUrl }
    }
  } = hotSpot;
  const positionCalculator = () => {
    const currentItem = dynamicPositions.find((item) => {
      return item.sec > currentTime;
    });
    return currentItem;
  };
  if (positionCalculator())
    // console.log(positionCalculator());
    return (
      <StyledComponent
        xPos={`${positionCalculator().x * 100}%`}
        yPos={`${positionCalculator().y * 100}%`}
        style={{}}
        onClick={() => setProductIdForDetail(id)}>
        <div className="hotspotbutton--shadow">
          <div className="hotspotbutton--wrapper">
            <img
              src={imageUrl}
              alt="HotspotButton"
              style={{ width: 100, height: 100, borderRadius: '50%' }}
            />
          </div>
        </div>
      </StyledComponent>
    );

  return null;
};

export default HotspotImageButton;
