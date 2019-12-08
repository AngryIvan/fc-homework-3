import React from 'react';

export const FilmInfo = (props) => {
  return (
   <p><span>{props.year}</span> year <span>{props.time}</span> min</p>
  );
}