import React from 'react';
import styles from './Film.module.css';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

export const FilmSearchButton = (props) => {
  return (
    <Link to="/">
      <Icon type="search" className={styles.searchIcon}/>
    </Link>
  );
}