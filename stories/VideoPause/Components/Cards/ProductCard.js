import React from 'react';
import {
  StyledComponent,
  CardWrapper,
  WishlistWrapper
} from '../../VideoPauseMenu.style';
import circleimg from '../../assets/circle.png';

const ProductCard = ({ item }) => (
  <CardWrapper className="card" discount={item.discount}>
    <WishlistWrapper inWishlist={item.inWishlist}>
      <div className="imageWrapper">
        <img src={item.imgUrl} />

        <a className="wishlistable">Add to Wish List</a>

        <div className="wishlistImage">
          <img src={circleimg} className="checkImage" />
          <p className="wishlisted">On Whistlist</p>
        </div>
      </div>
    </WishlistWrapper>
    <h3>{item.name}</h3>
    <div className="priceWrapper">
      <div className="discount">
        <p className="percent">{item.discount}</p>
        <p className="linethrough">{item.oldPrice}</p>
      </div>
      <h2>{item.price}</h2>
    </div>
    <p className="instock">{item.stock}</p>
    <div className="underline"></div>
    <a className="detail">Detail</a>
  </CardWrapper>
);
const ProductCards = (props) => {
  const { productData } = props;

  return (
    <React.Fragment>
      <StyledComponent>
        <div className="mainMenu--productsWrapper">
          {productData.map((item) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default ProductCards;
