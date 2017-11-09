import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import MessageList from '.components/MessageList'

class App extends Component {
  constructor(props){
       super(props)
       this.state = {messages : messages}
  }

  render() {
    return (
      <div className="App">
      <MessageList messages= {this.state.messages} />
      </div>
    );
  }
}

export default App;
