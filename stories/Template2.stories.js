import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductDetail from './VideoPause/Template2/Components/ProductDetail/ProductDetail'
import AddToWishlist from './VideoPause/Template2/Components/AddToWishlist/AddToWishlist'
import Comments from './VideoPause/Template2/Components/Comments/Comments'
import CommentsTwo from './VideoPause/Template2/Components/Comments2/Comments'
import SecondTmplateWrapper from './VideoPause/Template2/Wrapper'

const SecondTemplateDecorator = (storyFn) => <SecondTmplateWrapper>{storyFn()}</SecondTmplateWrapper>;

storiesOf('Template 2', module)
  .addDecorator(SecondTemplateDecorator)
  .add('Product Detail', () => <ProductDetail />)
  .add('Comments', () => <Comments />)
  .add('Comments 2', () => <CommentsTwo />)
  .add('Add To Wishlist', () => <AddToWishlist />);


