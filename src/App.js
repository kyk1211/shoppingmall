/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Data from './data';
import Card from './Card';
import Detail from './Detail';
import Navigation from './Navigation';

import './App.css';

function App() {

  const [shoes, setShoes] = useState(Data);
  const [isLoading, setIsLoading] = useState(false);
  const [stock, setStock] = useState([10,11,21]);

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
                <Card goods={ shoe } key={i}/>
              ))}
            </div>
            {isLoading ? <div><p>now Loading...</p></div> : null}
            <button className="btn btn-primary" onClick={async() => {
              setIsLoading(true);
              try {
                let response = await axios.get(`https://codingapple1.github.io/shop/data2.json`);
                setIsLoading(false);
                setShoes([...shoes, ...response.data]);
              } catch(err) {
                setIsLoading(false);
                console.log(err);
              }
            }}>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail goods={shoes} stock={stock} setStock={setStock}/>
        </Route>

        <Route path="/:id">
          <div>hi</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
