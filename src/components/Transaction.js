import React, { Component } from "react";

class Transaction extends Component {
  render() {
    return ( 
       <div>
        <div> amount = {this.props.transaction.amount}</div>
        <div> vendor = {this.props.transaction.vendor}</div>
        <div> category = {this.props.transaction.category}</div>
       </div>
    );
  }
}

export default Transaction;
