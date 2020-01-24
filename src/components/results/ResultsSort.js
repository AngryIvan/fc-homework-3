import React from "react";
import { Button } from "antd";
import { connect } from 'react-redux';
import { switchSortByAction } from '../../store/actions';

const ButtonGroup = Button.Group;

const ResultsSort = ({switchSortBy}) => {
  const options = ["RELEASE DATE", "RATING"];
  return (
    <div>
      <span>SORT BY </span>
      <ButtonGroup>
        {options.map(filterName => (
          <Button 
            key={filterName} 
            onClick={() => switchSortBy(filterName)}>{filterName}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

const mapDispatchToProps = {
  switchSortBy: switchSortByAction,
}

export default connect(null, mapDispatchToProps)(ResultsSort);