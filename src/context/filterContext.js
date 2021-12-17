import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filterReducer';
import { useProductsContext } from './productsContext';

const initialState = {};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
