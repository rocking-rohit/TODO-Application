import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class PopUp extends Component {

   state = {
      content: this.props.data
   }

  closePopUp = (e)=>{
     e.preventDefault();
     this.props.close();
  }

  updateItemPopUp = (e) => {
     e.preventDefault();
     this.props.update(this.state.content)
  }
  
  render() {
      return (
         <div className="popup">
           <label>Data</label>
           <textarea defaultValue = {this.props.data} onChange={(e)=>{this.setState({content: e.target.value})}}/>
           <span className="popup-span" onClick={this.closePopUp.bind(this)}>CLOSE</span>
           <button onClick={this.updateItemPopUp.bind(this)}></button>
         </div>
      );
   }
 }

export default PopUp;
