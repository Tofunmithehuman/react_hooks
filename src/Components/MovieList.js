import React from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = ({ movies }) => {
    return (
        <div className="d-flex m-4">
            {movies.map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;