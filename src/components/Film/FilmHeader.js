import React from 'react';
import styles from './Film.module.css'
import { FilmCover } from '../film/FilmCover';
import { FilmTitle } from '../film/FilmTitle';
import { FilmRating } from '../film/FilmRating';
import { FilmInfo } from '../film/FilmInfo';
import { FilmDescription } from '../film/FilmDescription';

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