import React from 'react';
import './App.css';
import { MainPage } from './components/pages/MainPage';
import { FilmPage } from './components/pages/FilmPage';

function App() {
  return (
    <> 
      <MainPage></MainPage>
    </>
  //   <Switch>
  //   <Route exact path="/" component={HomePage} />
  //   <Route path={`/episodes/:id`} component={EpisodePage} />
  //   <Route component={NotFoundPage} />
  // </Switch>
  );
}

export default App;
