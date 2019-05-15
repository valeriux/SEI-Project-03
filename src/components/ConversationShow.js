import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

class ConversationShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/conversations/${this.props.match.params.id}`)
      .then(res => this.setState({ conversation: res.data }))
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`/api/conversations/${this.props.match.params.id}/messages`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ conversation: res.data })) // needs to be set again, state set again after the submit so that the info submitted is added to the object and the whole object updated
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  render() {
    if(!this.state.conversation) return null
    return(
      <section className="section">

        <div className="message-list">
          {this.state.conversation.messages.map(message =>
            <div key={message._id} className="message">
              <div className="message-username">{message.user.username}</div>
              <div className="message-text">{message.content}</div>
            </div>
          )}

          <form className="send-message-form" onSubmit={this.handleSubmit}>
            <textarea
              placeholder="Type your message and press ENTER" type="text"
              name="content"
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default ConversationShow
