import React from 'react';
import styles from './Search.module.css'
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { SearchFilter } from './SearchFilter';

export class Search extends React.Component {
  render() {
    return (
     <div className={styles.searchContainer}>
      <h1>Find your movie</h1>
      <section className={styles.searchForm}>
       <SearchInput className={styles.searchInput}></SearchInput>
       <SearchButton className={styles.searchButton}></SearchButton>
      </section>
      <SearchFilter></SearchFilter>
     </div>
    );
  }
}