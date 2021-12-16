import { GET_PRODUCTS_SUCCESS } from '../../actions';

const products_reducers = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  }
};

export default products_reducers;
