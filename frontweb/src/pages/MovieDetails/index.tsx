import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'util/request';
import './styles.css';


type UrlParams = {
  movieId: string;
}

const MovieDetails = () => {

  // const { movieId } = useParams<ParamsType>()
  const {movieId} = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>()


  // const [hasPermission, setHasPermission] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  // const getMovies = useCallback(() => {
  //   makePrivateRequest({ url: `/movies/${movieId}` })
  //     .then(response => {
  //       setMovie(response.data)
  //       setIsLoading(false)
  //     })
  // }, [movieId])

  //   useEffect(() => {
  //   const currentUser = getAccessTokenDecoded()
  //   setHasPermission(currentUser.authorities.toString() === 'ROLE_MEMBER')

  //   getMovies()
  // }, [getMovies])

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then(response => {
      setMovie(response.data);
  });
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <div className="details-container container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src={movie?.imgUrl}
                alt={movie?.title}
                className="img-details"
              />
            </div>
          </div>
          <div className="col-xl-6" >
            <div className="title-subtitle-container">
              <h1>{movie?.title}</h1>
              <h6>{movie?.year}</h6>
              <p>{movie?.subTitle}</p>
            </div>
            <div className="sinopse-container">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis officiis ad laborum doloremque cumque quasi quas!
                Repudiandae laboriosam alias minima ex, porro odio quibusdam
                magnam voluptatum nostrum necessitatibus, fugit ab repellendus
                ipsam quisquam adipisci hic totam labore exercitationem iure
                omnis. Adipisci iusto incidunt impedit velit voluptatum vitae,
                officiis exercitationem ullam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
