import React from 'react';
import styles from './Film.module.css';

const FilmCover = (props) => {
  return (
    <img src="https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg" alt="cover" className={styles.filmPoster}/>
  );
}

export default FilmCover;