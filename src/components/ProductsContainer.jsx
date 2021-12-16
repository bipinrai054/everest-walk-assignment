import { useProductsContext } from '../context/productsContext';
import SingleProduct from './SingleProduct';

const ProductsContainer = () => {
  const { products } = useProductsContext();
  return (
    <div className='products-view'>
      {products.map((product) => {
        return <SingleProduct key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsContainer;
