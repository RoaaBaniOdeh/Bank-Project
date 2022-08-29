import React, { Component } from "react";

class Transaction extends Component {
  delete = () =>{
 this.props.deleteTransaction(this.props.transaction.id)
  }
  render() {
    return ( 
       <div>
        <div> amount = {this.props.transaction.amount}</div>
        <div> vendor = {this.props.transaction.vendor}</div>
        <div> category = {this.props.transaction.category}</div>
        <button onClick={this.delete}>Delete</button>
       </div>
    );
  }
}

export default Transaction;
