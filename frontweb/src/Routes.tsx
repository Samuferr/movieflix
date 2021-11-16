import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Auth from 'pages/Home/Auth';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
