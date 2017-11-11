import React from 'react'

const Message = ({
  message,
  deleteMessages
}) => {
  return (
    <div>
      {message.message}
      {message.name}
    <button onClick={deleteMessages} id={message.id}>Delete</button>
    </div>
  )
}

export default Message
