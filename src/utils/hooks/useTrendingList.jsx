import * as API from '../api/apiMovieDB';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(data => setTrendingMovies(data));
  }, []);

  return { trendingMovies };
};
