import React from 'react';
import styles from './FilmPage.module.css'
import FilmSearchButton from '../film/FilmSearchButton';
import Logo from '../utils/Logo'
import FilmHeader from '../film/FilmHeader';
import FilmsByGenre from '../film/FilmsByGenre';
import { getFilmData } from '../../store/actions';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';


class FilmPage extends React.Component {
  componentDidMount() {
    this.props.getFilmData(this.props.match.params.id);
  }

  render() {
    return (
     <>
      <header className={styles.filmHeader}>
        <section className={styles.navBar}>
          <Logo></Logo>
          <FilmSearchButton></FilmSearchButton>
        </section>
        <FilmHeader film={this.props.film}></FilmHeader>
      </header>
      <FilmsByGenre></FilmsByGenre>
      <footer>
        <Logo></Logo>
      </footer>
     </>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.currentFilm
})

const mapDispatchToProps = {
  getFilmData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmPage));