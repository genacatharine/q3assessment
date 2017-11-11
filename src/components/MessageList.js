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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
            {mappedMsgs}
        </tbody>
      </table>
    </div>
  )
}

export default MessageList
