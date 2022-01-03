import React from 'react';
import { useParams } from "react-router";
import { useEffect } from 'react';
import MovieApi from '../../../features/ReduxMovies/api/MovieApi';
import { APIKey } from './../../../features/ReduxMovies/api/MovieKeyApi';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetails, removeMovieDetails } from '../../../features/ReduxMovies/MovieSlice/MovieSlice';
import { getMovieDetails } from './../../../features/ReduxMovies/MovieSlice/MovieSlice';
import "./MovieDetail.scss";
import { useNavigate  } from 'react-router-dom'
import { Loader } from './../../Loader/Loader';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMovies = async () =>  {
            const response = await MovieApi.get(`?apikey=${APIKey}&i=${imdbID}&Plot=Full`)
            .catch((err) => {
                console.log("error :" +err);
            });
            dispatch(movieDetails(response?.data));
        }
        fetchMovies();
    },[dispatch, imdbID]);

    const goBackToMovie = () => {
        dispatch(removeMovieDetails());
        navigate("/redux");
    }
    const data = useSelector(getMovieDetails);
    return (
        <>
            <div className="movie-detail-back" onClick={() => goBackToMovie()}>Back</div>
            <div className="movie-detail-wrapper">
                {Object.keys(data).length === 0 ? <Loader /> : <>
                    <div className="movie-detail-image">
                        <img src={data.Poster} alt={data.Title} className="img-fluid" />
                    </div>
                    <div className="movie-detail-info">
                        <div className="movie-detail-title">
                            {data.Title}
                        </div>
                        <div className="movie-detail-ratings mt-2">
                            <span><i className="fa fa-star rating-color"></i> Rating : {data.imdbRating}</span>
                            <span><i className="fa fa-thumbs-up votes-color"></i> Votes : {data.imdbVotes}</span>
                            <span><i className="fa fa-clock time-color"></i> Runtime : {data.Runtime}</span>
                            <span><i className="fa fa-calendar date-color"></i> Released : {data.Released}</span>
                        </div>
                        <div className="movie-detail-plot mt-3">
                            {data.Plot}
                        </div>
                        <div className="movie-detail-cast mt-2">
                            <div>
                                <span><i className="fa fa-star"></i> Genre </span>
                                : {data.Genre}
                            </div>
                            <div>
                                <span><i className="fa fa-user"></i> Director</span>
                                : {data.Director}
                            </div>
                            <div>
                                <span><i className="fa fa-pencil"></i> Writer</span>
                                : {data.Writer}
                            </div>
                            <div>
                                <span><i className="fa fa-users"></i> Actors</span>
                                : {data.Actors}
                            </div>
                            <div>
                                <span><i className="fa fa-trophy"></i> Awards</span>
                                : {data.Awards}
                            </div>
                            <div>
                                <span><i className="fa fa-language"></i> Languages</span>
                                : {data.Language}
                            </div>
                            <div>
                                <span><i className="fa fa-dollar"></i> BoxOffice</span>
                                : {data.BoxOffice}
                            </div>
                        </div>
                    </div>
                        
                    
                </>}  
            </div>
        </>
    );
}

export default MovieDetail;