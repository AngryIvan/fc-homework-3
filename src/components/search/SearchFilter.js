import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

const SearchFilter = ({switch1}) => {
  const switchBy = (event) => { switch1(event.target.children[0].innerText.toLowerCase())};
  
  return (
    <>
      <span>SEARCH BY </span>
      <ButtonGroup>
        <Button onClick={switchBy}>TITLE</Button>
        <Button onClick={switchBy}>GENRE</Button>
      </ButtonGroup>
    </>
  );
}

export default SearchFilter;
