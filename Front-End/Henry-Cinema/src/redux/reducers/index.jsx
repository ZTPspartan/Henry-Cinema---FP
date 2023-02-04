import { GET_MOVIES } from "../actions";

const initialState = {
  movieId: [],
  movies: [],
  allMovies: [],
  searchMovies: [],// No Modificar esto sirve para el componente search
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
        searchMovies: action.payload
      };
    }
    case "AGE_CLASSIFICATION":
      const allM = state.allMovies;
      const age_classification = allM.filter(
        (data) => data.classification === payload
      );
      return {
        ...state,
        movies: age_classification,
      };
    case "GET_MOVIE_ID":
      return {
        ...state,
        movieId: action.payload,
      };

    case "SEARCH_MOVIE":
      const searchMoviesBar= state.searchMovies
      const searchMoviesFound=  searchMoviesBar.filter(m =>{
        return m.title.toLowerCase().includes(action.payload.toLowerCase())
      })  
      return{
        ...state,
        movies: searchMoviesFound
      }  
    default:
      return state;
  }
};

export default rootReducer;
