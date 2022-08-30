import React, { Component } from "react";

class TransactionTotal extends Component {
  render() {
    const transactions = this.props.transactions;
    let totalObj = {};
    transactions.forEach((t) => {
      if (!totalObj[t.category]) totalObj[t.category] = t.amount;
      else totalObj[t.category] += t.amount;
    });
    let array = []
    for (let index in totalObj) {
        console.log(index)
        array.push(<div> <div>{index  }</div>  <div>{  totalObj[index]}</div> </div>)
    }
    return array
  }
}

export default TransactionTotal;
