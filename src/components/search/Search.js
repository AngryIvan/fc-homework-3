import React from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.css'
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchFilter from './SearchFilter';

class Search extends React.Component {
  render() {
    return (
      <div className={styles.searchContainer}>
        <h1>Find your movie</h1>
        <section className={styles.searchForm}>
          <SearchInput className={styles.searchInput} />
          <SearchButton className={styles.searchButton} />
        </section>
        <SearchFilter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state,
})

export default connect(mapStateToProps, null)(Search);