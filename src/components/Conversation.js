import React from 'react'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

class Messenger extends React.Component {
  render() {
    return(
      <div className="messenger">
        <MessageList />
        <SendMessageForm />
      </div>
    )
  }
}
export default Messenger

//
// import Conversation from './components/Conversation'
// import MessageList from './components/MessageList'
// import SendMessageForm from './components/SendMessageForm'
//
// <Route path="/conversation/:id/sendmessageform" component={SendMessageForm} />
// <Route path="/conversation/:id/messagelist" component={MessageList} />
// <Route path="/conversation/:id" component={Conversation} />
