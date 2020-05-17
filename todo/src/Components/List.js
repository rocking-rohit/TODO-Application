import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../List.css';
import '../Listitem.css';

function alertClick(list) {
  console.log(list);
  alert('alert click');
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: this.props.list.map((n, index) => <li key={index}>{n}</li>),
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className='list'>
        <ul className='listitem'>{this.state.names}</ul>
      </div>
    );
  }
}

export { List, alertClick };
