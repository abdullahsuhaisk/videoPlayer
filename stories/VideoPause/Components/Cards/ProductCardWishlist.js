import React from 'react';
import { StyledComponent } from '../../VideoPauseMenu.style';
import cardimg from '../../assets/cardimg.png';
import circleimg from '../../assets/circle.png';

const ProductCardsWishlist = (props) => {
  return (
    <React.Fragment>
      <StyledComponent>
        <div className="card">
          <div className="imageWrapperW">
            <img src={cardimg} calssname="cardImage" />
            <div>
              <img src={circleimg} className="checkImage" />
              <p className="wishlisted">On Whistlist</p>
            </div>
          </div>
          <h3>Pierre Cardin Women Red Glasses</h3>
          <div className="priceWrapper">
            <h2>71 $</h2>
          </div>
          <p className="instock">in stock</p>
          <div className="underline"></div>
          <a className="detail">Detail</a>
        </div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default ProductCardsWishlist;
