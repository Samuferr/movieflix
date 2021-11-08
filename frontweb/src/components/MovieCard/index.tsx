import MovieImg from 'assets/images/movie.png'
import './styles.css'

const MovieCard = () => {
    return (
        <div className="base-card movie-card">
            <div className="card-top">
                <img src={MovieImg} alt="Nome do filme" className="movie-img"/>
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