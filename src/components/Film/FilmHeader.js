import React from 'react';
import styles from './Film.module.css'
import { FilmCover } from './FilmCover';
import { FilmTitle } from './FilmTitle';
import { FilmRating } from './FilmRating';
import { FilmInfo } from './FilmInfo';
import { FilmDescription } from './FilmDescription';

export const FilmHeader = (props) => {
  return (
    <div className={styles.filmHeader}>
        <FilmCover></FilmCover>
        <div className={styles.infoBlock}>
            <FilmTitle></FilmTitle>
            <FilmRating></FilmRating>
            <FilmInfo></FilmInfo>
            <FilmDescription></FilmDescription>
        </div>
    </div>
  );
}