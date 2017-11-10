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
      // console.log('hello', json)
      this.setState({messages: json})
}
//add new message
createMessage = async (message) => {
         const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
           method: 'POST',
           body: JSON.stringify(message),
           headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
           }
         })
         const message1 = await response.json()
         console.log(message1)
           this.setState({messages: [...this.state.messages, message1]})
       }

  render() {
    return (
      <div className="App">
        <ToolBar />
        <MessageList messages = {this.state.messages}
                    deleteMessages={this.deleteMessages}
         />
        <AddMessage createMessage={this.createMessage}/>
      </div>
    );
  }

}
export default App;
