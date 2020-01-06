import React from 'react';
import Item from '../item/Item';
import styles from './Results.module.css';
import uuid from 'uuid';

const ResultsBody = ({results}) => {
  return (
    <div className={styles.resultsBody}>
      {results.map((film) => <Item film={film} key={uuid.v4()} />)}
    </div>
  );
}


export default ResultsBody;