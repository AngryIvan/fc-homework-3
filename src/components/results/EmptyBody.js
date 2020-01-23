import React from 'react';
import styles from './Results.module.css';

const EmptyBody = () => {
  return (
    <div className={styles.emptyResultsBody}>
      <h1>No results</h1>
    </div>
  );
}


export default EmptyBody;