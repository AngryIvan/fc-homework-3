import React from 'react';
import styles from './Item.module.css';
import { Link } from "react-router-dom";
import ItemImage from './ItemImage';
import ItemTitle from './ItemTitle';
import ItemDate from './ItemDate';
import ItemGenre from './ItemGenre';

export default class Item extends React.Component {
  render() {
    return (
      <Link to="/film">
        <div className={styles.itemCard}>
          <ItemImage className={styles.poster}></ItemImage>
          <section className={styles.itemDate}>
          <ItemTitle></ItemTitle>
          <ItemDate></ItemDate>
          </section>
          <ItemGenre></ItemGenre>
        </div>
      </Link>
    );
  }
}