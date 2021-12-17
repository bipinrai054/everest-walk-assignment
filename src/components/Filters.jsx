import styled from 'styled-components';

const Filters = () => {
  return (
    <Wrapper>
      <div className='filters'>
        <div className='price'>
          <h4>Price</h4>
          <p>$140</p>
          <input type='range' />
        </div>
        <div className='category'>
          <h4>Category</h4>
          <select>
            <option>all</option>
            <option>laptop</option>
            <option>elcetronics</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .filters {
    display: grid;
    gap: 2em;
  }
  .cateogry {
    margin-top: 4em;
  }
`;

export default Filters;
