import React from 'react';
import styled from 'styled-components';

const SingleProduct = ({ product }) => {
  return (
    <Wrapper>
      <div className='single-product'>
        <div className='product-name'>{product.name}</div>
        <div className='price'>{product.price}</div>
        <div className='stock'>{product.stock}</div>
        <div className='category'>{product.category}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* .single-product {
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`;

export default SingleProduct;
