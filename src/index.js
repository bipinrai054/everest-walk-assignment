import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from './context/productsContext';

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById('root'),
);
