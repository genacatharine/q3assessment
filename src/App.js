import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import ToolBar from './components/ToolBar'
import AddMessage from './components/AddMessage'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {messages: []}
  }

  async componentDidMount() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
      const json = await response.json()
      console.log('hello', json)
      this.setState({messages: json})
    }



  render() {
    return (
      <div className="container">
        <ToolBar />
        <MessageList messages = {this.state.messages} />
        <AddMessage />
      </div>
    );
  }
}

export default App;
