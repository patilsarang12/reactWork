import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var i = 2;
    var myStyle = {
      color: 'red'
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro" data-myAttribute="">
          <h1>JSX</h1>
        </p> outside also allowed
        <p>{1+1}</p>   
        <p style={myStyle}>{i === 2 ? 'true' : 'false'}</p>
        {
          //this is explaining expression, need of tag, condition, style, attribute
        }
        {/*multiline comment telling need of convention*/}
      </div>
    );
  }
}

export default App;
