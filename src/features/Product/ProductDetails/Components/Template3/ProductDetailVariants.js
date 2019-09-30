import React from 'react';

const colors = [
  'https://us.123rf.com/450wm/cgdeaw/cgdeaw1905/cgdeaw190500057/122252927-blue-flat-for-background-pastel-blue-color-light-blue-plain-colors-top-view.jpg?ver=6',
  'http://suriwong.com.my/wp-content/uploads/2017/04/0001-M-Florida.jpg'
];

const sizes = ['xs', 's', 'm', 'l', 'xl'];

const ProductDetailVariant = ({ data, setData }) => {
  return (
    <React.Fragment>
      <div className="productdetail--colors-wrapper">
        <div className="productdetail--label">Colors</div>
        <div className="productdetail--colors-options">
          {colors.map((item, index) => {
            return data.color === index ? (
              <div className="selected" key={index}>
                <img src={item} alt="color" />
                <p className="name">color</p>
              </div>
            ) : (
              <div
                className="unselected"
                key={index}
                onClick={() => {
                  setData({ ...data, color: index });
                }}>
                <img src={item} alt="color" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="productdetail--sizes-wrapper">
        <div className="productdetail--label">Size</div>
        <div className="productdetail--sizes-options">
          {sizes.map((item, index) => {
            return data.size === index ? (
              <div className="selected" key={index}>
                {item}
              </div>
            ) : (
              <div
                className="unselected"
                key={index}
                onClick={() => {
                  setData({ ...data, size: index });
                }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailVariant;
