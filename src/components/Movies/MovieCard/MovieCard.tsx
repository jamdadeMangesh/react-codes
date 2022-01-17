import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMovieDetailsId } from "../../../features/ReduxMovies/MovieSlice/MovieSlice";
import "./MovieCard.scss";

export const MovieCard = (props: any) => {
    const { data } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirectToMovieDetails= (movieId: any) => {
        dispatch(setMovieDetailsId(movieId));
        navigate("/movie-details");
    }
    return (
        <>
        <div className="col-sm col-lg-3 col-md-6">
            <div className="movie-list" onClick={() => redirectToMovieDetails(data.imdbID)}>
                <div className="movie-image">
                    <img src={data.Poster} alt={data.Title} className="img-fluid" />
                </div>   
                <div className="movie-info">
                    <div className="movie-title pb-1">
                        {data.Title}
                    </div>
                    <div className="movie-year">
                        {data.Year}
                    </div>
                </div> 
            </div>
        </div>
    </>
    )
}
