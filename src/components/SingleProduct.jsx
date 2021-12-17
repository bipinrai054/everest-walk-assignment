import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SingleProduct = ({ product }) => {
  return (
    <Wrapper>
      <div className='single-product'>{product.name}</div>;
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
