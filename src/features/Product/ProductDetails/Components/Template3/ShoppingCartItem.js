import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import SampleImage from '../../../../../assets/images/SampleImage.jpg';
import ProductDetailQuantity from './ProductDetailQuantity';
import ProductQueryHoc from '../../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../../Queries/Products/ProductQueries';
import { sizes } from '../../../../../common/Variants';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/TrashIcon.svg';
import { PLAYER } from '../../../../../common/constants';

const StyledComponent = styled.div`
  .shopcart--item-container {
    .item-delete {
      svg {
        stroke: #666;
        fill: #666;
      }
      :hover {
        svg {
          stroke: #0b2443;
          fill: #0b2443;
        }
      }
    }
  }
`;

const ShoppingCartItem = ({
  item,
  product,
  productId,
  setChangeCount,
  changeCount,
  deleteItem,
  client
}) => {
  const carts = JSON.parse(localStorage.getItem('guestCart'));

  const [variant, setVariant] = useState(item.variantInfo);

  useEffect(() => {
    const isAdded = carts.find(
      (cart) =>
        cart.productId === productId &&
        cart.variantInfo.color === variant.color &&
        cart.variantInfo.size === variant.size
    );

    if (isAdded) {
      const selectedCartItem = carts.find(
        (cart) =>
          cart.productId === productId &&
          cart.variantInfo.color === variant.color &&
          cart.variantInfo.size === variant.size
      );
      const selectedCartItemIndex = carts.findIndex(
        (cart) =>
          cart.productId === productId &&
          cart.variantInfo.color === variant.color &&
          cart.variantInfo.size === variant.size
      );

      const newData = {
        ...variant,
        quantity: variant.quantity
      };

      selectedCartItem.variantInfo = newData;

      carts[selectedCartItemIndex] = {
        ...selectedCartItem,
        variantInfo: newData
      };

      localStorage.setItem('guestCart', JSON.stringify(carts));
      setChangeCount(changeCount + 1);
    }
  }, [variant]);

  const { image, name, currentPrice, currency } = product;

  const setProductIdForDetail = useCallback((productId) => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: PLAYER.PAUSED
        },
        productIdInDetails: productId,
        isShoppingCartShowing: false
      }
    });
  }, []);
  return (
    <StyledComponent>
      <div className="shopcart--item-container">
        <div
          className="item-delete"
          onClick={() => deleteItem(productId, variant)}>
          <TrashIcon />
        </div>
        <div
          className="item-image"
          onClick={() => setProductIdForDetail(productId)}>
          <img src={image ? image.thumbnailUrl : SampleImage} alt="" />
        </div>
        <div className="item-info">
          <div className="item-info-mobile">
            <div
              className="item-name"
              onClick={() => setProductIdForDetail(productId)}>
              {name}
            </div>
            <div className="item-variant">Color: Navy Blazer</div>
            <div className="item-variant">
              Size: {sizes[item.variantInfo.size]}
            </div>
          </div>
          <div className="item-quanity-price">
            <div className="item--quantity">
              <ProductDetailQuantity
                variant={variant}
                setVariant={setVariant}
              />
            </div>
            <div className="item--price">
              {currency && currency.symbol}
              {(currentPrice * variant['quantity']).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </StyledComponent>
  );
};

export default ProductQueryHoc(ShoppingCartItem, GET_PRODUCT, true);
