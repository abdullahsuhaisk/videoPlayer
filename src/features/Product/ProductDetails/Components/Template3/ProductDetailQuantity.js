/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MinusIcon } from '../../../../../assets/icons/MinusIcon.svg';
import { ReactComponent as PlusIcon } from '../../../../../assets/icons/PlusIcon.svg';

const StyledComponent = styled.div`
  .productdetail--quantity-wrapper {
    .productdetail--quantity-options {
      .decrement {
        svg {
          stroke: #666;
        }
        :hover {
          svg {
            stroke: #fff;
          }
        }
      }
      .increment {
        svg {
          stroke: #666;
        }
        :hover {
          svg {
            stroke: #fff;
          }
        }
      }
    }
  }
`;

const ProductDetailPriceNew = () => {
  const [quantity, setQuality] = useState(1);
  return (
    <StyledComponent>
      <div className="productdetail--quantity-wrapper">
        <div className="productdetail--label">Quantity</div>
        <div className="productdetail--quantity-options">
          {quantity > 1 ? (
            <div
              className="decrement"
              onClick={() => {
                setQuality(quantity - 1);
              }}>
              <MinusIcon />
            </div>
          ) : (
            <div className="decrement">
              <MinusIcon />
            </div>
          )}

          <div className="value">{quantity}</div>

          <div
            className="increment"
            onClick={() => {
              setQuality(quantity + 1);
            }}>
            <PlusIcon />
          </div>
        </div>
      </div>
    </StyledComponent>
  );
};

export default ProductDetailPriceNew;
