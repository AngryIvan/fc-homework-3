const ACTIONS  = {
	LOAD_MOVIES_SUCCESS: 'LOAD_MOVIES_SUCCESS',
	GET_ALL_MOVIES: 'GET_ALL_MOVIES',
	SWITCH_SEARCH_BY: 'SWITCH_SEARCH_BY',
	PERFORM_SEARCH: 'PERFORM_SEARCH'
};

const API_URL = 'http://reactjs-cdp-api.herokuapp.com';

const loadMoviesSuccessAction = arrOfMovies => ({
	type: ACTIONS.LOAD_MOVIES_SUCCESS,
	arrOfMovies,
});

export const switchSearchByAction = searchBy => ({
	type: ACTIONS.SWITCH_SEARCH_BY,
	searchBy,
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

export const performSearch = (searchType, query) => {
	console.log('perform search')
	return dispatch => fetch(`${API_URL}/movies?search=${query}&searchBy=${searchType}`)
		.then(response => response.json())
		.then((arrOfMovies) => dispatch(loadMoviesSuccessAction(arrOfMovies)))
		.catch((error) => {	console.log(error)});
};

export const fetchAllMovies = () => {
	return dispatch => fetch(`${API_URL}/movies`)
		.then(response => response.json())
		.then((arrOfMovies) => dispatch(loadMoviesSuccessAction(arrOfMovies)))
		.catch((error) => {	console.log(error)});
};