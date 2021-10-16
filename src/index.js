/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
  { id : 0, name : "멋진신발", quan : 2},
  { id : 1, name : "멋진신발2", quan : 1},
  { id : 2, name : "멋진신발3", quan : 100}
];

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const copy = [...state]
      copy.map((item) => {
        if (item.id === action.id) {
          item.quan++
        }
      })
      return copy
    case 'DECREMENT':
      const copy2 = [...state]
      copy2.map((item) => {
        if (item.id === action.id) {
          if (item.quan) {
            item.quan--;
          }
        }
      })
      return copy2
    default:
      return state
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/shoppingmall'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
