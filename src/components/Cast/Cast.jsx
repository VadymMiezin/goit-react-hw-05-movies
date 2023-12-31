import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/useMovieCredit';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <ul>
        {movieCredits.map(cast => {
          return (
            <li key={cast.id}>
              <img
                width={100}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/2/2b/No-Photo-Available-240x300.jpg`
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
