import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const filmsReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_MOVIES_SUCCESS":
      return Object.assign({}, state, {
        films: action.arrOfMovies.data
      });
    case "SWITCH_SEARCH_BY":
      console.log(state.films);
      return Object.assign({}, state, {
        searchBy: action.searchBy
      });
    case "SWITCH_SORT_BY":
      if (action.sortBy === "RELEASE DATE") {
        return Object.assign({}, state, {
          films: state.films
            .slice()
            .sort((filmA, filmB) =>
              filmA.release_date > filmB.release_date
                ? 1
                : filmB.release_date > filmA.release_date
                  ? -1
                  : 0
            )
        });
      } else {
        return Object.assign({}, state, {
          films: state.films
            .slice()
            .sort((filmA, filmB) => filmA.vote_average - filmB.vote_average)
        });
      }
    case "LOAD_FILM_SUCCESS":
      console.log("load film success");
      return Object.assign({}, state, {
        currentFilm: action.film
      });
    default:
      return state;
  }
};

const initialState = {
  films: [],
  currentFilm: {},
  searchBy: "title"
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  filmsReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
