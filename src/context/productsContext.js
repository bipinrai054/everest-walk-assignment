import React from 'react';
import axios from 'axios';
import { products_url as url } from '../utils/constants';

const ProductsContext = React.createContext();

const ProductsProvider = () => {
  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return <></>;
};

export default ProductsProvider;
