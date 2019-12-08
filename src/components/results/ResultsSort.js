import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export const ResultsSort = (props) => {
  return (
    <div>
      <span>SORT BY </span>
      <ButtonGroup>
        <Button>RELEASE DATE</Button>
        <Button>RATING</Button>
      </ButtonGroup>
    </div>
  );
}