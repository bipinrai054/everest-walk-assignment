import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const SingleProduct = ({ product }) => {
  return (
    <Wrapper>
      <div className='single-product'>
        <div className='name-and-price'>
          <div className='name'>{product.name}</div>
          <div className='color'>{product.price}</div>
        </div>
        <div className='stock'>
          <label>Stock</label>
          <div className='color'>{product.stock}</div>
        </div>
        <div className='category'>
          <label>Category</label>
          <div className='color'>{product.category}</div>
        </div>
        <div className='button'>
          <Button>Add to cart</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .single-product {
    margin: 2em auto;
    display: grid;
    gap: 0.5em;
  }
  .name-and-price {
    display: flex;
    justify-content: space-between;
  }
  .stock {
    display: flex;
    justify-content: space-between;
  }
  .category {
    display: flex;
    justify-content: space-between;
  }
  .color {
    color: #f2aa4cff;
  }
  .button {
    margin-top: 2em;
    text-align: center;
  }
`;

export default SingleProduct;
