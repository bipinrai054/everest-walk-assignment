import styled from 'styled-components';

import { useProductsContext } from '../context/productsContext';
import SingleProduct from './SingleProduct';
import Image from '../components/Image';

const ProductsContainer = () => {
  const { products } = useProductsContext();
  return (
    <Wrapper>
      <div className='products-view'>
        {products.map((product, index) => {
          return (
            <div>
              <Image />
              <SingleProduct key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products-view {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5em;
  }
`;

export default ProductsContainer;
