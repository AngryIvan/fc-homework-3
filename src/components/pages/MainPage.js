import React from 'react';
import { Search } from '../search/Search';
import { Results } from '../results/Results';

export class MainPage extends React.Component {
  render() {
    return (
     <>
      <header>
        <p><span>netlfix</span> roulette</p>
        <Search></Search>
      </header>
        <Results></Results>
      <footer>
        <p><span>netlfix</span> roulette</p>
      </footer>
     </>
    );
  }
}