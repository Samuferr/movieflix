import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import {Switch, Route} from 'react-router-dom'
import './styles.css';

const Home = () => {
  return (
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
        <div className="base-card card-container auth-form-container">
          <Switch>
            <Route path="/admin/auth/login" />
          </Switch>
          <h1>LOGIN</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
