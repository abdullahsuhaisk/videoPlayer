import React from 'react';

const ProductDetaiHeader = ({ productTitle, brand }) => {
  console.log(brand);
  return (
    <div className="ProductDetail--information--title">
      <h2 className="ProductDetail--company--title--h2">
        {brand && brand.name}
      </h2>
      <h2 className="ProductDetail--information--title--h2">{productTitle}</h2>
    </div>
  );
};

export default ProductDetaiHeader;
