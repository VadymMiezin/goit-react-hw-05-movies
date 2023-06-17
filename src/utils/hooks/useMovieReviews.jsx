import * as API from '../api/apiMovieDB';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    API.getMovieReviews(movieId).then(data => setMovieReviews(data));
  }, [movieId]);
  return { movieReviews };
};
