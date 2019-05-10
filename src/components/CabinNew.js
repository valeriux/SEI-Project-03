import React from 'react'
import Auth from '../lib/Auth'
import axios from 'axios'

class CabinNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = {...this.state.data, [e.target.name]: e.target.value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()

    axios.post('api/cabins', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/cabins'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      name="title"
                      placeholder="eg: Sea View Sanctuary"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.title && <div className="help is-danger">{this.state.errors.title}</div>}

                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: https://fkfske.com/images/bollocks.png"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}

                <div className="field">
                  <label className="label">Sleeps</label>
                  <div className="control">
                    <input
                      className="input"
                      name="sleeps"
                      placeholder="eg: 4"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.sleeps && <div className="help is-danger">{this.state.errors.sleeps}</div>}

                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      name="address"
                      placeholder="eg: 1 Seaside Avenue, Hastings, SE1 4NN"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.address && <div className="help is-danger">{this.state.errors.address}</div>}

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <input
                      className="input"
                      name="description"
                      placeholder="eg: Cosy with views"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.description && <div className="help is-danger">{this.state.errors.description}</div>}

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="eg: aiman@example.co.uk"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}

                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CabinNew
