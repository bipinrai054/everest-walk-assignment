import React from 'react';
import axios from 'axios';
import { products_url as url } from '../utils/constants';
import { GET_PRODUCTS_SUCCESS } from '../../actions';

const initialState = {
  products: [],
};

const ProductsContext = React.createContext();

const ProductsProvider = () => {
  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data.data.product;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
