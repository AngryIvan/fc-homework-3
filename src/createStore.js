import { createStore } from 'redux';

export default function films(state, action) {
    switch (action.type) {
        case 'SET_FILMS':
            return [...state, action.payload];
        case 'GET_FILMS':
            return state;
        default:
            return state;
    }
}

const initialState = {
    films: [],
};

export const store = createStore(films, initialState);

const SET_FILMS = 'SET_FILMS';

export const setFilms = (films) => ({
    type: SET_FILMS,
    payload: films
});
