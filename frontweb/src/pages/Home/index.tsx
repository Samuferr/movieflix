import { ReactComponent as MainImage } from 'assets/images/main-image.svg'; 
import Navbar from 'components/Navbar';
import './styles.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
            <div className="left-content">
            <div className="home-title">
            <h1>Avalie Filmes</h1>
            </div>
            <div className="home-subtitle">
            <h2>Diga o que você achou do seu filme favorito</h2>
            </div>
                
        <div className="home-image-container">
            <MainImage />    
        </div>
        </div>
        <div className="card-container">
            <h1>LOGIN</h1>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
