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
      .then(res => this.setState({ conversation: res.data }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  render() {
    if(!this.state.conversation) return null 
    console.log(this.state, 'this.state on the message page')
    return(
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level">
              <div className="column is-one-third-desktop is-full-tablet">
                <figure className="image is 32x32px">
                  <img src={this.state.conversation.cabin.image} alt={this.state.conversation.cabin.title} />
                </figure>
              </div>
              <h1 className="title is-1">{this.state.conversation.cabin.title}</h1>
            </div>
          </div>

          <div className="message-list">
            {this.state.conversation.messages.map(message =>
              <div key={message._id} className="message">
                <div className="message-username">{message.user.username}</div>
                <div className="message-text">{message.content}</div>
              </div>
            )}

            <form className="" onSubmit={this.handleSubmit}>
              <article className="media">

                <div className="media-content">
                  <div className="field">
                    <p className="control">
                      <textarea
                        className="textarea"
                        placeholder="Type your message and press ENTER"
                        type="text"
                        name="content"
                        onChange={this.handleChange}
                      >
                      </textarea>
                    </p>
                  </div>
                  <nav className="level">
                    <div className="level-left">
                      <button>Submit</button>
                    </div>
                    <div className="level-right">
                    </div>
                  </nav>
                </div>
              </article>


            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default ConversationShow
