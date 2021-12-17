import styled from 'styled-components';

const Button = ({ children }) => {
  return (
    <Wrapper>
      <div className='global-btn'></div>
      <button className='btn'>{children}</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    border-radius: 30px;
    font-size: 20px;
    background: #f2aa4cff;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .btn:hover {
    background: #f2aa4cc3;
  }
`;

export default Button;
