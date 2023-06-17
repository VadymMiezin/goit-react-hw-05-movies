import * as API from '../api/apiMovieDB';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.searchMovies(input).then(data => setMovies(data));
  }, [input]);
  return { movies };
};
