import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const filmsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_MOVIES_SUCCESS':
            console.log(action)
            return Object.assign({}, state, {
                films: action.arrOfMovies.data
            })
        case 'SWITCH_SEARCH_BY':
            console.log(action)
            return Object.assign({}, state, {
                search: {
                    searchResults: state.search.searchResults,
                    searchBy: action.searchBy,
                }
            })
        default:
            return state;
    }
}

const initialState = {
    films: [],
    search: {
        searchBy: 'title',
        searchResults: []
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(filmsReducer, initialState, composeEnhancer(applyMiddleware(thunk)));