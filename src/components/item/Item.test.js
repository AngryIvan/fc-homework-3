import React from 'react';
import { shallow } from 'enzyme';

import Item from './Item';
import ItemDate from './ItemDate';
import ItemGenre from './ItemGenre';
import ItemImage from './ItemImage';
import ItemTitle from './ItemTitle';
import styles from './Item.module.css';

import { Tag } from 'antd';

const mockGenres = ["Action"];
const mockPosterPath = 'path';
const mockTitle = 'Title';
const mockDate = '14-10-1997';
const mockFilm = {
    poster_path: mockPosterPath, 
    genres: mockGenres, 
    release_date: mockDate, 
    title: mockTitle
}

test('renders genre', () => {
    const wrapper = shallow(<ItemGenre genres={mockGenres}/>);
    const genre = <span>{mockGenres[0]}</span>;
    expect(wrapper.contains(genre)).toEqual(true);
});

test('renders image', () => {
    const wrapper = shallow(<ItemImage poster={mockPosterPath}/>);
    const poster = <img src={mockPosterPath} alt="poster"></img>;
    expect(wrapper.contains(poster)).toEqual(true);
});

test('renders title', () => {
    const wrapper = shallow(<ItemTitle title={mockTitle}/>);
    const title = <span>{mockTitle}</span>;
    expect(wrapper.contains(title)).toEqual(true);
});

test('renders date', () => {
    const wrapper = shallow(<ItemDate releaseDate={mockDate}/>);
    const date = <Tag color="#232323">{mockDate}</Tag>;
    expect(wrapper.contains(date)).toEqual(true);
});

test('renders item', () => {
    const wrapper = shallow(<Item film={mockFilm}/>);
    const item = <div className={styles.itemCard}>
                    <ItemImage className={styles.poster} poster={mockFilm.poster_path} />
                    <section className={styles.itemDate}>
                        <ItemTitle title={mockFilm.title} />
                        <ItemDate releaseDate={mockFilm.release_date} />
                    </section>
                    <ItemGenre genres={mockFilm.genres} />
                 </div>
    expect(wrapper.contains(item)).toEqual(true);
});

test('doesnt render item if film is null', () => {
    const wrapper = shallow(<Item film={null}/>);
    expect(wrapper).toEqual({});
});
