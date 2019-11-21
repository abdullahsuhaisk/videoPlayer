import React from 'react';
import styled from 'styled-components';
import NoImageSmall from '../../assets/images/NoImageSmall.png';
import HotspotProductIcon from '../../assets/icons/bag-btn-line.svg';
import HotspotActiveProductIcon from '../../assets/icons/bag-btn-glphy.svg';

const StyledComponent = styled.div`
  position: absolute;
  left: ${(props) => props.xPos};
  top: ${(props) => props.yPos};
  transition: all 0.1s linear;
  pointer-events: auto;

  img {
    width: 90px;
    height: 90px;
    transition: all 0.1s ease-in;

    :hover {
      transform: scale(1.4);
    }
  }
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
    product: { image }
  } = hotSpot;
  const imageUrl = image && image.imageUrl;
  const [activetedButton, setActivedetButton] = React.useState(false);

  const mouseEnterHandler = () => {
    setActivedetButton(true);
  };

  const mouseLeaveHandler = () => {
    setActivedetButton(false);
  };

  const positionCalculator = () => {
    // console.log(dynamicPositions);
    const currentItem = dynamicPositions.find((item) => {
      return item.sec > currentTime;
    });
    return currentItem;
  };
  const a = false;
  if (positionCalculator());
  return (
    <StyledComponent
      xPos={`${positionCalculator() && positionCalculator().x * 100}%`}
      yPos={`${positionCalculator() && positionCalculator().y * 100}%`}
      style={{}}
      onClick={() => setProductIdForDetail(id)}
      onMouseEnter={() => mouseEnterHandler()}
      onMouseLeave={() => mouseLeaveHandler()}>
      <div className="hotspotbutton--shadow">
        <div className="hotspotbutton--wrapper">
          {a === true ? (
            <HotspotImageButton
              src={(imageUrl && imageUrl) || NoImageSmall}
              alt="HotspotButton"
              style={{ width: 90, height: 90, borderRadius: '50%' }}
            />
          ) : (
            <img
              src={
                activetedButton === true
                  ? HotspotActiveProductIcon
                  : HotspotProductIcon
              }
              alt="HotspotButton"
            />
          )}
        </div>
      </div>
    </StyledComponent>
  );

  return null;
};

export default HotspotImageButton;
