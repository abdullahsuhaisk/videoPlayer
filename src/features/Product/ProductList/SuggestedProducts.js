import React from 'react';
import 'flickity-imagesloaded';

import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';
import { GET_PRODUCTS } from '../../../Queries/Products/ProductQueries';

import withQueryProdLink from '../../../components/HOCS/Grapqhl/ProdLinkQueryHoc';

const SuggestedProducts = ({ data }) => {
  const prodLink = data && data.prodLink;
  const suggestedProducts =
    prodLink && prodLink.suggestedProducts && prodLink.suggestedProducts;
  // console.log(suggestedProducts);
  return (
    <>
      <FlickityProductCard products={suggestedProducts} />
    </>
  );
};

export default withQueryProdLink(SuggestedProducts, GET_PRODUCTS);
