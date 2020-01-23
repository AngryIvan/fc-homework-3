import React from 'react';
import styles from './Film.module.css';

const FilmInfo = ({info}) => {
  return (
    <p className={styles.info}>
     <span>{info.release_date && info.release_date.slice(0,4)}</span> year    
     <span>{info.runtime}</span> min
    </p>
  );
}

export default FilmInfo;