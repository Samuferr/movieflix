import { Redirect, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/Home/CreateAccount";
import Movies from "./pages/Movies";
import Navbar from "components/Navbar";
import history from "util/history";
import { isAuthenticated } from "util/auth";
import MovieDetails from "pages/MovieDetails";
import PrivateRoute from "components/Routes/PrivateRoute";

const Routes = () => (
  <Router history={ history }>
    <Navbar />

    <Switch>
      <Redirect from="/" to="/login" exact />
      <Route
        path="/login"
        render={() => {
          return (isAuthenticated() ?
            <Redirect to='/movies' /> :
            <Home />
          )
        }}
      />

      <Route
        path="/criar-conta"
        render={() => {
          return (isAuthenticated() ?
            <Redirect to='/movies' /> :
            <CreateAccount />
          )
        }}
      />

      <PrivateRoute path="/movies" exact>
        <Movies />
      </PrivateRoute>

      <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
)

export default Routes;
