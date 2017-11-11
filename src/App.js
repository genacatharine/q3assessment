import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import ToolBar from './components/ToolBar'
import AddMessage from './components/AddMessage'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      messages: [],
      filtered: []
      }
  }

  async componentDidMount() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
      const json = await response.json()
      this.setState({
      messages: json,
      filtered: json})
}
seeker = (searchTerm) => {
  const match = this.state.messages.filter(message => {
    console.log(message.name);
    return (message.name.toLowerCase().includes(searchTerm.toLowerCase())) || (message.message.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  this.setState({
    filtered: [...match]
  })
}
toggleCompoes = () => {
  
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
         window.location.reload();
           this.setState({messages: [...this.state.messages, message1]})
       }
deleteMessages = async (e) => {
  e.preventDefault()
      var msgId = +(e.currentTarget.id)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/messages/${msgId}`, {
        method: 'DELETE',
        headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  let idx
  for(let i = 0; i < this.state.messages.length; i++) {
     if (this.state.messages[i].id === msgId) {
      idx = i
     }
   }
  window.location.reload();
   this.setState({
     messages: [
       ...this.state.messages.slice(0, idx),
       ...this.state.messages.slice(idx + 1)
     ]
   })
 }

  render() {
    return (
      <div className="App">
        <ToolBar
          seeker = {this.seeker}
        />
        <MessageList messages = {this.state.filtered}
                    deleteMessages={this.deleteMessages.bind(this)}
         />
        <AddMessage createMessage={this.createMessage}/>
      </div>
    );
  }
}
export default App;
