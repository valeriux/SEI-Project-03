import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../lib/Auth'

class Navbar extends React.Component {
  constructor(props){
    super(props)

    this.state = { active: false}
    this.logout = this.logout.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
  }
  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }
  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">

            <Link to="/" >
              <img  className="logo navbar-item" src="https://image.flaticon.com/icons/svg/1348/1348805.svg"/>
            </Link>

            <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>

            <div className="navbar-start">
              <Link to="/cabins">
                <p className="navbar-item">Check out our Cabins!</p>
              </Link>
              {Auth.isAuthenticated() &&
                <Link to="/cabins/new" >
                  <p className="navbar-item">Add a Cabin</p>
                </Link>
              }
            </div>


            <div className="navbar-end">
              {Auth.isAuthenticated() &&
                 <Link to={`/users/${Auth.getPayload().sub}`}>
                   <p className="navbar-item">My Account</p>
                 </Link>
              }
              {!Auth.isAuthenticated() &&
                <Link to="/register">
                  <p className="navbar-item">Register</p>
                </Link>
              }
              {!Auth.isAuthenticated() &&
                 <Link to="/login">
                   <p className="navbar-item">Log in</p>
                 </Link>
              }
              {Auth.isAuthenticated() &&
                <a onClick={this.logout}>
                  <p className="navbar-item">Logout</p>
                </a>
              }
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
