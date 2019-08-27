import React from 'react';
import { Query } from 'react-apollo';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';
import { GET_SUGGESTED_PRODUCTS } from './ProductQueries';
import { getProdLinkId } from '../../../hooks/ProdLinkHook';
import ProductCard from './ProductCard';
import ProductCardContentLoader from '../../../components/ContentLoader/ProductCardContentLoader';
import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';

const SuggestedProducts = () => {
  const prodLinkId = parseInt(getProdLinkId(), 10);
  // console.log(prodLinkId);
  return (
    <Query query={GET_SUGGESTED_PRODUCTS} variables={{ prodLinkId }}>
      {({ data, loading, error }) => {
        if (loading) {
          return <ProductCardContentLoader />;
        }
        if (error) return null;
        const { prodLink } = data;
        const suggestedProducts =
          prodLink && prodLink.suggestedProducts && prodLink.suggestedProducts;
        console.log(suggestedProducts);
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
