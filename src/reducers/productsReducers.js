import { GET_PRODUCTS_SUCCESS } from '../actions';

const products_reducers = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
  // throw new Error(`No matching "${action.type}" - action type `);
};

export default products_reducers;
