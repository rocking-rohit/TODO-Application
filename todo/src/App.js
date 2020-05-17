import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Header.css';
// import { Button } from './Components/Button';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <h2>New Todo App</h2>
    </div>
  );
}

function Header() {
  return (
    <div className='Header'>
      <h3>My List</h3>
    </div>
  );
}

export { App, Header };
