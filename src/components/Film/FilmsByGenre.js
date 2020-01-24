import React from 'react';
import styles from './Film.module.css';
import FilmsList from './FilmList';


const FilmsByGenre = ({genre, films}) => {
  return (
   <>
    <section className={styles.filmsByGenre}>
     <span>Films by {genre && genre[0]} genre</span>
    </section>
    <FilmsList films={films && films}/>
   </>
  );
}

export default FilmsByGenre;