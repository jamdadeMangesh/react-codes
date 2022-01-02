import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

export const MovieCard = (props: any) => {
    const { data } = props;
    return (
        <>
        
        <div className="col-sm col-lg-3 col-md-6">
        <Link to={`/movie/${data.imdbID}`}>
            <div className="movie-list">
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
            </Link>
        </div>
        
    </>
    )
}
