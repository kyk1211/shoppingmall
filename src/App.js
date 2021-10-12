/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Data from './data';
import GoodsList from './GoodsList';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import Navigation from './Navigation';

function App() {

  const [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <button>Learn more!</button>
          </div>

          <div className='container'>
            <div className='row'>
              {shoes.map((shoe, i) => (
                <GoodsList goods={ shoe } key={i}/>
              ))}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail goods={shoes} />
        </Route>

        <Route path="/:id">
          <div>hi</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
