import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../utils/api/apiMovieDB';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = searchParams.get('query');

  const handleSearchSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (movieTitle) {
      API.searchMovies(movieTitle).then(data => setMovies(data));
    }
  }, [searchParams]);

  return (
    <div>
      <SearchForm onSubmit={handleSearchSubmit} />
      <TrendingList movies={movies} />
    </div>
  );
};

export default Movies;
