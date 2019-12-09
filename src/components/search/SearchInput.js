import React from 'react';
import styles from './Search.module.css'

export const SearchInput = () => {
  return (
   <input type="text" placeholder="Search" className={styles.searchInput}/>
  );
}