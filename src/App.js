import './App.css';

// components import
import Filters from './components/Filters';
import ProductsContainer from './components/ProductsContainer';

const App = () => {
  return (
    <div className='App'>
      <div className='main-container'>
        <div className='filter'>
          <Filters />
        </div>
        <div className='products'>
          <ProductsContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
