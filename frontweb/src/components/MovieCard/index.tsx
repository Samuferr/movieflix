import { Movie } from 'types/movie';
import './styles.css'

type Props = {
    movie: Movie
}

const MovieCard = ({movie} : Props) => {
    return (
        <div className="base-card movie-card">
            <div className="card-top">
                <img src={movie.imgUrl} alt="Nome do filme" className="movie-img"/>
            </div>
            <div className="card-bottom">
                <h4>O Retorno do Rei</h4>
                <h6>2010</h6>
                <p>Pequeno texto sobre o filme</p>
            </div>
        </div>
    );
}

export default MovieCard;