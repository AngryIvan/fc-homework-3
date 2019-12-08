import React from 'react';
import { SearchBlock } from '../search/SearchBlock';

export class MainPage extends React.Component {
  render() {
    return (
     <>
      <header>
        <SearchBlock></SearchBlock>
      </header>
      <footer>
        I am footer
      </footer>
     </>
    );
  }
}