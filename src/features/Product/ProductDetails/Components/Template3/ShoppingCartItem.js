import React, { useEffect, useState } from 'react';
import SampleImage from '../../../../../assets/images/SampleImage.jpg';
import ProductDetailQuantity from './ProductDetailQuantity';
import ProductQueryHoc from '../../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../../Queries/Products/ProductQueries';
import { sizes } from '../../../../../common/Variants';

const ShoppingCartItem = ({
  item,
  product,
  productId,
  setChangeCount,
  changeCount
}) => {
  // console.log(item);
  const [speciality, setSpeciality] = useState(item.quantitiy);
  useEffect(() => {
    console.log('Cart Mining');
    const carts = JSON.parse(localStorage.getItem('guestCart'));
    const selectedCartItem = JSON.parse(localStorage.getItem('guestCart')).find(
      (cart) => cart.productId === productId
    );
    const selectedCartItemIndex = carts.findIndex(
      (cart) => cart.productId === productId
    );
    selectedCartItem.quantitiy = speciality;
    carts[selectedCartItemIndex] = {
      ...selectedCartItem,
      quantitiy: speciality
    };
    localStorage.setItem('guestCart', JSON.stringify(carts));
    setChangeCount(changeCount + 1);
  }, [speciality]);

  useEffect(() => {}, []);
  const { image, name, currentPrice } = product;
  return (
    <div className="shoppcart--item-container">
      <div className="item-image">
        <img src={image ? image.thumbnailUrl : SampleImage} alt="" />
      </div>
      <div className="item-info">
        <div>
          <div className="item-name">{name}</div>
          <div className="item-variant">Color: Navy Blazer</div>
          <div className="item-variant">Size: {sizes[speciality.size]}</div>
        </div>
        <div className="item-quanity-price">
          <div className="item--quantity">
            <ProductDetailQuantity
              speciality={speciality}
              setSpeciality={setSpeciality}
            />
          </div>
          <div className="item--price">
            ${(currentPrice * speciality['quality']).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQueryHoc(ShoppingCartItem, GET_PRODUCT, true);
