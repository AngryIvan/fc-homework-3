import React from 'react';
import Item from '../item/Item';
import styles from './Film.module.css';

export const FilmsList = (props) => {
  return (
    <div className={styles.filmsByGenre}>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}