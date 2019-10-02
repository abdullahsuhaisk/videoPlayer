import React from 'react';
import ProductQueryHoc from '../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../Queries/Products/ProductQueries';

const ProductDetailQualities = ({ product }) => {
  console.log(product);
  return (
    <div className="ProductDetail--information--settingsContainer">
      <div className="ProductDetail--information--settings">
        <p className="ProductDetail--information--settings-name">Colors</p>
        <div className="ProductDetail--information--settings-opt">
          <div className="ProductDetail--information--settings-opt-div">
            <img
              className="ProductDetail--information--settings-opt-div-img"
              src="/images/Blue.jpg"
              alt="option1"
            />
            <span className="ProductDetail--information--settings-opt-div-span">
              Blue
            </span>
          </div>
          <div className="ProductDetail--information--settings-opt-div">
            <img
              className="ProductDetail--information--settings-opt-div-img"
              src="/images/Purple.jpg"
              alt="option1"
            />
            <span className="ProductDetail--information--settings-opt-div-span">
              Purple
            </span>
          </div>
          <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
            <img
              className="ProductDetail--information--settings-opt-div-img"
              src="/images/White.jpg"
              alt="option1"
            />
            <span className="ProductDetail--information--settings-opt-div-span">
              White
            </span>
          </div>
          <div className="ProductDetail--information--settings-opt-div">
            <img
              className="ProductDetail--information--settings-opt-div-img"
              src="/images/Black.jpg"
              alt="option1"
            />
            <span className="ProductDetail--information--settings-opt-div-span">
              Black
            </span>
          </div>
        </div>
      </div>
      <div className="ProductDetail--information--settings">
        <p className="ProductDetail--information--settings-name">Size</p>
        <div className="ProductDetail--information--settings-opt">
          <div className="ProductDetail--information--settings-opt-div">
            <span className="ProductDetail--information--settings-opt-div-span">
              64 GB
            </span>
          </div>
          <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
            <span className="ProductDetail--information--settings-opt-div-span">
              128 GB
            </span>
          </div>
          <div className="ProductDetail--information--settings-opt-div">
            <span className="ProductDetail--information--settings-opt-div-span">
              256 GB
            </span>
          </div>
          <div className="ProductDetail--information--settings-opt-div">
            <span className="ProductDetail--information--settings-opt-div-span">
              512 GB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQueryHoc(ProductDetailQualities, GET_PRODUCT);
