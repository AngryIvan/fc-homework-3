import React from 'react';
import styles from './Film.module.css'

import FilmHeader from './FilmHeader';
import FilmDescription from './FilmDescription';
import FilmRating from './FilmRating';
import FilmInfo from './FilmInfo';
import FilmTitle from './FilmTitle';
import FilmSearchButton from './FilmSearchButton';
import FilmCover from './FilmCover';
import FilmList from './FilmList';
import FilmsByGenre from './FilmsByGenre';

import { Icon } from 'antd';
import { Link } from 'react-router-dom';


import { shallow } from 'enzyme';

const mockFilm = {
    title: "Captain America: Civil War",
    rating: 7.2,
    release_date: "2016-04-27",
    runtime: 152,
    poster: "path",
    description: "Following the events of Age of Ultron",
    genres: ["Adventure", "Action", "Science Fiction"],
}

const mockFilmList = [
    {
        title: "Captain America: Civil War",
        rating: 7.2,
        release_date: "2016-04-27",
        runtime: 152,
        poster: "path",
        description: "Following the events of Age of Ultron",
        genres: ["Adventure", "Action", "Science Fiction"],
    }
]

test('renders without crashing', () => {
  shallow(<FilmHeader />)
});

test('renders description', () => {
    const wrapper = shallow(<FilmDescription description={mockFilm.description}/>);
    const desc = <p>Following the events of Age of Ultron</p>;
    expect(wrapper.contains(desc)).toEqual(true);
});

test('renders rating', () => {
    const wrapper = shallow(<FilmRating rating={mockFilm.rating}/>);
    const rating = <div className={styles.rating}>{mockFilm.rating}</div>
    expect(wrapper.contains(rating)).toEqual(true);
});

test('renders title', () => {
    const wrapper = shallow(<FilmTitle title={mockFilm.title}/>);
    const title = <h1 style={{display: "inline"}}>{mockFilm.title} </h1>
    expect(wrapper.contains(title)).toEqual(true);
});

test('renders cover', () => {
    const wrapper = shallow(<FilmCover cover={mockFilm.poster}/>);
    const cover = <img src={mockFilm.poster} alt="cover" className={styles.filmPoster}/>
    expect(wrapper.contains(cover)).toEqual(true);
});

test('renders search button', () => {
    const wrapper = shallow(<FilmSearchButton />);
    const button = <Link to="/">
                    <Icon type="search" className={styles.searchIcon}/>
                   </Link>
    expect(wrapper.contains(button)).toEqual(true);
});

test('renders info', () => {
    const {release_date, runtime} = mockFilm;
    const wrapper = shallow(<FilmInfo info={{release_date, runtime}}/>);
    const p = <p className={styles.info}>
                <span>{release_date && release_date.slice(0,4)}</span> year    
                <span>{runtime}</span> min
              </p>;
    expect(wrapper.contains(p)).toEqual(true);
});

test('renders films by genre label', () => {
    const wrapper = shallow(<FilmsByGenre genre={mockFilm.genres} films={mockFilmList} />);
    const genreLabel = <section className={styles.filmsByGenre}>
                    <span>Films by {mockFilm.genres && mockFilm.genres[0]} genre</span>
                  </section>
    expect(wrapper.contains(genreLabel)).toEqual(true);
});

test('renders films by genre list', () => {
    const wrapper = shallow(<FilmsByGenre genre={mockFilm.genres} films={mockFilmList} />);
    const filmList = <FilmList films={mockFilmList && mockFilmList}/>
    expect(wrapper.contains(filmList)).toEqual(true);
});

test('renders film header', () => {
    const wrapper = shallow(<FilmHeader film={mockFilm}/>);
    const {poster_path, title, vote_average, release_date, overview, runtime} = mockFilm;
    const filmHeader = <div className={styles.filmHeader}>
                    <FilmCover cover={poster_path} />
                    <div className={styles.infoBlock}>
                        <FilmTitle title={title} />
                        <FilmRating rating={vote_average} />
                        <FilmInfo info={{release_date, runtime}} />
                        <FilmDescription description={overview} />
                    </div>
                 </div>
    expect(wrapper.contains(filmHeader)).toEqual(true);
});