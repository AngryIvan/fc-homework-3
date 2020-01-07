import React from 'react';
import { Button } from 'antd';

const SearchButton = ({history}) => {
  
  return (
    <Button type="primary" size="large" onClick={() => console.log(history)}>SEARCH</Button>
  );
}

export default SearchButton;