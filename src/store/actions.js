const ACTIONS  = {
	LOAD_MOVIES_SUCCESS: 'LOAD_MOVIES_SUCCESS',
	LOAD_FILM_SUCCESS: 'LOAD_FILM_SUCCESS',
	GET_ALL_MOVIES: 'GET_ALL_MOVIES',
	SWITCH_SEARCH_BY: 'SWITCH_SEARCH_BY',
	SWITCH_SORT_BY: 'SWITCH_SORT_BY',
	PERFORM_SEARCH: 'PERFORM_SEARCH'
};

const API_URL = 'http://reactjs-cdp-api.herokuapp.com';

const loadMoviesSuccessAction = arrOfMovies => ({
	type: ACTIONS.LOAD_MOVIES_SUCCESS,
	arrOfMovies,
});

const loadFilmSuccessAction = film => ({
	type: ACTIONS.LOAD_FILM_SUCCESS,
	film,
});

export const switchSearchByAction = searchBy => ({
	type: ACTIONS.SWITCH_SEARCH_BY,
	searchBy,
});

export const switchSortByAction = sortBy => ({
	type: ACTIONS.SWITCH_SORT_BY,
	sortBy,
});

export const performSearchAction = (searchType, query) => ({
	type: ACTIONS.PERFORM_SEARCH,
	searchType, 
	query
});

export const performSearchSuccessAction = (arrOfMovies) => ({
	type: ACTIONS.PERFORM_SEARCH,
	arrOfMovies,
});

export const switchSearchby = (searchBy) => (dispatch) => {
	console.log(ACTIONS.SWITCH_SEARCH_BY);
	return dispatch(switchSearchByAction(searchBy));
}

export const switchSortBy = (sortBy) => (dispatch) => {
	console.log(ACTIONS.SWITCH_SORT_BY);
	return dispatch(switchSortByAction(sortBy));
}

export const performSearch = (query, searchType) => {
	console.log('perform search')
	return dispatch => fetch(`${API_URL}/movies?search=${query}&searchBy=${searchType}`)
		.then(response => response.json())
		.then((arrOfMovies) => dispatch(loadMoviesSuccessAction(arrOfMovies)))
		.catch((error) => {	console.log(error)});
};

export const getFilmData = (film) => {
	console.log('get film data')
	return dispatch => fetch(`${API_URL}/movies/${film}`)
		.then(response => response.json())
		.then((arrOfMovies) => dispatch(loadFilmSuccessAction(arrOfMovies)))
		.catch((error) => {	console.log(error)});
};
