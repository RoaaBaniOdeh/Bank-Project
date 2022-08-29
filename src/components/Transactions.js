import React, { Component } from "react";
import Transaction from './Transaction.js'
class Transactions extends Component {
  render() {
   const transactions = this.props.transactions
    return ( 
      transactions.map((t)=>{return <Transaction transaction={t}/>})
    );
  }
}

export default Transactions;
