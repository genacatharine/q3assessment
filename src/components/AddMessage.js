import React from 'react'

const AddMessage = ({createMessage}) =>{
  const handleAddMessage = (event) => {
    event.preventDefault()
    const newMessage= {
      name: event.target.personsname.value,
      message: event.target.message.value
    }
    console.log('event', event.target.message.value)
      createMessage(newMessage)
      event.target.reset
}
  return (
    <div>
    <h3>Add a Message</h3>
    <form onSubmit={handleAddMessage}>
      <input name="message" placeholder="Message" id="message" />
      <input name="personsname" placeholder="Name" id="nameHere" />
      <input type="submit" value="Send" />
    </form>
  </div>
  )
}

export default AddMessage
