import { ReactComponent as MainImage } from 'assets/images/main-image.svg'; 
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        </div>
        <div className="home-image-container">
            <MainImage />    
        </div>
      </div>
      
    </>
  );
};

export default Home;
