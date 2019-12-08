import React from 'react';
import styles from './Item.module.css';
import { ItemImage } from './ItemImage';
import { ItemTitle } from './ItemTitle';
import { ItemDate } from './ItemDate';
import { ItemGenre } from './ItemGenre';

export default class Item extends React.Component {
  render() {
    return (
     <div className={styles.itemCard}>
      <ItemImage className={styles.poster}></ItemImage>
      <section>
       <ItemTitle></ItemTitle>
       <ItemDate></ItemDate>
      </section>
      <ItemGenre></ItemGenre>
     </div>
    );
  }
}