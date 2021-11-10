import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
     <Route path="/" exact>
          <Home />
    </Route>
    </Switch>
    <Switch>
     <Route path="/movies" >
          <Movies />
    </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;