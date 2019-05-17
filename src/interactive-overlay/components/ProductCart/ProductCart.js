/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';

const ProductCart = (props) => {
  const style = {
    position: 'absolute',
    top: '220px',
    left: '60px',
    width: '150px',
    height: '315px',
    borderRadius: '5px',
    backgroundColor: '#F4F4F8',
    pointerEvents: 'auto'
  };

  const style2 = {
    position: 'absolute',
    top: '220px',
    left: '240px',
    width: '150px',
    height: '315px',
    borderRadius: '5px',
    backgroundColor: '#F4F4F8',
    pointerEvents: 'auto'
  };

  const topDiv = {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',
    background: '#00acd8',
    cursor: 'pointer'
  };

  const imgDiv = {
    width: '100%',
    height: '89%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    background: 'white',
    cursor: 'default',
    padding: '10px'
  };

  const bottomDiv = {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <>
      <div style={style}>
        <div style={topDiv}>
          <div style={imgDiv}>
            <img
              src="/images/tshirt.jpg"
              alt=""
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <span
            style={{ color: '#FFFC', marginBottom: '5px', fontWeight: 'bold' }}>
            Add to Wish List
          </span>
        </div>
        <div style={bottomDiv}>
          <span
            style={{
              color: '#0009',
              padding: '5px',
              marginTop: '5px',
              fontWeight: 'bold'
            }}>
            Valentino
          </span>
          <span style={{ color: '#0009', padding: '2px', fontWeight: 'bold' }}>
            Turtleneck Sweater
          </span>
          <Price currentPrice="74.98$" />
          <span
            style={{ color: '#10B1DF', fontSize: '10px', fontWeight: 'bold' }}>
            In Stock
          </span>
          <hr
            style={{
              width: '50%',
              margin: '3px',
              borderTop: '1px solid #10B1DF'
            }}
          />
          <span
            style={{ color: '#10B1DF', fontSize: '12px', fontWeight: 'bold' }}>
            Details
          </span>
        </div>
      </div>

      <div style={style2}>
        <div style={topDiv}>
          <div style={imgDiv}>
            <img
              src="/images/tshirt.jpg"
              alt=""
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <span
            style={{ color: '#FFFC', marginBottom: '5px', fontWeight: 'bold' }}>
            Add to Wish List
          </span>
        </div>
        <div style={bottomDiv}>
          <span
            style={{
              color: '#0009',
              padding: '5px',
              marginTop: '5px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
            Valentino
          </span>
          <span
            style={{
              color: '#0009',
              padding: '2px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
            Turtleneck Sweater
          </span>
          <Price
            basePrice="1149.95$"
            discountRate="%20"
            currentPrice="774.98$"
          />
          <span
            style={{ color: '#10B1DF', fontSize: '10px', fontWeight: 'bold' }}>
            In Stock
          </span>
          <hr
            style={{
              width: '50%',
              margin: '3px',
              borderTop: '1px solid #10B1DF'
            }}
          />
          <span
            style={{ color: '#10B1DF', fontSize: '12px', fontWeight: 'bold' }}>
            Details
          </span>
        </div>
      </div>
    </>
  );
};

const Price = (props) => {
  const { basePrice, discountRate, currentPrice } = props;

  if (basePrice && discountRate) {
    return (
      basePrice &&
      discountRate && (
        <div style={{ margin: '10px' }}>
          <div
            style={{
              float: 'left',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D33737',
              fontWeight: 'bold',
              borderRadius: '5px'
            }}>
            <span style={{ fontSize: '12px' }}>{discountRate}</span>
          </div>
          <div
            style={{
              float: 'left',
              display: 'flex',
              flexDirection: 'column',
              color: 'black'
            }}>
            <span
              style={{ color: '#0008', paddingLeft: '2px', fontSize: '12px' }}>
              <s>{basePrice}</s>
            </span>
            <span
              style={{
                color: '#000C',
                padding: '2px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
              {currentPrice}
            </span>
          </div>
        </div>
      )
    );
  }

  return (
    <span
      style={{
        color: '#000C',
        margin: '15px',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
      {currentPrice}
    </span>
  );
};

export default ProductCart;
