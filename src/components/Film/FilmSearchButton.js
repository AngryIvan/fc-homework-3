import React from 'react';
import styles from './Film.module.css';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const FilmSearchButton = () => {
  return (
    <Link to="/">
      <Icon type="search" className={styles.searchIcon}/>
    </Link>
  );
}

export default FilmSearchButton;