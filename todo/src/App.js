import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import Item from './Components/Item.js';

function edit() {
  console.log('EDIT');
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      elements: '',
      input: '',
    };
  }

  changeText = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  addToList = () => {
    const value = this.state.input;

    this.setState({
      list: [...this.state.list, value],
    });
  };

  show = () => {};

  handleClose = () => {};

  deleteItem = (key) => {
    const templist = this.state.list;
    templist.splice(key, 1);
    this.setState({
      list: templist,
    });
  };

  render() {
    return (
      <div className='mylist'>
        <h1>Hello World</h1>
        <ul>
          {this.state.list.map((listitem, i) => (
            <Item
              key={i}
              listitem={listitem}
              edit={edit}
              delete={() => this.deleteItem(i)}
            />
          ))}
        </ul>
        <label>Enter Names</label>
        <textarea type='text' onChange={this.changeText}></textarea>
        <Button
          variant='primary'
          className='submit-button'
          onClick={this.addToList}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default App;
