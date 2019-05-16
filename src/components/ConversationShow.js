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
  // when page loads, this gets in the data to be stored in the state object
  componentDidMount() {
    axios.get(`/api/conversations/${this.props.match.params.id}`)
      .then(res => this.setState({ conversation: res.data }))
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`/api/conversations/${this.props.match.params.id}/messages`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` } // add token to headers
    })
      .then(res => this.setState({ conversation: res.data })) // when a message is submitted, state needs to be set again so that the info submitted is added to the object and the whole object updated
  }

  handleChange(e) {
    // state data + message
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  // Need to add Cabin Photo title to top of page.

  // what the component adds to the DOM (visual), the 'like HTML' elements. Render does CDM the second time its run.
  render() {
    if(!this.state.conversation) return null // if no data coming in return "null". Giving React something to do if null
    console.log(this.state, 'this.state on the message page')
    return(
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level">
              <div className="column is-one-third-desktop is-full-tablet">
                <figure className="image">
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
                <figure className="media-left">
                  <p className="image is-64x64">
                  </p>
                </figure>
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
