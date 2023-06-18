import * as API from '../api/apiMovieDB';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  return { movieDetails };
};
