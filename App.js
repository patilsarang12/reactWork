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
        
        <Header header="props from header"/>
        <Content content="props from content"/>
        {this.props.header} <br/>
        {this.props.content}
         {// <Clock/> we can pass props of new date from here and work
        }
      </div>
    );
  }
}

App.defaultProps = {
  header : "default",
  content : "defalult"
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date(), comment: "hello"};
  }

  componentDidMount(){
    this.timeID = setInterval(
      () => {this.tick()}, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  tick(){
    this.setState({
      date: new Date(),
      comment: this.state.comment + "x"
    }); 
    {/*
      this is a right way to update state everytime
      react batch them togther synchronously or asynchronously
    */}
  }

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <h2>Current Time : {this.state.date.toLocaleTimeString()}</h2>
        {this.state.comment}
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.header}</h2>
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
          <h1>JSX {this.props.content}</h1>
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
