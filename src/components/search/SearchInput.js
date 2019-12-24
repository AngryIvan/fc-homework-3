import React from 'react';
import styles from './Search.module.css'

const SearchInput = () => {
  return (
   <input type="text" placeholder="Search" className={styles.searchInput}/>
  );
}

export default SearchInput;