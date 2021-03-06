import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/createStore';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from './components/pages/MainPage';
import FilmPage from './components/pages/FilmPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router> 
        <Switch>
          <Route path="/film/:id" component={(props) => <FilmPage {...props}/>} />
          <Route path="/search/:query" component={(props) => <MainPage {...props}/>} />
          <Route exact path="/" component={(props) => <MainPage {...props}/>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

