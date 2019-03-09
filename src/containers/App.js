import React, { useState, useEffect, Fragment, StrictMode } from 'react';
import '../styles/Apps.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Films from '../components/categories/Films';
import People from '../components/categories/People';
import Planets from '../components/categories/Planets';
import Species from '../components/categories/Species';
import Vehicles from '../components/categories/Vehicles'
import Starships from '../components/categories/Starships';
import Results from '../components/Results';

const App = () => {

  const [searchField, setSearchField] = useState('');

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value);
  };

  return (
    <div className="app">
      <Router>
        {/*<StrictMode>*/}
          <Fragment>
            <Header searchChange={onSearchChange}/>
            <Switch>
              {searchField}
              <Route exact path='/' component={Home} />
              <Route path='/films/:id' component={Films}/>
              <Route path='/people/:id' component={People}/>
              <Route path='/planets/:id' component={Planets}/>
              <Route path='/species/:id' component={Species}/>
              <Route path='/vehicles/:id' component={Vehicles}/>
              <Route path='/starships/:id' component={Starships}/>
              <Route path='/results/:id' component={Results}/>
            </Switch>
          </Fragment>
        {/*</StrictMode>*/}
      </Router>
    </div>
  );
};

export default App;
