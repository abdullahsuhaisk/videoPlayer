import React from 'react';
import { Query } from 'react-apollo';
import 'flickity-imagesloaded';
import { GET_PRODUCTS } from './ProductQueries';
import { getProdLinkUniqueId } from '../../../hooks/ProdLinkHook';
// import ProductCardContentLoader from '../../../components/ContentLoader/ProductCardContentLoader';
import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';

const SuggestedProducts = () => {
  const prodLinkUniqueId = getProdLinkUniqueId();
  console.log(prodLinkUniqueId);
  return (
    <Query query={GET_PRODUCTS} variables={{ prodLinkUniqueId }}>
      {({ data, loading, error }) => {
        if (loading) {
          return null;
        }
        if (error) return null;
        const { prodLink } = data;
        const suggestedProducts =
          prodLink && prodLink.suggestedProducts && prodLink.suggestedProducts;
        // console.log(suggestedProducts);
        return (
          <>
            <FlickityProductCard products={suggestedProducts} />
          </>
        );
      }}
    </Query>
  );
};

export default SuggestedProducts;
