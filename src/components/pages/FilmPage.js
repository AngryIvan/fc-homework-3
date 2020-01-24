import React from 'react';
import styles from './FilmPage.module.css'
import FilmSearchButton from '../film/FilmSearchButton';
import Logo from '../utils/Logo'
import FilmHeader from '../film/FilmHeader';
import FilmsByGenre from '../film/FilmsByGenre';
import { getFilmData, performSearch } from '../../store/actions';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';


class FilmPage extends React.Component {
  async componentDidMount() {
    await this.props.getFilmData(this.props.match.params.id);
    if (this.props.film && this.props.film.genres) this.props.performSearch(this.props.film.genres[0], 'genres');
  }

  render() {
    if (this.props.film) {
      return (
        <>
          <header className={styles.filmHeader}>
            <section className={styles.navBar}>
              <Logo />
              <FilmSearchButton />
            </section>
            <FilmHeader film={this.props.film} />
          </header>
          <FilmsByGenre genre={this.props.film.genres} films={this.props.filmsByGenre} />
          <footer>
            <Logo />
          </footer>
        </>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  film: state.currentFilm,
  filmsByGenre: state.films
})

const mapDispatchToProps = {
  getFilmData,
  performSearch
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmPage));