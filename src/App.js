import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { products_url as url } from './utils/constants';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios.get(url);
    const products = response.data.data.product;
    setProducts(products);
  }, []);

  return (
    <div className='App'>
      {products.map((product) => {
        return (
          <div>
            {product.name} {product.id} {product.stock} {product.price}
          </div>
        );
      })}
    </div>
  );
}

export default App;
