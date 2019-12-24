import React from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.css'
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchFilter from './SearchFilter';
import { switchSearchBy } from '../../store/actions'

class Search extends React.Component {
  render() {
    return (
     <div className={styles.searchContainer}>
      <h1>Find your movie</h1>
      <section className={styles.searchForm}>
       <SearchInput className={styles.searchInput} />
       <SearchButton className={styles.searchButton} />
      </section>
      <SearchFilter switch1={switchSearchBy} />
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state,
})

const mapDispatchToProps = {
  switchSearchBy
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);