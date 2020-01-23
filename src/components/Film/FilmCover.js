import React from 'react';
import styles from './Film.module.css';

const FilmCover = ({cover}) => {
  return (
    <img src={cover} alt="cover" className={styles.filmPoster}/>
  );
}

export default FilmCover;