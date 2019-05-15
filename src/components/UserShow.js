import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'
import CabinCard from './CabinCard'


class UserShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }


  render() {
    if (!this.state.user) return null
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

              {/*button for editing profiles*/}
              {this.canModify() &&
              <div className>
                <Link to={`/users/${this.state.user._id}/edit`} className="button is-info">Edit your profile</Link>
              </div>
              }
            </div>


            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-full-desktop">
                  <br />
                  <p className="subtitle is-3">My Cabins</p>
                </div>
                {this.state.user.cabins.map(cabin =>
                  <div key={cabin._id} className="column is-one-third-desktop is-one-third-tablet">
                    <Link to ={`/cabins/${cabin._id}`}>
                      <CabinCard {...cabin} />
                    </Link>
                  </div>
                )}
              </div>


            </div>
          </div>



        </div>

      </section>
    )
  }
}

export default UserShow
