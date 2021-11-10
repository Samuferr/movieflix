import { Movie } from 'types/movie';
import './styles.css'

type Props = {
    movie: Movie
}

const MovieCard = ({movie} : Props) => {
    return (
        <div className="base-card movie-card">
            <div className="card-top">
                <img src={movie.imgUrl} alt={movie.title} className="movie-img"/>
            </div>
            <div className="card-bottom">
                <h4>{movie.title}</h4>
                <h6>{movie.year}</h6>
                <p>{movie.subTitle}</p>
            </div>
        </div>
    );
}

export default MovieCard;