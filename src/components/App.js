/* eslint-disable */
import React, {  useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Data from '../data';
import Card from './Card';
import Detail from '../route/Detail';
import Navigation from './Navigation';
import Cart from '../route/Cart';

import './App.css';

function App() {

  const [shoes, setShoes] = useState(Data);
  const [isLoading, setIsLoading] = useState(false);

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
            <button><a href='https://github.com/kyk1211'>Learn more!</a></button>
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
          <Detail goods={shoes} setShoes={setShoes}/>
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
