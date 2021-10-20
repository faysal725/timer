import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends  React.Component {

  state={
    count: 0
  }
  intervalId= null;

  increment =()=> {
    this.setState({count: this.state.count+1})
  }
  decrement =()=> {
    if (this.state.count > 0) {
      
    this.setState({count: this.state.count-1})
    }
  }
  startTimer =()=>{
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() =>{
        this.setState({count: this.state.count -1}, () => {
          if (this.state.count===0) {
            alert('timer finished')
            clearInterval(this.intervalId)
            this.intervalId = null;
          }
        })
      },1000)
    }
  }


  stopTimer = () =>{
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId=null;
    }
  }
  resetTimer=()=>{
    this.setState({count:0})
    clearInterval(this.intervalId)
    this.intervalId = null
  }
  render(){
    return (
      <div className="App">
        <h1>Timer</h1>
        <div className="container">
          <button className="Btn" onClick={this.decrement}>-</button>
          <span className="text">{this.state.count}</span>
          <button className="Btn" onClick={this.increment}>+</button>

        </div>
        <div className="container">
          <button onClick={this.startTimer} className="Btn">Start</button>
          <button className="Btn" onClick={this.stopTimer}>Stop</button>
          <button className="Btn" onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

