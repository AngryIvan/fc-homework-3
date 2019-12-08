import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export const SearchFilter = (props) => {
  return (
    <>
      <span>SEARCH BY </span>
      <ButtonGroup>
        <Button>TITLE</Button>
        <Button>GENRE</Button>
      </ButtonGroup>
    </>
  );
}