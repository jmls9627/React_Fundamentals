import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render (){
    return(
      <div onClick={this.props.onClick}>this div has been clicked {this.props.clicks} Times.</div>
    );
  } 
}

export default App;
