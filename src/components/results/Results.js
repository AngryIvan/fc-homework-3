import React from 'react';
import styles from './Results.module.css'
import ResultsBody from './ResultsBody'
import ResultsCount from './ResultsCount';
import ResultsSort from './ResultsSort';

export default class Results extends React.Component {
  render() {
    return (
     <>
      <section className={styles.countSortPane}>
       <ResultsCount count={7}></ResultsCount>
       <ResultsSort className={styles.sortBy}></ResultsSort>
      </section>
      <ResultsBody className={styles.resultsBody}></ResultsBody>
     </>
    );
  }
}