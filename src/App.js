import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { MainPage } from './components/pages/MainPage';
import { FilmPage } from './components/pages/FilmPage';

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path="/film" component={(props) => <FilmPage {...props}/>} />
        <Route exact path="/" component={(props) => <MainPage {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
