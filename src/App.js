import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/Transactions.js";
import Operations from "./components/Operations";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes,Navigate } from "react-router-dom";
import TransactionTotal from "./components/TotalTransactions";


class App extends Component {
  getTransactions = async () => {
    const transactions = await axios.get("http://localhost:150/transactions");
    console.log(transactions);
    this.setState({ transactions: transactions.data });
  };
  constructor() {
    super();
    this.state = {
      transactions: [
       /* { id: 1, amount: 3200, vendor: "Elevation", category: "Salary" },
        { id: 2, amount: -7, vendor: "Runescape", category: "Entertainment" },
        { id: 3, amount: -20, vendor: "Subway", category: "Food" },
        { id: 4, amount: -98, vendor: "La Baguetterie", category: "Food" }, */
      ],
    };
  }
  async componentDidMount() {
    await this.getTransactions();
  }
  balance = () => {
    let sum = 0;
    for (let item of this.state.transactions) {
      sum += item.amount;
    }
    return sum;
  };
  addTrasaction = async (amount, vendor, category) => {
    await axios.post("http://localhost:150/transaction", {
      amount,
      vendor,
      category,
    });
    // let transctionsB = [...this.state.transactions]
    // transctionsB.push({amount:amount,vendor:vendor,category:category})
    // this.setState({transactions:transctionsB})
    this.getTransactions();
  };
  deleteTransaction = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:150/transaction/${id}`);
    this.getTransactions();
    //   let transctionsD = [...this.state.transactions]
    //   transctionsD = transctionsD.filter((t)=>{return t.id != id})
    //  this.setState({transactions:transctionsD})
  };
  render() {
    let sum = this.balance();
    return (
      <Router>
        <div>
          <div> The total balance = {sum} </div>
          <Link to="/">Home</Link>
          <Link to="/transaction">transaction</Link>
          <Link to="/BreakDown">BreakDown</Link>
        </div>
        <Routes>
        <Route exact path="/" element={<Transactions transactions={this.state.transactions}
              deleteTransaction={this.deleteTransaction} /> }> </Route>
        <Route  exact path="/transaction" element={<Operations addTrasaction={this.addTrasaction} />}>  </Route>
        <Route  exact path="/BreakDown"  element={<TransactionTotal transactions={this.state.transactions} />}>  </Route>
        </Routes>
        
      </Router>
    );
  }
}

export default App;
