import * as API from '../api/apiMovieDB';
import { useState, useEffect } from 'react';

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    API.getMovieCredits(movieId).then(data => setMovieCredits(data));
  }, [movieId]);
  return { movieCredits };
};
