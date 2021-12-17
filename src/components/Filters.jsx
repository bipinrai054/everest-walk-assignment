import styled from 'styled-components';

const Filters = () => {
  return (
    <Wrapper>
      <div className='filters'>
        <div className='price'>
          <input type='range' />
        </div>
        <div className='category'>
          <select>
            <option>laptop</option>
            <option>elcetronics</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Filters;
