import { LOAD_PRODUCTS } from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    var maxPrice = action.payload.map((p) => p.stock);

    return {
      ...state,
      all_products: [...action.payload],
      filterd_products: [...action.payload],
    };
  }
};

export default filter_reducer;
