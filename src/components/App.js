import React, { Fragment, StrictMode } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header';
import Home from '../components/Home';
import Films from './categories/Films';
import People from './categories/People';
import Planets from './categories/Planets';
import Species from './categories/Species';
import Vehicles from './categories/Vehicles'
import Starships from './categories/Starships';

const App = () => {

  return (
    <div className="app">
      <Router>
        {/*<StrictMode>*/}
          <Fragment>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                path='/films/:id'
                render={({ location }) => (
                 conditionalFilmRender(location.state)
               )}
              />
              <Route
                path='/people/:id'
                render={({ location }) => (
                  conditionalPersonRender(location.state)
                )}
              />
              <Route
                path='/planets/:id'
                render={({ location }) => (
                  conditionalPlanetRender(location.state)
                )}
              />
              <Route
                path='/species/:id'
                render={({ location }) => (
                  conditionalSpeciesRender(location.state)
                )}
              />
              <Route
                path='/vehicles/:id'
                render={({ location }) => (
                  conditionalVehicleRender(location.state)
                )}
              />
              <Route
                path='/starships/:id'
                render={({ location }) => (
                  conditionalStarshipRender(location.state)
                )}
              />
            </Switch>
          </Fragment>
        {/*</StrictMode>*/}
      </Router>
    </div>
  );
};

export default App;

// functions to determine if there is state being passed
// otherwise, ask user to use nav bar
const conditionalFilmRender = location => {
  if (location) {
    return (
      <Films film={location} />
    )
  } else {
    return (
      <div>
        <p style={{color: "white"}}>Please use the navigation bar.</p>
        <Link to={'/'}>
          Back to Home
        </Link>
      </div>
    )
  }
};

const conditionalPersonRender = location => {
  if (location) {
    return (
      <People person={location} />
    )
  } else {
    return (
      <div>
        <p style={{color: "white"}}>Please use the navigation bar.</p>
        <Link to={'/'}>
          Back to Home
        </Link>
      </div>
    )
  }
};

const conditionalPlanetRender = location => {
  if (location) {
    return (
      <Planets planet={location} />
    )
  } else {
    return (
      <div>
        <p style={{color: "white"}}>Please use the navigation bar.</p>
        <Link to={'/'}>
          Back to Home
        </Link>
      </div>
    )
  }
};
//
const conditionalSpeciesRender = location => {
  if (location) {
    return (
      <Species species={location} />
    )
  } else {
    return (
      <div>
        <p style={{color: "white"}}>Please use the navigation bar.</p>
        <Link to={'/'}>
          Back to Home
        </Link>
      </div>
    )
  }
};
//
const conditionalVehicleRender = location => {
  if (location) {
    return (
      <Vehicles vehicle={location} />
    )
  } else {
    return (
      <div>
        <p style={{color: "white"}}>Please use the navigation bar.</p>
        <Link to={'/'}>
          Back to Home
        </Link>
      </div>
    )
  }
};

const conditionalStarshipRender = location => {
  if (location) {
    return (
      <Starships starship={location} />
    )
  } else {
    return (
      <div>
        <p style={{color: "white"}}>Please use the navigation bar.</p>
        <Link to={'/'}>
          Back to Home
        </Link>
      </div>
    )
  }
};