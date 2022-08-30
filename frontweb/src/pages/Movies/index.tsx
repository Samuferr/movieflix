import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/request';

const Movies = () => {
  
    const [page, setPage] = useState<SpringPage<Movie>>();

    useEffect(()=> {
      const params : AxiosParams = {
        method: 'GET',
        url: `${BASE_URL}/movies`,
        params: {
          page: 0,
          size: 12
        },
      }
      axios(params)
      .then(response => {
        setPage(response.data)
        console.log(page)
      });
    }, []);

  return (
    <div className="container my-4">
      <div className="row container">

        {page?.content.map((movie) => (
        <div className="col-sm-6 col-md-5 col-lg-3" key={movie.id}>
          <Link to="/movies/1">
            <MovieCard movie={movie} />
          </Link>
        </div>
        )
        )}

        

      </div>

      <div className="row">
        <Pagination />
      </div>

    </div>
  );
};

export default Movies;
