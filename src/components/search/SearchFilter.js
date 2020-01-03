import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { switchSearchBy } from '../../store/actions';

const ButtonGroup = Button.Group;

const SearchFilter = ({ switchSearchBy }) => {
  const options = ['TITLE', 'GENRE'];

  return (
    <>
      <span>SEARCH BY </span>
      <ButtonGroup>
        {options.map((filterName) =>
          <Button
            key={filterName}
            onClick={() => switchSearchBy(filterName)}>{filterName}
          </Button>)
        }
      </ButtonGroup>
    </>
  );
}

const mapDispatchToProps = {
  switchSearchBy,
}

export default connect(null, mapDispatchToProps)(SearchFilter);