import React from 'react';
import Item from '../item/Item';
import styles from './Results.module.css';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const ResultsBody = ({results}) => {
  return (
    <div className={styles.resultsBody}>
      {results.map((film) => 
        <Link to={`/film/${film.id}`} key={uuid.v4()}>
          <Item film={film} />
        </Link>)}
    </div>
  );
}


export default ResultsBody;