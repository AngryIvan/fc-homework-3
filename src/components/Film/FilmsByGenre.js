import React from 'react';
import styles from './Film.module.css';
import { FilmsList } from './FilmList';


export const FilmsByGenre = (props) => {
  return (
   <>
    <section className={styles.filmsByGenre}>
     <span>Films by Action genre</span>
    </section>
    <FilmsList></FilmsList>
   </>
  );
}