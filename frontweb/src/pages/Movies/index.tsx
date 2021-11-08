import MovieCard from 'components/MovieCard';
import Navbar from 'components/Navbar';

const Movies = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-5 col-lg-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-5 col-lg-3">
            <MovieCard />
          </div>
          <div className="col-sm-6  col-md-5 col-lg-3">
            <MovieCard />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Movies;
