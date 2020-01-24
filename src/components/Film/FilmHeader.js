import React from 'react';
import styles from './Film.module.css'
import FilmCover from './FilmCover';
import FilmTitle from './FilmTitle';
import FilmRating from './FilmRating';
import FilmInfo from './FilmInfo';
import FilmDescription from './FilmDescription';

const FilmHeader = ({film}) => {
  if (film) {
    const {poster_path, title, vote_average, release_date, overview, runtime} = film;
    return (
      <div className={styles.filmHeader}>
          <FilmCover cover={poster_path} />
          <div className={styles.infoBlock}>
              <FilmTitle title={title} />
              <FilmRating rating={vote_average} />
              <FilmInfo info={{release_date, runtime}} />
              <FilmDescription description={overview} />
          </div>
      </div>
    );
  }

  return null;
}

export default FilmHeader;