import React from 'react'
import MovieListing from '../../components/Movies/MovieListing/MovieListing'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useEffect } from 'react';
import MovieApi from "./api/MovieApi";
import { APIKey } from "../ReduxMovies/api/MovieKeyApi";
import { useDispatch } from 'react-redux';
import { addMovies } from './MovieSlice/MovieSlice';

export default function ReduxMovies() {
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () =>  {
            const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("error :" +err);
            });
            dispatch(addMovies(response?.data.Search));
        }
        fetchMovies();
    },[dispatch])
    return (
        <>
            <PageHeader pageTitle="Redux with Movie API"></PageHeader>    
            <MovieListing />
        </>
    )
}
