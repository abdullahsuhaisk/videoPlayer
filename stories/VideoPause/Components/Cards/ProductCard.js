import React from 'react';
import { StyledComponent } from '../../VideoPauseMenu.style';
import ProductCardsWishlist from './ProductCardWishlist';

const ProductCards = (props) => {
  const { productData } = props;

  return (
    <React.Fragment>
      <StyledComponent>
        <div className="mainMenu--productsWrapper">
          {productData.map((item) => {
            return (
              <div className="card">
                <div className="imageWrapper">
                  <img src={item.imgUrl} />
                  <p className="wishlistable">Add to Wish List</p>
                </div>
                <h3>{item.name}</h3>
                <div className="discount">
                  <p className="percent">{item.discount}</p>
                  <p className="linethrough">{item.oldPrice}</p>
                </div>
                <h2>{item.price}</h2>

                <p className="instock">{item.stock}</p>
                <div className="underline"></div>
                <a className="detail">Detail</a>
              </div>
            );
          })}

          <ProductCardsWishlist />
        </div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default ProductCards;
