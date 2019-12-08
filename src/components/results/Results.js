import React from 'react';
import { ResultsBody } from './ResultsBody'
import { ResultsCount } from './ResultsCount';
import { ResultsSort } from './ResultsSort';

export class Results extends React.Component {
  render() {
    return (
     <>
      <section>
       <ResultsCount count={7}></ResultsCount>
       <ResultsSort></ResultsSort>
      </section>
      <ResultsBody>
      </ResultsBody>
     </>
    );
  }
}