import { createStore, applyMiddleware } from 'redux';
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
                    searchBy: action.searchBy
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

export const store = createStore(filmsReducer, initialState, applyMiddleware(thunk));
