import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SampleImage from '../../../../../assets/images/SampleImage.jpg';
import ProductDetailQuantity from './ProductDetailQuantity';
import ProductQueryHoc from '../../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../../Queries/Products/ProductQueries';
import { sizes } from '../../../../../common/Variants';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/TrashIcon.svg';

const StyledComponent = styled.div`
  .shoppcart--item-container {
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
  deleteItem
}) => {
  const carts = JSON.parse(localStorage.getItem('guestCart'));

  const [variant, setVariant] = useState(item.variantInfo);

  useEffect(() => {
    const selectedCartItem = JSON.parse(localStorage.getItem('guestCart')).find(
      (cart) => cart.productId === productId
    );
    const selectedCartItemIndex = carts.findIndex(
      (cart) => cart.productId === productId
    );

    selectedCartItem.variantInfo = variant;

    if (carts.length > 0) {
      carts[selectedCartItemIndex] = {
        ...selectedCartItem,
        variantInfo: variant
      };
    }

    localStorage.setItem('guestCart', JSON.stringify(carts));
    setChangeCount(changeCount + 1);
  }, [variant]);

  const { image, name, currentPrice } = product;
  return (
    <StyledComponent>
      <div className="shoppcart--item-container">
        <div className="item-delete" onClick={() => deleteItem(productId)}>
          <TrashIcon />
        </div>
        <div className="item-image">
          <img src={image ? image.thumbnailUrl : SampleImage} alt="" />
        </div>
        <div className="item-info">
          <div>
            <div className="item-name">{name}</div>
            <div className="item-variant">Color: Navy Blazer</div>
            <div className="item-variant">Size: {sizes[variant.size]}</div>
          </div>
          <div className="item-quanity-price">
            <div className="item--quantity">
              <ProductDetailQuantity
                variant={variant}
                setVariant={setVariant}
              />
            </div>
            <div className="item--price">
              ${(currentPrice * variant['quantity']).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </StyledComponent>
  );
};

export default ProductQueryHoc(ShoppingCartItem, GET_PRODUCT, true);
