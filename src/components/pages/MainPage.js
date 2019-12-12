import React from 'react';
import { Search } from '../search/Search';
import { Results } from '../results/Results';
import { Logo } from '../utils/Logo';
import ErrorBoundary from '../utils/ErrorBoundary';

export class MainPage extends React.Component {
  render() {
    return (
     <>
     <ErrorBoundary>      
       <header>
        <Logo></Logo>
        <Search></Search>
      </header>
    </ErrorBoundary>

      <Results></Results>
      <footer>
        <Logo></Logo>
      </footer>
     </>
    );
  }
}