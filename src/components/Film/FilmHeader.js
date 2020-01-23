import React from 'react';
import styles from './Film.module.css'
import FilmCover from './FilmCover';
import FilmTitle from './FilmTitle';
import FilmRating from './FilmRating';
import FilmInfo from './FilmInfo';
import FilmDescription from './FilmDescription';


// title: "Star Wars: The Last Jedi"
// tagline: "The Saga Continues"
// vote_average: 7.1
// vote_count: 4732
// release_date: "2017-12-13"
// poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"
// overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."
// budget: 200000000
// revenue: 1325937250
// genres: (3) ["Fantasy", "Adventure", "Science Fiction"]
// runtime: 152

const FilmHeader = ({film}) => {
  console.log(film)
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