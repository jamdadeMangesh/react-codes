import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    selectedMovieDetails: []
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
        removeMovieDetails: (state) => {
            state.selectedMovieDetails = [];
        }
    },
})

export const {addMovies, movieDetails, removeMovieDetails} = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movies; 
export const getMovieDetails = (state: any) => state.movies.selectedMovieDetails; 
export default movieSlice.reducer;