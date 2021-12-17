import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from './context/productsContext';
import { FilterProvider } from './context/filterContext';

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById('root'),
);
