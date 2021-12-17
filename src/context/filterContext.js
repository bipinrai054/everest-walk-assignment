import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filterReducer';
import { useProductsContext } from './productsContext';
import { FILTER_PRODUCTS, LOAD_PRODUCTS } from '../actions';

const initialState = {
  filtered_products: [],
  all_products: [],
  filters: {
    category: 'all',
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
