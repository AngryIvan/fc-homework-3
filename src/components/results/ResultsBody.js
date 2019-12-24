import React from 'react';
import Item from '../item/Item';
import styles from './Results.module.css';

const ResultsBody = (props) => {
  return (
    <div className={styles.resultsBody}>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}

export default ResultsBody;