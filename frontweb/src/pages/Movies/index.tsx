import MovieCard from "components/MovieCard";
import Navbar from "components/Navbar";

const Movies = () => {
    return (
      <>
      <Navbar />
      <div className="conteiner my-4">
          <MovieCard />
      </div>
      </>  
    );
}

export default Movies;