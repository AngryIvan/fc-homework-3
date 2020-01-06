import React from 'react';
import styles from './Results.module.css'
import ResultsBody from './ResultsBody'
import ResultsCount from './ResultsCount';
import ResultsSort from './ResultsSort';
import { connect } from 'react-redux';

class Results extends React.Component {
  render() {
    console.log(this.props.films)
    return (
     <>
      <section className={styles.countSortPane}>
       <ResultsCount count={this.props.films.length}></ResultsCount>
       <ResultsSort className={styles.sortBy}></ResultsSort>
      </section>
      <ResultsBody results={this.props.films} className={styles.resultsBody}></ResultsBody>
     </>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
})

export default connect(mapStateToProps)(Results);