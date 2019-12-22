import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export const SearchFilter = (props) => {
  const switchByTitle = () => props.switch('title');
  const switchByGenre = () => props.switch('genre');
  
  return (
    <>
      <span>SEARCH BY </span>
      <ButtonGroup>
        <Button onClick={switchByTitle}>TITLE</Button>
        <Button onClick={switchByGenre}>GENRE</Button>
      </ButtonGroup>
    </>
  );
}
