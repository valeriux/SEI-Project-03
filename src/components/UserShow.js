import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'

class UserShow extends React.Component {

  constructor(props) {
    super(props) // whenever extending class, have to call

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }
  // function to determine the other user to the one actually viewing their messages in order to render the correct username as there are two users with username in 'between'
  getCorrespondent(between){
    return between.find(user => user._id !== Auth.getPayload().sub) || between[0]
  }


  render() {
    if (!this.state.user) return null
    console.log(this.state,'this is on usershow page')
    return (
      <section className="section user-background">
        <div className="container profile">
          <div className="columns is-multiline columns-profile ">
            <div className="column is-one-third-desktop img-profile">
              <figure className="image is-128x128 has-text-centered">
                <img className="" src={this.state.user.photo}alt={this.state.user.username} />
              </figure>
            </div>
            <div className="column is-two-thirds-desktop">
              <p className="subtitle is-3">Welcome back {this.state.user.username}</p>
              <p className="subtitle">Email: {this.state.user.email}</p>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-full-desktop">
              <p className="subtitle is-3">Bio</p>
            </div>

            <div className="column is-desktop">
              <p className="subtitle">{this.state.user.bio}</p>
            </div>
          </div>

          {this.canModify() &&
            <div className="level-right">
              <Link to={`/users/${this.state.user._id}/edit`} className="button is-info">Edit</Link>
            </div>
          }

          {/*link to Conversations Show*/}
          <div className="message-chain">
            {this.state.user.conversations.map(conversation =>
              <section key={conversation._id} className="section">
                <Link to={`/conversations/${conversation._id}`} className="button is-info">

                  <div className="column is-one-quarter-desktop is-half-tablet">
                    <figure className="image">
                      <img src={conversation.cabin.image} />
                    </figure>
                  </div>
                  {this.getCorrespondent(conversation.between).username}

                </Link>
              </section>
            )}
          </div>


        </div>
      </section>
    )
  }
}
export default UserShow
// Presumably don't want to <ConversationShow {...conversations}> as don't want the whole history rendering, just the link to it?
// <button onClick={this.handleClick}>Conversation</button>
// populate the between to get users photo
// Link rather than a-tags which refresh page because of hyperlink



// <section className="section">
//   <div className="container">
//     <div className="level">
//       <div className="level">
//         <div className="column is-one-third-desktop is-full-tablet">
//           <figure className="image">
//             <img src={this.state.user.conversation.cabin.image} alt={this.state.conversation.cabin.title} />
//           </figure>
//         </div>
//         <h1 className="title is-1">{this.state.conversation.cabin.title}</h1>
//       </div>
//     </div>
//   </div>
// </section>
