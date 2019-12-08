import React from 'react';
import { FilmsList } from './FilmList';


export const FilmsByGenre = (props) => {
  return (
   <>
    <section>
     <h2>Films by {props.genre} genre</h2>
    </section>
    <FilmsList></FilmsList>
   </>
  );
}