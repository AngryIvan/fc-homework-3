import React from 'react';
import styles from './Film.module.css';
import FilmsList from './FilmList';


const FilmsByGenre = (props) => {
  return (
   <>
    <section className={styles.filmsByGenre}>
     <span>Films by Action genre</span>
    </section>
    <FilmsList></FilmsList>
   </>
  );
}

export default FilmsByGenre;