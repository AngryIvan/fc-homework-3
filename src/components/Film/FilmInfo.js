import React from 'react';
import styles from './Film.module.css';

export const FilmInfo = (props) => {
  return (
   <p className={styles.info}><span>1994</span> year <span>205</span> min</p>
  );
}