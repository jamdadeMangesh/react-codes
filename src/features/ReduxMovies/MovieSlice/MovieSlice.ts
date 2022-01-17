import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    selectedMovieDetails: [],
    movieDetailsId: ""
}
const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        movieDetails: (state, {payload}) => {
            state.selectedMovieDetails = payload
        },
        setMovieDetailsId: (state,{payload}) => {
            state.movieDetailsId = payload;
        },
        removeMovieDetails: (state) => {
            state.selectedMovieDetails = [];
        }
    },
})

export const {addMovies, movieDetails, removeMovieDetails, setMovieDetailsId} = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movies; 
export const getMovieDetails = (state: any) => state.movies.selectedMovieDetails; 
export const getMovieDetailsId = (state: any) => state.movies.movieDetailsId;
export default movieSlice.reducer;