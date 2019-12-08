import React from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { SearchFilter } from './SearchFilter';

export class Search extends React.Component {
  render() {
    return (
     <>
      <h1>Find your movie</h1>
      <section>
       <SearchInput></SearchInput>
       <SearchButton></SearchButton>
      </section>
      <SearchFilter></SearchFilter>
     </>
    );
  }
}