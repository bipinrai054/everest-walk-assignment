import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/productsReducers';
import { products_url as url } from '../utils/constants';
import axios from 'axios';
import { GET_PRODUCTS_SUCCESS } from '../actions';

const initialState = {
  products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProdducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data.data.product;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProdducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
