import React from 'react';
// import styles from './MainPage.module.css'
import { Search } from '../search/Search';
import { Results } from '../results/Results';
import { Logo } from '../utils/Logo';

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