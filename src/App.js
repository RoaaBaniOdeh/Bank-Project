import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/Transactions.js";
import Operations from "./components/Operations";


class App extends Component {
  constructor(){
    super();
    this.state ={
     transactions:[
        { id:1,amount: 3200, vendor: "Elevation", category: "Salary" },
        { id:2, amount: -7, vendor: "Runescape", category: "Entertainment" },
        { id:3,amount: -20, vendor: "Subway", category: "Food" },
        { id:4,amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }
   balance = ()=>{
    let sum = 0
    for(let item of this.state.transactions)
    {
      sum += item.amount
    }
    return sum
   }
   addTrasaction =(amount,vendor,category) =>{
    let transctionsB = [...this.state.transactions]
    transctionsB.push({amount:amount,vendor:vendor,category:category}) 
    this.setState({transactions:transctionsB})
   }
   deleteTransaction=(id)=>{
    let transctionsD = [...this.state.transactions]
    transctionsD = transctionsD.filter((t)=>{return t.id != id})
   this.setState({transactions:transctionsD})
   }
  render() {
    let sum = this.balance()
    return (
      <div>
        <div> The total balance = {sum} </div>
        <div><Transactions transactions={this.state.transactions}  deleteTransaction={this.deleteTransaction}/></div>
        <div><Operations addTrasaction={this.addTrasaction}/></div>
      </div>
      
    );
  }
}

export default App;
