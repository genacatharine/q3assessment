import React from 'react'

const Message = ({
  message,
  deleteMessages
}) => {
  return (
    <div id={message.id}>
      {message.message}
      {message.name}

    <button id="delete" onClick={deleteMessages}>Delete</button>
    </div>
  )
}

export default Message
