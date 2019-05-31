import { actionTypes } from './productActions';

const initialProductState = {
  'product-1': {
    name: 'Turtleneck Sweater',
    brand: 'Valentino',
    assets: {
      images: ['/images/products/product-1.jpg']
    },
    currency: '$',
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
      images: ['/images/products/product-2.jpg']
    },
    price: 250.0,
    discountRate: 50,
    currentPrice: 120.0,
    currency: '$',
    inStock: false,
    in: 98.2,
    out: 186.4
  },
  'product-3': {
    name: 'Turtleneck Sweater',
    brand: 'Valentino',
    assets: {
      images: ['/images/products/product-3.jpg']
    },
    currency: '$',
    price: 0,
    discountRate: 0,
    currentPrice: 72.5,
    inStock: true,
    in: 0,
    out: 65.3
  },
  'product-4': {
    name: 'Women Red Classes',
    brand: 'Pierre Cardin',
    assets: {
      images: ['/images/products/product-4.jpg']
    },
    price: 250.0,
    discountRate: 50,
    currentPrice: 125.0,
    currency: '$',
    inStock: false,
    in: 98.2,
    out: 186.4
  },
  'product-5': {
    name: 'Turtleneck Sweater',
    brand: 'Valentino',
    assets: {
      images: ['/images/products/product-5.jpg']
    },
    currency: '$',
    price: 0,
    discountRate: 0,
    currentPrice: 74.98,
    inStock: true,
    in: 0,
    out: 65.3
  }
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
