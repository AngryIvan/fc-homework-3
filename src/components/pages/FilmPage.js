import React from 'react';
import styles from './FilmPage.module.css'
import { FilmSearchButton } from '../film/FilmSearchButton';
import { Logo } from '../utils/Logo'
import { FilmHeader } from '../film/FilmHeader';
import { FilmsByGenre } from '../film/FilmsByGenre';


export class FilmPage extends React.Component {
  render() {
    return (
     <>
      <header className={styles.filmHeader}>
        <section className={styles.navBar}>
          <Logo></Logo>
          <FilmSearchButton></FilmSearchButton>
        </section>
        <FilmHeader></FilmHeader>
      </header>
      <FilmsByGenre></FilmsByGenre>
      <footer>
        <Logo></Logo>
      </footer>
     </>
    );
  }
}