import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/Transactions.js";

class App extends Component {
  constructor(){
    super();
    this.state ={
     transactions:[
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }
  render() {
    return (
      <div><Transactions transactions={this.state.transactions}/></div>
    );
  }
}

export default App;
