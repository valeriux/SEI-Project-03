import React from 'react'

const chain = [
  {
    userId: 'Charlotte',
    text: 'Hey, is your cabin available Aug 10th-14th?'
  },
  { userId: 'Valeria',
    text: 'No, but it is from the 15th onwards'
  },
  {
    userId: 'Charlotte',
    text: 'Okay, can we book 15th-19th then?'
  }
]
// need to map through results to show user ID and content
class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {chain.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.userId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList
