import styled from 'styled-components';
import Button from './Button';
import { getUniqueValues } from '../utils/helpers';
import { useFilterContext } from '../context/filterContext';

const Filters = () => {
  const { all_products } = useFilterContext();
  const categories = getUniqueValues(all_products, 'category');
  console.log(categories);
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
            <option>keyboard</option>
            <option>watch</option>
            <option>mobile</option>
            <option>headset</option>
          </select>
        </div>
        <div className='clear-btn'>
          <Button>Clear Filters</Button>
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
