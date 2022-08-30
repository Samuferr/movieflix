import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import {Switch, Route} from 'react-router-dom'
import Login from './Login';
import './styles.css';

const Home = () => {
  return (
    <div className="container home-container">
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
          <div className="auth-form-container">
            <Switch>
              <Route path="/">
                <Login />
              </Route>
              <Route path="/signup">
                <h1>Card Signup</h1>
              </Route>
              <Route path="/recover">
                <h1>Card Recover</h1>
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
};

export default Home;
