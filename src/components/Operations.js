import React, { Component } from "react";

class Operations extends Component {
  constructor(){
    super()
    this.state = {amount: 0,vendor:"",category:"" }
  }
  enterValue = (events) =>{
    if(events.target.id === "amount-input") this.setState({amount: events.target.value})
    else if(events.target.id === "vendor-input") this.setState({vendor: events.target.value})
    else  this.setState({category: events.target.value})
  }
  addTrasaction = (events) =>{
    if(events.target.id === "positive") this.props.addTrasaction(this.state.amount,this.state.vendor,this.state.category)
    else   this.props.addTrasaction(-this.state.amount,this.state.vendor,this.state.category)
  }
  render() {
    return ( 
        <div>
          <input id="amount-input"   type="number" placeholder="Amount" value={this.state.amount} onChange={this.enterValue}  />
          <input id="vendor-input"   type="text"   placeholder="Vendor" value={this.state.vendor} onChange={this.enterValue} />
          <input id="category-input" type="text"   placeholder="Category" value={this.state.category} onChange={this.enterValue} />
          <button id="positive" onClick={this.addTrasaction}>Deposit</button>
          <button id="negative" onClick={this.addTrasaction}>Withdraw</button>
        </div>
    );
  }
}

export default Operations;
