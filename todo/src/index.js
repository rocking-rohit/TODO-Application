import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Header } from './App';
import { List, alertClick } from './Components/List';
import * as serviceWorker from './serviceWorker';
import { Button } from 'react-bootstrap';

const list = ['rohit', 'rayudu', 'rgv'];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <List list={list} />
    <Button id='add' onClick={alertClick(list)} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
