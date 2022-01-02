import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../../features/ReduxMovies/MovieSlice/MovieSlice';
import { MovieCard } from '../MovieCard/MovieCard';
import "./MovieListing.scss";
import { Loader } from './../../Loader/Loader';

export default function MovieListing() {
    const movies = useSelector(getAllMovies);

    return (
        <div className="movie-wrapper">
            <h5 className="movie-header">Movies</h5>
            {Object.keys(movies).length === 0 ? <Loader />  : <>
                <div className="row mt-4">
                    {movies.map((movie:any, index: number) => {
                        return(
                            <MovieCard key={index} data={movie} />
                        )
                    })}
                </div>
            </> }
        </div>
    )
}
