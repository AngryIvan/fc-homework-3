import React from 'react';
import styles from './Results.module.css'
import ResultsBody from './ResultsBody'
import ResultsCount from './ResultsCount';
import ResultsSort from './ResultsSort';
import { connect } from 'react-redux';
import EmptyBody from './EmptyBody';

class Results extends React.Component {
  render() {
    console.log(this.props.films)
    return (
     <>
      <section className={styles.countSortPane}>
       <ResultsCount count={this.props.films.length}></ResultsCount>
       <ResultsSort className={styles.sortBy}></ResultsSort>
      </section>
      {this.props.films.length 
        ? <ResultsBody results={this.props.films} className={styles.resultsBody} />
        : <EmptyBody />}
     </>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
})

export default connect(mapStateToProps)(Results);