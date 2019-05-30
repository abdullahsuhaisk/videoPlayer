import { actionTypes } from './productActions';

const initialProductState = {
  'product-1': {
    name: 'Turtleneck Sweater',
    brand: 'Valentino',
    assets: {
      images: ['/images/tshirt.jpg']
    },
    currentcy: '$',
    price: 0,
    discountRate: 0,
    currentPrice: 74.98,
    inStock: true,
    in: 0,
    out: 65.3
  },
  'product-2': {
    name: 'Women Red Classes',
    brand: 'Pierre Cardin',
    assets: {
      images: ['/images/tshirt.jpg']
    },
    price: 250.0,
    discountRate: 50,
    currentPrice: 125.0,
    inStock: true,
    in: 98.2,
    out: 186.4
  }
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
