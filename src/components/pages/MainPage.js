import React from 'react';
import { connect } from 'react-redux';
import { Search } from '../search/Search';
import { Results } from '../results/Results';
import { Logo } from '../utils/Logo';
import ErrorBoundary from '../utils/ErrorBoundary';
import { setFilms } from '../../createStore'

class MainPage extends React.Component {
  componentDidMount() {
    this.getData();
    console.log(this.props.filmsProp)
  }

  async getData() {
    return await fetch('reactjs-cdp.herokuapp.com/movies')
      .then(item => item.json())
      .then(item => this.props.setFilmsProp(item));
  }


  render() {
    console.log(this.props.filmsProp)
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

const GET_FILMS = 'GET_FILMS';
export const getFilms = () => ({
    type: GET_FILMS
});

const mapStateToProps = (state) => {
  const { films } = state;

  return { filmsProp: films }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilmsProp: (films) => dispatch(setFilms(films)),
    getFilmsProp: () => dispatch(getFilms()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);