import React from 'react';
import Item from '../item/Item';
import styles from './Film.module.css';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const FilmsList = ({films}) => {
  return (
    <div className={styles.resultsBody}>
      {films.map((film) => 
        <Link to={`/film/${film.id}`} key={uuid.v4()}>
          <Item film={film} />
        </Link>)}
    </div>
  );
}

export default FilmsList;