import React from 'react';
import styles from './Item.module.css';
import ItemImage from './ItemImage';
import ItemTitle from './ItemTitle';
import ItemDate from './ItemDate';
import ItemGenre from './ItemGenre';

export default class Item extends React.Component {
  render() {
    if (this.props.film) {
      console.log(this.props.film)
      const {poster_path, genres, release_date, title} = this.props.film;
      return (
          <div className={styles.itemCard}>
            <ItemImage className={styles.poster} poster={poster_path} />
            <section className={styles.itemDate}>
            <ItemTitle title={title} />
            <ItemDate releaseDate={release_date} />
            </section>
            <ItemGenre genres={genres} />
          </div>
      );
    }
    return null;
  }
}