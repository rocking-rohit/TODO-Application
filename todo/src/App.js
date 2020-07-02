import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import Item from './Components/Item.js';
import EditPopup from './Components/EditPopup.js'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      list: [],
      elements: '',
      input: '',
      showPopup: false,
      key:'',
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

  clickPopUp = (key) => {
    this.setState({
      key,
      showPopup: !this.state.showPopup
    })
  };

  updateItem = data => {
    const newList = this.state.list;
    newList[this.state.key] = data;
    this.setState({
      list:newList
    });
  }

  render() {
    return (
      <div className='mylist'>
        <h1>Hello World</h1>
        <ul>
          {this.state.list.map((listitem, i) => (
            <Item
              key={i}
              listitem={listitem}
              edit={() => this.clickPopUp(i)}
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
        {
          this.state.showPopup ? <EditPopup data={this.state.list[this.state.key]} close={()=>this.clickPopUp.bind(this)} update={this.updateItem.bind(this)}/> : ''
        }
      </div>
    );
  }
}



export default App;
