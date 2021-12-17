import styled from 'styled-components';

import { useProductsContext } from '../context/productsContext';
import SingleProduct from './SingleProduct';

const ProductsContainer = () => {
  const { products } = useProductsContext();
  return (
    <Wrapper>
      <div className='products-view'>
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products-view {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default ProductsContainer;
