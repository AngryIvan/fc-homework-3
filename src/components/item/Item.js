import React from 'react';
import { ItemImage } from './ItemImage';
import { ItemTitle } from './ItemTitle';
import { ItemDate } from './ItemDate';
import { ItemGenre } from './ItemGenre';

export default class Item extends React.Component {
  render() {
    return (
     <>
      <ItemImage></ItemImage>
      <section>
       <ItemTitle></ItemTitle>
       <ItemDate></ItemDate>
      </section>
      <ItemGenre></ItemGenre>
     </>
    );
  }
}