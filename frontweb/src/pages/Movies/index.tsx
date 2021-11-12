import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';

const Movies = () => {
  const movie: Movie = {
    id: 5,
    title: 'Coringa',
    subTitle: 'Coloque um sorriso nessa cara.',
    year: 2019,
    imgUrl:
      'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
  };

  return (
    <div className="container my-4">
      <div className="row container">
        <div className="col-sm-6 col-md-5 col-lg-3">
          <Link to="/movies/1">
            <MovieCard movie={movie} />
          </Link>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          <Link to="/movies/1">
            <MovieCard movie={movie} />
          </Link>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          <Link to="/movies/1">
            <MovieCard movie={movie} />
          </Link>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          <Link to="/movies/1">
            <MovieCard movie={movie} />
          </Link>
        </div>
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;
