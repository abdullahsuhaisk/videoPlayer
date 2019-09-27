import React from 'react';
import ShoppingCartWithoutLoginContainer from './ShoppingCartWithoutLoginContainer';
import ShoppingCartScreen from './ShoppingCartScreen';
import ScreenChoserQuery from '../../components/HOCS/Grapqhl/ScreenChoserQuery';

const ShoppingCartCotainer = ({ withLogin, data, client }) => {
  const boolean = withLogin === 'true' ? true : false;
  const { isShoppingCartShowing } = data;
  if (boolean === false && isShoppingCartShowing === true) {
    return <ShoppingCartWithoutLoginContainer client={client} />;
  }
  // @TODO: Below section Needs a refactor
  if (boolean === true) {
    return <ShoppingCartScreen />;
  }
  console.log('Something in worong on ShoppingCartCotainer');
  return null;
  // return <ShoppingCartWithoutLoginContainer />;
};

export default ScreenChoserQuery(ShoppingCartCotainer);
