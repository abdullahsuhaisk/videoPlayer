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
    inStock: true
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
    inStock: false
  }
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
