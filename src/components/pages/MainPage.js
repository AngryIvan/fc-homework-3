import React from 'react';
import { connect } from 'react-redux';
import Search from '../search/Search';
import Results from '../results/Results';
import Logo from '../utils/Logo';
import { fetchAllMovies }  from '../../store/actions'
import ErrorBoundary from '../utils/ErrorBoundary';


class MainPage extends React.Component {
render() {
    return (
     <>
      <ErrorBoundary>      
        <header>
          <Logo />
          <Search />
        </header>
      </ErrorBoundary>
      <Results />
      <footer>
        <Logo />
      </footer>
     </>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
})

const mapDispatchToProps = {
  fetchAllMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);