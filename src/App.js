import './App.css';
import styled from 'styled-components';

// components import
import Filters from './components/Filters';
import ProductsContainer from './components/ProductsContainer';

const App = () => {
  return (
    <Wrapper>
      <div className='main-container'>
        <div className='logo'>
          <img src='https://www.everestwalk.com/static/media/5.99c83661.png' />
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
  * {
    background-color: #36454f;
  }

  .logo {
    text-align: center;
    margin: 3em;
  }
  .hero {
    display: flex;
    justify-content: center;
    gap: 20em;
  }
`;

export default App;
