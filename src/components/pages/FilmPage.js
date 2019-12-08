import React from 'react';
import { FilmSearchButton } from '../film/FilmSearchButton';
import { Logo } from '../utils/Logo'
import { FilmCover } from '../film/FilmCover';
import { FilmTitle } from '../film/FilmTitle';
import { FilmRating } from '../film/FilmRating';
import { FilmInfo } from '../film/FilmInfo';
import { FilmDescription } from '../film/FilmDescription';
import { FilmsByGenre } from '../film/FilmsByGenre';


export class FilmPage extends React.Component {
  render() {
    return (
     <>
      <header>
        <section>
          <Logo></Logo>
          <FilmSearchButton></FilmSearchButton>
        </section>
        <FilmCover></FilmCover>
        <FilmTitle></FilmTitle>
        <FilmRating></FilmRating>
        <FilmInfo></FilmInfo>
        <FilmDescription></FilmDescription>
      </header>
      <FilmsByGenre></FilmsByGenre>
      <footer>
        <Logo></Logo>
      </footer>
     </>
    );
  }
}