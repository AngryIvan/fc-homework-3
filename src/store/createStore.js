import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const filmsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_MOVIES_SUCCESS':
            return Object.assign({}, state, {
                films: action.arrOfMovies.data
            });
        case 'SWITCH_SEARCH_BY':
            return Object.assign({}, state, {
                searchBy: action.searchBy,
            });
        case 'LOAD_FILM_SUCCESS':
            console.log('load film success')
            return Object.assign({}, state, {
                currentFilm: action.film,
            });
        default:
            return state;
    }
}

const initialState = {
    films: [],
    currentFilm: {},
    searchBy: 'title',
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(filmsReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
