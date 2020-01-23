import React from 'react';
import styles from './Film.module.css'

const FilmRating = ({rating}) => {
  return (
    <div className={styles.rating}>{rating}</div>
  );
}

export default FilmRating;