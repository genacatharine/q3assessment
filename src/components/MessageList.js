import React from 'react'
import Message from './Message'

const MessageList= ({messages}) => {

  const mappedMsgs= messages.map((message)=>
    <Message
      key={message.id}
      message={message}
    />
  )

  return (

    <div>
    {mappedMsgs}
    </div>
  )
}

export default MessageList
