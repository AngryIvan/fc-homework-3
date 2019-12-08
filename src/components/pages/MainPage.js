import React from 'react';
import { Search } from '../search/Search';
import { Results } from '../results/Results';
import { Logo } from '../Logo';

export class MainPage extends React.Component {
  render() {
    return (
     <>
      <header>
        <Logo></Logo>
        <Search></Search>
      </header>
      <Results></Results>
      <footer>
        <Logo></Logo>
      </footer>
     </>
    );
  }
}