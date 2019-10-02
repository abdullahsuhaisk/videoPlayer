import React from 'react';

const ProductDetaiHeader = ({ productTitle, company }) => {
  return (
    <div className="ProductDetail--information--title">
      <h2 className="ProductDetail--company--title--h2">
        {company && company.name}
      </h2>
      <h2 className="ProductDetail--information--title--h2">{productTitle}</h2>
    </div>
  );
};

export default ProductDetaiHeader;
