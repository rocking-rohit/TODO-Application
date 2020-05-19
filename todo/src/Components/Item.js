import React, { Component } from 'react';
// import EditPopup from './Components/EditPopup';
import { Button, Modal } from 'react-bootstrap';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  handleClose = () => {
    this.setState({
      showPopup: false,
    });
  };

  render() {
    return (
      <li key={this.props.keyName} className='list-item'>
        <span>{this.props.listitem}</span>
        <a onClick={this.props.edit} href='#edit' className='edit'>
          Edit This Item
        </a>
        <a onClick={this.props.delete} href='#delete' className='delete'>
          Delete This Template
        </a>
      </li>
    );
  }
}

export default Item;
