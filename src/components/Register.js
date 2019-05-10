import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
      // errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    const data =  {...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" name="username" placeholder="eg: leela3000" onChange={this.handleChange} />
                  </div>

                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="email" placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange} />
                  </div>

                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" name="password" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>

                </div>

                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input className="input" name="passwordConfirmation" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>

                </div>


                <div className="field">
                  <label className="label">Photo</label>
                  <div className="control">
                    <input className="input" name="photo" placeholder="eg: Upload a photo of yourself" onChange={this.handleChange} />
                  </div>

                </div>


                <div className="field">
                  <label className="label">Bio</label>
                  <div className="control">
                    <input className="input" name="bio" placeholder="eg: Hi. I'm Dave...." onChange={this.handleChange} />
                  </div>

                </div>


                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Register

//       {this.state.errors.username && <div className="help is-danger">{this.state.errors.username}</div>}
// {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
//     {this.state.errors.password && <div className="help is-danger">{this.state.errors.password}</div>}
// {this.state.errors.passwordConfirmation && <div className="help is-danger">{this.state.errors.passwordConfirmation}</div>}
//   {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
//   {this.state.errors.bio && <div className="help is-danger">{this.state.errors.bio}</div>}
