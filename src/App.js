import './App.css';
import styled from 'styled-components';

// components import
import Filters from './components/Filters';
import ProductsContainer from './components/ProductsContainer';

const App = () => {
  return (
    <Wrapper>
      <div className='main-container'>
        <div className='navbar'>
          <div class='logo'>
            <img src='https://www.everestwalk.com/static/media/5.99c83661.png' />
          </div>
          <h2 className='cart-icon'>
            Cart <i className='fas fa-shopping-cart' />
          </h2>
          <div className='cart-item-number'>2</div>
        </div>
        <div className='hero'>
          <div className='filter'>
            <Filters />
          </div>
          <div className='products'>
            <ProductsContainer />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 3em;
  }
  .cart-item-number {
    position: relative;
    bottom: 14px;
    right: 291px;
    background-color: #f2aa4cff;
    width: 16px;
    height: 20px;
    text-align: center;
  }
  .hero {
    display: flex;
    justify-content: center;
    gap: 7em;
  }
`;

export default App;
