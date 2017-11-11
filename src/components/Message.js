import React from 'react'

const Message = ({
  message,
  deleteMessages
}) => {
  return (
    <div>
      {message.name}
      {message.message}
    <button onClick={deleteMessages} id={message.id}>Delete</button>
    </div>
  )
}

export default Message
