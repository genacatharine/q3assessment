import React from 'react'
import Message from './Message'

const MessageList= ({messages, deleteMessages}) => {

  const mappedMsgs= messages.map((message)=>
    <Message
      key={message.id}
      message={message}
      deleteMessages={deleteMessages}
    />
  )

  return (

    <div>
      <h1> Messages</h1>
    {mappedMsgs}
    </div>
  )
}

export default MessageList
