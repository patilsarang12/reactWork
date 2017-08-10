import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      headerText: "This is Header",
      contentText: "This Is Content"
    };
  }
  
  render() {
    return (
      <div className="App">
        {/*<h1>{this.state.headerText}</h1>*/}
        
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
      </div>
    );
  }
}

class Content extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "id" : 1,
          "name" : "sarang"
        },
        {
          "id" : 2,
          "name" : "shreya"
        },
        {
          "id" : 3,
          "name" : "sara"
        }
      ]
    };
  }

  render(){
    return (
      <div className="App-intro" data-myAttribute="">
          <h1>JSX</h1>
          <table>
            <thead>
              <th>
                <td>Id</td>
                <td>Name</td>
              </th>
            </thead>
            <tbody>
              {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
            </tbody>
          </table>
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
      </tr>
    );
  }
}

export default App;